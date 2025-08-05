'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImage from '@/components/ui/ProfileImage'

export default function CartPage() {
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
                             <Link href="/profile">
                 <ProfileImage size="sm" />
               </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">{'>'}</span>
          <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-900">Shopping Cart</span>
        </nav>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/react_course.png"
                      alt="React Development Course"
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">Complete React Development Course</h3>
                    <p className="text-sm text-gray-600">By John Anderson</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <Image
                          src="/assets/icons/timer.png"
                          alt="Timer"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-sm text-gray-500">42 hours</span>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/icons/lect.png"
                          alt="Lectures"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-sm text-gray-500">156 lectures</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-gray-900">$89.99</span>
                    <button className="text-red-500 hover:text-red-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/images/python_for_ds.png"
                      alt="Python for Data Science"
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">Python for Data Science</h3>
                    <p className="text-sm text-gray-600">By Sarah Wilson</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <Image
                          src="/assets/icons/timer.png"
                          alt="Timer"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-sm text-gray-500">38 hours</span>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/assets/icons/lect.png"
                          alt="Lectures"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        <span className="text-sm text-gray-500">142 lectures</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-bold text-gray-900">$79.99</span>
                    <button className="text-red-500 hover:text-red-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="pt-4">
                <Link href="/courses" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">2 Courses</span>
                  <span className="text-gray-900">$169.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span style={{ color: '#16A34A' }}>-$20.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold" style={{ color: '#DC2626' }}>$149.98</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-300" style={{ background: '#F3F4F6', border: '1px solid #E5E7EB' }}>
                    Apply
                  </button>
                </div>
              </div>

              {/* Place Order Button */}
              <button className="w-full text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 mb-4" style={{ background: '#DC2626' }}>
                Place Order
              </button>

              {/* Security Information */}
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center text-sm text-gray-700">
                  <svg className="w-4 h-4 mr-2" style={{ color: '#16A34A' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Secure Payment
                </div>
                <div className="flex items-center justify-center text-sm text-gray-700">
                  <svg className="w-4 h-4 mr-2" style={{ color: '#16A34A' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  SSL Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
