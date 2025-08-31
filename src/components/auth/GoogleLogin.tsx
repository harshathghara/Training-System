'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface GoogleLoginProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  buttonText?: string;
  className?: string;
}

export default function GoogleLogin({ 
  onSuccess, 
  onError, 
  buttonText = "Continue with Google",
  className = ""
}: GoogleLoginProps) {
  const [loading, setLoading] = useState(false);
  const { loginWithToken } = useAuth();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      setLoading(true);
      try {
        console.log('🔐 Google OAuth Success - Getting user info...');
        
        // Step 1: Get user info from Google using the access token
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });

        if (!userInfoResponse.ok) {
          throw new Error('Failed to get user info from Google');
        }

        const userInfo = await userInfoResponse.json();
        console.log('👤 Google User Info:', userInfo);

        // Step 2: Send user info to your backend for authentication
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
        console.log('🌐 Sending to backend:', `${backendUrl}/api/auth/google`);
        
        const authResponse = await fetch(`${backendUrl}/api/auth/google`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: userInfo.email,
              first_name: userInfo.given_name,
              last_name: userInfo.family_name,
              picture: userInfo.picture,
            },
          }),
        });

        if (!authResponse.ok) {
          const errorData = await authResponse.json();
          throw new Error(errorData.error || 'Google authentication failed');
        }

        const authData = await authResponse.json();
        console.log('✅ Backend authentication successful:', authData);

        // Step 3: Login using auth context with JWT token
        loginWithToken(authData.token, authData.user);

        // Step 4: Call success callback
        if (onSuccess) {
          onSuccess();
        }

        // Step 5: Close modal and redirect after a brief delay
        // This allows the modal to close smoothly before navigation
        setTimeout(() => {
          // Check if user is admin and redirect accordingly
          if (authData.isAdmin) {
            console.log('👑 Admin user detected, redirecting to admin portal...');
            window.location.href = '/admin';
          } else {
            // Redirect to personal demo page for regular users
            console.log('🚀 Redirecting to personal demo page...');
            window.location.href = '/personal-demo';
          }
        }, 500);

      } catch (error) {
        console.error('❌ Google login error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Google authentication failed';
        
        if (onError) {
          onError(errorMessage);
        } else {
          alert(errorMessage);
        }
      } finally {
        setLoading(false);
      }
    },
    onError: (error) => {
      console.error('❌ Google OAuth error:', error);
      const errorMessage = 'Google authentication failed. Please try again.';
      
      if (onError) {
        onError(errorMessage);
      } else {
        alert(errorMessage);
      }
    },
  });

  return (
    <button
      onClick={() => handleGoogleLogin()}
      disabled={loading}
      className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <img 
        src="/assets/icons/google_icon.png" 
        alt="Google" 
        className="w-4 h-4 mr-3"
      />
      {loading ? 'Signing in...' : buttonText}
    </button>
  );
} 