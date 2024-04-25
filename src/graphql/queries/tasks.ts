import { queryField } from 'nexus';

export const Tasks = queryField('tasks', {
  type: 'TaskListResult',
  resolve: async (/*_root, _args, ctx*/) => {
    return {
      data: [
        {
          id: '1',
          title: 'Task 1',
          description: 'Description 1',
          completed: false,
        },
        {
          id: '2',
          title: 'Task 2',
          description: 'Description 2',
          completed: true,
        },
      ],
    };
    // return ctx.prisma.task.findMany();
  },
});
