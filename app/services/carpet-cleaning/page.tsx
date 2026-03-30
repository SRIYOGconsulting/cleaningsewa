"use client";

import React, { useState } from "react";
import Head from "next/head";

const CarpetCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does carpet cleaning service include?",
      answer:
        "Our carpet cleaning service includes deep vacuuming, stain removal, shampooing, and sanitization to remove dirt, allergens, and bacteria.",
    },
    {
      id: 2,
      question: "Can you remove tough stains from carpets?",
      answer:
        "Yes, we use professional-grade solutions to remove tough stains like food, spills, pet stains, and dirt buildup.",
    },
    {
      id: 3,
      question: "Are the cleaning products safe?",
      answer:
        "Yes, we use eco-friendly and safe cleaning products that are suitable for homes with children and pets.",
    },
    {
      id: 4,
      question: "How long does it take for carpets to dry?",
      answer:
        "Drying time typically ranges from 2 to 6 hours depending on the cleaning method and ventilation.",
    },
    {
      id: 5,
      question: "How can I book carpet cleaning service?",
      answer:
        "You can easily book by clicking the 'Book Carpet Cleaning' button or requesting a quote through our website.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Carpet Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional carpet cleaning services in Nepal. Remove stains, dust, and allergens with deep cleaning and sanitization for fresh carpets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/carpet-cleaning.jpg"
          alt="Carpet Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Carpet Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Carpet Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional carpet cleaning services to remove stains, dust, and allergens, ensuring fresh, clean, and hygienic carpets.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Carpet Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Carpet Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our carpet cleaning services in Nepal are designed to deeply clean and restore your carpets. We remove embedded dirt, dust, allergens, and stains to improve cleanliness and indoor air quality.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using advanced equipment and safe cleaning solutions, we ensure your carpets look fresh, smell clean, and last longer.
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
              src="/services/carpet-cleaning/1.jpg"
              alt="Deep Carpet Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Deep Carpet Cleaning
            </h3>
            <p className="text-gray-600">
              Thorough cleaning to remove deep-seated dirt, dust, and allergens.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/carpet-cleaning/2.jpg"
              alt="Stain Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Stain Removal
            </h3>
            <p className="text-gray-600">
              Remove tough stains and restore the original look of your carpets.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/carpet-cleaning/3.jpg"
              alt="Carpet Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Carpet Sanitization
            </h3>
            <p className="text-gray-600">
              Eliminate bacteria and allergens for a healthier environment.
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

export default CarpetCleaning;