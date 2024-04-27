import type { Prisma } from '@prisma/client';
import { queryField } from 'nexus';

import { NexusGenEnums, NexusGenInputs } from 'graphql/generated/nexus-typegen';
import { getUserId } from 'graphql/utils/auth-helpers';
import { getPagination } from 'graphql/utils/get-pagination';

export const Tasks = queryField('tasks', {
  type: 'TaskListResult',
  args: {
    filter: 'TaskFilter',
    sorting: 'TaskSorting',
    pagination: 'PaginationInput',
  },
  resolve: async (_root, { filter, sorting, pagination }, ctx) => {
    const user = await getUserId(ctx);

    const filterWhere = getFilterWhere(filter);
    const sortingOrder = getTaskSorting(sorting);
    const paginationFilters = getPagination(pagination);

    const data = await ctx.prisma.task.findMany({
      ...paginationFilters,
      ...sortingOrder,

      where: {
        ...filterWhere,
        userId: user.id,
      },
    });

    return {
      data,
    };
  },
});

const getFilterWhere = (filter?: NexusGenInputs['TaskFilter'] | null): Prisma.TaskWhereInput | undefined => {
  if (!filter) {
    return undefined;
  }

  const where: Prisma.TaskWhereInput = {
    ...getFilterBooleanParam(filter, 'isCompleted'),
  };

  return where;
};

const getFilterBooleanParam = <T>(
  filter: NexusGenInputs['TaskFilter'] | null,
  name: keyof Pick<Prisma.TaskWhereInput, keyof NexusGenInputs['TaskFilter']>,
) => {
  if (!filter) {
    return;
  }

  const paramFilter = filter[name];

  if (!paramFilter || typeof paramFilter !== 'object' || !Object.keys(paramFilter).length) return;

  const newParam: Prisma.BoolFilter<T> = {};

  if ('equals' in paramFilter && typeof paramFilter.equals === 'boolean') {
    newParam.equals = paramFilter.equals;
  }

  return { [name]: newParam };
};

const getTaskSorting = (sorting?: NexusGenInputs['TaskSorting'] | null) => {
  let orderBy: {
    createdAt?: NexusGenEnums['SortingOrder'];
    updatedAt?: NexusGenEnums['SortingOrder'];
  } = {
    createdAt: 'asc',
  };

  if (sorting && 'createdAt' in sorting && (sorting.createdAt === 'asc' || sorting.createdAt === 'desc')) {
    orderBy = {
      createdAt: sorting.createdAt,
    };
  }

  if (sorting && 'updatedAt' in sorting && (sorting.updatedAt === 'asc' || sorting.updatedAt === 'desc')) {
    orderBy = {
      updatedAt: sorting.updatedAt,
    };
  }

  return { orderBy };
};
