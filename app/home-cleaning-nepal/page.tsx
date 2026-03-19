"use client";

import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Big Banner Section */}
      <section
        className="relative h-[500px] flex items-center justify-center px-6 text-center text-white"
        style={{
          backgroundImage: "url('services/home-cleaning.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Home Cleaning Nepal
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Professional home cleaning Nepal services for apartments and houses. Deep cleaning, carpet cleaning in Kathmandu, AC cleaning, and sofa cleaning for a spotless, hygienic home.
          </p>
          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book Home Cleaning
          </button>
        </div>
      </section>

      {/* Main Service / About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Other Cleaning Services</h2>
        <p className="text-gray-600 mb-6">
          Our home cleaning Nepal service ensures every corner of your house is spotless and hygienic. We use trained professionals, eco-friendly products, and modern equipment for deep cleaning, carpet cleaning, sofa cleaning, AC cleaning, and post-construction cleanup. 
        </p>

        {/* More Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Deep Home Cleaning",
              desc: "Complete residential cleaning including floors, bathrooms, kitchen, and living areas.",
              image: "services/home-cleaning.jpg",
            },
            {
              title: "Carpet & Sofa Cleaning",
              desc: "Remove dust, stains, and allergens from carpets and sofas for a fresh home.",
              image: "services/carpet-cleaning.jpg",
            },
            {
              title: "Post-Construction Cleaning",
              desc: "Remove dust and debris after renovations or construction projects.",
              image: "services/post-construction-cleaning.jpg",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Book Your Home Cleaning Today</h2>
        <p className="text-gray-600 mb-6">
          Schedule your home cleaning Nepal service easily and enjoy a clean, fresh, and hygienic home.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Get Free Quote
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Home Cleaning Nepal. All rights reserved.</p>
      </footer>
    </main>
  );
}