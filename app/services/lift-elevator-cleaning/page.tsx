"use client";

import React, { useState } from "react";
import Head from "next/head";

const LiftCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the lift/elevator cleaning service include?",
      answer:
        "Our lift cleaning service includes deep cleaning of floors, walls, panels, mirrors, buttons, handrails, and ceilings to maintain hygiene and a professional appearance.",
    },
    {
      id: 2,
      question: "Is your cleaning safe for high-traffic elevators?",
      answer:
        "Yes, we use professional cleaning tools and safe disinfectants that are effective yet safe for daily-use elevators and lifts.",
    },
    {
      id: 3,
      question: "Can I schedule regular cleaning?",
      answer:
        "Absolutely! We offer one-time, weekly, bi-weekly, or monthly cleaning schedules based on your building’s needs.",
    },
    {
      id: 4,
      question: "Do you clean both commercial and residential lifts?",
      answer:
        "Yes, our team is trained to handle lifts in apartment complexes, offices, hotels, hospitals, and other commercial buildings.",
    },
    {
      id: 5,
      question: "How do I book lift cleaning services?",
      answer:
        "You can easily book by clicking the 'Book Lift Cleaning' or 'Get Free Quote' button on our website. Our team will contact you to confirm your schedule.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Lift/Elevator Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional lift and elevator cleaning services in Nepal including floors, walls, panels, mirrors, buttons, and handrails to ensure hygiene and safety in residential and commercial buildings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/lift-elevator-cleaning.jpg"
          alt="Lift Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Lift Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Lift & Elevator Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional lift and elevator cleaning services to maintain hygiene, safety, and a polished look for residential and commercial buildings.
            </p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Lift Cleaning
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Lift Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our lift cleaning services ensure every elevator in your building is spotless and hygienic. We clean floors, walls, panels, mirrors, buttons, handrails, and ceilings using trained professionals and eco-friendly products.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Regular cleaning enhances safety, prevents the spread of germs, and gives your building a professional appearance.
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
              src="/services/lift-elevator-cleaning/1.jpg"
              alt="Floor Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Floor & Panel Cleaning</h3>
            <p className="text-gray-600">
              Deep cleaning of lift floors, walls, and control panels to maintain hygiene and a polished look.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/lift-elevator-cleaning/2.jpg"
              alt="Handrail & Button Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Handrails & Button Cleaning</h3>
            <p className="text-gray-600">
              Disinfect and clean handrails, buttons, and touchpoints to prevent the spread of germs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/lift-elevator-cleaning/3.jpg"
              alt="Mirror & Ceiling Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mirror & Ceiling Cleaning</h3>
            <p className="text-gray-600">
              Keep lift mirrors and ceilings spotless for a clean and professional appearance.
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

export default LiftCleaning;