import { Request, Response } from 'express';
import { AuthChecker } from 'type-graphql';
import { sign, verify } from 'jsonwebtoken';
import { User } from '../entities';
import { Token, TokenResponse, Context } from '../types';

const SEVEN_DAYS = 60 * 60 * 24 * 7 * 1000;

export class AuthService {
  static createAccessToken({userId, email, username}: User) {
    return sign(
      {userId, email, username},
      process.env.ACCESS_TOKEN_SECRET!,
      {expiresIn: '15m'},
    );
  }

  static createRefreshToken({userId, email, username, tokenVersion}: User) {
    return sign(
      {userId, email, username, tokenVersion},
      process.env.REFRESH_TOKEN_SECRET!,
      {expiresIn: '7d'},
    );
  }

  static getNewTokenFailed(): TokenResponse {
    return {ok: false, accessToken: ''};
  }

  static getNewTokenSuccess(user: User): TokenResponse {
    return {ok: true, accessToken: AuthService.createAccessToken(user)};
  }

  static setRefreshToken(res: Response, token: string) {
    res.cookie('jid', token, {
      httpOnly: true,
      expires: new Date(Date.now() + SEVEN_DAYS),
    });
  }

  static async refreshToken(req: Request, res: Response) {
    const { jid } = req.cookies;

    if (!jid) {
      res.json(AuthService.getNewTokenFailed());
      return;
    }

    try {
      const {userId, tokenVersion} = verify(jid, process.env.REFRESH_TOKEN_SECRET!) as Token;
      const user = await User.findOneOrFail({userId});

      if (tokenVersion !== user.tokenVersion) {
        res.json(AuthService.getNewTokenFailed());
        return;
      }

      AuthService.setRefreshToken(res, AuthService.createRefreshToken(user));
      res.json(AuthService.getNewTokenSuccess(user));
    } catch {
      res.json(AuthService.getNewTokenFailed());
    }
  }

  static getToken(req: Request) {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return null;
    }

    return authorization.split(' ')[1];
  }

  static isAuth: AuthChecker<Context> = ({ context }) => {
    return !!context.req.user;
  }
}
