import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Settings,
  Play,
  AlertTriangle,
  Mic,
  Clock,
  FileText
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { generatePodcast } from '../../lib/api/podcastUpload';

interface PodcastGeneratorProps {
  selectedDocuments: string[];
  onGenerationStart: (podcastData: any) => void;
  onQueueUpdate: (queueStatus: any) => void;
}

type SynthesisStyle = 'podcast' | 'executive-briefing' | 'debate';

interface GenerationSettings {
  title: string;
  description: string;
  synthesisStyle: SynthesisStyle;
}

const PodcastGenerator: React.FC<PodcastGeneratorProps> = ({
  selectedDocuments,
  onGenerationStart,
  onQueueUpdate
}) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [settings, setSettings] = useState<GenerationSettings>({
    title: '',
    description: '',
    synthesisStyle: 'podcast'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string>('');
  const [estimatedDuration, setEstimatedDuration] = useState<number>(10);

  const synthesisStyles = [
    {
      value: 'podcast' as const,
      label: t('podcast.generator.styles.podcast.title'),
      description: t('podcast.generator.styles.podcast.description'),
      icon: Mic,
      duration: '8-12 min',
      color: 'blue'
    },
    {
      value: 'executive-briefing' as const,
      label: t('podcast.generator.styles.briefing.title'),
      description: t('podcast.generator.styles.briefing.description'),
      icon: FileText,
      duration: '5-8 min',
      color: 'green'
    },
    {
      value: 'debate' as const,
      label: t('podcast.generator.styles.debate.title'),
      description: t('podcast.generator.styles.debate.description'),
      icon: Sparkles,
      duration: '10-15 min',
      color: 'purple'
    }
  ];

  useEffect(() => {
    // Auto-generate title based on selected documents
    if (selectedDocuments.length > 0) {
      const baseTitle = selectedDocuments.length === 1 
        ? t('podcast.generator.autoTitle.single')
        : t('podcast.generator.autoTitle.multiple', { count: selectedDocuments.length });
      
      if (!settings.title) {
        setSettings(prev => ({ ...prev, title: baseTitle }));
      }
    }
  }, [selectedDocuments, t]);

  useEffect(() => {
    // Update estimated duration based on style
    const style = synthesisStyles.find(s => s.value === settings.synthesisStyle);
    if (style) {
      const duration = style.value === 'podcast' ? 10 : 
                      style.value === 'executive-briefing' ? 6 : 12;
      setEstimatedDuration(duration);
    }
  }, [settings.synthesisStyle]);

  const handleGenerate = async () => {
    if (!user?.id || selectedDocuments.length === 0) return;

    setIsGenerating(true);
    setError('');

    try {
      console.log('🎵 Starting podcast generation with Supabase Edge Function...');
      
      const result = await generatePodcast({
        userId: user.id,
        documentIds: selectedDocuments,
        title: settings.title,
        description: settings.description,
        synthesisStyle: settings.synthesisStyle,
        specialty: user.medical_specialty || 'general'
      });

      console.log('✅ Podcast generation result:', result);

      if (result.status === 'queued') {
        onQueueUpdate(result);
      }

      onGenerationStart({
        id: result.podcastId,
        status: result.status,
        title: settings.title,
        description: settings.description,
        synthesisStyle: settings.synthesisStyle,
        queuePosition: result.queuePosition,
        estimatedWaitTime: result.estimatedWaitTime
      });

    } catch (err) {
      console.error('❌ Generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start generation');
    } finally {
      setIsGenerating(false);
    }
  };

  const canGenerate = selectedDocuments.length > 0 && 
                     settings.title.trim().length > 0 && 
                     !isGenerating;

  const getStyleColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
          <Settings className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {t('podcast.generator.title')}
          </h3>
          <p className="text-sm text-gray-600">
            {t('podcast.generator.subtitle')}
          </p>
        </div>
      </div>

      {/* Settings Form */}
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('podcast.generator.fields.title.label')}
          </label>
          <input
            type="text"
            value={settings.title}
            onChange={(e) => setSettings(prev => ({ ...prev, title: e.target.value }))}
            placeholder={t('podcast.generator.fields.title.placeholder')}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            maxLength={100}
          />
          <div className="flex justify-between mt-1">
            <p className="text-xs text-gray-500">
              {t('podcast.generator.fields.title.help')}
            </p>
            <p className="text-xs text-gray-400">
              {settings.title.length}/100
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('podcast.generator.fields.description.label')}
            <span className="text-gray-400 font-normal ml-1">
              ({t('common.optional')})
            </span>
          </label>
          <textarea
            value={settings.description}
            onChange={(e) => setSettings(prev => ({ ...prev, description: e.target.value }))}
            placeholder={t('podcast.generator.fields.description.placeholder')}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
            maxLength={500}
          />
          <p className="text-xs text-gray-400 mt-1 text-right">
            {settings.description.length}/500
          </p>
        </div>

        {/* Synthesis Style */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('podcast.generator.fields.style.label')}
          </label>
          <div className="grid gap-3">
            {synthesisStyles.map((style) => {
              const Icon = style.icon;
              const isSelected = settings.synthesisStyle === style.value;
              
              return (
                <motion.div
                  key={style.value}
                  layout
                  className={`
                    relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200
                    ${isSelected
                      ? 'border-purple-200 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setSettings(prev => ({ ...prev, synthesisStyle: style.value }))}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${getStyleColor(style.color)}
                    `}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">
                          {style.label}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{style.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {style.description}
                      </p>
                    </div>

                    {/* Selection indicator */}
                    <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
                      ${isSelected
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-300'
                      }
                    `}>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Estimated Duration */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              {t('podcast.generator.estimatedDuration', { duration: estimatedDuration })}
            </span>
          </div>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 text-red-600 text-sm p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: canGenerate ? 1.02 : 1 }}
          whileTap={{ scale: canGenerate ? 0.98 : 1 }}
          disabled={!canGenerate}
          onClick={handleGenerate}
          className={`
            w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-semibold transition-all duration-200
            ${canGenerate
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t('podcast.generator.generating')}</span>
              </motion.div>
            ) : (
              <motion.div
                key="generate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-3"
              >
                <Play className="w-5 h-5" />
                <span>{t('podcast.generator.generate')}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Requirements */}
        {!canGenerate && (
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {selectedDocuments.length === 0 
                ? t('podcast.generator.requirements.documents')
                : t('podcast.generator.requirements.title')
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastGenerator;