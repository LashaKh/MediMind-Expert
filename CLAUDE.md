# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MediMind Expert is a medical AI co-pilot platform designed for healthcare professionals, providing specialty-specific workspaces (Cardiology and OB/GYN) with AI chat, medical calculators, knowledge base management, and case management systems.

## Development Commands

```bash
# Start development server
npm run dev

# Start development with Netlify Functions
npm run dev:netlify

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

### Frontend Stack
- **React 18.3.1** with TypeScript and strict mode
- **Vite 5.4.2** for build tooling and development server
- **React Router DOM 6.22.2** for client-side routing
- **Tailwind CSS 3.4.1** for styling with responsive design system
- **i18next 25.2.1** for comprehensive internationalization (EN/RU/KA)

### Backend & Services
- **Supabase** for authentication, PostgreSQL database, and file storage
- **Netlify Functions** for serverless backend APIs
- **OpenAI API** for Vector Store management and document processing
- **Flowise API** for specialty-specific AI chat integration

### Core Architectural Patterns

#### Context-Based State Management
The application uses React Context for global state management:

- **AuthContext**: User authentication and profile management
- **SpecialtyContext**: Medical specialty routing (Cardiology/OB-GYN)
- **LanguageContext**: Multi-language support and translation management
- **ChatContext**: AI chat state with message handling and case management

#### Specialty-Based Routing
Users are locked to their chosen medical specialty after onboarding:
- `/workspace/cardiology` - Cardiology-specific features
- `/workspace/obgyn` - OB/GYN-specific features
- Common routes like `/calculators`, `/ai-copilot` available to all specialties

#### Component Organization
```
src/components/
├── Auth/              # Authentication components
├── AICopilot/         # AI chat interface
├── Calculators/       # Medical calculator suite
├── Layout/            # Application layout components
├── Settings/          # User preferences and configuration
├── Workspaces/        # Specialty-specific workspaces
└── ui/                # Reusable UI components
```

## Medical Calculator System

### Calculator Architecture
The medical calculator system supports 30+ professional-grade calculators across specialties:

- **Cardiology**: 16 calculators including ASCVD, GRACE, HCM Risk-SCD, Atrial Fibrillation tools
- **OB/GYN**: 15+ calculators including Bishop Score, VBAC Success, Preeclampsia Risk

### Calculator Implementation Pattern
```typescript
// Service layer (src/services/obgynCalculatorService.ts)
export function calculateOBGYN(
  calculatorType: OBGYNCalculatorType, 
  input: OBGYNCalculatorInput
): OBGYNCalculatorResult

// Component pattern
const MyCalculator: React.FC = () => {
  const { t } = useTranslation();
  // Use translations for all user-facing text
  return <CalculatorUI title={t('calculators.obgyn.myCalculator.title')} />
}
```

### Validation Standards
All calculators must achieve 100% validation success with:
- Evidence-based medical accuracy following ACOG, ACC/AHA guidelines
- Comprehensive input validation with medical range checks
- Risk-based color coding and clinical interpretations
- Professional recommendations with literature references

## Translation System

### Modular Translation Architecture
The project implements a comprehensive i18n system supporting English, Russian, and Georgian:

```
src/i18n/translations/
├── en/
│   ├── calculators/
│   │   ├── ObGyn/           # Individual calculator translations
│   │   ├── common.ts        # Shared calculator terms
│   │   └── index.ts         # Calculator namespace exports
│   ├── common.ts            # Global common translations
│   └── index.ts             # Language exports
├── ru/                      # Russian translations (same structure)
└── ka/                      # Georgian translations (same structure)
```

### Translation Implementation Rules
1. **No hardcoded text**: All user-facing text must use translation keys
2. **Modular structure**: Each calculator has its own translation file
3. **Common terms**: Shared medical terminology in `common.ts` files
4. **Nested key notation**: Use dot notation for organized key structure
```typescript
// Example translation usage
const { t } = useTranslation();
const title = t('calculators.obgyn.bishopScore.title');
const interpretation = t('calculators.common.detailedAnalysis');
```

## Database and Storage

### Supabase Schema
Critical tables include:
- `profiles` - User profile and specialty information
- `knowledge_base_documents` - Document metadata for Vector Store
- `user_vector_stores` - OpenAI Vector Store management
- `user_documents` - Document metadata and content storage
- `ai_podcasts` - Podcast generation records
- `podcast_queue` - Queue management for podcast processing
- Row Level Security (RLS) enabled on all user data tables

### Supabase Project Configuration
**Current Project Details:**
- Project ID: `kvsqtolsjggpyvdtdpss`
- Project URL: `https://kvsqtolsjggpyvdtdpss.supabase.co`
- Service Role Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2c3F0b2xzamdncHl2ZHRkcHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM2OTc3MCwiZXhwIjoyMDYzOTQ1NzcwfQ.AVWB4s6CGI2IHK4pDSU9rZym4juJ3jwCJB7YyCPKfGE`

### MCP Supabase Usage Guidelines

#### Using Supabase MCP Correctly
When working with database operations through MCP, use this project ID: `kvsqtolsjggpyvdtdpss`

**❌ Common Mistakes to Avoid:**
- Using wrong project IDs from other MCP configurations
- Assuming schema fields without checking actual structure
- Using `original_content` field (doesn't exist in this schema)
- Using `file_path` field (not in current schema)

**✅ Correct Usage Patterns:**

```typescript
// Check actual table schema first
mcp__supabase__execute_sql(
  project_id: "kvsqtolsjggpyvdtdpss",
  query: "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'user_documents';"
)

