"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const MonthlyCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the monthly cleaning service include?",
      answer:
        "Our monthly cleaning service includes deep cleaning of floors, bathrooms, kitchen, living areas, carpets, and furniture. We also provide dusting, polishing, and sanitation to maintain a hygienic home every month.",
    },
    {
      id: 2,
      question: "Can I customize the monthly cleaning schedule?",
      answer:
        "Yes! You can choose the date and time that works best for your home. Our team can also focus on specific areas based on your needs.",
    },
    {
      id: 3,
      question: "Do you use eco-friendly cleaning products?",
      answer:
        "Absolutely! We use safe and eco-friendly cleaning products to protect your family, pets, and the environment.",
    },
    {
      id: 4,
      question: "Can I switch from monthly to weekly or bi-weekly cleaning?",
      answer:
        "Yes, we offer flexible packages. You can upgrade or adjust your cleaning frequency as per your requirements.",
    },
    {
      id: 5,
      question: "How do I book the monthly cleaning service?",
      answer:
        "You can schedule monthly cleaning by clicking 'Book Monthly Cleaning' or 'Get Free Quote' on our website. Our team will contact you to confirm the service.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Monthly Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional monthly cleaning services in Nepal including deep cleaning, dusting, carpet and furniture cleaning, and regular home sanitation for a hygienic living environment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/monthly-cleaning.jpg"
          alt="Monthly Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Monthly Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Monthly Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your home spotless and hygienic every month with our professional monthly cleaning services, including deep cleaning, dusting, carpet care, and furniture sanitation.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Monthly Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Reliable Monthly Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our monthly cleaning services ensure your home remains consistently clean and hygienic. We use trained professionals, modern cleaning equipment, and safe cleaning products for all areas of your home.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Enjoy a fresh and healthy living space with our thorough monthly cleaning, designed to save your time and maintain cleanliness without hassle.
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
              src="/services/monthly-cleaning/1.jpg"
              alt="Floor & Surface Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Floor & Surface Cleaning</h3>
            <p className="text-gray-600">
              Deep cleaning and polishing of floors, countertops, and high-touch surfaces for a hygienic environment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/monthly-cleaning/2.jpg"
              alt="Carpet & Sofa Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Carpet & Sofa Cleaning</h3>
            <p className="text-gray-600">
              Remove dust, stains, and allergens from carpets and sofas to keep your home fresh every month.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/monthly-cleaning/3.jpg"
              alt="Kitchen & Bathroom Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kitchen & Bathroom Cleaning</h3>
            <p className="text-gray-600">
              Thorough sanitation and deep cleaning of kitchens and bathrooms to maintain hygiene and prevent germs.
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

export default MonthlyCleaning;