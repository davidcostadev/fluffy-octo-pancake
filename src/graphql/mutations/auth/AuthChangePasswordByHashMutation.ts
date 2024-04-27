import { hash } from 'bcryptjs';
import { mutationField, nonNull, stringArg } from 'nexus';

import { sendPasswordChangedNotification } from 'graphql/managers/email/sendPasswordChangedNotification';
import lang from 'lang';

export const AuthChangePasswordByHashMutation = mutationField('authChangePasswordByHash', {
  type: 'String',
  args: {
    hash: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  resolve: async (_parent, { hash: hashToChangePassword, password }, ctx) => {
    const searchUser = await ctx.prisma.user.findUnique({ where: { hashToChangePassword } });

    if (!searchUser) {
      throw new Error(lang.change_password.error_invalid_hash);
    }

    const hashedPassword = await hash(password, 10);

    await ctx.prisma.user.update({
      where: {
        id: searchUser.id,
      },
      data: { password: hashedPassword, hashToChangePassword: null },
    });

    sendPasswordChangedNotification({
      firstName: searchUser.firstName,
      email: searchUser.email,
    });

    return 'OK';
  },
});
