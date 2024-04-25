import { nonNull, objectType } from 'nexus';

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.nonNull.id('id');
    t.string('title');
    t.string('description');
    t.boolean('completed');
  },
});

export const TaskListResult = objectType({
  name: 'TaskListResult',
  definition(t) {
    t.list.field('data', { type: nonNull('Task') });
  },
});

export const TaskSingleResult = objectType({
  name: 'TaskSingleResult',
  definition(t) {
    t.field('data', { type: 'Task' });
  },
});
