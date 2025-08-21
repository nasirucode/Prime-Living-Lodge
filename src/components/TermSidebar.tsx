"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TermSidebar() {
  const pathname = usePathname();

  return (
    <div className="lg:col-span-2 order-2 lg:order-1">
      <div className="bg-teal-50 rounded-lg p-4 md:p-6 lg:p-8">
        <nav className="space-y-2 md:space-y-3">
          <Link 
            href="/terms"
            className={`flex items-center justify-between p-2 md:p-3 rounded-lg transition-colors duration-200 ${
              pathname === '/terms'
                ? 'bg-teal-800 text-white'
                : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
            }`}
          >
            <span className="text-sm md:text-base">Terms and conditions</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link 
            href="/privacy"
            className={`flex items-center justify-between p-2 md:p-3 rounded-lg transition-colors duration-200 ${
              pathname === '/privacy'
                ? 'bg-teal-800 text-white'
                : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
            }`}
          >
            <span className="text-sm md:text-base">Privacy Policy</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>

          <Link 
            href="/legal"
            className={`flex items-center justify-between p-2 md:p-3 rounded-lg transition-colors duration-200 ${
              pathname === '/legal'
                ? 'bg-teal-800 text-white'
                : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
            }`}
          >
            <span className="text-sm md:text-base">Legal &amp; Regulatory Information</span>
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
}
