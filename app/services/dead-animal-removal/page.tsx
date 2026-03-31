"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const DeadAnimalRemoval = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What areas do you cover for dead animal removal?",
      answer:
        "We provide dead animal removal services for homes, offices, commercial buildings, and outdoor areas, including attics, basements, gardens, and walls.",
    },
    {
      id: 2,
      question: "Is your removal process safe and hygienic?",
      answer:
        "Yes, our trained professionals follow strict safety protocols using protective gear and disinfectants to ensure complete hygiene and safety.",
    },
    {
      id: 3,
      question: "Do you handle decomposed animals?",
      answer:
        "Absolutely. We are equipped to safely remove decomposed animals and perform thorough cleaning and disinfection of affected areas.",
    },
    {
      id: 4,
      question: "Do you use eco-friendly disinfectants?",
      answer:
        "Yes, we use environmentally safe disinfectants that effectively sanitize the area without harming the environment, pets, or humans.",
    },
    {
      id: 5,
      question: "How can I request dead animal removal?",
      answer:
        "You can request removal by clicking the 'Book Removal Service' button or contacting us via our website. Our team will respond promptly to schedule service.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Dead Animal Removal Services in Nepal</title>
        <meta
          name="description"
          content="Professional dead animal removal services in Nepal. Safe, hygienic, and eco-friendly removal from homes, offices, and commercial spaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/dead-animal-removal.jpg"
          alt="Dead Animal Removal Services"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Dead Animal Removal</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Dead Animal Removal Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Safe and professional removal of dead animals from homes, offices, and commercial areas. We clean and disinfect affected areas for a hygienic environment.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Dead Animal Removal Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Dead Animal Removal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our dead animal removal services in Nepal ensure a safe, hygienic, and eco-friendly process. We remove the animal, clean the area, and sanitize it to prevent health risks and odors.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Using modern equipment, protective gear, and certified disinfectants, we handle even decomposed animals while ensuring the safety of your family, pets, and employees.
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
              src="/services/dead-animal-removal/1.jpg"
              alt="Home Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Home Removal</h3>
            <p className="text-gray-600">
              Safe removal of dead animals from residential areas including attics, basements, and yards.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/dead-animal-removal/2.jpg"
              alt="Office & Commercial Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Office & Commercial Removal</h3>
            <p className="text-gray-600">
              Professional removal from offices, shops, warehouses, and other commercial spaces.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/dead-animal-removal/3.jpg"
              alt="Sanitization & Disinfection"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sanitization & Disinfection</h3>
            <p className="text-gray-600">
              Thorough cleaning and disinfection of affected areas to prevent odors, bacteria, and health hazards.
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

export default DeadAnimalRemoval;