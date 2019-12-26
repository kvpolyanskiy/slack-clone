import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { routerConfig } from './routerConfig';
import { setAccessToken } from '../apollo-client/cache/access-token';

export const Router: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_GRAPHQL_REFRESH_TOKEN_URI!, {
        method: 'POST',
        credentials: 'include',
      });

      const {accessToken} = await response.json();
      setAccessToken(accessToken);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        {Object.values(routerConfig.routes).map((route) => (
          route.public
            ? <Route key={route.path} path={route.path} component={route.pageComponent} />
            : <ProtectedRoute key={route.path} path={route.path} component={route.pageComponent} />
        ))}
        <Route
          exact
          path="/"
        >
          <Redirect to={routerConfig.routes.home.path} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
