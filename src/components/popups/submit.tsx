'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface SubmitPopupProps {
  isOpen: boolean
  onClose: () => void
  onContinueBrowsing: () => void
  onBackToHome: () => void
}

const SubmitPopup = ({ isOpen, onClose, onContinueBrowsing, onBackToHome }: SubmitPopupProps) => {
  const router = useRouter()
  
  if (!isOpen) return null

  const handleBackToHome = () => {
    onBackToHome()
    router.push('/')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Decorative Dots */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-6 left-4 w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="absolute top-8 left-4 w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="absolute top-4 right-6 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute top-6 right-6 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute top-8 right-6 w-2 h-2 bg-yellow-500 rounded-full"></div>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            Thank you for reaching out!
          </h2>
        </div>

        {/* Body Text */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            We've received your details and our team will get back to you shortly. In the meantime, feel free to explore our top courses or contact us for urgent support.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          {/* Continue Browsing Button */}
          <button
            onClick={() => {
              onContinueBrowsing()
              router.push('/courses')
            }}
            className="w-full text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            style={{ background: 'linear-gradient(90deg, #4D0001 0%, #BB181B 100%)' }}
          >
            <svg 
              className="w-5 h-5" 
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
            </svg>
            <span>Continue Browsing Courses</span>
          </button>

          {/* Back to Home Button */}
          <button
            onClick={handleBackToHome}
            className="w-2/4 mx-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <svg 
              className="w-5 h-5 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <svg 
              className="w-3 h-3 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            <span>Terms & Condition</span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center space-x-1">
            <svg 
              className="w-3 h-3 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            <span>Secure & Private</span>
          </div>
        </div>

        {/* Decorative Circle (Bottom Left) */}
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-200 rounded-full opacity-50"></div>
      </div>
    </div>
  )
}

export default SubmitPopup
