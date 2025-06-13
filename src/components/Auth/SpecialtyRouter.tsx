import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useSpecialty, getSpecialtyRoute, MedicalSpecialty } from '../../contexts/SpecialtyContext';

interface SpecialtyRouterProps {
  children: React.ReactNode;
}

export const SpecialtyRouter: React.FC<SpecialtyRouterProps> = ({ children }) => {
  const { user, profile } = useAuth();
  const { specialty, isSpecialtyVerified, isLoading } = useSpecialty();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only handle routing when user is logged in and specialty is verified
    if (!user || isLoading || !isSpecialtyVerified || !specialty) {
      return;
    }

    const currentPath = location.pathname;
    
    // Handle redirect after login
    const isComingFromLogin = location.state?.from?.pathname === '/signin' || 
                              location.state?.from?.pathname === '/signup';
    
    // If user just logged in and is on a generic route, redirect to their specialty workspace
    if (isComingFromLogin && (currentPath === '/' || currentPath === '/dashboard')) {
      const specialtyRoute = getSpecialtyRoute(specialty);
      navigate(specialtyRoute, { replace: true });
      return;
    }

    // If user is on the root path and has a verified specialty, redirect to their workspace
    if (currentPath === '/' && specialty) {
      const specialtyRoute = getSpecialtyRoute(specialty);
      navigate(specialtyRoute, { replace: true });
      return;
    }

    // Handle specialty mismatch for workspace routes
    if (currentPath.includes('/workspace/') || 
        currentPath === '/cardiology' || 
        currentPath === '/ob-gyn') {
      
      const expectedRoute = getSpecialtyRoute(specialty);
      
      // If user is not on their specialty's workspace, redirect them
      if (currentPath !== expectedRoute && 
          !currentPath.includes(expectedRoute.replace('/workspace/', ''))) {
        navigate(expectedRoute, { 
          replace: true,
          state: { 
            redirectReason: 'specialty_mismatch',
            from: location.pathname 
          }
        });
      }
    }
  }, [user, specialty, isSpecialtyVerified, isLoading, location, navigate]);

  return <>{children}</>;
};

// Hook for programmatic navigation to specialty routes
export const useSpecialtyNavigation = () => {
  const { specialty } = useSpecialty();
  const navigate = useNavigate();

  const navigateToWorkspace = () => {
    if (specialty) {
      const route = getSpecialtyRoute(specialty);
      navigate(route);
    }
  };

  const navigateToSpecialtyRoute = (route: string) => {
    if (specialty) {
      // Ensure route is allowed for current specialty
      const allowedRoutes = getSpecialtyAllowedRoutes(specialty);
      if (allowedRoutes.includes(route)) {
        navigate(route);
      } else {
        console.warn(`Route ${route} not allowed for specialty ${specialty}`);
        navigateToWorkspace();
      }
    }
  };

  return {
    navigateToWorkspace,
    navigateToSpecialtyRoute,
    currentSpecialty: specialty,
  };
};

// Helper function to get allowed routes for a specialty
const getSpecialtyAllowedRoutes = (specialty: MedicalSpecialty): string[] => {
  const commonRoutes = [
    '/ai-copilot',
    '/calculators',
    '/forms',
    '/knowledge-base',
    '/settings',
    '/profile'
  ];

  switch (specialty) {
    case MedicalSpecialty.CARDIOLOGY:
      return [
        '/cardiology',
        '/workspace/cardiology',
        ...commonRoutes
      ];
    case MedicalSpecialty.OBGYN:
      return [
        '/ob-gyn',
        '/workspace/obgyn',
        '/workspace/ob-gyn',
        ...commonRoutes
      ];
    default:
      return commonRoutes;
  }
}; 