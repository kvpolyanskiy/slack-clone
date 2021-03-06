import { cache } from '../cache';
import { GET_ACCESS_TOKEN } from '../queries/tokenQueries';

export const getAccessToken = () => {
  const {accessToken} = cache.readQuery<{accessToken: string}>({query: GET_ACCESS_TOKEN})!;
  return accessToken;
};
