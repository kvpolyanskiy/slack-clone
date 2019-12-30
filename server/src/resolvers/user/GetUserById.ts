import { Resolver, Query, Arg, Authorized } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { User } from '../../entities';

@Resolver()
export class GetUserByIdResolver {
  @Authorized()
  @Query(() => User)
  async getUserById(
    @Arg('userId') userId: string,
  ): Promise<User> {
    const user = await User.findOne({userId});

    if (!user) {
      throw new UserInputError(`Cannot find user with id ${userId}`);
    }

    return user;
  }
}
