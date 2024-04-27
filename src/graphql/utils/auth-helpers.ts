import { User } from '@prisma/client';
import { AuthenticationError } from 'apollo-server-errors';
import { verify } from 'jsonwebtoken';
import lang from 'lang';

import { Context } from 'graphql/context';

const { SECRET_KEY } = process.env;
export const APP_SECRET = SECRET_KEY || 'secret';

interface Token {
  userId: string;
}

export async function getUserId(context: Context): Promise<User> {
  const Authorization = context.req.headers.authorization;

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;

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
  throw new AuthenticationError(lang.authentication.header_invalid);
}
