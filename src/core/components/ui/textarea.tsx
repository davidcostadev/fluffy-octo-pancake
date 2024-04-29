import { type VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'border rounded-lg font-normal border-transparent  active:outline-none  focus:ring-opacity-50 disabled:opacity-50 focus-visible:outline-purple-500',
  {
    variants: {
      variant: {
        default:
          'hover:border-slate-100 focus:border-slate-300  focus:ring-slate-200 disabled:bg-gray-100 disabled:border-gray-100 ',
        ghost:
          'hover:border-slate-300 focus:border-slate-300  focus:ring-slate-200 disabled:bg-gray-100 disabled:border-gray-100 ',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-800',
      },
      size: {
        default: 'text-sm px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface TextareaVariantProps extends VariantProps<typeof inputVariants> {
  textareaRef?: React.Ref<HTMLTextAreaElement>;
}

interface TextareaAttributes extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export type TextareaBaseProps = TextareaVariantProps & Omit<TextareaAttributes, 'size'>;

export type TextareaProps = TextareaBaseProps & {
  errorMessage?: string;
};

export const Textarea = ({ variant, size, className, textareaRef, errorMessage, ...props }: TextareaProps) => {
  return (
    <>
      <textarea className={inputVariants({ variant, size, className })} {...props} ref={textareaRef} />
      {!!errorMessage && <p className="text-xs text-red-500/50">{errorMessage}</p>}
    </>
  );
};
