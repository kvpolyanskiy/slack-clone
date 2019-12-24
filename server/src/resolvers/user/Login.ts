import { compare } from 'bcryptjs';
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { User, LoginResponse } from '../../entities';
import {AuthService } from '../../auth';
import { Context } from '../../types';

@Resolver()
export class LoginResolver {
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
}
