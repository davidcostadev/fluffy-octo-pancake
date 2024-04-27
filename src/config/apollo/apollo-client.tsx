import { HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { NextSSRApolloClient, NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';

// import { getIronSession } from 'iron-session';
// import { cookies } from 'next/headers';
// import { SessionData, sessionOptions } from 'services/session/session-options';

const authLink = setContext(async (_, context) => {
  // const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  // const accessToken = session.token ? session.token : null;

  const accessToken = null;

  return {
    headers: {
      ...context.headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SELF_API_URL,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
