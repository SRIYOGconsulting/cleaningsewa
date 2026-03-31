"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const PostConstructionCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is included in post-construction cleaning?",
      answer:
        "Our post-construction cleaning includes removing dust, debris, paint residues, and leftover materials from all areas including floors, walls, windows, and fixtures, leaving your property move-in ready.",
    },
    {
      id: 2,
      question: "Do you provide eco-friendly cleaning solutions?",
      answer:
        "Yes, we use safe and eco-friendly cleaning products wherever possible, ensuring no harm to your family, pets, or the environment.",
    },
    {
      id: 3,
      question: "Can I schedule a one-time or recurring service?",
      answer:
        "Post-construction cleaning is typically a one-time service, but we can arrange follow-up cleaning for larger projects or ongoing maintenance as needed.",
    },
    {
      id: 4,
      question: "Do you handle commercial and residential properties?",
      answer:
        "Absolutely! We provide post-construction cleaning for apartments, houses, offices, and commercial spaces of all sizes.",
    },
    {
      id: 5,
      question: "How do I schedule a post-construction cleaning?",
      answer:
        "You can book your service by clicking 'Book Post Construction Cleaning' or 'Get Free Quote' on our website. Our team will contact you to confirm the appointment.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Post Construction Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional post-construction cleaning services in Nepal. Remove dust, debris, paint residue, and leftover materials to make your home or office move-in ready."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/post-construction-cleaning.jpg"
          alt="Post Construction Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Post Construction Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Post Construction Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional post-construction cleaning for homes, apartments, and offices. We remove dust, debris, and residues to make your property spotless and move-in ready.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Post Construction Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Thorough Post Construction Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our team ensures that every corner of your property is cleaned after construction or renovation. We use professional tools, modern techniques, and eco-friendly products to remove dust, debris, and leftover construction materials.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We take pride in delivering a spotless, safe, and hygienic environment, making your space ready for use immediately.
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
              src="/services/post-construction-cleaning/1.jpg"
              alt="Floor Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sweeping and Vacuuming</h3>
            <p className="text-gray-600">
              Remove dust, debris, paint splatters, and residues from all floors and surfaces.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/post-construction-cleaning/2.jpg"
              alt="Window & Glass Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dust Removal</h3>
            <p className="text-gray-600">
              Clean and polish all windows, glass panels, and mirrors to remove dust and construction debris.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/post-construction-cleaning/3.jpg"
              alt="Detailed Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dusting and Wiping</h3>
            <p className="text-gray-600">
              Thorough cleaning of corners, fixtures, and hard-to-reach areas for a completely spotless property.
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

export default PostConstructionCleaning;