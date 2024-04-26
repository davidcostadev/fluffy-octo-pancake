import { mutationField, nonNull } from 'nexus';

export const TaskDestroyMutation = mutationField('taskDestroy', {
  type: nonNull('TaskSingleResult'),
  args: {
    taskId: nonNull('UUID'),
  },
  resolve: async (parent, { taskId }, ctx) => {
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
