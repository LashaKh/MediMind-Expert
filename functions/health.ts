import { HandlerEvent, HandlerResponse } from '@netlify/functions';
import { successResponse, errorResponse } from './utils/response';
import { withCors } from './utils/cors';
import { withErrorHandling } from './utils/errors';
import { withRequestLogging, logger } from './utils/logger';
import { validateEnvironmentVariables, loadEnvironmentVariables } from './utils/env';
import { STATUS_CODES } from './utils/constants';

interface HealthCheckResponse {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
  uptime: number;
  checks: {
    environment: {
      status: string;
      details?: string[];
    };
    memory: {
      status: string;
      used: string;
      total: string;
    };
    api: {
      status: string;
      responseTime: number;
    };
  };
}

const handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const startTime = Date.now();
  
  logger.info('Health check requested');

  try {
    // Environment validation
    const envValidation = validateEnvironmentVariables();
    const config = loadEnvironmentVariables();

    // Memory usage
    const memoryUsage = process.memoryUsage();
    const memoryUsedMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
    const memoryTotalMB = Math.round(memoryUsage.heapTotal / 1024 / 1024);

    // Calculate API response time
    const responseTime = Date.now() - startTime;

    // Build health check response
    const healthData: HealthCheckResponse = {
      status: envValidation.isValid ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: config.nodeEnv,
      uptime: process.uptime(),
      checks: {
        environment: {
          status: envValidation.isValid ? 'pass' : 'fail',
          ...(envValidation.missingVars.length > 0 && {
            details: [`Missing environment variables: ${envValidation.missingVars.join(', ')}`]
          })
        },
        memory: {
          status: memoryUsedMB < 100 ? 'pass' : 'warn',
          used: `${memoryUsedMB}MB`,
          total: `${memoryTotalMB}MB`
        },
        api: {
          status: responseTime < 1000 ? 'pass' : 'warn',
          responseTime
        }
      }
    };

    // Determine overall status code
    const statusCode = healthData.status === 'healthy' 
      ? STATUS_CODES.OK 
      : STATUS_CODES.INTERNAL_SERVER_ERROR;

    logger.info('Health check completed', {
      status: healthData.status,
      responseTime: `${responseTime}ms`
    });

    return successResponse(
      healthData,
      'Health check completed',
      statusCode
    );

  } catch (error) {
    logger.error('Health check failed', error);
    
    return errorResponse(
      'Health check failed',
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      'Unable to perform health check'
    );
  }
};

// Apply middleware and export
export default withCors(
  withErrorHandling(
    withRequestLogging(handler)
  )
); 