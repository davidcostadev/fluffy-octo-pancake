import { LoginForm } from 'core/components/forms/login-form';

export default function LoginPage() {
  return (
    <div className="border border-gray-300 bg-white p-5 drop-shadow-md sm:rounded-xl">
      <h1 className="py-2 text-center text-lg font-medium">Login</h1>
      <p className="mb-5 text-center text-sm text-gray-500">Log in to access the platform</p>
      <LoginForm />
    </div>
  );
}
