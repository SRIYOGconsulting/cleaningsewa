"use client";

import React, { useState } from "react";
import Head from "next/head";

const HelicopterCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the helicopter cleaning service include?",
      answer:
        "Our helicopter cleaning service includes exterior washing, interior cabin cleaning, cockpit sanitation, rotor and landing gear cleaning, and polishing to maintain appearance and safety standards.",
    },
    {
      id: 2,
      question: "Do you use aviation-approved cleaning products?",
      answer:
        "Yes, we use specialized, aviation-approved cleaning solutions and disinfectants that are safe for sensitive aircraft materials and electronics.",
    },
    {
      id: 3,
      question: "Can I schedule a one-time or recurring cleaning?",
      answer:
        "We provide both one-time deep cleaning and recurring maintenance schedules for helicopters, depending on operational requirements and usage frequency.",
    },
    {
      id: 4,
      question: "Do you service private and commercial helicopters?",
      answer:
        "Absolutely. We service private, corporate, and commercial helicopters, ensuring all aircraft are cleaned safely and professionally.",
    },
    {
      id: 5,
      question: "How can I book a helicopter cleaning service?",
      answer:
        "Booking is easy—click the 'Book Helicopter Cleaning' or 'Get Free Quote' button. Our team will contact you to schedule the cleaning at your convenience.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Helicopter Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional helicopter cleaning services in Nepal including exterior washing, interior cabin cleaning, rotor and landing gear cleaning, and aviation-approved sanitation for private and commercial helicopters."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/helicopter-cleaning.jpg"
          alt="Helicopter Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Helicopter Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Helicopter Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional helicopter cleaning for private, corporate, and commercial aircraft. Exterior washing, cockpit and cabin sanitation, rotor and landing gear maintenance, and polishing to keep your helicopter safe and spotless.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Helicopter Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Helicopter Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our helicopter cleaning services in Nepal ensure every aircraft is spotless, hygienic, and well-maintained. We use aviation-approved products and trained professionals for exterior, interior, and cockpit cleaning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We deliver reliable, thorough, and safe helicopter cleaning services for private, corporate, and commercial operators.
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
              src="/services/helicopter-cleaning/1.jpg"
              alt="Exterior Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Exterior Cleaning & Polishing</h3>
            <p className="text-gray-600">
              Washing and polishing the fuselage, rotor, and landing gear to maintain appearance and reduce wear.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/helicopter-cleaning/2.jpg"
              alt="Cabin & Cockpit Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cabin & Cockpit Cleaning</h3>
            <p className="text-gray-600">
              Sanitization and cleaning of passenger cabin, cockpit controls, and seating areas using aviation-safe products.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/helicopter-cleaning/3.jpg"
              alt="Landing Gear & Rotor Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Landing Gear & Rotor Cleaning</h3>
            <p className="text-gray-600">
              Thorough cleaning of landing gear, rotors, and sensitive parts to ensure safety and proper operation.
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

export default HelicopterCleaning;