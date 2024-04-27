import { HeaderBrand } from 'core/components/ui/header-brand';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="mx-auto max-w-screen-md px-5">
      <HeaderBrand isCentered={true} />
      {children}
    </main>
  );
};
