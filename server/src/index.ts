import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { TestResolver } from './resolvers';

(async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [TestResolver]}),
  });

  apolloServer.applyMiddleware({app});

  app.listen({port: process.env.PORT}, () => {
    console.log(`Server ready at port: ${process.env.PORT}`);
  });
})();