// Use correct field names for user_documents table
const document = {
  user_id: userId,
  title: "Document Title",
  description: textContent, // Store content here, NOT original_content
  file_name: fileName,
  file_type: fileType,
  file_size: fileSize,
  category: "other",
  tags: ["uploaded", "podcast"],
  processing_status: "completed",
  upload_status: "completed",
  is_private: true
}
```

#### Key Schema Field Mappings
**user_documents table:**
- Content storage: `description` (NOT `original_content`)
- File metadata: `file_name`, `file_type`, `file_size`
- Status tracking: `upload_status`, `processing_status`
- Organization: `category`, `tags`, `is_private`
- Timestamps: `created_at`, `updated_at`

**ai_podcasts table:**
- Core fields: `user_id`, `title`, `description`, `status`
- Audio data: `audio_url`, `duration`, `playnote_id`
- Generation settings: `synthesis_style`, `voice_settings`
- Content source: `source_documents` (JSONB array)

#### Debugging Database Issues
1. **Always verify project ID**: `kvsqtolsjggpyvdtdpss`
2. **Check schema before operations**: Use information_schema queries
3. **Test with simple queries first**: SELECT before INSERT/UPDATE
4. **Validate field names**: Check existing records for structure
5. **Use service_role for admin operations**: Bypasses RLS when needed

### File Storage Patterns
All file uploads use Supabase Storage with consistent patterns:
```typescript
// Example from ProfilePictureUpload component
const { data, error } = await supabase.storage
  .from('user-uploads')
  .upload(`profile-pictures/${userId}/${fileName}`, file);

// Podcast document uploads
const filePath = `uploads/${userId}/${timestamp}-${fileName}`;
const { error: uploadError } = await supabase.storage
  .from('user-uploads')
  .upload(filePath, file);
```

## AI Integration

### Flowise Chat Integration
AI chat is specialty-aware and routes to appropriate medical chatbots:
- Automatic routing based on user's specialty (Cardiology/OB-GYN)
- Backend proxy handles authentication and request routing
- Real-time communication with typing indicators and error handling

### Podcast Generation System
Complete AI-powered podcast generation using PlayAI:

#### PlayAI Configuration
```bash
# Required environment variables
PLAYAI_API_KEY=ak-db1e311950bd41c0b8da58499cac832b
PLAYAI_USER_ID=oq9xWA5ju0cCAGijjjB34WAI08X2
```

#### Medical Voice Settings
```typescript
const MEDICAL_VOICES = {
  voice1: 's3://voice-cloning-zero-shot/baf1ef41-36b6-428c-9bdf-50ba54682bd8/original/manifest.json',
  voice1Name: 'Dr. Sarah Chen',
  voice2: 's3://voice-cloning-zero-shot/e040bd1b-f190-4bdb-83f0-75ef85b18f84/original/manifest.json',
  voice2Name: 'Dr. Michael Rodriguez'
};
```

#### Key Integration Points
1. **File Upload Processing**: Documents uploaded via UI are processed and stored in `user_documents.description`
2. **Queue Management**: `podcast_queue` table manages generation order and status
3. **PlayAI API**: Receives actual file content (not URLs) via form-data
4. **Status Tracking**: Real-time updates through `ai_podcasts.status` field

#### Common Issues and Solutions
**❌ PlayAI API Errors:**
- Problem: Sending OpenAI file URLs to PlayAI
- Solution: Extract content from `user_documents.description` and send as Buffer

**❌ FormData Issues in Node.js:**
- Problem: Using browser FormData in Netlify Functions
- Solution: Import and use `form-data` package with proper headers

```typescript
// Correct PlayAI API call pattern
import FormData from 'form-data';

