'use client';

import { useRouter } from 'next/navigation';
import EducationFrame from '@/components/frames/education';

export default function EducationDemoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/work-demo');
  };

  const handleSkip = () => {
    router.push('/work-demo');
  };

  const handleClose = () => {
    router.push('/');
  };

  return (
    <EducationFrame
      onContinue={handleContinue}
      onSkip={handleSkip}
      onClose={handleClose}
    />
  );
} 