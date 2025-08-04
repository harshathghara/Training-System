'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface WorkFrameProps {
  onContinue?: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

export default function WorkFrame({ onContinue, onSkip, onClose }: WorkFrameProps) {
  const [formData, setFormData] = useState({
    employmentStatus: 'yes',
    currentRole: '',
    totalExperience: '',
    companyName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    // Handle form submission
    if (onContinue) {
      onContinue();
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="flex flex-col">
          <div className="flex items-center ml-12">
            <div className="w-8 h-8 bg-[#FA6D15] rounded-lg flex items-center justify-center mr-3 overflow-hidden" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
              <Image
                src="/assets/icons/Deepmind_icon.png"
                alt="DeepMind Icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-gray-900">DeepMind</span>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-1 ml-24">
            Powered by Areta360
          </div>
        </div>
        <button 
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 text-xl font-bold mr-30"
        >
          ×
        </button>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            {/* Step 1: Personal - Completed */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Personal</span>
              <div className="ml-4 w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            
            {/* Step 2: Education - Completed */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Education</span>
              <div className="ml-4 w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            {/* Step 3: Work - Active */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Work</span>
              <div className="ml-4 w-16 h-1 bg-gray-200 rounded-full"></div>
            </div>
            
            {/* Step 4: Interests - Pending */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Interests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-2">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Let's Build Your Learning Profile
            </h1>
            <p className="text-gray-600">
              Tell us more about yourself so we can tailor your learning journey.
            </p>
          </div>

          {/* Professional Details Form Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center mr-3" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #4D0001 0%, #BB181B 100%)',
                border: '1px solid #E5E7EB',
                opacity: 1
              }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-900" style={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '28px',
                  letterSpacing: '0%'
                }}>Professional Details</h2>
                <p className="text-gray-600" style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  opacity: 1
                }}>Optional - This helps us match you with the right mentors and job roles</p>
              </div>
            </div>

            {/* Employment Status */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Are you currently employed?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value="yes"
                    checked={formData.employmentStatus === 'yes'}
                    onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value="no"
                    checked={formData.employmentStatus === 'no'}
                    onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Developer"
                    value={formData.currentRole}
                    onChange={(e) => handleInputChange('currentRole', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Years of Experience
                  </label>
                  <select
                    value={formData.totalExperience}
                    onChange={(e) => handleInputChange('totalExperience', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Current company"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-8 justify-center items-center">
            <Button
              onClick={handleContinue}
              className="text-white font-medium"
              style={{
                width: '600px',
                height: '48px',
                borderRadius: '12px',
                opacity: 1,
                background: 'var(--button-Color, #CB2128)'
              }}
            >
              Continue
            </Button>
            <Button
              onClick={handleSkip}
              variant="outline"
              className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
              style={{
                width: '600px',
                height: '48px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              Skip for Now
            </Button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            You can edit this information later from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
