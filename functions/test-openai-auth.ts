import { withMedicalSecurity } from './utils/middleware';
import { parseRequest } from './utils/request';
import { successResponse, errorResponse } from './utils/response';
import { logger } from './utils/logger';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// Simple test handler to check OpenAI Assistant authentication
async function handleTestRequest(event: HandlerEvent, context: any) {
  try {
    logger.info('🧪 Test OpenAI Auth Request', {
      method: event.httpMethod,
      path: event.path,
      hasUser: !!context.user,
      userInfo: context.user ? {
        id: context.user.id,
        email: context.user.email,
        specialty: context.user.specialty
      } : null
    });

    const { body } = parseRequest(event);

    return successResponse({
      message: "Authentication test successful",
      user: context.user,
      requestBody: body,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error('Test auth request failed', {
      error: (error as Error).message,
      stack: (error as Error).stack
    });

    return errorResponse('Test auth request failed', 500);
  }
}

// Export the handler with the same security middleware as openai-assistant
export const handler: Handler = withMedicalSecurity(async (event: HandlerEvent, context: HandlerContext) => {
  return await handleTestRequest(event, context);
});