import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  FileText, 
  Clock,
  Sparkles,
  List,
  Bug
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useSpecialty } from '../../contexts/SpecialtyContext';
import DocumentSelector from './DocumentSelector';
import PodcastGenerator from './PodcastGenerator';
import GenerationProgress from './GenerationProgress';
import PodcastHistory from './PodcastHistory';
import PodcastPlayer from './PodcastPlayer';
import PodcastDebug from './PodcastDebug';

interface PodcastStudioProps {}

const PodcastStudio: React.FC<PodcastStudioProps> = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { specialty } = useSpecialty();
  const [activeTab, setActiveTab] = useState<'generate' | 'history' | 'debug'>('generate');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [currentPodcast, setCurrentPodcast] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [queueStatus, setQueueStatus] = useState<any>(null);

  const tabs = [
    {
      id: 'generate' as const,
      label: t('podcast.tabs.generate'),
      icon: Sparkles,
      description: t('podcast.tabs.generateDescription')
    },
    {
      id: 'history' as const,
      label: t('podcast.tabs.history'),
      icon: List,
      description: t('podcast.tabs.historyDescription')
    },
    {
      id: 'debug' as const,
      label: 'Debug',
      icon: Bug,
      description: 'Troubleshoot podcast issues'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('podcast.title')}
                </h1>
                <p className="text-sm text-gray-600">
                  {t('podcast.subtitle', { specialty: specialty })}
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center space-x-1 bg-gray-100/60 p-1 rounded-xl">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white rounded-lg shadow-sm"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'generate' ? (
            <motion.div
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  {t('podcast.generate.title')}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {t('podcast.generate.description')}
                </motion.p>
              </div>

              {/* Generation Flow */}
              {!isGenerating && !currentPodcast ? (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Document Selection */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <DocumentSelector
                      selectedDocuments={selectedDocuments}
                      onSelectionChange={setSelectedDocuments}
                      specialty={specialty}
                    />
                  </motion.div>

                  {/* Generation Settings */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <PodcastGenerator
                      selectedDocuments={selectedDocuments}
                      onGenerationStart={(podcastData) => {
                        setIsGenerating(true);
                        setCurrentPodcast(podcastData);
                      }}
                      onQueueUpdate={setQueueStatus}
                      onGenerationComplete={(completedPodcast) => {
                        setIsGenerating(false);
                        setCurrentPodcast(completedPodcast);
                      }}
                    />
                  </motion.div>
                </div>
              ) : isGenerating ? (
                /* Generation Progress */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <GenerationProgress
                    podcast={currentPodcast}
                    queueStatus={queueStatus}
                    onComplete={(completedPodcast) => {
                      setIsGenerating(false);
                      setCurrentPodcast(completedPodcast);
                    }}
                    onCancel={() => {
                      setIsGenerating(false);
                      setCurrentPodcast(null);
                    }}
                  />
                </motion.div>
              ) : (
                /* Completed Podcast Player */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <PodcastPlayer
                    podcast={currentPodcast}
                    onNewGeneration={() => {
                      setCurrentPodcast(null);
                      setSelectedDocuments([]);
                    }}
                  />
                  
                  {/* Quick Actions */}
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setActiveTab('history')}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <List className="w-4 h-4" />
                      <span>View All Podcasts</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setCurrentPodcast(null);
                        setSelectedDocuments([]);
                      }}
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Another</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            activeTab === 'history' ? (
              /* Podcast History */
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PodcastHistory
                  specialty={specialty}
                  onPlayPodcast={setCurrentPodcast}
                />
              </motion.div>
            ) : (
              /* Debug Panel */
              <motion.div
                key="debug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PodcastDebug />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Features Showcase */}
      {activeTab === 'generate' && !isGenerating && !currentPodcast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('podcast.features.title')}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('podcast.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: t('podcast.features.intelligent.title'),
                  description: t('podcast.features.intelligent.description')
                },
                {
                  icon: Mic,
                  title: t('podcast.features.voices.title'),
                  description: t('podcast.features.voices.description')
                },
                {
                  icon: Clock,
                  title: t('podcast.features.efficient.title'),
                  description: t('podcast.features.efficient.description')
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PodcastStudio;