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
                        <line x1="12.6093" y1="0.237854" x2="12.6093" y2="4.75707" stroke="#003E3B" stroke-width="1.1591"/>
                        <line x1="4.81401" y1="3.24863" x2="7.80574" y2="6.63581" stroke="#003E3B" stroke-width="1.1591"/>
                        <line y1="-0.57955" x2="4.51922" y2="-0.57955" transform="matrix(-0.738423 0.674337 0.674337 0.738423 21.8196 4.75705)" stroke="#003E3B" stroke-width="1.1591"/>
                        <line x1="24.6704" y1="11.8965" x2="20.1512" y2="11.8965" stroke="#003E3B" stroke-width="1.1591"/>
                        <line x1="5.12573" y1="11.8965" x2="0.606512" y2="11.8965" stroke="#003E3B" stroke-width="1.1591"/>
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

    
    </div>
  );
}
