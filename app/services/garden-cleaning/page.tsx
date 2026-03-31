"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const GardenCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the garden cleaning service include?",
      answer:
        "Our garden cleaning service includes lawn mowing, hedge trimming, leaf removal, weed control, flowerbed maintenance, and general tidying to keep your garden neat and healthy.",
    },
    {
      id: 2,
      question: "Do you use eco-friendly gardening products?",
      answer:
        "Yes, we use eco-friendly fertilizers and safe cleaning products to protect your plants, pets, and the environment.",
    },
    {
      id: 3,
      question: "Can I schedule a one-time or recurring garden cleaning?",
      answer:
        "We offer flexible options. You can book a one-time service or schedule regular maintenance weekly, bi-weekly, or monthly to keep your garden in perfect shape.",
    },
    {
      id: 4,
      question: "Do you handle both residential and commercial gardens?",
      answer:
        "Absolutely. Our team services private gardens, apartment green spaces, and commercial landscapes with the same professional care.",
    },
    {
      id: 5,
      question: "How can I book a garden cleaning service?",
      answer:
        "You can schedule by clicking the 'Book Garden Cleaning' or 'Get Free Quote' button. Our team will confirm your booking promptly.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Garden Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional garden cleaning services in Nepal including lawn mowing, hedge trimming, leaf removal, weed control, and flowerbed maintenance for residential and commercial gardens."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/garden-cleaning.jpg"
          alt="Garden Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Garden Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Garden Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional garden cleaning for homes, apartments, and commercial spaces. Lawn mowing, hedge trimming, weed removal, and maintenance to keep your garden neat, tidy, and healthy.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Garden Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-5">
          Complete Garden Cleaning Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our garden cleaning services in Nepal ensure your outdoor spaces are well-maintained and visually appealing. We handle lawn care, hedge trimming, leaf removal, flowerbed maintenance, and general tidying.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          With trained professionals and eco-friendly products, we deliver reliable and thorough garden cleaning for both residential and commercial gardens.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garden-cleaning/1.jpg"
              alt="Lawn Mowing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cleaning Pathways</h3>
            <p className="text-gray-600">
              Regular mowing, fertilizing, and trimming to keep your lawn healthy and tidy.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garden-cleaning/2.jpg"
              alt="Hedge Trimming"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dead Plant Removal</h3>
            <p className="text-gray-600">
              Maintain neat hedges, bushes, and shrubs for a clean and attractive garden appearance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garden-cleaning/3.jpg"
              alt="Leaf & Weed Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fountain Cleaning</h3>
            <p className="text-gray-600">
              Remove leaves, weeds, and debris to keep your garden clean, safe, and healthy.
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

export default GardenCleaning;