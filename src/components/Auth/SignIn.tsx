import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { MobileInput, MobileButton } from '../ui/mobile-form';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithPassword } = useAuth();
  const { t } = useTranslation();

  const signInSchema = z.object({
    email: z.string().email({ message: t('validation.invalidEmail') }),
    password: z.string().min(6, { message: t('validation.passwordMinLength') }),
  });

  type SignInFormValues = z.infer<typeof signInSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    console.log('Attempting sign in with:', data.email);
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      console.log('Sign in successful, navigating to home.');
      navigate('/');
    } catch (error: any) {
      console.error('Sign in failed:', error.message);
      
      // Set form-level errors based on the error type
      if (error.message.includes('Invalid login credentials')) {
        setError('email', { message: t('auth.errors.invalidCredentials') });
        setError('password', { message: t('auth.errors.invalidCredentials') });
      } else if (error.message.includes('Email not confirmed')) {
        setError('email', { message: t('auth.errors.emailNotConfirmed') });
      } else {
        setError('email', { message: t('auth.errors.signInFailed') });
      }
    }
  };

  return (
    <AuthLayout title={t('auth.signInTitle')}>
      <div className="mobile:px-2 px-4">
        <form className="mt-6 mobile:mt-4 space-y-6 mobile:space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Email Input */}
            <MobileInput
              id="email"
              type="email"
              label={t('auth.emailLabel')}
              placeholder={t('auth.emailPlaceholder')}
              autoComplete="email"
              icon={Mail}
              error={errors.email?.message}
              disabled={isSubmitting}
              required
              {...register('email')}
            />

            {/* Password Input */}
            <MobileInput
              id="password"
              type="password"
              label={t('auth.passwordLabel')}
              placeholder={t('auth.passwordPlaceholder')}
              autoComplete="current-password"
              icon={Lock}
              error={errors.password?.message}
              disabled={isSubmitting}
              required
              {...register('password')}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <MobileButton
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? t('auth.signingIn') : t('auth.signIn')}
            </MobileButton>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-center">
            <div className="text-sm">
              <Link
                to="/signup"
                className="font-medium text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/90 transition-colors duration-200 touch-target-sm p-2 -m-2 rounded-lg focus-enhanced"
              >
                {t('auth.noAccount')}
              </Link>
            </div>
            
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 touch-target-sm p-2 -m-2 rounded-lg focus-enhanced"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};