import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

import { SessionData, sessionOptions } from './session-options';

export const getSession = async () => {
  return await getIronSession<SessionData>(cookies(), sessionOptions);
};
