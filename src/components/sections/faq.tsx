"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the answers to questions frequently asked by the people we support, family members and healthcare professionals.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                Can I contact Prime Living Lodge?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 1 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 1 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  Yes, absolutely! You can contact us through multiple channels. Call us at 01234 567890, email us at info@primelivinglodge.co.uk, or fill out our contact form on this website. Our team is available Monday to Friday, 9 AM to 5 PM, and we'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                How do you know whether you can support me or my relative?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 2 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 2 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  We conduct a comprehensive assessment process that includes meeting with you and your family, reviewing your care plan, and understanding your specific needs and preferences. Our experienced team evaluates whether we can provide the level of support required and ensures we have the right resources and expertise to meet your needs effectively.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                I have a personal budget/individual payment - can I use this to access my support?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 3 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 3 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  Yes, we accept personal budgets and individual payments. We work with various funding sources including direct payments, personal health budgets, and self-funded arrangements. Our team can help you understand how to use your budget effectively and ensure you get the most value from your allocated funds while maintaining quality care.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                Can I have a say in choosing my support and where I will live?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 4 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 4 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  Absolutely! We believe in person-centred care, which means you have full control over your support choices. You can choose your support workers, decide on your daily routine, and have input into where you live. We offer various accommodation options and will work with you to find the perfect match for your lifestyle and preferences.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                Where can I find the CQC report for my local area?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 5 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 5 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  You can find our CQC reports on the official CQC website (www.cqc.org.uk) by searching for "Prime Living Lodge" or by visiting our specific service location pages. We're proud of our "Good" rating and encourage all potential clients to review our reports. You can also request a printed copy from our office or ask us to email it to you directly.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-[#00B0A8] rounded-lg cursor-pointer hover:bg-[#004A47] transition-colors group">
            <div 
              className="flex justify-between items-center p-6"
              onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors">
                Can I visit before I move into my flat/house?
              </h3>
              <svg className={`w-6 h-6 text-black group-hover:text-white transition-colors transition-transform ${openFAQ === 6 ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {openFAQ === 6 && (
              <div className="px-6 pb-6">
                <p className="text-black group-hover:text-white leading-relaxed transition-colors">
                  Yes, we strongly encourage visits before making any decisions! We offer scheduled viewings of our properties where you can meet potential housemates, see the facilities, and get a feel for the environment. You can also meet some of our support staff during your visit. We want you to feel completely comfortable with your choice, so we're happy to arrange multiple visits if needed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
