import React, { useState, useEffect } from 'react';
import { X, FileText, AlertTriangle, Sparkles, Heart, Stethoscope, CheckCircle, User, Shield, Brain, ArrowRight, ArrowLeft, Save, Info, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import { PatientCase } from '../../types/chat';

interface CaseCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCaseCreate: (caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'>) => void;
  specialty?: 'cardiology' | 'obgyn';
  className?: string;
}

interface FormData {
  title: string;
  description: string;
  anonymizedInfo: string;
  category: string;
  tags: string;
  complexity: 'low' | 'medium' | 'high';
}

interface FormErrors {
  title?: string;
  description?: string;
  anonymizedInfo?: string;
  category?: string;
  tags?: string;
  complexity?: string;
}

export const CaseCreationModal: React.FC<CaseCreationModalProps> = ({
  isOpen,
  onClose,
  onCaseCreate,
  specialty,
  className = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    anonymizedInfo: '',
    category: '',
    tags: '',
    complexity: 'medium'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);

  // Animation control
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.title.trim()) {
          newErrors.title = 'Case title is required';
        }
        if (!formData.description.trim()) {
          newErrors.description = 'Brief description is required';
        }
        break;
      case 2: {
        if (!formData.anonymizedInfo.trim()) {
          newErrors.anonymizedInfo = 'Patient information is required';
        } else if (formData.anonymizedInfo.length < 50) {
          newErrors.anonymizedInfo = 'Please provide more detailed information (minimum 50 characters)';
        }
        // Privacy validation
        const sensitivePatterns = [
          /\b[A-Z][a-z]+ [A-Z][a-z]+\b/,
          /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/,
          /\b\d{3}-?\d{2}-?\d{4}\b/,
        ];
        const hasSensitiveInfo = sensitivePatterns.some(pattern => 
          pattern.test(formData.anonymizedInfo)
        );
        // Privacy validation removed as requested
        break;
      }
      case 3:
        if (!formData.complexity) {
          newErrors.complexity = 'Please select complexity level';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    try {
      const caseData: Omit<PatientCase, 'id' | 'createdAt' | 'updatedAt'> = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        anonymizedInfo: formData.anonymizedInfo.trim(),
        specialty: specialty,
        status: 'active',
        metadata: {
          category: formData.category.trim() || undefined,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
          complexity: formData.complexity
        }
      };

      await onCaseCreate(caseData);
      onClose();
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        anonymizedInfo: '',
        category: '',
        tags: '',
        complexity: 'medium'
      });
      setCurrentStep(1);
      setCompletedSteps([]);
    } catch (error) {
      console.error('Error creating case:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const getSpecialtyConfig = () => {
    if (specialty === 'cardiology') {
      return {
        icon: Heart,
        title: 'Cardiology Case',
        gradient: 'from-red-500 via-pink-500 to-rose-600',
        bgGradient: 'from-red-50 via-pink-50 to-rose-50',
        accentColor: 'red',
        categories: [
          { value: 'diagnosis', label: 'Diagnosis & Assessment' },
          { value: 'interventional', label: 'Interventional Cardiology' },
          { value: 'electrophysiology', label: 'Electrophysiology' },
          { value: 'heart-failure', label: 'Heart Failure' },
          { value: 'preventive', label: 'Preventive Cardiology' },
          { value: 'acute-care', label: 'Acute Cardiac Care' }
        ]
      };
    } else if (specialty === 'obgyn') {
      return {
        icon: Stethoscope,
        title: 'OB/GYN Case',
        gradient: 'from-purple-500 via-violet-500 to-indigo-600',
        bgGradient: 'from-purple-50 via-violet-50 to-indigo-50',
        accentColor: 'purple',
        categories: [
          { value: 'obstetrics', label: 'Obstetrics' },
          { value: 'gynecology', label: 'Gynecology' },
          { value: 'reproductive', label: 'Reproductive Health' },
          { value: 'maternal-fetal', label: 'Maternal-Fetal Medicine' },
          { value: 'oncology', label: 'Gynecologic Oncology' },
          { value: 'fertility', label: 'Fertility & Reproductive Endocrinology' }
        ]
      };
    }
    return {
      icon: Brain,
      title: 'Medical Case',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      accentColor: 'blue',
      categories: [
        { value: 'diagnosis', label: 'Diagnosis' },
        { value: 'treatment', label: 'Treatment' },
        { value: 'consultation', label: 'Consultation' }
      ]
    };
  };

  const specialtyConfig = getSpecialtyConfig();

  const steps = [
    {
      number: 1,
      title: 'Case Overview',
      description: 'Basic case information',
      icon: FileText
    },
    {
      number: 2,
      title: 'Patient Details',
      description: 'Anonymized patient data',
      icon: User
    },
    {
      number: 3,
      title: 'Classification',
      description: 'Category and complexity',
      icon: Activity
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}>
      {/* Enhanced Backdrop */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isOpen 
            ? 'bg-black/60 backdrop-blur-md' 
            : 'bg-black/0 backdrop-blur-none'
        }`}
        onClick={onClose}
      />
      
      {/* Main Modal */}
      <div className={`
        relative w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl
        transition-all duration-500 transform
        ${isOpen 
          ? 'scale-100 opacity-100 translate-y-0' 
          : 'scale-95 opacity-0 translate-y-8'
        }
        max-h-[90vh] flex flex-col
      `}>
        {/* Dynamic Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${specialtyConfig.bgGradient} opacity-30`} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/40 to-transparent rounded-full blur-3xl" />
        
        {/* Header */}
        <div className="relative z-10 p-8 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${specialtyConfig.gradient} shadow-lg`}>
                <specialtyConfig.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  Create New Case
                </h1>
                <p className={`text-lg text-gray-600 bg-gradient-to-r ${specialtyConfig.gradient} bg-clip-text text-transparent font-medium`}>
                  {specialtyConfig.title}
                </p>
              </div>
            </div>
            
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="p-3 rounded-xl hover:bg-gray-100/80 transition-all duration-200 hover:scale-105"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Progress Steps */}
          <div className="mt-8 flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex items-center space-x-3">
                  <div className={`
                    relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${currentStep >= step.number
                      ? `bg-gradient-to-r ${specialtyConfig.gradient} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-400'
                    }
                    ${completedSteps.includes(step.number) ? 'ring-4 ring-green-100' : ''}
                  `}>
                    {completedSteps.includes(step.number) ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                    {currentStep === step.number && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${specialtyConfig.gradient} animate-pulse opacity-30`} />
                    )}
                  </div>
                  <div className="hidden md:block">
                    <h3 className={`font-semibold ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.number 
                      ? `bg-gradient-to-r ${specialtyConfig.gradient}` 
                      : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="relative z-10 p-8 overflow-y-auto flex-1">
          {/* Step 1: Case Overview */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <Sparkles className={`w-16 h-16 mx-auto text-${specialtyConfig.accentColor}-500 mb-4`} />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's start with the basics</h2>
                <p className="text-gray-600">Provide a clear title and brief overview of your case</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Case Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange('title')}
                    placeholder="Brief descriptive title for this case"
                    className={`
                      w-full px-6 py-4 rounded-2xl border-2 transition-all duration-200
                      ${errors.title 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'
                      }
                      focus:outline-none focus:ring-4 focus:ring-blue-100
                      text-lg bg-white/50 backdrop-blur-sm
                    `}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <Info className="w-4 h-4 mr-1" />
                      {errors.title}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Brief Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={handleInputChange('description')}
                    placeholder="Brief overview of the case and what you'd like to discuss"
                    rows={4}
                    className={`
                      w-full px-6 py-4 rounded-2xl border-2 transition-all duration-200 resize-none
                      ${errors.description 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500'
                      }
                      focus:outline-none focus:ring-4 focus:ring-blue-100
                      text-lg bg-white/50 backdrop-blur-sm
                    `}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <Info className="w-4 h-4 mr-1" />
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Patient Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <Shield className={`w-16 h-16 mx-auto text-${specialtyConfig.accentColor}-500 mb-4`} />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Information</h2>
                <p className="text-gray-600">Provide anonymized patient details for case discussion</p>
              </div>

              {/* Privacy Notice */}
              <div className="relative p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-amber-100">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800 mb-2">Privacy Protection Required</h3>
                    <p className="text-amber-700 mb-3">
                      Please ensure all patient information is completely anonymized.
                    </p>
                    <div className="text-sm text-amber-600">
                      <p className="mb-1">• Remove all names, dates, and specific locations</p>
                      <p className="mb-1">• Use general terms (e.g., "50-year-old female")</p>
                      <p>• Remove any identifying numbers or codes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Anonymized Patient Information *
                  <span className="text-gray-500 font-normal ml-2">
                    ({formData.anonymizedInfo.length}/2000 characters, minimum 50)
                  </span>
                </label>
                <textarea
                  value={formData.anonymizedInfo}
                  onChange={handleInputChange('anonymizedInfo')}
                  placeholder="Patient age, gender, presenting symptoms, medical history, test results, etc. (completely anonymized)"
                  rows={8}
                  maxLength={2000}
                  className={`
                    w-full px-6 py-4 rounded-2xl border-2 transition-all duration-200 resize-none
                    ${errors.anonymizedInfo 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500'
                    }
                    focus:outline-none focus:ring-4 focus:ring-blue-100
                    text-lg bg-white/50 backdrop-blur-sm
                  `}
                />
                {errors.anonymizedInfo && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <Info className="w-4 h-4 mr-1" />
                    {errors.anonymizedInfo}
                  </p>
                )}
                
                {/* Character count indicator */}
                <div className="flex justify-between items-center mt-2">
                  <div className={`text-sm ${
                    formData.anonymizedInfo.length >= 50 ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {formData.anonymizedInfo.length >= 50 ? '✓ Minimum length met' : `Need ${50 - formData.anonymizedInfo.length} more characters`}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.anonymizedInfo.length}/2000
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Classification */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center mb-8">
                <Brain className={`w-16 h-16 mx-auto text-${specialtyConfig.accentColor}-500 mb-4`} />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Case Classification</h2>
                <p className="text-gray-600">Help organize and prioritize your case</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {specialtyConfig.categories.map((category) => (
                      <label key={category.value} className="flex items-center p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-200 bg-white/50 backdrop-blur-sm">
                        <input
                          type="radio"
                          name="category"
                          value={category.value}
                          checked={formData.category === category.value}
                          onChange={handleInputChange('category')}
                          className="mr-3 w-4 h-4"
                        />
                        <span className="font-medium text-gray-900">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Complexity Level *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'low', label: 'Low Complexity', description: 'Routine case, clear presentation', color: 'green' },
                      { value: 'medium', label: 'Medium Complexity', description: 'Some complexity, multiple factors', color: 'yellow' },
                      { value: 'high', label: 'High Complexity', description: 'Complex case, multiple specialties', color: 'red' }
                    ].map((complexity) => (
                      <label key={complexity.value} className={`
                        flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 bg-white/50 backdrop-blur-sm
                        ${formData.complexity === complexity.value 
                          ? `border-${complexity.color}-400 bg-${complexity.color}-50` 
                          : 'border-gray-200 hover:border-blue-300'
                        }
                      `}>
                        <input
                          type="radio"
                          name="complexity"
                          value={complexity.value}
                          checked={formData.complexity === complexity.value}
                          onChange={handleInputChange('complexity')}
                          className="mr-3 w-4 h-4"
                        />
                        <div>
                          <span className="font-medium block text-gray-900">{complexity.label}</span>
                          <span className="text-sm text-gray-600">{complexity.description}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.complexity && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <Info className="w-4 h-4 mr-1" />
                      {errors.complexity}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tags (Optional)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={handleInputChange('tags')}
                  placeholder="hypertension, diabetes, emergency (comma-separated)"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg bg-white/50 backdrop-blur-sm transition-all duration-200"
                />
                <p className="text-sm text-gray-500 mt-2">Add relevant keywords to help organize and find this case later</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="relative z-10 p-8 border-t border-white/20 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {currentStep > 1 && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-200 text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className={`px-8 py-3 rounded-xl bg-gradient-to-r ${specialtyConfig.gradient} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 [&]:text-white [&]:hover:text-white`}
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-xl bg-gradient-to-r ${specialtyConfig.gradient} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  } [&]:text-white [&]:hover:text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Creating Case...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Create Case
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 