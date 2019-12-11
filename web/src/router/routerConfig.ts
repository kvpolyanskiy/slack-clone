import { Home, Register, Login } from '../pages';

export const routerConfig = {
  defaultRoute: '/home',
  routes: [
    {
      path: '/home',
      pageComponent: Home,
    },
    {
      path: '/register',
      pageComponent: Register,
    },
    {
      path: '/login',
      pageComponent: Login,
    },
  ],
};
