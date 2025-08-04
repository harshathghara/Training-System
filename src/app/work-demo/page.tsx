'use client';

import { useRouter } from 'next/navigation';
import WorkFrame from '@/components/frames/work';

export default function WorkDemoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/interests-demo');
  };

  const handleSkip = () => {
    router.push('/interests-demo');
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <WorkFrame
      onContinue={handleContinue}
      onSkip={handleSkip}
      onClose={handleClose}
    />
  );
} 