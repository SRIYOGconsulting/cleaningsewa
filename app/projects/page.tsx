"use client";

import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  { title: "Solatee Westend", description: "Designed and maintained luxury hotel gardens with elegant landscaping, water features, and premium greenery to enhance guest experience.", image: "projects/solatee-westend.jpg" },
  { title: "Bajeko Sekuwa", description: "Developed stylish outdoor dining greenery with decorative plants and low-maintenance landscaping for a vibrant restaurant ambiance.", image: "projects/bajeko-sekuwa.jpg" },
  { title: "Sudarshan Resort", description: "Maintained resort landscapes with lush lawns, seasonal plants, and relaxing green spaces for a premium hospitality experience.", image: "projects/sudarshan-resort.jpg" },
  { title: "Pokhara Airport", description: "Enhanced airport surroundings with structured landscaping, greenery zones, and clean, welcoming outdoor environments.", image: "projects/pokhara-airport.jpg" },
  { title: "Gokarna Forest Resort", description: "Preserved natural forest resort beauty with eco-friendly landscaping and sustainable garden maintenance practices.", image: "projects/gokarna-forest.jpg" },
  { title: "Ncell", description: "Upgraded corporate office spaces with modern landscaping, decorative plants, and low-maintenance green environments.", image: "projects/ncell.jpg" },
  { title: "Dusit Thani Himalaya Resort", description: "Created premium resort landscapes with luxury garden design, water features, and curated greenery.", image: "projects/dusit-thani.jpg" },
  { title: "Club Himalaya", description: "Maintained hilltop resort greenery with scenic landscaping and climate-friendly plantation systems.", image: "projects/club-himalaya.jpg" },
  { title: "Hotel Bhadgaon", description: "Enhanced boutique hotel ambiance with traditional garden designs and heritage-style landscaping.", image: "projects/hotel-bhadgaon.jpg" },
  { title: "Kavya Himalayas", description: "Developed eco-luxury retreat landscapes with natural elements, organic plants, and peaceful green zones.", image: "projects/kavya-himalayas.jpg" },
  { title: "Mercure Kathmandu", description: "Designed contemporary hotel landscaping with structured lawns, decorative plants, and modern outdoor aesthetics.", image: "projects/mercure-kathmandu.jpg" },
  { title: "Kathmandu Guest House", description: "Maintained iconic hotel gardens with vibrant flowers and relaxing green courtyards for guests.", image: "projects/kathmandu-guest-house.jpg" },
  { title: "Sankha Park", description: "Upgraded public park greenery with organized plantations, walking paths, and recreational landscaping.", image: "projects/sankha-park.jpg" },
  { title: "Hotel Aikawa, Sauraha", description: "Developed resort garden spaces with tropical plants and wildlife-friendly landscaping in a tourism hub.", image: "projects/hotel-aikawa.jpg" },
  { title: "The British School", description: "Created safe and green educational environments with playground lawns and student-friendly landscaping.", image: "projects/british-school.jpg" },
  { title: "Ramesh Corp", description: "Designed corporate green zones with professional landscaping to enhance office aesthetics and productivity.", image: "projects/ramesh-corp.jpg" },
  { title: "Nabil Bank", description: "Improved banking premises with clean, modern greenery and low-maintenance landscape design.", image: "projects/nabil-bank.jpg" },
  { title: "Budhanilkantha School", description: "Maintained large school campuses with healthy lawns, shaded areas, and structured plantation systems.", image: "projects/budhanilkantha-school.jpg" },
  { title: "Shankhamul Park", description: "Revitalized urban park spaces with sustainable landscaping and community-friendly greenery.", image: "projects/shankhamul-park.jpg" },
  { title: "Ullens School", description: "Developed eco-friendly school landscapes with innovative green spaces for learning and recreation.", image: "projects/ullens-school.jpg" },
  { title: "Alice Receptions", description: "Designed elegant banquet gardens with decorative plants and floral arrangements for events.", image: "projects/alice-receptions.jpg" },
  { title: "Grande International Hospital", description: "Created healing garden environments with calming greenery for patient wellness and recovery.", image: "projects/grande-hospital.jpg" },
  { title: "Silver Oak Banquet", description: "Enhanced banquet venues with premium landscaping and decorative outdoor event spaces.", image: "projects/silver-oak.jpg" },
  { title: "The British College", description: "Upgraded college campuses with modern landscaping and structured green areas.", image: "projects/british-college.jpg" },
  { title: "Rani Mahal Banquet", description: "Developed luxury event garden spaces with premium lawns and floral setups.", image: "projects/rani-mahal.jpg" },
  { title: "Nepal Mediciti Hospital", description: "Built peaceful hospital landscapes focused on patient comfort and green healing environments.", image: "projects/mediciti-hospital.jpg" },
  { title: "Frontline Hospital", description: "Maintained clean and green hospital surroundings with organized landscaping.", image: "projects/frontline-hospital.jpg" },
  { title: "Waterfront Resort", description: "Designed scenic waterfront resort landscapes with relaxing greenery and natural elements.", image: "projects/waterfront-resort.jpg" },
  { title: "Rupy’s International School", description: "Created child-friendly green campuses with safe lawns and educational outdoor spaces.", image: "projects/rupy-school.jpg" },
  { title: "Norvic Hospital", description: "Enhanced hospital gardens with structured greenery for a clean and calming environment.", image: "projects/norvic-hospital.jpg" },
  { title: "Fortune Resort", description: "Developed resort landscapes with premium greenery and luxury outdoor aesthetics.", image: "projects/fortune-resort.jpg" },
  { title: "Kathmandu Dhumbarahi", description: "Maintained international hotel landscaping with elegant lawns and decorative outdoor designs.", image: "projects/kathmandu-dhumbarahi.jpg" },
  { title: "Tribhuwan Park", description: "Developed public recreational parks with organized greenery and visitor-friendly landscaping.", image: "projects/tribhuwan-park.jpg" },
  { title: "Basundhara Park", description: "Upgraded urban park spaces with improved plantation and green infrastructure.", image: "projects/basundhara-park.jpg" },
  { title: "Garden of Dreams", description: "Maintained heritage garden spaces with artistic landscaping and historical preservation.", image: "projects/garden-of-dreams.jpg" },
  { title: "Rem.Work", description: "Nepal's Top Co-working space indoor gardening services were managed to provide a serene and productive environment.", image: "projects/remwork.jpg" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Projects
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Cleaning Sewa’s portfolio of beautifully maintained gardens, resorts, hotels, schools, and corporate spaces across Nepal.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}