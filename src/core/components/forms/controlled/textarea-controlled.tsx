import omit from 'lodash.omit';
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Textarea, TextareaProps } from 'core/components/ui/textarea';

type TextareaControlledProps<FormValues extends FieldValues> = TextareaProps & {
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
};

export const TextareaControlled = <FormValues extends FieldValues>({
  name,
  control,
  ...props
}: TextareaControlledProps<FormValues>) => {
  const { field } = useController<FormValues>({
    name,
    control,
    rules: { required: true },
  });

  return <Textarea {...omit(field, 'ref')} {...props} textareaRef={field.ref} />;
};
