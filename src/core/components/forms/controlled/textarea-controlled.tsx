import omit from 'lodash.omit';
import { Control, FieldErrors, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Textarea, TextareaProps } from 'core/components/ui/textarea';

type TextareaControlledProps<FormValues extends FieldValues> = TextareaProps & {
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

export const TextareaControlled = <FormValues extends FieldValues>({
  name,
  control,
  errors,

  ...props
}: TextareaControlledProps<FormValues>) => {
  const { field } = useController<FormValues>({
    name,
    control,
    rules: { required: true },
  });

  const errorMessage = typeof errors[name]?.message === 'string' ? `${errors[name]?.message}` : undefined;

  return <Textarea {...omit(field, 'ref')} {...props} textareaRef={field.ref} errorMessage={errorMessage} />;
};
