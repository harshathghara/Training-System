'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import GoogleLogin from './GoogleLogin';

interface SigninModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SigninModal({ isOpen, onClose }: SigninModalProps) {
  const [activeTab, setActiveTab] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const { login, loginWithToken } = useAuth();

  // Check environment variables on component mount
  useEffect(() => {
    console.log('🔍 Environment Variables Check:');
    console.log('🌐 NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL);
    console.log('🔧 NODE_ENV:', process.env.NODE_ENV);
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);
    setError('');

    // Debug: Log the API URL being used
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    const apiUrl = `${backendUrl}/api/auth/signin`;
    console.log('🔗 API URL:', apiUrl);
    console.log('📧 Email:', email);
    console.log('🔑 Password length:', password.length);
    console.log('🌐 Backend URL from env:', process.env.NEXT_PUBLIC_BACKEND_URL);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Sign in failed');
      }

      // Use the auth context to login with token
      console.log('🔐 Login successful, calling loginWithToken with:', data);
      loginWithToken(data.token, data.user);

      // Close the modal after successful login
      console.log('✅ Login successful, closing modal');
      onClose();

      // Show success message briefly before any redirects
      setTimeout(() => {
        // Check if user is admin and redirect accordingly
        if (data.isAdmin) {
          console.log('👑 Admin user detected, redirecting to admin portal');
          window.location.href = '/admin';
        } else {
          // Redirect to personal demo page for regular users
          console.log('👤 Regular user detected, redirecting to personal demo');
          window.location.href = '/personal-demo';
        }
      }, 500);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setLoading(true);
    setError('');
    
    try {
      // For now, we'll simulate Apple Sign In
      // In a real implementation, you would integrate with Apple Sign In
      alert('Apple Sign In integration would be implemented here. For now, please use email/password login.');
    } catch (err) {
      setError('Apple sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpLogin = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }

    if (!otpSent) {
      // Send OTP
      setLoading(true);
      setError('');
      
      try {
        // Simulate sending OTP
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOtpSent(true);
        setShowOtpForm(true);
        alert(`OTP sent to ${email}. For demo purposes, use any 6-digit code.`);
      } catch (err) {
        setError('Failed to send OTP. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      // Verify OTP
      if (!otp || otp.length !== 6) {
        setError('Please enter a valid 6-digit OTP');
        return;
      }

      setLoading(true);
      setError('');
      
      try {
        // Simulate OTP verification
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, accept any 6-digit OTP
        const mockUser = {
          id: '999',
          email: email,
          first_name: 'Demo',
          last_name: 'User',
          is_admin: false
        };
        
        const mockToken = 'demo-otp-token-' + Date.now();
        
        // Use the auth context to login with token
        loginWithToken(mockToken, mockUser);
        
        // Close the modal after successful OTP login
        console.log('✅ OTP login successful, closing modal');
        onClose();

        // Show success message briefly before redirect
        setTimeout(() => {
          // Redirect to personal demo page for demo users
          console.log('👤 Demo user detected, redirecting to personal demo');
          window.location.href = '/personal-demo';
        }, 500);
        
      } catch (err) {
        setError('OTP verification failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const resetOtpForm = () => {
    setShowOtpForm(false);
    setOtpSent(false);
    setOtp('');
    setError('');
  };

  if (!isOpen) return null;

  return (
         <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-[250] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto" 
           style={{ fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'normal', fontSize: '14px', lineHeight: '1', letterSpacing: '0' }}
           onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button>

                 {/* Tabs */}
         <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
           <button
             onClick={() => setActiveTab('signin')}
             className="flex-1 py-3 px-4 rounded-md text-sm font-medium text-white transition-colors"
             style={{
               backgroundColor: activeTab === 'signin' ? '#CB2128' : 'transparent'
             }}
           >
             Sign In
           </button>
                     <button
             onClick={() => {
               // Close current modal and open signup modal
               onClose();
               // Trigger signup modal by dispatching a custom event
               setTimeout(() => {
                 const signupButton = document.querySelector('[data-signup]') as HTMLElement;
                 if (signupButton) {
                   signupButton.click();
                 }
               }, 100);
             }}
             className="flex-1 py-3 px-4 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
             style={{
               backgroundColor: activeTab === 'register' ? '#CB2128' : 'transparent',
               color: activeTab === 'register' ? 'white' : '#6B7280'
             }}
           >
             Register
           </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Tip Message */}
        <div className="flex items-center justify-center mb-6 text-sm" style={{ color: '#06B6D4' }}>
          <div className="w-4 h-4 rounded-full flex items-center justify-center mr-2 border-1 border-dashed" style={{ borderColor: '#06B6D4' }}>
            <span className="text-xs" style={{ color: '#06B6D4' }}>?</span>
          </div>
          Tip: Use Google or OTP login for faster access
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSignIn} className="space-y-4 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            />
          </div>
          
          {!showOtpForm && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
          )}

          {showOtpForm && (
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                OTP Code
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                  if (error) setError('');
                }}
                placeholder="Enter 6-digit OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={6}
                disabled={loading}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter any 6-digit code for demo purposes
              </p>
            </div>
          )}

          {!showOtpForm && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled={loading}
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <button 
                onClick={() => {
                  // For now, just show an alert since we don't have a forgot password modal
                  alert('Forgot password functionality would be implemented here. Please contact support.');
                }}
                className="text-sm text-blue-600 hover:text-blue-700 bg-transparent border-none cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
          )}
        </form>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Alternative Login Options */}
        <div className="space-y-3 mb-6">
          <GoogleLogin 
            onError={(error) => setError(error)}
            onSuccess={() => {
              // Close the modal when Google login is successful
              onClose();
            }}
            buttonText="Continue with Google"
          />
          <button 
            type="button"
            onClick={handleAppleSignIn}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <img 
              src="/assets/icons/apple_icon.png" 
              alt="Apple" 
              className="w-4 h-4 mr-4"
            />
            Continue with Apple
          </button>
          <button 
            onClick={() => {
              // Show OTP form instead of navigating
              setShowOtpForm(true);
              setOtpSent(false);
              setOtp('');
              setError('');
            }}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img 
              src="/assets/icons/mobile_icon.png" 
              alt="OTP" 
              className="w-4 h-4 mr-2"
            />
            Login with OTP
          </button>
        </div>

        {/* Back to Email/Password Button (when OTP form is shown) */}
        {showOtpForm && (
          <button
            type="button"
            onClick={resetOtpForm}
            className="w-full text-gray-600 py-2 rounded-lg font-medium transition-colors mb-4 border border-gray-300 hover:bg-gray-50"
          >
            ← Back to Email/Password
          </button>
        )}

        {/* Main Sign In Button */}
        {!showOtpForm && (
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-full text-white py-3 rounded-lg font-semibold transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#CB2128' }}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'SIGN IN'}
          </button>
        )}

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">Trusted by 50,000+ learners worldwide</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              <img 
                src="assets\icons\m1.png" 
                alt="Learner 1" 
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="assets\icons\m2.png" 
                alt="Learner 2" 
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="assets\icons\m3.png" 
                alt="Learner 3" 
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="assets\icons\m4.png" 
                alt="Learner 4" 
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="flex items-center ml-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
