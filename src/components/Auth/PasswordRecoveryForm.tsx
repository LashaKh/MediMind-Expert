import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthLayout } from './AuthLayout';

const recoverySchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type RecoveryFormValues = z.infer<typeof recoverySchema>;

export const PasswordRecoveryForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoverySchema),
  });

  const onSubmit: SubmitHandler<RecoveryFormValues> = async (data) => {
    // Mock password recovery logic
    console.log('Password recovery attempt for:', data.email);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset(); // Reset form fields after successful submission
  };

  if (isSubmitted) {
    return (
      <AuthLayout title="Check your email">
        <div className="text-center">
          <p className="text-white">
            If an account exists for the email address you entered, you will receive a password reset link shortly.
          </p>
          <div className="mt-6">
            <Link
              to="/signin"
              className="font-medium text-accent hover:text-accent/90"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Reset your password">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className={`relative block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 dark:bg-dark-secondary dark:text-white dark:ring-dark-border dark:placeholder:text-gray-500 dark:focus:ring-accent ${errors.email ? 'ring-red-500 focus:ring-red-500 dark:ring-red-500 dark:focus:ring-red-500' : ''}`}
              placeholder="Email address"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send recovery link'}
          </button>
        </div>

        <div className="text-sm text-center">
          <Link
            to="/signin"
            className="font-medium text-white hover:text-gray-200 dark:text-accent dark:hover:text-accent/90"
          >
            Back to Sign In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
