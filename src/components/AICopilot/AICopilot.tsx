import React from 'react';
import { ChatProvider } from '../../contexts/ChatContext';
import { FlowiseChatWindow } from './FlowiseChatWindow';

interface AICopilotProps {
  className?: string;
}

export const AICopilot: React.FC<AICopilotProps> = ({ className = '' }) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <ChatProvider>
        <FlowiseChatWindow 
          allowAttachments={true}
          placeholder="Ask me about medical guidelines, case analysis, or clinical decisions..."
          className="h-full"
        />
      </ChatProvider>
    </div>
  );
};

export default AICopilot; 