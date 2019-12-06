import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { TestResolver, UserResolver } from './resolvers';
import { AuthService } from './auth';

(async () => {
  const app = express();

  app.use(cookieParser());
  app.post('/refresh-token', AuthService.refreshToken);

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        TestResolver,
      ],
    }),
    context: ({req, res}) => ({req, res}),
  });

  apolloServer.applyMiddleware({app});

  app.listen({port: process.env.PORT}, () => {
    console.log(`Server ready at port: ${process.env.PORT}`);
  });
})();
