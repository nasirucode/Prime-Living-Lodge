"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Privacy() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-12 md:h-16"></div>
      
      {/* Main Content Section */}
      <section className="py-8 md:py-12 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 items-start">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 lg:sticky lg:top-8">
                <nav className="space-y-2">
                  <Link 
                    href="/terms" 
                    className={`flex items-center justify-between w-full px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                      pathname === '/terms' 
                        ? 'bg-teal-800 text-white' 
                        : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
                    }`}
                  >
                    <span>Terms and Conditions</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/privacy" 
                    className={`flex items-center justify-between w-full px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                      pathname === '/privacy' 
                        ? 'bg-teal-800 text-white' 
                        : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
                    }`}
                  >
                    <span>Privacy Policy</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/legal" 
                    className={`flex items-center justify-between w-full px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                      pathname === '/legal' 
                        ? 'bg-teal-800 text-white' 
                        : 'bg-teal-100 text-gray-700 hover:bg-teal-200'
                    }`}
                  >
                    <span>Legal & Regulatory Information</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Right Content Area - Privacy Policy */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-white rounded-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                  Privacy Policy
                </h2>
                
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base lg:text-lg text-center px-4 md:px-0">
                  Prime Living Lodge Ltd is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy explains how we collect, use, and protect your information.
                </p>

                <div className="space-y-3 md:space-y-4 text-justify px-4 md:px-0">
                  {/* Section 1 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      1. Data We Collect
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p><strong>Personal Information:</strong> Name, email address, phone number, and other contact details when you submit inquiries or contact us.</p>
                      <p><strong>Website Usage Data:</strong> Information collected through cookies and analytics tools like Google Analytics to understand how you use our website.</p>
                      <p><strong>Service-Related Data:</strong> Information collected offline for residents, staff, and service users as part of our supported living services.</p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      2. How We Use Your Data
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>We use your data to:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Respond to your inquiries and provide information about our services</li>
                        <li>Improve our website and marketing communications</li>
                        <li>Comply with legal obligations and regulatory requirements</li>
                        <li>Provide and improve our supported living services</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      3. Data Sharing
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>We do not sell your personal data. We may share your information with:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Trusted Service Providers:</strong> Such as hosting providers, email services, and analytics tools, under strict data protection agreements</li>
                        <li><strong>Regulatory Authorities:</strong> Including the Care Quality Commission (CQC) and local councils, when legally required</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      4. Cookies
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>We use cookies to:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Analyze website traffic and improve user experience</li>
                        <li>Remember your preferences and settings</li>
                        <li>Provide essential website functionality</li>
                      </ul>
                      <p>You can accept or decline cookies through our cookie banner. For detailed information, please see our separate <strong>Cookie Policy</strong>.</p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      5. Data Security
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>We implement appropriate security measures to protect your personal data:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>SSL Encryption:</strong> All data transmitted through our website is encrypted</li>
                        <li><strong>Secure Hosting:</strong> Data is stored on secure, protected servers</li>
                        <li><strong>Access Controls:</strong> Strict access controls prevent unauthorized access</li>
                        <li><strong>Regular Monitoring:</strong> Continuous monitoring for potential security breaches</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      6. Your Rights
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <p>Under UK GDPR, you have the following rights:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Access:</strong> Request a copy of your personal data</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                        <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                        <li><strong>Objection:</strong> Object to processing of your data</li>
                        <li><strong>Restriction:</strong> Request restriction of data processing</li>
                      </ul>
                      <p>To exercise these rights, please contact us at: <strong className="text-teal-600">info@primelivinglodge.co.uk</strong></p>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="border-l-4 border-teal-300 pl-3 md:pl-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      7. Complaints
                    </h3>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>If you have any concerns about how we handle your personal data, contact us first, you may also lodge a complaint with the information Commissioners Office: <strong className="text-teal-600">(www.ico.org.uk)</strong></li>
                        </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 px-4 md:px-0">
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
