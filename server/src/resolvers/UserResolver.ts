import { hash, compare } from 'bcryptjs';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { User, LoginResponse } from '../entities';
import {AuthService } from '../auth';
import { Context } from '../types';
import { isUserNameExists, isEmailNameExists } from './utils';

const SALT_LENGTH = 12;

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    if (await isUserNameExists(username)) {
      throw new UserInputError('Username already exists.');
    }

    if (await isEmailNameExists(email)) {
      throw new UserInputError('Email already exists.');
    }

    const hashedPassword = await hash(password, SALT_LENGTH);

    try {
      return await User.insert({
        username,
        email,
        password: hashedPassword,
      });
    } catch {
      throw new Error('Something went wrong, try again.');
    }
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() {res}: Context,
  ): Promise<LoginResponse> {
    const user = await User.findOneOrFail({email});
    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new UserInputError('Login or email is not correct.');
    }

    AuthService.setRefreshToken(res, AuthService.createRefreshToken(user));

    return {
      accessToken: AuthService.createAccessToken(user),
    };
  }

  @Mutation(() => Boolean)
  logout(
    @Ctx() {res}: Context,
  ) {
    AuthService.setRefreshToken(res, '');
    return true;
  }
}
