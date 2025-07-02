import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PodcastCard from './PodcastCard';

interface PodcastHistoryProps {
  specialty: string;
  onPlayPodcast: (podcast: any) => void;
}

interface Podcast {
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
}

const PodcastHistory: React.FC<PodcastHistoryProps> = ({
  specialty,
  onPlayPodcast
}) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const statusOptions = [
    { value: 'all', label: t('podcast.history.filters.all') },
    { value: 'completed', label: t('podcast.history.filters.completed') },
    { value: 'generating', label: t('podcast.history.filters.generating') },
    { value: 'pending', label: t('podcast.history.filters.pending') },
    { value: 'failed', label: t('podcast.history.filters.failed') }
  ];

  useEffect(() => {
    fetchPodcasts();
  }, [user?.id, statusFilter, currentPage]);

  const fetchPodcasts = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      setError('');

      const params = new URLSearchParams({
        userId: user.id,
        page: currentPage.toString(),
        limit: '12'
      });

      if (statusFilter !== 'all') {
        params.append('status', statusFilter);
      }

      if (specialty) {
        params.append('specialty', specialty);
      }

      const response = await fetch(`/.netlify/functions/podcast-list?${params.toString()}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch podcasts');
      }

      setPodcasts(result.podcasts || []);
      setTotalPages(result.pagination?.totalPages || 1);

    } catch (err) {
      console.error('Error fetching podcasts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load podcasts');
    } finally {
      setLoading(false);
    }
  };

  const filteredPodcasts = podcasts.filter(podcast => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      podcast.title.toLowerCase().includes(searchLower) ||
      podcast.description?.toLowerCase().includes(searchLower) ||
      podcast.source_documents.some(doc => 
        doc.title?.toLowerCase().includes(searchLower)
      )
    );
  });

  const handleDelete = async (podcastId: string) => {
    // Implement delete functionality
    setPodcasts(prev => prev.filter(p => p.id !== podcastId));
  };

  const handleRetry = async (podcastId: string) => {
    try {
      setError('');
      
      // First, try to restart the queue processor
      const response = await fetch('/.netlify/functions/podcast-queue-processor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        // Refresh the podcasts list to see updated status
        await fetchPodcasts();
      } else {
        setError('Failed to restart generation. Please try again.');
      }
    } catch (error) {
      console.error('Retry error:', error);
      setError('Failed to restart generation. Please check your connection.');
    }
  };

  if (loading && podcasts.length === 0) {
    return (
      <div className="space-y-6">
        {/* Header Skeleton */}
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-xl h-48"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {t('podcast.history.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          {t('podcast.history.subtitle')}
        </motion.p>
      </div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('podcast.history.search.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Status Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Error State */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center space-x-2 text-red-600 text-sm p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <AlertTriangle className="w-5 h-5" />
            <span>{error}</span>
            <button
              onClick={fetchPodcasts}
              className="ml-auto text-red-700 hover:text-red-800 font-medium"
            >
              {t('common.retry')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Podcasts Grid */}
      <AnimatePresence mode="wait">
        {filteredPodcasts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || statusFilter !== 'all' 
                ? t('podcast.history.empty.noResults')
                : t('podcast.history.empty.noPodcasts')
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all'
                ? t('podcast.history.empty.tryDifferentFilter')
                : t('podcast.history.empty.createFirst')
              }
            </p>
            {(!searchTerm && statusFilter === 'all') && (
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                {t('podcast.history.empty.createButton')}
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PodcastCard
                  podcast={podcast}
                  onPlay={() => onPlayPodcast(podcast)}
                  onDelete={() => handleDelete(podcast.id)}
                  onRetry={() => handleRetry(podcast.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center space-x-2 mt-8"
        >
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
          >
            {t('common.previous')}
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
          >
            {t('common.next')}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PodcastHistory;