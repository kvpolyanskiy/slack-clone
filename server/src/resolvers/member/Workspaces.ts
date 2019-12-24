import { Resolver, Authorized, Ctx, Query } from 'type-graphql';

import { Workspace, Member } from '../../entities';
import { Context } from '../../types';

@Resolver()
export class CreateWorkspaceResolver {
  @Authorized()
  @Query(() => [Workspace])
  async workspaces(
    @Ctx() {req: {user}}: Context,
  ): Promise<Workspace[]> {
    const membersQb = Member
      .createQueryBuilder('members')
      .select('members.workspaceId')
      .where('members.userId = :userId', {userId: user!.userId});

    const workspaces = await Workspace
      .createQueryBuilder('workspaces')
      .where(`workspaces.id IN (${membersQb.getQuery()}) OR workspaces.ownerId = :userId`, {userId: user!.userId})
      .setParameters(membersQb.getParameters())
      .getMany();

    return workspaces;
  }
}
