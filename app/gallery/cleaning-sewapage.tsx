// app/gallery/page.tsx
"use client";

import React, { useState } from "react";
import Roadblock from "../components/Roadblock"; // Roadblock component

// NotificationBar Component
function NotificationBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-blue-700 text-white px-6 py-3 flex items-center justify-between">
      <p className="text-sm md:text-base flex-1">
        🎉 Announcement: Cleaning Sewa is offering 20% off on all services this month!
      </p>
      <div className="flex items-center gap-2">
        <a
          href="/book"
          className="px-3 py-1 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition"
        >
          Book Now
        </a>
        <button
          onClick={() => setVisible(false)}
          className="px-3 py-1 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Array of gallery images
const images = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/${i + 1}.jpg`,
  name: `Gallery Image ${i + 1}`,
}));

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <>
      {/* Notification Bar */}
      <NotificationBar />

      {/* Roadblock Banner */}
      <Roadblock />

      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Gallery
          </h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Overlay */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold rounded-full bg-black bg-opacity-50 p-2 hover:bg-opacity-70 transition"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-5 text-white text-3xl font-bold"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <div className="text-center">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              />
              <p className="text-white mt-4 font-medium">
                {images[currentIndex].name}
              </p>
            </div>
            <button
              className="absolute right-5 text-white text-3xl font-bold"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        )}
      </main>
    </>
  );
}