import { mutationField, nonNull, stringArg } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

import { sendChangePasswordRequest } from 'graphql/managers/email/sendChangePasswordRequest';

export const AuthRequestChangePasswordMutation = mutationField('authRequestChangePassword', {
  type: 'String',
  args: {
    email: nonNull(stringArg()),
  },
  resolve: async (_parent, { email }, ctx) => {
    const searchUser = await ctx.prisma.user.findUnique({ where: { email } });

    if (!searchUser) {
      // We should not inform if the email exists or not
      return 'OK';
    }

    const hashToChangePassword = uuidv4();

    await ctx.prisma.user.update({
      where: {
        id: searchUser.id,
      },
      data: { hashToChangePassword },
    });

    await sendChangePasswordRequest({
      firstName: searchUser.firstName,
      email: searchUser.email,
      hash: hashToChangePassword,
    });

    return 'OK';
  },
});
