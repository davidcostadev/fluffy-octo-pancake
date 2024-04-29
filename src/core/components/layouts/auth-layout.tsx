import { HeaderBrand } from 'core/components/ui/header-brand';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="mx-auto max-w-screen-lg sm:px-5">
      <HeaderBrand isCentered={true} />
      {children}
    </main>
  );
};
