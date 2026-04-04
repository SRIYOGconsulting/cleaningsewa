"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const GarageCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the garage cleaning service include?",
      answer:
        "Our garage cleaning service includes sweeping, power washing, degreasing floors, organizing, and removal of dirt, debris, and oil stains to ensure a clean and safe garage.",
    },
    {
      id: 2,
      question: "Do you provide eco-friendly cleaning products?",
      answer:
        "Yes, we use safe and eco-friendly cleaning products to protect your garage surfaces and the environment.",
    },
    {
      id: 3,
      question: "Can I schedule a one-time or recurring cleaning?",
      answer:
        "We offer flexible scheduling. You can book a one-time deep garage cleaning or arrange recurring maintenance weekly, bi-weekly, or monthly.",
    },
    {
      id: 4,
      question: "Do you clean both residential and commercial garages?",
      answer:
        "Absolutely. Our team handles single-car garages, multi-car residential garages, and commercial garages with professionalism and efficiency.",
    },
    {
      id: 5,
      question: "How can I book a garage cleaning service?",
      answer:
        "You can schedule by clicking the 'Book Garage Cleaning' or 'Get Free Quote' button. Our team will confirm your booking promptly.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Garage Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional garage cleaning services in Nepal. Deep cleaning, power washing, degreasing, and organizing residential and commercial garages."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/garage-cleaning.jpg"
          alt="Garage Cleaning Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Garage Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Garage Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional garage cleaning services for residential and commercial spaces. We remove dirt, oil stains, debris, and clutter to ensure a safe, organized, and hygienic garage.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Garage Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Complete Garage Cleaning Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our garage cleaning services in Nepal ensure your garage is spotless and organized. We use modern equipment and eco-friendly products for sweeping, power washing, degreasing, and organizing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide reliable and thorough garage cleaning for both residential and commercial properties, creating a safe and hygienic environment.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garage-cleaning/1.jpg"
              alt="Garage Floor Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sweeping and Vacuuming</h3>
            <p className="text-gray-600">
              Sweep, degrease, and power wash floors to remove oil stains, dirt, and grime.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garage-cleaning/2.jpg"
              alt="Garage Organizing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
            <p className="text-gray-600">
              Organize tools, storage, and equipment to create a clutter-free and efficient garage space.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/garage-cleaning/3.jpg"
              alt="Commercial Garage Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ceiling Cleaning</h3>
            <p className="text-gray-600">
              Deep cleaning and maintenance for multi-car garages and commercial parking spaces.
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

export default GarageCleaning;