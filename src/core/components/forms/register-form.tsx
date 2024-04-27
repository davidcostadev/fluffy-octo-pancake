'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import z from 'zod';

import { InputControlled } from 'core/components/forms/controlled/input-controlled';
import { Button } from 'core/components/ui/button';
import { Link } from 'core/components/ui/link';
import { RegisterSchema } from 'core/validations/auth-schema';
import { useAuthRegisterMutation } from 'services/graphql/hooks';

export const RegisterForm = () => {
  const router = useRouter();

  const [register] = useAuthRegisterMutation();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      const { data } = await register({
        variables: {
          input: values,
        },
        refetchQueries: ['Tasks'],
      });

      if (data?.authRegister) {
        toast.success('Successfully registered, now you can login!');
        router.push('/auth/login');
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : `${error}`);
    }
  };

  const formLoading = isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5">
        <InputControlled
          type="text"
          label="First Name"
          control={control}
          errors={errors}
          name="firstName"
          placeholder="Enter your first name"
          disabled={formLoading}
        />
        <InputControlled
          type="text"
          label="Last Name"
          control={control}
          errors={errors}
          name="lastName"
          placeholder="Enter your last name"
          disabled={formLoading}
        />
      </div>
      <InputControlled
        type="email"
        label="Email"
        control={control}
        errors={errors}
        name="email"
        placeholder="Enter your email"
        disabled={formLoading}
      />

      <InputControlled
        type="password"
        label="Password"
        control={control}
        errors={errors}
        name="password"
        placeholder="Enter your password"
        disabled={formLoading}
      />
      <div className="flex items-center justify-between py-4">
        <div>
          <div className="text-sm">Do you already have an account?</div>
          <Link href="/auth/login">Login here</Link>
        </div>

        <Button type="submit" variant="success" disabled={formLoading}>
          {formLoading ? (
            <>
              <LoaderCircle size={20} className="animate-spin" />
              <span>Registering...</span>
            </>
          ) : (
            'Register'
          )}
        </Button>
      </div>
    </form>
  );
};
