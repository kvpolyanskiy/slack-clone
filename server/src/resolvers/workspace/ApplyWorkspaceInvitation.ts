import { Resolver, Mutation, Arg } from 'type-graphql';
import { redis } from '../../redis';
import { Member, Workspace } from '../../entities';
import { UserInputError } from 'apollo-server-express';

@Resolver()
export class ApplyWorkspaceInvitationResolver {
  @Mutation(() => Workspace)
  async applyWorkspaceInvitation(
    @Arg('token') token: string,
  ): Promise<Workspace> {
    const value = await redis.get(token);

    if (!value) {
      throw new UserInputError('Token is wrong try to get a new one.');
    }

    const {userId, workspaceId} = JSON.parse(value);
    const workspace = await Workspace.findOneOrFail({id: workspaceId});
    await Member.create({userId, workspaceId}).save();
    await redis.del(token);

    return workspace;
  }
}
