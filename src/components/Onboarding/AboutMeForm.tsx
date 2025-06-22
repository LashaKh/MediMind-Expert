import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface AboutMeFormProps {
  onSubmit: (aboutMe: string) => void;
  onSkip: () => void;
  onBack: () => void;
  initialValue: string;
}

export const AboutMeForm: React.FC<AboutMeFormProps> = ({
  onSubmit,
  onSkip,
  onBack,
  initialValue
}) => {
  const { t } = useTranslation();
  const [aboutMe, setAboutMe] = useState(initialValue);
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedSuggestion, setFocusedSuggestion] = useState<number | null>(null);
  const [selectedSuggestions, setSelectedSuggestions] = useState<number[]>([]);
  const [isAnimatingSubmit, setIsAnimatingSubmit] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const words = aboutMe.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(aboutMe.trim() === '' ? 0 : words.length);
    setCharacterCount(aboutMe.length);
  }, [aboutMe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimatingSubmit(true);
    
    // Add a small delay for smooth animation
    setTimeout(() => {
      onSubmit(aboutMe);
    }, 600);
  };

  const suggestionPrompts = [
    {
      icon: '🏥',
      title: t('onboarding.aboutMe.suggestions.experience.title'),
      description: t('onboarding.aboutMe.suggestions.experience.description'),
      prompt: t('onboarding.aboutMe.suggestions.experience.prompt')
    },
    {
      icon: '🏢',
      title: t('onboarding.aboutMe.suggestions.practiceSetting.title'),
      description: t('onboarding.aboutMe.suggestions.practiceSetting.description'),
      prompt: t('onboarding.aboutMe.suggestions.practiceSetting.prompt')
    },
    {
      icon: '🎯',
      title: t('onboarding.aboutMe.suggestions.clinicalInterests.title'),
      description: t('onboarding.aboutMe.suggestions.clinicalInterests.description'),
      prompt: t('onboarding.aboutMe.suggestions.clinicalInterests.prompt')
    },
    {
      icon: '👥',
      title: t('onboarding.aboutMe.suggestions.patientPopulation.title'),
      description: t('onboarding.aboutMe.suggestions.patientPopulation.description'),
      prompt: t('onboarding.aboutMe.suggestions.patientPopulation.prompt')
    },
    {
      icon: '🔬',
      title: t('onboarding.aboutMe.suggestions.clinicalApproach.title'),
      description: t('onboarding.aboutMe.suggestions.clinicalApproach.description'),
      prompt: t('onboarding.aboutMe.suggestions.clinicalApproach.prompt')
    },
    {
      icon: '🎓',
      title: t('onboarding.aboutMe.suggestions.education.title'),
      description: t('onboarding.aboutMe.suggestions.education.description'),
      prompt: t('onboarding.aboutMe.suggestions.education.prompt')
    }
  ];

  const handleSuggestionClick = (index: number, prompt: string) => {
    setSelectedSuggestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
    
    if (!selectedSuggestions.includes(index)) {
      const currentText = aboutMe.trim();
      const newText = currentText 
        ? `${currentText}\n\n${prompt}: ` 
        : `${prompt}: `;
      setAboutMe(newText);
    }
  };

  const getProgressWidth = () => {
    const minWords = 50;
    const maxWords = 200;
    const progress = Math.min(wordCount / minWords * 100, 100);
    return Math.max(progress, 0);
  };

  const getProgressColor = () => {
    const progress = getProgressWidth();
    if (progress < 25) return 'bg-red-400';
    if (progress < 50) return 'bg-yellow-400';
    if (progress < 75) return 'bg-blue-400';
    return 'bg-green-400';
  };

  const getProgressMessage = () => {
    const progress = getProgressWidth();
    if (progress < 25) return t('onboarding.aboutMe.progressMessages.gettingStarted');
    if (progress < 50) return t('onboarding.aboutMe.progressMessages.goodProgress');
    if (progress < 75) return t('onboarding.aboutMe.progressMessages.lookingGreat');
    return t('onboarding.aboutMe.progressMessages.perfectDetail');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Animated Header */}
      <div className={`text-center mb-12 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent leading-tight">
            {t('onboarding.aboutMe.title')}
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
          {t('onboarding.aboutMe.subtitle')}
        </p>

        {/* Floating Progress Indicators */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600 font-medium">{t('onboarding.aboutMe.wordCount', { count: wordCount })}</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600 font-medium">{getProgressMessage()}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Main Input Section */}
        <div className={`transition-all duration-700 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative">
            {/* Enhanced Label */}
            <label htmlFor="about-me" className="block text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <span className="mr-3 text-2xl">✨</span>
              {t('onboarding.aboutMe.label')}
            </label>

            {/* Advanced Textarea with Floating Elements */}
            <div className="relative group">
              <textarea
                id="about-me"
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                placeholder={t('onboarding.aboutMe.placeholder')}
                rows={8}
                className="w-full px-6 py-6 text-lg border-2 border-slate-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:bg-white/90"
              />
              
              {/* Floating Character Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1 bg-slate-800 text-white text-xs rounded-full">
                  {t('onboarding.aboutMe.charactersCount', { count: characterCount })}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute -bottom-1 left-6 right-6">
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${getProgressColor()}`}
                    style={{ width: `${getProgressWidth()}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-500 font-medium">
                  {t('onboarding.aboutMe.wordCount', { count: wordCount })}
                </span>
                {wordCount > 500 && (
                  <span className="text-sm text-amber-600 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {t('onboarding.aboutMe.keepConcise')}
                  </span>
                )}
              </div>
              <div className="text-sm text-slate-500">
                {t('onboarding.aboutMe.recommended')}
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Cards Grid */}
        <div className={`transition-all duration-700 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center">
              <span className="mr-3">💡</span>
              {t('onboarding.aboutMe.suggestionsTitle')}
            </h3>
            <p className="text-slate-600 text-lg">
              {t('onboarding.aboutMe.suggestionsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestionPrompts.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(index, suggestion.prompt)}
                onMouseEnter={() => setFocusedSuggestion(index)}
                onMouseLeave={() => setFocusedSuggestion(null)}
                className={`
                  group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform
                  ${selectedSuggestions.includes(index)
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 scale-105 shadow-lg'
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl hover:scale-102'
                  }
                  ${focusedSuggestion === index ? 'shadow-xl scale-102' : ''}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Selection Indicator */}
                {selectedSuggestions.includes(index) && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {suggestion.icon}
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-slate-800 mb-2">
                  {suggestion.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {suggestion.description}
                </p>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-all duration-300
                  ${focusedSuggestion === index || selectedSuggestions.includes(index)
                    ? 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'
                    : ''
                  }
                `} />
              </div>
            ))}
          </div>
        </div>

        {/* Example Section */}
        <div className={`transition-all duration-700 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-3">📝</span>
              {t('onboarding.aboutMe.exampleTitle')}
            </h3>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
              <p className="text-blue-700 italic leading-relaxed">
                {t('onboarding.aboutMe.exampleText')}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex justify-between items-center pt-8 transition-all duration-700 delay-900 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <button
            type="button"
            onClick={onBack}
            className="group px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-2xl hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-300/50 transition-all duration-300 flex items-center space-x-2"
          >
            <svg className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('onboarding.aboutMe.back')}</span>
          </button>
          
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onSkip}
              className="px-8 py-4 text-lg font-semibold text-slate-600 bg-white border-2 border-slate-300 rounded-2xl hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-300/50 transition-all duration-300"
            >
              {t('onboarding.aboutMe.skipForNow')}
            </button>
            <button
              type="submit"
              disabled={isAnimatingSubmit}
              className={`
                relative overflow-hidden px-10 py-4 text-lg font-bold text-white rounded-2xl 
                focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300
                ${isAnimatingSubmit 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 scale-105' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-xl'
                }
                disabled:cursor-not-allowed
              `}
            >
              {isAnimatingSubmit ? (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>{t('onboarding.aboutMe.creatingWorkspace')}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>{t('onboarding.aboutMe.completeSetup')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}

              {/* Animated Background Effect */}
              <div className={`
                absolute inset-0 transition-all duration-500
                ${isAnimatingSubmit 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-400 opacity-20 animate-pulse' 
                  : 'opacity-0'
                }
              `} />
            </button>
          </div>
        </div>
      </form>

      {/* Floating Success Message */}
      {isAnimatingSubmit && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-200 animate-bounce">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{t('onboarding.aboutMe.profileCreated')}</h3>
                <p className="text-slate-600">{t('onboarding.aboutMe.settingUpPersonalized')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        .scale-102 {
          transform: scale(1.02);
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}; 