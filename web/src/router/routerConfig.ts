import { Home, Register } from '../pages';

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
  ],
};
