type ErrorAlertProps = {
  error?: Error | null | string;
};

export const ErrorAlert = ({ error }: ErrorAlertProps) => {
  if (!error) return null;

  return (
    <div className="mb-1 flex flex-col gap-2 rounded-lg bg-red-300 px-3 py-2 text-black/80">
      <div className="text-sm font-semibold">Ops</div>
      <p className="text-sm">{error instanceof Error ? error.message : `${error}`}</p>
    </div>
  );
};
