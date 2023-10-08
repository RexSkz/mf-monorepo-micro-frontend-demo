import { lazy } from 'react';

export const routes = [
  {
    path: '/about',
    exact: true,
    component: lazy(() => import('./pages/about'))
  },
];
