import { mutationField, nonNull } from 'nexus';

export const TaskDestroyMutation = mutationField('taskDestroy', {
  type: nonNull('TaskSingleResult'),
  args: {
    taskId: nonNull('UUID'),
  },
  resolve: async (parent, { taskId }, ctx) => {
    const task = await ctx.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new Error(`Task not found`);
    }

    const data = await ctx.prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    return {
      data,
    };
  },
});
