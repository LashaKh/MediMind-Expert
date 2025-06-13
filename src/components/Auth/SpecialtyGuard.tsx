import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpecialty, MedicalSpecialty, getSpecialtyRoute } from '../../contexts/SpecialtyContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';

// Define which routes require which specialties
const SPECIALTY_ROUTE_MAP: Record<string, MedicalSpecialty[]> = {
  '/cardiology': [MedicalSpecialty.CARDIOLOGY],
  '/workspace/cardiology': [MedicalSpecialty.CARDIOLOGY],
  '/ob-gyn': [MedicalSpecialty.OBGYN],
  '/workspace/obgyn': [MedicalSpecialty.OBGYN],
  '/workspace/ob-gyn': [MedicalSpecialty.OBGYN],
};

interface SpecialtyGuardProps {
  children: React.ReactNode;
  requiredSpecialty?: MedicalSpecialty;
  allowedSpecialties?: MedicalSpecialty[];
}

export const SpecialtyGuard: React.FC<SpecialtyGuardProps> = ({ 
  children, 
  requiredSpecialty,
  allowedSpecialties 
}) => {
  const { specialty, isLoading, isSpecialtyVerified } = useSpecialty();
  const location = useLocation();
  const { profile } = useAuth();
  const { t } = useTranslation();

  // Show loading spinner while specialty is being verified
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">
          {t('loading.verifying_specialty')}
        </span>
      </div>
    );
  }

  // If no specialty is verified, redirect to onboarding or home
  if (!isSpecialtyVerified || !specialty) {
    return <Navigate to="/onboarding" state={{ from: location }} replace />;
  }

  // Check if current route requires specific specialty
  const currentPath = location.pathname;
  const routeSpecialties = SPECIALTY_ROUTE_MAP[currentPath];
  
  let allowedForRoute: MedicalSpecialty[] = [];
  
  if (requiredSpecialty) {
    allowedForRoute = [requiredSpecialty];
  } else if (allowedSpecialties) {
    allowedForRoute = allowedSpecialties;
  } else if (routeSpecialties) {
    allowedForRoute = routeSpecialties;
  }

  // If route has specialty restrictions, check access
  if (allowedForRoute.length > 0) {
    const hasAccess = allowedForRoute.includes(specialty);
    
    if (!hasAccess) {
      // Show access denied message and redirect to user's appropriate workspace
      const userWorkspaceRoute = getSpecialtyRoute(specialty);
      
      // Map enum values to human-readable names
      const getSpecialtyDisplayName = (specialty: MedicalSpecialty): string => {
        switch (specialty) {
          case MedicalSpecialty.CARDIOLOGY:
            return 'Cardiology';
          case MedicalSpecialty.OBGYN:
            return 'OB/GYN';
          default:
            return specialty;
        }
      };
      
      const specialtiesText = allowedForRoute.map(s => getSpecialtyDisplayName(s)).join(', ');
      
      return (
        <div className="flex items-center justify-center min-h-64">
          <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="w-12 h-12 mx-auto mb-4 text-red-500">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">
              {t('access.access_denied', { specialties: specialtiesText })}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 mb-4">
              {t('access.redirect_message')}
            </p>
            <Navigate 
              to={userWorkspaceRoute} 
              state={{ 
                from: location,
                error: t('access.access_denied', { specialties: specialtiesText })
              }} 
              replace 
            />
          </div>
        </div>
      );
    }
  }

  // User has access, render children
  return <>{children}</>;
};

// Higher-order component for easy route wrapping
export const withSpecialtyGuard = (
  Component: React.ComponentType<any>,
  options?: {
    requiredSpecialty?: MedicalSpecialty;
    allowedSpecialties?: MedicalSpecialty[];
  }
) => {
  return (props: any) => (
    <SpecialtyGuard {...options}>
      <Component {...props} />
    </SpecialtyGuard>
  );
}; 