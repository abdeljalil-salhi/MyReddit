import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import Redis from "ioredis";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

import { COOKIE_NAME, __prod__ } from "./constants";
import { pingResolver } from "./resolvers/ping";
import { PostResolver } from "./resolvers/post";
import { userResolver } from "./resolvers/user";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { Updoot } from "./entities/Updoot";
import { createUserLoader } from "./utils/createUserLoader";
import { createUpdootLoader } from "./utils/createUpdootLoader";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    // database: "postgres",
    // username: "postgres",
    // password: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    // synchronize: true, // setup migrations
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Post, User, Updoot],
  });

  await conn.runMigrations();

  // await Post.delete({}); // turn synchronize to false

  // const orm = await MikroORM.init(mikroConfig);
  // await orm.em.nativeDelete(User, {});
  // await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  // const redis = new Redis({
  //   host: "127.0.0.1",
  //   port: 6379,
  // });
  const redis = new Redis(process.env.REDIS_URL);
  app.set("proxy", 1);
  redis.on("error", (err: any) => console.log("Redis Client Error", err));

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true, // only requests
        sameSite: "lax", // csrf
        secure: __prod__, // only https requests
        domain: __prod__ ? ".myreddit.com" : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [pingResolver, PostResolver, userResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader(),
    }),
  });

  await apolloServer.start();
  // console.log(
  //   "🚀 ~ file: index.ts ~ line 92 ~ main ~ apolloServer",
  //   apolloServer
  // );
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.get("/", (_, res) => {
    res.json({
      status: 200,
      message: "running",
    });
  });

  app.listen(process.env.PORT, () => {
    console.log(`running on localhost:${process.env.PORT}...`);
  });
};

main().catch((err) => {
  console.error(err);
});
