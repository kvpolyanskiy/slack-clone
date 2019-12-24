import { hash } from 'bcryptjs';
import { Resolver, Mutation, Arg} from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { User } from '../../entities';
import { isUserNameExists, isEmailNameExists } from './utils';
import { RegisterInput } from './inputs';

const SALT_LENGTH = 12;

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('input') {username, email, password}: RegisterInput,
  ) {
    if (await isUserNameExists(username)) {
      throw new UserInputError('Username already exists.');
    }

    if (await isEmailNameExists(email)) {
      throw new UserInputError('Email already exists.');
    }

    const hashedPassword = await hash(password, SALT_LENGTH);
    const user = await User.create({username, email, password: hashedPassword});

    try {
      return user.save();
    } catch {
      throw new Error('Something went wrong, try again.');
    }
  }
}
