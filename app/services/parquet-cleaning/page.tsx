"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const ParquetCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does parquet cleaning include?",
      answer:
        "Our parquet cleaning service includes deep cleaning, polishing, and maintenance of wooden floors to restore shine and remove dust, stains, and scratches.",
    },
    {
      id: 2,
      question: "Do you use eco-friendly products?",
      answer:
        "Yes, we use safe, eco-friendly products specifically designed for wooden surfaces, ensuring no damage while maintaining a healthy environment.",
    },
    {
      id: 3,
      question: "Can parquet cleaning be done regularly?",
      answer:
        "Absolutely! We offer one-time as well as recurring parquet cleaning services to maintain the beauty and longevity of your wooden floors.",
    },
    {
      id: 4,
      question: "Do you handle old or delicate parquet floors?",
      answer:
        "Yes, our trained professionals carefully handle old and delicate parquet flooring, using techniques that protect the wood while providing a thorough clean.",
    },
    {
      id: 5,
      question: "How can I schedule a parquet cleaning service?",
      answer:
        "You can book your parquet cleaning by clicking 'Book Parquet Cleaning' or 'Get Free Quote' on our website. Our team will contact you to confirm your appointment.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Parquet Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional parquet cleaning services in Nepal. Deep cleaning, polishing, and maintenance for wooden floors to restore shine and remove dust, stains, and scratches."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/parquet-cleaning.jpg"
          alt="Parquet Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Parquet Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Parquet Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional parquet floor cleaning, polishing, and maintenance services. Keep your wooden floors spotless, shiny, and long-lasting.
            </p>
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Parquet Cleaning Service
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Key Parquet Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our parquet cleaning services in Nepal ensure that your wooden floors are deep cleaned, polished, and protected. We use professional techniques and eco-friendly products for spotless and durable parquet floors.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular parquet cleaning enhances the beauty and longevity of your floors, maintaining a healthy and elegant living space.
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
              src="/services/parquet-cleaning/1.jpg"
              alt="Deep Parquet Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Deep Cleaning & Polishing</h3>
            <p className="text-gray-600">
              Remove dust, dirt, and scratches while restoring the natural shine of your parquet floors.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/parquet-cleaning/2.jpg"
              alt="Parquet Maintenance"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Floor Maintenance</h3>
            <p className="text-gray-600">
              Regular maintenance services to protect your parquet floors from wear and prolong their lifespan.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/parquet-cleaning/3.jpg"
              alt="Wood Floor Polishing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wood Floor Polishing</h3>
            <p className="text-gray-600">
              Professional polishing techniques to enhance floor appearance and restore a smooth, glossy finish.
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

export default ParquetCleaning;