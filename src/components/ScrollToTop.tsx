"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showScrollToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#19017F] text-white rounded-full shadow-lg hover:bg-[#14015F] transition-all duration-300 transform hover:scale-110 hover:shadow-xl flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}
