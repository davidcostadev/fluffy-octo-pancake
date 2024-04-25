import { useEffect, useState } from 'react';

import { Task } from 'core/types/api';

const fakeTasks = [
  { id: 1, title: 'Task 1', description: 'Description for task 1' },
  { id: 2, title: 'Task 2', description: 'Description for task 2' },
  { id: 3, title: 'Task 3', description: 'Description for task 3' },
];

export const useTasks = (shouldError = false) => {
  const [data, setData] = useState<Task[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (shouldError) {
          throw new Error('Failed to fetch tasks');
        }

        setData(fakeTasks);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [shouldError]);

  return { data, loading, error };
};
