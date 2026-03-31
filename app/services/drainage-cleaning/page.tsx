"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const DrainageCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does your drainage cleaning service include?",
      answer:
        "Our drainage cleaning service includes unclogging sinks, toilets, floor drains, and sewer lines. We remove blockages, sludge, and debris to ensure smooth water flow.",
    },
    {
      id: 2,
      question: "Do you provide emergency drainage services?",
      answer:
        "Yes, we offer emergency drain cleaning for clogged pipes, overflowing drains, or sewage backup situations.",
    },
    {
      id: 3,
      question: "Is your method safe for home plumbing?",
      answer:
        "Absolutely. We use professional-grade equipment and safe chemical treatments that do not damage pipes while effectively clearing blockages.",
    },
    {
      id: 4,
      question: "Do you service both residential and commercial properties?",
      answer:
        "Yes, we provide drainage cleaning for homes, apartments, offices, restaurants, and other commercial spaces.",
    },
    {
      id: 5,
      question: "How can I schedule a drainage cleaning service?",
      answer:
        "You can book our services by clicking the 'Book Drainage Cleaning' or 'Get Free Quote' button. Our team will confirm your appointment promptly.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Drainage Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional drainage cleaning services in Nepal for homes and commercial spaces. Unclog drains, sinks, toilets, and sewer lines for smooth water flow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/drainage-cleaning.jpg"
          alt="Drainage Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Drainage Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Drainage Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional drainage cleaning services for homes and commercial spaces. We remove blockages, unclog drains, and maintain smooth water flow.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Drainage Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Complete Drainage Cleaning Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our team ensures all drains, pipes, and sewer lines are cleaned professionally using modern equipment and safe cleaning agents. Prevent water backups, unpleasant odors, and damage to your property.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We cater to residential and commercial properties, providing reliable and prompt service for any drainage issue.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/drainage-cleaning/1.jpg"
              alt="Pipe & Drain Unclogging"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pipe & Drain Unclogging</h3>
            <p className="text-gray-600">
              Clear blockages in sinks, toilets, and floor drains for smooth water flow.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/drainage-cleaning/2.jpg"
              alt="Sewer Line Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sewer Line Cleaning</h3>
            <p className="text-gray-600">
              Professional cleaning of main sewer lines to prevent backups and maintain hygiene.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/drainage-cleaning/3.jpg"
              alt="Emergency Drain Services"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Emergency Drain Services</h3>
            <p className="text-gray-600">
              Fast response for clogged drains, overflows, or sewage emergencies.
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

export default DrainageCleaning;