type Props = {
  children: React.ReactNode;
};

const PublicLayout = async ({ children }: Props) => {
  return <>{children}</>;
};

export default PublicLayout;
