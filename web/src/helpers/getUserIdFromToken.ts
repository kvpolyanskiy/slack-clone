import { decode } from 'jsonwebtoken';

export const getUserIdFromToken = (token: string): string => {
  const decodedToken: any = decode(token);
  return decodedToken ? decodedToken.userId : '';
};
