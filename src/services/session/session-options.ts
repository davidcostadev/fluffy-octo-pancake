import { SessionOptions } from 'iron-session';

import { User } from 'services/graphql/types';

export type UserFromSession = Pick<User, 'createdAt' | 'email' | 'firstName' | 'id' | 'lastName' | 'updatedAt'>;

export interface SessionData {
  user?: UserFromSession;
  token?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_KEY ?? 'secret_key_with_min_32_characters',
  cookieName: 'davidcosta_todo',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};
