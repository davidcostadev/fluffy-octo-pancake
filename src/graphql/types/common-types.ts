import { enumType, inputObjectType } from 'nexus';

export const PaginationInput = inputObjectType({
  name: 'PaginationInput',
  definition(t) {
    t.int('page');
    t.int('limit');
  },
});

export const SortingOrder = enumType({
  name: 'SortingOrder',
  members: {
    DESC: 'desc',
    ASC: 'asc',
  },
});
