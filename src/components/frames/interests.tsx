'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface InterestsFrameProps {
  onContinue?: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

export default function InterestsFrame({ onContinue, onSkip, onClose }: InterestsFrameProps) {
  const [formData, setFormData] = useState({
    interestedDomains: ['AI & Machine Learning', 'Data Science'],
    preferredMode: '',
    learningGoal: '',
    needMentor: ''
  });

  const domainOptions = [
    'AI & Machine Learning',
    'Data Science',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'DevOps'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDomainToggle = (domain: string) => {
    setFormData(prev => ({
      ...prev,
      interestedDomains: prev.interestedDomains.includes(domain)
        ? prev.interestedDomains.filter(d => d !== domain)
        : [...prev.interestedDomains, domain]
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
            
            {/* Step 3: Work - Completed */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Work</span>
              <div className="ml-4 w-16 h-1 bg-red-600 rounded-full"></div>
            </div>
            
            {/* Step 4: Interests - Active */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Interests</span>
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

          {/* Learning Preferences Form Card */}
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
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
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
                }}>Learning Preferences</h2>
                <p className="text-gray-600" style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  opacity: 1
                }}>Help us personalize your learning experience</p>
              </div>
            </div>

            {/* Interested Domains */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Interested Domains <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {domainOptions.map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => handleDomainToggle(domain)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      formData.interestedDomains.includes(domain)
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-red-300'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Mode */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Mode <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredMode"
                    value="self-paced"
                    checked={formData.preferredMode === 'self-paced'}
                    onChange={(e) => handleInputChange('preferredMode', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Self-paced</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredMode"
                    value="instructor-led"
                    checked={formData.preferredMode === 'instructor-led'}
                    onChange={(e) => handleInputChange('preferredMode', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Instructor-led</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredMode"
                    value="hybrid"
                    checked={formData.preferredMode === 'hybrid'}
                    onChange={(e) => handleInputChange('preferredMode', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Hybrid</span>
                </label>
              </div>
            </div>

            {/* Learning Goal */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Learning Goal <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.learningGoal}
                onChange={(e) => handleInputChange('learningGoal', e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your goal</option>
                <option value="career-change">Career Change</option>
                <option value="skill-upgrade">Skill Upgrade</option>
                <option value="certification">Get Certified</option>
                <option value="personal-growth">Personal Growth</option>
                <option value="job-promotion">Job Promotion</option>
                <option value="start-business">Start a Business</option>
              </select>
            </div>

            {/* Mentor Preference */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Do you need a mentor?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="needMentor"
                    value="yes"
                    checked={formData.needMentor === 'yes'}
                    onChange={(e) => handleInputChange('needMentor', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes, I'd love guidance</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="needMentor"
                    value="no"
                    checked={formData.needMentor === 'no'}
                    onChange={(e) => handleInputChange('needMentor', e.target.value)}
                    className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No, I prefer self-learning</span>
                </label>
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
