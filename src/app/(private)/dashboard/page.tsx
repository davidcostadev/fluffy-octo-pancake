import { TaskAdd } from 'app/components/task-add';
import { TaskList } from 'app/components/task-list';
import { getSession } from 'services/session/get-session';

import { UserMenu } from './components/user-menu';

export default async function Home() {
  const { user } = await getSession();

  if (!user) {
    return null;
  }

  return (
    <main className="mx-auto max-w-screen-lg px-5">
      <header className="flex justify-between py-7">
        <div className="flex flex-col gap-1">
          <h1 className="inline-flex gap-2 text-2xl font-medium">
            <span className="font-bold text-purple-800">TODO</span>
            <span className="text-slate-400">by David Costa</span>
          </h1>
          <p className="text-sm font-light text-slate-400">a Viewstats Full Stack Project</p>
        </div>
        <div className="flex items-center">
          <UserMenu user={user} />
        </div>
      </header>
      <TaskList />
      <TaskAdd />
    </main>
  );
}
