import { HomeLayout } from 'core/components/layouts/home-layout';

type Props = {
  children: React.ReactNode;
};

const PublicLayout = async ({ children }: Props) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default PublicLayout;
