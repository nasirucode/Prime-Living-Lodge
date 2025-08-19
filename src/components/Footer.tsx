'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-teal-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Left Section - Company Information & Branding */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 relative">
                <Image 
                  src="/images/PLL-Logo png.png" 
                  alt="Prime Living Lodge Logo" 
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-200 leading-relaxed">
              Supporting Independence With Compassionate Care, Every Moment Of Life Feels Cherished.
            </p>
            
            {/* Address */}
            <div className="text-sm text-gray-200">
              <p>Hamilton House, 4A The Avenue</p>
              <p>London, E4 9LD</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Middle Section - Explore Navigation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Explore</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors border-b-2 border-transparent hover:border-teal-400 pb-1">
                Home
              </Link>
              <Link href="/who-we-are" className="text-gray-200 hover:text-white transition-colors">
                Who We Are
              </Link>
              <Link href="/our-services" className="text-gray-200 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="/careers" className="text-gray-200 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/contact-us" className="text-gray-200 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Right Section - Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">NEWSLETTER</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full px-4 py-3 bg-white rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-900 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Copyright and Legal Links */}
      <div className="border-t border-teal-700">
        <div className="max-w-6xl mx-auto px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright Information */}
            <div className="text-sm text-gray-300">
              Copyright© 2025 Prime Living Lodge Ltd. All Rights Reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-teal-600">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policies
              </Link>
              <span className="text-teal-600">|</span>
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal & Regulatory
              </Link>
              <span className="text-teal-600">|</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
