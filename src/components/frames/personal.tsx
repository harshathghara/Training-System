'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface PersonalFrameProps {
  onContinue?: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

export default function PersonalFrame({ onContinue, onSkip, onClose }: PersonalFrameProps) {
  const [formData, setFormData] = useState({
    highestQualification: '',
    instituteName: '',
    courseLevel: '',
    trainerPreference: '',
    fieldOfStudy: '',
    graduationYear: '',
    modeOfLearning: '',
    prerequisiteKnowledge: ''
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
            {/* Step 1: Personal - Active */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm font-semibold text-red-600">Personal</span>
              <div className="ml-4 w-16 h-1 bg-gray-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-red-600 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            {/* Step 2: Education - Pending */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Education</span>
              <div className="ml-4 w-16 h-1 bg-gray-200 rounded-full"></div>
            </div>
            
            {/* Step 3: Work - Pending */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">Work</span>
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

          {/* Personal Info Form Card */}
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
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
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
                }}>Personal Info</h2>
                <p className="text-gray-600" style={{
                  width: '328px',
                  height: '20px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  opacity: 1
                }}>Help us understand your academic foundation.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.highestQualification}
                    onChange={(e) => handleInputChange('highestQualification', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select qualification</option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="diploma">Diploma</option>
                    <option value="certificate">Certificate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institute Name
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    value={formData.instituteName}
                    onChange={(e) => handleInputChange('instituteName', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Level
                  </label>
                  <input
                    type="text"
                    placeholder="Beginner/Intermediate/Advanced"
                    value={formData.courseLevel}
                    onChange={(e) => handleInputChange('courseLevel', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trainer Preference
                  </label>
                  <select
                    value={formData.trainerPreference}
                    onChange={(e) => handleInputChange('trainerPreference', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Choose the trainer name from the list</option>
                    <option value="trainer1">John Doe</option>
                    <option value="trainer2">Jane Smith</option>
                    <option value="trainer3">Mike Johnson</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={formData.fieldOfStudy}
                    onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Graduation Year
                  </label>
                  <select
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select year</option>
                    {Array.from({ length: 20 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mode of Learning
                  </label>
                  <select
                    value={formData.modeOfLearning}
                    onChange={(e) => handleInputChange('modeOfLearning', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Online / In person / Hybrid</option>
                    <option value="online">Online</option>
                    <option value="in-person">In Person</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prerequisite Knowledge
                  </label>
                  <select
                    value={formData.prerequisiteKnowledge}
                    onChange={(e) => handleInputChange('prerequisiteKnowledge', e.target.value)}
                    className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Programming Languages Known</option>
                    <option value="none">None</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="multiple">Multiple Languages</option>
                  </select>
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
