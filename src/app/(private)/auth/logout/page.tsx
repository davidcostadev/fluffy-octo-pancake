'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthLogoutMutation } from 'services/graphql/hooks';

export const dynamic = 'force-dynamic';

export default function LogoutPage() {
  const [logout, { client }] = useAuthLogoutMutation();
  const router = useRouter();

  useEffect(() => {
    const logoutNow = async () => {
      try {
        const { data } = await logout();

        if (data?.authLogout) {
          await client.resetStore();
          router.refresh();
        } else {
          throw new Error('Failed to logout');
        }
      } catch (error) {
        console.error(error);
      }
    };

    logoutNow();
  }, []);

  return (
    <div>
      <h1 className="py-2 text-center text-lg font-medium">Loading</h1>
    </div>
  );
}
