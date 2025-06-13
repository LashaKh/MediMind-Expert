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

  useEffect(() => {
    const words = aboutMe.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [aboutMe]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(aboutMe);
  };

  const suggestionPrompts = [
    t('onboarding.aboutMe.suggestions.experience'),
    t('onboarding.aboutMe.suggestions.workplace'),
    t('onboarding.aboutMe.suggestions.interests'),
    t('onboarding.aboutMe.suggestions.cases'),
    t('onboarding.aboutMe.suggestions.approaches'),
    t('onboarding.aboutMe.suggestions.education')
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {t('onboarding.aboutMe.title')}
        </h2>
        <p className="text-gray-600">
          {t('onboarding.aboutMe.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="about-me" className="block text-sm font-medium text-gray-700 mb-2">
            {t('onboarding.aboutMe.label')}
          </label>
          <textarea
            id="about-me"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder={t('onboarding.aboutMe.placeholder')}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">
              {t('onboarding.aboutMe.wordCount', { count: wordCount.toString() })}
            </p>
            {wordCount > 500 && (
              <p className="text-xs text-amber-600">
                {t('onboarding.aboutMe.keepConcise')}
              </p>
            )}
          </div>
        </div>

        {/* Suggestion prompts */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            💡 {t('onboarding.aboutMe.suggestionsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            {suggestionPrompts.map((prompt, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{prompt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Example */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-700 mb-2">
            📝 {t('onboarding.aboutMe.exampleTitle')}
          </h3>
          <p className="text-sm text-blue-600 italic">
            {t('onboarding.aboutMe.exampleText')}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('common.back')}
          </button>
          
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onSkip}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('onboarding.aboutMe.skipForNow')}
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('onboarding.aboutMe.completeSetup')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}; 