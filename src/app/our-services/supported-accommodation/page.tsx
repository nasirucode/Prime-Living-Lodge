"use client";

import Image from "next/image";
import CallToActionSection from "../../../components/sections/CallToActionSection";
import FAQSection from "../../../components/sections/faq";

export default function SupportedAccommodation() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[300px]"
        style={{ backgroundImage: 'url("/images/people-1492052_1280.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-12 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Supported Accommodation</h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-300 w-fit">
                SUPPORTED ACCOMMODATION
              </h2>

              <div className="mt-8">
                <Image
                  src="/images/businesspeople-working-as-team.jpg"
                  alt="Team supporting adults in a community setting"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed mt-6">
                <p className="text-justify text-lg">
                  At Prime Living Lodge, we provide high-quality supported accommodation for adults who need support to live independently within the community. Our service is designed to offer a safe, stable, and empowering environment where individuals can develop the skills and confidence needed to live fulfilling lives.
                </p>
                <p className="text-justify text-lg">
                  We support people aged 18+ with a range of needs, including mental health needs, learning disabilities, autism, and more complex support needs. Our approach is person-centred, flexible, and tailored to each individual, ensuring the right level of support is provided at the right time.
                </p>
                <p className="text-justify text-lg">
                  Our supported accommodation enables individuals to live in their own home or shared accommodation, with support delivered around their needs. This can range from a few hours each week to more intensive, 24-hour support.
                </p>
                <p className="text-justify text-lg">
                  A key focus of our service is to support individuals to progress towards greater independence, with the aim of transitioning into living more independently, including moving on to their own home where appropriate.
                </p>

                <h3 className="text-xl font-bold text-gray-900 pt-4">What we offer</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-justify">
                  <li>Support to access and maintain suitable accommodation</li>
                  <li>Help with daily living skills such as cooking, cleaning, and personal care</li>
                  <li>Support with managing tenancies, budgeting, and maintaining a home</li>
                  <li>Medication support and promoting health and wellbeing</li>
                  <li>Support to access education, training, and employment opportunities</li>
                  <li>Encouragement to build social connections and engage with the community</li>
                  <li>Positive behaviour support and risk management where required</li>
                  <li>Step-down and hospital discharge support to aid smooth transitions into the community</li>
                </ul>

                <p className="text-justify text-lg pt-2">
                  Our focus is on building independence, promoting choice, and supporting individuals to achieve their personal goals. We work collaboratively with local authorities, housing providers, families, health professionals, and partner organisations to ensure individuals receive coordinated, high-quality support that enables them to live fulfilling lives in their communities across the Midlands.
                </p>
              </div>
            </div>

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
                  <a href="/our-services/supported-accommodation" className="flex items-center text-[#003E3B] font-medium group bg-white px-4 py-3 rounded-lg shadow-sm">
                    <svg className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.3184 10.8365L13.1887 5.96623L8.3184 1.09595M1.5 10.8365L6.37029 5.96623L1.5 1.09595" stroke="#003E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-base">Supported Accommodation</span>
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
