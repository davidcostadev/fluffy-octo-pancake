import { TaskAdd } from 'app/components/task-add';
import { TaskCompletedList } from 'app/components/task-completed-list';
import { TaskPendingList } from 'app/components/task-pending-list';
import { HeaderBrand } from 'core/components/ui/header-brand';
import { getSession } from 'services/session/get-session';

import { UserMenu } from './components/user-menu';

export default async function Home() {
  const { user } = await getSession();

  if (!user) {
    return null;
  }

  return (
    <main className="mx-auto max-w-screen-lg px-5">
      <header className="flex justify-between py-10">
        <HeaderBrand />
        <div className="flex items-center">
          <UserMenu user={user} />
        </div>
      </header>
      <TaskPendingList />
      <TaskAdd />
      <TaskCompletedList />
    </main>
  );
}
