import clsx from 'clsx';

type HeaderBrandProps = {
  isCentered?: boolean;
};

export const HeaderBrand = ({ isCentered }: HeaderBrandProps) => {
  return (
    <div
      className={clsx('flex py-7', {
        'justify-center': isCentered,
      })}
    >
      <div className="flex flex-col gap-1">
        <h1 className="inline-flex gap-2 text-2xl font-medium">
          <span className="font-bold text-purple-800">TODO</span>
          <span className="text-black/50">by David Costa</span>
        </h1>
        <p className="text-sm font-light text-black/50">a Viewstats Full Stack Project</p>
      </div>
    </div>
  );
};
