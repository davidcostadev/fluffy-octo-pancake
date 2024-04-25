import { Button } from 'core/components/ui/button';
import { Input } from 'core/components/ui/input';
import { Textarea } from 'core/components/ui/textarea';

type TaskAddFormProps = {
  onCancel: () => void;
};

export const TaskAddForm = ({ onCancel }: TaskAddFormProps) => {
  return (
    <form className="flex flex-col gap-0.5 rounded-xl border border-slate-200 px-4 py-3">
      <Input type="text" placeholder="task name" autoFocus />
      <Textarea placeholder="description" />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="button" variant="success">
          Add Task
        </Button>
      </div>
    </form>
  );
};
