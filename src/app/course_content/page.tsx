'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'
import ProfileImage from '@/components/ui/ProfileImage'
import MuxVideoPlayer from '../../../video_components/MuxVideoPlayer'

export default function CourseContentPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('transcript');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[200] shadow-sm" style={{ background: 'linear-gradient(90deg, #0D1F2D 18.75%, #0066CC 100%)' }}>
        <div className="w-full mx-auto flex px-[44px] pr-[75px] sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 w-full" style={{
            width: '98%',
            margin: 'auto'
          }}>

            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                <img 
                  alt="DeepMind Icon" 
                  loading="lazy" 
                  width={32} 
                  height={32} 
                  decoding="async" 
                  className="object-contain" 
                  src="/_next/image?url=%2Fassets%2Ficons%2Fdeep_mind_icon_blue.png&w=64&q=75"
                />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">DeepMind</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-4 items-center ml-4">
              <Link href="/#explore-upskill" className="text-white flex items-center whitespace-nowrap text-base leading-6 font-normal font-[Poppins]">Choose Goals</Link>
              <Link href="/#our-impact" className="text-white flex items-center whitespace-nowrap text-base leading-6 font-normal font-[Poppins]">Our Impact</Link>
              <Link href="/#top-courses" className="text-white flex items-center whitespace-nowrap text-base leading-6 font-normal font-[Poppins]">Top Courses</Link>
              <Link href="/#why-us" className="text-white flex items-center whitespace-nowrap text-base leading-6 font-normal font-[Poppins]">Why Us</Link>
              <Link href="/#pricing" className="text-white flex items-center text-base leading-6 font-normal font-[Poppins]">Price</Link>
              <Link href="/#community" className="text-white flex items-center text-base leading-6 font-normal font-[Poppins]">Community</Link>
              <Link href="/promotions" className="text-white flex items-center text-base leading-6 font-normal font-[Poppins]">More</Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center ml-4">
                              <button
                  data-signin
                  className="text-white px-4 py-2 rounded-md hover:text-yellow-400 transition-colors"
                >
                  Log in
                </button>
              <button 
                data-signup
                className="text-white bg-[#CB2128] hover:bg-[#a91a1f] px-4 py-2 rounded-md w-[131px] text-center transition-colors ml-0"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </header>

    {/* Main Content */}
       <div className="flex h-screen bg-gray-50 pt-[88px]" style={{
         width: '95%',
         marginLeft: '62px'
       }}>
                          {/* Left Column - Course Content Sidebar */}
                                                                               <div className="w-80 bg-white border-r border-gray-300 flex flex-col min-h-screen">
           {/* Course Content Header */}
           <div className="p-4">
             <div className="flex items-center justify-between">
               <h2 className="text-lg font-semibold text-gray-900">Course Content</h2>
             </div>
           </div>

           {/* Current Lesson */}
           <div className="p-4 border-b border-gray-200">
             <h3 className="text-base font-semibold text-gray-900 mb-2 truncate">Introduction to Artificial Intelligence</h3>
             <p className="text-sm text-gray-600">Module 1 of 8</p>
           </div>

           {/* Lesson List */}
           <div className="flex-1 overflow-y-auto">
                            {/* Completed Lesson */}
                               <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                   <div className="flex-1">
                                           <div className="flex items-center space-x-2">
                        <Image
                          src="/assets/icons/Play2.png"
                          alt="Play"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        <span className="text-sm font-medium text-gray-900">Welcome to Module 1</span>
                      </div>
                     <div className="mt-0.5">
                       <span className="text-xs text-gray-500">Completed 31 sec</span>
                     </div>
                   </div>
                 </div>
               </div>

                               {/* Current Active Lesson */}
                                 <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg">
                   <div className="flex items-start space-x-3">
                     <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                       <Image
                         src="/assets/icons/Ongoing_lecture.png"
                         alt="Ongoing Lecture"
                         width={24}
                         height={24}
                         className="object-contain"
                       />
                     </div>
                    <div className="flex-1">
                                             <div className="flex items-center space-x-2">
                         <Image
                           src="/assets/icons/Ongoing_lecture.png"
                           alt="Ongoing Lecture"
                           width={16}
                           height={16}
                           className="object-contain"
                         />
                         <span className="text-sm font-medium text-gray-900 whitespace-nowrap">Introduction to AI</span>
                       </div>
                      <div className="mt-0.5">
                        <span className="text-xs text-red-600">In Progress - 3 min</span>
                      </div>
                    </div>
                  </div>
                </div>

               {/* Other Lessons */}
                                                               <div className="p-3 hover:bg-gray-50 rounded-lg">
                   <div className="flex items-start space-x-3">
                     <Image
                       src="/assets/icons/learn_more.png"
                       alt="Learn More"
                       width={24}
                       height={24}
                       className="object-contain"
                     />
                    <div className="flex-1">
                                             <div className="flex items-center space-x-2">
                         <Image
                           src="/assets/icons/lm2.png"
                           alt="Learn More"
                           width={16}
                           height={16}
                           className="object-contain"
                         />
                         <span className="text-sm font-medium text-gray-900">Learn more</span>
                       </div>
                      <div className="mt-0.5">
                        <span className="text-xs text-gray-500">30 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                                                                                                                               <div className="p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Image
                        src="/assets/icons/Explore_Ideas.png"
                        alt="Explore Ideas"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                     <div className="flex-1">
                                               <div className="flex items-center space-x-2">
                          <Image
                            src="/assets/icons/ei2.png"
                            alt="Explore Ideas"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <span className="text-sm font-medium text-gray-900">Explore ideas</span>
                        </div>
                       <div className="mt-0.5">
                         <span className="text-xs text-gray-500">2 min</span>
                       </div>
                     </div>
                   </div>
                 </div>

                                                                                                                               <div className="p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Image
                        src="/assets/icons/Ideation_reflection.png"
                        alt="Ideation Reflection"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                     <div className="flex-1">
                                               <div className="flex items-center space-x-2">
                          <Image
                            src="/assets/icons/ir2.png"
                            alt="Ideation Reflection"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <span className="text-sm font-medium text-gray-900">Ideation reflection</span>
                        </div>
                       <div className="mt-0.5">
                         <span className="text-xs text-gray-500">Practice Assignment</span>
                       </div>
                     </div>
                   </div>
                 </div>
          </div>
        </div>

        {/* Right Column - Main Lesson View */}
        <div className="flex-1 flex flex-col">
          {/* Breadcrumbs */}
          <div className="p-6 border-b border-gray-200">
            <nav className="text-sm text-gray-600">
              <span className="hover:text-gray-900">Courses</span>
              <span className="mx-2">{'>'}</span>
              <span className="hover:text-gray-900">Complete ML Bootcamp</span>
              <span className="mx-2">{'>'}</span>
              <span className="hover:text-gray-900">Module 1</span>
              <span className="mx-2">{'>'}</span>
              <span className="text-gray-900">Introduction to Artificial Intelligence</span>
            </nav>
          </div>

          {/* Lesson Title */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction to Artificial Intelligence</h1>
          </div>

          {/* Video Player */}
          <div className="px-6 mb-6">
            <div className="rounded-lg h-96 w-full overflow-hidden relative">
              <MuxVideoPlayer />
            </div>
          </div>

          {/* Transcript Link */}
          <div className="px-6 mb-6">
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Prefer reading? View transcript</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('transcript')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'transcript'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  transcript
                </button>
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'notes'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Notes
                </button>
                <button
                  onClick={() => setActiveTab('downloads')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'downloads'
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Downloads
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

          {/* Lesson Summary */}
          <div className="px-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Lesson Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              In this lesson, you'll learn the fundamentals of Introduction to Artificial Intelligence and how to generate creative solutions for user problems. We'll explore various brainstorming techniques and methods to help you think outside the box when approaching AI challenges.
            </p>
          </div>

          {/* Feedback Section */}
          <div className="px-6 mt-auto pb-6">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="text-sm font-medium">Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2" />
                </svg>
                <span className="text-sm font-medium">Dislike</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
