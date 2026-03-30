'use client';

import React from "react";

const testimonials = [
  {
    name: "Yogendra Bikram",
    feedback:
      "Cleaning Sewa provided excellent home cleaning. Every corner was spotless. The team was punctual and professional, making my home fresh and inviting.",
    image: "/testimonials/1.png",
  },
  {
    name: "Sunita Karki",
    feedback:
      "I hired Cleaning Sewa for our office. Staff were professional and efficient, cleaning desks, floors, and windows meticulously. The office is now hygienic and welcoming.",
    image: "/testimonials/2.png",
  },
  {
    name: "Anita Koirala",
    feedback:
      "After renovation, Cleaning Sewa handled post-construction cleaning perfectly, removing dust and sanitizing every corner. Highly satisfied and recommendable.",
    image: "/testimonials/3.png",
  },
  {
    name: "Sanjay Poudel",
    feedback:
      "Cleaning Sewa exceeded expectations. They cleaned every corner with eco-friendly products. My house looks fresh, and I will hire them for regular maintenance.",
    image: "/testimonials/4.png",
  },
  {
    name: "Pritesh Shrestha",
    feedback:
      "Impressed with Cleaning Sewa. Staff were attentive and diligent, leaving every space sparkling. Highly recommended for reliable home cleaning.",
    image: "/testimonials/5.png",
  },
  {
    name: "Bikram Poddar",
    feedback:
      "Cleaning Sewa provided professional office cleaning. Their team was thorough and precise, leaving the workspace spotless and hygienic.",
    image: "/testimonials/6.png",
  },
  {
    name: "Manshi Koirala",
    feedback:
      "Affordable and professional. Every detail was attended to, making my home immaculate. Flexible service and hassle-free experience. Highly recommended.",
    image: "/testimonials/7.png",
  },
  {
    name: "Rajan Shahi",
    feedback:
      "The Cleaning Sewa team did an outstanding office cleaning job. Efficient, thorough, and professional. Our office now looks pristine.",
    image: "/testimonials/8.png",
  },
  {
    name: "Sameer Basnet",
    feedback:
      "Cleaning Sewa exceeded expectations. Arrived on time, used eco-friendly products, and cleaned every area meticulously. Home feels fresh and organized.",
    image: "/testimonials/9.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center flex flex-col items-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-700 mb-3">{t.feedback}</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}