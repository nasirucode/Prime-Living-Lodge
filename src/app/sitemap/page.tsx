import React from 'react';

export default function SitemapPage() {
  const address = "Hamilton House, 4A The Avenue, London, E4 9LD";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32"></div>      

      {/* Full Screen Map */}
      <div className="w-full h-screen">
        <div className="relative w-full h-full">
          {/* Map Container */}
          <div className="w-full h-full">
            <iframe
            //   src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=PLC4Accounts+Ltd,London+E4+9LD&center=51.6077672,0.0001029&zoom=17"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.6077672!2d0.0001029!3d51.6077672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a147d3358345%3A0xe72358970e6e3f8e!2sPLC4Accounts%20Ltd!5e0!3m2!1sen!2suk!4v1691234567890!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Living Lodge Location"
            ></iframe>
          </div>
          
          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Prime Living Lodge</h4>
                <p className="text-sm text-gray-600">Hamilton House, 4A The Avenue</p>
              </div>
            </div>
          </div>

          {/* Action Buttons Overlay */}
          <div className="absolute top-4 right-4 space-y-3 z-10">
            <a
              href={`https://www.google.com/maps/dir//${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Directions</span>
            </a>

            <a
              href={`https://www.google.com/maps/search/${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>View Map</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
