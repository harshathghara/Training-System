'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'

export default function PromotionsPage() {
  const { user } = useAuth();
  
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
              <Link href="/#explore-upskill" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Choose Goals</Link>
              <Link href="/#our-impact" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Our Impact</Link>
              <Link href="/#top-courses" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Top Courses</Link>
              <Link href="/#why-us" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Why Us</Link>
              <Link href="/#pricing" className="text-white hover:text-yellow-400 font-medium flex items-center">Price</Link>
              <Link href="/#community" className="text-white hover:text-yellow-400 font-medium flex items-center">Community</Link>
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

      {/* Promotional Banner Section */}
      <section style={{ background: 'linear-gradient(270deg, #0066CC 0%, #0D1F2D 100%)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white relative">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -mb-16 -ml-16"></div>
              <h1 className="text-5xl font-bold mb-6 leading-tight relative z-10">
                Unlock Extra Benefits with Our Promo Plans
              </h1>
              <p className="text-xl mb-8 text-white opacity-90 relative z-10">
                Learn together, grow together - and save while you're at it!
              </p>
              <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg border border-red-600 hover:bg-gray-100 transition-colors relative z-10">
                Start Exploring Offers
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <Image
                src="/assets/images/promotion.png"
                alt="Group of people learning together"
                width={500}
                height={400}
                className="rounded-lg object-contain"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Just For You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Special Offers Just For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exclusive promotional plans designed to enhance your learning experience and provide additional benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Refer & Earn Card */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex justify-between items-start mb-4">
                <Image
                  src="/assets/icons/refer_and_earn.png"
                  alt="Refer & Earn"
                  width={36}
                  height={40}
                  className="object-contain"
                />
                <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#FF4B4E' }}>Popular</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Refer & Earn</h3>
              <p className="text-gray-600 text-sm mb-4">
                Invite friends to join TechSkill Academy and get exclusive discounts when they enroll. For each successful referral, both you and your friend receive a 20% discount on your next course.
              </p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Your rewards:</p>
                    <p className="font-bold text-red-600">20% OFF next course</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Friend's rewards:</p>
                    <p className="font-bold text-red-600">20% OFF first course</p>
                  </div>
                </div>
              </div>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors mb-3 hover:bg-red-700" style={{ background: '#BB181B' }}>
                Refer Now
              </button>
              <div className="border-t border-gray-200 pt-3 -mx-6 px-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="flex -space-x-2 mr-2">
                    <Image
                      src="/assets/icons/m1.png"
                      alt="Profile 1"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <Image
                      src="/assets/icons/m2.png"
                      alt="Profile 2"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <Image
                      src="/assets/icons/m3.png"
                      alt="Profile 3"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span>3,542 people referred friends this month</span>
                </div>
              </div>
            </div>

            {/* Learn in Groups Card */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <Image
                src="/assets/icons/people.png"
                alt="Learn in Groups"
                width={45}
                height={40}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learn in Groups</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join or create a learning group and enjoy special group discounts on all courses. Perfect for friends, colleagues, or study buddies who want to learn together.
              </p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>3-5 members:</span>
                    <span className="font-bold text-red-600">15% discount</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>6-10 members:</span>
                    <span className="font-bold text-red-600">25% discount</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>10+ members:</span>
                    <span className="font-bold text-red-600">35% discount</span>
                  </div>
                </div>
              </div>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors mb-3 hover:bg-red-700" style={{ background: '#BB181B' }}>
                Join a Group
              </button>
              <div className="border-t border-gray-200 pt-3 -mx-6 px-6">
                              <div className="flex items-center text-sm text-gray-600">
                <Image
                  src="/assets/icons/iii.png"
                  alt="Info"
                  width={16}
                  height={16}
                  className="mr-2 object-contain"
                />
                <span>Currently 158 active learning groups</span>
              </div>
              </div>
            </div>

            {/* Partner with Us Card */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <Image
                src="/assets/icons/partner.png"
                alt="Partner with Us"
                width={45}
                height={40}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner with Us</h3>
              <p className="text-gray-600 text-sm mb-4">
                Are you from a college or university? Partner with TechSkill Academy for tailored academic learning plans and certifications. Help your students gain industry-relevant skills.
              </p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom curriculum aligned with academic goals</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bulk student licenses at discounted rates</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Co-branded certificates for students</span>
                  </li>
                </ul>
              </div>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors mb-3 hover:bg-red-700" style={{ background: '#BB181B' }}>
                Request Partnership Info
              </button>
              <div className="border-t border-gray-200 pt-3 -mx-6 px-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="flex space-x-1 mr-2">
                    <Image
                      src="/assets/icons/educational_institution.png"
                      alt="Educational Institution"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/educational_institution.png"
                      alt="Educational Institution"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/educational_institution.png"
                      alt="Educational Institution"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span>75+ educational institutions already partnered</span>
                </div>
              </div>
            </div>

            {/* Corporate Training Programs Card */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex justify-between items-start mb-4">
                <Image
                  src="/assets/icons/corporate.png"
                  alt="Corporate Training Programs"
                  width={27}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#DBEAFE', color: '#1E40AF' }}>Enterprise</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Training Programs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Upskill your team with our curated enterprise learning tracks and unlock volume discounts. Tailored solutions for businesses of all sizes.
              </p>
              <div className="bg-gray-50 p-3 rounded mb-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom learning paths for different departments</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Progress tracking and reporting dashboard</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition-colors mb-3 hover:bg-red-700" style={{ background: '#BB181B' }}>
                Explore Corporate Plans
              </button>
              <div className="border-t border-gray-200 pt-3 -mx-6 px-6">
                              <div className="flex items-center text-sm text-gray-600">
                <Image
                  src="/assets/icons/ct.png"
                  alt="Corporate Training"
                  width={16}
                  height={16}
                  className="mr-2 object-contain"
                />
                <span>Used by 500+ companies worldwide</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Community Says Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/michael johnson.png"
                  alt="Michael Johnson"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Michael Johnson</h3>
                  <p className="text-sm text-gray-600">Team Lead at TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The group learning feature has transformed how our team approaches professional development. We've seen a 40% improvement in skill retention."
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

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/sarah williams.png"
                  alt="Sarah Williams"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Sarah Williams</h3>
                  <p className="text-sm text-gray-600">Student at Tech University</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The referral program helped me save money while sharing quality education with my friends. It's a win-win for everyone!"
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
                <div className="relative w-5 h-5">
                  <svg className="w-5 h-5 text-gray-300 absolute" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 absolute" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 40% 0 0)' }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <div className="flex items-center mb-4">
                <Image
                  src="/assets/icons/professor.png"
                  alt="Professor James Wilson"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Professor James Wilson</h3>
                  <p className="text-sm text-gray-600">Computer Science Department</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Partnering with this platform has significantly enhanced our curriculum. The corporate training programs are top-notch."
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">How does the referral program work?</h3>
              <p className="text-gray-600">
                When you refer a friend to our platform, both you and your friend receive a 20% discount. You get 20% off your next course, and your friend gets 20% off their first course. Simply share your unique referral link and track your rewards in your dashboard.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I be part of multiple learning groups?</h3>
              <p className="text-gray-600">
                Yes, you can join multiple learning groups! Each group operates independently, and you can participate in different groups for different courses or skills. The group discounts apply to each group separately based on the number of active members.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What's included in the college partnership?</h3>
              <p className="text-gray-600">
                Our college partnership includes custom curriculum aligned with your academic goals, bulk student licenses at discounted rates, co-branded certificates for students, dedicated support, and integration with your existing learning management system.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6" style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 6px 0px #0000001A'
            }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">How do corporate plans differ from individual plans?</h3>
              <p className="text-gray-600">
                Corporate plans include custom learning paths for different departments, progress tracking and reporting dashboard, dedicated account manager, bulk licensing, and enterprise-level support. They're designed to scale with your organization's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Share and Learn Section */}
      <section className="pt-0 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ background: 'linear-gradient(90deg, #0D1F2D 0%, #0066CC 100%)' }} className="rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Share and Learn?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Start inviting, start learning - and make the most out of our community. Join thousands of learners who are already benefiting from our promotional plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white font-bold py-3 px-8 rounded-lg transition-colors hover:bg-red-700" style={{ background: 'var(--button-Color, #CB2128)' }}>
                Get Started
              </button>
              <button 
                className="font-semibold transition-colors" 
                style={{ 
                  width: '195.59375px',
                  height: '56px',
                  borderRadius: '6px',
                  border: '2px solid #FFFFFF',
                  background: 'transparent',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white" style={{ background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
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
              <p className="text-gray-300 mb-6">
                Empowering learners worldwide with cutting-edge tech education and collaborative learning experiences.
              </p>
              <div className="flex space-x-4">
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Courses</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mentorship</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Community</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-white">support@deepmind.edu</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-white">123 Tech Street, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 DeepMind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
