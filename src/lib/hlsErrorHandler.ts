// HLS Error Handler Utility
// This file provides utilities to suppress and handle HLS.js errors gracefully

import { videoConfig, shouldSuppressError, shouldSuppressWarning } from './videoConfig';

export const suppressHLSErrors = () => {
  if (typeof window === 'undefined') return;

  // Store original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  // Override console.error to filter HLS-related errors
  console.error = (...args: any[]) => {
    const message = args.join(' ');
    if (shouldSuppressError(message)) {
      // Log in development if configured
      if (videoConfig.logHLSErrorsInDevelopment && process.env.NODE_ENV === 'development') {
        console.log('[HLS Error suppressed]:', ...args);
      }
      return; // Suppress these errors
    }
    originalConsoleError.apply(console, args);
  };

  // Override console.warn to filter HLS-related warnings
  console.warn = (...args: any[]) => {
    const message = args.join(' ');
    if (shouldSuppressWarning(message)) {
      // Log in development if configured
      if (videoConfig.logHLSErrorsInDevelopment && process.env.NODE_ENV === 'development') {
        console.log('[HLS Warning suppressed]:', ...args);
      }
      return; // Suppress these warnings
    }
    originalConsoleWarn.apply(console, args);
  };

  // Configure HLS.js if available
  if ((window as any).Hls) {
    const Hls = (window as any).Hls;
    if (Hls.isSupported()) {
      // Apply configuration from videoConfig
      Object.assign(Hls.DefaultConfig, videoConfig.hls);
      
      // Override HLS.js internal logging if suppression is enabled
      if (videoConfig.suppressHLSErrors) {
        Hls.DefaultConfig.logger = {
          log: () => {},
          warn: () => {},
          error: () => {}
        };
      }
    }
  }

  // Return cleanup function
  return () => {
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
  };
};

export const isHLSError = (error: any): boolean => {
  if (!error) return false;
  
  const errorMessage = error.toString() + (error.details ? error.details.toString() : '');
  return shouldSuppressError(errorMessage);
};

export const handleVideoError = (error: any, context?: string) => {
  if (isHLSError(error)) {
    // Log HLS errors only in development for debugging
    if (videoConfig.logHLSErrorsInDevelopment && process.env.NODE_ENV === 'development') {
      console.log(`[HLS Error suppressed] ${context || 'Video player'}:`, error);
    }
    return;
  }
  
  // Log non-HLS errors normally
  console.error(`[Video Error] ${context || 'Video player'}:`, error);
};
