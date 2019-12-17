import { Request, Response } from 'express';
import { Token } from './Token';

interface IRequest extends Request {
  user?: Token;
}

export interface Context {
  req: IRequest;
  res: Response;
}
