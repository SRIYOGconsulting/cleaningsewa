"use client";

import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  { title: "Solatee Westend", description: "Comprehensive corporate and facility cleaning services for a spotless guest experience.", image: "projects/solatee-westend.jpg" },
  { title: "Bajeko Sekuwa", description: "Deep kitchen and dining area sanitization for hygienic restaurant operations.", image: "projects/bajeko-sekuwa.jpg" },
  { title: "Sudarshan Resort", description: "Full resort cleaning including guest rooms, lobby, and common areas.", image: "projects/sudarshan-resort.jpg" },
  { title: "Pokhara Airport", description: "Terminal and restroom cleaning ensuring safe and hygienic spaces for travelers.", image: "projects/pokhara-airport.jpg" },
  { title: "Gokarna Forest Resort", description: "Garden, lobby, and room cleaning for a pristine natural retreat.", image: "projects/gokarna-forest.jpg" },
  { title: "Ncell", description: "Office and corporate space cleaning, including desks, conference rooms, and common areas.", image: "projects/ncell.jpg" },
  { title: "Dusit Thani Himalaya Resort", description: "Post-construction and daily maintenance cleaning for luxury accommodation.", image: "projects/dusit-thani.jpg" },
  { title: "Club Himalaya", description: "Event cleaning, lobby and facility sanitation for guest comfort and hygiene.", image: "projects/club-himalaya.jpg" },
  { title: "Hotel Bhadgaon", description: "Complete hotel cleaning and housekeeping services for guest satisfaction.", image: "projects/hotel-bhadgaon.jpg" },
  { title: "Kavya Himalayas", description: "Corporate and residential cleaning services for office and lounge areas.", image: "projects/kavya-himalayas.jpg" },
  { title: "Mercure Kathmandu", description: "Room, lobby, and kitchen cleaning maintaining international hospitality standards.", image: "projects/mercure-kathmandu.jpg" },
  { title: "Kathmandu Guest House", description: "Regular and deep cleaning services for a safe and comfortable stay.", image: "projects/kathmandu-guest-house.jpg" },
  { title: "Sankha Park", description: "Public space cleaning including pathways, lawns, and restrooms.", image: "projects/sankha-park.jpg" },
  { title: "Hotel Aikawa, Sauraha", description: "Comprehensive guest room, lobby, and kitchen cleaning services.", image: "projects/hotel-aikawa.jpg" },
  { title: "The British School", description: "Classroom, corridor, and office cleaning ensuring a healthy learning environment.", image: "projects/british-school.jpg" },
  { title: "Ramesh Corp", description: "Corporate office cleaning and desk sanitization services for employees’ safety.", image: "projects/ramesh-corp.jpg" },
  { title: "Nabil Bank", description: "Bank branch cleaning including ATMs, counters, and customer areas.", image: "projects/nabil-bank.jpg" },
  { title: "Budhanilkantha School", description: "Classroom, playground, and restroom sanitization for students’ health.", image: "projects/budhanilkantha-school.jpg" },
  { title: "Shankhamul Park", description: "Park and public area cleaning including pathways, benches, and playgrounds.", image: "projects/shankhamul-park.jpg" },
  { title: "Ullens School", description: "Professional classroom, library, and cafeteria cleaning services.", image: "projects/ullens-school.jpg" },
  { title: "Alice Receptions", description: "Event venue cleaning before and after functions for spotless celebrations.", image: "projects/alice-receptions.jpg" },
  { title: "Grande International Hospital", description: "Hospital and patient area cleaning, including high-touch surface disinfection.", image: "projects/grande-hospital.jpg" },
  { title: "Silver Oak Banquet", description: "Comprehensive banquet cleaning for weddings and corporate events.", image: "projects/silver-oak.jpg" },
  { title: "The British College", description: "Classrooms, hallways, and administrative office cleaning services.", image: "projects/british-college.jpg" },
  { title: "Rani Mahal Banquet", description: "Pre- and post-event cleaning services for a hygienic and polished venue.", image: "projects/rani-mahal.jpg" },
  { title: "Nepal Mediciti Hospital", description: "Patient room, lobby, and critical area cleaning with sanitization.", image: "projects/mediciti-hospital.jpg" },
  { title: "Frontline Hospital", description: "Hospital-grade cleaning and disinfection services for safety and hygiene.", image: "projects/frontline-hospital.jpg" },
  { title: "Waterfront Resort", description: "Full resort cleaning including rooms, dining, and outdoor areas.", image: "projects/waterfront-resort.jpg" },
  { title: "Rupy’s International School", description: "Comprehensive school cleaning including classrooms, labs, and playgrounds.", image: "projects/rupy-school.jpg" },
  { title: "Norvic Hospital", description: "Patient care area cleaning and sanitation for a safe hospital environment.", image: "projects/norvic-hospital.jpg" },
  { title: "Fortune Resort", description: "Full cleaning services including guest rooms, lobby, and banquet halls.", image: "projects/fortune-resort.jpg" },
  { title: "Kathmandu Dhumbarahi", description: "Daily housekeeping and deep cleaning for premium hotel rooms.", image: "projects/kathmandu-dhumbarahi.jpg" },
  { title: "Tribhuwan Park", description: "Public park cleaning including lawns, pathways, and seating areas.", image: "projects/tribhuwan-park.jpg" },
  { title: "Basundhara Park", description: "Professional cleaning services for recreational spaces, pathways, and greenery.", image: "projects/basundhara-park.jpg" },
  { title: "Garden of Dreams", description: "Historical garden and public area cleaning ensuring a pleasant visitor experience.", image: "projects/garden-of-dreams.jpg" },
  { title: "Rem.Work", description: "Indoor office cleaning and workspace sanitization to maintain a productive environment.", image: "projects/remwork.jpg" },
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