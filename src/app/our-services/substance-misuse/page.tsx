"use client";

import Image from "next/image";
import CallToActionSection from "../../../components/sections/CallToActionSection";
import FAQSection from "../../../components/sections/faq";

export default function SubstanceMisuse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]" style={{ backgroundImage: 'url("/images/pexels-olly-3768131.jpg")' }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Substance Misuse & Recovery
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
                SUBSTANCE MISUSE & RECOVERY SUPPORT
              </h2>
              
              {/* Service Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-justify text-lg">
                  At Prime Living Lodge, we provide compassionate and professional support for individuals on their journey to recovery from substance misuse. Our dedicated team understands the complex challenges of addiction and recovery, offering a safe, non-judgmental environment where individuals can rebuild their lives with dignity and respect.
                </p>
              </div>

              {/* Main Image */}
              <div className="mt-8">
                <Image 
                  src="/images/pexels-cristian-rojas-8405551.jpg" 
                  alt="Hands holding rolled paper with green leaves representing recovery and growth" 
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Additional Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed mt-6">
                <p className="text-justify text-lg">
                  Our recovery support services are designed to address the physical, psychological, and social aspects of substance misuse. We work closely with healthcare professionals, addiction specialists, and community resources to create comprehensive recovery plans that address the root causes of addiction while building the skills needed for long-term sobriety.
                </p>
                <p className="text-justify text-lg">
                  We believe that recovery is a personal journey that requires ongoing support, understanding, and encouragement. Our approach focuses on harm reduction, relapse prevention, and building a strong foundation for sustainable recovery. We support individuals in developing healthy coping mechanisms, rebuilding relationships, and reintegrating into their communities as they move forward in their recovery journey.
                </p>
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
                  <a href="/our-services/substance-misuse" className="flex items-center text-[#003E3B] font-medium group bg-white px-4 py-3 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="#003E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Substance Misuse and Recovery Support</span>
                  </a>
                  <a href="/our-services/resettlement" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group hover:bg-white px-4 py-3 rounded-lg hover:border hover:border-gray-200 hover:shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        text="Everything at Prime Living Lodge is planned to create an atmosphere of home, safety, warmth and care, whilst keeping its function as an exceptionally innovative and well-run supported living service."
        showVideoButton={true}
      />

      <FAQSection />
    </div>
  );
}
