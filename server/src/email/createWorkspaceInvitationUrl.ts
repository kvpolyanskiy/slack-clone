import { v4 } from 'uuid';
import { redis } from '../redis';

export const createWorkspaceInvitationUrl = async (userId: string, workspaceId: string) => {
  const token = v4();
  await redis.set(token, JSON.stringify({userId, workspaceId}), 'ex', 60 * 60 * 24);

  return `${process.env.CLIENT_HOST}/workspace-invitation/${token}`;
};
