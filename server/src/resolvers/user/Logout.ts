import { Resolver, Mutation, Ctx } from 'type-graphql';

import {AuthService } from '../../auth';
import { Context } from '../../types';

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  logout(
    @Ctx() {res}: Context,
  ) {
    AuthService.setRefreshToken(res, '');
    return true;
  }
}
