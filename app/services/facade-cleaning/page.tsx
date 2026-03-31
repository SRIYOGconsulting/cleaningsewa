"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const FacadeCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the facade cleaning service include?",
      answer:
        "Our facade cleaning service includes cleaning building exteriors, windows, glass panels, and walls. We remove dust, grime, algae, and stains to restore the building's appearance.",
    },
    {
      id: 2,
      question: "Do you provide high-rise building cleaning?",
      answer:
        "Yes, we have trained professionals and specialized equipment to safely clean high-rise facades, including scaffolding and rope-access methods.",
    },
    {
      id: 3,
      question: "Are your cleaning methods safe for all facade types?",
      answer:
        "Absolutely. We use eco-friendly and non-abrasive cleaning agents suitable for glass, concrete, metal, and stone surfaces without causing damage.",
    },
    {
      id: 4,
      question: "Can you provide one-time and regular maintenance?",
      answer:
        "Yes, we offer both one-time deep cleaning and scheduled facade maintenance to keep buildings clean and presentable year-round.",
    },
    {
      id: 5,
      question: "How do I schedule a facade cleaning service?",
      answer:
        "You can schedule by clicking the 'Book Facade Cleaning' or 'Get Free Quote' button. Our team will coordinate and confirm your appointment promptly.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Facade Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional facade cleaning services in Nepal. Cleaning building exteriors, windows, glass panels, walls, and high-rise buildings for a spotless appearance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/facade-cleaning.jpg"
          alt="Facade Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Facade Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Facade Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional facade cleaning services for residential and commercial buildings. We clean windows, glass panels, walls, and high-rise exteriors to restore their shine and appearance.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Facade Cleaning Service
              </button>
            </Link>
            

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Complete Facade Cleaning Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our facade cleaning services restore the original look of your building. Using modern equipment and eco-friendly products, we clean windows, glass panels, walls, and high-rise exteriors efficiently and safely.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide reliable services for both commercial and residential properties, ensuring a spotless and professional appearance.
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
              src="/services/facade-cleaning/1.jpg"
              alt="Window & Glass Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Window & Glass Cleaning</h3>
            <p className="text-gray-600">
              Remove dirt, stains, and streaks from windows and glass panels for crystal-clear visibility.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/facade-cleaning/2.jpg"
              alt="Wall & Exterior Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wall & Exterior Cleaning</h3>
            <p className="text-gray-600">
              Clean concrete, stone, or metal walls to remove dust, algae, and environmental stains.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/facade-cleaning/3.jpg"
              alt="High-Rise Facade Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">High-Rise Facade Cleaning</h3>
            <p className="text-gray-600">
              Specialized cleaning for tall buildings using safe scaffolding and rope-access techniques.
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

export default FacadeCleaning;