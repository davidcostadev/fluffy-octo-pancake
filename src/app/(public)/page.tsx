import { Button } from 'core/components/ui/button';
import { getSession } from 'services/session/get-session';

export default async function HomePage() {
  const session = await getSession();

  const user = session.user;

  return (
    <>
      <div className="bg-purple-500">
        <div className="mx-auto max-w-screen-md px-5">
          <div className="flex flex-col gap-10 pb-12 pt-32">
            <h1 className=" text-6xl leading-snug text-white">
              Welcome me to the <span className="font-medium">best</span> TODO list of your life!
            </h1>
            <p className="text-lg italic text-white/50">Just kidding, it{"'"}s just a simple TODO list</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md px-5">
        <div className="flex justify-center pb-28">
          <div className="flex gap-4 rounded-2xl px-20 py-6">
            {user ? (
              <Button href="/dashboard" variant="success">
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button href="/auth/login" variant="ghost">
                  Login
                </Button>
                <Button href="/auth/register" variant="success">
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
