'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

import { TaskAddForm } from 'core/components/forms/task-add-form';
import { Button } from 'core/components/ui/button';

export const TaskAdd = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const handleFormVisibility = () => setFormVisibility(!formVisibility);

  const handleSave = () => {
    setFormVisibility(false);
  };

  if (!formVisibility) {
    return (
      <div className="py-2">
        <Button type="button" variant="ghost" size="small" onClick={handleFormVisibility}>
          <Plus size={14} className="text-purple-500" />
          <span>Add task</span>
        </Button>
      </div>
    );
  }

  return <TaskAddForm onCancel={handleFormVisibility} onSave={handleSave} />;
};
