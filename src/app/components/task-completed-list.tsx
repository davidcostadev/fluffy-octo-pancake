'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { ErrorAlert } from 'core/components/cards/error-alert';
import { TaskCard } from 'core/components/cards/task-card';
import { TasksLoading } from 'core/components/loading-placeholders/tasks-loading';
import { useTasksCompletedQuery } from 'services/graphql/hooks';

export const TaskCompletedList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const page = 1;
  const limit = 25;

  const { data, error, loading } = useTasksCompletedQuery({
    variables: {
      pagination: {
        page,
        limit,
      },
    },
  });

  const amountOfTasks = data?.tasks?.data?.length ?? 0;

  const tasks = data?.tasks?.data ?? [];

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="mt-12 flex flex-col gap-1 py-2">
        {amountOfTasks !== 0 && (
          <>
            <ToggleCollapseButton isCollapsed={isCollapsed} onClick={handleToggleCollapse}>
              {amountOfTasks} task{amountOfTasks === 1 ? '' : 's'} completed
            </ToggleCollapseButton>
          </>
        )}
      </div>
      {!isCollapsed && (
        <div className="mb-2 space-y-2">
          {loading ? (
            <TasksLoading />
          ) : (
            <>
              <ErrorAlert error={error} />

              {tasks.length > 0 && (
                <div className="flex flex-col gap-2">
                  {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

type ToggleCollapseButtonProps = {
  isCollapsed: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const ToggleCollapseButton = ({ isCollapsed, onClick, children }: ToggleCollapseButtonProps) => {
  return (
    <button
      type="button"
      className="flex gap-1  text-xs font-normal text-slate-500 hover:text-slate-900 focus-visible:outline-purple-500"
      aria-label={isCollapsed ? 'Expand' : 'Collapse'}
      aria-pressed={isCollapsed}
      onClick={onClick}
    >
      {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
      <span>{children}</span>
    </button>
  );
};
