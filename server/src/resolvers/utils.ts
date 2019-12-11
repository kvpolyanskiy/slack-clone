import { User } from '../entities';

export const isUserNameExists = (username: string) => User.findOne({username});
export const isEmailNameExists = (email: string) => User.findOne({email});
