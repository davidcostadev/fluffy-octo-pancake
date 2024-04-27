import { NexusGenInputs } from 'graphql/generated/nexus-typegen';

export const getPagination = (pagination?: NexusGenInputs['PaginationInput'] | null) => {
  const take = Math.min(pagination?.limit ?? 25, 250);
  const skip = pagination?.page ? (pagination.page - 1) * take : 0;

  return {
    take,
    skip,
  };
};
