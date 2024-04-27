import { sign } from 'jsonwebtoken';
import { mutationField } from 'nexus';

import { APP_SECRET, getUserId } from 'graphql/utils/auth-helpers';

export const AuthSessionUpdateMutation = mutationField('authSessionUpdate', {
  type: 'AuthSessionUpdateResult',
  args: {},
  resolve: async (_parent, _arg, ctx) => {
    const user = await getUserId(ctx);

    const token = sign({ userId: user.id }, APP_SECRET);

    return {
      token,
      user: { data: user },
    };
  },
});
