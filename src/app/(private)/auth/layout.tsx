import { AuthLayout as AuthLayoutWrapper } from 'core/components/layouts/auth-layout';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};

export default AuthLayout;
