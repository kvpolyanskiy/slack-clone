import { Resolver, Mutation, Arg } from 'type-graphql';
import { sendEmail, createWorkspaceInvitationUrl } from '../../email';
import { User, Workspace } from '../../entities';

@Resolver()
export class InviteToWorkspaceResolver {
  @Mutation(() => Boolean)
  async inviteToWorkspace(
    @Arg('email') email: string,
    @Arg('workspaceId') workspaceId: string,
  ): Promise<boolean> {
    const user = await User.findOneOrFail({email});
    const workspace = await Workspace.findOneOrFail({id: workspaceId});

    await sendEmail(
      user.email,
      await createWorkspaceInvitationUrl(user.userId, workspaceId),
      `Invitation to ${workspace.name} workspace`,
    );

    return true;
  }
}
