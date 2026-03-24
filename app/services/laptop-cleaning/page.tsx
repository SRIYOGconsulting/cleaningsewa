"use client";

import React, { useState } from "react";
import Head from "next/head";

const LaptopCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the laptop cleaning service include?",
      answer:
        "Our laptop cleaning service includes thorough cleaning of the keyboard, screen, vents, ports, and internal dust removal. We ensure your laptop runs cooler and stays hygienic.",
    },
    {
      id: 2,
      question: "Is it safe for my laptop?",
      answer:
        "Yes, we use professional tools and non-toxic, anti-static cleaning solutions to safely clean laptops without damaging components.",
    },
    {
      id: 3,
      question: "Can I book a one-time or regular cleaning?",
      answer:
        "We offer both one-time laptop cleaning and scheduled services to keep your device dust-free and performing optimally.",
    },
    {
      id: 4,
      question: "Do you offer internal dust and fan cleaning?",
      answer:
        "Absolutely! Our service includes internal cleaning of fans, heat sinks, and vents to improve cooling and prevent overheating.",
    },
    {
      id: 5,
      question: "How can I schedule a laptop cleaning service?",
      answer:
        "You can schedule a cleaning by clicking the 'Book Laptop Cleaning' or 'Get Free Quote' button on our website. Our team will confirm your booking promptly.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Laptop Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional laptop cleaning services in Nepal including keyboard, screen, ports, internal dust removal, and fan cleaning to keep your laptop hygienic and performing optimally."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/laptop-cleaning.jpg"
          alt="Laptop Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Laptop Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Laptop Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional laptop cleaning services to remove dust, dirt, and grime from keyboards, screens, vents, and internal components. Keep your laptop running smoothly and hygienic.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Laptop Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Laptop Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our laptop cleaning service ensures your device is dust-free, hygienic, and performing at its best. We use professional tools, anti-static solutions, and skilled technicians to clean keyboards, screens, vents, fans, and ports.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular cleaning prevents overheating, improves performance, and extends the life of your laptop.
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
              src="/services/laptop-cleaning/1.jpg"
              alt="Keyboard Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Keyboard Cleaning</h3>
            <p className="text-gray-600">
              Remove dust, crumbs, and dirt from your laptop keyboard to maintain hygiene and functionality.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/laptop-cleaning/2.jpg"
              alt="Screen Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Screen & Port Cleaning</h3>
            <p className="text-gray-600">
              Clean laptop screens, USB ports, audio jacks, and ventilation openings to keep everything spotless.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/laptop-cleaning/3.jpg"
              alt="Internal & Fan Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Internal & Fan Cleaning</h3>
            <p className="text-gray-600">
              Remove internal dust from fans and heat sinks to prevent overheating and improve laptop performance.
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

export default LaptopCleaning;