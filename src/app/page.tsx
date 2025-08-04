'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="shadow-sm" style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 81.25%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-3 overflow-hidden" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
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
            <nav className="hidden md:flex space-x-4 items-center ml-4">
              <Link href="#explore-upskill" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Choose Goals</Link>
              <Link href="#our-impact" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Our Impact</Link>
              <Link href="#top-courses" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Top Courses</Link>
              <Link href="#why-us" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Why Us</Link>
              <Link href="#pricing" className="text-white hover:text-yellow-400 font-medium flex items-center">Price</Link>
              <Link href="#community" className="text-white hover:text-yellow-400 font-medium flex items-center">Community</Link>
              <Link href="/promotions" className="text-white hover:text-yellow-400 font-medium flex items-center">More</Link>
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
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/icons/m1.png"
                        alt="User Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
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
      <section className="text-white py-20" style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 81.25%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="mb-6 leading-tight" style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '48px',
                letterSpacing: '0%'
              }}>
                Launch Your Tech Career with<br />
                <span>AI-Powered Skills Training</span>
              </h1>
              <p className="text-xl mb-8 text-white">
                Master AI, cloud computing, and cybersecurity with hands-on courses designed to get you hired in India, the US, and the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="text-white font-bold py-3 px-8 rounded-lg transition-colors" style={{ background: '#ED0000' }}>
                  Start Learning for Free
                </button>
                <Link href="/courses" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors" style={{ border: '1px solid #E5E7EB' }}>
                  Explore Courses
                </Link>
              </div>
              <p className="text-sm text-white">
                Join 100,000+ learners mastering AI-era skills.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <Image
                src="/assets/images/land-page-img.png"
                alt="Students collaborating"
                width={577.67}
                height={449.14}
                
                className="rounded-lg shadow-2xl object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore How We Help You Upskill Section */}
      <section id="explore-upskill" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore How We Help You Upskill
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the learning path that fits your goals. We've built tailored journeys for different user types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 1 */}
            <Link href="/enterprise-training" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/corporate_training_icon.png"
                  alt="Corporate Training"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Custom skill programs for corporate teams to drive performance and innovation across your organization.</p>
            </Link>

            <Link href="/self-paced" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/self_paced_learning_icon.png"
                  alt="Self-paced Learning"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Self-paced Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Flexible online modules designed for your schedule and goals, learn at your own pace anywhere.</p>
            </Link>

            <Link href="/internship" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/internship_icon.png"
                  alt="Internship"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Internship</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Bridge the gap between classroom and career with guided support and real-world assignments.</p>
            </Link>

            {/* Row 2 */}
            <Link href="/career-path" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/career_apath_icon.png"
                  alt="Career Path"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Path</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Map your future with skill-based learning plans and personalized roadmaps to success.</p>
            </Link>

            <Link href="/mentorship" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/mentorship_icon.png"
                  alt="Mentorship & Advisory"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship & Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Connect with industry experts to guide your personal and professional growth journey.</p>
            </Link>

            <Link href="/career-transition" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/career_transition_support_icon.png"
                  alt="Career Transition Support"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Transition Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Switching domains? We help you reskill with confidence and strategic planning support.</p>
            </Link>

            {/* Row 3 */}
            <Link href="/training-for-college" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/training_for_college_icon.png"
                  alt="Training for College"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training for College</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Gain job-ready skills through practical learning and expert mentorship designed for real-world success.</p>
            </Link>

            <Link href="/training-for-school" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/training_for_school_icon.png"
                  alt="Training for School"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training for School</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Nurture young minds with engaging courses in coding, design, and tech — made fun and future-focused.</p>
            </Link>

            <Link href="/others" className="text-center p-6 rounded-lg bg-white cursor-pointer" style={{
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/others_icon.png"
                  alt="Others"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Others</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Explore flexible programs for corporates, faculties, and professionals to upgrade skills on your own terms.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact So Far Section */}
      <section id="our-impact" className="py-20 text-white" style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Impact So Far
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming education through technology and partnerships across schools and colleges nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 1 - 4 cards */}
            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf1.png"
                  alt="Graduation Cap"
                  width={26.25}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white" style={{ marginTop: '25px' }}>4,950</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>Learners Onboarded</p>
            </div>

            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf2.png"
                  alt="Single Person"
                  width={26.25}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">27</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>Mentors from Tech Giants</p>
            </div>

            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf3.png"
                  alt="Handshake"
                  width={37.5}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">12</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>Company Tie-ups</p>
            </div>

            
            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf4.png"
                  alt="Graduation Cap"
                  width={26.25}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">30</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>College Students Enrolled</p>
            </div>

            {/* Row 2 - 3  cards */}

            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf5.png"
                  alt="Group of Students"
                  width={37.5}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">52</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>School Students Enrolled</p>
            </div>

            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf6.png"
                  alt="College Building"
                  width={30}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">16</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>Partnered Colleges</p>
            </div>

            <div className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{
              width: '250px',
              height: '202px',
              borderRadius: '16px',
              opacity: 0.95,
              background: '#FFFFFF1A',
              border: '1px solid #FFFFFF33'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/oisf7.png"
                  alt="School Building"
                  width={37.5}
                  height={30}
                  className="object-contain"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="text-5xl font-bold mb-2 text-white">12</div>
              <p className="text-blue-200" style={{ marginTop: '10px' }}>Partnered Schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section id="top-courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the most in-demand tech skills with our industry-leading courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Row 1 */}
            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-1.png"
                  alt="AI & Machine Learning Basics"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>AI & ML</span>
                  <span className="text-gray-600 text-xs font-medium">
                    4 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Machine Learning Basics</h3>
                <p className="text-gray-600 text-sm mb-4">Learn fundamentals of AI and build your first neural network with Python.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>12,400+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-2.png"
                  alt="AWS Cloud Practitioner"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>CLOUD</span>
                  <span className="text-gray-600 text-xs font-medium">
                    6 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Cloud Practitioner</h3>
                <p className="text-gray-600 text-sm mb-4">Master cloud fundamentals and prepare for the AWS certification exam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>9,800+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-3.png"
                  alt="Cybersecurity Essentials"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>SECURITY</span>
                  <span className="text-gray-600 text-xs font-medium">
                    5 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity Essentials</h3>
                <p className="text-gray-600 text-sm mb-4">Learn to identify threats and implement security measures to protect systems.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>7,600+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-4.png"
                  alt="Data Structure Tutorial"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>AI & ML</span>
                  <span className="text-gray-600 text-xs font-medium">
                    4 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Structures Tutorial</h3>
                <p className="text-gray-600 text-sm mb-4">Learn fundamentals of AI and build your first neural network with Python.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>12,400+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-5.png"
                  alt="Operating System Full Course"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>CLOUD</span>
                  <span className="text-gray-600 text-xs font-medium">
                    6 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operating System(OS) Tutorial</h3>
                <p className="text-gray-600 text-sm mb-4">Master cloud fundamentals and prepare for the AWS certification exam.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>9,800+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden" style={{
              boxShadow: '0px 4px 6px 0px #0000001A, 0px 2px 4px 0px #0000001A'
            }}>
              <div className="relative">
                <Image
                  src="/assets/images/course-6.png"
                  alt="Software Engineering Tutorial"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button className="text-white hover:text-gray-200">
                    <Image
                      src="/assets/icons/Share.png"
                      alt="Share"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#CB21281A', color: 'var(--button-Color, #CB2128)' }}>SECURITY</span>
                  <span className="text-gray-600 text-xs font-medium">
                    5 weeks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Software Engineering Tutorial</h3>
                <p className="text-gray-600 text-sm mb-4">Learn to identify threats and implement security measures to protect systems.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Image
                      src="/assets/icons/enrol_icon.png"
                      alt="Enrollment"
                      width={16}
                      height={16}
                      className="w-4 h-4 mr-1"
                    />
                    <span>7,600+ enrolled</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--button-Color, #CB2128)' }}>
                    View Course
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/courses" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center mx-auto inline-flex">
              Explore All Courses
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why DeepMindUniversity? Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why DeepMindUniversity?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to help you acquire the skills that matter most in today's AI-driven job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/structured_curriculum_icon.png"
                  alt="Structured Curriculum"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Curriculum</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Covers essentials such as supervised, unsupervised, and reinforcement learning, deep learning, natural language processing, and more</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/hands_on_training_icon.png"
                  alt="Hands-On Training"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Interactive labs and assignments using real-world datasets. Build practical experience through Assignment-based learning and industry simulations.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/model_lifecycle_training_icon.png"
                  alt="Model Lifecycle Training"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Model Lifecycle Training</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Master the complete ML pipeline: Teaches data preparation, feature engineering, model selection, hyper parameter tuning, and deployment.</p>
            </div>

            {/* Row 2 */}
            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/role_based_certification_icon.png"
                  alt="Role-Based Certifications"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Role-Based Certifications</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Provides specialized tracks for roles like AI/ML Engineer and Data Scientist.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/tool_and_platform_exposure_icon.png"
                  alt="Tool & Platform Exposure"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tool & Platform Exposure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Uses popular technologies such as Python, TensorFlow, PyTorch, and cloud ML services.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white" style={{
              border: '1px solid #F3F4F6',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/support_and_community_icon.png"
                  alt="Support & Community"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support & Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Facilitates peer-to-peer learning, mentoring, and ongoing support channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your AI Future Section */}
      <div style={{ borderTop: '2px solid #CED4DA', marginTop: '20px' }}></div>
      <section id="pricing" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Build Your AI Future—Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade as needed. Flexible plans for learners, professionals, and enterprises.
            </p>
            
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-200 rounded-lg p-1 flex">
              <button className="text-white font-bold py-2 px-6 rounded-md shadow-sm" style={{ background: 'linear-gradient(90deg, #4D0001 0%, #BB181B 100%)' }}>
                Monthly
              </button>
              <button className="text-gray-600 font-bold py-2 px-6 rounded-md">
                Yearly (Save up to 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Plan</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$0</div>
              <p className="text-sm text-gray-600 mb-4">Perfect for getting started</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> Foundational AI courses</li>
                <li><span className="text-green-500">✓</span> Introduction to Generative AI</li>
                <li><span className="text-green-500">✓</span> 7-day validity</li>
                <li><span className="text-green-500">✓</span> Community access</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Start Learning Free
              </button>
            </div>

            {/* Basic Plan */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$28<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-sm text-gray-600 mb-4">Quick entry to AI/ML</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> 50 hours/month credits</li>
                <li><span className="text-green-500">✓</span> Earn certifications</li>
                <li><span className="text-green-500">✓</span> Acquire new skills</li>
                <li><span className="text-green-500">✓</span> AI/ML entry point</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Choose Basic
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg p-6 text-center relative" style={{ 
              background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #0066FF 0%, #7A4EFF 100%) border-box',
              border: '2px solid transparent',
              boxShadow: '0px 20px 25px 0px #0000001A, 0px 8px 10px 0px #0000001A'
            }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-bold" style={{
                background: 'linear-gradient(90deg, #0066FF 0%, #7A4EFF 100%)'
              }}>
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$49<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-sm text-gray-600 mb-4">Full catalog access</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> 150+ courses & labs</li>
                <li><span className="text-green-500">✓</span> Curated learning paths</li>
                <li><span className="text-green-500">✓</span> Filter by role & skill</li>
                <li><span className="text-green-500">✓</span> Skill assessments</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Go Pro
              </button>
            </div>

            {/* AI+ Plan */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI+</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$49<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-sm text-gray-600 mb-4">Future-focused AI content</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> Specialized AI learning</li>
                <li><span className="text-green-500">✓</span> Future AI demands prep</li>
                <li><span className="text-green-500">✓</span> Focused AI content</li>
                <li><span className="text-green-500">✓</span> Broadly accessible</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Go AI+
              </button>
            </div>
          </div>

          {/* Pricing Cards - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Developer Premium */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Developer Premium</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$299<span className="text-lg text-gray-600">/year</span></div>
              <p className="text-sm text-gray-600 mb-4">Expert consultations</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> 150+ courses access</li>
                <li><span className="text-green-500">✓</span> Developer communities</li>
                <li><span className="text-green-500">✓</span> 1:1 expert consultations</li>
                <li><span className="text-green-500">✓</span> Computational resources</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors whitespace-nowrap" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Join Developer Premium
              </button>
            </div>

            {/* Core Tech */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Core Tech</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$38<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-sm text-gray-600 mb-4">Technical domains</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> 1,000+ courses</li>
                <li><span className="text-green-500">✓</span> Product & platform building</li>
                <li><span className="text-green-500">✓</span> UX & business skills</li>
                <li><span className="text-green-500">✓</span> Certification prep</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Choose Core Tech
              </button>
            </div>

            {/* Complete */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$80<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-sm text-gray-600 mb-4">Most comprehensive</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> 500+ courses</li>
                <li><span className="text-green-500">✓</span> AI, data, cloud, security</li>
                <li><span className="text-green-500">✓</span> Risk-free experimentation</li>
                <li><span className="text-green-500">✓</span> Advanced features</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Get Complete Access
              </button>
            </div>

            {/* Corporate */}
            <div className="bg-white rounded-lg p-6 text-center" style={{
              border: '2px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-sm text-gray-600 mb-4">Enterprise solutions</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li><span className="text-green-500">✓</span> Virtual AI courses</li>
                <li><span className="text-green-500">✓</span> Product expert-led training</li>
                <li><span className="text-green-500">✓</span> Employee upskilling</li>
                <li><span className="text-green-500">✓</span> Scalable for teams</li>
              </ul>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors" style={{ background: 'linear-gradient(90deg, #0066CC 0%, #0D1F2D 100%)' }}>
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support & Benefits Section */}
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Support & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making AI education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/career_launchpad_icon.png"
                  alt="Career Launchpad"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Launchpad</h3>
              <p className="text-gray-600 text-sm">Low-cost certificates and training for eligible nonprofit and government institutions.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/scholarship_and_diversity_icon.png"
                  alt="Scholarships & Diversity"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scholarships & Diversity</h3>
              <p className="text-gray-600 text-sm">Scholarship programs and fully funded internships for underrepresented groups.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/frequent_discounts_icon.png"
                  alt="Frequent Discounts"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Frequent Discounts</h3>
              <p className="text-gray-600 text-sm">Regular promotions and flexible pricing to make AI learning accessible to more people.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/assets/icons/community_forums_icon.png"
                  alt="Community Forums"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Forums</h3>
              <p className="text-gray-600 text-sm">Join our supportive AI community and global learning network.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ borderTop: '2px solid #CED4DA', marginTop: '20px' }}></div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Learners Say
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-sm p-8">
              <div className="flex items-start mb-6">
                <Image
                  src="/assets/icons/priya_sharma_icon.png"
                  alt="Priya Sharma"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Priya Sharma</h3>
                  <p className="text-gray-600 text-sm">AI Engineer, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "After completing the AI & Machine Learning course, I landed a job at a Global Capability Center in Bangalore with a 70% salary increase. The hands-on projects made all the difference in my interviews."
              </p>
              <div className="flex space-x-1">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Global Community Section */}
      <section className="py-20" style={{ background: 'var(--background-color, #F5F5F5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join a Global Community of Learners
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Participate in hackathons, connect with mentors, and showcase your skills on LinkedIn. Learn together, grow together.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Image
                    src="/assets/icons/people.png"
                    alt="People"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Weekly virtual meetups with peers and industry experts</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/assets/icons/monitor.png"
                    alt="Monitor"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Monthly hackathons with real-world challenges and prizes</span>
                </li>
                <li className="flex items-center">
                  <Image
                    src="/assets/icons/handshake.png"
                    alt="Handshake"
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Mentorship from professionals at top tech companies</span>
                </li>
              </ul>
              <button className="text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center" style={{ background: 'var(--button-Color, #CB2128)' }}>
                Join the Community
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/images/community-img.png"
                alt="Community collaboration"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Launch Your Tech Career Section */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #0D1F2D 0%, #0066CC 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of learners landing dream tech jobs with in-demand AI skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white font-bold py-3 px-8 rounded-lg transition-colors hover:bg-red-600" style={{ background: '#EF4444' }}>
              Start Your Tech Journey Today
            </button>
                          <Link href="/courses" className="text-white font-bold py-3 px-8 rounded-lg transition-colors" style={{ background: '#FFFFFF33' }}>
                Explore Courses
              </Link>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 1</span>
            </div>
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 2</span>
            </div>
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 3</span>
            </div>
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 4</span>
            </div>
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 5</span>
            </div>
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">Company 6</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mr-3 overflow-hidden" style={{ width: '32px', height: '32px', borderRadius: '8px' }}>
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
              <p className="text-white mb-6">
                Empowering fresh graduates and early-career professionals with in-demand tech skills for the AI era.
              </p>
              <div className="flex space-x-4">
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Courses</a></li>
                <li><a href="#" className="hover:text-gray-300">Success Stories</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Career Resources</a></li>
                <li><a href="#" className="hover:text-gray-300">Scholarships</a></li>
                <li><a href="#" className="hover:text-gray-300">For Employers</a></li>
                <li><a href="#" className="hover:text-gray-300">Become an Instructor</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-white">
                <p>📧 support@techskill.academy</p>
                <p>📞 +1 (888) 123-4567</p>
                <p>📍 Offices in Bangalore, New York, and London</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <p>© 2024 TechSkill Academy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
