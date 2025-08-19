"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]" style={{ backgroundImage: 'url("/images/close-up-person-working-call-center.jpg")' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-12 items-start">
            {/* Left Side - Content & Social Media (40% width) */}
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#003E3B] uppercase mb-4 md:mb-6">
                WRITE US ANY MESSAGE
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base md:text-lg text-justify">
                  We&apos;re here to help and answer any questions you might have. Whether you&apos;re looking for information about our services, want to discuss care options, or need support, our team is ready to assist you.
                </p>
                
                <p className="text-base md:text-lg text-justify">
                  At Prime Living Lodge, we believe in open communication and building strong relationships with our clients and their families. Your comfort and peace of mind are our top priorities.
                </p>

                {/* Social Media Icons */}
                <div className="pt-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Follow Us</h3>
                  <div className="flex space-x-3 md:space-x-4">
                    {/* Facebook */}
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-200 rounded-full bg-white flex items-center justify-center hover:border-green-400 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>

                    {/* Instagram */}
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-200 rounded-full bg-white flex items-center justify-center hover:border-green-400 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </div>

                    {/* Twitter */}
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-200 rounded-full bg-white flex items-center justify-center hover:border-green-400 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>

                    {/* LinkedIn */}
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-green-200 rounded-full bg-white flex items-center justify-center hover:border-green-400 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (60% width) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get In Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Name and Phone Number Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Subject Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 md:py-4 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
