import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownDisplayProps {
  content: string;
  title?: string;
}

export const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ content, title }) => {
  return (
    <div className="max-w-none">
      {title && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      )}
      
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom styling for specific elements
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-blue-900 mb-4 mt-8 first:mt-0 border-b border-blue-200 pb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-blue-800 mb-3 mt-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-blue-700 mb-2 mt-4">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-medium text-blue-600 mb-2 mt-3">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 mb-3 leading-relaxed">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-1">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-gray-700 leading-relaxed">
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-800">
                {children}
              </em>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-200 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                {children}
              </pre>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownDisplay; 