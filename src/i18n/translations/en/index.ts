import common from './common';
import navigation from './navigation';
import auth from './auth';
import calculators from './calculators';
import chat from './chat';
import documents from './documents';
import medical from './medical';
import validation from './validation';
import knowledgeBase from './knowledgeBase';

export default {
  common,
  navigation,
  auth,
  calculators,
  chat,
  documents,
  medical,
  validation,
  knowledgeBase,
  
  // Case management
  case: {
    createNewCase: 'Create New Case',
    newCase: 'New Case',
    caseTitle: 'Case Title',
    caseDescription: 'Case Description',
    anonymizedInfo: 'Anonymized Patient Information',
    anonymizedPatientInfo: 'Anonymized Patient Information',
    category: 'Category',
    complexity: 'Complexity',
    complexityLevel: 'Complexity Level',
    tags: 'Tags',
    createCase: 'Create Case',
    creating: 'Creating...',
    creatingCase: 'Creating Case...',
    cancel: 'Cancel',
    save: 'Save',
    
    // Privacy and validation
    privacyNotice: 'Privacy Notice',
    privacyMessage: 'Please ensure all patient information is completely anonymized. Remove names, dates, specific locations, and any other identifying details.',
    privacyNoticeDetailed: 'Include relevant medical history, symptoms, test results, and other clinical information. Ensure all identifying details are removed.',
    anonymizationHelp: 'Include relevant medical history, symptoms, test results, and other clinical information. Ensure all identifying details are removed.',
    
    // Form placeholders
    titlePlaceholder: 'Brief descriptive title for this case',
    descriptionPlaceholder: 'Brief overview of the case and what you\'d like to discuss',
    patientInfoPlaceholder: 'Patient age, gender, presenting symptoms, medical history, test results, etc. (completely anonymized)',
    tagsPlaceholder: 'e.g., hypertension, diabetes, follow-up',
    tagsHint: 'Separate multiple tags with commas',
    categoryHint: 'Optional - helps organize your cases',
    
    // Validation errors
    titleRequired: 'Case title is required',
    descriptionRequired: 'Case description is required',
    patientInfoRequired: 'Patient information is required',
    patientInfoTooShort: 'Please provide more detailed patient information (minimum 50 characters)',
    sensitiveInfoDetected: 'Please remove any names, dates, or identifying numbers from the patient information',
    
    // Categories
    selectCategory: 'Select category (optional)',
    diagnosis: 'Diagnosis',
    treatment: 'Treatment',
    consultation: 'Consultation',
    
    // Cardiology specific
    interventionalCardiology: 'Interventional Cardiology',
    electrophysiology: 'Electrophysiology',
    heartFailure: 'Heart Failure',
    preventiveCardiology: 'Preventive Cardiology',
    
    // OB/GYN specific
    obstetrics: 'Obstetrics',
    gynecology: 'Gynecology',
    reproductiveHealth: 'Reproductive Health',
    maternalFetalMedicine: 'Maternal-Fetal Medicine',
    
    // Complexity levels
    lowComplexity: 'Low complexity',
    mediumComplexity: 'Medium complexity',
    highComplexity: 'High complexity',
    
    // Specialty titles
    cardiologySpecialty: 'Cardiology Specialty',
    obgynSpecialty: 'Obstetrics & Gynecology Specialty',
    
    // Character count
    charactersMinimum: '{count}/50 characters minimum',
    
    // Existing case management
    activeCase: 'Active Case',
    caseDiscussion: 'Case Discussion',
    resetCase: 'Reset Case',
    viewCases: 'View Cases',
    noCases: 'No cases created yet',
    caseCreated: 'Case created successfully',
    caseSaved: 'Case saved',
    caseDeleted: 'Case deleted',
    
    // Case list and filters
    all: 'All',
    active: 'Active',
    archived: 'Archived',
    newestFirst: 'Newest First',
    oldestFirst: 'Oldest First',
    alphabetical: 'Alphabetical',
    noCasesFound: 'No cases found',
    noCasesYet: 'No cases yet',
    adjustFilters: 'Try adjusting your search or filters.',
    createFirstCase: 'Create your first case to get started with case discussions.',
    
    // Knowledge base additional
    curated: 'Curated',
    personal: 'Personal'
  },
  
  // Conversation management
  conversations: {
    title: 'Conversations',
    newChat: 'New Chat',
    searchPlaceholder: 'Search conversations...',
    allSpecialties: 'All Specialties',
    cardiology: 'Cardiology',
    obgyn: 'OB/GYN',
    recent: 'Recent',
    byName: 'Name',
    byMessages: 'Messages',
    noConversationsFound: 'No conversations found',
    deleteConversation: 'Delete conversation',
    editTitle: 'Edit title',
    save: 'Save',
    cancel: 'Cancel',
    message: 'message',
    messages: 'messages',
    conversation: 'conversation',
    conversations: 'conversations',
    totalMessages: 'total messages',
    tryAdjustingSearchOrFilters: 'Try adjusting your search or filters',
    deleteConfirmation: 'Are you sure you want to delete this conversation? This action cannot be undone.',
    delete: 'Delete'
  },
  
  // Profile management
  profile: {
    profileInfo: 'Profile Information',
    security: 'Security',
    preferences: 'Preferences',
    fullName: 'Full Name',
    medicalSpecialty: 'Medical Specialty',
    aboutMe: 'About Me / Professional Context',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    saving: 'Saving...',
    noNameSet: 'No name set',
    notSet: 'Not set',
    unknown: 'Unknown',
    memberSince: 'Member since',
    enterFullName: 'Enter your full name',
    aboutMeDesc: 'This information helps the AI provide more personalized assistance based on your background and experience.',
    aboutMePlaceholder: 'Tell us about your medical background, experience, areas of interest, or any other context that would help the AI assist you better...',
    selectSpecialty: 'Select a specialty',
    cardiology: 'Cardiology',
    obgyn: 'Obstetrics & Gynecology',
    internalMedicine: 'Internal Medicine',
    emergencyMedicine: 'Emergency Medicine',
    pediatrics: 'Pediatrics',
    surgery: 'Surgery',
    familyMedicine: 'Family Medicine',
    psychiatry: 'Psychiatry',
    radiology: 'Radiology',
    anesthesiology: 'Anesthesiology',
    other: 'Other',
    nameMinLength: 'Full name must be at least 2 characters long',
    updateSuccess: 'Profile updated successfully!',
    updateError: 'Failed to update profile. Please try again.',
    passwordUpdateSuccess: 'Password updated successfully!',
    comingSoon: 'Coming Soon',
    preferencesDesc: 'Preferences and settings will be available in a future update.'
  },
  
  // Landing page
  landing: {
    heroTitle: 'Specialized Medical Intelligence, Instantly.',
    heroSubtitle: 'Empowering Cardiologists and OB/GYNs with rapid access to curated medical literature, AI-driven case discussions, and personalized knowledge bases. Streamline your decision-making and stay ahead with MediMind Expert.',
    getStarted: 'Start Free Trial',
    learnMore: 'Learn More',
    features: {
      title: 'Key Features of MediMind Expert',
      subtitle: 'Empowering medical specialists with AI-driven insights and tailored knowledge.',
      aiCoPilot: {
        title: 'AI Medical Co-Pilot',
        description: 'Engage in contextual case discussions, get instant answers from medical literature, and leverage an AI assistant tailored to your specialty.'
      },
      knowledgeAccess: {
        title: 'Specialized Knowledge Access',
        description: 'Instantly access curated, up-to-date medical literature, guidelines, and treatment plans specific to Cardiology & OB/GYN.'
      },
      personalKB: {
        title: 'Personal Knowledge Base',
        description: 'Integrate your trusted resources. Upload documents to create a secure, searchable knowledge base for your AI Co-Pilot.'
      },
      specialtyTools: {
        title: 'Specialty-Specific Tools',
        description: 'Utilize built-in medical calculators and access common forms relevant to your specialty, streamlining daily tasks.'
      }
    },
    testimonials: 'Testimonials',
    pricing: 'Pricing',
    contact: 'Contact',
    footer: 'Footer'
  },
  
  // UI elements
  ui: {
    openMenu: 'Navigation menu opened',
    closeMenu: 'Navigation menu closed',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    selectAll: 'Select all',
    clearAll: 'Clear all',
    sortBy: 'Sort by',
    filterBy: 'Filter by',
    groupBy: 'Group by',
    viewDetails: 'View details',
    editItem: 'Edit item',
    deleteItem: 'Delete item',
    duplicateItem: 'Duplicate item',
    shareItem: 'Share item',
    exportData: 'Export data',
    importData: 'Import data',
    refresh: 'Refresh',
    settings: 'Settings',
    help: 'Help',
    about: 'About',
    escapeToClose: 'Press Escape to close'
  },
  
  // Notes functionality
  notes: {
    newNote: 'New Note',
    searchNotes: 'Search notes...',
    save: 'Save',
    delete: 'Delete',
    untitledNote: 'Untitled Note',
    addNote: 'Add Note'
  },
  
  // Patient management
  patients: {
    title: 'Cardiac Patient Table - 9th Floor',
    addPatient: 'Add Patient',
    status: {
      unstable: 'Unstable',
      stable: 'Stable',
      'discharge-ready': 'Ready for Discharge'
    },
    rooms: {
      title: 'Rooms',
      room: 'Room {{number}}',
      bed: 'Bed {{number}}',
      clickToAdd: 'Click to add patient'
    },
    basicInfo: {
      name: 'Name',
      diagnosis: 'Diagnosis',
      comorbidities: 'Comorbidities'
    }
  },
  
  // Onboarding process
  onboarding: {
    welcome: "Welcome to MediMind Expert",
    setupMessage: "Let's set up your personalized medical workspace",
    settingUpWorkspace: "Setting up your workspace...",
    steps: {
      selectSpecialty: "Select Specialty",
      aboutYou: "About You"
    },
    specialty: {
      title: "Choose Your Medical Specialty",
      subtitle: "Select your primary area of practice to get personalized AI assistance and resources",
      featuresTitle: "What you'll get:",
      note: "You can access resources from both specialties, but your workspace will be optimized for your primary choice",
      cardiology: {
        name: "Cardiology",
        description: "Heart and cardiovascular system care",
        features: {
          cardiac: "Cardiac assessment tools",
          ecg: "ECG interpretation guides", 
          heartFailure: "Heart failure protocols",
          interventional: "Interventional cardiology resources"
        }
      },
      obgyn: {
        name: "OB/GYN",
        description: "Obstetrics and Gynecology",
        features: {
          prenatal: "Prenatal care guidelines",
          gynecological: "Gynecological procedures",
          obstetric: "Obstetric calculators",
          reproductive: "Reproductive health resources"
        }
      }
    },
    aboutMe: {
      title: "Tell us about yourself",
      subtitle: "Help us personalize your AI assistant by sharing context about your practice and experience",
      label: "About your practice and experience",
      placeholder: "Share any details that would help the AI provide more relevant assistance. For example, your years of experience, practice setting, areas of special interest, or typical case types you encounter...",
      wordCount: "{{count}} words • Optional but recommended for better personalization",
      keepConcise: "Consider keeping it concise for best results",
      suggestionsTitle: "Consider including:",
      suggestions: {
        experience: "Years of experience in practice",
        workplace: "Current workplace setting (hospital, clinic, private practice)",
        interests: "Areas of special interest within your specialty",
        cases: "Types of cases you see most frequently",
        approaches: "Preferred treatment approaches or methodologies",
        education: "Continuing education focus areas"
      },
      exampleTitle: "Example:",
      exampleText: "\"I'm a cardiologist with 8 years of experience working in a large hospital system. I specialize in interventional cardiology and frequently handle complex PCI cases. I'm particularly interested in the latest evidence on TAVR procedures and managing patients with multiple comorbidities.\"",
      skipForNow: "Skip for now",
      completeSetup: "Complete Setup"
    }
  },
  
  // Loading states
  loading: {
    loading: "Loading...",
    verifying_specialty: "Verifying specialty access...",
    authenticating: "Authenticating...",
    processing: "Processing...",
    please_wait: "Please wait..."
  },
  
  // Access control
  access: {
    access_denied: "Access denied. This section is restricted to {specialties} specialists.",
    unauthorized: "You are not authorized to access this section.",
    invalid_specialty: "Invalid specialty access.",
    redirect_message: "Redirecting to your workspace..."
  },
  
  // Feedback messages
  feedback: {
    saveSuccess: 'Successfully saved',
    updateSuccess: 'Successfully updated',
    deleteSuccess: 'Successfully deleted',
    uploadSuccess: 'Successfully uploaded',
    calculationComplete: 'Calculation complete',
    operationComplete: 'Operation complete',
    changesSaved: 'Changes saved',
    dataSynced: 'Data synced',
    actionCompleted: 'Action completed'
  },
  
  // Theme controls
  theme: {
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode'
  },
  
  // Legacy navigation support
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    about: 'About'
  }
}; 