"use client";

import React, { useState } from "react";
import Head from "next/head";

const ACCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does AC cleaning service include?",
      answer:
        "Our AC cleaning service includes filter cleaning, coil cleaning, blower cleaning, drainage line cleaning, and complete sanitization to improve cooling efficiency and air quality.",
    },
    {
      id: 2,
      question: "How often should I clean my AC?",
      answer:
        "We recommend cleaning your AC every 3 to 6 months depending on usage to maintain efficiency and prevent dust buildup.",
    },
    {
      id: 3,
      question: "Does AC cleaning improve cooling performance?",
      answer:
        "Yes, regular AC cleaning improves airflow, cooling efficiency, and reduces electricity consumption.",
    },
    {
      id: 4,
      question: "Do you clean both split and window AC units?",
      answer:
        "Yes, we provide professional cleaning for split AC, window AC, and commercial AC systems.",
    },
    {
      id: 5,
      question: "How can I book AC cleaning service?",
      answer:
        "You can easily book by clicking the 'Book AC Cleaning' button or requesting a free quote through our website.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>AC Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional AC cleaning services in Nepal. Improve cooling efficiency, air quality, and extend the life of your air conditioner with expert cleaning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/ac-cleaning.jpg"
          alt="AC Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">AC Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              AC Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional AC cleaning services to improve cooling performance, remove dust and bacteria, and ensure healthy indoor air quality for your home or office.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book AC Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional AC Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our AC cleaning services in Nepal are designed to improve air quality, enhance cooling efficiency, and extend the lifespan of your air conditioning system. We use advanced tools and trained professionals to clean filters, coils, and internal components thoroughly.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Regular AC maintenance helps reduce electricity bills, prevents breakdowns, and ensures a healthy indoor environment free from dust, allergens, and bacteria.
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
              src="/services/ac-cleaning/1.jpg"
              alt="AC Deep Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AC Deep Cleaning</h3>
            <p className="text-gray-600">
              Complete internal and external cleaning of AC units for better performance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/ac-cleaning/2.jpg"
              alt="Air Duct Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Air Duct Cleaning</h3>
            <p className="text-gray-600">
              Clean air ducts and vents to ensure better airflow and healthier air.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/ac-cleaning/3.jpg"
              alt="AC Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AC Sanitization</h3>
            <p className="text-gray-600">
              Eliminate bacteria, mold, and allergens from your AC system.
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

export default ACCleaning;