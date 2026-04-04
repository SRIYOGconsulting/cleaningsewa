"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const HomeCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the home cleaning service include?",
      answer:
        "Our home cleaning service includes deep cleaning of floors, bathrooms, kitchen, living areas, carpet cleaning, sofa cleaning, and AC cleaning. We ensure a hygienic and spotless home.",
    },
    {
      id: 2,
      question: "Do you provide eco-friendly cleaning products?",
      answer:
        "Yes, we use eco-friendly and safe cleaning products to ensure the safety of your family, pets, and the environment.",
    },
    {
      id: 3,
      question: "Can I book a one-time or recurring cleaning?",
      answer:
        "We offer flexible options. You can book a one-time cleaning or schedule recurring services weekly, bi-weekly, or monthly as per your needs.",
    },
    {
      id: 4,
      question: "Do you cover Sofa cleaning?",
      answer:
        "Absolutely! We specialize in sofa cleaning to remove dust, debris, and ensure your ready to enjoy.",
    },
    {
      id: 5,
      question: "How can I schedule a home cleaning service?",
      answer:
        "You can easily schedule a cleaning by clicking the 'Book Home Cleaning' or 'Get Free Quote' button on our website. Our team will get in touch to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Home Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional home cleaning services in Nepal including deep cleaning, carpet cleaning, AC cleaning, sofa cleaning, and post-construction cleaning for houses and apartments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/home-cleaning.jpg"
          alt="Home Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Home Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Home Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional home cleaning services for apartments and houses. Deep cleaning, carpet cleaning, AC cleaning, and sofa cleaning to ensure a spotless and hygienic home.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Home Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Comprehensive Home Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our home cleaning services in Nepal ensure every corner of your house is spotless. We use trained professionals, modern equipment, and eco-friendly products for deep cleaning, carpet cleaning, sofa cleaning, AC cleaning, and post-construction cleanup.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We take pride in delivering reliable and thorough cleaning, creating a healthy and hygienic living space for you and your family.
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
              src="/services/home-cleaning/1.jpg"
              alt="Deep Home Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Deep Home Cleaning</h3>
            <p className="text-gray-600">
              Complete residential cleaning including floors, bathrooms, kitchen, and living areas.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/home-cleaning/2.jpg"
              alt="Carpet & Sofa Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Carpet & Sofa Cleaning</h3>
            <p className="text-gray-600">
              Remove dust, stains, and allergens from carpets and sofas for a fresh home.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/home-cleaning/3.jpg"
              alt="Bedroom Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Bedroom Cleaning</h3>
            <p className="text-gray-600">
              Remove dust and debris after renovations or construction projects.
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

export default HomeCleaning;