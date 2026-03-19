// app/components/Testimonials.tsx
"use client";

import React from "react";

const testimonials = [
  {
    name: "Afreen Sharma",
    feedback:
      "Cleaning Sewa provided an exceptional home cleaning service. From the living room to the bathrooms, every corner was spotless. The team was punctual, professional, and thorough, ensuring every surface was sanitized and fresh. I truly feel comfortable inviting guests over now, and my home has never looked better.",
    image: "/testimonials/1.png",
  },
  {
    name: "Ramesh Thapa",
    feedback:
      "I hired Cleaning Sewa for our office cleaning, and I am extremely impressed. The staff were professional, reliable, and worked efficiently without disrupting our daily operations. They cleaned desks, floors, windows, and even common areas meticulously. Our office environment is now hygienic and welcoming for both employees and clients.",
    image: "/testimonials/2.png",
  },
  {
    name: "Anita Koirala",
    feedback:
      "After a major renovation, our apartment was left dusty and messy. Cleaning Sewa handled post-construction cleaning perfectly. They removed dust from all surfaces, cleaned the floors, and sanitized every corner. The team’s attention to detail was excellent, and I am extremely satisfied with their service. Highly recommend for any deep cleaning needs.",
    image: "/testimonials/3.png",
  },
  {
    name: "Sanjay Gurung",
    feedback:
      "Cleaning Sewa’s team exceeded my expectations. They provided a detailed cleaning of my home, ensuring that even hard-to-reach corners were spotless. Their use of eco-friendly products was impressive, and I appreciated their professionalism and timeliness. My house looks and feels fresh, and I will definitely hire them again for regular maintenance.",
    image: "/testimonials/4.png",
  },
  {
    name: "Priya Shrestha",
    feedback:
      "I am thoroughly impressed with Cleaning Sewa. The staff were courteous, attentive, and worked diligently to clean every part of my home. From the kitchen to bedrooms, every space was left sparkling. Their attention to hygiene and detail is exceptional, making them the best choice for anyone seeking reliable home cleaning services.",
    image: "/testimonials/5.png",
  },
  {
    name: "Bikram Lama",
    feedback:
      "Cleaning Sewa provided a highly professional and efficient cleaning service. Their team cleaned my office and common areas with precision, ensuring no dust or dirt was left behind. I was particularly impressed with their thoroughness and dedication to maintaining a clean and hygienic workspace. Highly recommended for both homes and offices.",
    image: "/testimonials/6.png",
  },
  {
    name: "Manisha Koirala",
    feedback:
      "Affordable, thorough, and professional – Cleaning Sewa truly stands out. Their cleaning staff paid attention to every detail, from floors to furniture, ensuring my home was immaculate. The service was flexible and convenient, making the process hassle-free. I highly recommend their services for anyone seeking a deep, reliable cleaning experience.",
    image: "/testimonials/7.png",
  },
  {
    name: "Rajan Shahi",
    feedback:
      "The cleaning team from Cleaning Sewa did an outstanding job at our office. They worked efficiently, cleaned every workstation, and maintained hygiene throughout. Their professionalism and attention to detail were impressive, and our office now looks pristine. I highly recommend their services to businesses looking for dependable and thorough cleaning.",
    image: "/testimonials/8.png",
  },
  {
    name: "Sita Basnet",
    feedback:
      "Cleaning Sewa exceeded all my expectations with their home cleaning services. They arrived on time, used safe and eco-friendly products, and cleaned every area meticulously. The attention to detail and professionalism was remarkable. My home now feels fresh, organized, and hygienic. I am extremely satisfied and will continue to use their services.",
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