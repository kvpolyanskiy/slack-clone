import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import { getAccessToken, setAccessToken } from './cache/access-token';

const isTokenValidOrUndefined = () => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return true;
  }

  try {
    const {exp} = jwtDecode(accessToken);

    if (Date.now() >=  exp * 1000) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
};

const fetchAccessToken = () => {
  return fetch(
    process.env.REACT_APP_GRAPHQL_REFRESH_TOKEN_URI!,
    {credentials: 'include', method: 'POST'},
  );
};

const handleFetch = (accessToken: string) => {
  setAccessToken(accessToken);
};

export const refreshTokenLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined,
  fetchAccessToken,
  handleFetch,
});
