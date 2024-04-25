'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient(token?: string | null) {
  return () => {
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_SELF_API_URL,
    });

    const authLink = setContext((_, context) => {
      return {
        headers: {
          ...context.headers,
          authorization: token ? `Bearer ${token}` : '2',
        },
      };
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === 'undefined'
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              authLink.concat(httpLink),
            ])
          : authLink.concat(httpLink),
    });
  };
}

export function ApolloWrapper({ children, token }: React.PropsWithChildren<{ token?: string | null }>) {
  return <ApolloNextAppProvider makeClient={makeClient(token)}>{children}</ApolloNextAppProvider>;
}
