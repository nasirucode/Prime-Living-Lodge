"use client";

import Image from "next/image";
import { useState } from "react";
import FAQSection from "../../components/sections/faq";

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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-12">
          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Side - Service Description */}
            <div className="lg:col-span-2 relative">
              {/* OUR SERVICE Heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-300 w-fit">
                OUR SERVICE
              </h2>
              
              {/* Service Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-justify text-lg">
                  At Prime Living Lodge, we provide person-centred supported living services that focus on the individual needs of each person. Our approach encompasses physical, mental, emotional, and social support to ensure comprehensive care and development.
                </p>
                <p className="text-justify text-lg">
                  We specialise in developing independent living skills, promoting community access, and offering tailored, flexible services. Our goal is to empower individuals with mental health conditions to live full and meaningful lives within their communities, with the support they need to thrive.
                </p>
              </div>
            </div>

            {/* Right Side - Service Cards Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-8">
              {/* Card 1 - Mental Health Support */}
              <div className="rounded-lg overflow-hidden mt-10">
                <div className="relative">
                  <Image 
                    src="/images/autism care.jpg" 
                    alt="Person holding colorful jigsaw puzzle pieces" 
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Mental Health Support</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Specialist Care For Individuals Managing Mental Health Challenges, With A Focus On Recovery And Resilience.
                  </p>
                  <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2 - Supported Living */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <Image 
                    src="/images/pexels-kampus-7551592.jpg" 
                    alt="Young man assisting elderly man in wheelchair in kitchen" 
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Supported Living</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Comfortable, Homely Environments With Individualised Support To Promote Independence And Wellbeing.
                  </p>
                  <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 3 - Substance Misuse and Recovery Support */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <Image 
                    src="/images/pexels-cristian-rojas-8405551.jpg" 
                    alt="Hands holding rolled paper with green leaves" 
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Substance Misuse And Recovery Support</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Comfortable, Homely Environments With Individualised Support To Promote Independence And Wellbeing.
                  </p>
                  <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 4 - Learning and Physical Disabilities */}
              <div className="bg-white rounded-lg overflow-hidden -mt-8">
                <div className="relative">
                  <Image 
                    src="/images/dementia care.jpg" 
                    alt="Two pairs of hands gently clasped together" 
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">24-Hour Support</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Learning And Physical Disabilities</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Practical And Emotional Support To Help Individuals Live Full Empowered Lives.
                  </p>
                  <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/pexels-yaroslav-shuraev-8088595.jpg" 
            alt="Elderly person's hands on textured surface" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white">
              <p className="text-lg leading-relaxed">
                Everything at Prime Living Lodge is planned to create an atmosphere of home, safety, warmth and care, whilst keeping its function as an exceptionally innovative and well-run supported living service.
              </p>
            </div>

            {/* Right Side - Video Play Button */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <svg className="w-8 h-8 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </div>
  );
}
