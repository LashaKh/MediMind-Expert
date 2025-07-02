import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import HIT4TsCalculator from '../Calculators/HIT4TsCalculator';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import as a side effect to extend jsPDF
import html2canvas from 'html2canvas';
import { marked } from 'marked';
import { 
  Search, 
  BookOpen, 
  Download, 
  Share2, 
  ChevronRight,
  ChevronDown,
  Clock,
  User,
  Calendar,
  FileText,
  Bookmark,
  Eye,
  Menu,
  ChevronUp,
  Printer,
  Award,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Star,
  Shield,
  Zap,
  Heart,
  Activity,
  Stethoscope,
  Microscope,
  Pill,
  Thermometer,
  Target,
  TrendingUp,
  Users,
  Globe,
  Minus,
  Plus
} from 'lucide-react';

interface InteractiveMarkdownViewerProps {
  filePath?: string;
  title?: string;
  markdownContent?: string; // Alternative to filePath for direct content
}

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface MarkdownSection {
  id: string;
  title: string;
  level: number;
  content: string;
  isCollapsed: boolean;
}

// Evidence level detection and styling
const getEvidenceLevel = (text: string) => {
  const evidencePatterns = [
    // Class/Level A patterns
    { 
      pattern: /(\*\*\[(evidence\s+level:\s*)?class\s+a\]\*\*|\*\*evidence\s+level:\s*class\s+a\*\*|\*\*\[(evidence\s+level:\s*)?a\]\*\*|\*\*evidence\s+level:\s*a\*\*|\(level\s+a\)|\*\*\[a\]\*\*|\bclass\s+i\b|\blevel\s+a\b|\bgrade\s+a\b|\bstrong\s+evidence\b)/i, 
      level: 'A', 
      color: 'emerald', 
      icon: Award 
    },
    // Class/Level B patterns  
    { 
      pattern: /(\*\*\[(evidence\s+level:\s*)?class\s+b\]\*\*|\*\*evidence\s+level:\s*class\s+b\*\*|\*\*\[(evidence\s+level:\s*)?b\]\*\*|\*\*evidence\s+level:\s*b\*\*|\(level\s+b\)|\*\*\[b\]\*\*|\bclass\s+ii\b|\blevel\s+b\b|\bgrade\s+b\b|\bmoderate\s+evidence\b)/i, 
      level: 'B', 
      color: 'blue', 
      icon: CheckCircle 
    },
    // Class/Level C patterns
    { 
      pattern: /(\*\*\[(evidence\s+level:\s*)?class\s+c\]\*\*|\*\*evidence\s+level:\s*class\s+c\*\*|\*\*\[(evidence\s+level:\s*)?c\]\*\*|\*\*evidence\s+level:\s*c\*\*|\(level\s+c\)|\*\*\[c\]\*\*|\bclass\s+iii\b|\blevel\s+c\b|\bgrade\s+c\b|\blimited\s+evidence\b)/i, 
      level: 'C', 
      color: 'amber', 
      icon: Info 
    },
    // Class/Level D patterns
    { 
      pattern: /(\*\*\[(evidence\s+level:\s*)?class\s+d\]\*\*|\*\*evidence\s+level:\s*class\s+d\*\*|\*\*\[(evidence\s+level:\s*)?d\]\*\*|\*\*evidence\s+level:\s*d\*\*|\(level\s+d\)|\*\*\[d\]\*\*|\bclass\s+iv\b|\blevel\s+d\b|\bgrade\s+d\b)/i, 
      level: 'D', 
      color: 'red', 
      icon: XCircle 
    },
    // Class/Level E patterns
    { 
      pattern: /(\*\*\[(evidence\s+level:\s*)?class\s+e\]\*\*|\*\*evidence\s+level:\s*class\s+e\*\*|\*\*\[(evidence\s+level:\s*)?e\]\*\*|\*\*evidence\s+level:\s*e\*\*|\(level\s+e\)|\*\*\[e\]\*\*|\bclass\s+v\b|\blevel\s+e\b|\bgrade\s+e\b)/i, 
      level: 'E', 
      color: 'slate', 
      icon: Minus 
    },
    // Special evidence types
    { pattern: /\b(expert\s+opinion|consensus|recommendation)\b/i, level: 'Expert', color: 'purple', icon: Users },
    { pattern: /\b(contraindication|warning|caution|avoid)\b/i, level: 'Warning', color: 'red', icon: AlertTriangle },
    { pattern: /\b(guideline|should|recommended)\b/i, level: 'Guideline', color: 'indigo', icon: Shield }
  ];

  for (const { pattern, level, color, icon } of evidencePatterns) {
    if (pattern.test(text)) {
      return { level, color, icon };
    }
  }
  return null;
};

// Import Quote icon
const Quote = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
);

