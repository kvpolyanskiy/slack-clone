import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export const Router: React.FC = () => {
    return (
      <BrowserRouter>
        <Switch>
          {routerConfig.routes.map(({path, pageComponent}) => (
            <Route key={path} path={path} component={pageComponent} />
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
