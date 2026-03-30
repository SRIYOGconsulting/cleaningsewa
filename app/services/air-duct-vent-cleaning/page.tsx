"use client";

import React, { useState } from "react";
import Head from "next/head";

const AirDuctCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does air duct and vent cleaning include?",
      answer:
        "Our service includes cleaning of air ducts, vents, grills, filters, and removing dust, debris, mold, and allergens to improve airflow and indoor air quality.",
    },
    {
      id: 2,
      question: "How often should air ducts be cleaned?",
      answer:
        "It is recommended to clean air ducts every 1 to 2 years, or more frequently if you notice dust buildup, allergies, or reduced airflow.",
    },
    {
      id: 3,
      question: "Does duct cleaning improve air quality?",
      answer:
        "Yes, removing dust, mold, and contaminants from ducts significantly improves indoor air quality and reduces allergies.",
    },
    {
      id: 4,
      question: "Do you clean vents in homes and offices?",
      answer:
        "Yes, we provide air duct and vent cleaning for homes, offices, commercial buildings, and industrial spaces.",
    },
    {
      id: 5,
      question: "How can I book air duct cleaning service?",
      answer:
        "You can book easily through our website by clicking 'Book Air Duct Cleaning' or requesting a free quote.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Air Duct & Vent Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional air duct and vent cleaning services in Nepal. Improve indoor air quality, airflow, and remove dust, allergens, and mold from your ventilation system."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/air-duct-vent-cleaning.jpg"
          alt="Air Duct & Vent Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Air Duct & Vent Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Air Duct & Vent Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional air duct and vent cleaning services to improve airflow, remove dust and allergens, and ensure clean and healthy indoor air.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Air Duct Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Air Duct & Vent Cleaning
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our air duct and vent cleaning services in Nepal help maintain a clean and efficient ventilation system. Over time, dust, allergens, and contaminants accumulate inside ducts, affecting airflow and indoor air quality.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our trained professionals use advanced equipment to thoroughly clean ducts and vents, improving system efficiency and creating a healthier environment for homes and businesses.
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
              src="/services/air-duct-vent-cleaning/1.jpg"
              alt="Duct Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Air Duct Cleaning
            </h3>
            <p className="text-gray-600">
              Remove dust, debris, and contaminants from air ducts for better airflow.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/air-duct-vent-cleaning/2.jpg"
              alt="Vent Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Vent Cleaning
            </h3>
            <p className="text-gray-600">
              Clean air vents and grills to improve air circulation and hygiene.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/air-duct-vent-cleaning/3.jpg"
              alt="Duct Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Duct Sanitization
            </h3>
            <p className="text-gray-600">
              Eliminate bacteria, mold, and allergens for healthier indoor air.
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

export default AirDuctCleaning;