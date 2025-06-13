// HTTP Status Codes
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  MISSING_REQUIRED_FIELDS: 'Missing required fields',
  INVALID_REQUEST_FORMAT: 'Invalid request format',
  UNAUTHORIZED_ACCESS: 'Unauthorized access',
  INVALID_TOKEN: 'Invalid authentication token',
  TOKEN_EXPIRED: 'Authentication token has expired',
  INTERNAL_ERROR: 'Internal server error',
  METHOD_NOT_ALLOWED: 'Method not allowed',
  INVALID_CREDENTIALS: 'Invalid credentials'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  OPERATION_SUCCESSFUL: 'Operation completed successfully',
  USER_AUTHENTICATED: 'User authenticated successfully',
  DATA_RETRIEVED: 'Data retrieved successfully',
  DATA_CREATED: 'Data created successfully',
  DATA_UPDATED: 'Data updated successfully',
  DATA_DELETED: 'Data deleted successfully'
} as const;

// Environment Variables
export const ENV_VARS = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SUPABASE_URL: process.env.VITE_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY || '',
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  JWT_SECRET: process.env.JWT_SECRET || 'fallback-secret-key',
  ALLOWED_ORIGINS: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:3000').split(','),
  // Flowise API Configuration - specialty-specific endpoints
  FLOWISE_CARDIOLOGY_URL: process.env.FLOWISE_CARDIOLOGY_URL || 'https://flowise-2-0.onrender.com/api/v1/prediction/f8433523-af63-4c53-8db9-63ed3b923f2e',
  FLOWISE_OBGYN_URL: process.env.FLOWISE_OBGYN_URL || 'https://flowise-2-0.onrender.com/api/v1/prediction/57a1285c-971d-48d4-9519-feb7494afe8b'
} as const;

// API Endpoints
export const API_ROUTES = {
  HEALTH: '/.netlify/functions/health',
  AUTH: '/.netlify/functions/auth',
  USERS: '/.netlify/functions/users',
  CHAT: '/.netlify/functions/chat',
  FLOWISE_PROXY: '/.netlify/functions/flowise-proxy'
} as const; 