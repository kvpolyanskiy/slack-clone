import { hash, compare } from 'bcryptjs';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';

import { User, LoginResponse } from '../entities';
import {AuthService } from '../auth';
import { Context } from '../types';

const SALT_LENGTH = 12;

@Resolver()
export class UserResolver {
  // TODO: Implement error handling
  @Mutation(() => Boolean)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    const hashedPassword = await hash(password, SALT_LENGTH);

    try {
      await User.insert({
        username,
        email,
        password: hashedPassword,
      });
    } catch {
      return false;
    }

    return true;
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
      throw new Error('Login or email is not correct');
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
