export const UserMenuLoading = () => {
  return (
    <div className="flex h-[56px] max-w-[152px] animate-pulse gap-2 rounded-lg bg-slate-100 px-4 py-2.5">
      <div className="h-[36px] w-[36px] rounded-full bg-slate-200"></div>
      <div className="flex flex-1 flex-row items-center justify-between gap-1">
        <div className="ml-2 hidden h-[16px] w-[40px] rounded-lg bg-slate-200 sm:block"></div>
        <div className="h-[14px] w-[14px] rounded-lg bg-slate-200"></div>
      </div>
    </div>
  );
};
