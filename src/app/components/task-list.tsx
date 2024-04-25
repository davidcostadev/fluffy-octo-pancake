'use client';

import { useTasksQuery } from 'services/graphql/hooks';

import { ErrorAlert } from 'core/components/cards/error-alert';
import { TaskCard } from 'core/components/cards/task-card';
import { TasksLoading } from 'core/components/loading-placeholders/tasks-loading';

export const TaskList = () => {
  const { data, error, loading } = useTasksQuery();

  const amountOfTasks = data?.tasks?.data?.length ?? 0;

  const tasks = data?.tasks?.data ?? [];

  return (
    <>
      <div className="flex flex-col gap-1 py-2">
        <h3 className="text-lg font-medium  leading-7  text-slate-800">Your Tasks</h3>
        {amountOfTasks !== 0 && (
          <div className="text-xs font-normal text-slate-500">
            {amountOfTasks} task{amountOfTasks === 1 ? '' : 's'}
          </div>
        )}
      </div>
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
    </>
  );
};

export default TaskList;
