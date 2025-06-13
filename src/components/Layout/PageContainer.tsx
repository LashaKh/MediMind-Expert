import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'gray' | 'white' | 'transparent';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  maxWidth = 'full',
  padding = 'md',
  background = 'gray'
}) => {
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm': return 'max-w-3xl';
      case 'md': return 'max-w-4xl';
      case 'lg': return 'max-w-6xl';
      case 'xl': return 'max-w-7xl';
      case '2xl': return 'max-w-8xl';
      case 'full': return 'max-w-none';
      default: return 'max-w-none';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'none': return '';
      case 'sm': return 'p-3 md:p-4';
      case 'md': return 'p-4 md:p-6 lg:p-8';
      case 'lg': return 'p-6 md:p-8 lg:p-12';
      default: return 'p-4 md:p-6 lg:p-8';
    }
  };

  const getBackgroundClass = () => {
    switch (background) {
      case 'gray': return 'bg-gray-50 dark:bg-gray-900';
      case 'white': return 'bg-white dark:bg-gray-800';
      case 'transparent': return 'bg-transparent';
      default: return 'bg-gray-50 dark:bg-gray-900';
    }
  };

  return (
    <div className={`
      h-full w-full overflow-auto
      ${getBackgroundClass()}
      ${className}
    `}>
      <div className={`
        ${getMaxWidthClass()}
        mx-auto
        ${getPaddingClass()}
      `}>
        {children}
      </div>
    </div>
  );
}; 