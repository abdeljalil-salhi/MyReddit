import { Query, Resolver } from "type-graphql";

@Resolver()
export class pingResolver {
  @Query(() => String)
  ping() {
    return "pong!";
  }
}
