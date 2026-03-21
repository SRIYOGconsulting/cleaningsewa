"use client";

import React from "react";

export default function Contact() {
  const quickContacts = [
    {
      name: "Ramesh Koirala",
      role: "Director",
      phone: "+977123456789",
      image: "staff/ramesh.jpg",
    },
    {
      name: "Sita Sharma",
      role: "Customer Support",
      phone: "+977987654321",
      image: "staff/sita.jpg",
    },
    {
      name: "Binod Thapa",
      role: "Operations Manager",
      phone: "+977912345678",
      image: "staff/binod.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Cleaning Sewa</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Get in touch with Cleaning Sewa for inquiries, bookings, or support.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Send Us a Message</h2>
        <form className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Quick Contact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quickContacts.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-700"
              />
              <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
              <p className="text-gray-600 mb-4">{person.role}</p>
              <a
                href={`https://wa.me/${person.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Details</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-700">123 Clean Street, Kathmandu, Nepal</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+977 123 456 789</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700">info@cleaningsewa.com</p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-xl">
          <span className="text-gray-600">Map Placeholder (Google Maps Embed Here)</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Cleaning Sewa. All rights reserved.  
          Visit us at <a href="https://cleaningsewa.com" className="underline">cleaningsewa.com</a>
        </p>
      </footer>
    </main>
  );
}