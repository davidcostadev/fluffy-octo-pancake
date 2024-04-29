import { UserMenu } from 'core/components/ui/user-menu';
import { getSession } from 'services/session/get-session';

export async function UserMenuWrapper() {
  const { user } = await getSession();
  await new Promise((resolve) => setTimeout(resolve, 1000 * 5));

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center">
      <UserMenu user={user} />
    </div>
  );
}
