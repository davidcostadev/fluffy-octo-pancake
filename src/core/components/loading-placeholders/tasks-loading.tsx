export const TasksLoading = () => {
  return (
    <>
      <div className="flex h-20 w-full animate-pulse gap-4 rounded-lg bg-slate-100 p-4">
        <div className="h-[36px] w-[36px] rounded-lg bg-slate-200"></div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-[18px] w-8/12 rounded-lg bg-slate-200"></div>
          <div className="h-[16px] w-5/12 rounded-lg bg-slate-200"></div>
        </div>
      </div>
      <div className="flex h-20 w-full animate-pulse gap-4 rounded-lg bg-slate-100 p-4">
        <div className="h-[36px] w-[36px] rounded-lg bg-slate-200"></div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-[18px] w-5/12 rounded-lg bg-slate-200"></div>
          <div className="h-[16px] w-8/12 rounded-lg bg-slate-200"></div>
        </div>
      </div>
      <div className="flex h-20 w-full animate-pulse gap-4 rounded-lg bg-slate-100 p-4">
        <div className="h-[36px] w-[36px] rounded-lg bg-slate-200"></div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-[18px] w-3/12 rounded-lg bg-slate-200"></div>
          <div className="h-[16px] w-9/12 rounded-lg bg-slate-200"></div>
        </div>
      </div>
    </>
  );
};
