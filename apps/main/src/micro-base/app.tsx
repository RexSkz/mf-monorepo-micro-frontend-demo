import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { routes } from './index';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  children={<route.component />}
                />
              ))
            }
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}
