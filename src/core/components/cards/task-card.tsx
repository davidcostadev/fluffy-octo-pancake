import clsx from 'clsx';
import { Circle, CircleCheck, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { TaskEditForm } from 'core/components/forms/task-edit-form';
import { Button } from 'core/components/ui/button';
import { useConfirm } from 'core/components/ui/confirm';
import { useTaskDestroyMutation } from 'services/graphql/hooks';
import { useTaskUpdateMutation } from 'services/graphql/hooks';
import { TaskFragment } from 'services/graphql/types';

type TaskCardProps = {
  task: TaskFragment;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const { showConfirm } = useConfirm();
  const [taskDestroy] = useTaskDestroyMutation();
  const [taskUpdate, { loading: isUpdating }] = useTaskUpdateMutation();

  const handleEditFormVisibility = () => setEditFormVisibility(!editFormVisibility);

  const handleDelete = async (): Promise<void> => {
    const isConfirmed = await showConfirm('Are you sure you want to delete this?');

    if (!isConfirmed) return;

    try {
      const { data } = await taskDestroy({
        variables: {
          taskId: task.id,
        },
        refetchQueries: ['Tasks'],
      });

      if (data?.taskDestroy.data?.id) {
        toast.success('Task deleted successfully');
      } else {
        throw new Error('Failed to add task');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };

  const handleOnSave = () => {
    setEditFormVisibility(false);
  };

  const handleOnToggleComplete = async () => {
    try {
      const { data } = await taskUpdate({
        variables: {
          taskId: task.id,
          input: {
            isCompleted: !task.isCompleted,
          },
        },
        refetchQueries: ['Tasks'],
      });

      if (data?.taskUpdate.data) {
        toast.success('Task updated successfully');
      } else {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };

  if (editFormVisibility) {
    return <TaskEditForm onCancel={handleEditFormVisibility} onSave={handleOnSave} task={task} />;
  }

  return (
    <div
      className={clsx('group flex gap-4 rounded-lg border-b border-slate-300 px-2 py-3 ', {
        'bg-gray-50': task.isCompleted,
        'hover:bg-gray-50': !task.isCompleted,
      })}
    >
      <button
        type="button"
        className="h-[36px] w-[36px] rounded-lg p-2 hover:bg-gray-100 active:bg-gray-100 disabled:bg-gray-100 disabled:opacity-80"
        onClick={handleOnToggleComplete}
        disabled={isUpdating}
      >
        {task.isCompleted ? <CircleCheck size={20} /> : <Circle size={20} />}
      </button>
      <div className="flex flex-1 flex-col gap-2">
        <h4 className="text-sm font-semibold">{task.title}</h4>
        <p className="min-h-5 text-sm text-slate-900/50">{task.description}</p>
      </div>
      <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Button type="button" variant="ghost" size="icon" onClick={handleEditFormVisibility}>
          <Edit size={16} />
        </Button>
        <Button type="button" variant="ghost" size="icon" onClick={handleDelete}>
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};
