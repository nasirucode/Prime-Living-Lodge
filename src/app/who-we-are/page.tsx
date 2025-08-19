"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-12 min-h-[300px]" style={{ backgroundImage: 'url("/images/pexels-olly-3768131.jpg")' }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-12">
          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-2 flex">
              <div className="w-full h-[500px]">
                <Image 
                  src="/images/pexels-rdne-6647024.jpg" 
                  alt="Man assisting elderly person with walker" 
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="relative lg:col-span-3">
              {/* WHO WE ARE Heading */}
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-300 w-fit">
                WHO WE ARE
              </h2>
              
              {/* Company Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Prime Living Lodge Ltd (PLL) Is A Midlands Based Supported Living Company Aimed At Providing High-Quality Accommodation And Support For Vulnerable Adults In The Midlands Region, Starting In Warwickshire County.
              </p>
              
              {/* Content Layout - Left side content boxes, right side quote */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Side - Content Boxes */}
                <div className="space-y-4">
                  {/* OUR VISION */}
                  <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7125 20.0815C16.0814 18.8557 16.8461 17.8105 17.6031 16.7692C17.8029 16.4963 18.0027 16.2235 18.1949 15.9468C18.9557 14.8517 19.4014 13.526 19.4014 12.0927C19.4014 8.35387 16.3735 5.3259 12.6385 5.3259C8.90346 5.3259 5.87549 8.35387 5.87549 12.0889C5.87549 13.5222 6.32123 14.8517 7.08206 15.943C7.27419 16.2197 7.47401 16.4925 7.67382 16.7653C8.43466 17.8067 9.19934 18.8557 9.56438 20.0776H15.7125V20.0815ZM12.6385 25C14.3369 25 15.7125 23.6244 15.7125 21.9259V21.3111H9.56438V21.9259C9.56438 23.6244 10.94 25 12.6385 25ZM9.56438 12.0889C9.56438 12.427 9.28772 12.7037 8.94957 12.7037C8.61142 12.7037 8.33475 12.427 8.33475 12.0889C8.33475 9.7103 10.2599 7.78516 12.6385 7.78516C12.9766 7.78516 13.2533 8.06183 13.2533 8.39998C13.2533 8.73813 12.9766 9.01479 12.6385 9.01479C10.94 9.01479 9.56438 10.3904 9.56438 12.0889Z" fill="#003E3B"/>
                        <line x1="12.6093" y1="0.237854" x2="12.6093" y2="4.75707" stroke="#003E3B" strokeWidth="1.1591"/>
                        <line x1="4.81401" y1="3.24863" x2="7.80574" y2="6.63581" stroke="#003E3B" strokeWidth="1.1591"/>
                        <line y1="-0.57955" x2="4.51922" y2="-0.57955" transform="matrix(-0.738423 0.674337 0.674337 0.738423 21.8196 4.75705)" stroke="#003E3B" strokeWidth="1.1591"/>
                        <line x1="24.6704" y1="11.8965" x2="20.1512" y2="11.8965" stroke="#003E3B" strokeWidth="1.1591"/>
                        <line x1="5.12573" y1="11.8965" x2="0.606512" y2="11.8965" stroke="#003E3B" strokeWidth="1.1591"/>
                      </svg>

                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#003E3B] mb-1">OUR VISION</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          At Prime Living Lodge, our vision is simple: to create safe, inclusive, and empowering homes where individuals can thrive.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* OUR GOAL */}
                  <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.25379 4.49316C16.4383 -3.23848 17.2736 12.0636 28.2576 2.50952V18.1009C17.7815 27.5212 15.5216 12.3006 5.25379 20.0358V4.49316ZM2.49143 0.237854C3.67019 0.237854 4.62568 1.19382 4.62568 2.37186C4.62568 3.15443 4.20405 3.83818 3.57642 4.20968H3.67715V6.03814V23.9084V25.7368H3.57642C4.20405 26.1083 4.62568 26.594 4.62568 27.5744C4.62568 28.5546 3.67019 29.7079 2.49143 29.7079C1.3129 29.7079 0.357422 28.5543 0.357422 27.5744C0.357422 26.594 0.778803 26.1083 1.40644 25.7368H1.30595V23.9084V6.03814V4.20968H1.40644C0.778803 3.83818 0.357422 3.15467 0.357422 2.37186C0.357422 1.19382 1.3129 0.237854 2.49143 0.237854Z" fill="#003E3B"/>
                      </svg>

                       
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#003E3B] mb-1">OUR GOAL</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Our goal is to support people in developing the skills, confidence, and independence they need to live meaningful lives within their communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Quote Box */}
                <div className="bg-[#003E3B] rounded-lg p-8 text-center relative overflow-hidden flex items-center justify-center min-h-[120px]">
                  <div className="absolute top-2 left-3 text-6xl text-[#B0E7E4] font-black">&ldquo;</div>
                  <div className="absolute bottom-2 right-3 text-6xl text-[#B0E7E4] font-black">&rdquo;</div>
                  <blockquote className="text-base text-[#B0E7E4] leading-relaxed italic relative z-10 px-4">
                    We believe that everyone, regardless of their background or support needs, deserves the opportunity to live with dignity, purpose, and belonging...
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM Section */}
      <section className="py-24 relative">
        {/* Background Image with Pattern */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: 'url("/images/line-background.jpg")' }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#003E3B] uppercase mb-4">
              MEET OUR TEAM
            </h2>
            <div className="w-24 h-0.5 bg-teal-300 mx-auto"></div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Team Member 1 - BUKOLA TEMILADE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-xl relative">
              <div className="relative">
                <Image 
                  src="/images/ceo2.jpg" 
                  alt="Bukola Temilade - CEO/Director" 
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Default Content */}
              <div className="bg-[#003E3B] p-6 text-center flex-1 flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-16">
                <h4 className="text-lg font-bold text-white mb-1">BUKOLA TEMILADE</h4>
                <p className="text-white text-sm font-normal">CEO / DIRECTOR</p>
              </div>
              
              {/* Hover Content - Slides up from bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#003E3B] p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-center text-white">
                  {/* Name */}
                  <h4 className="text-lg font-bold text-white mb-2">BUKOLA TEMILADE</h4>
                  
                  {/* Appointment/Role */}
                  <p className="text-white text-sm font-normal mb-4">CEO / DIRECTOR</p>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 6.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* See Profile Button */}
                  <a href="/who-we-are/bukola-temilade" className="inline-block bg-white text-[#003E3B] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                    See Profile
                  </a>
                </div>
              </div>
            </div>

                        {/* Team Member 2 - KEMI AKINYEMI */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-xl relative">
              <div className="relative">
                <Image 
                  src="/images/HR Director.jpg" 
                  alt="Kemi Akinyemi - HR Director" 
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Default Content */}
              <div className="bg-[#003E3B] p-6 text-center flex-1 flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-16">
                <h4 className="text-lg font-bold text-white mb-1">KEMI AKINYEMI</h4>
                <p className="text-white text-sm font-normal">HR DIRECTOR</p>
              </div>
              
              {/* Hover Content - Slides up from bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#003E3B] p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-center text-white">
                  {/* Name */}
                  <h4 className="text-lg font-bold text-white mb-2">KEMI AKINYEMI</h4>
                  
                  {/* Appointment/Role */}
                  <p className="text-white text-sm font-normal mb-4">HR DIRECTOR</p>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 6.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* See Profile Button */}
                  <a href="/who-we-are/kemi-akinyemi" className="inline-block bg-white text-[#003E3B] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                    See Profile
                  </a>
                </div>
              </div>
            </div>

                        {/* Team Member 3 - JAMES ALBERT */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-xl relative">
              <div className="relative">
                <Image 
                  src="/images/pexels-max-weiss-erfahrungen-945937528-20097456.jpg" 
                  alt="James Albert - Senior Support Worker" 
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Default Content */}
              <div className="bg-[#003E3B] p-6 text-center flex-1 flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-16">
                <h4 className="text-lg font-bold text-white mb-1">JAMES ALBERT</h4>
                <p className="text-white text-sm font-normal">SENIOR SUPPORT WORKER</p>
              </div>
              
              {/* Hover Content - Slides up from bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#003E3B] p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-center text-white">
                  {/* Name */}
                  <h4 className="text-lg font-bold text-white mb-2">JAMES ALBERT</h4>
                  
                  {/* Appointment/Role */}
                  <p className="text-white text-sm font-normal mb-4">SENIOR SUPPORT WORKER</p>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 6.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* See Profile Button */}
                  <a href="/who-we-are/james-albert" className="inline-block bg-white text-[#003E3B] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                    See Profile
                  </a>
                </div>
              </div>
            </div>

                        {/* Team Member 4 - HELEN ALBERT */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-xl relative">
              <div className="relative">
                <Image 
                  src="/images/pexels-augustocarneirojr-30479371.jpg" 
                  alt="Helen Albert - Support Worker" 
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Default Content */}
              <div className="bg-[#003E3B] p-6 text-center flex-1 flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-16">
                <h4 className="text-lg font-bold text-white mb-1">HELEN ALBERT</h4>
                <p className="text-white text-sm font-normal">SUPPORT WORKER</p>
              </div>
              
              {/* Hover Content - Slides up from bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#003E3B] p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-center text-white">
                  {/* Name */}
                  <h4 className="text-lg font-bold text-white mb-2">HELEN ALBERT</h4>
                  
                  {/* Appointment/Role */}
                  <p className="text-white text-sm font-normal mb-4">SUPPORT WORKER</p>
                  
                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 6.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* See Profile Button */}
                  <a href="/who-we-are/helen-albert" className="inline-block bg-white text-[#003E3B] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE TO HELP Section */}
      <section className="py-20 relative">
        {/* Background Image - Reduced height */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/pexels-august.jpg")' }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-12">
          <div className="text-center">
            {/* Main Message */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                WE ARE AVAILABLE TO HELP YOU WITH ANY NEEDS OR QUESTIONS AT ANY TIME. PLEASE GET IN TOUCH WITH US IF YOU NEED ASSISTANCE OR SIMPLY WANT MORE INFORMATION; WE WILL BE PLEASED TO HELP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Overlapping */}
      <section className="relative -mt-16 mb-8">
        <div className="max-w-6xl mx-auto px-12">
          <div className="bg-[#00B0A8] rounded-2xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Side - Let's Get Started */}
              <div className="text-center md:text-left">
                <h3 className="text-black text-2xl font-bold mb-2">LET&apos;S GET STARTED</h3>
              </div>
              
              {/* Right Side - Contact Us Button */}
              <div>
                <a 
                  href="/contact-us" 
                  className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  CONTACT US
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Background Extension */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-12">
          {/* This section ensures white background extends below */}
        </div>
      </section>
      
    </div>
  );
}
