import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";

// import { sleep } from "../utils/sleep";
import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { isAuth } from "../middlewares/isAuth";
import { Updoot } from "../entities/Updoot";
import { User } from "../entities/User";

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() post: Post) {
    return post.text.slice(0, 50);
  }

  @FieldResolver(() => User)
  creator(@Root() post: Post, @Ctx() { userLoader }: MyContext) {
    // return User.findOne(post.creatorId);
    return userLoader.load(post.creatorId);
  }

  @FieldResolver(() => Int, { nullable: true })
  async voteStatus(
    @Root() post: Post,
    @Ctx() { updootLoader, req }: MyContext
  ) {
    if (!req.session.userId) {
      return null;
    }

    const updoot = await updootLoader.load({
      postId: post.id,
      userId: req.session.userId,
    });

    return updoot ? updoot.value : null;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isUpdoot = value !== -1;
    const realValue = isUpdoot ? 1 : -1;
    const userId = req.session.userId;
    const updoot = await Updoot.findOne({ where: { postId, userId } });

    //user already voted
    if (updoot && updoot.value !== realValue) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          UPDATE updoot
          SET value = $1
          WHERE "postId" = $2 AND "userId" = $3
          `,
          [realValue, postId, userId]
        );
        await tm.query(
          `
          UPDATE post
          SET points = points + $1
          WHERE id = $2;
          `,
          [2 * realValue, postId]
        );
      });
    } else if (!updoot) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
          INSERT INTO updoot ("userId", "postId", value)
          VALUES ($1, $2, $3);
          `,
          [userId, postId, realValue]
        );
        await tm.query(
          `
          UPDATE post
          SET points = points + $1
          WHERE id = $2;
          `,
          [realValue, postId]
        );
      });
    }

    // await Updoot.insert({
    //   userId,
    //   postId,
    //   value: realValue,
    // });

    return true;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
    // @Ctx() { req }: MyContext
  ): Promise<PaginatedPosts> {
    // await sleep(100);

    // user asks for {limit} posts
    const realLimit = Math.min(50, limit);
    const hasMoreLimit = Math.min(50, limit) + 1;
    // fetch {limit + 1} posts to check if there are more posts
    const replacements: any[] = [hasMoreLimit];
    // if (req.session.userId) {
    //   replacements.push(req.session.userId);
    // }
    // let cursorIndex: number = 3;
    if (cursor) {
      // cursorIndex = replacements.length;
      replacements.push(new Date(parseInt(cursor)));
    }

    // - after select p.*
    // ,json_build_object(
    //   'id', u.id,
    //   'username', u.username,
    //   'email', u.email,
    //   'createdAt', u."createdAt",
    //   'updatedAt', u."updatedAt"
    // ) creator,
    // ${
    //   req.session.userId
    //     ? `
    // (
    //   SELECT value
    //   FROM updoot
    //   WHERE "userId" = $2 AND "postId" = p.id
    // ) "voteStatus"`
    //     : 'null as "voteStatus"'
    // }
    // - after from post p
    // INNER JOIN public.user u ON u.id = p."creatorId"
    const posts = await getConnection().query(
      `
      SELECT p.*
      FROM post p
      ${cursor ? `WHERE p."createdAt" < $2` : ""}
      ORDER BY p."createdAt" DESC
      LIMIT $1
    `,
      replacements
    );

    // const qb = getConnection()
    //   .getRepository(Post)
    //   .createQueryBuilder("p")
    //   .orderBy('"createdAt"', "DESC")
    //   .take(hasMoreLimit);
    // apply cursor if provided
    // if (cursor) {
    //   qb.where('"createdAt" < :cursor', {
    //     cursor: new Date(parseInt(cursor)),
    //   });
    // }
    // $posts contains {limit + 1} posts
    // const posts = await qb.getMany();
    // slice posts to get only {limit} posts
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === hasMoreLimit,
    };

    // return Post.find(); // get all posts
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
    // return Post.findOne(id, { relations: ["creator"] });
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      ...input,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("text") text: string,
    @Ctx() { req }: MyContext
  ): Promise<Post | null> {
    const result = await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({ title, text })
      .where('id = :id AND "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    try {
      const post = await Post.findOne(id);
      if (!post) {
        return false;
      }
      if (post.creatorId !== req.session.userId) {
        throw new Error("not authorized");
      }
      // await Updoot.delete({ postId: id });
      await Post.delete({ id, creatorId: req.session.userId });
      return true;
    } catch (e) {
      return false;
    }
  }
}
