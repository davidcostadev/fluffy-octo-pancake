import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import z from 'zod';

import { InputControlled } from 'core/components/forms/controlled/input-controlled';
import { TextareaControlled } from 'core/components/forms/controlled/textarea-controlled';
import { Button } from 'core/components/ui/button';
import { TaskEditSchema } from 'core/validations/task-schema';
import { useTaskUpdateMutation } from 'services/graphql/hooks';
import { TaskFragment } from 'services/graphql/types';

type TaskEditFormProps = {
  onCancel: () => void;
  onSave: () => void;
  task: TaskFragment;
};

export const TaskEditForm = ({ onCancel, onSave, task }: TaskEditFormProps) => {
  const [updateTask] = useTaskUpdateMutation();

  const form = useForm<z.infer<typeof TaskEditSchema>>({
    resolver: zodResolver(TaskEditSchema),
    defaultValues: {
      title: task.title,
      description: task.description ?? '',
      isCompleted: task.isCompleted,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof TaskEditSchema>) => {
    try {
      const { data } = await updateTask({
        variables: {
          taskId: task.id,
          input: values,
        },
        refetchQueries: ['Tasks'],
      });

      if (data?.taskUpdate?.data?.id) {
        onSave();
        toast.success('Task edit successfully');
      } else {
        throw new Error('Failed to edit task');
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    }
  };

  return (
    <form
      className="flex flex-col gap-0.5 rounded-xl border border-slate-200 px-4 py-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputControlled
        type="text"
        name="title"
        control={control}
        placeholder="task name"
        autoFocus
        disabled={isSubmitting}
      />
      <TextareaControlled name="description" control={control} placeholder="description" disabled={isSubmitting} />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="default" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" variant="success" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle size={20} className="animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            'Save'
          )}
        </Button>
      </div>
    </form>
  );
};