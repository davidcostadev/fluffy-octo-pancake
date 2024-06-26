import { redirect } from 'next/navigation';

import { AuthLayout as AuthLayoutWrapper } from 'core/components/layouts/auth-layout';
import { getSession } from 'services/session/get-session';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await getSession();

  if (session.token && session.user) {
    redirect('/dashboard');
  }

  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};

export default AuthLayout;
