"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SwimmingPoolCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the swimming pool cleaning service include?",
      answer:
        "Our swimming pool cleaning service includes skimming, scrubbing, vacuuming, filter cleaning, chemical balancing, and debris removal to maintain a clean and safe pool.",
    },
    {
      id: 2,
      question: "How often should I clean my swimming pool?",
      answer:
        "We recommend weekly maintenance for private pools and more frequent checks for commercial pools to ensure hygienic water and proper chemical balance.",
    },
    {
      id: 3,
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we use safe and eco-friendly products to ensure the safety of swimmers and the environment.",
    },
    {
      id: 4,
      question: "Can you clean both indoor and outdoor pools?",
      answer:
        "Absolutely! We provide professional cleaning for indoor and outdoor swimming pools of all sizes.",
    },
    {
      id: 5,
      question: "How can I schedule a swimming pool cleaning service?",
      answer:
        "You can schedule a pool cleaning by clicking the 'Book Swimming Pool Cleaning' button on our website. Our team will contact you to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Swimming Pool Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional swimming pool cleaning services in Nepal including debris removal, chemical balancing, filter cleaning, and regular maintenance for safe and hygienic pools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/swimming-pool-cleaning.jpg"
          alt="Swimming Pool Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Swimming Pool Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Swimming Pool Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional swimming pool cleaning and maintenance for homes and commercial pools. We ensure hygienic, safe, and sparkling water for your pool.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Swimming Pool Cleaning
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Comprehensive Swimming Pool Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our swimming pool cleaning services in Nepal cover skimming, scrubbing, vacuuming, filter cleaning, chemical balancing, and debris removal. We ensure a clean, safe, and healthy swimming environment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide reliable maintenance for both residential and commercial pools to keep your water sparkling and safe.
        </p>
      </div>

      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/swimming-pool-cleaning/1.jpg"
              alt="Pool Skimming and Vacuuming"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Pool Skimming and Vacuuming
            </h3>
            <p className="text-gray-600">
              Thorough cleaning and trimming to remove dirt, dust, and allergens from your pet’s paws and nails.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/swimming-pool-cleaning/2.jpg"
              alt="Filter Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Filter Cleaning
            </h3>
            <p className="text-gray-600">
              Comprehensive filter cleaning to remove dirt, debris, and contaminants for optimal pool performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/swimming-pool-cleaning/3.jpg"
              alt="Chemical Balancing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Chemical Balancing
            </h3>
            <p className="text-gray-600">
              Maintain proper chemical levels to ensure a safe and healthy swimming environment.
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

export default SwimmingPoolCleaning;