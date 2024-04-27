import { ValidationError } from 'apollo-server-errors';
import { arg, mutationField, nonNull } from 'nexus';

import { getUserId } from 'graphql/utils/auth-helpers';
import lang from 'lang';

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
    const user = await getUserId(ctx);

    const task = await ctx.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new ValidationError(lang.task.not_found);
    }

    if (task.userId !== user.id) {
      throw new ValidationError(lang.permission.action_not_allowed);
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
