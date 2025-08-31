'use client';

import { useEffect } from 'react';
import { suppressHLSErrors } from '../lib/hlsErrorHandler';

const HLSGlobalHandler = () => {
  useEffect(() => {
    // Apply HLS error suppression globally
    const cleanup = suppressHLSErrors();
    
    return cleanup;
  }, []);

  // This component doesn't render anything
  return null;
};

export default HLSGlobalHandler;
