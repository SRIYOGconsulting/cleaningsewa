"use client";

import React, { useState } from "react";
import Head from "next/head";

const ExecutiveChairCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the executive chair cleaning service include?",
      answer:
        "Our service includes deep cleaning of executive chairs using safe solutions, stain removal, deodorization, and sanitization to ensure a hygienic and fresh seating experience.",
    },
    {
      id: 2,
      question: "Are your cleaning products safe for leather and fabric chairs?",
      answer:
        "Yes, we use eco-friendly, non-toxic cleaning solutions suitable for both leather and fabric chairs without causing damage or discoloration.",
    },
    {
      id: 3,
      question: "How long does it take for chairs to dry?",
      answer:
        "Depending on the material and cleaning method, chairs typically dry within 2–4 hours.",
    },
    {
      id: 4,
      question: "Can you remove tough stains and odors?",
      answer:
        "Absolutely! Our professional-grade solutions effectively remove stains, food spills, ink marks, and unpleasant odors from executive chairs.",
    },
    {
      id: 5,
      question: "How can I book executive chair cleaning?",
      answer:
        "You can book the service directly through our website by clicking the 'Book Executive Chair Cleaning' button or request a free quote.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Executive Chair Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional executive chair cleaning services in Nepal. Deep cleaning, stain removal, deodorization, and sanitization for fabric and leather chairs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/chair-cleaning.jpg"
          alt="Executive Chair Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Executive Chair Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Executive Chair Cleaning in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional cleaning for executive chairs including stain removal, deodorization, sanitization, and fabric or leather care to maintain hygiene and appearance.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Executive Chair Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Executive Chair Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our executive chair cleaning services ensure your office seating is clean, sanitized, and comfortable. We handle leather, mesh, and fabric chairs using professional equipment and eco-friendly cleaning solutions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular cleaning of office chairs not only improves hygiene but also prolongs their lifespan and maintains a professional look for your workspace.
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
              src="/services/chair-cleaning/1.jpg"
              alt="Deep Chair Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Deep Chair Cleaning</h3>
            <p className="text-gray-600">
              Remove dirt, dust, and debris from all parts of the chair including seat, backrest, and armrests.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/chair-cleaning/2.jpg"
              alt="Stain Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Stain Removal</h3>
            <p className="text-gray-600">
              Targeted solutions to remove tough stains from leather and fabric chairs without causing damage.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/chair-cleaning/3.jpg"
              alt="Sanitization & Deodorization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sanitization & Deodorization</h3>
            <p className="text-gray-600">
              Eliminate bacteria, germs, and odors to keep your chairs hygienic and fresh.
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

export default ExecutiveChairCleaning;