'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0D1F2D] h-[72px] flex items-center px-4 md:px-8">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl leading-8 font-poppins text-white whitespace-nowrap">
          Tech <span className="text-[#00C48C]">Skill Academy</span>
        </div>
        
        {/* Center Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Courses', 'Why Us', 'Success Stories', 'Pricing', 'Community'].map(link => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-white text-base font-medium hover:text-[#00C48C] transition"
            >
              {link}
            </Link>
          ))}
        </nav>
        
        {/* Right Side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/signin" className="text-white text-base font-medium hover:text-[#00C48C] px-3 py-2">Log In</Link>
          <Link
            href="/signup"
            className="bg-[#00C48C] text-[#0D1F2D] font-semibold px-5 py-2 rounded-lg hover:bg-[#00a97a] transition whitespace-nowrap"
          >
            Sign Up Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#00C48C]"
          >
            {isMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#0D1F2D] border-t border-[#E5E7EB] md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {['Courses', 'Why Us', 'Success Stories', 'Pricing', 'Community'].map(link => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-white text-base font-medium hover:text-[#00C48C] transition"
              >
                {link}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <Link href="/signin" className="block text-white hover:text-[#00C48C] transition mb-2">
                Log In
              </Link>
              <Link href="/signup" className="block bg-[#00C48C] text-[#0D1F2D] font-semibold px-4 py-2 rounded-lg hover:bg-[#00a97a] transition text-center">
                Sign Up Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 