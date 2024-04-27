import { LoginForm } from 'core/components/forms/login-form';
import { Link } from 'core/components/ui/link';

export default function LoginPage() {
  return (
    <div>
      <div className="mx-auto mt-14 max-w-md border border-gray-300 bg-white p-5 drop-shadow-md sm:rounded-xl">
        <h1 className="py-2 text-center text-lg font-medium">Login</h1>
        <p className="mb-5 text-center text-sm text-gray-500">Log in to access the platform</p>
        <LoginForm />
      </div>
      <div className="py-10 text-center">
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
