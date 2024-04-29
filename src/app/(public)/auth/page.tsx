import LoginPage from 'core/components/pages/login-page';
import RegisterPage from 'core/components/pages/register-page';
import { Link } from 'core/components/ui/link';

export default function AuthPage() {
  return (
    <div>
      <div className="mt-14 flex flex-col gap-4 md:flex-row">
        <div className="md:6/12 w-full">
          <LoginPage />
        </div>
        <div className="md:6/12 w-full">
          <RegisterPage />
        </div>
      </div>
      <div className="py-10 text-center">
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
