"use client";

import Image from "next/image";

interface CallToActionSectionProps {
  backgroundImage?: string;
  backgroundAlt?: string;
  text?: string;
  showVideoButton?: boolean;
  className?: string;
}

export default function CallToActionSection({
  backgroundImage = "/images/pexels-yaroslav-shuraev-8088595.jpg",
  backgroundAlt = "Elderly person's hands on textured surface",
  text = "Everything at Prime Living Lodge is planned to create an atmosphere of home, safety, warmth and care, whilst keeping its function as an exceptionally innovative and well-run supported living service.",
  showVideoButton = true,
  className = ""
}: CallToActionSectionProps) {
  return (
    <section className={`py-24 relative ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImage}
          alt={backgroundAlt}
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
              {text}
            </p>
          </div>

          {/* Right Side - Video Play Button (optional) */}
          {showVideoButton && (
            <div className="flex justify-center lg:justify-end">
              <div className="group relative">
                {/* Animated background ring */}
                <div className="absolute inset-0 w-20 h-20 bg-teal-600 rounded-full opacity-80 animate-ping"></div>
                <div className="absolute inset-0 w-20 h-20 bg-teal-800 rounded-full opacity-100 animate-pulse"></div>
                
                {/* Main button */}
                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:shadow-2xl transform">
                  <svg className="w-8 h-8 text-teal-600 ml-1 group-hover:text-teal-700 transition-colors duration-300 group-hover:scale-110 transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                
                {/* Hover effect glow */}
                <div className="absolute inset-0 w-20 h-20 bg-teal-800 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
