import { Circle, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { TaskFragment } from 'services/graphql/types';

import { TaskAddForm } from 'core/components/forms/task-add-form';
import { Button } from 'core/components/ui/button';

type TaskCardProps = {
  task: TaskFragment;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const handleEditFormVisibility = () => setEditFormVisibility(!editFormVisibility);

  if (editFormVisibility) {
    return <TaskAddForm onCancel={handleEditFormVisibility} />;
  }

  return (
    <div className="group flex gap-4 rounded-lg border-b border-slate-300 px-2 py-3 hover:bg-gray-50">
      <button type="button" className="h-[36px] w-[36px] rounded-lg p-2 hover:bg-gray-100 active:bg-gray-100">
        <Circle size={20} />
      </button>
      <div className="flex flex-1 flex-col gap-2">
        <h4 className="text-sm font-semibold">{task.title}</h4>
        <p className="text-sm text-slate-900/50">{task.description}</p>
      </div>
      <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Button type="button" variant="ghost" size="icon" onClick={handleEditFormVisibility}>
          <Edit size={16} />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
};
