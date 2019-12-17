import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { TestResolver, UserResolver } from './resolvers';
import { AuthService } from './auth';

(async () => {
  const app = express();
  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }));
  app.use(cookieParser());
  app.use(jwt({
    secret: process.env.ACCESS_TOKEN_SECRET!,
    getToken: AuthService.getToken,
    credentialsRequired: false,
  }));

  app.post('/refresh-token', AuthService.refreshToken);

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        TestResolver,
      ],
      authChecker: AuthService.isAuth,
    }),
    context: ({req, res}) => ({req, res}),
  });

  apolloServer.applyMiddleware({app, cors: false});

  app.listen({port: process.env.PORT}, () => {
    console.log(`Server ready at port: ${process.env.PORT}`);
  });
})();
