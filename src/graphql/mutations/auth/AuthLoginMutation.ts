import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { arg, mutationField, nonNull } from 'nexus';

import { APP_SECRET } from 'graphql/utils/auth-helpers';
import lang from 'lang';

const { ENABLE_ONLY_VERIFIED_EMAILS_TO_LOGIN } = process.env;

export const AuthLoginMutation = mutationField('authLogin', {
  type: 'AuthLoginResult',
  args: {
    input: nonNull(arg({ type: 'AuthLoginInput' })),
  },
  resolve: async (_parent, { input: { email, password } }, ctx) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error(lang.login.error_email_or_password_invalid);
    }

    const passwordValid = await compare(password, user.password);

    if (!passwordValid) {
      throw new Error(lang.login.error_email_or_password_invalid);
    }

    if (ENABLE_ONLY_VERIFIED_EMAILS_TO_LOGIN === 'true' && !user.hasVerifiedEmail) {
      throw new Error(lang.login.error_email_has_not_been_confirmed);
    }

    const userUpdated = await ctx.prisma.user.update({
      data: {
        lastLogin: new Date().toISOString(),
      },
      where: {
        id: user.id,
      },
    });

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user: userUpdated,
    };
  },
});
