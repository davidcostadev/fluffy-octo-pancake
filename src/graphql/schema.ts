import { GraphQLScalarType } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { DateTimeResolver } from 'graphql-scalars';
import { asNexusMethod, makeSchema, scalarType } from 'nexus';
// import NexusPrismaScalars from 'nexus-prisma/scalars';
import * as path from 'path';

// import * as inputs from './inputs';
// import * as Mutations from './mutations';
import * as Queries from './queries';
import * as tasks from './types';

const UUID = scalarType({
  ...GraphQLUUID,
  name: 'UUID', // You can rename it if you wish
  sourceType: 'string',
});

const dateTimeScalar = new GraphQLScalarType(DateTimeResolver);

export const schema = makeSchema({
  types: [
    // NexusPrismaScalars,
    UUID,
    asNexusMethod(dateTimeScalar, 'dateTime', 'string | Date'),
    ...Object.values(Queries),
    // ...Object.values(Mutations),
    // ...Object.values(inputs),
    ...Object.values(tasks),
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'src/graphql/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'src/graphql/generated/schema.graphql'),
  },
  // contextType: {
  //   module: require.resolve('./context'),
  //   alias: 'Context',
  //   export: 'Context',
  // },
});
