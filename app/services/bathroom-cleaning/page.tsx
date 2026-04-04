"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const BathroomCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does bathroom cleaning service include?",
      answer:
        "Our bathroom cleaning service includes deep cleaning of tiles, toilet, sink, shower area, mirrors, and removal of stains, mold, and bacteria for a hygienic space.",
    },
    {
      id: 2,
      question: "Do you remove hard water stains and mold?",
      answer:
        "Yes, we specialize in removing hard water stains, soap scum, and mold buildup using professional cleaning solutions.",
    },
    {
      id: 3,
      question: "Are the cleaning products safe?",
      answer:
        "Yes, we use safe and eco-friendly cleaning products that are effective while being safe for your family and surfaces.",
    },
    {
      id: 4,
      question: "How often should I get my bathroom cleaned?",
      answer:
        "For best hygiene, we recommend deep bathroom cleaning at least once a month depending on usage.",
    },
    {
      id: 5,
      question: "How can I book bathroom cleaning service?",
      answer:
        "You can easily book by clicking the 'Book Bathroom Cleaning' button or requesting a free quote through our website.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Bathroom Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional bathroom cleaning services in Nepal. Remove stains, mold, and bacteria for a spotless and hygienic bathroom."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/bathroom-cleaning.jpg"
          alt="Bathroom Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Bathroom Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Bathroom Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional bathroom cleaning services to remove stains, mold, and bacteria, ensuring a fresh, hygienic, and spotless bathroom.
            </p>

            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Bathroom Cleaning Service
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Professional Bathroom Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our bathroom cleaning services in Nepal ensure deep cleaning and sanitization of every corner. We remove stubborn stains, soap scum, hard water marks, and harmful bacteria from tiles, toilets, sinks, and shower areas.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using professional equipment and safe cleaning products, we restore cleanliness and hygiene, making your bathroom fresh, safe, and comfortable to use.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/bathroom-cleaning/1.jpg"
              alt="Bathroom Deep Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Bathroom Deep Cleaning
            </h3>
            <p className="text-gray-600">
              Thorough cleaning of tiles, floors, and fixtures for complete hygiene.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/bathroom-cleaning/2.jpg"
              alt="Bathroom Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Bathroom Sanitization
            </h3>
            <p className="text-gray-600">
              Eliminate germs, bacteria, and viruses for a safe environment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/bathroom-cleaning/3.jpg"
              alt="Tile & Grout Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Tile & Grout Cleaning
            </h3>
            <p className="text-gray-600">
              Restore shine and remove dirt from tiles and grout lines.
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

export default BathroomCleaning;