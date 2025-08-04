'use client';

import { useRouter } from 'next/navigation';
import InterestsFrame from '@/components/frames/interests';

export default function InterestsDemoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/');
  };

  const handleSkip = () => {
    router.push('/');
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <InterestsFrame
      onContinue={handleContinue}
      onSkip={handleSkip}
      onClose={handleClose}
    />
  );
} 