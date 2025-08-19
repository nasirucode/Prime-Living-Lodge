// import React from 'react';
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LegalPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32"></div>
      
      <section className="py-6 md:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-teal-50 rounded-lg p-4 md:p-6 lg:p-8">
                {/* <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-6">Legal Documents</h2> */}
                
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

            {/* Right Column - Main Content */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-white rounded-lg">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-800 mb-3 md:mb-4 lg:mb-6 text-center px-4 md:px-0">
                  Legal &amp; Regulatory Information
                </h2>
                
                <p className="text-gray-600 mb-4 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-lg text-center px-4 md:px-0">
                  Prime Living Lodge Ltd operates in compliance with UK laws and regulations governing supported living services in the Northampton and Rugby area.
                </p>

                <div className="space-y-3 md:space-y-4 text-justify px-4 md:px-0">
                  {/* Section 1 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      1. Company Information
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-1 md:space-y-2">
                      <ul className="list-disc pl-3 md:pl-4 space-y-1">
                        <li><strong>Name:</strong> Prime Living Lodge Ltd</li>
                        <li><strong>Registered Office:</strong> Hamilton House, 4A The Avenue, London, E4 9LD</li>
                        <li><strong>Company Number:</strong> 12874355</li>
                        <li><strong>Contact:</strong> Email: <a href="mailto:Enquiry@primelivinglodge.co.uk" className="text-teal-600 hover:underline">Enquiry@primelivinglodge.co.uk</a> | Phone: <a href="tel:07769227686" className="text-teal-600 hover:underline">07769227686</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      2. Care Quality Commission (CQC)
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>We provide supported living accommodation, which may not require CQC registration unless personal care activities (e.g., assistance with washing or eating) are offered. We adhere to CQC fundamental standards, including safety, dignity, and person-centered care.</p>
                      <p>For more information, visit <a href="https://www.cqc.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.cqc.org.uk</a>.</p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      3. Other Regulatory Compliance
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-1 md:space-y-2">
                      <ul className="list-disc pl-3 md:pl-4 space-y-1">
                        <li><strong>Health and Social Care Act 2008 (Regulated Activities) Regulations 2014:</strong> If applicable, we comply with requirements for safe, effective, and compassionate care.</li>
                        <li><strong>Equality Act 2010:</strong> Our services and website aim to be accessible to all. See our Accessibility Statement for details.</li>
                        <li><strong>UK GDPR and Data Protection Act 2018:</strong> Our Privacy Policy outlines how we protect personal data.</li>
                        <li><strong>Safeguarding:</strong> We maintain robust policies to protect vulnerable adults, available on request.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      4. Complaints Procedure
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-1 md:space-y-2">
                      <ul className="list-disc pl-3 md:pl-4 space-y-1">
                        <li>If you have concerns about our services, please follow our Complaints Procedure, available on request.</li>
                        <li>Contact us at <a href="mailto:info@primelivinglodge.co.uk" className="text-teal-600 hover:underline">info@primelivinglodge.co.uk</a> or <a href="tel:07769227686" className="text-teal-600 hover:underline">07769227686</a>.</li>
                        <li>You may also contact the CQC (<a href="https://www.cqc.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.cqc.org.uk</a>) or your local authority (e.g., Northamptonshire County Council).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      5. Accessibility Statement
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-1 md:space-y-2">
                      <ul className="list-disc pl-3 md:pl-4 space-y-1">
                        <li>We are committed to making our website accessible in line with the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 and WCAG 2.2 AA standards.</li>
                        <li>If you encounter accessibility issues or need alternative formats, contact <a href="mailto:Enquiry@primelivinglodge.co.uk" className="text-teal-600 hover:underline">Enquiry@primelivinglodge.co.uk</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 lg:mt-8 pt-3 md:pt-4 lg:pt-6 border-t border-gray-200 px-4 md:px-0">
                  <p className="text-xs md:text-sm text-gray-500 text-center">
                    Last updated: {new Date().toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
