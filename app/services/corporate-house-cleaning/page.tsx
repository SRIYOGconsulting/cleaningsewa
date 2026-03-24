"use client";

import React, { useState } from "react";
import Head from "next/head";

const CorporateHouseCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does corporate house cleaning include?",
      answer:
        "Our corporate house cleaning includes deep cleaning of floors, offices, meeting rooms, kitchens, restrooms, dusting, vacuuming, and sanitization of all areas to maintain a professional and hygienic workspace.",
    },
    {
      id: 2,
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we use safe, eco-friendly cleaning solutions suitable for offices with employees, electronics, and furniture, ensuring safety and environmental responsibility.",
    },
    {
      id: 3,
      question: "Can we schedule recurring cleaning?",
      answer:
        "Absolutely. You can schedule one-time cleaning or recurring services daily, weekly, or monthly according to your office needs.",
    },
    {
      id: 4,
      question: "Do you offer after-hours cleaning services?",
      answer:
        "Yes, we provide flexible cleaning schedules including after-office hours or weekends to minimize disruption to your work.",
    },
    {
      id: 5,
      question: "How can I book corporate house cleaning?",
      answer:
        "You can book the service directly on our website by clicking the 'Book Corporate Cleaning' button or request a free quote for your office or corporate house.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Corporate House Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional corporate house cleaning services in Nepal. Deep cleaning, sanitization, dusting, and maintenance for offices and corporate spaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/corporate-house-cleaning.jpg"
          alt="Corporate House Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Corporate House Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Corporate House Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional cleaning services for corporate houses and office spaces, ensuring a hygienic, fresh, and productive environment.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Corporate Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Corporate Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our corporate house cleaning services in Nepal are designed to maintain a spotless and professional environment. We clean offices, workspaces, conference rooms, kitchens, and common areas with precision and care.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using modern equipment and eco-friendly solutions, we ensure cleanliness, hygiene, and safety for employees and visitors.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Scope of Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/corporate-house-cleaning/1.jpg"
              alt="Office Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Office Cleaning
            </h3>
            <p className="text-gray-600">
              Complete cleaning of office spaces, desks, floors, and common areas.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/corporate-house-cleaning/2.jpg"
              alt="Conference Room Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Conference Room Cleaning
            </h3>
            <p className="text-gray-600">
              Deep cleaning of conference rooms and meeting spaces to maintain a professional environment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/corporate-house-cleaning/3.jpg"
              alt="Sanitization & Disinfection"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Sanitization & Disinfection
            </h3>
            <p className="text-gray-600">
              Eliminate bacteria, germs, and viruses to ensure a safe and healthy work environment.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <span>{openFAQ === faq.id ? "–" : "+"}</span>
              </button>

              {openFAQ === faq.id && (
                <div className="p-5 text-gray-700 border-t">
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

export default CorporateHouseCleaning;