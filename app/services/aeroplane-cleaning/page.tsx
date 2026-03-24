"use client";

import React, { useState } from "react";
import Head from "next/head";

const AeroplaneCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does aeroplane cleaning service include?",
      answer:
        "Our aeroplane cleaning service includes interior cabin cleaning, seat sanitization, carpet cleaning, lavatory cleaning, cockpit surface cleaning, and exterior washing.",
    },
    {
      id: 2,
      question: "Do you use aviation-safe cleaning products?",
      answer:
        "Yes, we use industry-approved, non-corrosive, and aviation-safe cleaning products to protect aircraft surfaces and equipment.",
    },
    {
      id: 3,
      question: "Do you provide cleaning for both private and commercial aircraft?",
      answer:
        "Yes, we offer professional cleaning services for private jets, helicopters, and commercial aircraft.",
    },
    {
      id: 4,
      question: "How long does aeroplane cleaning take?",
      answer:
        "Cleaning time depends on the aircraft size and condition, but most services are completed efficiently to minimize downtime.",
    },
    {
      id: 5,
      question: "How can I book aeroplane cleaning service?",
      answer:
        "You can book by clicking the 'Book Aeroplane Cleaning' button or contacting us directly for a custom quote.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Aeroplane Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional aeroplane cleaning services in Nepal. Interior cabin cleaning, exterior washing, and aircraft sanitization for private and commercial planes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/aeroplane-cleaning.jpg"
          alt="Aeroplane Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Aeroplane Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Aeroplane Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional aircraft cleaning services for interior and exterior surfaces. Ensure hygiene, safety, and premium presentation for your aircraft.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Aeroplane Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Aeroplane Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our aeroplane cleaning services in Nepal are designed to meet aviation standards, ensuring cleanliness, hygiene, and safety. We provide detailed interior cleaning, including seats, carpets, overhead compartments, and lavatories.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We also offer exterior aircraft cleaning to maintain a polished and professional appearance. Our trained team uses specialized equipment and safe cleaning solutions suitable for all types of aircraft.
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
              src="/services/aeroplane-cleaning/1.jpg"
              alt="Aircraft Interior Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Aircraft Interior Cleaning
            </h3>
            <p className="text-gray-600">
              Complete cabin cleaning including seats, carpets, and overhead compartments.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/aeroplane-cleaning/2.jpg"
              alt="Aircraft Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Aircraft Sanitization
            </h3>
            <p className="text-gray-600">
              Deep sanitization to eliminate bacteria and ensure passenger safety.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/aeroplane-cleaning/3.jpg"
              alt="Aircraft Exterior Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Aircraft Exterior Cleaning
            </h3>
            <p className="text-gray-600">
              Exterior washing and polishing to maintain aircraft appearance.
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

export default AeroplaneCleaning;