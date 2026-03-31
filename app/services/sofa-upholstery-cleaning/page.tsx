"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SofaCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the sofa/upholstery cleaning service include?",
      answer:
        "Our sofa/upholstery cleaning service includes deep cleaning of all types of sofas, chairs, recliners, and cushions. We remove dust, dirt, allergens, pet hair, stains, and odors using professional equipment and safe cleaning products.",
    },
    {
      id: 2,
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we use eco-friendly and safe cleaning products to ensure the safety of your family, pets, and the environment while keeping your furniture spotless.",
    },
    {
      id: 3,
      question: "Can I book a one-time or recurring service?",
      answer:
        "You can choose either a one-time cleaning or schedule recurring services weekly, bi-weekly, or monthly according to your needs.",
    },
    {
      id: 4,
      question: "Do you handle delicate or leather furniture?",
      answer:
        "Absolutely! We specialize in cleaning all types of upholstery, including fabric, microfiber, and leather, using methods that protect and maintain the material.",
    },
    {
      id: 5,
      question: "How can I schedule a sofa cleaning service?",
      answer:
        "You can schedule a service by clicking the 'Book Sofa Cleaning' or 'Get Free Quote' button on our website. Our team will contact you to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Sofa/Upholstery Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional sofa and upholstery cleaning services in Nepal. Remove dust, allergens, stains, and odors from sofas, chairs, and cushions using safe and effective cleaning techniques."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/sofa-upholstery-cleaning.jpg"
          alt="Sofa/Upholstery Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt;{" "}
              <span className="font-semibold">Sofa/Upholstery Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Sofa/Upholstery Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional sofa and upholstery cleaning for homes and offices in Nepal. Remove dust, stains, allergens, pet hair, and odors for a fresh and hygienic living space.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Sofa/Upholstery Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Sofa & Upholstery Cleaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our sofa and upholstery cleaning services in Nepal ensure that all your furniture is thoroughly cleaned and sanitized. We remove dust, dirt, allergens, pet hair, stains, and odors from sofas, chairs, and cushions using professional equipment and safe, eco-friendly cleaning products.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We focus on creating a healthy and fresh living environment while extending the life of your furniture and maintaining its appearance.
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
              src="/services/sofa-upholstery-cleaning/1.jpg"
              alt="Deep Sofa Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Stain/ Spot Removal</h3>
            <p className="text-gray-600">
              Complete cleaning for sofas, chairs, and recliners. Removes dirt, allergens, and stains.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/sofa-upholstery-cleaning/2.jpg"
              alt="Carpet & Sofa Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Odor removal and deodorizing</h3>
            <p className="text-gray-600">
              Remove dust, stains, and allergens from carpets and upholstery for a healthier home.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/sofa-upholstery-cleaning/3.jpg"
              alt="Leather recoloring"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Leather recoloring</h3>
            <p className="text-gray-600">
              Remove dust, debris, and dirt from furniture after renovations or construction projects.
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
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left text-gray-800 font-semibold hover:bg-gray-50 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openFAQ === faq.id ? "–" : "+"}
                </span>
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

export default SofaCleaning;