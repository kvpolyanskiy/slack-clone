import { InMemoryCache } from 'apollo-cache-inmemory';

export const cache = new InMemoryCache({});

cache.writeData({
  data: {
    accessToken: null,
  },
});
