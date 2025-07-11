import React, { useState } from 'react';
import { 
  BookOpen, 
  Database, 
  Sparkles, 
  FileText, 
  Stethoscope,
  Brain,
  GraduationCap,
  Search,
  TrendingUp,
  Shield
} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSpecialty, MedicalSpecialty } from '../../contexts/SpecialtyContext';
import { PersonalKnowledgeBasePage } from './PersonalKnowledgeBasePage';
import { CuratedKnowledgeBasePage } from './CuratedKnowledgeBasePage';

type KnowledgeBaseTab = 'personal' | 'curated';

export const KnowledgeBase: React.FC = () => {
  const { t } = useTranslation();
  const { specialty } = useSpecialty();
  const [activeTab, setActiveTab] = useState<KnowledgeBaseTab>('curated');

  // Get specialty-specific colors and icons
  const getSpecialtyTheme = () => {
    switch (specialty) {
      case MedicalSpecialty.CARDIOLOGY:
        return {
          primary: 'text-red-600',
          primaryBg: 'bg-red-600',
          primaryGradient: 'from-red-500 to-red-600',
          secondaryBg: 'bg-red-50',
          icon: <Stethoscope className="w-8 h-8" />,
          specialtyName: t('navigation.cardiology')
        };
      case MedicalSpecialty.OBGYN:
        return {
          primary: 'text-pink-600',
          primaryBg: 'bg-pink-600',
          primaryGradient: 'from-pink-500 to-pink-600',
          secondaryBg: 'bg-pink-50',
          icon: <FileText className="w-8 h-8" />,
          specialtyName: t('navigation.obgyn')
        };
      default:
        return {
          primary: 'text-purple-600',
          primaryBg: 'bg-purple-600',
          primaryGradient: 'from-purple-500 to-purple-600',
          secondaryBg: 'bg-purple-50',
          icon: <Brain className="w-8 h-8" />,
          specialtyName: t('common.medical')
        };
    }
  };

  const theme = getSpecialtyTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Hero Header with Gradient Background */}
      <div className="relative bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${theme.primaryGradient} opacity-5`}></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
          {/* Main Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              {/* Icon and Title Section */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-2xl ${theme.primaryBg} text-white shadow-lg`}>
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {t('knowledgeBase.title')}
                    </h1>
                    <Sparkles className={`w-6 h-6 ${theme.primary} animate-pulse`} />
                  </div>
                  <div className="flex items-center space-x-2 text-lg text-gray-600">
                    {theme.icon}
                    <span className="font-medium">{theme.specialtyName} {t('knowledgeBase.subtitle')}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {t('knowledgeBase.description')}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 border border-gray-200">
                  <GraduationCap className={`w-5 h-5 ${theme.primary}`} />
                  <span className="text-sm font-medium text-gray-700">{t('knowledgeBase.evidenceBased')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 border border-gray-200">
                  <Search className={`w-5 h-5 ${theme.primary}`} />
                  <span className="text-sm font-medium text-gray-700">{t('knowledgeBase.aiPoweredSearch')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 border border-gray-200">
                  <Shield className={`w-5 h-5 ${theme.primary}`} />
                  <span className="text-sm font-medium text-gray-700">{t('knowledgeBase.securePrivate')}</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 lg:w-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{t('knowledgeBase.quickStats')}</h3>
                  <TrendingUp className={`w-5 h-5 ${theme.primary}`} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('knowledgeBase.medicalGuidelines')}</span>
                    <span className="font-semibold text-gray-900">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('knowledgeBase.researchPapers')}</span>
                    <span className="font-semibold text-gray-900">2,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('knowledgeBase.clinicalProtocols')}</span>
                    <span className="font-semibold text-gray-900">150+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="mt-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('curated')}
                  className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'curated'
                      ? `${theme.primaryBg} text-white shadow-lg transform scale-[1.02]`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">{t('knowledgeBase.curatedKnowledge')}</div>
                    <div className={`text-xs ${activeTab === 'curated' ? 'text-white/80' : 'text-gray-500'}`}>
                      {t('knowledgeBase.curatedKnowledgeDesc')}
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === 'personal'
                      ? 'bg-emerald-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Database className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">{t('knowledgeBase.personalLibrary')}</div>
                    <div className={`text-xs ${activeTab === 'personal' ? 'text-white/80' : 'text-gray-500'}`}>
                      {t('knowledgeBase.personalLibraryDesc')}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>
      </div>

      {/* Tab Content with Enhanced Transitions */}
      <div className="relative">
        <div className={`transition-all duration-500 ${activeTab === 'curated' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
          {activeTab === 'curated' && (
            <div className="min-h-screen">
              <CuratedKnowledgeBasePage />
            </div>
          )}
        </div>
        <div className={`transition-all duration-500 ${activeTab === 'personal' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
          {activeTab === 'personal' && (
            <div className="min-h-screen">
              <PersonalKnowledgeBasePage />
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles for Grid Pattern */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-grid-pattern {
            background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `
      }} />
    </div>
  );
}; 