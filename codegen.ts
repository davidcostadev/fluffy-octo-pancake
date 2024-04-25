import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/generated/schema.graphql',
  documents: ['src/services/graphql/gqls/**/*.(tsx|ts)'],
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    './src/services/graphql/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        scalars: {
          DateTime: 'string',
          UUID: 'string',
        },
      },
    },
    './src/services/graphql/hooks.ts': {
      plugins: ['typescript-react-apollo'],
      preset: 'import-types',
      presetConfig: {
        typesPath: './types',
      },
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
        scalars: {
          DateTime: 'string',
          UUID: 'string',
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
