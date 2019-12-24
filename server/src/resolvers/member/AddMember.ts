import { Resolver, Mutation, Arg, Authorized } from 'type-graphql';

import { User, Workspace, Member } from '../../entities';

@Resolver()
export class AddMemberByNameResolver {
  @Authorized()
  @Mutation(() => Member)
  async addMemberByName(
    @Arg('username') username: string,
    @Arg('workspaceName') workspaceName: string,
  ): Promise<Member> {
    const {userId} = await User.findOneOrFail({username});
    const {id: workspaceId} = await Workspace.findOneOrFail({name: workspaceName});
    const member = Member.create({userId, workspaceId});

    return member.save();
  }
}
