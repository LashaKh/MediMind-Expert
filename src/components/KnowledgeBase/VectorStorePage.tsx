import React, { useState, useEffect } from 'react';
import { ArrowLeft, Database, Settings, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VectorStoreManager } from './VectorStoreManager';
import { useAuth } from '../../contexts/AuthContext';
import { checkUserVectorStore } from '../../lib/api/vectorStore';

export const VectorStorePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hasVectorStore, setHasVectorStore] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check if user has a Vector Store
  const checkVectorStoreStatus = async () => {
    if (!user) return;

    try {
      setIsChecking(true);
      const result = await checkUserVectorStore();
      setHasVectorStore(result.hasVectorStore);
    } catch (error) {
      console.error('Error checking Vector Store status:', error);
      setHasVectorStore(false);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkVectorStoreStatus();
  }, [user]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <div className="h-6 border-l border-gray-300 dark:border-gray-600"></div>
              
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Vector Store Management
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {!isChecking && (
                <div className="flex items-center space-x-2">
                  {hasVectorStore ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Vector Store Active</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-orange-600 font-medium">No Vector Store</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto">
        {/* Info Banner */}
        <div className="m-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-start space-x-3">
            <Database className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                About Vector Stores
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Vector Stores enable AI-powered search and analysis of your uploaded documents. 
                Create a Vector Store to upload medical documents, research papers, and clinical guidelines 
                that can be referenced during AI conversations.
              </p>
            </div>
          </div>
        </div>

        {/* Vector Store Manager */}
        <VectorStoreManager />
      </div>
    </div>
  );
}; 