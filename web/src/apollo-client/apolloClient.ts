import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import { refreshTokenLink } from './refreshTokenLink';
import { requestLink } from './requestLink';
import { httpLink } from './httpLink';
import { cache, resolvers } from './cache';
import { wsLink } from './wsLink';

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    refreshTokenLink,
    requestLink,
    ApolloLink.split(
      ({ query }) => {
        const definition = getMainDefinition(query);

        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    ),
  ]),
  resolvers,
});
