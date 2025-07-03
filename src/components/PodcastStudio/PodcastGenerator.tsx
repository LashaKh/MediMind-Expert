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
  FileText,
  Zap,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { generatePodcast } from '../../lib/api/podcastUpload';
import { startPolling, PlayAIStatusResponse } from '../../lib/api/playaiStatus';

interface PodcastGeneratorProps {
  selectedDocuments: string[];
  onGenerationStart: (podcastData: any) => void;
  onQueueUpdate: (queueStatus: any) => void;
  onGenerationComplete?: (podcastData: any) => void;
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
  onQueueUpdate,
  onGenerationComplete
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
  const [generationStatus, setGenerationStatus] = useState<PlayAIStatusResponse | null>(null);
  const [currentPodcastId, setCurrentPodcastId] = useState<string | null>(null);
  const [stopPolling, setStopPolling] = useState<(() => void) | null>(null);

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

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (stopPolling) {
        stopPolling();
      }
    };
  }, [stopPolling]);

  const handleGenerate = async () => {
    if (!user?.id || selectedDocuments.length === 0) return;

    setIsGenerating(true);
    setError('');
    setGenerationStatus(null);

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

      // Store podcast ID for polling
      setCurrentPodcastId(result.podcastId);

      onGenerationStart({
        id: result.podcastId,
        status: result.status,
        title: settings.title,
        description: settings.description,
        synthesisStyle: settings.synthesisStyle,
        queuePosition: result.queuePosition,
        estimatedWaitTime: result.estimatedWaitTime
      });

      // Start polling if we have a playnoteId
      if (result.playnoteId) {
        console.log('🔄 Starting polling for playnote:', result.playnoteId);
        
        const cleanup = startPolling(
          result.podcastId,
          result.playnoteId,
          // onStatusUpdate
          (status: PlayAIStatusResponse) => {
            console.log('📊 Status update:', status);
            setGenerationStatus(status);
          },
          // onComplete
          (audioUrl: string, duration?: number) => {
            console.log('✅ Generation completed:', { audioUrl, duration });
            setIsGenerating(false);
            setGenerationStatus({ status: 'completed', audioUrl, duration });
            
            if (onGenerationComplete) {
              onGenerationComplete({
                id: result.podcastId,
                status: 'completed',
                title: settings.title,
                audioUrl,
                duration
              });
            }
          },
          // onError
          (error: string) => {
            console.error('❌ Generation failed:', error);
            setIsGenerating(false);
            setError(error);
            setGenerationStatus({ status: 'failed', error });
          }
        );

        setStopPolling(() => cleanup);
      } else {
        // No playnoteId, just mark as not generating
        setIsGenerating(false);
      }

    } catch (err) {
      console.error('❌ Generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start generation');
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
    <div className="p-8">
      {/* Revolutionary Header */}
      <div className="flex items-center space-x-5 mb-8">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: [0, -10, 10, 0] }}
          className="relative group"
        >
          {/* Multiple glowing layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-600 rounded-2xl shadow-2xl border border-white/20">
            <Sparkles className="w-7 h-7 text-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>
        <div>
          <h3 className="text-2xl font-black text-white mb-1">
            Configure Your Podcast
          </h3>
          <p className="text-sm text-white/70 font-medium">
            Customize the style and content of your revolutionary AI podcast
          </p>
        </div>
      </div>

      {/* Revolutionary Wide Settings Layout */}
      <div className="space-y-8">
        {/* Wide Title and Description Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revolutionary Title Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-lg font-bold text-white mb-4">
              Podcast Title
            </label>
            <div className="relative group">
              {/* Input glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-pink-600/50 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
              
              {/* Input container */}
              <div className="relative">
                <input
                  type="text"
                  value={settings.title}
                  onChange={(e) => setSettings(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter a compelling title..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-white/40 text-white font-medium"
                  maxLength={100}
                />
                
                {/* Input highlight effect */}
                <div className="absolute top-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-xs text-white/60 font-medium">
                Captivating title for your content
              </p>
              <p className={`text-xs font-bold transition-colors ${
                settings.title.length > 80 ? 'text-orange-400' : 'text-white/60'
              }`}>
                {settings.title.length}/100
              </p>
            </div>
          </motion.div>

          {/* Revolutionary Description Field */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-lg font-bold text-white mb-4">
              Description
              <span className="text-white/50 font-medium ml-2 text-sm">
                (Optional)
              </span>
            </label>
            <div className="relative group">
              {/* Textarea glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/40 to-orange-600/50 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
              
              {/* Textarea container */}
              <div className="relative">
                <textarea
                  value={settings.description}
                  onChange={(e) => setSettings(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Add context or topics to focus on..."
                  rows={3}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 transition-all duration-300 resize-none placeholder-white/40 text-white font-medium"
                  maxLength={500}
                />
                
                {/* Textarea highlight effect */}
                <div className="absolute top-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <p className={`text-xs font-bold mt-2 text-right transition-colors ${
              settings.description.length > 400 ? 'text-orange-400' : 'text-white/60'
            }`}>
              {settings.description.length}/500
            </p>
          </motion.div>
        </div>

        {/* Revolutionary Synthesis Style Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-lg font-bold text-white mb-6">
            Podcast Style
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {synthesisStyles.map((style, index) => {
              const Icon = style.icon;
              const isSelected = settings.synthesisStyle === style.value;
              
              return (
                <motion.div
                  key={style.value}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                  onClick={() => setSettings(prev => ({ ...prev, synthesisStyle: style.value }))}
                >
                  {/* Revolutionary Selection Glow */}
                  {isSelected && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${getStyleColor(style.color)} rounded-2xl blur-xl opacity-60`} />
                  )}
                  
                  {/* Hover glow effect */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isSelected ? 0 : 0 }}
                    whileHover={{ opacity: isSelected ? 0 : 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-r ${getStyleColor(style.color)} rounded-2xl blur-lg`}
                  />
                  
                  {/* Compact Card */}
                  <div className={`
                    relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border
                    ${isSelected
                      ? 'bg-white/15 backdrop-blur-xl border-white/30 shadow-2xl'
                      : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}>
                    {/* Prismatic edge highlights */}
                    <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`} />
                    <div className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`} />
                    
                    <div className="text-center">
                      {/* Revolutionary Icon with prismatic effect */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto mb-4"
                      >
                        {/* Icon glow layers */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getStyleColor(style.color)} rounded-xl blur-lg opacity-60 scale-110`} />
                        
                        <div className={`
                          relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${getStyleColor(style.color)} shadow-xl border border-white/20
                          ${isSelected ? 'shadow-2xl scale-105' : 'shadow-lg'}
                          transition-all duration-300
                        `}>
                          <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                        </div>
                      </motion.div>
                      
                      <div className="space-y-2">
                        <h4 className={`font-black text-lg transition-colors duration-300 ${
                          isSelected ? 'text-gray-900' : 'text-gray-800'
                        }`}>
                          {style.label}
                        </h4>
                        
                        <div className="relative mx-auto w-fit">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-lg blur-sm" />
                          <div className="relative flex items-center space-x-2 px-3 py-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-lg">
                            <Clock className="w-3 h-3 text-gray-600" />
                            <span className="text-xs font-bold text-gray-700">{style.duration}</span>
                          </div>
                        </div>
                        
                        <p className={`text-xs leading-relaxed transition-colors duration-300 font-medium ${
                          isSelected ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          {style.description}
                        </p>
                      </div>

                      {/* Revolutionary Radio Button */}
                      <div className="relative mt-4 mx-auto w-fit">
                        {/* Radio glow */}
                        {isSelected && (
                          <div className={`absolute inset-0 bg-gradient-to-br ${getStyleColor(style.color)} rounded-full blur-md opacity-60 scale-150`} />
                        )}
                        
                        <div className={`
                          relative w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500
                          ${isSelected
                            ? `border-white/40 bg-gradient-to-br ${getStyleColor(style.color)} shadow-lg`
                            : 'border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20'
                          }
                        `}>
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-2.5 h-2.5 bg-white rounded-full drop-shadow-sm"
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Horizontal Duration and Generate Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Premium Estimated Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-lg" />
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Estimated Duration</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ~{estimatedDuration} min
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Generate Button - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative lg:col-span-2"
          >
            {canGenerate && (
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl"
              />
            )}
            
            <motion.button
              whileHover={{ scale: canGenerate ? 1.02 : 1 }}
              whileTap={{ scale: canGenerate ? 0.98 : 1 }}
              disabled={!canGenerate}
              onClick={handleGenerate}
              className={`
                relative w-full flex items-center justify-center space-x-3 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden
                ${canGenerate
                  ? 'text-white shadow-2xl'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {/* Animated Background */}
              {canGenerate && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 animate-gradient" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </>
              )}
              
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating Your Podcast...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative flex items-center space-x-3"
                  >
                    <Sparkles className="w-6 h-6" />
                    <span>Generate AI Podcast</span>
                    {canGenerate && <ChevronRight className="w-5 h-5" />}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Premium Requirements Message */}
            {!canGenerate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mt-3"
              >
                <p className="text-xs text-white/60 font-medium">
                  {selectedDocuments.length === 0 
                    ? '📄 Please select at least one document to continue'
                    : '✏️ Please enter a title for your podcast'
                  }
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Generation Progress */}
        <AnimatePresence>
          {isGenerating && generationStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <div>
                  <h4 className="font-medium text-blue-900">
                    {generationStatus.status === 'generating' ? 'Generating Podcast...' : 
                     generationStatus.status === 'completed' ? 'Generation Complete!' : 
                     'Generation Failed'}
                  </h4>
                  <p className="text-sm text-blue-700">
                    {generationStatus.status === 'generating' && generationStatus.progress 
                      ? `Progress: ${Math.round(generationStatus.progress)}%`
                      : generationStatus.status === 'generating' 
                      ? 'Processing your documents with AI...'
                      : generationStatus.status === 'completed'
                      ? `Audio ready! Duration: ${generationStatus.duration ? Math.round(generationStatus.duration / 60) : '~'}min`
                      : generationStatus.error || 'Unknown error occurred'
                    }
                  </p>
                </div>
              </div>
              
              {generationStatus.progress && (
                <div className="mt-3">
                  <div className="bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${generationStatus.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {generationStatus.status === 'completed' && generationStatus.audioUrl && (
                <div className="mt-3">
                  <audio 
                    controls 
                    className="w-full"
                    src={generationStatus.audioUrl}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

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

      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default PodcastGenerator;