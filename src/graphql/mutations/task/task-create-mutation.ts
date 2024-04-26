import { arg, mutationField, nonNull } from 'nexus';

export const TaskCreateMutation = mutationField('taskCreate', {
  type: nonNull('TaskSingleResult'),
  args: {
    input: nonNull(
      arg({
        type: 'TaskCreateInput',
      }),
    ),
  },
  resolve: async (parent, { input }, ctx) => {
    const data = await ctx.prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
      },
    });

    return {
      data,
    };
  },
});
