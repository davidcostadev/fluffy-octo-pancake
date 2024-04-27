import { ValidationError } from 'apollo-server-errors';
import { mutationField, nonNull } from 'nexus';

import { getUserId } from 'graphql/utils/auth-helpers';
import lang from 'lang';

export const TaskDestroyMutation = mutationField('taskDestroy', {
  type: nonNull('TaskSingleResult'),
  args: {
    taskId: nonNull('UUID'),
  },
  resolve: async (parent, { taskId }, ctx) => {
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
