"use client";
import TermSidebar from '@/components/TermSidebar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32"></div>
      
      {/* Main Content Section */}
      <section className="py-6 md:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
            {/* Left Sidebar - Navigation */}
            <TermSidebar />

            {/* Right Content Area - Terms and Conditions */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-white rounded-lg">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-800 mb-3 md:mb-4 lg:mb-6 text-center px-4 md:px-0">
                  Website Terms and Condition
                </h2>
                
                <p className="text-gray-600 mb-4 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-lg text-center px-4 md:px-0">
                  By accessing <span className="underline">www.primelivinglodge.co.uk</span>, you agree to be bound by the following terms and conditions:
                </p>

                <div className="space-y-3 md:space-y-4 text-justify px-4 md:px-0">
                  {/* Term 1 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      1. Use of Website
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      This website provides information about our supported living services. You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
                    </p>
                  </div>

                  {/* Term 2 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      2. Content Accuracy
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      While we strive to ensure the accuracy of information on this website, we do not warrant that the information is free from errors or omissions. All services are subject to availability and compliance with relevant regulations and standards.
                    </p>
                  </div>

                  {/* Term 3 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      3. Intellectual Property
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      All content on this website, including text, graphics, logos, images, and software, is the property of Prime Living Lodge Ltd or its licensors and is protected by copyright laws. You may not copy, modify, distribute, or reproduce any content without our prior written permission.
                    </p>
                  </div>

                  {/* Term 4 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      4. External Links
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      This website may contain links to third-party websites for your convenience. We are not responsible for the content or accuracy of these external websites and do not endorse or make any representations about them.
                    </p>
                  </div>

                  {/* Term 5 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      5. Liability
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Prime Living Lodge Ltd shall not be liable for any damages arising from the use of this website, including but not limited to direct, indirect, incidental, or consequential damages, to the extent permitted by UK law.
                    </p>
                  </div>

                  {/* Term 6 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      6. Changes to Terms
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      We reserve the right to update these terms and conditions at any time. Your continued use of the website after any changes constitutes acceptance of the revised terms.
                    </p>
                  </div>

                  {/* Term 7 */}
                  <div className="border-l-4 border-teal-300 pl-2 md:pl-3 lg:pl-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      7. Governing Law
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                    </p>
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
