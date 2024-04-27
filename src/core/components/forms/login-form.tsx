'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import z from 'zod';

import { InputControlled } from 'core/components/forms/controlled/input-controlled';
import { Button } from 'core/components/ui/button';
import { LoginSchema } from 'core/validations/auth-schema';
import { useAuthLoginMutation } from 'services/graphql/hooks';

export const LoginForm = () => {
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  const [login] = useAuthLoginMutation();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const { data } = await login({
        variables: {
          input: values,
        },
        refetchQueries: ['Tasks'],
      });

      if (data?.authLogin?.token && data?.authLogin?.user) {
        setRedirecting(true);

        router.refresh();
      } else {
        throw new Error('Failed to add task');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };
  console.log(errors);

  const formLoading = isSubmitting || redirecting;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputControlled
        type="email"
        label="Email"
        control={control}
        errors={errors}
        name="email"
        disabled={formLoading}
      />

      <InputControlled
        type="password"
        label="Password"
        control={control}
        errors={errors}
        name="password"
        disabled={formLoading}
      />
      <div className="flex justify-end">
        <Button type="submit" variant="success" disabled={formLoading}>
          {formLoading ? (
            <>
              <LoaderCircle size={20} className="animate-spin" />
              <span>Login...</span>
            </>
          ) : (
            'Login'
          )}
        </Button>
      </div>
    </form>
  );
};
