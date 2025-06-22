import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import { SpecialtySelection } from './SpecialtySelection';
import { AboutMeForm } from './AboutMeForm';
import { updateUserProfile } from '../../lib/api/user';

interface OnboardingData {
  specialty: 'cardiology' | 'ob-gyn' | null;
  aboutMe: string;
}

export const OnboardingFlow: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    specialty: null,
    aboutMe: ''
  });
  
  const { user, profile, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const steps = [
    { title: t('onboarding.steps.selectSpecialty'), component: 'specialty' },
    { title: t('onboarding.steps.aboutYou'), component: 'about' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSpecialtySelect = (specialty: 'cardiology' | 'ob-gyn') => {
    setOnboardingData(prev => ({ ...prev, specialty }));
    handleNext();
  };

  const handleAboutMeSubmit = (aboutMe: string) => {
    setOnboardingData(prev => ({ ...prev, aboutMe }));
    handleComplete({ ...onboardingData, aboutMe });
  };

  const handleComplete = async (finalData: OnboardingData) => {
    if (!user || !finalData.specialty) return;

    setIsLoading(true);
    try {
      await updateUserProfile(user.id, {
        medical_specialty: finalData.specialty,
        about_me_context: finalData.aboutMe
      });

      // Refresh the profile to get the updated data
      await refreshProfile();

      // Redirect to specialty-specific workspace
      navigate(`/${finalData.specialty}`, { replace: true });
    } catch (error) {
      console.error('Error completing onboarding:', error);
      // Handle error - maybe show a toast or error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipAboutMe = () => {
    handleComplete(onboardingData);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('onboarding.settingUpWorkspace')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-3">
              {t('onboarding.welcome')}
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
              {t('onboarding.setupMessage')}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`
                relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300
                ${index <= currentStep 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-slate-200 text-slate-500'
                }
              `}>
                <span className="relative z-10">{index + 1}</span>
                {index <= currentStep && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse opacity-75"></div>
                )}
              </div>
              <span className={`ml-4 text-lg font-semibold transition-colors duration-300 ${
                index <= currentStep ? 'text-blue-700' : 'text-slate-500'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-24 h-0.5 mx-8 transition-colors duration-300 ${
                  index < currentStep ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className={`
          transition-all duration-500 transform
          ${currentStep === 0 ? 'bg-transparent' : 'bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8'}
        `}>
          {currentStep === 0 && (
            <SpecialtySelection 
              onSelect={handleSpecialtySelect}
              selectedSpecialty={onboardingData.specialty}
            />
          )}
          
          {currentStep === 1 && (
            <AboutMeForm
              onSubmit={handleAboutMeSubmit}
              onSkip={handleSkipAboutMe}
              onBack={handleBack}
              initialValue={onboardingData.aboutMe}
            />
          )}
        </div>
      </div>
    </div>
  );
}; 