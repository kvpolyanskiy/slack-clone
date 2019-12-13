import 'typeface-roboto';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client/apolloClient';
import { Router } from './router';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Router />
  </ApolloProvider>
  );
};

export default App;
