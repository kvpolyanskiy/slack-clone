import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';

import { refreshTokenLink } from './refreshTokenLink';
import { requestLink } from './requestLink';
import { httpLink } from './httpLink';
import { cache, resolvers, typeDefs } from './cache';

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    refreshTokenLink,
    requestLink,
    httpLink,
  ]),
  resolvers,
  typeDefs,
});
