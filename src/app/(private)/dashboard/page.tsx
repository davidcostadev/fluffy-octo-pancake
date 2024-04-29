import { Suspense } from 'react';

import { DashboardLayout } from 'core/components/layouts/dashboard-layout';
import { UserMenuLoading } from 'core/components/loading-placeholders/user-menu-loading';
import { HeaderBrand } from 'core/components/ui/header-brand';
import { UserMenuWrapper } from 'core/server-components/user-menu-wrapper';

import { TaskAdd } from './components/task-add';
import { TaskCompletedList } from './components/task-completed-list';
import { TaskPendingList } from './components/task-pending-list';

export default function Home() {
  return (
    <DashboardLayout>
      <header className="flex justify-between py-10">
        <HeaderBrand />
        <div className="flex items-center">
          <Suspense fallback={<UserMenuLoading />}>
            <UserMenuWrapper />
          </Suspense>
        </div>
      </header>
      <TaskPendingList />
      <TaskAdd />
      <TaskCompletedList />
    </DashboardLayout>
  );
}
