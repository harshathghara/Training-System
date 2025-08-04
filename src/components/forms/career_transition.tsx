"use client"

import { useState } from 'react'
import Image from 'next/image'
import SubmitPopup from '@/components/popups/submit'
import { useAuth } from '@/contexts/AuthContext'

const CareerTransitionForm = () => {
  const { token, user } = useAuth()
  
  const [formData, setFormData] = useState({
    courseName: '',
    domain: '',
    presenter: ''
  })

  const [consentChecked, setConsentChecked] = useState(false)

  const [dropdowns, setDropdowns] = useState({
    courseName: false,
    presenter: false
  })

  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  // Sample data for dropdowns
  const courseNames = [
    'Bachelor of Technology (B.Tech)',
    'Bachelor of Engineering (B.E.)',
    'Bachelor of Science (B.Sc)',
    'Master of Technology (M.Tech)',
    'Master of Science (M.Sc)',
    'Master of Computer Applications (MCA)',
    'Bachelor of Computer Applications (BCA)',
    'Diploma in Computer Science',
    'Other'
  ]

  const presenters = [
    'John Doe',
    'Jane Smith',
    'Mike Johnson',
    'Sarah Wilson',
    'David Brown',
    'Lisa Davis',
    'Robert Miller',
    'Emily Taylor',
    'Other'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value || ''
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
      const response = await fetch(`${backendUrl}/api/forms/career-transition`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          current_industry: formData.courseName,
          target_industry: formData.domain,
          transition_reason: formData.presenter,
          timeline_months: 6,
          challenges: 'Career transition challenges'
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
            Career Transition Profile
          </h1>
          <p className="text-gray-600 text-lg">
            For professionals looking to switch industries or career paths.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-2xl">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Let's build together</h2>
                <p className="text-gray-600 text-sm">Help us understand your transition goals</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Course Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select qualification"
                        value={formData.courseName}
                        onChange={(e) => handleInputChange('courseName', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('courseName')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.courseName ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.courseName && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {courseNames.map((course) => (
                            <button
                              key={course}
                              type="button"
                              onClick={() => selectOption('courseName', course)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {course}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Domain Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domain
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Science"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Full Width Presenter Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presenter
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select year"
                    value={formData.presenter}
                    onChange={(e) => handleInputChange('presenter', e.target.value)}
                    className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => toggleDropdown('presenter')}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.presenter ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdowns.presenter && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {presenters.map((presenter) => (
                        <button
                          key={presenter}
                          type="button"
                          onClick={() => selectOption('presenter', presenter)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                        >
                          {presenter}
                        </button>
                      ))}
                    </div>
                  )}
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
              <button
                type="submit"
                disabled={!consentChecked}
                className={`w-full h-12 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors ${
                  consentChecked 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit
              </button>

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

export default CareerTransitionForm

