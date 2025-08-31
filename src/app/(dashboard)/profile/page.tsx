'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function ProfilePage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false)

  const renderDashboardContent = () => (
    <>
      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
              <Image
                src="/assets/icons/priya_sharma_icon.png"
                alt="Priya Sharma"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, Sarah!</h2>
              <p className="text-gray-600">Ready to continue your learning journey?</p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center font-semibold">
            <span className="mr-2">▶</span>
            Resume Learning
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_ec.png"
                alt="Enrolled Courses"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-gray-600 text-sm">Enrolled Courses</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_ce.png"
                alt="Certificates Earned"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">8</p>
              <p className="text-gray-600 text-sm">Certificates Earned</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_wi.png"
                alt="Wishlist Items"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
             <p className="text-2xl font-bold text-gray-800">24</p>
              <p className="text-gray-600 text-sm">Wishlist Items</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_op.png"
                alt="Orders Placed"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">15</p>
              <p className="text-gray-600 text-sm">Orders Placed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Continue Learning</h3>
          <a href="#" className="text-red-600 hover:text-red-700 font-medium">View All</a>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
          <Image
            src="/assets/images/profile_page_img1.png"
                alt="Machine Learning Fundamentals"
                width={400}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-gray-800 mb-3">Machine Learning Fundamentals</h4>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue</button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/profile_page_img2.png"
                alt="Python for Data Science"
                width={400}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-gray-800 mb-3">Python for Data Science</h4>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue</button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/profile_page_img3.png"
                alt="Deep Learning Specialization"
                width={400}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-gray-800 mb-3">Deep Learning Specialization</h4>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '20%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue</button>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
        
              <div className="space-y-4">
                <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_completed_lesson.png"
                alt="Completed Lesson"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Completed lesson 'Neural Network Basics'</p>
              <p className="text-sm text-gray-600">Machine Learning Fundamentals</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
          
                <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_enrolled_in_advanced_statistics.png"
                alt="Enrolled in Advanced Statistics"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Enrolled in 'Advanced Statistics'</p>
              <p className="text-sm text-gray-600">Data Science Track</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
                </div>
          
                <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_earned_certificate_for_python_basics.png"
                alt="Earned Certificate for Python Basics"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Earned certificate for 'Python Basics'</p>
              <p className="text-sm text-gray-600">Programming Foundation</p>
            </div>
            <span className="text-sm text-gray-500">3 days ago</span>
                </div>
          
                <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Image
                src="/assets/icons/dashboard_added_ai_eihics_to_wishlist.png"
                alt="Added AI Ethics to Wishlist"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">Added 'AI Ethics' to wishlist</p>
              <p className="text-sm text-gray-600">Philosophy & AI Track</p>
            </div>
            <span className="text-sm text-gray-500">1 week ago</span>
          </div>
        </div>
                </div>
    </>
  )

  const renderProfileContent = () => (
    <>
      {/* Profile Editing Form */}
      <div className="space-y-6">
        {/* Basic Information Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
              <div className="mr-2">
                <Image
                  src="/assets/icons/d_mp_bi.png"
                  alt="Basic Information"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h3 className="text-gray-800" style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0%'
              }}>Basic Information</h3>
            </div>
            <span className="text-gray-400">▼</span>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue="Giridhara Anandkrishna"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
                </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <div className="relative">
                <input 
                  type="date" 
                  defaultValue="1995-06-15"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">📅</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                  <Image
                    src="/assets/icons/priya_sharma_icon.png"
                    alt="Priya Sharma"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm">
                  <span className="mr-2">⬆</span>
                  Upload New
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="mr-2">
                <Image
                  src="/assets/icons/d_mp_ci.png"
                  alt="Contact Information"
                  width={18}
                  height={18}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            </div>
            <span className="text-gray-400">▼</span>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="giridhara@deepmind.edu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input 
                type="tel" 
                defaultValue="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Address Information Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                <div className="mr-2">
                  <Image
                    src="/assets/icons/d_mp_ai.png"
                    alt="Address Information"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Address Information</h3>
              </div>
            <span className="text-gray-400">▼</span>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea 
                rows={3}
                defaultValue="123 Tech Street, Silicon Valley"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input 
                type="text" 
                defaultValue="California"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>India</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
              <input 
                type="text" 
                defaultValue="94043"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center font-semibold">
            <div className="mr-2">
              <Image
                src="/assets/icons/d_mp_up.png"
                alt="Update Profile"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </div>
            Update Profile
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 flex items-center font-semibold">
            <span className="mr-2">✕</span>
            Cancel
          </button>
        </div>
      </div>
          </>
    )

    const renderOrderHistoryContent = () => (
      <>
        {/* Filter and Sort Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Recent</option>
                    <option>Oldest</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                  <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium">Status:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>All Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Refunded</option>
                  </select>
                  <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-sm">Showing 5 orders</div>
          </div>
        </div>

        {/* Order History Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
              <div>Order ID</div>
              <div>Course</div>
              <div>Date</div>
              <div>Price</div>
              <div>Status</div>
              <div>Action</div>
            </div>
          </div>

          {/* Order Rows */}
          <div className="divide-y divide-gray-200">
            {/* Order 1: Machine Learning Fundamentals */}
            <div className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="text-red-600 font-medium">#ORD-2024-001</div>
                                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                     <Image
                       src="/assets/images/oh1.png"
                       alt="Machine Learning Fundamentals"
                       width={48}
                       height={48}
                       className="w-full h-full object-cover rounded-lg"
                     />
                   </div>
                   <span className="text-gray-800 font-medium">Machine Learning Fundamentals</span>
                 </div>
                <div className="text-gray-600">Jan 15, 2024</div>
                <div className="font-semibold text-gray-800">$299.00</div>
                <div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Completed</span>
                </div>
                <div>
                  <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50">View Invoice</button>
                </div>
              </div>
            </div>

            {/* Order 2: Deep Learning Mastery */}
            <div className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="text-red-600 font-medium">#ORD-2024-002</div>
                                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                     <Image
                       src="/assets/images/oh2.png"
                       alt="Deep Learning Mastery"
                       width={48}
                       height={48}
                       className="w-full h-full object-cover rounded-lg"
                     />
                   </div>
                   <span className="text-gray-800 font-medium">Deep Learning Mastery</span>
                 </div>
                <div className="text-gray-600">Jan 20, 2024</div>
                <div className="font-semibold text-gray-800">$399.00</div>
                <div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">Pending</span>
                </div>
                <div>
                  <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50">View Invoice</button>
                </div>
              </div>
            </div>

            {/* Order 3: Python for Data Science */}
            <div className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 items-center">
                <div className="text-red-600 font-medium">#ORD-2023-045</div>
                                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                     <Image
                       src="/assets/images/oh3.png"
                       alt="Python for Data Science"
                       width={48}
                       height={48}
                       className="w-full h-full object-cover rounded-lg"
                     />
                   </div>
                   <span className="text-gray-800 font-medium">Python for Data Science</span>
                 </div>
                <div className="text-gray-600">Dec 10, 2023</div>
                <div className="font-semibold text-gray-800">$199.00</div>
                <div>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Refunded</span>
                </div>
                <div>
                  <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50">View Invoice</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              ←
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-lg font-medium">1</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              →
            </button>
          </div>
        </div>
      </>
    )
  
    const renderEnrolledCoursesContent = () => (
    <>
      {/* Course Filtering and Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option>All Courses</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
            <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option>Sort by Progress</option>
              <option>Sort by Name</option>
              <option>Sort by Date</option>
            </select>
            <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Course 1: Machine Learning Fundamentals */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Image
                src="/assets/images/ec1.png"
                alt="Machine Learning Fundamentals"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              87% Complete
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Machine Learning Fundamentals</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. Andrew Martinez • 8 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue Learning</button>
          </div>
        </div>

        {/* Course 2: Deep Learning Specialization */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Image
                src="/assets/images/ec2.png"
                alt="Deep Learning Specialization"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
                </div>
            <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
              45% Complete
                </div>
                </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Deep Learning Specialization</h3>
            <p className="text-gray-600 text-sm mb-3">Prof. Sarah Kim • 12 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>45%</span>
                </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue Learning</button>
            </div>
          </div>

        {/* Course 3: Python for Data Science */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
              <Image
                src="/assets/images/ec3.png"
                alt="Python for Data Science"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              23% Complete
                </div>
                </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Python for Data Science</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. Michael Chen • 6 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>23%</span>
                </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue Learning</button>
              </div>
            </div>

        {/* Course 4: AI Ethics & Society */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Image
                src="/assets/images/ec4.png"
                alt="AI Ethics & Society"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              100% Complete
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">AI Ethics & Society</h3>
            <p className="text-gray-600 text-sm mb-3">Prof. Lisa Wang • 4 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            <button className="w-full bg-gray-500 text-white py-2 rounded-lg text-sm font-medium">Completed</button>
          </div>
        </div>

        {/* Course 5: Data Visualization */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-orange-500 flex items-center justify-center">
                <Image
                src="/assets/images/ec5.png"
                alt="Data Visualization"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
              67% Complete
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Data Visualization</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. James Rodriguez • 5 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>67%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '67%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue Learning</button>
              </div>
            </div>

        {/* Course 6: Blockchain Fundamentals */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Image
                src="/assets/images/ec6.png"
                alt="Blockchain Fundamentals"
                width={400}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              12% Complete
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Blockchain Fundamentals</h3>
            <p className="text-gray-600 text-sm mb-3">Prof. Alex Thompson • 7 weeks</p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>12%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '12%'}}></div>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Continue Learning</button>
          </div>
                  </div>
                </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            ←
          </button>
          <button className="px-3 py-2 bg-red-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            →
          </button>
                  </div>
                </div>
    </>
  )

  const renderWishlistContent = () => (
    <>
      {/* Filter and Sort Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
                <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Recently Added</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
                  </div>
                </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Filter by:</span>
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>AI & Machine Learning</option>
                  <option>Data Science</option>
                  <option>Programming</option>
                  <option>Philosophy</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
          </div>
          <div className="text-gray-600 font-medium">
            5 courses in wishlist
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Course 1: Deep Learning Fundamentals */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-40 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
              <Image
                src="/assets/images/wl1.png"
                alt="Deep Learning Fundamentals"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex space-x-2 mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">AI</span>
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-medium">Advanced</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Deep Learning Fundamentals</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. Sarah Chen</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>12 hours</span>
              <span>24 lessons</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Add to Cart</button>
          </div>
        </div>

        {/* Course 2: Data Science Essentials */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <Image
                src="/assets/images/wl2.png"
                alt="Data Science Essentials"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex space-x-2 mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">Data Science</span>
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Beginner</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Data Science Essentials</h3>
            <p className="text-gray-600 text-sm mb-3">Prof. Michael Zhang</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>8 hours</span>
              <span>16 lessons</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Add to Cart</button>
          </div>
        </div>

        {/* Course 3: AI Ethics & Philosophy */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-40 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
              <Image
                src="/assets/images/wl3.png"
                alt="AI Ethics & Philosophy"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex space-x-2 mb-2">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">Philosophy</span>
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">Intermediate</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">AI Ethics & Philosophy</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. Emma Watson</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>6 hours</span>
              <span>12 lessons</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Add to Cart</button>
          </div>
        </div>

        {/* Course 4: Advanced Machine Learning */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-40 bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center">
              <Image
                src="/assets/images/wl4.png"
                alt="Advanced Machine Learning"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex space-x-2 mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">AI</span>
              <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-medium">Expert</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Advanced Machine Learning</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. James Wilson</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>15 hours</span>
              <span>30 lessons</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Add to Cart</button>
          </div>
        </div>

        {/* Course 5: Computer Vision Mastery */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="relative">
            <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <Image
                src="/assets/images/wl5.png"
                alt="Computer Vision Mastery"
                width={400}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex space-x-2 mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">AI</span>
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-medium">Advanced</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Computer Vision Mastery</h3>
            <p className="text-gray-600 text-sm mb-3">Dr. Lisa Park</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>10 hours</span>
              <span>20 lessons</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  )

  const renderCertificatesContent = () => (
    <>
      {/* Filter and Sort Bar */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Recently Earned</option>
                  <option>Alphabetical</option>
                  <option>Date Earned</option>
                  <option>Category</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">Filter by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>AI & Machine Learning</option>
                  <option>Data Science</option>
                  <option>Programming</option>
                  <option>Philosophy</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
          </div>
          <div className="text-gray-600 font-medium">
            3 certificates earned
          </div>
        </div>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Certificate 1: Machine Learning Fundamentals */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ width: '352px', height: '466px' }}>
          <div className="relative">
            <div 
              className="absolute"
              style={{
                width: '304px',
                height: '192px',
                top: '24px',
                left: '24px',
                opacity: 1
              }}
            >
              <Image
                src="/assets/images/c1.png"
                alt="Machine Learning Fundamentals"
                width={304}
                height={192}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              100% Complete
            </div>
          </div>
          <div className="p-6 mt-48">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Machine Learning Fundamentals</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">📅</span>
                <span>Issued: Dec 15, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">🆔</span>
                <span>ID: ML-2024-001</span>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg text-sm font-medium mb-3 flex items-center justify-center">
              <span className="mr-2">👁️</span>
              View Certificate
            </button>
            <div className="flex space-x-2">
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">📄</span>
                PDF
              </button>
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">🔗</span>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Certificate 2: Data Science Analytics */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ width: '352px', height: '466px' }}>
          <div className="relative">
            <div 
              className="absolute"
              style={{
                width: '304px',
                height: '192px',
                top: '24px',
                left: '24px',
                opacity: 1
              }}
            >
              <Image
                src="/assets/images/c2.png"
                alt="Data Science Analytics"
                width={304}
                height={192}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              100% Complete
            </div>
          </div>
          <div className="p-6 mt-48">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Data Science Analytics</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">📅</span>
                <span>Issued: Nov 28, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">🆔</span>
                <span>ID: DS-2024-002</span>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg text-sm font-medium mb-3 flex items-center justify-center">
              <span className="mr-2">👁️</span>
              View Certificate
            </button>
            <div className="flex space-x-2">
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">📄</span>
                PDF
              </button>
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">🔗</span>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Certificate 3: Neural Networks & Deep Learning */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ width: '352px', height: '466px' }}>
          <div className="relative">
            <div 
              className="absolute"
              style={{
                width: '304px',
                height: '192px',
                top: '24px',
                left: '24px',
                opacity: 1
              }}
            >
              <Image
                src="/assets/images/c3.png"
                alt="Neural Networks & Deep Learning"
                width={304}
                height={192}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
              100% Complete
            </div>
          </div>
          <div className="p-6 mt-48">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Neural Networks & Deep Learning</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">📅</span>
                <span>Issued: Oct 10, 2024</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-2">🆔</span>
                <span>ID: NN-2024-003</span>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg text-sm font-medium mb-3 flex items-center justify-center">
              <span className="mr-2">👁️</span>
              View Certificate
            </button>
            <div className="flex space-x-2">
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">📄</span>
                PDF
              </button>
              <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-300 flex items-center justify-center">
                <span className="mr-2">🔗</span>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderAccountSecurityContent = () => (
    <>
      {/* Account & Security Sections */}
      <div className="space-y-6">
        {/* Main Account & Security Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-gray-800 mb-6" style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}>Account & Security</h4>
          
          {/* User Credentials Section */}
          <div className="mb-8">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input 
                  type="text" 
                  defaultValue="alex.johnson"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="alex.johnson@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Update</button>
            </div>
          </div>
          
          {/* Linked Accounts Section */}
          <div>
            <h5 className="text-md font-semibold text-gray-800 mb-4">Linked Accounts</h5>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                    <Image
                      src="/assets/icons/setting_google.png"
                      alt="Google"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-800">Google</span>
                </div>
                <button className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium">Connected</button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                    <Image
                      src="/assets/icons/setting_linkedin.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-800">LinkedIn</span>
                </div>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">Connect</button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                    <Image
                      src="/assets/icons/setting_github.png"
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-medium text-gray-800">GitHub</span>
                </div>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">Connect</button>
              </div>
            </div>
          </div>
        </div>

        {/* Password Management Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Password Management</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Update Password</button>
          </div>
        </div>

        {/* Two-Factor Authentication Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h4>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>
          <p className="text-gray-600 mb-2">Add an extra layer of security to your account</p>
          <p className="text-sm text-gray-500 mb-2">Status: Disabled</p>
          <p className="text-sm text-gray-500">Enable 2FA to secure your account with SMS verification or authenticator app.</p>
        </div>

        {/* Recent Login Activity Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Login Activity</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Chrome on Windows</p>
                <p className="text-sm text-gray-600">New York, NY • 192.168.1.1</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Safari on iPhone</p>
                <p className="text-sm text-gray-600">New York, NY • 192.168.1.2</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Firefox on Mac</p>
                <p className="text-sm text-gray-600">San Francisco, CA • 10.0.0.1</p>
              </div>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Security Actions Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Security Actions</h4>
          <div className="space-y-4">
            <button className="flex items-center px-4 py-2 border border-red-300 bg-white text-gray-700 hover:bg-red-50 rounded-lg font-medium">
              <div className="mr-2">
                <Image
                  src="/assets/icons/setting_logout.png"
                  alt="Logout"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </div>
              Log out of all devices
            </button>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-semibold text-red-800 mb-2">Danger Zone</h5>
              <p className="text-sm text-red-700 mb-3">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <div className="mr-2">
                  <Image
                    src="/assets/icons/setting_delete.png"
                    alt="Delete Account"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderNotificationsContent = () => (
    <>

      {/* Notifications Content - Two Column Layout */}
      {/* Master Control Card - Full Span */}
      <div className="mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Master Control</h4>
              <p className="text-sm text-gray-600">Enable or disable all notifications at once</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Notification Categories */}
        <div className="space-y-4">

          {/* Course Updates Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/notifications_cu.png"
                  alt="Course Updates"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Course Updates</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">New course announcements</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Course progress reminders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Assignment or quiz due reminders</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Account & Security Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/notifications_as.png"
                  alt="Account & Security"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Account & Security</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Login alerts from new devices</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Password change confirmation</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Security updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Promotions & Offers Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/notifications_po.png"
                  alt="Promotions & Offers"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Promotions & Offers</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Special discounts and promotions</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Personalized course recommendations</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Partner offers</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* System Notifications Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/notifications_sn.png"
                  alt="System Notifications"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">System Notifications</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Platform updates and news</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Maintenance downtime alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Notification Channels */}
        <div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                <Image
                  src="/assets/icons/notifications_nc.png"
                  alt="Notification Channels"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">Notification Channels</h4>
            </div>
            
            {/* Course reminders */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-700 mb-3">Course reminders:</h5>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Push</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <span className="ml-2 text-sm text-gray-700">SMS</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">In-app</span>
                </label>
              </div>
            </div>

            {/* Security alerts */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-700 mb-3">Security alerts:</h5>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <span className="ml-2 text-sm text-gray-700">Push</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">SMS</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">In-app</span>
                </label>
              </div>
            </div>

            {/* Promotions */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-3">Promotions:</h5>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <span className="ml-2 text-sm text-gray-700">Promotions</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderPreferencesContent = () => (
    <>

      {/* Preferences Settings - 2x2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Theme & Display Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
              <Image
                src="/assets/icons/p_td.png"
                alt="Theme & Display"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Theme & Display</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">Dark Mode</span>
                <p className="text-sm text-gray-600">Switch between light and dark themes.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            
            <div>
              <span className="font-medium text-gray-800 mb-2 block">Font Size</span>
              <div className="flex space-x-2">
                <button className="text-white text-sm font-medium" style={{
                  background: '#CB2128',
                  border: '1px solid #E5E7EB',
                  width: '71.890625px',
                  height: '36px',
                  borderRadius: '8px',
                  opacity: 1
                }}>Small</button>
                <button className="text-gray-800 text-sm font-medium" style={{
                  border: '1px solid #E5E7EB',
                  background: '#F3F4F6',
                  width: '89.8125px',
                  height: '36px',
                  borderRadius: '8px',
                  opacity: 1
                }}>Medium</button>
                <button className="text-gray-800 text-sm font-medium" style={{
                  background: '#F3F4F6',
                  border: '1px solid #E5E7EB',
                  width: '71.21875px',
                  height: '36px',
                  borderRadius: '8px',
                  opacity: 1
                }}>Large</button>
              </div>
            </div>
            
            <div>
              <span className="font-medium text-gray-800 mb-2 block">Layout Density</span>
              <div className="flex space-x-2">
                <button className="text-white text-sm font-medium" style={{
                  width: '121.796875px',
                  height: '36px',
                  borderRadius: '8px',
                  opacity: 1,
                  background: '#CB2128',
                  border: '1px solid #E5E7EB'
                }}>Comfortable</button>
                <button className="text-gray-800 text-sm font-medium" style={{
                  width: '98.90625px',
                  height: '36px',
                  borderRadius: '8px',
                  opacity: 1,
                  background: '#F3F4F6',
                  border: '1px solid #E5E7EB'
                }}>Compact</button>
              </div>
            </div>
          </div>
        </div>

        {/* Language & Region Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
              <Image
                src="/assets/icons/p_lr.png"
                alt="Language & Region"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Language & Region</h4>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none">
                  <option>Auto-detect (IST)</option>
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Preferences Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
              <Image
                src="/assets/icons/p_lp.png"
                alt="Learning Preferences"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Learning Preferences</h4>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Playback Speed</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none">
                  <option>1x (Normal)</option>
                  <option>0.75x (Slow)</option>
                  <option>1.25x (Fast)</option>
                  <option>1.5x (Faster)</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">Auto-play Next Lesson</span>
                <p className="text-sm text-gray-600">Automatically start the next lesson.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">Enable Subtitles by Default</span>
                <p className="text-sm text-gray-600">Show subtitles when available.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle Language</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
                <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Settings Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
              <Image
                src="/assets/icons/p_as.png"
                alt="Accessibility Settings"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Accessibility Settings</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">High-contrast Mode</span>
                <p className="text-sm text-gray-600">Enhance visual contrast for better readability.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">Screen Reader Optimization</span>
                <p className="text-sm text-gray-600">Optimize interface for screen readers.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-800">Keyboard Navigation Support</span>
                <p className="text-sm text-gray-600">Enable enhanced keyboard navigation.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-red-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium">
          Save Preferences
        </button>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium border border-gray-300">
          Reset to Default
        </button>
      </div>
    </>
  )

  const renderBillingContent = () => (
    <>
      {/* Billing Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Current Plan, Payment Methods, Subscription Options */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Plan Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Current Plan</h4>
            
            <div className="border border-red-200 bg-red-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-gray-800">Premium Plan</h5>
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-gray-600">Renewal Date: March 15, 2024</div>
                <div className="text-sm text-gray-600">Billing Cycle: Monthly</div>
                <div className="text-xl font-bold text-gray-800">$29.99/month</div>
              </div>
              <div className="flex space-x-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium">
                  Upgrade Plan
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 font-medium">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Payment Methods Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment Methods</h4>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                    <Image
                      src="/assets/icons/bs_visa.png"
                      alt="Visa"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Visa ending in 4242</div>
                    <div className="text-sm text-gray-600">Expires 12/2025</div>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Image
                    src="/assets/icons/bs_delete.png"
                    alt="Delete"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                    <Image
                      src="/assets/icons/bs_paypal.png"
                      alt="PayPal"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">PayPal</div>
                    <div className="text-sm text-gray-600">john.doe@email.com</div>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Image
                    src="/assets/icons/bs_delete.png"
                    alt="Delete"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </button>
              </div>
            </div>
            
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-center">
              <span className="mr-2">+</span>
              Add New Payment Method
            </button>
          </div>

          {/* Subscription Options Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Subscription Options</h4>
            
            {/* Billing Period Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md font-medium">
                Monthly
              </button>
              <button className="flex-1 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-200">
                Yearly
              </button>
            </div>
            
            {/* Plan Comparison */}
            <div className="grid grid-cols-3 gap-4">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h5 className="font-semibold text-gray-800 mb-2">Free</h5>
                <div className="text-2xl font-bold text-gray-800 mb-3">
                  <span>$0</span>
                  <span className="text-sm text-gray-500 font-normal"> /month</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• 3 courses access</li>
                  <li>• Basic support</li>
                  <li>• Limited features</li>
                </ul>
              </div>
              
              {/* Standard Plan */}
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h5 className="font-semibold text-gray-800 mb-2">Standard</h5>
                <div className="text-2xl font-bold text-gray-800 mb-3">
                  <span>$19.99</span>
                  <span className="text-sm text-gray-500 font-normal"> /month</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• 50 courses access</li>
                  <li>• Priority support</li>
                  <li>• Advanced features</li>
                </ul>
              </div>
              
              {/* Premium Plan */}
              <div className="border-2 border-red-600 rounded-lg p-4 text-center relative">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">Active</span>
                <h5 className="font-semibold text-gray-800 mb-2">Premium</h5>
                <div className="text-2xl font-bold text-gray-800 mb-3">
                  <span>$29.99</span>
                  <span className="text-sm text-gray-500 font-normal"> /month</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Unlimited courses</li>
                  <li>• 24/7 support</li>
                  <li>• All features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Billing History & Security */}
        <div className="space-y-6">
          {/* Billing History Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Billing History</h4>
            
            <div className="space-y-3">
              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">#INV-2024-001</div>
                  <div className="text-sm text-gray-600 mb-2">Feb 15, 2024</div>
                  <button className="text-red-600 hover:text-red-700 text-sm flex items-center">
                    <span className="mr-1">⬇</span>
                    Download Invoice
                  </button>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">$29.99</div>
                  <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">Paid</div>
                </div>
              </div>
              
              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">#INV-2024-002</div>
                  <div className="text-sm text-gray-600 mb-2">Jan 15, 2024</div>
                  <button className="text-red-600 hover:text-red-700 text-sm flex items-center">
                    <span className="mr-1">⬇</span>
                    Download Invoice
                  </button>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">$29.99</div>
                  <div className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">Paid</div>
                </div>
              </div>
              
              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">#INV-2023-045</div>
                  <div className="text-sm text-gray-600 mb-2">Dec 15, 2023</div>
                  <button className="text-red-600 hover:text-red-700 text-sm flex items-center">
                    <span className="mr-1">⬇</span>
                    Download Invoice
                  </button>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">$29.99</div>
                  <div className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">Failed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Security</h4>
            
            <div className="flex items-center text-green-600">
              <div className="mr-3">
                <Image
                  src="/assets/icons/bs_security.png"
                  alt="Security"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">
                All transactions are secured and encrypted with industry-standard SSL protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div 
        style={{ 
          width: '256px',
          opacity: 1,
          borderRight: '1px solid #E5E7EB',
          background: '#FFFFFF',
          boxShadow: '0px 1px 2px 0px #0000000D'
        }}
        className="flex-shrink-0"
      >
        {/* DeepMind Logo and Header */}
        <div 
          style={{
            width: '255px',
            height: '81px',
            opacity: 1,
            borderBottomWidth: '1px',
            borderBottomColor: '#E5E7EB'
          }}
          className="p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 rounded mr-3 overflow-hidden">
              <Image
                src="/assets/icons/Deepmind_icon.png"
                alt="DeepMind Icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">DeepMind</h1>
              <p className="text-sm text-gray-500">Powered by Areta360</p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="px-6 mb-6 mt-8">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-3 overflow-hidden">
              <Image
                src="/assets/icons/sarah williams.png"
                alt="Sarah Williams"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Sarah Johnson</h2>
              <p className="text-sm text-gray-500">Premium Member</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-6">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveView('dashboard')}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeView === 'dashboard' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="mr-3">
                  <Image
                    src="/assets/icons/profile_dashboard.png"
                    alt="Dashboard"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('profile')}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeView === 'profile' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="mr-3">
                  <Image
                    src="/assets/icons/profile_my_profile.png"
                    alt="My Profile"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                My Profile
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('enrolled-courses')}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeView === 'enrolled-courses' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="mr-3">
                  <Image
                    src="/assets/icons/profile_enrolled_courses.png"
                    alt="Enrolled Courses"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                Enrolled Courses
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('wishlist')}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeView === 'wishlist' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="mr-3">
                  <Image
                    src="/assets/icons/profile_wishlist.png"
                    alt="Wishlist"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                Wishlist
              </button>
            </li>
                          <li>
                <button 
                  onClick={() => setActiveView('order-history')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg ${
                    activeView === 'order-history' 
                      ? 'text-red-600 bg-red-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="mr-3">
                    <Image
                      src="/assets/icons/profile_order_history.png"
                      alt="Order History"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  Order History
                </button>
              </li>
            <li>
              <button 
                onClick={() => setActiveView('certificates')}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  activeView === 'certificates' 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3">⭐</span>
                Certificates
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsSettingsExpanded(!isSettingsExpanded)}
                className={`w-full flex items-center px-3 py-2 rounded-lg ${
                  isSettingsExpanded 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="mr-3">
                  <Image
                    src="/assets/icons/profile_settings.png"
                    alt="Settings"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                Settings
                <span className={`ml-auto transition-transform ${isSettingsExpanded ? 'rotate-90' : ''}`}>▶️</span>
              </button>
              
              {/* Settings Dropdown */}
              {isSettingsExpanded && (
                <ul className="mt-2 space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveView('account-security')}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeView === 'account-security' 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="mr-3">
                        <Image
                          src="/assets/icons/profile_account_and_security_icon.png"
                          alt="Account & Security"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      Account & Security
                      {activeView === 'account-security' && (
                        <div className="ml-auto w-1 h-6 bg-red-600 rounded-full"></div>
                      )}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveView('notifications')}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeView === 'notifications' 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="mr-3">
                        <Image
                          src="/assets/icons/profile_notifications_icon.png"
                          alt="Notifications"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      Notifications
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveView('preferences')}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeView === 'preferences' 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="mr-3">
                        <Image
                          src="/assets/icons/profile_preferences_icon.png"
                          alt="Preferences"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      Preferences
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveView('billing')}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeView === 'billing' 
                          ? 'text-red-600 bg-red-50' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="mr-3">
                        <Image
                          src="/assets/icons/profile_billing_and_subscription_icon.png"
                          alt="Billing & Subscription"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      Billing & Subscription
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div 
        className="flex flex-col flex-1"
        style={{ 
          background: '#FFFFFF'
        }}
      >
        {/* Top Right Section Header */}
        <div 
          style={{
            height: '109px',
            opacity: 1,
            borderBottomWidth: '1px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E5E7EB',
            boxShadow: '0px 1px 2px 0px #0000000D'
          }}
          className="flex items-center justify-between px-8"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              {activeView === 'wishlist' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_wishlist.png"
                    alt="Wishlist"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'order-history' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_order_history.png"
                    alt="Order History"
                    width={26.25}
                    height={36}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'certificates' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_certificates.png"
                    alt="Certificates"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'account-security' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_settings.png"
                    alt="Settings"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'notifications' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_notifications.png"
                    alt="Notifications"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'preferences' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_preferences.png"
                    alt="Preferences"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'billing' && (
                <div className="mr-3">
                  <Image
                    src="/assets/icons/p_billing_and_subscriptions.png"
                    alt="Billing & Subscription"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
              {activeView === 'dashboard' ? 'Dashboard' : activeView === 'profile' ? 'My Profile' : activeView === 'enrolled-courses' ? 'Enrolled Courses' : activeView === 'wishlist' ? 'Wishlist' : activeView === 'order-history' ? 'Order History' : activeView === 'certificates' ? 'Certificates' : activeView === 'account-security' ? 'Settings' : activeView === 'notifications' ? 'Notifications' : activeView === 'preferences' ? 'Preferences' : activeView === 'billing' ? 'Billing & Subscription' : 'Settings'}
            </h1>
            <p className="text-gray-600 mt-1">
              {activeView === 'dashboard' 
                ? 'Track your learning progress and achievements' 
                : activeView === 'profile'
                ? 'Manage your personal information and preferences'
                : activeView === 'enrolled-courses'
                ? 'Continue your learning journey'
                : activeView === 'wishlist'
                ? ''
                : activeView === 'order-history'
                ? ''
                : activeView === 'certificates'
                ? ''
                : activeView === 'account-security'
                ? 'Manage your account security settings'
                : activeView === 'notifications'
                ? ''
                : activeView === 'preferences'
                ? 'Customize your learning experience and platform settings'
                : activeView === 'billing'
                ? ''
                : 'Manage your account settings and preferences'
              }
            </p>
          </div>
          {activeView === 'dashboard' && (
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
              <span className="mr-2">+</span>
              New Course
            </button>
          )}
        </div>
        
                {/* Content Area */}
        <div className="flex-1 p-8">
          {activeView === 'dashboard' 
            ? renderDashboardContent() 
            : activeView === 'profile' 
            ? renderProfileContent() 
            : activeView === 'enrolled-courses'
            ? renderEnrolledCoursesContent()
            : activeView === 'wishlist'
            ? renderWishlistContent()
            : activeView === 'order-history'
            ? renderOrderHistoryContent()
            : activeView === 'certificates'
            ? renderCertificatesContent()
            : activeView === 'account-security'
            ? renderAccountSecurityContent()
            : activeView === 'notifications'
            ? renderNotificationsContent()
            : activeView === 'preferences'
            ? renderPreferencesContent()
            : activeView === 'billing'
            ? renderBillingContent()
            : renderDashboardContent()
          }
        </div>
       </div>
     </div>
   )
}