import { queryField } from 'nexus';

export const Tasks = queryField('tasks', {
  type: 'TaskListResult',
  resolve: async (_root, _args, ctx) => {
    const data = await ctx.prisma.task.findMany();

    return {
      data,
    };
  },
});
