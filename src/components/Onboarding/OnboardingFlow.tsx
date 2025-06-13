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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('onboarding.welcome')}
          </h1>
          <p className="text-gray-600">
            {t('onboarding.setupMessage')}
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${index <= currentStep 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
                }
              `}>
                {index + 1}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                index <= currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-16 h-px mx-4 ${
                  index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
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