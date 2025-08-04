'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SubmitPopup from '@/components/popups/submit'
import { useAuth } from '@/contexts/AuthContext'

interface FormData {
  fullName: string
  emailAddress: string
  phoneNumber: string
  organisationName: string
  whoAreYou: string
  otherWhoAreYou: string
  buildCustomPlan: boolean
  trainTeamFaculty: boolean
  boostCareerGrowth: boolean
  learnSpecificTool: boolean
  otherAchieve: string
  weekdays: boolean
  weekends: boolean
  specificDates: string
  additionalInfo: string
  fileUpload: File | null
}

const OthersForm = () => {
  const { token, user } = useAuth()
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    organisationName: '',
    whoAreYou: '',
    otherWhoAreYou: '',
    buildCustomPlan: false,
    trainTeamFaculty: false,
    boostCareerGrowth: false,
    learnSpecificTool: false,
    otherAchieve: '',
    weekdays: false,
    weekends: false,
    specificDates: '',
    additionalInfo: '',
    fileUpload: null
  })

  const [consentChecked, setConsentChecked] = useState(false)
  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        fileUpload: file
      }))
    }
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
      const response = await fetch(`${backendUrl}/api/forms/others`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email_address: formData.emailAddress,
          phone_number: formData.phoneNumber,
          organisation_name: formData.organisationName,
          who_are_you: formData.whoAreYou,
          other_who_are_you: formData.otherWhoAreYou,
          build_custom_plan: formData.buildCustomPlan,
          train_team_faculty: formData.trainTeamFaculty,
          boost_career_growth: formData.boostCareerGrowth,
          learn_specific_tool: formData.learnSpecificTool,
          other_achieve: formData.otherAchieve,
          weekdays: formData.weekdays,
          weekends: formData.weekends,
          specific_dates: formData.specificDates,
          additional_info: formData.additionalInfo
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
            Upskill with Expert-Led Programs
          </h1>
          <p className="text-gray-600 text-lg">
            Tell us what you need, and we'll help you build the right path.
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
              {/* Personal and Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Organisation Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisation Name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter organisation name"
                    value={formData.organisationName}
                    onChange={(e) => handleInputChange('organisationName', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Who are you? Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Who are you?</h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="whoAreYou"
                        value="corporate"
                        checked={formData.whoAreYou === 'corporate'}
                        onChange={(e) => handleInputChange('whoAreYou', e.target.value)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Corporate Team</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="whoAreYou"
                        value="faculty"
                        checked={formData.whoAreYou === 'faculty'}
                        onChange={(e) => handleInputChange('whoAreYou', e.target.value)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Faculty Member</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="whoAreYou"
                        value="professional"
                        checked={formData.whoAreYou === 'professional'}
                        onChange={(e) => handleInputChange('whoAreYou', e.target.value)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Working Professional</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="whoAreYou"
                          value="other"
                          checked={formData.whoAreYou === 'other'}
                          onChange={(e) => handleInputChange('whoAreYou', e.target.value)}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Other:</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Please specify"
                        value={formData.otherWhoAreYou}
                        onChange={(e) => handleInputChange('otherWhoAreYou', e.target.value)}
                        className="ml-2 flex-1 h-8 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        disabled={formData.whoAreYou !== 'other'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* What do you want to achieve? Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What do you want to achieve?</h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.buildCustomPlan}
                        onChange={(e) => handleInputChange('buildCustomPlan', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Build a custom upskilling plan</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.trainTeamFaculty}
                        onChange={(e) => handleInputChange('trainTeamFaculty', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Train your team/faculty</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.boostCareerGrowth}
                        onChange={(e) => handleInputChange('boostCareerGrowth', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Boost individual career growth</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.learnSpecificTool}
                        onChange={(e) => handleInputChange('learnSpecificTool', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Learn a specific tool or topic</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.otherAchieve !== ''}
                          onChange={(e) => handleInputChange('otherAchieve', e.target.checked ? '' : '')}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">Other:</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Please specify"
                        value={formData.otherAchieve}
                        onChange={(e) => handleInputChange('otherAchieve', e.target.value)}
                        className="ml-2 flex-1 h-8 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* When would you like to begin? Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">When would you like to begin?</h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.weekdays}
                        onChange={(e) => handleInputChange('weekdays', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Weekdays</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.weekends}
                        onChange={(e) => handleInputChange('weekends', e.target.checked)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Weekends</span>
                    </label>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.specificDates !== ''}
                          onChange={(e) => handleInputChange('specificDates', e.target.checked ? '' : '')}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">Specific Dates:</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Please specify"
                        value={formData.specificDates}
                        onChange={(e) => handleInputChange('specificDates', e.target.value)}
                        className="ml-2 flex-1 h-8 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tell us more Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tell us more</h3>
                <textarea
                  placeholder="Share any specific requirements, topics of interest, or additional information that would help us create the perfect program for you..."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Upload a Brief Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upload a Brief (optional)</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </label>
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

export default OthersForm
