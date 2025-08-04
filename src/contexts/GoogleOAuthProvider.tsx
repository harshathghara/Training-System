'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode, useState, useEffect } from 'react';

interface GoogleOAuthProviderProps {
  children: ReactNode;
}

export default function GoogleOAuthProviderWrapper({ children }: GoogleOAuthProviderProps) {
  const [clientId, setClientId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGoogleClientId = () => {
      try {
        // Try to get from environment variable first
        const envClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        
        if (envClientId) {
          setClientId(envClientId);
          console.log('🔐 Google OAuth Provider Setup:');
          console.log('📋 Client ID:', envClientId ? `${envClientId.substring(0, 20)}...` : 'NOT SET');
          console.log('🌐 Environment:', process.env.NODE_ENV);
          console.log('📡 Source: Environment Variable');
        } else {
          // Fallback to backend fetch if environment variable is not available
          const fetchGoogleClientId = async () => {
            try {
              const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
              const response = await fetch(`${backendUrl}/api/auth/google-client-id`);
              
              if (response.ok) {
                const data = await response.json();
                setClientId(data.clientId);
                console.log('🔐 Google OAuth Provider Setup:');
                console.log('📋 Client ID:', data.clientId ? `${data.clientId.substring(0, 20)}...` : 'NOT SET');
                console.log('🌐 Environment:', process.env.NODE_ENV);
                console.log('📡 Source: Backend API');
              } else {
                console.error('❌ Failed to fetch Google Client ID from backend');
              }
            } catch (error) {
              console.error('❌ Error fetching Google Client ID:', error);
            } finally {
              setLoading(false);
            }
          };

          fetchGoogleClientId();
          return; // Don't set loading to false here, let the fetch handle it
        }
      } catch (error) {
        console.error('❌ Error getting Google Client ID:', error);
      } finally {
        setLoading(false);
      }
    };

    getGoogleClientId();
  }, []);

  if (loading) {
    return <div>Loading Google OAuth...</div>;
  }

  if (!clientId) {
    console.error('❌ Google Client ID is not available!');
    return <div>Google OAuth not configured</div>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
} 