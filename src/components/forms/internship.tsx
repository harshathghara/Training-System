'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import SubmitPopup from '@/components/popups/submit'
import { useAuth } from '@/contexts/AuthContext'

const InternshipForm = () => {
  const { token, user } = useAuth()
  
  const [formData, setFormData] = useState({
    student_name: '',
    university: '',
    graduation_year: '',
    field_of_study: '',
    preferred_roles: '',
    skills: '',
    availability_start: '',
    availability_end: '',
    contact_email: '',
    contact_phone: ''
  })

  const [dropdowns, setDropdowns] = useState({
    university: false,
    field_of_study: false,
    preferred_roles: false,
    skills: false
  })

  const [consentChecked, setConsentChecked] = useState(false)

  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  // Sample data for dropdowns
  const instituteNames = [
    'Anna University',
    'IIT Delhi',
    'IIT Bombay',
    'IIT Madras',
    'BITS Pilani',
    'Delhi University',
    'Mumbai University',
    'Other'
  ]

  const interestedAreas = [
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
    'Other'
  ]

  const modeOfInternship = [
    'Remote',
    'On-site',
    'Hybrid',
    'Part-time',
    'Full-time'
  ]

  const previousExperience = [
    'No Experience',
    '1-6 months',
    '6-12 months',
    '1-2 years',
    '2+ years'
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
      const response = await fetch(`${backendUrl}/api/forms/internship`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          student_name: formData.student_name,
          university: formData.university,
          field_of_study: formData.field_of_study,
          preferred_roles: formData.preferred_roles,
          skills: formData.skills,
          contact_email: formData.contact_email,
          contact_phone: formData.contact_phone
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
            Internship Seeker Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Tailored for students and freshers looking to gain hands-on experience through internships.
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
                  {/* Student Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Student Name"
                        value={formData.student_name}
                        onChange={(e) => handleInputChange('student_name', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('university')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.university ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.university && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {instituteNames.map((institute) => (
                            <button
                              key={institute}
                              type="button"
                              onClick={() => selectOption('university', institute)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {institute}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* University Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      University *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="University"
                        value={formData.university}
                        onChange={(e) => handleInputChange('university', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('university')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.university ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.university && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {interestedAreas.map((area) => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => selectOption('university', area)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preferred Roles Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Roles *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Preferred Roles"
                        value={formData.preferred_roles}
                        onChange={(e) => handleInputChange('preferred_roles', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('preferred_roles')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.preferred_roles ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.preferred_roles && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {modeOfInternship.map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => selectOption('preferred_roles', mode)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Field of Study Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Field of Study *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Science"
                      value={formData.field_of_study}
                      onChange={(e) => handleInputChange('field_of_study', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* Graduation Year Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Graduation Year *
                    </label>
                    <input
                      type="number"
                      min="2020"
                      max="2030"
                      placeholder="e.g. 2024"
                      value={formData.graduation_year}
                      onChange={(e) => handleInputChange('graduation_year', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  {/* Previous Experience Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience / Internship details *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Skills"
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => toggleDropdown('skills')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform ${dropdowns.skills ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dropdowns.skills && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {previousExperience.map((exp) => (
                            <button
                              key={exp}
                              type="button"
                              onClick={() => selectOption('skills', exp)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            >
                              {exp}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="text"
                                              placeholder="Contact Email"
                      value={formData.contact_email}
                      onChange={(e) => handleInputChange('contact_email', e.target.value)}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Phone Field - Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <textarea
                  placeholder="Contact Phone"
                  value={formData.contact_phone}
                  onChange={(e) => handleInputChange('contact_phone', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
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

export default InternshipForm
