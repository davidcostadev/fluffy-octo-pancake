import { inputObjectType } from 'nexus';

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.string('description');
  },
});

export const TaskUpdateInput = inputObjectType({
  name: 'TaskUpdateInput',
  definition(t) {
    t.string('title');
    t.string('description');
    t.boolean('isCompleted');
  },
});

export const TaskFilter = inputObjectType({
  name: 'TaskFilter',
  definition(t) {
    t.field('isCompleted', { type: 'BoolFilter' });
  },
});

export const TaskSorting = inputObjectType({
  name: 'TaskSorting',
  definition(t) {
    t.field('updatedAt', { type: 'SortingOrder' });
    t.field('createdAt', { type: 'SortingOrder' });
  },
});

export const BoolFilter = inputObjectType({
  name: 'BoolFilter',
  definition(t) {
    t.boolean('equals');
  },
});
