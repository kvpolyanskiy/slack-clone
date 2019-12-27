import { InMemoryCache } from 'apollo-cache-inmemory';

export const cache = new InMemoryCache({
  addTypename: false,
});

cache.writeData({
  data: {
    accessToken: null,
    selectedWorkspace: null,
  },
});
