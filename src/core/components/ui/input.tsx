import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'border rounded-lg font-semibold border-transparent active:outline-none focus:outline-none  focus:ring-1 focus:ring-opacity-50 disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          ' hover:border-slate-100  focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:ring-opacity-50 disabled:bg-gray-100 disabled:border-gray-100',
        ghost:
          'hover:border-slate-100  focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:ring-opacity-50 disabled:bg-gray-100 disabled:border-gray-100',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-800 disabled:bg-gray-100',
      },
      size: {
        default: 'px-3 py-2 text-sm',
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
