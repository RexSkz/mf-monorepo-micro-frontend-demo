import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

export const bootstrap = () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<React.StrictMode><App /></React.StrictMode>);
};

interface RouteType {
  path: string;
  exact?: boolean;
  component: React.FC;
}

export const routes: RouteType[] = [];

export const addRoutes = (data: RouteType[]) => {
  for (const { path, exact, component } of data) {
    routes.push({
      path,
      exact,
      component
    });
  };
};
