import { Button } from 'core/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col gap-10 py-32">
        <h1 className=" text-6xl leading-snug text-white">
          Welcome me to the <span className="font-medium">best</span> TODO list of your live
        </h1>
        <p className="text-lg italic text-white/50">Just kidding, it{"'"}s just a simple TODO list</p>
      </div>

      <div className="flex justify-end ">
        <div className="flex gap-4 rounded-2xl bg-white/90 px-20 py-6">
          <Button href="/auth/login" variant="ghost">
            Login
          </Button>
          <Button href="/auth/register" variant="success">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
