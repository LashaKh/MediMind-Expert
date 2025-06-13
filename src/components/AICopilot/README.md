# AI Co-Pilot Components

## Enhanced Source Reference System

The AI Co-Pilot now features an enhanced source reference system with interactive click-to-highlight functionality.

### Features

#### 1. Interactive Inline Citations
- Source references in AI responses (e.g., [1], [2], [3]) are now clickable
- Clicking on an inline citation highlights the corresponding source in the source list
- Hover effects provide visual feedback for interactive elements

#### 2. Bidirectional Highlighting
- Click on inline citations to highlight sources
- Click on sources in the source list to highlight them
- Click again to remove highlighting

#### 3. Enhanced Visual Design
- Source type indicators with color coding:
  - 🟢 Guidelines (green)
  - 🟣 Research (purple) 
  - 🔵 Documents (blue)
  - 🟠 Textbooks (orange)
- Smooth animations and transitions
- Responsive design for all screen sizes

#### 4. Accessibility Features
- Keyboard navigation support
- Screen reader compatible
- ARIA labels and proper semantic markup
- Focus indicators for interactive elements

### Components

#### SourceReferences.tsx
Main component for displaying source lists with:
- Expandable/collapsible interface
- Hover previews for long excerpts
- External link support
- Highlighting state management

#### MessageItem.tsx
Enhanced to support:
- Click handling for inline citations
- Source highlighting state
- Integration with SourceReferences component

#### messageFormatter.ts
Enhanced with:
- Interactive inline citation generation
- Improved HTML formatting
- Source reference parsing

### Usage

```tsx
// In AI message responses, include sources array
const aiMessage = {
  content: "According to guidelines [1], the treatment approach [2] shows effectiveness.",
  sources: [
    {
      id: "1",
      title: "Clinical Guidelines",
      type: "guideline",
      url: "https://example.com",
      excerpt: "Treatment recommendations..."
    },
    {
      id: "2", 
      title: "Research Study",
      type: "research",
      excerpt: "Study findings show..."
    }
  ]
};
```

### Testing

To test the enhanced functionality:
1. Enable demo mode in ChatWindow
2. Observe the demo message with source references
3. Click on inline citations [1], [2], [3] to see highlighting
4. Click on sources in the source list to highlight them
5. Verify smooth animations and responsive behavior

### Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Hover states work on desktop
- Touch interactions supported on mobile 