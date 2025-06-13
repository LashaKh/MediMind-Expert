import React from 'react';
import { ErrorFallbackProps } from './ErrorBoundary';

// Base ErrorFallback component
export interface BaseErrorFallbackProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  showReload?: boolean;
  showDetails?: boolean;
  onRetry?: () => void;
  error?: Error;
  className?: string;
}

const BaseErrorFallback: React.FC<BaseErrorFallbackProps> = ({
  title = "Something went wrong",
  message = "An unexpected error has occurred. Please try again.",
  showRetry = true,
  showReload = true,
  showDetails = process.env.NODE_ENV === 'development',
  onRetry,
  error,
  className = ""
}) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={`flex items-center justify-center p-6 ${className}`}>
      <div className="max-w-md w-full text-center">
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        
        <div className="space-y-3">
          {showRetry && (
            <button
              onClick={handleRetry}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Try Again
            </button>
          )}
          
          {showReload && (
            <button
              onClick={handleReload}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Reload Page
            </button>
          )}
        </div>
        
        {showDetails && error && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-3 rounded border overflow-auto max-h-40">
              {error.message}
              {error.stack && (
                <>
                  {'\n\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

// Network Error Fallback
export const NetworkErrorFallback: React.FC<BaseErrorFallbackProps> = (props) => (
  <BaseErrorFallback
    {...props}
    title="Connection Problem"
    message="Unable to connect to our servers. Please check your internet connection and try again."
    className="bg-orange-50"
  />
);

// Authentication Error Fallback
export const AuthenticationErrorFallback: React.FC<BaseErrorFallbackProps> = (props) => (
  <BaseErrorFallback
    {...props}
    title="Authentication Required"
    message="Your session has expired. Please sign in again to continue."
    showRetry={false}
    showReload={false}
    className="bg-yellow-50"
  />
);

// Permission Error Fallback
export const PermissionErrorFallback: React.FC<BaseErrorFallbackProps> = (props) => (
  <BaseErrorFallback
    {...props}
    title="Access Denied"
    message="You don't have permission to access this resource. Please contact support if you believe this is an error."
    showRetry={false}
    className="bg-red-50"
  />
);

// Generic Error Fallback (for ErrorBoundary)
export const GenericErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetError 
}) => (
  <div className="min-h-screen bg-gray-50">
    <BaseErrorFallback
      title="Application Error"
      message="The application encountered an unexpected error. Our team has been notified."
      error={error}
      onRetry={resetError}
      className="min-h-screen"
    />
  </div>
);

// Loading Skeleton Components
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-sm p-6 ${className}`}>
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
);

export const ListSkeleton: React.FC<{ 
  itemCount?: number; 
  className?: string;
}> = ({ itemCount = 5, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: itemCount }).map((_, index) => (
      <div key={index} className="bg-white rounded-lg border shadow-sm p-4">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-10 w-10"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const TableSkeleton: React.FC<{ 
  rows?: number; 
  columns?: number; 
  className?: string;
}> = ({ rows = 5, columns = 4, className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-sm overflow-hidden ${className}`}>
    <div className="animate-pulse">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-3 border-b">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded w-3/4"></div>
          ))}
        </div>
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4 border-b border-gray-100">
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="h-3 bg-gray-200 rounded w-2/3"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Content placeholder for loading states
export const ContentPlaceholder: React.FC<{ 
  lines?: number;
  className?: string;
}> = ({ lines = 3, className = "" }) => (
  <div className={`animate-pulse space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div 
        key={index} 
        className="h-3 bg-gray-200 rounded"
        style={{ 
          width: `${Math.random() * 40 + 60}%` // Random width between 60-100%
        }}
      ></div>
    ))}
  </div>
);

// Loading Spinner Component
export const LoadingSpinner: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ size = 'md', className = "" }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <svg
        className={`animate-spin text-blue-600 ${sizeClasses[size]}`}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

// Loading overlay for async operations
export const LoadingOverlay: React.FC<{ 
  isVisible: boolean;
  message?: string;
  className?: string;
}> = ({ isVisible, message = "Loading...", className = "" }) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50 ${className}`}>
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default BaseErrorFallback; 