const formData = new FormData();
const textContent = Buffer.from(document.description, 'utf-8');
formData.append('file', textContent, {
  filename: document.file_name || 'document.txt',
  contentType: 'text/plain'
});

const response = await fetch('https://api.play.ai/api/v1/playnotes', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${PLAYAI_API_KEY}`,
    'X-USER-ID': PLAYAI_USER_ID,
    ...formData.getHeaders()
  },
  body: formData
});
```

### Document Processing Pipeline
Complete document upload and processing system:
1. **Frontend**: DocumentUpload component with real-time progress tracking
2. **Backend**: Netlify Functions for text extraction and content structuring
3. **Storage**: Supabase Storage for file persistence and database for metadata
4. **AI Processing**: PlayAI integration for podcast generation from document content

## Form and Validation Patterns

### Standard Form Implementation
```typescript
// Form validation pattern
const validateForm = (data: FormData): string[] => {
  const errors: string[] = [];
  // Add validation logic with medical-appropriate ranges
  return errors;
};

// Error handling pattern
const [error, setError] = useState<string>('');
const [isLoading, setIsLoading] = useState(false);
```

### Medical Input Validation
Medical calculators require specific validation patterns:
- Age ranges: typically 18-100 years
- BMI ranges: 15-60 kg/m²
- Clinical value ranges based on medical literature
- Input sanitization for safety and accuracy

## Responsive Design System

### Mobile-First Development
All components follow mobile-first responsive design:
- Touch targets minimum 44px (Apple guidelines)
- Responsive breakpoints using Tailwind CSS
- Cross-device consistency for clinical workflows
- Safe area support for modern mobile devices

### CSS Architecture
```css
/* src/styles/responsive.css */
:root {
  --touch-target-min: 44px;
  --safe-area-inset-top: env(safe-area-inset-top);
  /* Comprehensive responsive variables */
}
```

## Development Guidelines

### TypeScript Standards
- Strict mode enforced throughout the project
- Comprehensive type definitions for all medical calculators
- Interface-based architecture for maintainable code

### Component Development
- Feature-based organization with index.ts exports
- Consistent error handling with user-friendly messages
- Loading states for all async operations
- Accessibility features (ARIA labels, keyboard navigation)

### Medical Calculator Development
When implementing new calculators:
1. Create TypeScript interfaces in `src/types/`
2. Implement calculation logic in service layer
3. Create translation files for all three languages
4. Build component with consistent UI patterns
5. Achieve 100% validation success before deployment

## Backend Infrastructure

### Netlify Functions
Serverless functions provide backend APIs:
- Authentication middleware with JWT validation
- Document processing pipelines
- Flowise proxy for AI integration
- Health monitoring endpoints

### Error Handling
Comprehensive error management system:
- Global error boundaries for React components
- API error handling with user-friendly messages
- Retry mechanisms for network operations
- Logging for debugging and monitoring

## Production Deployment

### Build Requirements
- Successful TypeScript compilation required
- All translation keys must resolve properly
- Medical calculator validation tests must pass
- Responsive design verification across devices

### Environment Setup
Required environment variables:
- Supabase: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- OpenAI: `OPENAI_API_KEY`
- Flowise: `FLOWISE_API_URL`

### Database Setup
Before deployment, execute:
1. `supabase_setup_safe.sql` for schema and policies
2. Create 'user-uploads' bucket in Supabase Storage
3. Configure RLS policies for user data isolation

## Critical Implementation Notes

### Security Considerations
- Row Level Security (RLS) on all user data
- Input sanitization for all medical calculations
- Secure file upload validation
- JWT-based authentication throughout

### Medical Accuracy Standards
- Evidence-based calculations following medical guidelines
- Conservative bias for patient safety
- Literature references for all clinical recommendations
- Validation against published medical studies

### Performance Optimizations
- Lazy loading for calculator components
- Optimized bundle sizes with tree shaking
- Efficient state management with React Context
- Real-time progress tracking for long operations

This architecture provides a robust foundation for developing additional medical features while maintaining high standards for clinical accuracy, user experience, and technical excellence.