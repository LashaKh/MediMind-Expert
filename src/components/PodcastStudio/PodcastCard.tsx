import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Clock,
  FileText,
  MoreVertical,
  Trash2,
  Download,
  Share2,
  AlertTriangle,
  RotateCcw,
  CheckCircle,
  XCircle,
  Heart
} from 'lucide-react';

interface PodcastCardProps {
  podcast: {
    id: string;
    title: string;
    description?: string;
    status: string;
    synthesis_style: string;
    audio_url?: string;
    duration?: number;
    created_at: string;
    source_documents: any[];
    transcript?: any;
  };
  onPlay: () => void;
  onDelete: () => void;
  onRetry: () => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  podcast,
  onPlay,
  onDelete,
  onRetry
}) => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          icon: CheckCircleIcon,
          text: t('podcast.status.completed'),
          color: 'text-green-600',
          bg: 'bg-green-100'
        };
      case 'generating':
        return {
          icon: ArrowPathIcon,
          text: t('podcast.status.generating'),
          color: 'text-blue-600',
          bg: 'bg-blue-100'
        };
      case 'pending':
        return {
          icon: Clock,
          text: t('podcast.status.pending'),
          color: 'text-yellow-600',
          bg: 'bg-yellow-100'
        };
      case 'failed':
        return {
          icon: XCircleIcon,
          text: t('podcast.status.failed'),
          color: 'text-red-600',
          bg: 'bg-red-100'
        };
      default:
        return {
          icon: Clock,
          text: status,
          color: 'text-gray-600',
          bg: 'bg-gray-100'
        };
    }
  };

  const statusInfo = getStatusInfo(podcast.status);
  const StatusIcon = statusInfo.icon;

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return '—';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDownload = () => {
    if (podcast.audio_url) {
      const link = document.createElement('a');
      link.href = podcast.audio_url;
      link.download = `${podcast.title}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setShowMenu(false);
  };

  const handleShare = async () => {
    if (navigator.share && podcast.audio_url) {
      try {
        await navigator.share({
          title: podcast.title,
          text: podcast.description || t('podcast.share.defaultText'),
          url: podcast.audio_url
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else if (podcast.audio_url) {
      await navigator.clipboard.writeText(podcast.audio_url);
    }
    setShowMenu(false);
  };

  const canPlay = podcast.status === 'completed' && podcast.audio_url;
  const canRetry = podcast.status === 'failed';

  return (
    <motion.div
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate text-lg mb-1">
              {podcast.title}
            </h3>
            {podcast.description && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {podcast.description}
              </p>
            )}
          </div>
          
          <div className="relative ml-3">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <EllipsisVerticalIcon className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -5 }}
                  className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                >
                  <div className="py-1">
                    {canPlay && (
                      <>
                        <button
                          onClick={handleDownload}
                          className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          <span>{t('podcast.actions.download')}</span>
                        </button>
                        <button
                          onClick={handleShare}
                          className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <ShareIcon className="w-4 h-4" />
                          <span>{t('podcast.actions.share')}</span>
                        </button>
                        <div className="border-t border-gray-100 my-1" />
                      </>
                    )}
                    
                    {canRetry && (
                      <button
                        onClick={() => {
                          onRetry();
                          setShowMenu(false);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <ArrowPathIcon className="w-4 h-4" />
                        <span>{t('podcast.actions.retry')}</span>
                      </button>
                    )}
                    
                    <button
                      onClick={() => {
                        onDelete();
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <TrashIcon className="w-4 h-4" />
                      <span>{t('podcast.actions.delete')}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusInfo.bg} ${statusInfo.color}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{statusInfo.text}</span>
          </div>
          
          <span className="text-xs text-gray-500">
            {formatDate(podcast.created_at)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-4">
        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="flex items-center space-x-1 text-gray-600 mb-1">
              <ClockIcon className="w-3 h-3" />
              <span className="text-xs font-medium">
                {t('podcast.card.duration')}
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {formatDuration(podcast.duration)}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-1 text-gray-600 mb-1">
              <DocumentTextIcon className="w-3 h-3" />
              <span className="text-xs font-medium">
                {t('podcast.card.sources')}
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {podcast.source_documents?.length || 1}
            </div>
          </div>
        </div>

        {/* Style */}
        <div className="mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 capitalize">
            {t(`podcast.styles.${podcast.synthesis_style}`)}
          </span>
        </div>

        {/* Action Button */}
        <AnimatePresence mode="wait">
          {canPlay ? (
            <motion.button
              key="play"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPlay}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              <PlayIcon className="w-4 h-4" />
              <span>{t('podcast.actions.play')}</span>
            </motion.button>
          ) : canRetry ? (
            <motion.button
              key="retry"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRetry}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
            >
              <ArrowPathIcon className="w-4 h-4" />
              <span>{t('podcast.actions.retry')}</span>
            </motion.button>
          ) : podcast.status === 'generating' ? (
            <motion.div
              key="generating"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-blue-100 text-blue-700 rounded-lg"
            >
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="font-medium">
                {t('podcast.status.generating')}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="pending"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-100 text-gray-600 rounded-lg"
            >
              <ClockIcon className="w-4 h-4" />
              <span className="font-medium">
                {t('podcast.status.pending')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover Effect */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 pointer-events-none"
      />
    </motion.div>
  );
};

export default PodcastCard;