"use client";

import React, { useState } from "react";
import Head from "next/head";

const KitchenCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the kitchen cleaning service include?",
      answer:
        "Our kitchen cleaning service includes deep cleaning of countertops, sinks, cabinets, appliances, tiles, and floors. We remove grease, grime, and ensure your kitchen is hygienic and spotless.",
    },
    {
      id: 2,
      question: "Do you use safe cleaning products?",
      answer:
        "Yes, we use eco-friendly and non-toxic cleaning products to ensure the safety of your family and the environment.",
    },
    {
      id: 3,
      question: "Can I book a one-time or recurring service?",
      answer:
        "We offer flexible options. You can book a one-time kitchen cleaning or schedule recurring services weekly, bi-weekly, or monthly as per your needs.",
    },
    {
      id: 4,
      question: "Do you clean ovens and refrigerators?",
      answer:
        "Absolutely! Our team provides thorough cleaning of ovens, refrigerators, microwaves, and other kitchen appliances.",
    },
    {
      id: 5,
      question: "How can I schedule a kitchen cleaning service?",
      answer:
        "You can easily schedule a cleaning by clicking the 'Book Kitchen Cleaning' or 'Get Free Quote' button on our website. Our team will get in touch to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Kitchen Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional kitchen cleaning services in Nepal including deep cleaning of countertops, sinks, cabinets, appliances, tiles, and floors for a hygienic kitchen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/kitchen-cleaning.jpg"
          alt="Kitchen Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Kitchen Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Kitchen Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional kitchen cleaning services for homes and apartments. Deep cleaning of countertops, cabinets, sinks, appliances, and floors to ensure a spotless and hygienic kitchen.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Kitchen Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Kitchen Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our kitchen cleaning services in Nepal ensure every corner of your kitchen is hygienic and sparkling clean. We use trained professionals, modern equipment, and safe cleaning products to remove grease, grime, and bacteria.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We aim to create a healthy and safe cooking environment for you and your family with thorough and reliable kitchen cleaning.
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
              src="/services/kitchen-cleaning/1.jpg"
              alt="Countertops & Surfaces"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Countertops & Surfaces</h3>
            <p className="text-gray-600">
              Deep cleaning of countertops, tabletops, and other surfaces to remove dirt and grease.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/kitchen-cleaning/2.jpg"
              alt="Appliance Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Appliance Cleaning</h3>
            <p className="text-gray-600">
              Thorough cleaning of ovens, microwaves, refrigerators, and other kitchen appliances.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/kitchen-cleaning/3.jpg"
              alt="Floor & Cabinet Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Floor & Cabinet Cleaning</h3>
            <p className="text-gray-600">
              Cleaning and disinfecting kitchen floors, cabinets, and storage areas for a spotless finish.
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

export default KitchenCleaning;