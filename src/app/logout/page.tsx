'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call the backend logout endpoint
        const response = await fetch('/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('✅ Backend logout successful');
        } else {
          console.warn('⚠️ Backend logout failed, but continuing with client-side logout');
        }
      } catch (error) {
        console.warn('⚠️ Backend logout error:', error);
      }

      // Always perform client-side logout
      logout();

      // Check if this was a redirect from backend with logout parameter
      const logoutParam = searchParams.get('logout');
      
      if (logoutParam === 'true') {
        // This was a redirect from backend, go to home page
        router.push('/');
      } else {
        // This was a direct navigation to /logout, redirect to signin
        router.push('/signin');
      }
    };

    handleLogout();
  }, [logout, router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Logging out...
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please wait while we sign you out.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    </div>
  );
}

