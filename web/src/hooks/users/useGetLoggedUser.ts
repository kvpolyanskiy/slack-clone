import { useAccessTokenQuery } from '../../apollo-client/cache';
import { useGetUserByIdQuery } from '../../generated/graphql';
import { getUserIdFromToken } from '../../helpers';

export const useGetLoggedUser = () => {
  const accessToken = useAccessTokenQuery();
  const {data, loading, error} = useGetUserByIdQuery({
    variables: {
      userId: getUserIdFromToken(accessToken),
    },
  });

  return {
    user: data ? data.getUserById : null,
    loading,
    error,
  };
};
