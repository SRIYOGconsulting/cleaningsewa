'use client';

import React from 'react';

const Floating: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-6 z-50 mb-12">
        
        {/* Call Button */}
        <div className="relative group flex items-center justify-center">
          {/* Ring animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>

          <a
            href="tel:+9779852024365"
            className="relative bg-[#fff] p-3 rounded-full shadow-lg hover:bg-white-600 transition duration-200"
            aria-label="Call Us"
          >
            <img
              src="/icons/phone.svg"
              alt="Call"
              className="w-6 h-6"
            />
          </a>

          {/* Tooltip */}
          <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Call Us
          </span>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group flex items-center justify-center">
          <a
            href="https://b.broadpress.org/cleaningsewa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fff] p-3 rounded-full shadow-lg hover:bg-white-200 transition duration-200 animate-bounce"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>

          {/* Tooltip */}
          <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>

      </div>
    </div>
  );
};

export default Floating;