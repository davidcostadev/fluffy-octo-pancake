import { hash } from 'bcryptjs';
import { arg, mutationField, nonNull } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

import { sendVerifyEmail } from 'graphql/managers/email/sendVerifyEmail';
import lang from 'lang';

export const AuthRegisterMutation = mutationField('authRegister', {
  type: 'String',
  args: {
    input: nonNull(arg({ type: 'AuthRegisterInput' })),
  },
  resolve: async (_parent, { input: { password, email, firstName, lastName } }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const hashToVerifyEmail = uuidv4();

    const foundEmail = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (foundEmail) {
      throw new Error(lang.register.error_email_has_been_found);
    }

    await ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        hashToVerifyEmail,
        password: hashedPassword,
        hasVerifiedEmail: false,
      },
    });

    sendVerifyEmail({
      firstName,
      email,
      hash: hashToVerifyEmail,
    });

    return 'OK';
  },
});
