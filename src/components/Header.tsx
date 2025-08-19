'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMakeEnquiry = () => {
    if (pathname === '/') {
      // If already on home page, scroll to contact form
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const headerHeight = 120; // Approximate header height
        const elementPosition = contactForm.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to home page first, then scroll
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          const headerHeight = 120; // Approximate header height
          const elementPosition = contactForm.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
        {/* Top Contact Bar */}
            <div className="bg-teal-800 text-white py-2 md:py-4 px-4 md:px-8">
                                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center md:items-center text-xs md:text-sm space-y-2 md:space-y-0 md:space-x-6 lg:space-x-12 px-4 md:px-12">
                <div className="flex items-center space-x-2 md:space-x-3">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-center">07769227686</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-center text-xs md:text-sm">support@primelivinglodge.com</span>
                </div>
            </div>
            </div>

                        {/* Main Navigation Bar */}
                  <nav className="bg-white shadow-md">
                    <div className="max-w-6xl mx-auto px-12">
                      <div className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Image 
                        src="/images/PLL-Logo png.png" 
                        alt="Prime Living Lodge Logo" 
                        width={64}
                        height={64}
                        className="w-16 h-16"
                        priority
                        />
                    </Link>
                </div>

                                    {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-12">
              <Link 
                href="/" 
                className={`font-medium transition-colors pb-1 ${
                  pathname === '/' 
                    ? 'text-green-800 border-b-2 border-green-800' 
                    : 'text-teal-700 hover:text-teal-800'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/who-we-are" 
                className={`font-medium transition-colors pb-1 ${
                  pathname === '/who-we-are' 
                    ? 'text-green-800 border-b-2 border-green-800' 
                    : 'text-teal-700 hover:text-teal-800'
                }`}
              >
                Who We Are
              </Link>
              <Link 
                href="/our-services" 
                className={`font-medium transition-colors pb-1 ${
                  pathname === '/our-services' || pathname.startsWith('/our-services/')
                    ? 'text-green-800 border-b-2 border-green-800' 
                    : 'text-teal-700 hover:text-teal-800'
                }`}
              >
                Our Services
              </Link>
              <Link 
                href="/careers" 
                className={`font-medium transition-colors pb-1 ${
                  pathname === '/careers' 
                    ? 'text-green-800 border-b-2 border-green-800' 
                    : 'text-teal-700 hover:text-teal-800'
                }`}
              >
                Careers
              </Link>
              <Link 
                href="/contact-us" 
                className={`font-medium transition-colors pb-1 ${
                  pathname === '/contact-us' 
                    ? 'text-green-800 border-b-2 border-green-800' 
                    : 'text-teal-800'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <button 
                onClick={handleMakeEnquiry}
                className="bg-[#19017F] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#14015F] transition-colors"
              >
                  Make Enquiry
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-teal-700 hover:text-teal-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className={`font-medium pb-1 ${
                    pathname === '/' 
                      ? 'text-green-800 border-b-2 border-green-800' 
                      : 'text-teal-700 hover:text-teal-800'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/who-we-are" 
                  className={`font-medium pb-1 ${
                    pathname === '/who-we-are' 
                      ? 'text-green-800 border-b-2 border-green-800' 
                      : 'text-teal-700 hover:text-teal-800'
                  }`}
                >
                  Who We Are
                </Link>
                <Link 
                  href="/our-services" 
                  className={`font-medium pb-1 ${
                    pathname === '/our-services' || pathname.startsWith('/our-services/')
                      ? 'text-green-800 border-b-2 border-green-800' 
                      : 'text-teal-800'
                  }`}
                >
                  Our Services
                </Link>
                <Link 
                  href="/careers" 
                  className={`font-medium pb-1 ${
                    pathname === '/careers' 
                      ? 'text-green-800 border-b-2 border-green-800' 
                      : 'text-teal-700 hover:text-teal-800'
                  }`}
                >
                  Careers
                </Link>
                <Link 
                  href="/contact-us" 
                  className={`font-medium pb-1 ${
                    pathname === '/contact-us' 
                      ? 'text-green-800 border-b-2 border-green-800' 
                      : 'text-teal-700 hover:text-teal-800'
                  }`}
                >
                  Contact Us
                </Link>
                <button 
                  onClick={handleMakeEnquiry}
                  className="bg-[#19017F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#14015F] transition-colors w-full"
                >
                  Make Enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
