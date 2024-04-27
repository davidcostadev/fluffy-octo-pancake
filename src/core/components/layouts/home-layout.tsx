type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main className="h-[100vh] w-full bg-purple-500">
      <div className="mx-auto max-w-screen-md px-5">{children}</div>
    </main>
  );
};
