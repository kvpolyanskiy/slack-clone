import React, { useCallback } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routerConfig } from '../routerConfig';
import { getAccessToken } from '../../apollo-client/cache/access-token';
interface Props {
  component: React.ReactType;
  path: string;
}

export const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {

  const render = useCallback((props: {})  => (
    getAccessToken()
      ? <Component {...props} />
      : <Redirect to={routerConfig.loginRoute} />
  ), [],
  );

  return (
    <Route {...rest} render={render} />
  );
};
