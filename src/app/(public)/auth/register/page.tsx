import { RegisterForm } from 'core/components/forms/register-form';
import { Link } from 'core/components/ui/link';

export default function RegisterPage() {
  return (
    <div>
      <div className="mx-auto mt-14 max-w-md border border-gray-300 bg-white p-5 drop-shadow-md sm:rounded-xl">
        <h1 className="py-2 text-center text-lg font-medium">Register</h1>
        <p className="mb-5 text-center text-sm text-gray-500">Please fill in the form to register</p>
        <RegisterForm />
      </div>
      <div className="py-10 text-center">
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
