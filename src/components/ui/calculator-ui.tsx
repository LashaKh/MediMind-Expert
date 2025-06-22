import React, { forwardRef, HTMLAttributes, ReactNode, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Check, AlertCircle, Info, Eye, EyeOff, Calculator, TrendingUp, Heart, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

// Enhanced Calculator Container
interface CalculatorContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  gradient?: 'medical' | 'cardiology' | 'obgyn' | 'premium';
}

export const CalculatorContainer = forwardRef<HTMLDivElement, CalculatorContainerProps>(
  ({ className, title, subtitle, icon: Icon = Calculator, gradient = 'medical', children, ...props }, ref) => {
    const { t } = useTranslation();
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 dark:border-gray-800/20",
          gradient === 'medical' && "bg-gradient-to-br from-blue-50/80 via-white/90 to-indigo-50/80 dark:from-blue-900/20 dark:via-gray-900/90 dark:to-indigo-900/20",
          gradient === 'cardiology' && "bg-gradient-to-br from-red-50/80 via-white/90 to-pink-50/80 dark:from-red-900/20 dark:via-gray-900/90 dark:to-pink-900/20",
          gradient === 'obgyn' && "bg-gradient-to-br from-purple-50/80 via-white/90 to-pink-50/80 dark:from-purple-900/20 dark:via-gray-900/90 dark:to-pink-900/20",
          gradient === 'premium' && "bg-gradient-to-br from-amber-50/80 via-white/90 to-yellow-50/80 dark:from-amber-900/20 dark:via-gray-900/90 dark:to-yellow-900/20",
          className
        )}
        {...props}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.3),_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(120,119,198,0.2),_transparent_50%)]"></div>
        </div>

        {/* Header Section */}
        <div className="relative p-8 pb-6 border-b border-white/20 dark:border-gray-800/20">
          <div className="flex items-center space-x-6">
            {/* Animated Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-gray-100 dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-1 font-medium">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Quality Badge */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{t('calculators.common.validated')}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8">
          {children}
        </div>
      </div>
    )
  }
);

// Enhanced Input Field
interface CalculatorInputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  error?: string;
  helpText?: string;
  unit?: string;
  icon?: React.ComponentType<{ className?: string }>;
  type?: 'text' | 'number' | 'email';
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export const CalculatorInput = forwardRef<HTMLInputElement, CalculatorInputProps>(
  ({ className, label, value, error, helpText, unit, icon: Icon, type = 'text', required, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
      if (value && !error) {
        setIsValid(true);
      } else if (error) {
        setIsValid(false);
      } else {
        setIsValid(null);
      }
    }, [value, error]);

    return (
      <div className="space-y-2">
        {/* Label with Help Icon */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            {Icon && <Icon className="w-4 h-4 text-blue-500" />}
            <span>{label}</span>
            {required && <span className="text-red-500 text-xs">*</span>}
          </label>
          {helpText && (
            <div className="group relative">
              <Info className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-help transition-colors" />
              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block z-10">
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg py-2 px-3 max-w-xs shadow-xl">
                  {helpText}
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Container */}
        <div className="relative group">
          <input
            ref={ref}
            type={type}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium",
              "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
              "focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              unit && "pr-16",
              error && "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20",
              !error && isValid && "border-green-300 dark:border-green-600",
              !error && !isValid && isFocused && "border-blue-300 dark:border-blue-600",
              !error && !isValid && !isFocused && "border-gray-300 dark:border-gray-600",
              className
            )}
            {...props}
          />

          {/* Unit Display */}
          {unit && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {unit}
            </div>
          )}

          {/* Validation Icon */}
          {isValid !== null && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isValid ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}

          {/* Focus Ring Animation */}
          {isFocused && (
            <div className="absolute inset-0 rounded-xl border-2 border-blue-500 animate-pulse"></div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400 animate-shake">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

// Enhanced Select Field
interface CalculatorSelectProps extends HTMLAttributes<HTMLSelectElement> {
  label: string;
  value: string;
  error?: string;
  helpText?: string;
  icon?: React.ComponentType<{ className?: string }>;
  required?: boolean;
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
}

export const CalculatorSelect = forwardRef<HTMLSelectElement, CalculatorSelectProps>(
  ({ className, label, value, error, helpText, icon: Icon, required, options, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
      if (value && !error) {
        setIsValid(true);
      } else if (error) {
        setIsValid(false);
      } else {
        setIsValid(null);
      }
    }, [value, error]);

    return (
      <div className="space-y-2">
        {/* Label */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            {Icon && <Icon className="w-4 h-4 text-blue-500" />}
            <span>{label}</span>
            {required && <span className="text-red-500 text-xs">*</span>}
          </label>
          {helpText && (
            <div className="group relative">
              <Info className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-help transition-colors" />
              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block z-10">
                <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg py-2 px-3 max-w-xs shadow-xl">
                  {helpText}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Select Container */}
        <div className="relative group">
          <select
            ref={ref}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium appearance-none cursor-pointer",
              "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
              "focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500",
              error && "border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20",
              !error && isValid && "border-green-300 dark:border-green-600",
              !error && !isValid && isFocused && "border-blue-300 dark:border-blue-600",
              !error && !isValid && !isFocused && "border-gray-300 dark:border-gray-600",
              className
            )}
            {...props}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown Arrow */}
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

          {/* Validation Icon */}
          {isValid !== null && (
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
              {isValid ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

// Enhanced Checkbox
interface CalculatorCheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const CalculatorCheckbox = forwardRef<HTMLInputElement, CalculatorCheckboxProps>(
  ({ className, label, checked, description, icon: Icon, ...props }, ref) => (
    <div className="group">
      <label className="flex items-start space-x-3 cursor-pointer p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            className="sr-only"
            {...props}
          />
          <div className={cn(
            "w-6 h-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-center",
            checked 
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-500 shadow-lg" 
              : "border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 group-hover:border-blue-300"
          )}>
            {checked && <Check className="w-4 h-4 text-white" />}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="w-4 h-4 text-blue-500" />}
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{label}</span>
          </div>
          {description && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{description}</p>
          )}
        </div>
      </label>
    </div>
  )
);

// Enhanced Button
interface CalculatorButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}

export const CalculatorButton = forwardRef<HTMLButtonElement, CalculatorButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, icon: Icon, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "relative overflow-hidden font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        
        // Variants
        variant === 'primary' && "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500/30",
        variant === 'secondary' && "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl focus:ring-gray-500/30",
        variant === 'success' && "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500/30",
        variant === 'danger' && "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500/30",
        variant === 'outline' && "border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 focus:ring-gray-500/30",
        
        // Sizes
        size === 'sm' && "px-4 py-2 text-sm",
        size === 'md' && "px-6 py-3 text-base",
        size === 'lg' && "px-8 py-4 text-lg",
        size === 'xl' && "px-10 py-5 text-xl",
        
        className
      )}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Button Content */}
      <div className={cn("flex items-center justify-center space-x-2", loading && "opacity-0")}>
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
    </button>
  )
);

