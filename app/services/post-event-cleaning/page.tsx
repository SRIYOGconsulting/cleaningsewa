"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const PostEventCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does post event cleaning include?",
      answer:
        "Our post event cleaning service includes trash removal, floor cleaning, stain removal, restroom cleaning, and complete venue cleanup after events such as weddings, parties, and corporate functions.",
    },
    {
      id: 2,
      question: "How soon can cleaning start after an event?",
      answer:
        "We can start immediately after your event ends or schedule cleaning at your preferred time, ensuring quick and efficient cleanup.",
    },
    {
      id: 3,
      question: "Do you handle large event venues?",
      answer:
        "Yes, we handle events of all sizes including large venues, banquet halls, outdoor events, and corporate gatherings.",
    },
    {
      id: 4,
      question: "Do you remove stains and spills?",
      answer:
        "Absolutely! We remove food stains, drink spills, and other marks from floors, carpets, and surfaces using professional equipment.",
    },
    {
      id: 5,
      question: "How can I book post event cleaning service?",
      answer:
        "You can easily book by clicking the 'Book Post Event Cleaning' button or requesting a free quote through our website.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Post Event Cleaning Services in Nepal</title>
        <meta
          name="description"
          content="Professional post event cleaning services in Nepal. Fast and efficient cleanup for parties, weddings, and corporate events. Keep your venue spotless."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/post-event-cleaning.jpg"
          alt="Post Event Cleaning Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm text-white opacity-90">
              Home &gt; Services &gt;{" "}
              <span className="font-semibold">Post Event Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold md:text-[52px]">
              Post Event Cleaning Services in Nepal
            </h1>

            <p className="max-w-[858px] mb-8 text-base md:text-lg leading-relaxed">
              Reliable and efficient post event cleaning services for weddings,
              parties, and corporate events. We restore your venue to a clean,
              organized, and spotless condition.
            </p>

            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Book Post Event Cleaning Service
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-5">
          Professional Post Event Cleaning Services
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our post event cleaning services in Nepal are designed to handle the
          complete cleanup after any type of event, including weddings, parties,
          concerts, and corporate gatherings. We efficiently remove trash,
          leftover decorations, food waste, and spills, ensuring your venue is
          restored to its original condition.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Using professional equipment and trained staff, we clean floors,
          carpets, restrooms, seating areas, and high-traffic zones. Our goal is
          to provide fast, reliable, and thorough cleaning so you can focus on
          enjoying your event while we take care of the mess.
        </p>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Scope of Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/post-event-cleaning/1.jpg"
              alt="Event Venue Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Event Venue Cleaning
            </h3>
            <p className="text-gray-600">
              Complete cleanup of halls, outdoor venues, and event spaces after
              gatherings.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/post-event-cleaning/2.jpg"
              alt="Trash & Waste Removal"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Trash & Waste Removal
            </h3>
            <p className="text-gray-600">
              Efficient removal of garbage, food waste, and disposable materials
              after events.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/post-event-cleaning/3.jpg"
              alt="Floor & Surface Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Floor & Surface Cleaning
            </h3>
            <p className="text-gray-600">
              Removal of stains, spills, and dirt from floors, carpets, and
              surfaces.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <span>{openFAQ === faq.id ? "–" : "+"}</span>
              </button>

              {openFAQ === faq.id && (
                <div className="p-5 text-gray-700 border-t">
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

export default PostEventCleaning;