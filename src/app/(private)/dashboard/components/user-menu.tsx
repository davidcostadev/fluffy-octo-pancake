'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { Avatar } from 'core/components/ui/avatar';
import { Button } from 'core/components/ui/button';
import { useConfirm } from 'core/components/ui/confirm';
import { DropdownMenu } from 'core/components/ui/dropdown-menu';
import { useAuthLogoutMutation } from 'services/graphql/hooks';
import { UserFromSession } from 'services/session/session-options';

type UserMenuProps = {
  user: UserFromSession;
};

export const UserMenu = ({ user }: UserMenuProps) => {
  const [logout] = useAuthLogoutMutation();
  const { showConfirm } = useConfirm();
  const router = useRouter();

  const handleLogout = async () => {
    const isConfirmed = await showConfirm('Are you sure that you want to logout?', 'logout');

    if (!isConfirmed) return;

    try {
      const { data } = await logout();

      if (data?.authLogout) {
        router.refresh();
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };

  const menuOptions = [
    {
      label: 'Logout',
      action: handleLogout,
    },
  ];

  return (
    <DropdownMenu options={menuOptions}>
      <Button type="button" variant="ghost">
        <Avatar firstName={user.firstName} lastName={user.lastName} />
        <span className="ml-2">{user.firstName}</span>
        <ChevronDown className="ml-2" size={14} />
      </Button>
    </DropdownMenu>
  );
};
