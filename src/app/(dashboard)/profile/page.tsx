'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/Deepmind_icon.png"
                  alt="DeepMind Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span className="text-gray-800">DeepMind</span>
                </div>
                <div className="text-sm text-gray-500">Powered by Areta360</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/#explore-upskill" className="text-gray-700 hover:text-blue-600 font-medium">Choose Goals</Link>
              <Link href="/#our-impact" className="text-gray-700 hover:text-blue-600 font-medium">Our Impact</Link>
              <Link href="/#top-courses" className="text-gray-700 hover:text-blue-600 font-medium">Top Courses</Link>
              <Link href="/#why-us" className="text-gray-700 hover:text-blue-600 font-medium">Why Us</Link>
              <Link href="/#community" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600 font-medium">More</Link>
            </nav>

            {/* Search, Cart and Profile */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link href="/cart" className="relative">
                <Image
                  src="/assets/icons/cart_icon.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </Link>
              <Image
                src="/assets/icons/profile_cart.png"
                alt="User Profile"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Profile Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="mb-4">
                              <Image
                src="/assets/icons/profile_cart.png"
                alt="Sarah Johnson"
                width={80}
                height={80}
                className="rounded-full mx-auto object-cover"
              />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h2>
              <p className="text-gray-600 mb-4">AI/ML Student & Developer</p>
              <div className="space-y-2">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Profile
                </button>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Profile Link
                </button>
              </div>
            </div>

            {/* Work Preferences */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Work Preferences</h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Desired Roles</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Machine Learning Engineer</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Data Scientist</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">AI Researcher</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Info</h4>
                <p className="text-sm text-gray-600">
                  Passionate about deep learning and neural networks. Looking for opportunities in AI research and development.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 relative">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Master of Science in Computer Science</h4>
                    <p className="text-sm text-gray-600">Stanford University</p>
                    <p className="text-sm text-gray-500">2022-2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Bachelor of Engineering</h4>
                    <p className="text-sm text-gray-600">MIT</p>
                    <p className="text-sm text-gray-500">2018-2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Experience</h3>
                <div className="flex space-x-2">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    + Add Project
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                    <Image
                      src="/assets/icons/add_work_cart.png"
                      alt="Add Work"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    Add Work
                  </button>
                </div>
              </div>

                             {/* Projects */}
               <h4 className="font-medium text-gray-900 mb-3">Projects</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <h4 className="font-medium text-gray-900 mb-2">Neural Network Image Classifier</h4>
                   <p className="text-sm text-gray-600 mb-3">
                     Built a CNN model achieving 95% accuracy on CIFAR-10 dataset using TensorFlow and Keras.
                   </p>
                   <div className="flex flex-wrap gap-2 mb-3">
                     <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Python</span>
                     <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">TensorFlow</span>
                     <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">CNN</span>
                   </div>
                   <Link href="#" className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center">
                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                     View Project
                   </Link>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <h4 className="font-medium text-gray-900 mb-2">Sentiment Analysis Tool</h4>
                   <p className="text-sm text-gray-600 mb-3">
                     Developed NLP model for real-time sentiment analysis of social media posts with 92% accuracy.
                   </p>
                   <div className="flex flex-wrap gap-2 mb-3">
                     <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">NLP</span>
                     <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">BERT</span>
                     <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Flask</span>
                   </div>
                   <Link href="#" className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center">
                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                     </svg>
                     GitHub
                   </Link>
                 </div>
               </div>

                             {/* Work History */}
               <div className="flex justify-between items-center mb-3">
                 <h4 className="font-medium text-gray-900">Work History</h4>
                 <button className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                   </svg>
                   Add Experience
                 </button>
               </div>
                                               <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">AI Research Intern</h4>
                        <p className="text-sm text-gray-600">Google DeepMind</p>
                        <p className="text-sm text-gray-500">Jun 2023 - Aug 2023</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Worked on transformer architectures for language understanding, contributing to 2 research papers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">ML Engineering Intern</h4>
                        <p className="text-sm text-gray-600">Tesla</p>
                        <p className="text-sm text-gray-500">May 2022 - Aug 2022</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Developed computer vision models for autonomous driving, improving object detection by 15%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

                                      {/* Education and Certifications */}
             <div className="bg-white border border-gray-200 rounded-lg p-6">
               <div className="flex items-center mb-4">
                 <Image
                   src="/assets/icons/education_cart.png"
                   alt="Education"
                   width={24}
                   height={24}
                   className="mr-2"
                 />
                 <h3 className="text-lg font-bold text-gray-900">Education</h3>
               </div>

                              <h4 className="font-medium text-gray-900 mb-3">Degree</h4>
               <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                 <div className="flex items-start space-x-3">
                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                     </svg>
                   </div>
                   <div className="flex-1">
                     <h4 className="font-medium text-gray-900">Bachelor of Design</h4>
                     <p className="text-sm" style={{ color: '#06B6D4' }}>Stanford University</p>
                     <p className="text-sm text-gray-500">2016-2020</p>
                   </div>
                 </div>
               </div>

                               <div className="pt-6">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="text-lg font-bold text-gray-900">Certifications</h3>
                   <div className="flex space-x-2">
                     <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                       + Add Certification
                     </button>
                     <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                       </svg>
                       Browse
                     </button>
                   </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="bg-white border border-gray-200 rounded-lg p-4">
                     <h4 className="font-medium text-gray-900">Google UX Design Certificate</h4>
                     <p className="text-sm text-gray-600">Google</p>
                     <p className="text-sm text-gray-500">2021</p>
                   </div>
                   <div className="bg-white border border-gray-200 rounded-lg p-4">
                     <h4 className="font-medium text-gray-900">Adobe Certified Expert</h4>
                     <p className="text-sm text-gray-600">Adobe</p>
                     <p className="text-sm text-gray-500">2020</p>
                   </div>
                 </div>
               </div>
             </div>

            {/* Courses Completed */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Courses Completed</h3>
                <Link href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">View All</Link>
              </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                       <Image
                         src="/assets/icons/mls_cart.png"
                         alt="Machine Learning Specialization"
                         width={32}
                         height={32}
                         className="object-contain"
                       />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-medium text-gray-900">Machine Learning Specialization</h4>
                       <p className="text-sm text-gray-600">Google</p>
                       <p className="text-sm text-gray-500">Completed: Dec 2023</p>
                       <div className="flex flex-wrap gap-2 mt-2">
                         <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">ML</span>
                         <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
                         <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">TensorFlow</span>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                       <Image
                         src="/assets/icons/dl_cart.png"
                         alt="Deep Learning with PyTorch"
                         width={32}
                         height={32}
                         className="object-contain"
                       />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-medium text-gray-900">Deep Learning with PyTorch</h4>
                       <p className="text-sm text-gray-600">IBM</p>
                       <p className="text-sm text-gray-500">Completed: Oct 2023</p>
                       <div className="flex flex-wrap gap-2 mt-2">
                         <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Deep Learning</span>
                         <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">PyTorch</span>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                       <Image
                         src="/assets/icons/ai_for_ev_cart.png"
                         alt="AI for Everyone"
                         width={32}
                         height={32}
                         className="object-contain"
                       />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-medium text-gray-900">AI for Everyone</h4>
                       <p className="text-sm text-gray-600">Meta</p>
                       <p className="text-sm text-gray-500">Completed: Sep 2023</p>
                       <div className="flex flex-wrap gap-2 mt-2">
                         <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">AI Ethics</span>
                         <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Strategy</span>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4">
                   <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                       <Image
                         src="/assets/icons/cs229_cart.png"
                         alt="CS229: Machine Learning"
                         width={32}
                         height={32}
                         className="object-contain"
                       />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-medium text-gray-900">CS229: Machine Learning</h4>
                       <p className="text-sm text-gray-600">Stanford Online</p>
                       <p className="text-sm text-gray-500">Completed: Aug 2023</p>
                       <div className="flex flex-wrap gap-2 mt-2">
                         <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Algorithms</span>
                         <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Statistics</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-gray-500 text-center">
            © 2024 DeepMindUniversity.AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
