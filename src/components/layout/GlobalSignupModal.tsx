'use client';

import { useState, useEffect } from 'react';
import SignupModal from '../auth/SignupModal';
import SigninModal from '../auth/SigninModal';

export default function GlobalAuthModal() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  useEffect(() => {
    const handleAuthClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.hasAttribute('data-signup')) {
        setIsSignupModalOpen(true);
      } else if (target.hasAttribute('data-signin')) {
        setIsSigninModalOpen(true);
      }
    };

    // Add event listener to document for global auth button clicks
    document.addEventListener('click', handleAuthClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleAuthClick);
    };
  }, []);

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleCloseSigninModal = () => {
    setIsSigninModalOpen(false);
  };

  return (
    <>
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleCloseSignupModal}
      />
      <SigninModal
        isOpen={isSigninModalOpen}
        onClose={handleCloseSigninModal}
      />
    </>
  );
}
