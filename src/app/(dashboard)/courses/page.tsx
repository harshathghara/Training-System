'use client'

import React from 'react';
import { Search, Star, Users, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../../../contexts/AuthContext';

interface Course {
  id: number;
  title: string;
  instructor: string;
  modules: number;
  lessons: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  color: 'blue' | 'yellow' | 'orange';
}

const Areta360Homepage = () => {
  const { user } = useAuth();
  
  const courses: Course[] = [
    {
      id: 1,
      title: "Complete Machine Learning Bootcamp",
      instructor: "Dr. Sarah Chen",
      modules: 14,
      lessons: 95,
      rating: 4.7,
      reviews: 1856,
      image: "/assets/images/course-img-1.png",
      badge: "Professional Certificate",
      color: "blue"
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Prof. Michael Rodriguez",
      modules: 8,
      lessons: 42,
      rating: 4.7,
      reviews: 1856,
      image: "/assets/images/course-img-2.png",
      badge: null,
      color: "yellow"
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      instructor: "Dr. Emma Watson",
      modules: 20,
      lessons: 156,
      rating: 4.8,
      reviews: 3245,
      image: "/assets/images/course-img-3.png",
      badge: null,
      color: "orange"
    },
    {
      id: 4,
      title: "Deep Learning Specialization",
      instructor: "Dr. Emma Watson",
      modules: 20,
      lessons: 156,
      rating: 4.8,
      reviews: 3245,
      image: "/assets/images/course-img-3.png",
      badge: null,
      color: "orange"
    }
  ];

  const CourseCard = ({ course, showBadge = true }: { course: Course; showBadge?: boolean }) => (
    <Link href="/course_description">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        {/* Google Logo for first card only */}
        {course.id === 1 && (
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
        )}
        
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 tracking-wide">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2 tracking-wide">{course.instructor}</p>
        
        <div className="text-xs text-gray-500 mb-3">
          {course.modules} modules • {course.lessons} lessons
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-gray-500">({course.reviews})</span>
          </div>
        </div>
        
        {showBadge && course.badge && (
          <div className="mt-auto pt-3 flex items-center text-xs text-gray-600">
            <div className="w-4 h-4 mr-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                {/* Circle with star */}
                <circle cx="12" cy="8" r="4" stroke="currentColor" fill="none"/>
                <path d="M12 4L13.09 6.26L15.5 6.5L13.59 8.24L14.18 10.5L12 9.5L9.82 10.5L10.41 8.24L8.5 6.5L10.91 6.26L12 4Z" fill="currentColor"/>
                {/* Ribbons */}
                <path d="M8 8L6 12L8 16L12 14L16 16L18 12L16 8L12 10L8 8Z" stroke="currentColor" fill="none"/>
              </svg>
            </div>
            {course.badge}
          </div>
        )}
      </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header */}
      <header className="text-white" style={{ background: 'linear-gradient(90deg, #0D1F2D 0%, #0066CC 100%)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/icons/deep_mind_icon_blue.png"
                  alt="DeepMind Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="flex items-center">
                  <span className="text-white font-semibold">DeepMind</span>
                </div>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <Link href="/#explore-upskill" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Choose Goals</Link>
                <Link href="/#our-impact" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Our Impact</Link>
                <Link href="/#top-courses" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Top Courses</Link>
                <Link href="/#why-us" className="text-white hover:text-yellow-400 font-medium flex items-center whitespace-nowrap">Why Us</Link>
                <Link href="/#pricing" className="text-white hover:text-yellow-400 font-medium flex items-center">Price</Link>
                <Link href="/#community" className="text-white hover:text-yellow-400 font-medium flex items-center">Community</Link>
                <Link href="/promotions" className="text-white hover:text-yellow-400 font-medium flex items-center">More</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
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
        </nav>
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="max-w-xl">
                              <h1 className="text-4xl font-bold mb-4 ml-20 tracking-wide">Learn Your Way, Anytime</h1>
                <p className="text-white font-bold text-lg ml-20 mt-10 tracking-wide leading-relaxed">
                  Browse our complete collection of live and self-paced courses built 
                  by industry experts for learners at every level.
                </p>
            </div>

            {/* Cleaned Course Icons */}
            <div className="hidden lg:block relative w-80 h-80 mr-15">
              <div className="absolute top-0 right-40 ">
                <Image
                  src="/assets/icons/course-icon-1.png"
                  alt="Course Icon 1"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <div className="absolute top-20 right-14">
                <Image
                  src="/assets/icons/course-icon-2.png"
                  alt="Course Icon 2"
                  width={72}
                  height={72}
                  className="w-18 h-18"
                />
              </div>
              <div className="absolute bottom-8 right-32">
                <Image
                  src="/assets/icons/course-icon-3.png"
                  alt="Course Icon 3"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Your career goal is to grow in your role as a UI / UX Designer / Developer"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <Link href="/edit-goals" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
            Edit goal
          </Link>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Recently Viewed Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} showBadge={true} />
          ))}
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
          Show 8 more
        </button>
      </section>

      {/* Tech Skill Academy Plus Sections */}
      {[1, 2].map((section) => (
        <section key={section} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">
            Explore with a <span className="text-blue-600">Tech Skill Academy</span> Plus Subscription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {courses.map((course) => (
              <CourseCard key={`${section}-${course.id}`} course={course} showBadge={section === 1} />
            ))}
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
            Show 8 more
          </button>
        </section>
      ))}

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
                <Linkedin className="w-5 h-5 hover:text-red-300 cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-red-300 cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-red-300 cursor-pointer" />
                <Facebook className="w-5 h-5 hover:text-red-300 cursor-pointer" />
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
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <div className="space-y-2 text-white">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>support@techskill.academy</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>+1 (888) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Offices in Bangalore, New York, and London</span>
                </div>
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
  );
};

export default Areta360Homepage;
