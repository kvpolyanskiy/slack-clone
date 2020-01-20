import { Home, Register, Login, CreateWorkspace, WorkspaceInvitation } from '../pages';

interface Route {
  path: string;
  pageComponent: React.ComponentType;
  public?: boolean;
}

interface IRouteConfig {
  routes: {[key: string]: Route};
}

export const routerConfig: IRouteConfig = {
  routes: {
    home: {
      path: '/home',
      pageComponent: Home,
    },
    createWorkspace: {
      path: '/create-workspace',
      pageComponent: CreateWorkspace,
    },
    register: {
      path: '/register',
      pageComponent: Register,
      public: true,
    },
    login: {
      path: '/login',
      pageComponent: Login,
      public: true,
    },
    workspaceInvitation: {
      path: '/workspace-invitation/:id',
      pageComponent: WorkspaceInvitation,
      public: true,
    },
  },
};
