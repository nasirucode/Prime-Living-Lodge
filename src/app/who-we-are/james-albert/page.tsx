"use client";

import Image from "next/image";

export default function JamesAlbert() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="relative bg-cover bg-center bg-no-repeat py-18" style={{ backgroundImage: 'url("/images/pexels-olly-3768131.jpg")' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            John Doe
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Profile Card */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm">
                {/* Profile Image */}
                <div className="relative">
                  <Image 
                    src="/images/male.jpg" 
                    alt="James Albert - Senior Support Worker" 
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Profile Info */}
                <div className="bg-[#003E3B] p-6 text-center">
                  <h2 className="text-xl font-bold text-white mb-2">John Doe</h2>
                  <p className="text-white text-sm">Senior Support Worker</p>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Skills */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mt-4">Professional Skills</h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed text-justify">
                  Senior Support Worker at Prime Living Lodge — committed to providing exceptional care and support to individuals with diverse needs. With years of experience in mental health support and learning disabilities, I specialize in creating safe, nurturing environments where people can thrive. My approach focuses on building trust, promoting independence, and celebrating each person&apos;s unique abilities. I believe in the importance of patience, empathy, and consistent support in helping individuals achieve their goals and live fulfilling lives within their communities.
                </p>
                
                {/* Skills Bars - 2 per line on normal screens, 1 on small screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Empathy */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-semibold text-gray-900">EMPATHY</span>
                      <span className="text-base font-semibold text-gray-900">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#003E3B] h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  {/* Problem Solving */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-semibold text-gray-900">PROBLEM SOLVING</span>
                      <span className="text-base font-semibold text-gray-900">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#003E3B] h-3 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>

                  {/* Team Collaboration */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-900">TEAM COLLABORATION</span>
                      <span className="text-lg font-semibold text-gray-900">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#003E3B] h-3 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Meet More People Button - Truly Centered */}
            <div className="flex-1"></div>
            <a href="/who-we-are" className="bg-[#19017F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#14015F] transition-colors">
              Meet More People
            </a>
            <div className="flex-1"></div>
            
            {/* Navigation - Absolute Right */}
            <div className="absolute right-12 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">NEXT</span>
                <a href="/who-we-are/helen-albert" className="w-12 h-12 bg-[#003E3B] rounded-full flex items-center justify-center hover:bg-[#002A28] transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </a>
              </div>
              <span className="text-gray-900 font-medium text-sm">Jane Doe</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
