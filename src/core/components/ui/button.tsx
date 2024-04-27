import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center rounded-lg gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-gray-100 text-black/80  font-semibold hover:bg-gray-200 active:bg-gray-300/80 disabled:bg-gray-100',
        ghost: 'font-semibold hover:bg-gray-100/50 active:bg-gray-100 disabled:bg-gray-100',
        success:
          'bg-purple-400 text-white  font-semibold hover:bg-purple-500 active:bg-purple-500/80 disabled:bg-purple-400',
        danger: 'bg-red-400 text-white  font-semibold hover:bg-red-500 active:bg-red-500/80 disabled:bg-red-400',
      },
      size: {
        default: 'text-sm px-4 py-2.5',
        small: 'px-3 py-1 text-sm',
        icon: 'h-[36px] w-[36px] justify-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
};
