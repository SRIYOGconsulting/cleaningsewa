'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Gallery item type
interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
}

// Cleaning projects (30 images)
const cleaningProjects: GalleryItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  imageUrl: `/gallery/${i + 1}.jpg`,
  altText: `Cleaning project ${i + 1}`,
}));

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="mb-40">

      {/* Page Header */}
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center">
        <span className="text-gray-500">
          Home / <span className="text-teal-700 font-semibold">Gallery</span>
        </span>
        <h1 className="text-4xl font-bold text-teal-800 mt-2">Cleaning Projects</h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cleaningProjects.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-72 rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.altText}
              width={1000}
              height={700}
              className="rounded-lg object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative h-[300px] flex items-center justify-center text-white">
        <Image
          src="/gallery/1.jpg"
          alt="Cleaning background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-6">Visit our FAQ page to get answers to common service questions.</p>
          <Link
            href="/faq"
            className="bg-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}