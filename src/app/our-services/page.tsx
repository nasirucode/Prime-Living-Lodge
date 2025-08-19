"use client";

import Image from "next/image";
import { useState } from "react";
import FAQSection from "../../components/sections/faq";
import CallToActionSection from "../../components/sections/CallToActionSection";

export default function OurServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]" style={{ backgroundImage: 'url("/images/pexels-olly-3768131.jpg")' }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* OUR SERVICE Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-6 md:gap-12 items-start">
            {/* Left Side - Service Description */}
            <div className="lg:col-span-2 relative">
              {/* OUR SERVICE Heading */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 border-b-2 border-teal-300 w-fit">
                OUR SERVICE
              </h2>
              
              {/* Service Description */}
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-justify text-base md:text-lg">
                  At Prime Living Lodge, we provide person-centred supported living services that focus on the individual needs of each person. Our approach encompasses physical, mental, emotional, and social support to ensure comprehensive care and development.
                </p>
                <p className="text-justify text-base md:text-lg">
                  We specialise in developing independent living skills, promoting community access, and offering tailored, flexible services. Our goal is to empower individuals with mental health conditions to live full and meaningful lives within their communities, with the support they need to thrive.
                </p>
              </div>
            </div>

            {/* Right Side - Service Cards Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Card 1 - Mental Health Support */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm md:shadow-md">
                <div className="relative">
                  <Image 
                    src="/images/autism care.jpg" 
                    alt="Person holding colorful jigsaw puzzle pieces" 
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Mental Health Support</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                    Specialist Care For Individuals Managing Mental Health Challenges, With A Focus On Recovery And Resilience.
                  </p>
                  <a href="/our-services/mental-health-support" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-xs md:text-sm">
                    Learn More
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2 - Supported Living */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm md:shadow-md">
                <div className="relative">
                  <Image 
                    src="/images/pexels-kampus-7551592.jpg" 
                    alt="Young man assisting elderly man in wheelchair in kitchen" 
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Supported Living</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                    Comfortable, Homely Environments With Individualised Support To Promote Independence And Wellbeing.
                  </p>
                  <a href="/our-services/supported-living" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-xs md:text-sm">
                    Learn More
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 3 - Substance Misuse and Recovery Support */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm md:shadow-md">
                <div className="relative">
                  <Image 
                    src="/images/pexels-cristian-rojas-8405551.jpg" 
                    alt="Hands holding rolled paper with green leaves" 
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Substance Misuse And Recovery Support</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                    Compassionate support for individuals on their journey to recovery from substance misuse, offering safe environments and comprehensive recovery plans.
                  </p>
                  <a href="/our-services/substance-misuse" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-xs md:text-sm">
                    Learn More
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 4 - Learning and Physical Disabilities */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm md:shadow-md">
                <div className="relative">
                  <Image 
                    src="/images/dementia care.jpg" 
                    alt="Two pairs of hands gently clasped together" 
                    width={300}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Learning And Physical Disabilities</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                    Practical And Emotional Support To Help Individuals Live Full Empowered Lives.
                  </p>
                  <a href="/our-services/learning-physical-disabilities" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-xs md:text-sm">
                    Learn More
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToActionSection />
      
      <FAQSection />
    </div>
  );
}
