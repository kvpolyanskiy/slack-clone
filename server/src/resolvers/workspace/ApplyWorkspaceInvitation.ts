import { Resolver, Mutation, Arg } from 'type-graphql';
import { redis } from '../../redis';
import { Member } from '../../entities';

@Resolver()
export class ApplyWorkspaceInvitationResolver {
  @Mutation(() => Boolean)
  async applyWorkspaceInvitation(
    @Arg('token') token: string,
  ): Promise<boolean> {
    const value = await redis.get(token);

    if (!value) {
      return false;
    }

    const {userId, workspaceId} = JSON.parse(value);

    await Member.create({userId, workspaceId}).save();
    await redis.del(token);

    return true;
  }
}
