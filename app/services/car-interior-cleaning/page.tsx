"use client";

import React, { useState } from "react";
import Head from "next/head";

const CarInteriorCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does car interior cleaning include?",
      answer:
        "Our service includes vacuuming, seat cleaning, dashboard polishing, carpet cleaning, stain removal, and complete interior sanitization.",
    },
    {
      id: 2,
      question: "Do you remove stains and odors?",
      answer:
        "Yes, we remove tough stains, spills, and unpleasant odors using professional cleaning products and techniques.",
    },
    {
      id: 3,
      question: "Is the cleaning safe for leather and fabric seats?",
      answer:
        "Yes, we use specialized products suitable for both leather and fabric to ensure safe and effective cleaning.",
    },
    {
      id: 4,
      question: "How long does the cleaning take?",
      answer:
        "Depending on the condition of the vehicle, cleaning typically takes 1 to 3 hours.",
    },
    {
      id: 5,
      question: "How can I book car interior cleaning service?",
      answer:
        "You can easily book by clicking the 'Book Car Interior Cleaning' button or requesting a quote through our website.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Car Interior Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional car interior cleaning services in Nepal. Deep cleaning, stain removal, and sanitization for a fresh and hygienic vehicle interior."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/car-interior-cleaning.jpg"
          alt="Car Interior Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">

            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Car Interior Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Car Interior Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Professional car interior cleaning services to remove dust, stains, and bacteria, ensuring a fresh, clean, and hygienic driving experience.
            </p>

            <button className="bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Car Interior Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Car Interior Cleaning
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our car interior cleaning services in Nepal provide deep cleaning for every part of your vehicle’s interior. From seats and carpets to dashboards and door panels, we ensure a spotless and refreshed environment.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using advanced tools and safe cleaning solutions, we remove dirt, stains, bacteria, and odors, giving your car a clean and comfortable feel.
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
              src="/services/car-interior-cleaning/1.jpg"
              alt="Seat Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Seat Cleaning
            </h3>
            <p className="text-gray-600">
              Deep cleaning for fabric and leather seats to remove stains and dirt.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/car-interior-cleaning/2.jpg"
              alt="Carpet Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Carpet Cleaning
            </h3>
            <p className="text-gray-600">
              Remove dust, debris, and stains from car carpets and floor mats.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/car-interior-cleaning/3.jpg"
              alt="Interior Sanitization"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Interior Sanitization
            </h3>
            <p className="text-gray-600">
              Eliminate bacteria and odors for a hygienic driving environment.
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

export default CarInteriorCleaning;