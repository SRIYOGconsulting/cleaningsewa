"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const DesktopCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does desktop computer cleaning include?",
      answer:
        "Our desktop cleaning service includes dust removal from internal components, keyboard and mouse cleaning, screen wiping, and sanitization of all surfaces for optimal performance.",
    },
    {
      id: 2,
      question: "Is it safe for my computer hardware?",
      answer:
        "Yes, our trained technicians use proper tools and methods to clean your computer without causing damage to sensitive components.",
    },
    {
      id: 3,
      question: "How often should I get my desktop cleaned?",
      answer:
        "We recommend cleaning every 6–12 months depending on usage and environment, especially in dusty areas or offices.",
    },
    {
      id: 4,
      question: "Do you clean both home and office computers?",
      answer:
        "Absolutely! We provide desktop cleaning services for residential setups as well as corporate offices and IT departments.",
    },
    {
      id: 5,
      question: "How can I schedule desktop cleaning?",
      answer:
        "You can book our desktop cleaning service by clicking the 'Book Desktop Cleaning' button or requesting a quote on our website. Our team will contact you to confirm.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Desktop Computer Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional desktop computer cleaning services in Nepal. Dust removal, keyboard and screen cleaning, internal component sanitization, and maintenance for optimal performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/desktop-cleaning.jpg"
          alt="Desktop Computer Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Desktop Computer Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Desktop Computer Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional cleaning for desktop computers, including dust removal, internal component cleaning, and sanitization for better performance and longevity.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Desktop Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Professional Desktop Computer Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our desktop computer cleaning services in Nepal remove dust, dirt, and debris from internal and external components. We clean keyboards, screens, and other peripherals to ensure hygiene and smooth performance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Using specialized tools and safe cleaning solutions, our technicians prevent overheating, extend the lifespan of your computer, and maintain optimal performance.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/desktop-cleaning/1.jpg"
              alt="Internal Component Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Internal Component Cleaning</h3>
            <p className="text-gray-600">
              Dust removal from motherboard, CPU, GPU, and fans to prevent overheating.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/desktop-cleaning/2.jpg"
              alt="Keyboard & Screen Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Keyboard & Screen Cleaning</h3>
            <p className="text-gray-600">
              Sanitization and cleaning of keyboards, mice, and screens to remove dust and germs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/desktop-cleaning/3.jpg"
              alt="Peripheral Cleaning & Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Peripheral Cleaning & Sanitization</h3>
            <p className="text-gray-600">
              Cleaning and disinfecting all connected devices to maintain hygiene and performance.
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

export default DesktopCleaning;