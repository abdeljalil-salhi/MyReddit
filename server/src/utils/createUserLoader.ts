import DataLoader from "dataloader";

import { User } from "../entities/User";

// **************************************************
// we pass the keys (userIds) to the batch function
// [1, 78, 8, 9]
// then it returns the objects
// [{...user1}, {...user2}, {...user3}, {...user4}]
// **************************************************

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    
    users.forEach((user) => {
      userIdToUser[user.id] = user;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });
