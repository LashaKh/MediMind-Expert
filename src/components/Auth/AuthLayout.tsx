import React, { useEffect, useState } from 'react';
import { Stethoscope } from 'lucide-react';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary safe-area-inset">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className={`
        w-full relative z-10 transition-all duration-300
        ${isMobile ? 'px-4 py-6' : 'px-6 py-12'}
        ${isMobile ? 'max-w-sm' : 'max-w-md'}
      `}>
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`
              bg-white/10 backdrop-blur-sm rounded-2xl p-3 
              ${isMobile ? 'w-16 h-16' : 'w-20 h-20'}
            `}>
              <Stethoscope className={`
                text-white transition-all duration-200
                ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}
              `} />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className={`
              font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent
              ${isMobile ? 'text-2xl' : 'text-3xl'}
            `}>
              MediMind Expert
            </h1>
            <p className={`
              text-blue-100/80 font-medium
              ${isMobile ? 'text-sm' : 'text-base'}
            `}>
              Your AI Medical Co-Pilot
            </p>
          </div>
        </div>

        {/* Auth Card */}
        <div className={`
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl
          transition-all duration-300
          ${isMobile ? 'rounded-2xl px-6 py-8' : 'rounded-3xl px-8 py-10'}
        `}>
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className={`
              font-bold text-gray-900 dark:text-gray-100 tracking-tight
              ${isMobile ? 'text-xl' : 'text-2xl'}
            `}>
              {title}
            </h2>
          </div>

          {/* Content */}
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 space-y-2">
          <p className={`
            text-blue-100/60
            ${isMobile ? 'text-xs' : 'text-sm'}
          `}>
            Secure • HIPAA Compliant • AI-Powered
          </p>
          <p className={`
            text-blue-100/40
            ${isMobile ? 'text-xs' : 'text-sm'}
          `}>
            © 2024 MediMind Expert. Professional medical assistance.
          </p>
        </div>
      </div>
    </div>
  );
};
