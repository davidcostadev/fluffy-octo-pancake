'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Avatar } from 'core/components/ui/avatar';
import { Button } from 'core/components/ui/button';
import { useConfirm } from 'core/components/ui/confirm';
import { DropdownMenu } from 'core/components/ui/dropdown-menu';
import { UserFromSession } from 'services/session/session-options';

type UserMenuProps = {
  user: UserFromSession;
};

export const UserMenu = ({ user }: UserMenuProps) => {
  const { showConfirm } = useConfirm();
  const router = useRouter();

  const handleLogout = async () => {
    const isConfirmed = await showConfirm('Are you sure that you want to logout?', 'logout');

    if (!isConfirmed) return;

    router.push('/auth/logout');
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
        <span className="ml-2 hidden sm:inline">{user.firstName}</span>
        <ChevronDown className="ml-2" size={14} />
      </Button>
    </DropdownMenu>
  );
};
