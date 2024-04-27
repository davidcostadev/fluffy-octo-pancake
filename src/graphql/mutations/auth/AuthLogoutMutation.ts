import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { mutationField } from 'nexus';

import { SessionData, sessionOptions } from 'services/session/session-options';

export const AuthLogoutMutation = mutationField('authLogout', {
  type: 'String',
  args: {},
  resolve: async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    session.destroy();

    return 'OK';
  },
});
