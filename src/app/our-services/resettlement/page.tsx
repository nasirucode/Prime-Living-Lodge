"use client";

import Image from "next/image";
import CallToActionSection from "../../../components/sections/CallToActionSection";
import FAQSection from "../../../components/sections/faq";

export default function Resettlement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]" style={{ backgroundImage: 'url("/images/charity-foodbank-volunteer-group.jpg")' }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Resettlement and Community Integration
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-12">
          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Service Description (wider) */}
            <div className="lg:col-span-7 relative">
              {/* Service Heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-300 w-fit">
                RESETTLEMENT AND COMMUNITY INTEGRATION SERVICES
              </h2>
              
              {/* Service Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-justify text-lg">
                  At Prime Living Lodge, we understand that successful resettlement and community integration are crucial for individuals transitioning from institutional care or challenging life circumstances. Our comprehensive resettlement services are designed to support individuals in rebuilding their lives and becoming active, valued members of their communities.
                </p>
              </div>

              {/* Main Image */}
              <div className="mt-8">
                <Image 
                  src="/images/charity-foodbank-volunteer-group.jpg" 
                  alt="Group of diverse people working together in community setting" 
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Additional Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed mt-6">
                <p className="text-justify text-lg">
                  Our resettlement program focuses on providing practical support, emotional guidance, and skill development to help individuals successfully integrate into community life. We work closely with each person to develop personalized resettlement plans that address their unique needs, goals, and aspirations.
                </p>
                <p className="text-justify text-lg">
                  We believe that everyone deserves the opportunity to live independently and contribute meaningfully to their community. Our experienced team provides ongoing support throughout the resettlement process, ensuring that individuals have the tools, resources, and confidence they need to thrive in their new environment.
                </p>
              </div>

              {/* Key Features Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Resettlement Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Personalized resettlement planning</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Housing and accommodation support</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Employment and education assistance</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Financial management training</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Community connection and networking</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Mental health and wellbeing support</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Ongoing follow-up and support</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Crisis intervention and prevention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Other Services Sidebar (far right with border) */}
            <div className="lg:col-span-5">
              <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50 w-100 ml-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h3>
                <div className="space-y-2">
                  <a href="/our-services/supported-living" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group hover:bg-white px-4 py-3 rounded-lg hover:border hover:border-gray-200 hover:shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Supported Living</span>
                  </a>
                  <a href="/our-services/mental-health-support" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group hover:bg-white px-4 py-3 rounded-lg hover:border hover:border-gray-200 hover:shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Mental Health Support</span>
                  </a>
                  <a href="/our-services/learning-physical-disabilities" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group hover:bg-white px-4 py-3 rounded-lg hover:border hover:border-gray-200 hover:shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Learning and Physical Disabilities</span>
                  </a>
                  <a href="/our-services/substance-misuse" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group hover:bg-white px-4 py-3 rounded-lg hover:border hover:border-gray-200 hover:shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Substance Misuse and Recovery Support</span>
                  </a>
                  <a href="/our-services/resettlement" className="flex items-center text-[#003E3B] font-medium group bg-white px-4 py-3 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="#003E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Resettlement and Community Integration</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Call to Action Section */}
      <CallToActionSection 
        backgroundImage="/images/pexels-yaroslav-shuraev-8088595.jpg"
        backgroundAlt="Elderly person's hands on textured surface"
        text="Our resettlement services are designed to empower individuals to rebuild their lives and become active, valued members of their communities. We provide the support, guidance, and resources needed for successful community integration."
        showVideoButton={true}
      />

      <FAQSection />
    </div>
  );
}
