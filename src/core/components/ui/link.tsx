import LinkNext, { LinkProps as LinkNextProps } from 'next/link';

type LinkProps = LinkNextProps & {
  children: React.ReactNode;
  title?: string;
};

export const Link = (props: LinkProps) => {
  return <LinkNext className="text-sm text-purple-500 underline hover:text-purple-700" {...props} />;
};
