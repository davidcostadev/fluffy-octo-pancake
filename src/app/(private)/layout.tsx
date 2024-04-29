import { redirect } from 'next/navigation';

import { getSession } from 'services/session/get-session';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout = async ({ children }: Props) => {
  const session = await getSession();

  if (!session.token) {
    redirect('/auth');
  }

  return <>{children}</>;
};

export default ProtectedLayout;
