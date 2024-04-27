'use client';

import { ChevronDown } from 'lucide-react';

import { ErrorAlert } from 'core/components/cards/error-alert';
import { TaskCard } from 'core/components/cards/task-card';
import { TasksLoading } from 'core/components/loading-placeholders/tasks-loading';
import { useTasksCompletedQuery } from 'services/graphql/hooks';

export const TaskCompletedList = () => {
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

  return (
    <>
      <div className="mt-12 flex flex-col gap-1 py-2">
        {amountOfTasks !== 0 && (
          <div className="flex gap-1 text-xs font-normal text-slate-500">
            <ChevronDown size={16} className="" />
            <span>
              {amountOfTasks} task{amountOfTasks === 1 ? '' : 's'} completed
            </span>
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
