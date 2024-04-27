import { User } from '@prisma/client';
import { AuthenticationError } from 'apollo-server-errors';
import { getIronSession } from 'iron-session';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

import { Context } from 'graphql/context';
import lang from 'lang';
import { SessionData, sessionOptions } from 'services/session/session-options';

const { SECRET_KEY } = process.env;
export const APP_SECRET = SECRET_KEY || 'secret';

interface Token {
  userId: string;
}

export async function getUserId(context: Context): Promise<User> {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const authorization = context.req.headers.get('Authorization');
  console.log(authorization);

  let accessToken: string | null = null;

  if (session.token) {
    accessToken = session.token;
  } else if (authorization) {
    accessToken = authorization.replace('Bearer ', '');
  }

  if (accessToken) {
    const verifiedToken = verify(accessToken, APP_SECRET) as Token;

    const userId = verifiedToken && verifiedToken.userId;
    if (userId) {
      const data = await context.prisma.user.findUnique({ where: { id: userId } });
      if (!data) {
        throw new AuthenticationError(lang.authentication.user_invalid);
      }
      return data;
    } else {
      throw new AuthenticationError(lang.authentication.token_invalid);
    }
  }
  throw new AuthenticationError(lang.authentication.session_invalid);
}
