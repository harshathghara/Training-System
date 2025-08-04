'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SubmitPopup from '@/components/popups/submit'
import { useAuth } from '@/contexts/AuthContext'

const TrainingForSchoolForm = () => {
  const { token, user } = useAuth()
  
  const [formData, setFormData] = useState({
    fullName: '',
    classGrade: '',
    schoolName: '',
    locationCity: '',
    parentGuardianName: '',
    contactNumber: '',
    yearOfStudy: '',
    emailAddress: '',
    preferredMode: '',
    scheduleAvailability: '',
    placementSupport: false,
    expectations: ''
  })

  const [dropdowns, setDropdowns] = useState({
    preferredMode: false,
    scheduleAvailability: false
  })

  const [consentChecked, setConsentChecked] = useState(false)
  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  // Sample data for dropdowns
  const preferredModes = [
    'Online',
    'Offline',
    'Hybrid',
    'Self-paced',
    'Instructor-led'
  ]

  const scheduleAvailability = [
    'Weekdays',
    'Weekends',
    'Evenings',
    'Flexible',
    'Full-time'
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }))
  }

  const selectOption = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setDropdowns(prev => ({
      ...prev,
      [field]: false
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    try {
      if (!token) {
        alert('Please login first to submit the form')
        return
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'
      const response = await fetch(`${backendUrl}/api/forms/training-school`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          school_name: formData.schoolName,
          department: formData.classGrade,
          student_count: parseInt(formData.yearOfStudy) || 10,
          training_needs: formData.expectations,
          budget_range: formData.preferredMode,
          preferred_format: formData.scheduleAvailability,
          timeline: formData.yearOfStudy,
          contact_person: formData.fullName,
          contact_email: formData.emailAddress,
          contact_phone: formData.contactNumber
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Form submission failed')
      }

      const result = await response.json()
      console.log('Form submitted successfully:', result)
      setShowSubmitPopup(true)
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Form submission failed. Please try again.')
    }
  }

  const handleContinueBrowsing = () => {
    setShowSubmitPopup(false)
    // Add navigation logic to courses page
  }

  const handleBackToHome = () => {
    setShowSubmitPopup(false)
    // Add navigation logic to home page
  }

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
          className="text-gray-500 hover:text-gray-700 text-xl font-bold mr-30"
          onClick={() => window.location.href = '/#explore-upskill'}
        >
          ×
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Training for School Students
          </h1>
          <p className="text-gray-600 text-lg">
            Start your journey in tech with our comprehensive training programs.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Card Header */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 14l9-5-9-5-9 5 9 5z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Let's build together</h2>
                <p className="text-gray-600 text-sm">Help us understand your Self Phase</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <div className="border-l-4 border-red-500 pl-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-600 text-sm">Tell us about yourself</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* Class/Grade */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class/Grade *
                    </label>
                    <input
                      type="text"
                      placeholder="C grade"
                      value={formData.classGrade}
                      onChange={(e) => handleInputChange('classGrade', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* School Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: sree school"
                      value={formData.schoolName}
                      onChange={(e) => handleInputChange('schoolName', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* Location/City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location/City
                    </label>
                    <input
                      type="text"
                      placeholder="your City"
                      value={formData.locationCity}
                      onChange={(e) => handleInputChange('locationCity', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Info Section */}
              <div>
                <div className="border-l-4 border-red-500 pl-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Parent/Guardian Info</h3>
                  <p className="text-gray-600 text-sm">Your academic background</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Parent/Guardian Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Parent/Guardian full name"
                      value={formData.parentGuardianName}
                      onChange={(e) => handleInputChange('parentGuardianName', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email Address - Full Width */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Learning Preferences Section */}
              <div>
                <div className="border-l-4 border-red-500 pl-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Learning Preferences</h3>
                  <p className="text-gray-600 text-sm">Choose your preferred learning mode and schedule</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Mode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Mode *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select learning mode"
                        value={formData.preferredMode}
                        onChange={(e) => handleInputChange('preferredMode', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('preferredMode')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.preferredMode ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.preferredMode && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {preferredModes.map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => selectOption('preferredMode', mode)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Schedule Availability */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Schedule Availability *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select availability"
                        value={formData.scheduleAvailability}
                        onChange={(e) => handleInputChange('scheduleAvailability', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('scheduleAvailability')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.scheduleAvailability ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.scheduleAvailability && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {scheduleAvailability.map((availability) => (
                            <button
                              key={availability}
                              type="button"
                              onClick={() => selectOption('scheduleAvailability', availability)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {availability}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Placement Support Checkbox */}
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.placementSupport}
                      onChange={(e) => handleInputChange('placementSupport', e.target.checked)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I need placement support after course completion
                    </span>
                  </label>
                </div>
              </div>

              {/* Your Expectations Section */}
              <div>
                <div className="border-l-4 border-red-500 pl-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Your Expectations</h3>
                  <p className="text-gray-600 text-sm">Tell us what you hope to achieve</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you hope to learn? (Optional)
                  </label>
                  <textarea
                    placeholder="Tell us what you're excited to learn! Your parents can help you write this.."
                    value={formData.expectations}
                    onChange={(e) => handleInputChange('expectations', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </a>
                  . I consent to receiving communications about the training program and understand that my data will be processed according to the privacy policy.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={!consentChecked}
                  className={`w-full max-w-md h-12 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors ${
                    consentChecked 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </div>

              {/* Review Timeline Message */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  We'll review your application and get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Submit Popup */}
      <SubmitPopup
        isOpen={showSubmitPopup}
        onClose={() => setShowSubmitPopup(false)}
        onContinueBrowsing={handleContinueBrowsing}
        onBackToHome={handleBackToHome}
      />
    </div>
  )
}

export default TrainingForSchoolForm
