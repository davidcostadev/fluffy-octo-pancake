type FormGroupProps = {
  children: React.ReactNode;
  label: string;
};

export const FormGroup = ({ children, label }: FormGroupProps) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <label className="font-inter text-sm font-semibold">{label}</label>
      {children}
    </div>
  );
};
