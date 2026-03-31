"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const MedicalCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the medical facility cleaning service include?",
      answer:
        "Our service includes comprehensive cleaning and disinfection of floors, walls, patient rooms, operating theaters, waiting areas, and medical equipment surfaces to maintain a sterile environment.",
    },
    {
      id: 2,
      question: "Do you use hospital-grade disinfectants?",
      answer:
        "Yes, we use hospital-grade and eco-friendly disinfectants that are effective against bacteria, viruses, and other pathogens while being safe for humans and equipment.",
    },
    {
      id: 3,
      question: "Can I schedule regular cleaning for my facility?",
      answer:
        "Absolutely! We offer one-time, daily, weekly, or monthly cleaning schedules tailored to your facility’s requirements.",
    },
    {
      id: 4,
      question: "Do you provide deep cleaning for surgical and diagnostic areas?",
      answer:
        "Yes, our trained professionals follow strict protocols to clean and disinfect operating theaters, labs, and diagnostic rooms according to medical standards.",
    },
    {
      id: 5,
      question: "How can I schedule medical facility cleaning?",
      answer:
        "You can schedule a cleaning by clicking 'Book Medical Cleaning' or 'Get Free Quote' on our website. Our team will contact you to confirm the service.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Medical Facility Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional medical facility cleaning services in Nepal including sterilization, disinfection, operating theater cleaning, patient room cleaning, and waiting area maintenance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/medical-facility-cleaning.jpg"
          alt="Medical Facility Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Medical Facility Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Medical Facility Cleaning Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional cleaning and sterilization services for hospitals, clinics, labs, and medical offices to ensure safe and hygienic environments for patients and staff.
            </p>
            
            <Link href="/book">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Medical Facility Cleaning Service
              </button>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Comprehensive Medical Facility Cleaning Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our cleaning services ensure all areas of your medical facility meet hygiene and safety standards. We use trained professionals, hospital-grade disinfectants, and modern equipment to maintain a sterile and safe environment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          From operating rooms to patient waiting areas, we deliver thorough cleaning and disinfection to prevent infections and create a healthy environment for everyone.
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
              src="/services/medical-facility-cleaning/1.jpg"
              alt="Lobby Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Lobby Cleaning</h3>
            <p className="text-gray-600">
              Thorough cleaning and disinfection of lobby areas to maintain a welcoming and hygienic environment for patients and visitors.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/medical-facility-cleaning/2.jpg"
              alt="Medical EquipmentCleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Medical EquipmentCleaning Cleaning</h3>
            <p className="text-gray-600">
              Sterilization and thorough cleaning of surgical and diagnostic areas following strict medical protocols.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center">
            <img
              src="/services/medical-facility-cleaning/3.jpg"
              alt="Bed Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Bed Cleaning</h3>
            <p className="text-gray-600">
              Ensure patient and staff safety with regular cleaning and disinfection of high-traffic areas like lobbies and waiting rooms.
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

export default MedicalCleaning;