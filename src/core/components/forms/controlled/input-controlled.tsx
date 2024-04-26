import omit from 'lodash.omit';
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Input, InputProps } from 'core/components/ui/input';

type InputControlledProps<FormValues extends FieldValues> = InputProps & {
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
};

export const InputControlled = <FormValues extends FieldValues>({
  name,
  control,
  ...props
}: InputControlledProps<FormValues>) => {
  const { field } = useController<FormValues>({
    name,
    control,
    rules: { required: true },
  });

  return <Input {...omit(field, 'ref')} {...props} inputRef={field.ref} />;
};
