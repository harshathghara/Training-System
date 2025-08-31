// Video Configuration
// Centralized configuration for video player settings and error handling

export const videoConfig = {
  // HLS Error Handling
  suppressHLSErrors: true, // Set to false to see HLS errors in console
  logHLSErrorsInDevelopment: true, // Log HLS errors only in development mode
  
  // Mux Player Settings
  mux: {
    defaultPlaybackId: "NOCXyDItnNu4olMa14Ub9ds2jlD7aJWMASw00lP5Bfoo",
    defaultPoster: "https://image.mux.com/NOCXyDItnNu4olMa14Ub9ds2jlD7aJWMASw00lP5Bfoo/thumbnail.webp",
    streamType: "on-demand" as const,
    autoPlay: false,
    preload: "metadata" as const,
    crossOrigin: "anonymous" as const,
  },
  
  // HLS.js Configuration
  hls: {
    debug: false,
    enableWorker: true,
    lowLatencyMode: false,
    maxBufferLength: 30,
    maxMaxBufferLength: 600,
    maxBufferSize: 60 * 1000 * 1000, // 60MB
    maxBufferHole: 0.5,
    highBufferWatchdogPeriod: 2,
    nudgeOffset: 0.1,
    nudgeMaxRetry: 5,
    maxFragLookUpTolerance: 0.25,
    liveSyncDurationCount: 3,
    liveMaxLatencyDurationCount: 10,
  },
  
  // Error Messages to Suppress
  suppressedErrorPatterns: [
    'HLS',
    'getErrorFromHlsErrorData',
    'GapController',
    'stall',
    'hls.js',
    'Hls',
    'fragLoadError',
    'keyLoadError',
    'levelLoadError',
    'manifestLoadError',
    'mediaError',
  ],
  
  // Warning Messages to Suppress
  suppressedWarningPatterns: [
    'HLS',
    'GapController',
    'stall',
    'hls.js',
    'bufferStalledError',
  ],
};

export const shouldSuppressError = (message: string): boolean => {
  return videoConfig.suppressHLSErrors && 
    videoConfig.suppressedErrorPatterns.some(pattern => 
      message.includes(pattern)
    );
};

export const shouldSuppressWarning = (message: string): boolean => {
  return videoConfig.suppressHLSErrors && 
    videoConfig.suppressedWarningPatterns.some(pattern => 
      message.includes(pattern)
    );
};
