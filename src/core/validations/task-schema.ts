import { z } from 'zod';

export const TaskAddSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(255),
});

export const TaskEditSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().max(255),
  isCompleted: z.boolean(),
});
