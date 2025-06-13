import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';

export const ProtectedRoute = () => {
  const { user, profile, isLoading } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('loading.loading')}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" replace />;
  }

  // Check if user has completed onboarding (selected specialty)
  // Allow access to onboarding route even without specialty
  if (!profile?.medical_specialty && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  // If user has completed onboarding but tries to access onboarding page, redirect to their workspace
  if (profile?.medical_specialty && location.pathname === '/onboarding') {
    return <Navigate to={`/${profile.medical_specialty}`} replace />;
  }

  // If authenticated and onboarding complete, render the child routes
  return <Outlet />;
};
