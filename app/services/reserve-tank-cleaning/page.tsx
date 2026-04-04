"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const ReserveTankCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is included in reserve tank cleaning?",
      answer:
        "Our reserve tank cleaning service includes draining the tank, scrubbing walls and floors, removing sludge and debris, disinfecting the tank, and refilling with clean water.",
    },
    {
      id: 2,
      question: "How often should a water tank be cleaned?",
      answer:
        "We recommend cleaning your reserve tank at least once every 6 months or more frequently if water quality issues arise.",
    },
    {
      id: 3,
      question: "Do you use safe disinfectants?",
      answer:
        "Yes, we use safe, EPA-approved disinfectants that are effective in removing bacteria and safe for household water tanks.",
    },
    {
      id: 4,
      question: "Can you clean tanks of all sizes?",
      answer:
        "Absolutely! We handle tanks of all capacities, from small residential tanks to large commercial storage tanks.",
    },
    {
      id: 5,
      question: "How do I schedule a reserve tank cleaning?",
      answer:
        "You can book by clicking the 'Book Reserve Tank Cleaning' or 'Get Free Quote' button on our website. Our team will contact you to confirm the schedule.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Reserve Tank Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional reserve tank cleaning services in Nepal. We clean, disinfect, and maintain water storage tanks for homes, apartments, and commercial properties."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/reserve-tank-cleaning.jpg"
          alt="Reserve Tank Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Reserve Tank Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Reserve Tank Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional cleaning and disinfection of water storage tanks for homes, apartments, and commercial properties to ensure safe and hygienic water.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Reserve Tank Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Professional Reserve Tank Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We ensure every water tank is thoroughly cleaned, removing dirt, sludge, and harmful bacteria. Our trained professionals use modern equipment and safe disinfectants to maintain clean and safe water.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular cleaning prevents water contamination and ensures safe drinking water for your home or business.
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
              src="/services/reserve-tank-cleaning/1.jpg"
              alt="Tank Draining"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tank Draining & Scrubbing</h3>
            <p className="text-gray-600">
              Remove water and scrub tank walls and floors to remove sludge and debris.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/reserve-tank-cleaning/2.jpg"
              alt="Tank Disinfection"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Disinfection</h3>
            <p className="text-gray-600">
              Safe and effective disinfectants are applied to eliminate bacteria and contaminants.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/reserve-tank-cleaning/3.jpg"
              alt="Tank Refill"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Refill & Inspection</h3>
            <p className="text-gray-600">
              Refill with clean water and inspect the tank to ensure complete hygiene and safety.
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

export default ReserveTankCleaning;