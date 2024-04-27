import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import z from 'zod';

import { InputControlled } from 'core/components/forms/controlled/input-controlled';
import { TextareaControlled } from 'core/components/forms/controlled/textarea-controlled';
import { Button } from 'core/components/ui/button';
import { TaskAddSchema } from 'core/validations/task-schema';
import { useTaskCreateMutation } from 'services/graphql/hooks';

type TaskAddFormProps = {
  onCancel: () => void;
  onSave: () => void;
};

export const TaskAddForm = ({ onCancel, onSave }: TaskAddFormProps) => {
  const [createTask] = useTaskCreateMutation();

  const form = useForm<z.infer<typeof TaskAddSchema>>({
    resolver: zodResolver(TaskAddSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof TaskAddSchema>) => {
    try {
      const { data: task } = await createTask({
        variables: {
          input: data,
        },
        refetchQueries: ['TasksPending'],
      });

      if (task?.taskCreate.data?.id) {
        onSave();
        toast.success('Task added successfully');
      } else {
        throw new Error('Failed to add task');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };

  return (
    <form
      className="flex flex-col gap-0.5 rounded-xl border border-slate-200 px-4 py-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputControlled
        type="text"
        variant="ghost"
        name="title"
        control={control}
        errors={errors}
        placeholder="task name"
        autoFocus
        disabled={isSubmitting}
      />

      <TextareaControlled
        name="description"
        control={control}
        errors={errors}
        placeholder="description"
        disabled={isSubmitting}
        variant="ghost"
        maxLength={255}
      />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="default" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" variant="success" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle size={20} className="animate-spin" />
              <span>Adding...</span>
            </>
          ) : (
            'Add Task'
          )}
        </Button>
      </div>
    </form>
  );
};
