import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bug, 
  Play,
  RefreshCw, 
  CheckCircle,
  XCircle,
  Clock,
  Database,
  Zap
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

interface PodcastDebugProps {
  onRefresh?: () => void;
}

const PodcastDebug: React.FC<PodcastDebugProps> = ({ onRefresh }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const debugActions = [
    {
      id: 'check-status',
      title: 'Check System Status',
      description: 'Verify all podcast services are working',
      icon: CheckCircle,
      color: 'blue',
      action: async () => {
        const tests = [];
        
        // Test podcast-list
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) throw new Error('Authentication required');

          const { data: result, error } = await supabase.functions.invoke('podcast-list', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${session.access_token}`
            }
          });

          tests.push({
            test: 'Podcast List API',
            status: !error ? 'pass' : 'fail',
            details: !error ? `Found ${result.podcasts?.length || 0} podcasts` : error.message
          });
        } catch (err) {
          tests.push({
            test: 'Podcast List API',
            status: 'fail',
            details: err instanceof Error ? err.message : 'Unknown error'
          });
        }

        // Test podcast-status
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) throw new Error('Authentication required');

          const { data: result, error } = await supabase.functions.invoke('podcast-status', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${session.access_token}`
            },
            body: { podcastId: 'test', userId: 'test' }
          });

          tests.push({
            test: 'Podcast Status API',
            status: error?.message?.includes('not found') ? 'pass' : 'fail',
            details: error?.message?.includes('not found') ? 'Correctly returns not found for test data' : 'Unexpected response'
          });
        } catch (err) {
          tests.push({
            test: 'Podcast Status API',
            status: 'fail',
            details: err instanceof Error ? err.message : 'Unknown error'
          });
        }

        // Test queue processor
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) throw new Error('Authentication required');

          const { data: result, error } = await supabase.functions.invoke('podcast-queue-processor', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${session.access_token}`
            }
          });

          tests.push({
            test: 'Queue Processor',
            status: !error ? 'pass' : 'fail',
            details: !error ? result.message : error.message
          });
        } catch (err) {
          tests.push({
            test: 'Queue Processor',
            status: 'fail',
            details: err instanceof Error ? err.message : 'Unknown error'
          });
        }

        return tests;
      }
    },
    {
      id: 'restart-queue',
      title: 'Restart Queue Processing',
      description: 'Force process any stuck queue items',
      icon: RefreshCw,
      color: 'green',
      action: async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) throw new Error('Authentication required');

        const { data: result, error } = await supabase.functions.invoke('podcast-queue-processor', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`
          }
        });

        return [{
          test: 'Queue Restart',
          status: !error ? 'pass' : 'fail',
          details: !error ? result.message : error.message
        }];
      }
    },
    {
      id: 'create-demo',
      title: 'Create Demo Podcast',
      description: 'Create a completed podcast for testing',
      icon: Play,
      color: 'purple',
      action: async () => {
        try {
          // This would create a demo podcast entry in the database
          const demoData = {
            userId: user?.id,
            title: 'Demo Medical Podcast',
            description: 'This is a demo podcast created for testing purposes',
            status: 'completed',
            audio_url: 'https://www.soundjay.com/misc/sounds/magic-chime-02.mp3', // Demo audio
            duration: 30,
            synthesis_style: 'podcast'
          };

          return [{
            test: 'Demo Creation',
            status: 'info',
            details: 'Demo podcast functionality would be implemented here'
          }];
        } catch (err) {
          return [{
            test: 'Demo Creation',
            status: 'fail',
            details: err instanceof Error ? err.message : 'Unknown error'
          }];
        }
      }
    }
  ];

  const runAction = async (action: any) => {
    setLoading(true);
    try {
      const actionResults = await action.action();
      setResults(prev => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          action: action.title,
          results: actionResults
        }
      ]);
    } catch (error) {
      setResults(prev => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          action: action.title,
          results: [{
            test: 'Action Execution',
            status: 'fail',
            details: error instanceof Error ? error.message : 'Unknown error'
          }]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'fail': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'info': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg">
            <Bug className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Podcast System Debug</h2>
            <p className="text-gray-600 text-sm">Tools to diagnose and fix podcast issues</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {debugActions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.id}
                onClick={() => runAction(action)}
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 bg-${action.color}-100 rounded-lg`}>
                    <Icon className={`w-4 h-4 text-${action.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            );
          })}
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center space-x-3">
              <RefreshCw className="w-5 h-5 animate-spin text-blue-600" />
              <span className="text-gray-600">Running diagnostics...</span>
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Results</h3>
              <button
                onClick={() => setResults([])}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Clear
              </button>
            </div>

            <div className="space-y-3">
              {results.reverse().map((result, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{result.action}</h4>
                    <span className="text-xs text-gray-500">{result.timestamp}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {result.results.map((test: any, testIndex: number) => (
                      <div key={testIndex} className="flex items-center space-x-3">
                        {getStatusIcon(test.status)}
                        <span className="font-medium text-sm text-gray-900">{test.test}:</span>
                        <span className="text-sm text-gray-600">{test.details}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastDebug;