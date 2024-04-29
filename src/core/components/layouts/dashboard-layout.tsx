type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="mx-auto max-w-screen-lg px-4 sm:px-5">{children}</main>;
};
