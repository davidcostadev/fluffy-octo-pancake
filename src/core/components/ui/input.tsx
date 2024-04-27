import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'border rounded-lg font-semibold active:outline-none focus:outline-none  focus:ring-1 focus:ring-opacity-50 disabled:opacity-50 w-full',
  {
    variants: {
      variant: {
        default:
          'hover:border-slate-400 focus:border-slate-400 focus:ring-1 focus:ring-slate-200 focus:ring-opacity-50 disabled:bg-gray-100 disabled:border-gray-100 border border-slate-300',
        ghost:
          'hover:border-slate-100  focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:ring-opacity-50 disabled:bg-gray-100 disabled:border-gray-100 border-transparent',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-800 disabled:bg-gray-100',
      },
      size: {
        default: 'px-4 py-2.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface InputVariantProps extends VariantProps<typeof inputVariants> {
  inputRef?: React.Ref<HTMLInputElement>;
}

interface InputAttributes extends React.InputHTMLAttributes<HTMLInputElement> {}

export type InputBaseProps = InputVariantProps & Omit<InputAttributes, 'size'>;

export type InputProps = InputBaseProps & {
  errorMessage?: string;
};

export const Input = ({ variant, size, className, inputRef, errorMessage, ...props }: InputProps) => {
  return (
    <>
      <input className={inputVariants({ variant, size, className })} {...props} ref={inputRef} />
      {!!errorMessage && <p className="text-xs text-red-500/50">{errorMessage}</p>}
    </>
  );
};