// Results Display Component
interface ResultsDisplayProps {
  title: string;
  value: string | number;
  unit?: string;
  category: 'low' | 'borderline' | 'intermediate' | 'high' | 'normal' | 'elevated';
  interpretation?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: ReactNode;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  title,
  value,
  unit,
  category,
  interpretation,
  icon: Icon = TrendingUp,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const getCategoryConfig = (cat: string) => {
    switch (cat) {
      case 'low':
      case 'normal':
        return {
          color: 'text-green-600 dark:text-green-400',
          bg: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
          border: 'border-green-200 dark:border-green-800',
          badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
        };
      case 'borderline':
      case 'elevated':
        return {
          color: 'text-yellow-600 dark:text-yellow-400',
          bg: 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20',
          border: 'border-yellow-200 dark:border-yellow-800',
          badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
        };
      case 'intermediate':
        return {
          color: 'text-orange-600 dark:text-orange-400',
          bg: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
          border: 'border-orange-200 dark:border-orange-800',
          badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
        };
      case 'high':
        return {
          color: 'text-red-600 dark:text-red-400',
          bg: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
          border: 'border-red-200 dark:border-red-800',
          badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
        };
      default:
        return {
          color: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
          border: 'border-blue-200 dark:border-blue-800',
          badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
        };
    }
  };

  const config = getCategoryConfig(category);

  return (
    <div className={cn(
      "p-8 rounded-2xl border-2 backdrop-blur-sm relative overflow-hidden transition-all duration-300",
      config.bg,
      config.border
    )}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white to-transparent rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="relative space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn("p-3 rounded-xl", config.badge)}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          </div>
          <div className={cn("px-4 py-2 rounded-full text-sm font-bold", config.badge)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        </div>

        {/* Main Result */}
        <div className="text-center py-6">
          <div className={cn("text-5xl font-bold mb-2", config.color)}>
            {value}
            {unit && <span className="text-2xl ml-1 opacity-80">{unit}</span>}
          </div>
          {interpretation && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {t('common.detailed_analysis') || 'Detailed Analysis'}
              </h3>
              <p className="text-blue-800">{interpretation}</p>
            </div>
          )}
        </div>

        {/* Expandable Details */}
        {children && (
          <div className="border-t border-white/20 dark:border-gray-800/20 pt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors"
            >
              <span className="font-semibold text-gray-900 dark:text-gray-100">{t('common.detailed_analysis') || 'Detailed Analysis'}</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            
            {isExpanded && (
              <div className="mt-4 space-y-4 animate-fadeIn">
                {children}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 