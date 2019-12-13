import { ApolloLink, Observable, Operation } from 'apollo-link';
import { getAccessToken } from './cache/access-token';

const request = async (operation: Operation) => {
  const accessToken = getAccessToken();

  operation.setContext({
    headers: {
      authorization:  accessToken ? `Bearer ${accessToken}` : '',
    },
  });
};

export const requestLink = new ApolloLink((operation, forward) =>
  new Observable((observer) => {
    let handle: any;

    Promise.resolve(operation)
      .then((oper) => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) {
        handle.unsubscribe();
      }
    };
  }),
);
