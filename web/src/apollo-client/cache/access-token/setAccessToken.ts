import { cache } from '../cache';
import { GET_ACCESS_TOKEN } from '../queries/tokenQueries';

export const setAccessToken = (accessToken: string): void => {
  cache.writeQuery({query: GET_ACCESS_TOKEN, data: {accessToken}});
};
