import { ValidationError } from 'apollo-server-errors';
import { mutationField, nonNull, stringArg } from 'nexus';

import { sendWelcomeMessage } from 'graphql/managers/email/sendWelcomeMessage';
import lang from 'lang';

export const AuthConfirmEmailByHashMutation = mutationField('authConfirmEmailByHash', {
  type: 'String',
  args: {
    hash: nonNull(stringArg()),
  },
  resolve: async (_parent, { hash }, ctx) => {
    const searchUser = await ctx.prisma.user.findUnique({
      where: { hashToVerifyEmail: hash },
    });

    if (!searchUser) {
      throw new ValidationError(lang.confirm_email.error_hash_invalid);
    }

    await ctx.prisma.user.update({
      where: {
        id: searchUser.id,
      },
      data: { hasVerifiedEmail: true, hashToVerifyEmail: null },
    });

    await sendWelcomeMessage({
      firstName: searchUser.firstName,
      email: searchUser.email,
    });

    return 'OK';
  },
});
