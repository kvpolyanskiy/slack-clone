import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apolloClient';
import { Router } from './router';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
  </ApolloProvider>
  );
};

export default App;
