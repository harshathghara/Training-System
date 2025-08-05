'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const EditGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const router = useRouter()

  const goals = [
    {
      id: 'start-career',
      title: 'Start my career.',
      description: 'Begin your professional journey with foundational skills.',
      icon: '/assets/icons/eg1.png'
    },
    {
      id: 'change-career',
      title: 'Change my career.',
      description: 'Transition to a new field with targeted learning.',
      icon: '/assets/icons/eg2.png'
    },
    {
      id: 'grow-current',
      title: 'Grow in my current role.',
      description: 'Advance your skills in your existing position.',
      icon: '/assets/icons/eg3.png'
    },
    {
      id: 'explore-topics',
      title: 'Explore topics outside of work.',
      description: 'Learn new subjects for personal enrichment.',
      icon: '/assets/icons/eg4.png'
    }
  ]

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId)
  }

  const handleNext = () => {
    if (selectedGoal) {
      // Navigate based on selected goal
      if (selectedGoal === 'start-career') {
        router.push('/personal-demo')
      } else if (selectedGoal === 'change-career') {
        router.push('/education-demo')
      } else if (selectedGoal === 'grow-current') {
        router.push('/work-demo')
      } else if (selectedGoal === 'explore-topics') {
        router.push('/interests-demo')
      } else {
        // Navigate to course recommendations for other goals
        router.push('/courses')
      }
    }
  }

  const handleClose = () => {
    router.push('/')
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
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 text-xl font-bold mr-30"
        >
          ×
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
        <div className="w-full max-w-xl">
          {/* Greeting */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              Hello, Sarah! 👋
            </h1>
            <p className="text-gray-600 text-base">
              Tell us your goal so we can suggest the most relevant courses for your learning journey.
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {goals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className={`bg-white rounded-lg p-4 cursor-pointer border-2 transition-all duration-200 hover:shadow-md ${
                  selectedGoal === goal.id 
                    ? 'border-red-500 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={goal.icon}
                      alt={goal.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="text-center mb-3">
            <button
              onClick={handleNext}
              disabled={!selectedGoal}
              className={`w-full max-w-sm py-2 px-4 rounded-lg font-semibold transition-colors ${
                selectedGoal
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next: Get Course Recommendations →
            </button>
          </div>

          {/* Helper Text */}
          {!selectedGoal && (
            <p className="text-center text-sm text-gray-500 mt-2">
              Please select a goal to continue
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditGoals
