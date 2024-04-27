type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="mx-auto max-w-screen-md px-5">
      <div className="flex flex-col gap-1 py-7">
        <h1 className="inline-flex gap-2 text-2xl font-medium">
          <span className="font-bold text-purple-800">TODO</span>
          <span className="text-slate-400">by David Costa</span>
        </h1>
        <p className="text-sm font-light text-slate-400">a Viewstats Full Stack Project</p>
      </div>
      {children}
    </main>
  );
};
