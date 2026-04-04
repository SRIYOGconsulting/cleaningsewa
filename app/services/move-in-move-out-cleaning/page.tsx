"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const MoveInOutCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does move in/move out cleaning include?",
      answer:
        "Our move in/move out cleaning service includes deep cleaning of floors, bathrooms, kitchen, living areas, carpets, cabinets, and appliances. We ensure every corner is spotless so you can move in or leave without worry.",
    },
    {
      id: 2,
      question: "Do you provide eco-friendly cleaning products?",
      answer:
        "Yes! We use eco-friendly, safe cleaning products that protect your family, pets, and the environment while providing a thorough clean.",
    },
    {
      id: 3,
      question: "Can I schedule a one-time service?",
      answer:
        "Absolutely. Move in/move out cleaning is designed as a one-time service, perfect for moving in or vacating your property.",
    },
    {
      id: 4,
      question: "Do you clean after renovation or construction?",
      answer:
        "Yes, we handle post-renovation cleaning as part of our move in/move out service, removing dust, debris, and residues to make the property ready for occupancy.",
    },
    {
      id: 5,
      question: "How can I book this service?",
      answer:
        "You can schedule your move in/move out cleaning by clicking 'Book Move In/Out Cleaning' or 'Get Free Quote'. Our team will contact you to confirm the appointment.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Move In/Move Out Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional move in/move out cleaning services in Nepal. Deep cleaning for floors, kitchens, bathrooms, carpets, and appliances to ensure a spotless property for moving in or out."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/move-in-move-out-cleaning.jpg"
          alt="Move In/Move Out Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Move In/ Move Out Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Move In / Move Out Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional one-time cleaning services for moving into or out of homes and apartments. Deep cleaning for kitchens, bathrooms, floors, carpets, and appliances to leave your property spotless.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Move In/Out Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Key Move In / Move Out Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our move in/move out cleaning ensures that every corner of your property is clean and hygienic. We use modern equipment, professional cleaners, and eco-friendly products to prepare your home for new occupants or ensure a spotless handover.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Trust our team to provide a detailed, stress-free cleaning service when you move in or move out.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/move-in-move-out-cleaning/1.jpg"
              alt="Floor & Surface Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Floor & Surface Cleaning</h3>
            <p className="text-gray-600">
              Deep cleaning and polishing of all floors, counters, and high-touch surfaces for a pristine property.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/move-in-move-out-cleaning/2.jpg"
              alt="Carpet & Sofa Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Carpet & Furniture Cleaning</h3>
            <p className="text-gray-600">
              Remove dirt, stains, and allergens from carpets, sofas, and furniture to leave your home spotless.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/move-in-move-out-cleaning/3.jpg"
              alt="Bathroom Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kitchen & Bathroom Cleaning</h3>
            <p className="text-gray-600">
              Complete sanitation of kitchens and bathrooms, including appliances, sinks, and cabinets, to ensure a hygienic move.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[70%] mx-auto flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left text-gray-800 font-semibold hover:bg-gray-50 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">{openFAQ === faq.id ? "–" : "+"}</span>
              </button>
              {openFAQ === faq.id && (
                <div className="p-5 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoveInOutCleaning;