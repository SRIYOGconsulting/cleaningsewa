"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const SchoolCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the school cleaning service include?",
      answer:
        "Our school cleaning service includes classroom cleaning, hallway and common area sanitization, restroom cleaning, dusting, mopping, and proper waste disposal to maintain a hygienic learning environment.",
    },
    {
      id: 2,
      question: "How often should a school be cleaned?",
      answer:
        "We recommend daily cleaning for classrooms and common areas, with weekly deep cleaning for carpets, furniture, and restrooms to ensure a safe and healthy school environment.",
    },
    {
      id: 3,
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Yes, we use safe and eco-friendly products to protect students, staff, and the environment.",
    },
    {
      id: 4,
      question: "Can you clean both small and large schools?",
      answer:
        "Absolutely! We provide professional cleaning services for schools of all sizes, from small preschools to large campuses.",
    },
    {
      id: 5,
      question: "How can I schedule a school cleaning service?",
      answer:
        "You can schedule a school cleaning by clicking the 'Book School Cleaning' button on our website. Our team will contact you to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>School Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional school cleaning services in Nepal including classroom cleaning, hallway and restroom sanitization, dusting, mopping, and waste management for hygienic learning environments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/school-cleaning.jpg"
          alt="School Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">School Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              School Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional school cleaning services for classrooms, restrooms, and common areas. We ensure a clean, safe, and hygienic learning environment for students and staff.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book School Cleaning
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          School Cleaning Services in Nepal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our school cleaning services in Nepal cover classrooms, hallways, restrooms, and common areas. We use trained professionals, modern equipment, and eco-friendly products for thorough cleaning and sanitization.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide reliable cleaning services to ensure a safe, hygienic, and pleasant learning environment for all students and staff.
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
              src="/services/school-cleaning/1.jpg"
              alt="Classroom Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Classroom Cleaning
            </h3>
            <p className="text-gray-600">
              Thorough cleaning of classrooms including desks, chairs, and surfaces to maintain a hygienic learning environment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/school-cleaning/2.jpg"
              alt="Restroom Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Restroom Cleaning

            </h3>
            <p className="text-gray-600">
              Thorough cleaning of restrooms including tiles, fixtures, and surfaces to maintain a hygienic and pleasant environment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/school-cleaning/3.jpg"
              alt="Common Area Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Common Area Cleaning
            </h3>
            <p className="text-gray-600">
              Thorough cleaning of common areas including hallways, lobbies, and other shared spaces to maintain a hygienic and pleasant environment.
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

export default SchoolCleaning;