import { arg, mutationField, nonNull } from 'nexus';

export const TaskUpdateMutation = mutationField('taskUpdate', {
  type: nonNull('TaskSingleResult'),
  args: {
    taskId: nonNull('UUID'),
    input: nonNull(
      arg({
        type: 'TaskUpdateInput',
      }),
    ),
  },
  resolve: async (parent, { taskId, input }, ctx) => {
    const task = await ctx.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new Error(`Task not found`);
    }

    const data = await ctx.prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title: typeof input.title === 'string' ? input.title : task.title,
        description: input.description,
        isCompleted: typeof input.isCompleted === 'boolean' ? input.isCompleted : task.isCompleted,
      },
    });

    return {
      data,
    };
  },
});
