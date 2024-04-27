import { RegisterForm } from 'core/components/forms/register-form';

export default function LoginPage() {
  return (
    <div className="mx-auto mt-14 max-w-md rounded-xl border border-gray-300 bg-white p-5 drop-shadow-md">
      <h1 className="py-2 text-center text-lg font-medium">Register</h1>
      <p className="mb-5 text-center text-sm text-gray-500">Please fill in the form to register</p>
      <RegisterForm />
    </div>
  );
}
