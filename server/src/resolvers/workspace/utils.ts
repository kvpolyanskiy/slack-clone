import { Workspace } from '../../entities';

export const isWorkspaceExists = (workspaceName: string) => Workspace.findOne({name: workspaceName});
