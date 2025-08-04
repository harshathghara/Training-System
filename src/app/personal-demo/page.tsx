'use client';

import { useRouter } from 'next/navigation';
import PersonalFrame from '@/components/frames/personal';

export default function PersonalDemoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/education-demo');
  };

  const handleSkip = () => {
    router.push('/education-demo');
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <PersonalFrame
      onContinue={handleContinue}
      onSkip={handleSkip}
      onClose={handleClose}
    />
  );
} 