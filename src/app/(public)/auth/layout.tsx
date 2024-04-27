import { redirect } from 'next/navigation';

import { MainLayout } from 'core/components/layouts/main-layout';
import { getSession } from 'services/session/get-session';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await getSession();

  if (session.token && session.user) {
    redirect('/dashboard');
  }

  return <MainLayout>{children}</MainLayout>;
};

export default AuthLayout;
