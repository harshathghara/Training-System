'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import GoogleLogin from '../../../components/auth/GoogleLogin';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Check environment variables on component mount
  useEffect(() => {
    console.log('🔍 Environment Variables Check (Signup):');
    console.log('🌐 NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL);
    console.log('🔧 NODE_ENV:', process.env.NODE_ENV);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    // Debug: Log the API URL being used
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    const apiUrl = `${backendUrl}/api/auth/signup`;
    console.log('🔗 API URL:', apiUrl);
    console.log('📧 Email:', formData.email);
    console.log('👤 First Name:', formData.firstName);
    console.log('👤 Last Name:', formData.lastName);
    console.log('🔑 Password length:', formData.password.length);
    console.log('🌐 Backend URL from env:', process.env.NEXT_PUBLIC_BACKEND_URL);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          first_name: formData.firstName,
          last_name: formData.lastName
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setSuccess('Registration successful! You can now sign in.');
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
      });

      // Redirect to personal demo page after 2 seconds
      setTimeout(() => {
        window.location.href = '/personal-demo';
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
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
                Launch Your Tech Career with AI-Powered Skills Training
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Master AI, cloud computing, and cybersecurity on courses designed to get you hired in the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Learning for Free
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Explore Course
                </button>
              </div>
              <p className="text-blue-200 text-lg">
                Join 100,000+ learners mastering AI-era skills
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-lg font-semibold">Collaborative Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8" style={{ fontFamily: 'Poppins', fontWeight: 500, fontStyle: 'normal', fontSize: '14px', lineHeight: '1', letterSpacing: '0' }}>

          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <Link
              href="/signin"
              className="flex-1 py-3 px-4 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign In
            </Link>
            <button className="flex-1 py-3 px-4 rounded-md text-sm font-medium text-white transition-colors"
              style={{
                backgroundColor: '#CB2128'
              }}
            >
              Register
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Your name (First name)
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Your name (Last name)
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-sm">+91</span>
                </div>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password (min. 6 characters)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                minLength={6}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Password confirmation
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#CB2128'
              }}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Google Login */}
          <GoogleLogin 
            onError={(error) => setError(error)}
            buttonText="Continue with Google"
          />

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="text-red-600 hover:text-red-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 