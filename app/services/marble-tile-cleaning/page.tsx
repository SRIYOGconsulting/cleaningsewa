"use client";

import React, { useState } from "react";
import Head from "next/head";

const MarbleTileCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does marble/tile cleaning include?",
      answer:
        "Our marble and tile cleaning service includes deep cleaning of floors, walls, grout lines, and polishing to restore the natural shine and hygiene of your surfaces.",
    },
    {
      id: 2,
      question: "Do you use chemical-free cleaning products?",
      answer:
        "Yes, we use eco-friendly and safe cleaning solutions that are effective yet safe for all marble and tile surfaces.",
    },
    {
      id: 3,
      question: "Can I book regular cleaning?",
      answer:
        "Absolutely! We provide one-time, weekly, bi-weekly, or monthly marble/tile cleaning based on your needs.",
    },
    {
      id: 4,
      question: "Do you provide polishing and stain removal?",
      answer:
        "Yes, our team specializes in stain removal, polishing, and restoring dull or worn-out marble and tile surfaces.",
    },
    {
      id: 5,
      question: "How can I schedule a marble/tile cleaning service?",
      answer:
        "You can schedule easily by clicking the 'Book Marble/Tile Cleaning' or 'Get Free Quote' button on our website. Our team will contact you to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Marble & Tile Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional marble and tile cleaning services in Nepal including deep cleaning, stain removal, polishing, and maintenance for residential and commercial spaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/marble-tile-cleaning.jpg"
          alt="Marble and Tile Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Marble/Tile Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Marble & Tile Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Restore the shine and hygiene of your marble and tile surfaces with professional cleaning, stain removal, and polishing services.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Marble/Tile Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Marble & Tile Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our marble and tile cleaning services ensure every surface in your home or office looks spotless and polished. We use trained professionals, modern equipment, and eco-friendly cleaning solutions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular cleaning helps preserve the natural shine, prevent discoloration, and maintain a hygienic environment for you and your family or employees.
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
              src="/services/marble-tile-cleaning/1.jpg"
              alt="Marble Floor Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Marble Floor Cleaning</h3>
            <p className="text-gray-600">
              Deep cleaning, stain removal, and polishing to restore the natural shine of your marble floors.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/marble-tile-cleaning/2.jpg"
              alt="Tile & Grout Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tile Polishing</h3>
            <p className="text-gray-600">
              Remove dirt and grime from tiles and grout lines to keep your surfaces hygienic and beautiful.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/marble-tile-cleaning/3.jpg"
              alt="Polishing & Maintenance"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Treating Discoloration</h3>
            <p className="text-gray-600">
              Maintain the brilliance of marble and tiles with professional polishing and protective treatments.
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

export default MarbleTileCleaning;