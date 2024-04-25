import { queryField } from 'nexus';

export const Tasks = queryField('tasks', {
  type: 'TaskListResult',
  resolve: async (_root, _args, ctx) => {
    console.log(ctx.prisma);
    const data = await ctx.prisma.task.findMany();

    console.log(data);

    return {
      data,
    };
  },
});
