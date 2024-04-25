import { queryField } from 'nexus';

export const Tasks = queryField('tasks', {
  type: 'TaskListResult',
  resolve: async (/*_root, _args, ctx*/) => {
    return {
      data: [
        {
          id: '3d917535-5249-413e-b9ab-97e1f8bcc053',
          title: 'Task 1',
          description: 'Description 1',
          isCompleted: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '362f4a76-fb8e-4c4d-a805-6e955fd28364',
          title: 'Task 2',
          description: null,
          isCompleted: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    };
    // return ctx.prisma.task.findMany();
  },
});
