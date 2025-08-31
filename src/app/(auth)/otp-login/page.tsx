'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Star } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

export default function OTPLogin() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { loginWithToken } = useAuth();

  // Check environment variables on component mount
  useEffect(() => {
    console.log('🔍 Environment Variables Check:');
    console.log('🌐 NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL);
    console.log('🔧 NODE_ENV:', process.env.NODE_ENV);
  }, []);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const apiUrl = `${backendUrl}/api/auth/send-otp`;
      
      console.log('🔗 Sending OTP to:', apiUrl);
      console.log('📧 Email:', email);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }

      setOtpSent(true);
      setCountdown(60); // 60 seconds countdown
      setError(''); // Clear any previous errors
      
      console.log('✅ OTP sent successfully');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const apiUrl = `${backendUrl}/api/auth/verify-otp`;
      
      console.log('🔗 Verifying OTP at:', apiUrl);
      console.log('📧 Email:', email);
      console.log('🔢 OTP:', otp);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'OTP verification failed');
      }

      // Use the auth context to login with token
      loginWithToken(data.token, data.user);
      
      console.log('✅ OTP verification successful');
      
      // Redirect to personal demo page
      window.location.href = '/personal-demo';
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (countdown > 0) return;
    
    setLoading(true);
    setError('');
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const apiUrl = `${backendUrl}/api/auth/send-otp`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend OTP');
      }

      setCountdown(60); // Reset countdown
      setError(''); // Clear any previous errors
      
      console.log('✅ OTP resent successfully');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      {/* Background Content (Landing Page) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Secure Login with OTP
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Enter your email to receive a secure one-time password for instant login.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center text-white">
                    <Lock className="w-5 h-5 mr-2" />
                    <span className="text-sm">Secure & Fast</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="text-sm">Email Delivery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🔐</div>
                    <p className="text-lg font-semibold">OTP Authentication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Login Modal */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8" style={{ fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'normal', fontSize: '14px', lineHeight: '1', letterSpacing: '0' }}>

          {/* Back Button */}
          <Link
            href="/signin"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Login with OTP</h2>
            <p className="text-gray-600">Enter your email to receive a secure code</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Success Message */}
          {otpSent && !error && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ OTP sent successfully! Check your email.
            </div>
          )}

          {/* Email Form */}
          {!otpSent && (
            <form onSubmit={handleSendOTP} className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#CB2128' }}
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          )}

          {/* OTP Form */}
          {otpSent && (
            <form onSubmit={handleVerifyOTP} className="space-y-4 mb-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP Code
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl font-mono tracking-widest"
                  maxLength={6}
                  disabled={loading}
                  autoFocus
                />
                <p className="text-xs text-gray-500 mt-1 text-center">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#CB2128' }}
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify & Login'}
              </button>

              {/* Resend OTP */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={countdown > 0 || loading}
                  className="text-blue-600 hover:text-blue-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {countdown > 0 
                    ? `Resend OTP in ${countdown}s` 
                    : 'Resend OTP'
                  }
                </button>
              </div>
            </form>
          )}

          {/* Alternative Options */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">Or try other login methods</p>
            <div className="space-y-2">
              <Link
                href="/signin"
                className="block w-full text-gray-600 py-2 rounded-lg font-medium transition-colors border border-gray-300 hover:bg-gray-50"
              >
                ← Back to Email/Password Login
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8">
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
    </div>
  );
}
