import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { createContext } from 'graphql/context';
import { schema } from 'graphql/schema';
import { NextRequest } from 'next/server';

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: createContext,
});

export { handler as GET, handler as POST };
