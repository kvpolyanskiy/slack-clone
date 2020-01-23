import { WebSocketLink } from 'apollo-link-ws';
import { getAccessToken } from './cache/access-token';

export const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SUBSCRIPTIONS_URI as string,
  options: {
    reconnect: true,
    connectionParams: () => {
      const accessToken = getAccessToken();
      return {
        authorization:  accessToken ? `Bearer ${accessToken}` : '',
      };
    },
  },
});
