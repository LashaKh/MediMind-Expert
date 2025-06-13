import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Mail, Lock, ShieldCheck } from 'lucide-react';
import { AuthLayout } from './AuthLayout';
import { MobileInput, MobileButton } from '../ui/mobile-form';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signUpWithPassword } = useAuth();
  const { t } = useTranslation();

  const signUpSchema = z.object({
    name: z.string().min(2, { message: t('validation.nameMinLength') }),
    email: z.string().email({ message: t('validation.invalidEmail') }),
    password: z.string().min(6, { message: t('validation.passwordMinLength') }),
    confirmPassword: z.string().min(6, { message: t('validation.confirmPasswordRequired') }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: t('validation.passwordsDoNotMatch'),
    path: ['confirmPassword'], // path of error
  });

  type SignUpFormValues = z.infer<typeof signUpSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    console.log('Attempting sign up with:', { name: data.name, email: data.email });
    try {
      await signUpWithPassword({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.name,
          },
        },
      });
      console.log('Sign up successful, navigating to home.');
      navigate('/'); 
    } catch (error: any) {
      console.error('Sign up failed:', error.message);
      
      // Set form-level errors based on the error type
      if (error.message.includes('User already registered')) {
        setError('email', { message: t('auth.errors.emailExists') });
      } else if (error.message.includes('Password should be at least')) {
        setError('password', { message: t('auth.errors.weakPassword') });
      } else if (error.message.includes('Invalid email')) {
        setError('email', { message: t('validation.invalidEmail') });
      } else {
        setError('email', { message: t('auth.errors.signUpFailed') });
      }
    }
  };

  return (
    <AuthLayout title={t('auth.signUpTitle')}>
      <div className="mobile:px-2 px-4">
        <form className="mt-6 mobile:mt-4 space-y-6 mobile:space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Full Name Input */}
            <MobileInput
              id="name"
              type="text"
              label={t('auth.fullNameLabel')}
              placeholder={t('auth.fullNamePlaceholder')}
              autoComplete="name"
              icon={User}
              error={errors.name?.message}
              disabled={isSubmitting}
              required
              {...register('name')}
            />

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
              placeholder={t('auth.createPasswordPlaceholder')}
              autoComplete="new-password"
              icon={Lock}
              error={errors.password?.message}
              disabled={isSubmitting}
              required
              hint={t('auth.passwordHint')}
              {...register('password')}
            />

            {/* Confirm Password Input */}
            <MobileInput
              id="confirmPassword"
              type="password"
              label={t('auth.confirmPasswordLabel')}
              placeholder={t('auth.confirmPasswordPlaceholder')}
              autoComplete="new-password"
              icon={ShieldCheck}
              error={errors.confirmPassword?.message}
              disabled={isSubmitting}
              required
              {...register('confirmPassword')}
            />
          </div>

          {/* Terms and Privacy Notice */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              {t('auth.termsNotice')}
            </p>
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
              {isSubmitting ? t('auth.signingUp') : t('auth.createAccount')}
            </MobileButton>
          </div>

          {/* Navigation Link */}
          <div className="text-center">
            <div className="text-sm">
              <Link
                to="/signin"
                className="font-medium text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/90 transition-colors duration-200 touch-target-sm p-2 -m-2 rounded-lg focus-enhanced"
              >
                {t('auth.haveAccount')}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};