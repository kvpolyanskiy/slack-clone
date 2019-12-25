import { Home, Register, Login, CreateWorkspace } from '../pages';

export const routerConfig = {
  defaultRoute: '/home',
  loginRoute: '/login',
  routes: [
    {
      path: '/home',
      pageComponent: Home,
    },
    {
      path: '/create-workspace',
      pageComponent: CreateWorkspace,
    },
    {
      path: '/register',
      pageComponent: Register,
      public: true,
    },
    {
      path: '/login',
      pageComponent: Login,
      public: true,
    },
  ],
};
