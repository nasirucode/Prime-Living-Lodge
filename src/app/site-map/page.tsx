"use client";

import Link from "next/link";

export default function SiteMap() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#19017F] text-white py-16">
        <div className="max-w-6xl mx-auto px-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Site Map</h1>
          <p className="text-xl text-gray-200">
            Navigate through all pages and sections of Prime Living Lodge
          </p>
        </div>
      </div>

      {/* Site Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete Site Navigation
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#19017F] border-b-2 border-[#19017F] pb-2">
                  Main Pages
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-700 hover:text-[#19017F] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#19017F] rounded-full mr-3"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are" className="text-gray-700 hover:text-[#19017F] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#19017F] rounded-full mr-3"></span>
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services" className="text-gray-700 hover:text-[#19017F] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#19017F] rounded-full mr-3"></span>
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-700 hover:text-[#19017F] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#19017F] rounded-full mr-3"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-gray-700 hover:text-[#19017F] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#19017F] rounded-full mr-3"></span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Pages */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#00B0A8] border-b-2 border-[#00B0A8] pb-2">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/our-services/supported-living" className="text-gray-700 hover:text-[#00B0A8] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#00B0A8] rounded-full mr-3"></span>
                      Supported Living
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/mental-health-support" className="text-gray-700 hover:text-[#00B0A8] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#00B0A8] rounded-full mr-3"></span>
                      Mental Health Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/learning-physical-disabilities" className="text-gray-700 hover:text-[#00B0A8] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#00B0A8] rounded-full mr-3"></span>
                      Learning & Physical Disabilities
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/substance-misuse" className="text-gray-700 hover:text-[#00B0A8] transition-colors flex items-center">
                      <span className="w-2 h-2 bg-[#00B0A8] rounded-full mr-3"></span>
                      Substance Misuse
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-teal-800 border-b-2 border-teal-800 pb-2">
                  Our Team
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/who-we-are/james-albert" className="text-gray-700 hover:text-teal-800 transition-colors flex items-center">
                      <span className="w-2 h-2 bg-teal-800 rounded-full mr-3"></span>
                      James Albert
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/helen-albert" className="text-gray-700 hover:text-teal-800 transition-colors flex items-center">
                      <span className="w-2 h-2 bg-teal-800 rounded-full mr-3"></span>
                      Helen Albert
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/bukola-temilade" className="text-gray-700 hover:text-teal-800 transition-colors flex items-center">
                      <span className="w-2 h-2 bg-teal-800 rounded-full mr-3"></span>
                      Bukola Temilade
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/kemi-akinyemi" className="text-gray-700 hover:text-teal-800 transition-colors flex items-center">
                      <span className="w-2 h-2 bg-teal-800 rounded-full mr-3"></span>
                      Kemi Akinyemi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Home Page Sections */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6">
                Home Page Sections
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Hero Banner</h4>
                  <p className="text-sm text-gray-600">Main introduction and call-to-action</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Who We Are</h4>
                  <p className="text-sm text-gray-600">Company overview and mission</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Our Services</h4>
                  <p className="text-sm text-gray-600">Service highlights and overview</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Contact Form</h4>
                  <p className="text-sm text-gray-600">Inquiry and contact information</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Testimonials</h4>
                  <p className="text-sm text-gray-600">Client feedback and reviews</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">FAQ Section</h4>
                  <p className="text-sm text-gray-600">Frequently asked questions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Why Choose Us</h4>
                  <p className="text-sm text-gray-600">Key differentiators and benefits</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-[#19017F] mb-2">Service Highlights</h4>
                  <p className="text-sm text-gray-600">24/7 support and certifications</p>
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <div className="text-center mt-12">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-[#19017F] text-white rounded-lg font-medium hover:bg-[#14015F] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
