import React, { useState } from 'react';
import { User, Bot, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { Message } from '../../types/chat';
import { useMessageFormatter } from '../../hooks/chat/useMessageFormatter';
import { formatTimestamp } from '../../utils/chat/messageUtils';
import { SourceReferences } from './SourceReferences';

interface MessageItemProps {
  message: Message;
  className?: string;
}

export const UserMessageItem: React.FC<MessageItemProps> = ({ message, className = '' }) => {
  const formattedContent = useMessageFormatter(message.content, false);

  return (
    <div className={`flex justify-end ${className}`}>
      <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
        <div className="bg-primary text-white rounded-lg px-4 py-2 shadow-sm">
          <div className="text-sm whitespace-pre-wrap break-words">
            {formattedContent}
          </div>
          
          {/* Message metadata */}
          <div className="flex items-center justify-between mt-2 text-xs opacity-80">
            <span>{formatTimestamp(message.timestamp)}</span>
            
            {/* Status indicator */}
            <div className="flex items-center space-x-1">
              {message.status === 'sending' && (
                <>
                  <Clock className="w-3 h-3" />
                  <span>Sending...</span>
                </>
              )}
              {message.status === 'sent' && (
                <CheckCircle className="w-3 h-3" />
              )}
              {message.status === 'error' && (
                <>
                  <AlertCircle className="w-3 h-3" />
                  <span>Failed</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* User avatar */}
        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
};

export const AIMessageItem: React.FC<MessageItemProps> = ({ message, className = '' }) => {
  const formattedContent = useMessageFormatter(message.content, true);
  const [highlightedSource, setHighlightedSource] = useState<number | null>(null);

  // Handle clicks on inline source references
  const handleSourceClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('inline-source-ref')) {
      const sourceNumber = parseInt(target.getAttribute('data-source-number') || '0');
      setHighlightedSource(highlightedSource === sourceNumber ? null : sourceNumber);
    }
  };

  return (
    <div className={`flex justify-start ${className}`}>
      <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
        {/* AI avatar */}
        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg px-4 py-2 shadow-sm">
          <div 
            className="text-sm whitespace-pre-wrap break-words prose prose-sm dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
            onClick={handleSourceClick}
          />
          
          {/* Source references */}
          {message.sources && message.sources.length > 0 && (
            <SourceReferences 
              sources={message.sources}
              maxInitialDisplay={2}
              showExcerpts={true}
              highlightedSourceNumber={highlightedSource}
              onSourceHighlight={setHighlightedSource}
            />
          )}
          
          {/* Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Attachments:</div>
              <div className="space-y-1">
                {message.attachments.map((attachment) => (
                  <div key={attachment.id} className="text-xs">
                    <span className="text-gray-600 dark:text-gray-300">{attachment.name}</span>
                    <span className="text-gray-400 ml-1">({(attachment.size / 1024).toFixed(1)} KB)</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Message timestamp */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {formatTimestamp(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Generic MessageItem component that renders the appropriate type
export const MessageItem: React.FC<MessageItemProps> = ({ message, className = '' }) => {
  if (message.type === 'user') {
    return <UserMessageItem message={message} className={className} />;
  } else {
    return <AIMessageItem message={message} className={className} />;
  }
};

export default MessageItem; 