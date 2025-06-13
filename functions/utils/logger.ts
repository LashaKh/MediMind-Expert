import { HandlerEvent } from '@netlify/functions';
import { isDevelopment } from './env';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
  requestId?: string;
  userId?: string;
  data?: any;
}

class Logger {
  private logLevel: LogLevel;
  private requestId: string | null = null;

  constructor() {
    this.logLevel = isDevelopment() ? LogLevel.DEBUG : LogLevel.INFO;
  }

  setRequestId(requestId: string): void {
    this.requestId = requestId;
  }

  private formatLog(level: string, message: string, data?: any): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(this.requestId && { requestId: this.requestId }),
      ...(data && { data })
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.logLevel;
  }

  private output(logEntry: LogEntry): void {
    const logString = JSON.stringify(logEntry, null, isDevelopment() ? 2 : 0);
    
    switch (logEntry.level) {
      case 'ERROR':
        console.error(logString);
        break;
      case 'WARN':
        console.warn(logString);
        break;
      case 'INFO':
        console.info(logString);
        break;
      case 'DEBUG':
      default:
        console.log(logString);
        break;
    }
  }

  debug(message: string, data?: any): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      const logEntry = this.formatLog('DEBUG', message, data);
      this.output(logEntry);
    }
  }

  info(message: string, data?: any): void {
    if (this.shouldLog(LogLevel.INFO)) {
      const logEntry = this.formatLog('INFO', message, data);
      this.output(logEntry);
    }
  }

  warn(message: string, data?: any): void {
    if (this.shouldLog(LogLevel.WARN)) {
      const logEntry = this.formatLog('WARN', message, data);
      this.output(logEntry);
    }
  }

  error(message: string, error?: Error | any): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      const data = error instanceof Error 
        ? { 
            name: error.name, 
            message: error.message, 
            stack: error.stack 
          }
        : error;
      
      const logEntry = this.formatLog('ERROR', message, data);
      this.output(logEntry);
    }
  }
}

// Create singleton logger instance
export const logger = new Logger();

// Request ID generator
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Request logging middleware
export function withRequestLogging<T>(
  handler: (event: HandlerEvent) => Promise<T>
) {
  return async (event: HandlerEvent): Promise<T> => {
    const requestId = generateRequestId();
    logger.setRequestId(requestId);

    const startTime = Date.now();
    
    logger.info('Request started', {
      method: event.httpMethod,
      path: event.path,
      userAgent: event.headers['user-agent'],
      origin: event.headers.origin,
      queryParams: event.queryStringParameters
    });

    try {
      const result = await handler(event);
      
      const duration = Date.now() - startTime;
      logger.info('Request completed successfully', {
        duration: `${duration}ms`
      });

      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      logger.error('Request failed', {
        duration: `${duration}ms`,
        error: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : error
      });
      
      throw error;
    }
  };
}

// Performance monitoring
export function logPerformance(operation: string, startTime: number): void {
  const duration = Date.now() - startTime;
  logger.debug(`Performance: ${operation}`, { duration: `${duration}ms` });
}

// Database query logging
export function logDatabaseQuery(query: string, params?: any[], duration?: number): void {
  logger.debug('Database query executed', {
    query: query.replace(/\s+/g, ' ').trim(),
    params,
    ...(duration && { duration: `${duration}ms` })
  });
} 