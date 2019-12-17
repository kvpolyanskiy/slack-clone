import { User, Workspace } from '../entities';

export const isUserNameExists = (username: string) => User.findOne({username});
export const isEmailNameExists = (email: string) => User.findOne({email});

export const isWorkspaceExists = (workspaceName: string) => Workspace.findOne({name: workspaceName});
