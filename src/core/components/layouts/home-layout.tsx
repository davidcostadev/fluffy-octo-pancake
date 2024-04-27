type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <main className="min-h-[100vh] w-full bg-gray-200">{children}</main>;
};
