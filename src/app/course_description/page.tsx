'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'
import ProfileImage from '@/components/ui/ProfileImage'

export default function CourseDescriptionPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState([1]);
  
  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="min-h-screen">
             {/* Header - Fixed */}
       <header className="fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 81.25%)' }}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{marginLeft:'12px'}}>
           <div className="flex justify-between items-center py-4">
             {/* Logo */}
             <div className="flex items-center">
               <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                 <Image
                   src="/assets/icons/deep_mind_icon_blue.png"
                   alt="DeepMind Icon"
                   width={32}
                   height={32}
                   className="object-contain"
                 />
               </div>
               <div className="text-2xl font-bold">
                 <span className="text-white">DeepMind</span>
               </div>
             </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-4 items-center ml-40">
              <Link href="/#explore-upskill" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Choose Goals</Link>
              <Link href="/#our-impact" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Our Impact</Link>
              <Link href="/#top-courses" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Top Courses</Link>
              <Link href="/#why-us" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Why Us</Link>
              <Link href="/#pricing" className="text-white hover:text-yellow-400 font-medium flex items-center">Price</Link>
              <Link href="/#community" className="text-white hover:text-yellow-400 font-medium flex items-center">Community</Link>
              <Link href="/promotions" className="text-white hover:text-yellow-400 font-medium flex items-center">More▾</Link>
            </nav>

            {/* Login and Sign Up / User and Cart */}
            <div className="flex items-center space-x-2 ml-4">
              {user ? (
                // User is logged in - show user and cart icons
                <>
                  <Link href="/cart" className="text-white hover:text-yellow-400 flex items-center">
                    <Image
                      src="/assets/icons/cart_icon.png"
                      alt="Cart"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="/profile" className="text-white hover:text-yellow-400 flex items-center">
                    <ProfileImage size="sm" />
                  </Link>
                </>
              ) : (
                // User is not logged in - show login and signup buttons
                <>
                  <Link href="/signin" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Log In</Link>
                  <Link href="/signup" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors whitespace-nowrap">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

                                 {/* Hero Section */}
      <section style={{ background: 'linear-gradient(90deg, #0D1F2D 16.35%, #0066CC 100%)', height: '272px', paddingRight: '20px' }} className="flex items-center justify-between mt-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 max-w-2xl">
            <div className="text-white text-left" style={{marginLeft:'100px',width:'100%'}}>
              <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold" style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: '120%',
                letterSpacing: '0%',
                opacity: 1
              }}>
                Introduction to Artificial Intelligence
              </h1>
              <Link href="/course_content">
                <button className="bg-white font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors" style={{ color: '#CB2128' }}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
                             {/* Hero Image */}
        <div 
          className="flex-shrink-0"
          style={{ 
            width: '350px',
            marginLeft: '0px'
          }}
        >
          <Image
            src="/assets/images/Hero_section_of _course_description.png"
            alt="Hero Section"
            width={400}
            height={160}
            className="object-contain w-full h-auto"
            priority
            style={{ width: '350px', height: 'auto' }}
          />
        </div>
        </section>

      {/* Main Content Area */}
      <div 
        className="flex" 
        style={{ 
          border: '1px solid #E5E7EB', 
          boxShadow: '0px 1px 2px 0px #0000000D',
          backgroundColor: '#E5E7EB'
        }}
      >
        {/* Left Column - Course Content (Scrollable) */}
        <div 
          className="flex-1 px-4 sm:px-6 lg:px-8 py-16 bg-white"
          style={{ 
            backgroundColor: '#E5E7EB',
            paddingTop: '24px',
            paddingRight: '2px'
          }}
        >
          {/* Course Overview */}
          <div 
            className="mb-12" 
            style={{
              padding: '22px',
              backgroundColor: '#FFFFFF',
              marginBottom: '20px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 2px 0px #0000000D',
              borderRadius: '8px'
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Craft a business case for the resources you need
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Master the fundamentals of AI and machine learning with hands-on projects and real-world applications. Perfect for beginners looking to enter the AI field.
            </p>
            
            {/* Course Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-medium">Beginner</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">6 weeks</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">Certification Included</span>
            </div>

            {/* Course Progress */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="text-right text-sm text-gray-600">35%</div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'curriculum'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setActiveTab('faqs')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'faqs'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  FAQs
                </button>
              </nav>
            </div>
          </div>

          {/* Course Curriculum */}
          <div 
            className="mb-12"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '22px',
              marginBottom: '20px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 2px 0px #0000000D',
              borderRadius: '8px'
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
            
            {/* Module 1 */}
            <div className="border border-gray-200 rounded-lg mb-4">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleModule(1)}
              >
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-900 mr-4">1</span>
                  <span className="text-gray-900 font-medium">Introduction to AI</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedModules.includes(1) ? 'rotate-180' : ''
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {expandedModules.includes(1) && (
                <div className="p-4">
                 <div className="space-y-3">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center">
                       <Image
                         src="/assets/icons/play.png"
                         alt="Play"
                         width={16}
                         height={16}
                         className="object-contain mr-2"
                       />
                       <span className="text-gray-700">What is Artificial Intelligence?</span>
                     </div>
                     <div className="text-right">
                       <div className="text-sm text-gray-500">Ungraded Plugin. Duration: 30 minutes</div>
                     </div>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center">
                       <Image
                         src="/assets/icons/play.png"
                         alt="Play"
                         width={16}
                         height={16}
                         className="object-contain mr-2"
                       />
                       <span className="text-gray-700">History and Evolution of AI</span>
                     </div>
                     <div className="text-right">
                       <div className="text-sm text-gray-500">Ungraded Plugin. Duration: 30 minutes</div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
            </div>

            {/* Module 2 */}
            <div className="border border-gray-200 rounded-lg mb-4">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleModule(2)}
              >
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-900 mr-4">2</span>
                  <span className="text-gray-900 font-medium">Python for Machine Learning</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedModules.includes(2) ? 'rotate-180' : ''
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Module 3 */}
            <div className="border border-gray-200 rounded-lg mb-4">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleModule(3)}
              >
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-900 mr-4">3</span>
                  <span className="text-gray-900 font-medium">Capstone Project</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedModules.includes(3) ? 'rotate-180' : ''
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Meet Your Instructor */}
          <div 
            className="mb-12"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '22px',
              marginBottom: '24px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 1px 2px 0px #0000000D',
              borderRadius: '8px'
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/icons/dr_sarah_chetan.png"
                  alt="Dr. Sarah Chen"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Chen</h4>
                <p className="text-gray-600 mb-4">
                  AI Research Scientist with 10+ years of experience in machine learning and deep learning. Former Google AI researcher and published author of 50+ research papers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">AI</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">Data Science</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">Python</span>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  Connect with
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <section style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 100%)' }} className="py-10 rounded-lg">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                Ready to Start Your AI Journey?
              </h2>
              
              <div className="flex justify-center items-center gap-2 mb-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/icons/free_certification.png"
                    alt="Free Certification"
                    width={32}
                    height={32}
                    className="object-contain mr-2"
                  />
                  <span className="text-white font-medium">Free Certification</span>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/icons/real_projects.png"
                    alt="Real Projects"
                    width={32}
                    height={32}
                    className="object-contain mr-2"
                  />
                  <span className="text-white font-medium">Real Projects</span>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/icons/jon_assistance.png"
                    alt="Job Assistance"
                    width={32}
                    height={32}
                    className="object-contain mr-2"
                  />
                  <span className="text-white font-medium">Job Assistance</span>
                </div>
              </div>
              
              <button className="font-bold py-3 px-12 rounded-lg transition-colors" style={{ backgroundColor: '#F9FAFB', color: 'var(--button-Color, #CB2128)' }}>
                Enroll now
              </button>
            </div>
          </section>
        </div>

        {/* Right Column - Course Details Card */}
        <div 
          className="w-96 flex-shrink-0 p-4 sticky top-24"
          style={{
            paddingTop: '23px',
            height: 'fit-content'
          }}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            {/* Top Section with Course Title */}
            <div className="w-full p-4">
              <h3 className="text-xl font-bold text-gray-900 text-center">
                Introduction to Artificial Intelligence
              </h3>
            </div>

             {/* Course Summary Bar */}
             <div className="p-3 border-b border-gray-200">
               <div className="flex items-center justify-between space-x-2">
                 <div className="flex items-center flex-1">
                   <Image
                     src="/assets/icons/star.png"
                     alt="Star Rating"
                     width={16}
                     height={16}
                     className="object-contain flex-shrink-0"
                   />
                   <span className="ml-2 text-gray-900 font-semibold text-sm">4.90</span>
                 </div>
                 <div className="w-0.5 h-6 bg-gray-300 flex-shrink-0"></div>
                 <div className="flex items-center flex-1">
                   <Image
                     src="/assets/icons/enrolled.png"
                     alt="Enrolled"
                     width={20}
                     height={20}
                     className="object-contain flex-shrink-0"
                   />
                   <span className="ml-2 text-gray-600 text-sm">202,451</span>
                 </div>
                 <div className="w-0.5 h-6 bg-gray-300 flex-shrink-0"></div>
                 <div className="flex items-center flex-1 justify-end">
                   <Image
                     src="/assets/icons/free.png"
                     alt="Free"
                     width={40}
                     height={16}
                     className="object-contain flex-shrink-0"
                   />
                 </div>
               </div>
             </div>

             {/* Key Features Header */}
             <div className="bg-gray-100 p-3 border-b border-gray-200">
               <h4 className="text-xs font-semibold text-gray-500 uppercase text-center">KEY FEATURES OF THIS COURSE</h4>
             </div>

             {/* Key Features List */}
             <div className="p-4">
               <div className="space-y-3">
                 <div className="flex items-start">
                   <Image
                     src="/assets/icons/key features.png"
                     alt="Key Features"
                     width={16}
                     height={16}
                     className="object-contain mr-3 flex-shrink-0 mt-0.5"
                   />
                   <span className="text-sm text-gray-700 leading-relaxed">Key Features Of This Course</span>
                 </div>
                 <div className="flex items-start">
                   <Image
                     src="/assets/icons/own pace.png"
                     alt="Own Pace"
                     width={16}
                     height={16}
                     className="object-contain mr-3 flex-shrink-0 mt-0.5"
                   />
                   <span className="text-sm text-gray-700 leading-relaxed">Learn At Your Own Pace</span>
                 </div>
                 <div className="flex items-start">
                   <Image
                     src="/assets/icons/unlimited access.png"
                     alt="Unlimited Access"
                     width={16}
                     height={16}
                     className="object-contain mr-3 flex-shrink-0 mt-0.5"
                   />
                   <span className="text-sm text-gray-700 leading-relaxed">Unlimited Access Forever</span>
                 </div>
                 <div className="flex items-start">
                   <Image
                     src="/assets/icons/certifications.png"
                     alt="Certifications"
                     width={16}
                     height={16}
                     className="object-contain mr-3 flex-shrink-0 mt-0.5"
                   />
                   <span className="text-sm text-gray-700 leading-relaxed">Certification Included</span>
                 </div>
               </div>

               {/* Add to Cart Button */}
               <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mt-4">
                 Add to Cart
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
