import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { ENV_VARS } from './constants';
import { successResponse } from './response';

export interface CorsOptions {
  allowedOrigins: string[];
  allowedMethods: string[];
  allowedHeaders: string[];
  credentials?: boolean;
  maxAge?: number;
}

export const DEFAULT_CORS_OPTIONS: CorsOptions = {
  allowedOrigins: ENV_VARS.ALLOWED_ORIGINS,
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

export function getCorsHeaders(
  origin: string | undefined,
  options: CorsOptions = DEFAULT_CORS_OPTIONS
): Record<string, string> {
  const headers: Record<string, string> = {};

  // Check if origin is allowed
  const allowedOrigin = origin && options.allowedOrigins.includes(origin) 
    ? origin 
    : options.allowedOrigins[0] || '*';

  headers['Access-Control-Allow-Origin'] = allowedOrigin;
  headers['Access-Control-Allow-Methods'] = options.allowedMethods.join(', ');
  headers['Access-Control-Allow-Headers'] = options.allowedHeaders.join(', ');
  
  if (options.credentials) {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }
  
  if (options.maxAge) {
    headers['Access-Control-Max-Age'] = options.maxAge.toString();
  }

  return headers;
}

export function handleCorsPreflightRequest(
  event: HandlerEvent,
  options: CorsOptions = DEFAULT_CORS_OPTIONS
): HandlerResponse {
  const origin = event.headers.origin || event.headers.Origin;
  const corsHeaders = getCorsHeaders(origin, options);

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: ''
  };
}

export function withCors<T>(
  handler: (event: HandlerEvent) => Promise<HandlerResponse>,
  options: CorsOptions = DEFAULT_CORS_OPTIONS
) {
  return async (event: HandlerEvent): Promise<HandlerResponse> => {
    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
      return handleCorsPreflightRequest(event, options);
    }

    try {
      // Execute the main handler
      const response = await handler(event);
      
      // Add CORS headers to the response
      const origin = event.headers.origin || event.headers.Origin;
      const corsHeaders = getCorsHeaders(origin, options);
      
      return {
        ...response,
        headers: {
          ...response.headers,
          ...corsHeaders
        }
      };
    } catch (error) {
      // Handle errors with CORS headers
      const origin = event.headers.origin || event.headers.Origin;
      const corsHeaders = getCorsHeaders(origin, options);
      
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: 'Internal server error',
          statusCode: 500
        })
      };
    }
  };
} 