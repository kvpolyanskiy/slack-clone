import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { routerConfig } from './routerConfig';

export const Router: React.FC = () => {
    return (
      <BrowserRouter>
        <Switch>
          {routerConfig.routes.map((route) => (
            route.public
              ? <Route key={route.path} path={route.path} component={route.pageComponent} />
              : <ProtectedRoute key={route.path} path={route.path} component={route.pageComponent} />
          ))}
          <Route
            exact
            path="/"
          >
            <Redirect to={routerConfig.defaultRoute} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
};
