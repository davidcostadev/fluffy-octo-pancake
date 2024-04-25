import { nonNull, objectType } from 'nexus';
import { Task } from 'nexus-prisma';

export const TaskType = objectType({
  name: 'Task',
  definition(t) {
    t.field('id', { type: nonNull('UUID') });
    t.string('title');
    t.field(Task.title);
    t.field(Task.description);
    t.field(Task.isCompleted);
    t.field(Task.createdAt);
    t.field(Task.updatedAt);
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
