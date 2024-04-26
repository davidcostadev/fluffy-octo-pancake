import { inputObjectType } from 'nexus';

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.string('description');
  },
});
