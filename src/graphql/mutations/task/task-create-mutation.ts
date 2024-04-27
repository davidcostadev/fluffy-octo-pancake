import { arg, mutationField, nonNull } from 'nexus';

import { getUserId } from 'graphql/utils/auth-helpers';

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
    const user = await getUserId(ctx);

    const data = await ctx.prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
        userId: user.id,
      },
    });

    return {
      data,
    };
  },
});
