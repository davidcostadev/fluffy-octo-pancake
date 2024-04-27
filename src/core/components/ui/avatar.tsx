type AvatarProps = {
  firstName: string;
  lastName: string;
};

export const Avatar = ({ firstName, lastName }: AvatarProps) => {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return (
    <div className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-200 text-gray-500`}>
      {initials}
    </div>
  );
};
