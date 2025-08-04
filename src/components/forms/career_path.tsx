'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import SubmitPopup from '@/components/popups/submit'
import { useAuth } from '@/contexts/AuthContext'

const CareerPathForm = () => {
  const { token, user } = useAuth()
  
  const [formData, setFormData] = useState({
    previousExperience: '',
    previousExperienceDetails: '',
    location: '',
    additionalNotes: '',
    areaOfSpecialization: ''
  })

  const [dropdowns, setDropdowns] = useState({
    previousExperience: false,
    previousExperienceDetails: false
  })

  const [consentChecked, setConsentChecked] = useState(false)

  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  // Sample data for dropdowns
  const previousExperienceOptions = [
    'No Experience',
    '1-2 years',
    '2-5 years',
    '5-10 years',
    '10+ years'
  ]

  const previousExperienceDetails = [
    'Software Development',
    'Data Science',
    'AI/ML',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'DevOps',
    'UI/UX Design',
    'Digital Marketing',
    'Content Writing',
    'Project Management',
    'Business Analysis',
    'Sales',
    'Customer Service',
    'Other'
  ]

  const handleInputChange = (field: string, value: string) => {
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
      const response = await fetch(`${backendUrl}/api/forms/career-path`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          current_role: formData.previousExperience,
          desired_role: formData.previousExperienceDetails,
          experience_years: parseInt(formData.location) || 0,
          skills: formData.areaOfSpecialization,
          goals: formData.additionalNotes
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
            Career Path Navigator
          </h1>
          <p className="text-gray-600 text-lg">
            Built for individuals looking to identify or switch to a meaningful career path.
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
                <p className="text-gray-600 text-sm">Help us understand your Goals</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Previous Experience Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.previousExperience}
                        onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('previousExperience')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.previousExperience ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.previousExperience && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {previousExperienceOptions.map((exp) => (
                            <button
                              key={exp}
                              type="button"
                              onClick={() => selectOption('previousExperience', exp)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {exp}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Area of Specialization Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Specialization *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Science"
                      value={formData.areaOfSpecialization}
                      onChange={(e) => handleInputChange('areaOfSpecialization', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="space-y-6">
                {/* Previous Experience / Internship details Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Experience / Internship details *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="work exp"
                      value={formData.previousExperienceDetails}
                      onChange={(e) => handleInputChange('previousExperienceDetails', e.target.value)}
                      className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => toggleDropdown('previousExperienceDetails')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <svg 
                        className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.previousExperienceDetails ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdowns.previousExperienceDetails && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                        {previousExperienceDetails.map((detail) => (
                          <button
                            key={detail}
                            type="button"
                            onClick={() => selectOption('previousExperienceDetails', detail)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                          >
                            {detail}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Location Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="preferred tools"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Additional Notes Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes *
                  </label>
                  <textarea
                    placeholder="Training Type"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
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

export default CareerPathForm
