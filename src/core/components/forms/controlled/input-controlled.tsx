import omit from 'lodash.omit';
import { Control, FieldErrors, FieldPath, FieldValues, useController } from 'react-hook-form';

import { FormGroup } from 'core/components/ui/form/form-group';
import { Input, InputBaseProps } from 'core/components/ui/input';

type InputControlledProps<FormValues extends FieldValues> = InputBaseProps & {
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  label?: string;
};

export const InputControlled = <FormValues extends FieldValues>({
  name,
  control,
  errors,
  label,
  ...props
}: InputControlledProps<FormValues>) => {
  const { field } = useController<FormValues>({
    name,
    control,
    rules: { required: true },
  });

  const errorMessage = typeof errors[name]?.message === 'string' ? `${errors[name]?.message}` : undefined;

  if (label) {
    return (
      <FormGroup label={label}>
        <Input {...omit(field, 'ref')} {...props} inputRef={field.ref} errorMessage={errorMessage} />
      </FormGroup>
    );
  }

  return <Input {...omit(field, 'ref')} {...props} inputRef={field.ref} errorMessage={errorMessage} />;
};
