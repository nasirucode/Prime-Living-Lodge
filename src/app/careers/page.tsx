"use client";

import Image from "next/image";
import { useState } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]" style={{ backgroundImage: 'url("/images/businesspeople-working-as-team.jpg")' }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Career
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-12 items-start">
            {/* Left Side - Content (55% width) */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Be Part of Our<br />Team of Experts
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base md:text-lg text-justify">
                  Prime Living Lodge is a supported living provider committed to making a difference in the lives of vulnerable adults. We are passionate about what we do and dedicated to providing the highest quality of care and support.
                </p>
                
                <p className="text-base md:text-lg text-justify">
                  We are a supportive, professional, and forward-thinking organization that values compassion, respect, and excellence. Our team works together to create a positive impact in the lives of those we serve.
                </p>

                <p className="text-base md:text-lg text-justify">
                  Our team plays a crucial role in helping individuals with unique needs live with dignity, independence, and purpose. We invite empathetic and motivated individuals to join our team and make a real difference.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Roles we Offer</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">Registered Care Home Manager</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">Senior Support Worker</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">Support Worker</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-gray-700">Administrative Staff</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Our Commitment to You</h3>
                    <p className="text-base md:text-lg text-justify">
                      We are committed to building an inclusive and diverse workforce. We provide respect, tools, and opportunities for our team members to thrive. We promote work-life balance for a healthy, flexible, and fulfilling work environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (45% width) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Job Application Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Job Role Selection */}
                  <div>
                    <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                      Select job role
                    </label>
                    <select
                      id="jobRole"
                      name="jobRole"
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base text-gray-900"
                    >
                      <option value="">Job role</option>
                      <option value="care-manager">Care Home Manager</option>
                      <option value="senior-support-worker">Senior support worker</option>
                      <option value="support-worker">Support Worker</option>
                      <option value="admin">Administrative Staff</option>
                    </select>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
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
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  {/* City Field */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What would you like us to know about you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Your Message here"
                      className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 md:p-6 text-center hover:border-teal-400 transition-colors">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <div className="text-gray-600">
                          <p className="text-sm md:text-base">Drop your resume here or <span className="text-blue-600 font-medium">browse</span></p>
                          <p className="text-xs md:text-sm text-gray-500 mt-1">Max file size, 4MB (pdf, doc, docx)</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 md:py-4 px-6 rounded-md font-medium hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base"
                  >
                    Subscribe Now
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
