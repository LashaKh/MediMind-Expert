export const sanitizeHTML = (content: string): string => {
  // Basic HTML sanitization - remove script tags and dangerous attributes
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

export const formatAIResponse = (content: string): string => {
  // Format AI response content - handle markdown-like formatting
  let formatted = content;
  
  // Convert **bold** to proper styling
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert *italic* to proper styling
  formatted = formatted.replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, '<em>$1</em>');
  
  // Convert `code` to proper styling
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
  
  // Enhanced source reference handling with interactive citations
  formatted = formatted.replace(/\[(\d+)\]/g, (match, num) => {
    return `<span class="inline-source-ref cursor-pointer text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-1 py-0.5 rounded transition-colors" data-source-number="${num}" title="Click to highlight source ${num}">[${num}]</span>`;
  });
  
  // Convert line breaks to <br> tags
  formatted = formatted.replace(/\n/g, '<br>');
  
  // Convert numbered lists
  formatted = formatted.replace(/^\d+\.\s+(.+)$/gm, '<div class="ml-4">$&</div>');
  
  // Convert bullet points
  formatted = formatted.replace(/^[-•]\s+(.+)$/gm, '<div class="ml-4">• $1</div>');
  
  return formatted;
};

export const extractSourceReferences = (content: string): { content: string; references: string[] } => {
  // Extract source references from content like [1], [2], etc.
  const references: string[] = [];
  const cleanContent = content.replace(/\[(\d+)\]/g, (match, num) => {
    references.push(num);
    return `<sup class="text-blue-600 dark:text-blue-400">[${num}]</sup>`;
  });
  
  return {
    content: cleanContent,
    references
  };
};

export const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
}; 