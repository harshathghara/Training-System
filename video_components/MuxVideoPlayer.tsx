'use client';

import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

const MuxVideoPlayer = () => {
  const handleError = (error: any) => {
    // Suppress HLS.js error logging to console
    if (error && error.details && error.details.includes('HLS')) {
      return;
    }
    console.error('Mux Player Error:', error);
  };

  return (
    <div className="rounded-lg h-96 w-full overflow-hidden relative">
      <MuxPlayer
        playbackId="NOCXyDItnNu4olMa14Ub9ds2jlD7aJWMASw00lP5Bfoo"
        poster="https://image.mux.com/NOCXyDItnNu4olMa14Ub9ds2jlD7aJWMASw00lP5Bfoo/thumbnail.webp"
        streamType="on-demand"
        className="w-full h-full object-cover rounded-lg"
        autoPlay={false}
        onError={handleError}
      />
    </div>
  );
};

export default MuxVideoPlayer;
