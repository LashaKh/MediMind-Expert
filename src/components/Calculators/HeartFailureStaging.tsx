import React, { useState, useEffect } from 'react';
import { 
  Calculator, Info, Heart, AlertTriangle, Activity, TrendingUp, User, Target, 
  Stethoscope, Clock, Pill, CheckCircle, AlertCircle, XCircle, Lightbulb, 
  CheckCircle2, UserCheck, ExternalLink, BookOpen, Sparkles, Award, Shield, 
  Brain, Zap, Star, ArrowRight, ChevronDown, ChevronUp 
} from 'lucide-react';

interface StagingData {
  stageA_riskFactors: boolean;
  stageA_cardiotoxins: boolean;
  stageA_genetic: boolean;
  stageB_structural: boolean;
  stageB_filling: boolean;
  stageB_biomarkers: boolean;
  stageC_symptoms: boolean;
  stageD_advanced: boolean;
}

interface CalculationResult {
  stage: 'A' | 'B' | 'C' | 'D';
  description: string;
  recommendations: string[];
  nextSteps: string[];
  riskLevel: 'low' | 'intermediate' | 'high';
}

const AnimatedCheckbox: React.FC<{
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  index: number;
}> = ({ label, checked, onChange, description, icon: Icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 ease-out cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 ${
        checked 
          ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 border-blue-300/50 dark:border-blue-600/50 shadow-lg shadow-blue-500/10' 
          : 'bg-white/60 dark:bg-gray-800/60 border-gray-200/60 dark:border-gray-700/60 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onChange(!checked)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      
      {/* Content */}
      <div className="relative flex items-start space-x-4">
        {/* Custom animated checkbox */}
        <div className="relative flex-shrink-0 mt-1">
          <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-300 ${
            checked 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-500 shadow-lg shadow-blue-500/25' 
              : 'border-gray-300 dark:border-gray-600 group-hover:border-blue-400'
          }`}>
            <CheckCircle2 className={`w-4 h-4 text-white absolute top-0.5 left-0.5 transition-all duration-300 ${
              checked ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`} />
          </div>
          {/* Animated ripple effect */}
          <div className={`absolute inset-0 rounded-lg bg-blue-500/20 transition-all duration-300 ${
            checked ? 'animate-ping' : 'opacity-0'
          }`} style={{ animationIterationCount: 1 }} />
        </div>
        
        {/* Icon */}
        {Icon && (
          <div className={`p-3 rounded-xl transition-all duration-300 ${
            checked 
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
              : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20'
          }`}>
            <Icon className={`w-5 h-5 transition-all duration-300 ${
              checked 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
            }`} />
          </div>
        )}
        
        {/* Text content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-lg leading-tight transition-all duration-300 ${
            checked 
              ? 'text-gray-900 dark:text-gray-100' 
              : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100'
          }`}>
            {label}
          </h4>
          {description && (
            <p className={`mt-2 text-sm leading-relaxed transition-all duration-300 ${
              checked 
                ? 'text-gray-600 dark:text-gray-400' 
                : 'text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
            }`}>
              {description}
            </p>
          )}
        </div>
        
        {/* Hover indicator */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <ArrowRight className="w-4 h-4 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

const StageSection: React.FC<{
  stage: string;
  title: string;
  description: string;
  children: React.ReactNode;
  isVisible: boolean;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}> = ({ stage, title, description, children, isVisible, color, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  if (!isVisible) return null;
  
  const colorClasses = {
    green: {
      bg: 'from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/20 dark:to-teal-950/20',
      border: 'border-emerald-200/60 dark:border-emerald-800/60',
      icon: 'from-emerald-500 to-teal-500',
      text: 'text-emerald-800 dark:text-emerald-300'
    },
    yellow: {
      bg: 'from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20',
      border: 'border-amber-200/60 dark:border-amber-800/60',
      icon: 'from-amber-500 to-orange-500',
      text: 'text-amber-800 dark:text-amber-300'
    },
    orange: {
      bg: 'from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20',
      border: 'border-orange-200/60 dark:border-orange-800/60',
      icon: 'from-orange-500 to-red-500',
      text: 'text-orange-800 dark:text-orange-300'
    },
    red: {
      bg: 'from-red-50 via-rose-50 to-pink-50 dark:from-red-950/20 dark:via-rose-950/20 dark:to-pink-950/20',
      border: 'border-red-200/60 dark:border-red-800/60',
      icon: 'from-red-500 to-pink-500',
      text: 'text-red-800 dark:text-red-300'
    }
  };
  
  const colorClass = colorClasses[color as keyof typeof colorClasses];
  
  return (
    <div className={`relative overflow-hidden rounded-3xl border-2 ${colorClass.border} backdrop-blur-xl bg-gradient-to-br ${colorClass.bg} transition-all duration-700 ease-out animate-in slide-in-from-bottom-8 fade-in`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-gray-900/40 dark:to-gray-900/20" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
      
      {/* Header */}
      <div 
        className="relative p-8 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Stage badge */}
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClass.icon} shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-2xl font-bold text-white relative z-10">{stage}</span>
              <div className="absolute inset-0 rounded-2xl shadow-lg shadow-black/20" />
            </div>
            
            {/* Icon */}
            <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClass.icon} shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Title and description */}
            <div>
              <h3 className={`text-2xl font-bold ${colorClass.text} mb-2`}>
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {description}
              </p>
            </div>
          </div>
          
          {/* Expand/collapse button */}
          <button className="p-2 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-8">
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CalculatorButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}> = ({ onClick, disabled = false, className = '', variant = 'primary', size = 'md', children }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const baseClasses = "relative overflow-hidden font-semibold rounded-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl shadow-blue-500/25 focus:ring-blue-500/50",
    secondary: "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 shadow-xl focus:ring-gray-500/50"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-12 py-6 text-lg"
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:-translate-y-1'} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Background animation */}
      <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Ripple effect */}
      {isPressed && (
        <div className="absolute inset-0 bg-white/20 animate-ping rounded-2xl" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-3">
        {children}
      </span>
    </button>
  );
};

const ResultCard: React.FC<{
  result: CalculationResult;
}> = ({ result }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const stageColors = {
    A: { bg: 'from-emerald-500 to-teal-500', ring: 'ring-emerald-500/20' },
    B: { bg: 'from-amber-500 to-orange-500', ring: 'ring-amber-500/20' },
    C: { bg: 'from-orange-500 to-red-500', ring: 'ring-orange-500/20' },
    D: { bg: 'from-red-500 to-pink-500', ring: 'ring-red-500/20' }
  };
  
  const stageColor = stageColors[result.stage];
  
  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
      {/* Main result card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 border-2 border-gray-200/60 dark:border-gray-700/60 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        
        {/* Header section */}
        <div className="relative p-10">
          <div className="text-center">
            {/* Stage badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-r ${stageColor.bg} shadow-2xl ${stageColor.ring} ring-8 flex items-center justify-center`}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-4xl font-bold text-white relative z-10">{result.stage}</span>
                <div className="absolute inset-0 rounded-3xl shadow-inner" />
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Heart Failure Stage {result.stage}
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {result.description}
            </p>
          </div>
        </div>
        
        {/* Content grid */}
        <div className="relative px-10 pb-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Recommendations */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Clinical Recommendations
                </h3>
              </div>
              <div className="space-y-4">
                {result.recommendations.map((rec, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-in slide-in-from-left-8 fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Next steps */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Next Steps
                </h3>
              </div>
              <div className="space-y-4">
                {result.nextSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-in slide-in-from-right-8 fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeartFailureStaging: React.FC = () => {
  const [formData, setFormData] = useState<StagingData>({
    stageA_riskFactors: false,
    stageA_cardiotoxins: false,
    stageA_genetic: false,
    stageB_structural: false,
    stageB_filling: false,
    stageB_biomarkers: false,
    stageC_symptoms: false,
    stageD_advanced: false,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStep(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const calculateStage = (): CalculationResult => {
    let riskLevel: 'low' | 'intermediate' | 'high';
    
    if (formData.stageD_advanced) {
      riskLevel = 'high';
      return {
        stage: 'D',
        description: 'Advanced heart failure with refractory symptoms despite guideline-directed medical therapy requiring specialized interventions',
        recommendations: [
          'Advanced heart failure therapies and specialized care coordination',
          'Mechanical circulatory support evaluation with heart team consultation',
          'Heart transplantation evaluation at qualified center',
          'Palliative care consultation for symptom management',
          'Specialized heart failure center referral for comprehensive care',
          'Clinical trial consideration for experimental therapies'
        ],
        nextSteps: [
          'Immediate advanced heart failure specialist consultation',
          'Comprehensive hemodynamic and functional assessment',
          'Multidisciplinary heart team evaluation',
          'End-of-life planning and advanced directive discussions'
        ],
        riskLevel
      };
    }

    if (formData.stageC_symptoms) {
      riskLevel = 'high';
      return {
        stage: 'C',
        description: 'Symptomatic heart failure with structural heart disease requiring guideline-directed medical therapy',
        recommendations: [
          'Comprehensive guideline-directed medical therapy optimization',
          'ACE inhibitor/ARB/ARNI therapy at maximum tolerated dose',
          'Evidence-based beta-blocker therapy initiation and titration',
          'Diuretics for optimal volume management and symptom control',
          'Device therapy evaluation (ICD/CRT) per current guidelines',
          'Regular monitoring and medication optimization'
        ],
        nextSteps: [
          'Cardiology referral for specialized heart failure management',
          'Comprehensive echocardiographic evaluation and monitoring',
          'Laboratory monitoring and medication adjustment',
          'Patient education and self-care management training',
          'Device therapy consideration and electrophysiology consultation'
        ],
        riskLevel
      };
    }

    if (formData.stageB_structural || formData.stageB_filling || formData.stageB_biomarkers) {
      riskLevel = 'intermediate';
      return {
        stage: 'B',
        description: 'Structural heart disease without signs or symptoms of heart failure requiring preventive therapy',
        recommendations: [
          'ACE inhibitor or ARB therapy for cardiac protection',
          'Beta-blocker therapy if prior MI or reduced ejection fraction',
          'Treatment of underlying cardiovascular conditions',
          'Comprehensive risk factor modification program',
          'Regular echocardiographic monitoring for progression',
          'Symptom surveillance and patient education'
        ],
        nextSteps: [
          'Cardiology evaluation for structural heart disease management',
          'Annual or biannual echocardiogram monitoring',
          'Optimal medical therapy initiation and titration',
          'Patient education on heart failure symptoms recognition',
          'Aggressive risk factor management and lifestyle modification'
        ],
        riskLevel
      };
    }

    if (formData.stageA_riskFactors || formData.stageA_cardiotoxins || formData.stageA_genetic) {
      riskLevel = 'low';
      return {
        stage: 'A',
        description: 'At high risk for heart failure development but without structural heart disease or symptoms',
        recommendations: [
          'Optimal hypertension management per current guidelines',
          'Comprehensive diabetes management with target HbA1c <7%',
          'Evidence-based lipid management and statin therapy',
          'Smoking cessation counseling and support programs',
          'Regular aerobic exercise and weight management',
          'Alcohol moderation and dietary sodium restriction'
        ],
        nextSteps: [
          'Primary care optimization with cardiovascular risk focus',
          'Comprehensive risk factor modification program',
          'Patient education on cardiovascular health',
          'Regular monitoring with annual assessments',
          'Baseline echocardiogram if multiple high-risk factors present'
        ],
        riskLevel
      };
    }

    riskLevel = 'low';
    return {
      stage: 'A',
      description: 'Low risk for heart failure development with focus on primary prevention',
      recommendations: [
        'Maintain healthy lifestyle with regular physical activity',
        'Regular cardiovascular health screening and monitoring',
        'Blood pressure monitoring and management',
        'Healthy diet with emphasis on fruits, vegetables, and whole grains'
      ],
      nextSteps: [
        'Continue routine preventive care',
        'Annual health maintenance and screening',
        'Lifestyle counseling and education',
        'Regular follow-up with primary care provider'
      ],
      riskLevel
    };
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const calculationResult = calculateStage();
    setResult(calculationResult);
    setShowResult(true);
    setIsCalculating(false);
  };

  const handleReset = () => {
    setFormData({
      stageA_riskFactors: false,
      stageA_cardiotoxins: false,
      stageA_genetic: false,
      stageB_structural: false,
      stageB_filling: false,
      stageB_biomarkers: false,
      stageC_symptoms: false,
      stageD_advanced: false,
    });
    setResult(null);
    setShowResult(false);
  };

  const hasStageA = formData.stageA_riskFactors || formData.stageA_cardiotoxins || formData.stageA_genetic;
  const hasStageB = formData.stageB_structural || formData.stageB_filling || formData.stageB_biomarkers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center justify-center p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-blue-500/25 mb-8">
            <Heart className="w-12 h-12 text-white mr-4" />
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Heart Failure Staging Calculator
          </h1>
          
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Advanced ACC/AHA classification system for precise heart failure staging with comprehensive clinical guidance
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: Award, text: "ACC/AHA Guidelines" },
              { icon: Shield, text: "Clinical Accuracy" },
              { icon: Brain, text: "AI-Enhanced" },
              { icon: Zap, text: "Real-time Analysis" }
            ].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <badge.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {!showResult ? (
          <div className="space-y-12">
            {/* Stage A */}
            <StageSection
              stage="A"
              title="Risk Factors Assessment"
              description="At high risk for HF but without structural heart disease or symptoms"
              isVisible={true}
              color="green"
              icon={CheckCircle}
            >
              {[
                {
                  label: "Patient with history of hypertension, cardiovascular disease, diabetes, or obesity",
                  checked: formData.stageA_riskFactors,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageA_riskFactors: checked }),
                  description: "Common cardiovascular risk factors that predispose to heart failure development",
                  icon: TrendingUp
                },
                {
                  label: "Patient using cardiotoxins",
                  checked: formData.stageA_cardiotoxins,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageA_cardiotoxins: checked }),
                  description: "Chemotherapy agents or radiation therapy with known cardiotoxic effects",
                  icon: Pill
                },
                {
                  label: "Patient with genetic variant for cardiomyopathy or family history of cardiomyopathy",
                  checked: formData.stageA_genetic,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageA_genetic: checked }),
                  description: "Hereditary predisposition to heart failure and cardiomyopathy",
                  icon: User
                }
              ].map((item, index) => (
                <AnimatedCheckbox key={index} {...item} index={index} />
              ))}
            </StageSection>

            {/* Stage B */}
            <StageSection
              stage="B"
              title="Structural Disease Assessment"
              description="Structural heart disease without signs or symptoms of HF"
              isVisible={hasStageA}
              color="yellow"
              icon={AlertCircle}
            >
              {[
                {
                  label: "Patient with structural heart disease",
                  checked: formData.stageB_structural,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageB_structural: checked }),
                  description: "Reduced LVEF, wall motion abnormalities, LV hypertrophy, or significant valvular disease",
                  icon: Heart
                },
                {
                  label: "Patient with evidence of increased filling pressures",
                  checked: formData.stageB_filling,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageB_filling: checked }),
                  description: "Invasive hemodynamic measurements or noninvasive imaging evidence of elevated pressures",
                  icon: Activity
                },
                {
                  label: "Patient with increased natriuretic peptide levels or persistently elevated cardiac troponin",
                  checked: formData.stageB_biomarkers,
                  onChange: (checked: boolean) => setFormData({ ...formData, stageB_biomarkers: checked }),
                  description: "Elevated BNP/NT-proBNP or persistent troponin elevation in absence of competing diagnoses",
                  icon: Target
                }
              ].map((item, index) => (
                <AnimatedCheckbox key={index} {...item} index={index} />
              ))}
            </StageSection>

            {/* Stage C */}
            <StageSection
              stage="C"
              title="Symptomatic HF Assessment"
              description="Structural heart disease with prior or current symptoms of HF"
              isVisible={hasStageB}
              color="orange"
              icon={AlertTriangle}
            >
              <AnimatedCheckbox
                label="Patient with current or previous signs/symptoms of heart failure"
                checked={formData.stageC_symptoms}
                onChange={(checked: boolean) => setFormData({ ...formData, stageC_symptoms: checked })}
                description="Shortness of breath, dyspnea on exertion, fatigue, reduced exercise tolerance, or fluid retention"
                icon={Stethoscope}
                index={0}
              />
            </StageSection>

            {/* Stage D */}
            <StageSection
              stage="D"
              title="Advanced HF Assessment"
              description="Refractory HF requiring specialized interventions"
              isVisible={formData.stageC_symptoms}
              color="red"
              icon={XCircle}
            >
              <AnimatedCheckbox
                label="Patient with marked heart failure symptoms that interfere with daily life and with recurrent hospitalizations despite attempts to optimize guideline-directed medical therapy"
                checked={formData.stageD_advanced}
                onChange={(checked: boolean) => setFormData({ ...formData, stageD_advanced: checked })}
                description="Advanced heart failure requiring specialized care, mechanical support, or transplant evaluation"
                icon={Clock}
                index={0}
              />
            </StageSection>

            {/* Calculate Button */}
            <div className="flex justify-center pt-12">
              <CalculatorButton
                onClick={handleCalculate}
                disabled={isCalculating}
                size="lg"
                className="min-w-[300px]"
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    <span>Analyzing Heart Failure Stage...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-6 h-6" />
                    <span>Calculate Heart Failure Stage</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </CalculatorButton>
            </div>
          </div>
        ) : (
          result && (
            <div className="space-y-16">
              <ResultCard result={result} />
              
              {/* Creator Insights Section */}
              <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 border-2 border-emerald-200/60 dark:border-emerald-800/60 backdrop-blur-xl overflow-hidden animate-in slide-in-from-bottom-8 fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 dark:from-gray-900/50 dark:to-gray-900/30" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative p-10">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl">
                      <UserCheck className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                        Creator Insights
                      </h2>
                      <p className="text-xl text-emerald-700 dark:text-emerald-300">
                        Expert guidance from leading heart failure specialists
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-xl">
                    <div className="flex items-start space-x-6">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg flex-shrink-0">
                        <UserCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                          Dr. Sharon Hunt, MD
                        </h3>
                        <p className="text-lg text-emerald-700 dark:text-emerald-300 font-semibold mb-4">
                          Stanford University School of Medicine | Heart Failure Specialist
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                          Dr. Hunt is a renowned cardiologist and Professor of Cardiovascular Medicine at Stanford University. 
                          She has dedicated her career to advancing heart failure care and has been instrumental in developing 
                          evidence-based staging systems that improve patient outcomes through early detection and intervention.
                        </p>
                        <a 
                          href="https://pubmed.ncbi.nlm.nih.gov/?term=hunt+s%5Bauthor%5D+AND+heart+failure"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors duration-300"
                        >
                          <BookOpen className="w-5 h-5" />
                          <span>View Publications on PubMed</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evidence & Staging Criteria Section */}
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 border-2 border-blue-200/60 dark:border-blue-800/60 backdrop-blur-xl overflow-hidden animate-in slide-in-from-bottom-8 fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 dark:from-gray-900/50 dark:to-gray-900/30" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative p-10">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                        Evidence & Staging Criteria
                      </h2>
                      <p className="text-xl text-blue-700 dark:text-blue-300">
                        ACC/AHA 2022 Heart Failure Guidelines - Complete Staging Framework
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {[
                      {
                        stage: 'A',
                        title: 'At Risk for Heart Failure',
                        color: 'emerald',
                        criteria: [
                          'Hypertension, atherosclerotic cardiovascular disease, diabetes mellitus, or metabolic syndrome',
                          'History of cardiotoxic drug therapy or radiation',
                          'Genetic variant associated with cardiomyopathy or strong family history of cardiomyopathy'
                        ]
                      },
                      {
                        stage: 'B',
                        title: 'Pre-Heart Failure',
                        color: 'amber',
                        criteria: [
                          'Structural heart disease strongly associated with HF development',
                          'Evidence of increased filling pressures (invasive or noninvasive)',
                          'Persistently elevated natriuretic peptide levels or cardiac troponin'
                        ]
                      },
                      {
                        stage: 'C',
                        title: 'Symptomatic Heart Failure',
                        color: 'orange',
                        criteria: [
                          'Current or previous symptoms of HF with underlying structural heart disease',
                          'Shortness of breath, fatigue, or reduced exercise tolerance',
                          'Evidence of fluid retention or hemodynamic compromise'
                        ]
                      },
                      {
                        stage: 'D',
                        title: 'Advanced Heart Failure',
                        color: 'red',
                        criteria: [
                          'Marked HF symptoms that interfere with daily life despite maximal medical therapy',
                          'Recurrent hospitalizations or inability to be safely discharged',
                          'Consideration for heart transplantation, mechanical circulatory support, or palliative care'
                        ]
                      }
                    ].map((stage, index) => {
                      const colorClasses = {
                        emerald: 'from-emerald-500 to-teal-500',
                        amber: 'from-amber-500 to-orange-500',
                        orange: 'from-orange-500 to-red-500',
                        red: 'from-red-500 to-pink-500'
                      };
                      
                      return (
                        <div key={stage.stage} className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-xl animate-in slide-in-from-left-8 fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[stage.color as keyof typeof colorClasses]} shadow-lg flex items-center justify-center flex-shrink-0`}>
                              <span className="text-xl font-bold text-white">{stage.stage}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Stage {stage.stage}: {stage.title}
                              </h3>
                              <ul className="space-y-2">
                                {stage.criteria.map((criterion, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{criterion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                    <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                      <strong>Reference:</strong> 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. 
                      Circulation. 2022;145(18):e895-e1032. This classification system enables early intervention 
                      and risk stratification to prevent progression and improve outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Management Recommendations Section */}
              <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-rose-950/30 border-2 border-purple-200/60 dark:border-purple-800/60 backdrop-blur-xl overflow-hidden animate-in slide-in-from-bottom-8 fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 dark:from-gray-900/50 dark:to-gray-900/30" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative p-10">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
                      <Stethoscope className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                        Management Recommendations
                      </h2>
                      <p className="text-xl text-purple-700 dark:text-purple-300">
                        Stage-specific therapeutic strategies and clinical interventions
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {[
                      {
                        stage: 'A',
                        title: 'Risk Factor Management',
                        color: 'emerald',
                        icon: Shield,
                        recommendations: [
                          'Aggressive hypertension control (target <130/80 mmHg)',
                          'Diabetes management with HbA1c target <7%',
                          'Lipid optimization with high-intensity statin therapy',
                          'Smoking cessation counseling and pharmacotherapy',
                          'Regular aerobic exercise (150 min/week moderate intensity)',
                          'Weight management and sodium restriction (<2g/day)'
                        ]
                      },
                      {
                        stage: 'B',
                        title: 'Structural Heart Disease Prevention',
                        color: 'amber',
                        icon: Heart,
                        recommendations: [
                          'ACE inhibitor or ARB (Class I recommendation)',
                          'Beta-blocker if prior MI or reduced LVEF',
                          'Continue all Stage A interventions',
                          'Regular echocardiographic monitoring',
                          'Statins for atherosclerotic cardiovascular disease',
                          'Avoid potentially cardiotoxic medications'
                        ]
                      },
                      {
                        stage: 'C',
                        title: 'Guideline-Directed Medical Therapy',
                        color: 'orange',
                        icon: Pill,
                        recommendations: [
                          'ACE inhibitor/ARB/ARNI at maximum tolerated dose',
                          'Evidence-based beta-blocker therapy',
                          'Diuretics for volume management',
                          'Aldosterone antagonist if appropriate',
                          'Device therapy evaluation (ICD/CRT)',
                          'Sodium-glucose cotransporter 2 inhibitor consideration'
                        ]
                      },
                      {
                        stage: 'D',
                        title: 'Advanced Heart Failure Management',
                        color: 'red',
                        icon: AlertTriangle,
                        recommendations: [
                          'Mechanical circulatory support evaluation',
                          'Heart transplantation assessment',
                          'Palliative care consultation',
                          'Inotropic therapy consideration',
                          'Clinical trial enrollment',
                          'End-of-life planning and advanced directives'
                        ]
                      }
                    ].map((stage, index) => {
                      const colorClasses = {
                        emerald: 'from-emerald-500 to-teal-500',
                        amber: 'from-amber-500 to-orange-500',
                        orange: 'from-orange-500 to-red-500',
                        red: 'from-red-500 to-pink-500'
                      };
                      
                      return (
                        <div key={stage.stage} className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-xl animate-in slide-in-from-right-8 fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[stage.color as keyof typeof colorClasses]} shadow-lg flex-shrink-0`}>
                              <stage.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Stage {stage.stage}: {stage.title}
                              </h3>
                              <ul className="space-y-2">
                                {stage.recommendations.map((rec, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-purple-800 dark:text-purple-300 leading-relaxed">
                        <strong>Clinical Note:</strong> All recommendations should be individualized based on patient 
                        characteristics, comorbidities, and clinical judgment. Regular monitoring and medication 
                        optimization are essential for optimal outcomes at every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <CalculatorButton
                  onClick={handleReset}
                  variant="secondary"
                  size="lg"
                >
                  <Info className="w-5 h-5" />
                  <span>New Assessment</span>
                </CalculatorButton>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HeartFailureStaging;
export { HeartFailureStaging }; 