// Parse markdown content into collapsible sections
const parseMarkdownSections = (content: string): MarkdownSection[] => {
  const lines = content.split('\n');
  const sections: MarkdownSection[] = [];
  let currentSection: MarkdownSection | null = null;
  let sectionContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h1Match = line.match(/^#\s+(.+)$/);
    const h2Match = line.match(/^##\s+(.+)$/);

    if (h1Match || h2Match) {
      // Save previous section if exists
      if (currentSection) {
        currentSection.content = sectionContent.join('\n').trim();
        sections.push(currentSection);
      }

      // Start new section
      const title = h1Match ? h1Match[1] : h2Match![1];
      const level = h1Match ? 1 : 2;
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      currentSection = {
        id,
        title,
        level,
        content: '',
        isCollapsed: false
      };
      sectionContent = [];
    } else {
      // Add line to current section content
      sectionContent.push(line);
    }
  }

  // Add the last section
  if (currentSection) {
    currentSection.content = sectionContent.join('\n').trim();
    sections.push(currentSection);
  }

  return sections;
};

export const InteractiveMarkdownViewer: React.FC<InteractiveMarkdownViewerProps> = ({ 
  filePath, 
  title,
  markdownContent 
}): JSX.Element => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTOC, setShowTOC] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);
  const [sections, setSections] = useState<MarkdownSection[]>([]);

  // Load markdown content
  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        if (markdownContent) {
          setContent(markdownContent);
        } else if (filePath) {
          // For development, we'll use the content directly
          // In production, you'd fetch from your API
          setContent(markdownContent || '# No content available');
        }

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
        setLoading(false);
      }
    };

    loadContent();
  }, [filePath, markdownContent]);

  // Parse content into sections when content changes
  useEffect(() => {
    if (content) {
      const parsedSections = parseMarkdownSections(content);
      setSections(parsedSections);
    }
  }, [content]);

  // Calculate reading time and progress
  useEffect(() => {
    if (content) {
      const words = content.split(/\s+/).length;
      const readTime = Math.ceil(words / 200); // 200 words per minute
      setEstimatedReadTime(readTime);
    }

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
      setShowBackToTop(scrolled > 500);

      // Update active section with improved detection
      const sectionElements = document.querySelectorAll('[data-section-id]');
      let current = '';
      let closestDistance = Infinity;
      
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 150); // Distance from ideal position
        
        // If section is visible and closer to the ideal position
        if (rect.top <= 200 && distance < closestDistance) {
          closestDistance = distance;
          current = section.getAttribute('data-section-id') || '';
        }
      });
      
      // Only update if we found a section and it's different
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  // Generate table of contents from sections
  const tableOfContents = useMemo(() => {
    return sections.map(section => ({
      id: section.id,
      title: section.title,
      level: section.level
    }));
  }, [sections]);

  // Filter sections based on search
  const filteredSections = useMemo(() => {
    if (!searchTerm) return sections;
    
    return sections.filter(section => 
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sections, searchTerm]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // Update active section immediately for instant visual feedback
    setActiveSection(sectionId);
    
    // Try to find the section container first
    const sectionContainer = document.querySelector(`[data-section-id="${sectionId}"]`);
    
    if (sectionContainer) {
      // Use scrollIntoView for more reliable scrolling
      sectionContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Add a small delay then adjust for header offset
      setTimeout(() => {
        const currentScroll = window.scrollY || window.pageYOffset;
        const headerOffset = 120;
        window.scrollTo({
          top: currentScroll - headerOffset,
          behavior: 'smooth'
        });
        
        // Ensure active section is still correct after scroll adjustment
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 200);
      }, 100);
    } else {
      // Fallback: try to find by ID
      const fallbackElement = document.getElementById(sectionId);
      
      if (fallbackElement) {
        fallbackElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Add a small delay then adjust for header offset
        setTimeout(() => {
          const currentScroll = window.scrollY || window.pageYOffset;
          const headerOffset = 120;
          window.scrollTo({
            top: currentScroll - headerOffset,
            behavior: 'smooth'
          });
          
          // Ensure active section is still correct after scroll adjustment
          setTimeout(() => {
            setActiveSection(sectionId);
          }, 200);
        }, 100);
      }
    }
  };

  const toggleSection = (sectionId: string) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? { ...section, isCollapsed: !section.isCollapsed }
          : section
      )
    );
  };

  const toggleAllSections = () => {
    const hasCollapsed = sections.some(section => section.isCollapsed);
    setSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        isCollapsed: !hasCollapsed
      }))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      // Initialize jsPDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Define colors as arrays for easier use with jsPDF
      const colors = {
        primary: [59, 130, 246], // Blue #3B82F6
        secondary: [99, 102, 241], // Indigo #6366F1
        danger: [239, 68, 68], // Red #EF4444
        warning: [245, 158, 11], // Amber #F59E0B
        success: [34, 197, 94], // Green #22C55E
        gray: {
          50: [249, 250, 251],
          100: [243, 244, 246],
          200: [229, 231, 235],
          300: [209, 213, 219],
          400: [156, 163, 175],
          500: [107, 114, 128],
          600: [75, 85, 99],
          700: [55, 65, 81],
          800: [31, 41, 55],
          900: [17, 24, 39]
        }
      };

      // PDF dimensions
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      const lineHeight = 6;
      let yPosition = margin;

      // Configure marked for text extraction
      marked.setOptions({
        breaks: true,
        gfm: true
      });

      // Helper functions
      const setColor = (color: number[]) => {
        pdf.setTextColor(color[0], color[1], color[2]);
        pdf.setDrawColor(color[0], color[1], color[2]);
        pdf.setFillColor(color[0], color[1], color[2]);
      };

      const drawRoundedRect = (x: number, y: number, width: number, height: number, radius: number, style: 'F' | 'S' | 'DF' = 'F') => {
        // Since roundedRect might not be available, use regular rect
        pdf.rect(x, y, width, height, style);
      };

      // Add icon-like circle
      const drawIcon = (x: number, y: number, color: number[]) => {
        setColor(color);
        pdf.circle(x, y, 2.5, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'bold');
        pdf.text('i', x - 0.5, y + 0.5);
      };

      // Helper function to add text with automatic page breaks
      const addTextWithPageBreak = (text: string, fontSize: number, options: any = {}) => {
        pdf.setFontSize(fontSize);
        const lines = pdf.splitTextToSize(text, options.width || contentWidth);
        
        lines.forEach((line: string) => {
          if (yPosition + lineHeight > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          
          if (options.color && Array.isArray(options.color) && options.color.length >= 3) {
            pdf.setTextColor(options.color[0], options.color[1], options.color[2]);
          }
          
          if (options.style) {
            pdf.setFont('helvetica', options.style);
          }
          
          const xPos = options.x || margin;
          pdf.text(line, xPos, yPosition);
          yPosition += lineHeight;
        });
        
        // Reset to normal
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
      };

      // Add MediMind Expert header
      pdf.setFillColor(colors.primary[0], colors.primary[1], colors.primary[2]);
      pdf.rect(0, 0, pageWidth, 25, 'F');
      
      // Add white logo circle
      pdf.setFillColor(255, 255, 255);
      pdf.circle(margin + 8, 12.5, 6, 'F');
      
      // Add logo icon (simplified)
      setColor(colors.primary);
      pdf.setLineWidth(0.5);
      pdf.circle(margin + 8, 12.5, 5, 'S');
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('M', margin + 6, 14);
      
      // Header text
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('MediMind Expert', margin + 20, 11);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('AI Medical Co-Pilot', margin + 20, 17);
      
      // Date
      pdf.setFontSize(9);
      pdf.text(`${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`, pageWidth - margin - 35, 15);
      
      yPosition = 35;
      
      // Document title
      setColor(colors.gray[900]);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      const titleLines = pdf.splitTextToSize(title || 'Medical Document', contentWidth);
      titleLines.forEach((line: string) => {
        pdf.text(line, pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 8;
      });
      
      yPosition += 5;
      
      // Metadata bar
      setColor(colors.gray[100]);
      drawRoundedRect(margin, yPosition - 5, contentWidth, 10, 2, 'F');
      
      pdf.setFontSize(9);
      setColor(colors.gray[600]);
      pdf.text(`📖 ${estimatedReadTime} min read`, margin + 5, yPosition);
      pdf.text(`📅 Last Updated: ${new Date().toLocaleDateString()}`, margin + 50, yPosition);
      yPosition += 15;
      
      // Process content sections
      filteredSections.forEach((section, index) => {
        // Check if we need a new page for the section header
        if (yPosition + 20 > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        // Draw section header like your UI
        if (section.level === 1) {
          // Main section header with icon circle
          setColor(colors.primary);
          pdf.circle(margin + 3, yPosition - 2, 3, 'F');
          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(8);
          pdf.text('●', margin + 2.2, yPosition - 0.5);
          
          // Section title
          setColor(colors.gray[900]);
          pdf.setFontSize(16);
          pdf.setFont('helvetica', 'bold');
          pdf.text(section.title, margin + 10, yPosition);
          yPosition += 12;
        } else {
          // Subsection with lighter styling
          setColor(colors.gray[700]);
          pdf.setFontSize(14);
          pdf.setFont('helvetica', 'bold');
          pdf.text(section.title, margin + 5, yPosition);
          yPosition += 10;
        }
        
        // Convert section content from markdown to plain text with structure
        const htmlContent = marked.parse(section.content || '') as string;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        // Process different elements
        const processNode = (node: Element | ChildNode) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent?.trim() || '';
            if (text) {
              addTextWithPageBreak(text, 10, { color: colors.gray[700] });
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const tagName = element.tagName.toLowerCase();
            
            switch (tagName) {
              case 'p':
                const pText = element.textContent?.trim() || '';
                if (pText) {
                  // Check for evidence level indicators
                  const evidenceMatch = pText.match(/^([A-D])\s*$/);
                  if (evidenceMatch) {
                    // Draw evidence level badge
                    const level = evidenceMatch[1];
                    const levelColor = level === 'A' ? colors.success : 
                                     level === 'B' ? colors.primary :
                                     level === 'C' ? colors.warning : colors.danger;
                    
                    if (yPosition + 10 > pageHeight - margin) {
                      pdf.addPage();
                      yPosition = margin;
                    }
                    
                    // Draw circle badge
                    setColor(levelColor);
                    pdf.circle(contentWidth - 10, yPosition - 5, 4, 'F');
                    pdf.setTextColor(255, 255, 255);
                    pdf.setFontSize(10);
                    pdf.setFont('helvetica', 'bold');
                    pdf.text(level, contentWidth - 11.5, yPosition - 3);
                    yPosition += 2;
                  } else if (pText.includes('Evidence Level Warning') || pText.includes('As per')) {
                    // Warning box for guidelines
                    if (yPosition + 20 > pageHeight - margin) {
                      pdf.addPage();
                      yPosition = margin;
                    }
                    
                    // Draw warning box background
                    setColor([254, 242, 242]); // Light red
                    const boxHeight = pdf.splitTextToSize(pText, contentWidth - 20).length * 5 + 10;
                    drawRoundedRect(margin, yPosition - 5, contentWidth, boxHeight, 3, 'F');
                    
                    // Warning icon
                    setColor(colors.danger);
                    pdf.setFontSize(12);
                    pdf.text('⚠', margin + 5, yPosition + 2);
                    
                    // Warning text
                    pdf.setFontSize(10);
                    addTextWithPageBreak(pText, 10, { 
                      color: colors.gray[800],
                      x: margin + 15,
                      width: contentWidth - 20
                    });
                    yPosition += 5;
                  } else if (pText.includes('PubMed')) {
                    // Reference with PubMed link
                    addTextWithPageBreak(pText, 10, { color: colors.primary });
                  } else {
                    // Regular paragraph
                    addTextWithPageBreak(pText, 10, { color: colors.gray[700] });
                  }
                  yPosition += 4; // Paragraph spacing
                }
                break;
                
              case 'h1':
              case 'h2':
              case 'h3':
              case 'h4':
                const headerText = element.textContent?.trim() || '';
                if (headerText) {
                  const size = tagName === 'h1' ? 16 : tagName === 'h2' ? 14 : tagName === 'h3' ? 13 : 12;
                  yPosition += 5;
                  addTextWithPageBreak(headerText, size, { color: [30, 30, 30], style: 'bold' });
                  yPosition += 3;
                }
                break;
                
              case 'ul':
              case 'ol':
                yPosition += 3;
                const items = element.querySelectorAll('li');
                items.forEach((li, liIndex) => {
                  const bullet = tagName === 'ul' ? '• ' : `${liIndex + 1}. `;
                  const liText = li.textContent?.trim() || '';
                  if (liText) {
                    // Check if we need a page break before the list item
                    if (yPosition + lineHeight > pageHeight - margin) {
                      pdf.addPage();
                      yPosition = margin;
                    }
                    
                    pdf.setFontSize(11);
                    pdf.setTextColor(70, 70, 70);
                    
                    // Add bullet/number
                    pdf.text(bullet, margin, yPosition);
                    
                    // Add list item text with proper wrapping
                    const bulletWidth = pdf.getTextWidth(bullet);
                    const wrappedLines = pdf.splitTextToSize(liText, contentWidth - bulletWidth - 5);
                    
                    wrappedLines.forEach((line: string, lineIndex: number) => {
                      if (lineIndex > 0 && yPosition + lineHeight > pageHeight - margin) {
                        pdf.addPage();
                        yPosition = margin;
                      }
                      pdf.text(line, margin + bulletWidth + 2, yPosition);
                      yPosition += lineHeight;
                    });
                    
                    yPosition += 2;
                  }
                });
                yPosition += 3;
                pdf.setTextColor(0, 0, 0);
                break;
                
              case 'blockquote':
                const quoteText = element.textContent?.trim() || '';
                if (quoteText) {
                  pdf.setFillColor(243, 244, 246); // Gray background
                  const quoteLines = pdf.splitTextToSize(quoteText, contentWidth - 10);
                  const quoteHeight = quoteLines.length * lineHeight + 10;
                  
                  if (yPosition + quoteHeight > pageHeight - margin) {
                    pdf.addPage();
                    yPosition = margin;
                  }
                  
                  pdf.rect(margin, yPosition - 5, contentWidth, quoteHeight, 'F');
                  pdf.setDrawColor(59, 130, 246);
                  pdf.setLineWidth(0.5);
                  pdf.line(margin, yPosition - 5, margin, yPosition + quoteHeight - 5);
                  
                  yPosition += 5;
                  addTextWithPageBreak(quoteText, 11, { color: [100, 100, 100], style: 'italic' });
                  yPosition += 5;
                }
                break;
                
              case 'strong':
              case 'b':
                const boldText = element.textContent?.trim() || '';
                if (boldText) {
                  addTextWithPageBreak(boldText, 11, { color: [0, 0, 0], style: 'bold' });
                }
                break;
                
              case 'em':
              case 'i':
                const italicText = element.textContent?.trim() || '';
                if (italicText) {
                  addTextWithPageBreak(italicText, 11, { color: [70, 70, 70], style: 'italic' });
                }
                break;
                
              case 'table':
                // Handle tables with autotable
                yPosition += 5;
                
                const table = element as HTMLTableElement;
                const tableData: any[] = [];
                const headers: string[] = [];
                
                // Extract headers
                const headerCells = table.querySelectorAll('thead th');
                headerCells.forEach(th => {
                  headers.push(th.textContent?.trim() || '');
                });
                
                // Extract data rows
                const dataRows = table.querySelectorAll('tbody tr');
                dataRows.forEach(row => {
                  const rowData: string[] = [];
                  row.querySelectorAll('td').forEach(cell => {
                    rowData.push(cell.textContent?.trim() || '');
                  });
                  if (rowData.length > 0) {
                    tableData.push(rowData);
                  }
                });
                
                // If no separate thead/tbody, process all rows
                if (headers.length === 0 && tableData.length === 0) {
                  const allRows = table.querySelectorAll('tr');
                  allRows.forEach((row, index) => {
                    const cells = row.querySelectorAll('th, td');
                    const cellData: string[] = [];
                    cells.forEach(cell => {
                      cellData.push(cell.textContent?.trim() || '');
                    });
                    
                    if (index === 0 && row.querySelector('th')) {
                      headers.push(...cellData);
                    } else if (cellData.length > 0) {
                      tableData.push(cellData);
                    }
                  });
                }
                
                // Draw table using autotable
                if (headers.length > 0 || tableData.length > 0) {
                  // Check if autoTable is available
                  if (typeof pdf.autoTable === 'function') {
                    pdf.autoTable({
                      startY: yPosition,
                      head: headers.length > 0 ? [headers] : undefined,
                      body: tableData,
                      theme: 'grid',
                      headStyles: {
                        fillColor: [243, 244, 246],
                        textColor: [17, 24, 39],
                        fontStyle: 'bold',
                        fontSize: 10,
                        cellPadding: 3
                      },
                      bodyStyles: {
                        textColor: [55, 65, 81],
                        fontSize: 9,
                        cellPadding: 2
                      },
                      alternateRowStyles: {
                        fillColor: [249, 250, 251]
                      },
                      styles: {
                        lineColor: [229, 231, 235],
                        lineWidth: 0.5
                      },
                      margin: { left: margin, right: margin }
                    });
                    
                    yPosition = pdf.lastAutoTable.finalY + 10;
                  } else {
                    // Fallback: Draw simple table without autotable
                    const cellHeight = 8;
                    const colWidth = contentWidth / Math.max(headers.length, 1);
                    
                    // Draw headers
                    if (headers.length > 0) {
                      setColor(colors.gray[100]);
                      pdf.rect(margin, yPosition, contentWidth, cellHeight, 'F');
                      
                      setColor(colors.gray[900]);
                      pdf.setFontSize(10);
                      pdf.setFont('helvetica', 'bold');
                      
                      headers.forEach((header, i) => {
                        pdf.text(header, margin + (i * colWidth) + 2, yPosition + 5);
                      });
                      
                      yPosition += cellHeight;
                    }
                    
                    // Draw data rows
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(9);
                    
                    tableData.forEach((row, rowIndex) => {
                      if (yPosition + cellHeight > pageHeight - margin) {
                        pdf.addPage();
                        yPosition = margin;
                      }
                      
                      // Alternate row background
                      if (rowIndex % 2 === 1) {
                        setColor(colors.gray[50]);
                        pdf.rect(margin, yPosition, contentWidth, cellHeight, 'F');
                      }
                      
                      setColor(colors.gray[700]);
                      row.forEach((cell: string, i: number) => {
                        const cellText = pdf.splitTextToSize(cell, colWidth - 4);
                        if (cellText.length > 0) {
                          pdf.text(cellText[0], margin + (i * colWidth) + 2, yPosition + 5);
                        }
                      });
                      
                      yPosition += cellHeight;
                    });
                    
                    // Draw table border
                    setColor(colors.gray[200]);
                    pdf.setLineWidth(0.5);
                    const tableHeight = (headers.length > 0 ? cellHeight : 0) + (tableData.length * cellHeight);
                    pdf.rect(margin, yPosition - tableHeight, contentWidth, tableHeight, 'S');
                    
                    yPosition += 5;
                  }
                }
                break;
                
              case 'code':
                // Inline code
                const codeText = element.textContent?.trim() || '';
                if (codeText) {
                  pdf.setFillColor(243, 244, 246); // Light gray background
                  pdf.setFont('helvetica', 'normal');
                  const codeWidth = pdf.getTextWidth(codeText) + 4;
                  pdf.rect(margin, yPosition - 5, codeWidth, 7, 'F');
                  pdf.setFontSize(10);
                  pdf.setTextColor(31, 41, 55); // Dark gray
                  pdf.text(codeText, margin + 2, yPosition);
                  yPosition += lineHeight;
                  pdf.setTextColor(0, 0, 0);
                }
                break;
                
              case 'pre':
                // Code block
                const preText = element.textContent?.trim() || '';
                if (preText) {
                  yPosition += 5;
                  
                  // Check if we need a new page
                  const codeLines = preText.split('\n');
                  const blockHeight = codeLines.length * 6 + 10;
                  
                  if (yPosition + blockHeight > pageHeight - margin) {
                    pdf.addPage();
                    yPosition = margin;
                  }
                  
                  // Draw code block background
                  pdf.setFillColor(31, 41, 55); // Dark background
                  pdf.rect(margin, yPosition - 5, contentWidth, blockHeight, 'F');
                  
                  // Add code text
                  pdf.setFont('helvetica', 'normal');
                  pdf.setFontSize(9);
                  pdf.setTextColor(249, 250, 251); // Light text
                  
                  let codeY = yPosition + 5;
                  codeLines.forEach(line => {
                    if (codeY + 6 > pageHeight - margin) {
                      pdf.addPage();
                      yPosition = margin;
                      codeY = yPosition + 5;
                    }
                    pdf.text(line, margin + 5, codeY);
                    codeY += 6;
                  });
                  
                  yPosition = codeY + 5;
                  pdf.setTextColor(0, 0, 0);
                }
                break;
                
              default:
                // Process children for other elements
                element.childNodes.forEach(child => processNode(child));
            }
          }
        };
        
        // Process all nodes in the section
        tempDiv.childNodes.forEach(node => processNode(node));
        
        yPosition += 10; // Section spacing
      });
      
      // Add professional footer on all pages  
      const totalPages = (pdf as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        // Footer background
        setColor(colors.gray[50]);
        pdf.rect(0, pageHeight - 15, pageWidth, 15, 'F');
        
        // Footer border
        setColor(colors.gray[200]);
        pdf.setLineWidth(0.5);
        pdf.line(0, pageHeight - 15, pageWidth, pageHeight - 15);
        
        // Page number
        pdf.setFontSize(9);
        setColor(colors.gray[600]);
        pdf.text(`Page ${i} of ${totalPages}`, margin, pageHeight - 8);
        
        // MediMind branding
        pdf.text('MediMind Expert • AI Medical Co-Pilot', pageWidth / 2, pageHeight - 8, { align: 'center' });
        
        // Copyright
        pdf.text(`© ${new Date().getFullYear()}`, pageWidth - margin - 20, pageHeight - 8);
      }
      
      // Save the PDF
      pdf.save(`MediMind_${title?.replace(/\s+/g, '_') || 'document'}_${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: title || 'Medical Document',
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  // Standard markdown components for section content
  const MarkdownComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center space-x-4 pb-6 border-b-2 border-gradient-to-r from-blue-500 to-indigo-500 font-['Inter',_'system-ui',_sans-serif]">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
          <Microscope className="w-8 h-8 text-white" />
        </div>
        <span className="tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
          {children}
        </span>
      </h1>
    ),
    h2: ({ children, ...props }: any) => {
      // Detect section type for appropriate icons and colors
      const text = children?.toString() || '';
      let icon = Activity;
      let gradientClasses = "from-blue-600 to-indigo-600";
      let textColor = "text-blue-900";
      let bgColor = "bg-blue-50";
      
      if (text.includes('Background') || text.includes('Overview')) {
        icon = BookOpen;
        gradientClasses = "from-emerald-600 to-teal-600";
        textColor = "text-emerald-900";
        bgColor = "bg-emerald-50";
      } else if (text.includes('Clinical') || text.includes('Symptoms') || text.includes('Findings')) {
        icon = Stethoscope;
        gradientClasses = "from-purple-600 to-violet-600";
        textColor = "text-purple-900";
        bgColor = "bg-purple-50";
      } else if (text.includes('Guidelines') || text.includes('Management')) {
        icon = Shield;
        gradientClasses = "from-indigo-600 to-blue-600";
        textColor = "text-indigo-900";
        bgColor = "bg-indigo-50";
      } else if (text.includes('References')) {
        icon = Globe;
        gradientClasses = "from-slate-600 to-gray-600";
        textColor = "text-slate-900";
        bgColor = "bg-slate-50";
      } else if (text.includes('Recent Studies') || text.includes('Updated Evidence')) {
        icon = TrendingUp;
        gradientClasses = "from-amber-600 to-orange-600";
        textColor = "text-amber-900";
        bgColor = "bg-amber-50";
      } else if (text.includes('Diagnostic') || text.includes('Investigation')) {
        icon = Search;
        gradientClasses = "from-cyan-600 to-blue-600";
        textColor = "text-cyan-900";
        bgColor = "bg-cyan-50";
      }
      
      const IconComponent = icon;
      
      return (
        <div className={`${bgColor} -mx-8 px-8 py-6 mb-8 mt-12 rounded-2xl border-l-4 border-gradient-to-b ${gradientClasses.replace('from-', 'from-').replace('to-', 'to-')}`}>
          <h2 className={`text-3xl font-bold ${textColor} flex items-center space-x-4 font-['Inter',_'system-ui',_sans-serif]`} {...props}>
            <div className={`p-3 bg-gradient-to-r ${gradientClasses} rounded-xl shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <span className="tracking-tight">{children}</span>
            <div className="flex-1 h-1 bg-gradient-to-r from-current to-transparent opacity-20 ml-6 rounded-full"></div>
          </h2>
        </div>
      );
    },
    h3: ({ children, ...props }: any) => {
      // Detect subsection type for appropriate styling
      const text = children?.toString() || '';
      let icon = Target;
      let colorClasses = "text-indigo-700";
      let dotColor = "from-indigo-500 to-blue-500";
      
      if (text.includes('Symptoms') || text.includes('Clinical')) {
        icon = Activity;
        colorClasses = "text-purple-700";
        dotColor = "from-purple-500 to-violet-500";
      } else if (text.includes('Treatment') || text.includes('Management') || text.includes('Therapy')) {
        icon = Pill;
        colorClasses = "text-green-700";
        dotColor = "from-green-500 to-emerald-500";
      } else if (text.includes('Diagnosis') || text.includes('Investigation') || text.includes('Testing')) {
        icon = Search;
        colorClasses = "text-blue-700";
        dotColor = "from-blue-500 to-cyan-500";
      } else if (text.includes('Key Sources') || text.includes('Guidelines')) {
        icon = Shield;
        colorClasses = "text-indigo-700";
        dotColor = "from-indigo-500 to-purple-500";
      } else if (text.includes('Overview') || text.includes('Definition')) {
        icon = BookOpen;
        colorClasses = "text-emerald-700";
        dotColor = "from-emerald-500 to-teal-500";
      }
      
      const IconComponent = icon;
      
      return (
        <h3 className={`text-xl font-bold ${colorClasses} mb-5 mt-10 flex items-center space-x-3 font-['Inter',_'system-ui',_sans-serif]`} {...props}>
          <div className={`p-2 bg-gradient-to-r ${dotColor} rounded-lg shadow-md`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <span className="tracking-tight">{children}</span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-current to-transparent opacity-30 ml-4 rounded-full"></div>
        </h3>
      );
    },
    h4: ({ children, ...props }: any) => (
      <h4 className="text-lg font-bold text-gray-800 mb-4 mt-8 flex items-center space-x-3 font-['Inter',_'system-ui',_sans-serif]" {...props}>
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
        <span className="tracking-tight">{children}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-3"></div>
      </h4>
    ),
    p: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const evidence = getEvidenceLevel(text);
      
      // Check if this is a calculator score or interpretation
      const isCalculationScore = text.includes('Calculation Score:') || text.includes('Score:');
      const isInterpretation = text.includes('Interpretation:') || text.includes('Risk of');
      
      // Hide static calculation score and interpretation for 4Ts calculator since interactive component handles this
      const is4TsScoreOrInterpretation = (isCalculationScore || isInterpretation) && 
                                        (text.includes('8 points') || text.includes('34%') || text.includes('heparin-induced thrombocytopenia'));
      
      if (is4TsScoreOrInterpretation) {
        return null; // Don't render static score/interpretation for 4Ts calculator
      }
      
      // Check if this is a reference/citation
      const isPubMedReference = text.includes('PubMed') || text.includes('PMID') || text.includes('doi:');
      const isNumberedReference = /^\d+\.\s/.test(text.trim());
      const isSourceLine = text.includes('Source:') && text.includes('*');
      
      if (isPubMedReference || isNumberedReference) {
        return (
          <div className="group mb-6 p-5 bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 border border-slate-200 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow border border-slate-100">
                <Globe className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-slate-700 font-['Inter',_'system-ui',_sans-serif] tracking-tight">
                  {children}
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (isSourceLine) {
        return (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
            <p className="text-sm italic text-blue-700 font-['Inter',_'system-ui',_sans-serif] tracking-tight">
              {children}
            </p>
          </div>
        );
      }
      
      if (isCalculationScore || isInterpretation) {
        return (
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 p-8 rounded-2xl my-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-blue-900 leading-relaxed font-['Inter',_'system-ui',_sans-serif] tracking-tight">{children}</p>
              </div>
            </div>
          </div>
        );
      }
      
      if (evidence) {
        const { level, color, icon: EvidenceIcon } = evidence;
        const colorClasses = {
          emerald: 'bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-emerald-300 text-emerald-900',
          blue: 'bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-blue-300 text-blue-900',
          amber: 'bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-amber-300 text-amber-900',
          purple: 'bg-gradient-to-r from-purple-50 via-violet-50 to-purple-50 border-purple-300 text-purple-900',
          red: 'bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border-red-300 text-red-900',
          indigo: 'bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border-indigo-300 text-indigo-900',
          slate: 'bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 border-slate-300 text-slate-900'
        };
        
        const badgeColors = {
          emerald: 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-emerald-200',
          blue: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-200',
          amber: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-amber-200',
          purple: 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-purple-200',
          red: 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-red-200',
          indigo: 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-indigo-200',
          slate: 'bg-gradient-to-r from-slate-500 to-gray-600 text-white shadow-slate-200'
        };
        
        return (
          <div className={`p-6 rounded-2xl border-l-4 mb-8 ${colorClasses[color as keyof typeof colorClasses]} shadow-xl hover:shadow-2xl transition-all duration-300`}>
            <div className="flex items-start space-x-5">
              <div className={`p-3 rounded-2xl ${badgeColors[color as keyof typeof badgeColors]} shadow-xl`}>
                <EvidenceIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-4 py-2 text-sm font-bold rounded-2xl ${badgeColors[color as keyof typeof badgeColors]} shadow-lg`}>
                    Evidence Level {level}
                  </span>
                </div>
                <p className="text-base leading-relaxed font-medium font-['Inter',_'system-ui',_sans-serif] tracking-tight">{children}</p>
              </div>
            </div>
          </div>
        );
      }
      
      return (
        <p className="text-gray-700 leading-relaxed mb-5 text-base font-['Inter',_'system-ui',_sans-serif] tracking-tight" {...props}>
          {children}
        </p>
      );
    },
    ul: ({ children, ...props }: any) => (
      <ul className="space-y-4 mb-8 pl-2" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }: any) => (
      <li className="flex items-start space-x-4 text-gray-700" {...props}>
        <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2.5 flex-shrink-0 shadow-md"></div>
        <span className="leading-relaxed font-['Inter',_'system-ui',_sans-serif] tracking-tight text-base">{children}</span>
      </li>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="space-y-4 mb-8 pl-2" {...props}>
        {children}
      </ol>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote 
        className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 my-8 rounded-r-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        {...props}
      >
        <div className="flex items-start space-x-5">
          <div className="p-3 bg-blue-500 rounded-2xl shadow-xl">
            <Quote className="w-6 h-6 text-white" />
          </div>
          <div className="text-blue-900 font-medium italic leading-relaxed font-['Inter',_'system-ui',_sans-serif] text-lg tracking-tight">
            {children}
          </div>
        </div>
      </blockquote>
    ),
    table: ({ children, ...props }: any) => {
      // Detect if this is a medical calculator or scoring table
      const tableContent = children?.toString() || '';
      const isCalculatorTable = tableContent.includes('Parameter') || tableContent.includes('Points') || tableContent.includes('Score');
      const isRiskTable = tableContent.includes('Risk') || tableContent.includes('Stage') || tableContent.includes('Classification');
      const isGuidelinesTable = tableContent.includes('Guidance') || tableContent.includes('Recommendation');
      const isLikelihoodTable = tableContent.includes('Finding') || tableContent.includes('LR+') || tableContent.includes('Value');
      
      // Check if this is specifically the 4Ts calculator table
      const is4TsCalculator = tableContent.includes('Thrombocytopenia') && 
                             tableContent.includes('Timing of platelet count fall') && 
                             tableContent.includes('Parameter') && 
                             tableContent.includes('Points');
      
      // Replace 4Ts calculator table with interactive component
      if (is4TsCalculator) {
        return <HIT4TsCalculator />;
      }
      
      let containerClasses = "overflow-x-auto my-10 rounded-2xl shadow-2xl border-2 border-gray-200 bg-white";
      let tableClasses = "min-w-full divide-y divide-gray-200 bg-white";
      
      if (isCalculatorTable) {
        containerClasses = "overflow-x-auto my-10 rounded-2xl shadow-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50";
        tableClasses = "min-w-full divide-y divide-emerald-200 bg-white/95 backdrop-blur-sm";
      } else if (isRiskTable) {
        containerClasses = "overflow-x-auto my-10 rounded-2xl shadow-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50";
        tableClasses = "min-w-full divide-y divide-amber-200 bg-white/95 backdrop-blur-sm";
      } else if (isGuidelinesTable) {
        containerClasses = "overflow-x-auto my-10 rounded-2xl shadow-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50";
        tableClasses = "min-w-full divide-y divide-purple-200 bg-white/95 backdrop-blur-sm";
      } else if (isLikelihoodTable) {
        containerClasses = "overflow-x-auto my-10 rounded-2xl shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50";
        tableClasses = "min-w-full divide-y divide-blue-200 bg-white/95 backdrop-blur-sm";
      }
      
      return (
        <div className={containerClasses}>
          <table className={tableClasses} {...props}>
            {children}
          </table>
        </div>
      );
    },
    thead: ({ children, ...props }: any) => {
      // Get the table context to determine header styling
      const tableContent = children?.toString() || '';
      const isCalculatorTable = tableContent.includes('Parameter') || tableContent.includes('Points') || tableContent.includes('Score');
      const isRiskTable = tableContent.includes('Risk') || tableContent.includes('Stage') || tableContent.includes('Situation');
      const isGuidelinesTable = tableContent.includes('Guidance') || tableContent.includes('Recommendation');
      const isLikelihoodTable = tableContent.includes('Finding') || tableContent.includes('LR+') || tableContent.includes('Value');
      
      let headerClasses = "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white";
      
      if (isCalculatorTable) {
        headerClasses = "bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white";
      } else if (isRiskTable) {
        headerClasses = "bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white";
      } else if (isGuidelinesTable) {
        headerClasses = "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white";
      } else if (isLikelihoodTable) {
        headerClasses = "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white";
      }
      
      return (
        <thead className={headerClasses} {...props}>
          {children}
        </thead>
      );
    },
    th: ({ children, ...props }: any) => (
      <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 last:border-r-0 font-['Inter',_'system-ui',_sans-serif]" {...props}>
        <div className="flex items-center space-x-2">
          <span>{children}</span>
        </div>
      </th>
    ),
    td: ({ children, ...props }: any) => {
      const cellContent = children?.toString() || '';
      const isScoreCell = cellContent.includes('points') || /^\d+$/.test(cellContent.trim());
      const isRiskCell = cellContent.includes('Low') || cellContent.includes('Intermediate') || cellContent.includes('High');
      const isValueCell = cellContent.includes('(') && cellContent.includes(')') && cellContent.includes('-');
      
      let cellClasses = "px-8 py-5 text-sm text-gray-700 border-b border-gray-100 align-top font-['Inter',_'system-ui',_sans-serif] tracking-tight leading-relaxed";
      
      if (isScoreCell) {
        cellClasses += " font-bold text-center bg-blue-50 text-blue-900";
      } else if (isRiskCell) {
        if (cellContent.includes('Low')) {
          cellClasses += " font-semibold text-emerald-800 bg-emerald-50";
        } else if (cellContent.includes('Intermediate')) {
          cellClasses += " font-semibold text-amber-800 bg-amber-50";
        } else if (cellContent.includes('High')) {
          cellClasses += " font-semibold text-red-800 bg-red-50";
        }
      } else if (isValueCell) {
        cellClasses += " font-medium text-center text-indigo-700 bg-indigo-50";
      }
      
      return (
        <td className={cellClasses} {...props}>
          {children}
        </td>
      );
    },
    strong: ({ children, ...props }: any) => {
      const text = children?.toString() || '';
      
      // Use enhanced evidence level detection
      const evidence = getEvidenceLevel(text);
      
      if (evidence) {
        const { level, color, icon: EvidenceIcon } = evidence;
        
        const colorClasses = {
          emerald: 'text-emerald-900 bg-gradient-to-r from-emerald-100 to-green-100 border-emerald-300',
          blue: 'text-blue-900 bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300',
          amber: 'text-amber-900 bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-300',
          purple: 'text-purple-900 bg-gradient-to-r from-purple-100 to-violet-100 border-purple-300',
          red: 'text-red-900 bg-gradient-to-r from-red-100 to-pink-100 border-red-300',
          indigo: 'text-indigo-900 bg-gradient-to-r from-indigo-100 to-blue-100 border-indigo-300',
          slate: 'text-slate-900 bg-gradient-to-r from-slate-100 to-gray-100 border-slate-300'
        };

        return (
          <strong className={`inline-flex items-center space-x-2 font-bold px-3 py-1.5 rounded-xl border font-['Inter',_'system-ui',_sans-serif] shadow-lg hover:shadow-xl transition-all duration-200 ${colorClasses[color as keyof typeof colorClasses]}`} {...props}>
            <EvidenceIcon className="w-4 h-4" />
            <span>{children}</span>
          </strong>
        );
      }
      
      // Special styling for definitions and key terms
      if (text.includes('Definition') || text.includes('Pathophysiology') || text.includes('Epidemiology')) {
        return (
          <strong className="font-bold text-emerald-900 bg-gradient-to-r from-emerald-100 to-green-100 px-3 py-1.5 rounded-xl border border-emerald-200 font-['Inter',_'system-ui',_sans-serif] shadow-sm" {...props}>
            {children}
          </strong>
        );
      }
      
      return (
        <strong className="font-bold text-gray-900 bg-gradient-to-r from-slate-100 to-gray-100 px-2 py-1 rounded-lg border border-slate-200 font-['Inter',_'system-ui',_sans-serif] shadow-sm" {...props}>
          {children}
        </strong>
      );
    },
    code: ({ children, ...props }: any) => (
      <code className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-mono border border-slate-200 font-['JetBrains_Mono',_monospace] shadow-sm" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }: any) => (
      <pre className="bg-slate-900 text-slate-100 p-8 rounded-2xl overflow-x-auto my-8 shadow-2xl border border-slate-700 font-['JetBrains_Mono',_monospace]" {...props}>
        {children}
      </pre>
    ),
    a: ({ children, href, ...props }: any) => {
      // Enhanced link styling for PubMed and external references
      const isPubMedLink = href?.includes('pubmed') || children?.toString().includes('PubMed');
      
      if (isPubMedLink) {
        return (
          <a 
            href={href} 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 hover:decoration-blue-500 transition-all duration-200 font-['Inter',_'system-ui',_sans-serif] bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-lg"
            target="_blank" 
            rel="noopener noreferrer"
            {...props}
          >
            <span>{children}</span>
            <Globe className="w-4 h-4" />
          </a>
        );
      }
      
      return (
        <a 
          href={href} 
          className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 hover:decoration-blue-500 transition-colors duration-200 font-['Inter',_'system-ui',_sans-serif]"
          {...props}
        >
          {children}
        </a>
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-6"></div>
            <Stethoscope className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-gray-600 font-medium">Loading medical document...</p>
          <p className="text-sm text-gray-500 mt-2">Preparing clinical content</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-200 max-w-md">
          <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Document Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="w-full px-4 py-8 flex gap-6">
        {/* Table of Contents Sidebar */}
        {showTOC && tableOfContents.length > 0 && (
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* TOC Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="font-semibold">Table of Contents</h3>
                  </div>
                  <button
                    onClick={() => setShowTOC(false)}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center space-x-4 text-sm text-blue-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{estimatedReadTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{Math.round(readingProgress)}% complete</span>
                  </div>
                </div>
              </div>

              {/* TOC Content */}
              <div className="max-h-[calc(100vh-300px)] overflow-y-auto p-4">
                <nav className="space-y-1">
                  {tableOfContents.map((item, index) => {
                    const section = sections.find(s => s.id === item.id);
                    const isCollapsed = section?.isCollapsed || false;
                    const isMainSection = item.level <= 2;
                    
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`flex-1 text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 group ${
                            activeSection === item.id
                              ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                          style={{ paddingLeft: `${item.level * 12 + 12}px` }}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            activeSection === item.id ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-400'
                          }`} />
                          <span className="text-sm font-medium truncate">{item.title}</span>
                        </button>
                        
                        {isMainSection && (
                          <button
                            onClick={() => toggleSection(item.id)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                            title={isCollapsed ? 'Expand section' : 'Collapse section'}
                          >
                            {isCollapsed ? (
                              <Plus className="w-3 h-3 text-gray-500" />
                            ) : (
                              <Minus className="w-3 h-3 text-gray-500" />
                            )}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header Controls */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search within document..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                {!showTOC && (
                  <button
                    onClick={() => setShowTOC(true)}
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  >
                    <Menu className="w-4 h-4" />
                    <span className="hidden sm:inline">TOC</span>
                  </button>
                )}
                
                {/* Expand/Collapse All Sections */}
                <button
                  onClick={toggleAllSections}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  title={sections.some(s => s.isCollapsed) ? 'Expand all sections' : 'Collapse all sections'}
                >
                  {sections.some(s => s.isCollapsed) ? (
                    <Plus className="w-4 h-4" />
                  ) : (
                    <Minus className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {sections.some(s => s.isCollapsed) ? 'Expand All' : 'Collapse All'}
                  </span>
                </button>
                
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`px-4 py-3 rounded-xl transition-colors flex items-center space-x-2 ${
                    bookmarked 
                      ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>
              </div>
            </div>
          </div>

          {/* Document Sections */}
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <div
                key={section.id}
                data-section-id={section.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                                 {/* Section Header */}
                 <div 
                   id={section.id}
                   className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                   onClick={() => toggleSection(section.id)}
                 >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {section.level === 1 ? (
                        <div className="p-3 bg-blue-600 rounded-xl">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="p-2 bg-indigo-500 rounded-lg">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div>
                        <h2 className={`font-bold text-gray-900 ${
                          section.level === 1 ? 'text-2xl' : 'text-xl'
                        }`}>
                          {section.title}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                          {section.level === 1 ? 'Main Section' : 'Subsection'} • 
                          {section.isCollapsed ? ' Collapsed' : ' Expanded'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {section.isCollapsed ? (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    section.isCollapsed ? 'max-h-0' : 'max-h-none'
                  }`}
                >
                  <div className="p-8">
                                      <div className="prose prose-lg max-w-none">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={MarkdownComponents}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-40"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default InteractiveMarkdownViewer; 