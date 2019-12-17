import { Home, Register, Login } from '../pages';

export const routerConfig = {
  defaultRoute: '/home',
  loginRoute: '/login',
  routes: [
    {
      path: '/home',
      pageComponent: Home,
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
