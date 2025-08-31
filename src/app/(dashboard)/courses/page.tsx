'use client'

import React, { useState, useEffect } from 'react';
import { Search, Star, Users, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../../../contexts/AuthContext';
import ProfileImage from '@/components/ui/ProfileImage';

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
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllCoursesSection1, setShowAllCoursesSection1] = useState(false);
  const [showAllCoursesSection2, setShowAllCoursesSection2] = useState(false);
  const [recentlyViewedCourses, setRecentlyViewedCourses] = useState<Course[]>([]);
  
  // Load recently viewed courses from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewedCourses');
    if (stored) {
      try {
        setRecentlyViewedCourses(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing recently viewed courses:', error);
      }
    }
  }, []);
  
  const handleCourseClick = (clickedCourse: Course) => {
    setRecentlyViewedCourses(prev => {
      // Remove the course if it already exists to avoid duplicates
      const filtered = prev.filter(course => course.id !== clickedCourse.id);
      // Add the clicked course to the beginning
      const updated = [clickedCourse, ...filtered].slice(0, 4); // Keep only the 4 most recent
      
      // Save to localStorage
      localStorage.setItem('recentlyViewedCourses', JSON.stringify(updated));
      
      return updated;
    });
  };
  
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
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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

  const CourseCard = ({ course, showBadge = true, onCourseClick }: { course: Course; showBadge?: boolean; onCourseClick?: (course: Course) => void }) => (
    <Link href="/course_description" onClick={() => onCourseClick?.(course)}>
      <div 
        className="bg-white rounded-lg overflow-hidden hover:scale-[1.02] cursor-pointer h-full flex flex-col transition-all duration-300"
        style={{ boxShadow: '0px 4px 18.7px 0px #00000040' }}
      >
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
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ background: 'linear-gradient(90deg, #0D1F2D 18.75%, #0066CC 100%)' }}>
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

      {/* Hero Section */}
      <section className="text-white pt-[88px]" style={{ background: 'linear-gradient(90deg, #0D1F2D 17.79%, #0066CC 100%)', maxHeight: '310px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ padding: 0 }}>
          <div className="flex items-center justify-between" style={{ height: '246px' }}>
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-4 ml-20 tracking-wide" style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '30px',
                lineHeight: '100%'
              }}>Learn Your Way, Anytime</h1>
              <p className="text-white text-base ml-20 mt-6 tracking-wide leading-relaxed" style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                opacity: 0.9
              }}>
                Browse our complete collection of live and self-paced courses built 
                by industry experts for learners at every level.
              </p>
            </div>
            <div className="hidden lg:block relative w-80 h-80 mr-15" style={{ height: '243px' }}>
              <div className="absolute top-0 right-40" style={{ height: '78px' }}>
                <Image
                  src="/assets/icons/course-icon-1.png"
                  alt="Course Icon 1"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                  style={{ maxWidth: '56px', maxHeight: '78px', objectFit: 'contain' }}
                />
              </div>
              <div className="absolute top-20 right-14" style={{ top: '62px', left: '177px', height: '78px', width: '56px' }}>
                <Image
                  src="/assets/icons/course-icon-2.png"
                  alt="Course Icon 2"
                  width={72}
                  height={72}
                  className="w-18 h-18"
                  style={{ maxWidth: '56px', maxHeight: '78px', objectFit: 'contain' }}
                />
              </div>
              <div className="absolute bottom-8 right-32" style={{ left: '93px', bottom: '49px', height: '78px' }}>
                <Image
                  src="/assets/icons/course-icon-3.png"
                  alt="Course Icon 3"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  style={{ objectFit: 'contain', maxWidth: '56px', maxHeight: '78px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative border border-gray-300 rounded-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Your career goal is to grow in your role as a UI / UX Designer / Developer"
            className="w-full pl-10 pr-32 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            style={{
              width: '52%',
              paddingRight: '0'
            }}
          />
          <Link 
            href="/edit-goals" 
            className="absolute right-20 top-1/2 transform -translate-y-1/2"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '36px',
              color: 'rgb(0, 102, 255)',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              right: '499px',
              position: 'static'
            }}
          >
            Edit goal
          </Link>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide" style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '36px',
          letterSpacing: '0%',
          color: '#434343'
        }}>Recently Viewed Products</h2>
        {recentlyViewedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {recentlyViewedCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                showBadge={true} 
                onCourseClick={handleCourseClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No recently viewed courses</p>
            <p className="text-gray-400 text-sm mt-2">Click on any course to see it here</p>
          </div>
        )}
      </section>

      {/* Tech Skill Academy Plus Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide" style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '36px',
          letterSpacing: '0%',
          color: '#434343'
        }}>
          Explore with a <span style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '0%',
            color: '#434343'
          }}>Tech Skill Academy</span> Plus Subscription
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {courses.slice(0, showAllCoursesSection1 ? courses.length : 4).map((course) => (
            <CourseCard key={`section1-${course.id}`} course={course} showBadge={true} onCourseClick={handleCourseClick} />
          ))}
        </div>
        {!showAllCoursesSection1 && (
          <button 
            onClick={() => setShowAllCoursesSection1(true)}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
          >
            Show 8 more
          </button>
        )}
      </section>

      {/* Tech Skill Academy Plus Section 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide" style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '36px',
          letterSpacing: '0%',
          color: '#434343'
        }}>
          Explore with a <span style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '0%',
            color: '#434343'
          }}>Tech Skill Academy</span> Plus Subscription
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      {courses.slice(0, showAllCoursesSection2 ? courses.length : 4).map((course) => (
              <CourseCard key={`section2-${course.id}`} course={course} showBadge={true} onCourseClick={handleCourseClick} />
            ))}
        </div>
        {!showAllCoursesSection2 && (
          <button 
            onClick={() => setShowAllCoursesSection2(true)}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
          >
            Show 8 more
          </button>
        )}
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
