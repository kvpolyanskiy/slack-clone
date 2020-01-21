import 'dotenv/config';
import 'reflect-metadata';
import path from 'path';
import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';
import cookieParser from 'cookie-parser';
import http from 'http';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { AuthService } from './auth';

(async () => {
  const app = express();
  app.use(cors({
    origin: process.env.CLIENT_HOST,
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
      resolvers: [path.join(__dirname, 'resolvers/**/*.ts')],
      authChecker: AuthService.isAuth,
    }),
    context: ({req, res}) => ({req, res}),
    subscriptions: {
      onConnect: async ({authorization}: any) => {
        try {
          const decodedAccessToken = await AuthService.validateAccessToken(authorization);
          if (decodedAccessToken) {
            return decodedAccessToken;
          }
        } catch {
          throw new Error('Not authorized.');
        }
      },
    },
  });

  apolloServer.applyMiddleware({app, cors: false});

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({port: process.env.PORT}, () => {
    console.log(`Server ready at port: ${process.env.PORT}`);
  });
})();
