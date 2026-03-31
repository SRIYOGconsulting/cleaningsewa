"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SepticTankCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is included in septic tank cleaning?",
      answer:
        "Our septic tank cleaning service includes pumping out waste, sludge removal, cleaning the tank walls, flushing, and inspecting for leaks or damage.",
    },
    {
      id: 2,
      question: "How often should a septic tank be cleaned?",
      answer:
        "Septic tanks should generally be cleaned every 3-5 years, depending on usage and tank size, to prevent backups and maintain proper functioning.",
    },
    {
      id: 3,
      question: "Is the cleaning process safe and hygienic?",
      answer:
        "Absolutely. Our trained professionals use protective gear and modern equipment to safely remove waste and disinfect the tank, minimizing risk and maintaining hygiene.",
    },
    {
      id: 4,
      question: "Do you handle large and small tanks?",
      answer:
        "Yes, we clean septic tanks of all sizes for residential, commercial, and industrial properties.",
    },
    {
      id: 5,
      question: "How can I schedule septic tank cleaning?",
      answer:
        "You can schedule by clicking the 'Book Septic Tank Cleaning' or 'Get Free Quote' button on our website. Our team will contact you to confirm the appointment.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Septic Tank Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional septic tank cleaning services in Nepal. We safely pump, clean, and maintain septic tanks for homes, apartments, and commercial properties."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/septic-tank-cleaning.jpg"
          alt="Septic Tank Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Septic Tank Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Septic Tank Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional septic tank cleaning, pumping, and maintenance for homes, apartments, and commercial properties to ensure safe and hygienic waste management.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Septic Tank Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Complete Septic Tank Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our septic tank cleaning ensures complete removal of sludge and waste, safe disinfection, and inspection for leaks or damage. We use trained professionals and modern equipment for reliable results.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular maintenance prevents clogs, backups, and health hazards, ensuring your septic system works efficiently.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/septic-tank-cleaning/1.jpg"
              alt="Septic Tank Pumping"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pumping & Waste Removal</h3>
            <p className="text-gray-600">
              Safely pump out waste and remove sludge from your septic tank for clean operation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/septic-tank-cleaning/2.jpg"
              alt="Septic Tank Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tank Cleaning & Scrubbing</h3>
            <p className="text-gray-600">
              Clean tank walls and floors to remove buildup and ensure hygienic conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/septic-tank-cleaning/3.jpg"
              alt="Septic Tank Inspection"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Inspection & Maintenance</h3>
            <p className="text-gray-600">
              Inspect for leaks, cracks, and system functionality to prevent future issues.
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

export default SepticTankCleaning;