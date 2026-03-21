"use client";

import { useState } from "react";

type Service = {
  title: string;
  short: string;
  full: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Bathroom Cleaning",
    short: "Deep cleaning for hygienic bathrooms.",
    full: "We remove stains, mold, and bacteria to make your bathroom spotless and safe.",
    image: "services/bathroom-cleaning.jpg",
  },
  {
    title: "Kitchen Cleaning",
    short: "Sanitized and grease-free kitchen.",
    full: "Complete kitchen sanitization including cabinets, tiles, and appliances.",
    image: "services/kitchen-cleaning.jpg",
  },
  {
    title: "Home Cleaning",
    short: "Complete house cleaning service.",
    full: "Professional home cleaning services across Nepal for a fresh and healthy space.",
    image: "services/home-cleaning.jpg",
  },
  {
    title: "Carpet Cleaning",
    short: "Remove stains and dust.",
    full: "Deep carpet cleaning to eliminate allergens, dirt, and tough stains.",
    image: "services/carpet-cleaning.jpg",
  },
  {
    title: "Sofa / Upholstery Cleaning",
    short: "Fresh and clean furniture.",
    full: "We clean and sanitize sofas and upholstery to remove dust and bacteria.",
    image: "services/sofa-upholstery-cleaning.jpg",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    short: "Perfect for relocation.",
    full: "Thorough cleaning before moving in or after moving out.",
    image: "services/move-in-move-out-cleaning.jpg",
  },
  {
    title: "Disinfection / Sanitization Services",
    short: "Kill germs and viruses.",
    full: "Advanced disinfection services for homes, offices, and commercial spaces.",
    image: "services/disinfection-sanitization-services.jpg",
  },
  {
    title: "A/C Cleaning",
    short: "Improve air quality.",
    full: "Professional AC cleaning to ensure better cooling and healthy air.",
    image: "services/ac-cleaning.jpg",
  },
  {
    title: "Laptop Cleaning",
    short: "Safe device cleaning.",
    full: "Internal and external cleaning for laptops to improve performance.",
    image: "services/laptop-cleaning.jpg",
  },
  {
    title: "Desktop Cleaning",
    short: "Dust-free setup.",
    full: "Complete desktop cleaning including CPU, monitor, and accessories.",
    image: "services/desktop-cleaning.jpg",
  },
  {
    title: "Aeroplane Cleaning",
    short: "Aircraft cleaning service.",
    full: "Professional cleaning solutions for airplanes and aviation interiors.",
    image: "services/aeroplane-cleaning.jpg",
  },
  {
    title: "Helicopter Cleaning",
    short: "Specialized cleaning.",
    full: "Detailed cleaning services for helicopters with care and precision.",
    image: "services/helicopter-cleaning.jpg",
  },
  {
    title: "Reserve Tank Cleaning",
    short: "Clean water storage.",
    full: "We clean and disinfect water tanks for safe usage.",
    image: "services/reserve-tank-cleaning.jpg",
  },
  {
    title: "Marble/ Tile Cleaning",
    short: "Restore shine.",
    full: "Professional polishing and cleaning for marble and tile surfaces.",
    image: "services/marble-tile-cleaning.jpg",
  },
  {
    title: "Post-Construction Cleaning",
    short: "After construction cleanup.",
    full: "Remove dust, debris, and residue after construction or renovation.",
    image: "services/post-construction-cleaning.jpg",
  },
  {
    title: "Garden Cleaning",
    short: "Clean outdoor spaces.",
    full: "Maintain neat and clean gardens with our expert services.",
    image: "services/garden-cleaning.jpg",
  },
  {
    title: "Garage Cleaning",
    short: "Declutter and clean.",
    full: "Deep cleaning for garages to remove dust, oil, and clutter.",
    image: "services/garage-cleaning.jpg",
  },
  {
    title: "Air Duct & Vent Cleaning",
    short: "Better airflow.",
    full: "Clean air ducts and vents for improved indoor air quality.",
    image: "services/air-duct-vent-cleaning.jpg",
  },
  {
    title: "Post Event Cleaning",
    short: "Pre & post event cleaning.",
    full: "Cleaning services before and after events for a tidy venue.",
    image: "services/post-event-cleaning.jpg",
  },
  {
    title: "Car Interior Cleaning",
    short: "Interior Deep Cleaning.",
    full: "Complete car cleaning services for a fresh and shiny vehicle.",
    image: "services/car-interior-cleaning.jpg",
  },
  {
    title: "Facade Cleaning",
    short: "Exterior building cleaning.",
    full: "Professional facade cleaning to enhance building appearance.",
    image: "services/facade-cleaning.jpg",
  },
  {
    title: "Parquet Cleaning",
    short: "Wood floor care.",
    full: "Special cleaning for parquet floors to maintain durability and shine.",
    image: "services/parquet-cleaning.jpg",
  },
  {
    title: "Chair Cleaning",
    short: "Clean seating surfaces.",
    full: "Deep cleaning for chairs used in homes, offices, and events.",
    image: "services/chair-cleaning.jpg",
  },
  {
    title: "Drainage Cleaning",
    short: "Clear blocked drains.",
    full: "Efficient drainage cleaning services to prevent clogging.",
    image: "services/drainage-cleaning.jpg",
  },
  {
    title: "Septic Tank Cleaning",
    short: "Safe waste management.",
    full: "Professional septic tank cleaning for hygiene and safety.",
    image: "services/septic-tank-cleaning.jpg",
  },
  {
    title: "Lift/ Elevator Cleaning",
    short: "Clean elevators.",
    full: "Maintain hygiene in elevators with regular cleaning.",
    image: "services/lift-elevator-cleaning.jpg",
  },
  {
    title: "Corporate House Cleaning",
    short: "Office cleaning solutions.",
    full: "Professional cleaning for offices and corporate buildings.",
    image: "services/corporate-house-cleaning.jpg",
  },

  {
    title: "Medical Facility Cleaning",
    short: "Medical Facility Cleaning.",
    full: "Professional cleaning for Medical Facility.",
    image: "services/medical-facility-cleaning.jpg",
  },


  {
    title: "Monthly Cleaning",
    short: "Regular cleaning plans.",
    full: "Scheduled monthly cleaning services for homes and offices.",
    image: "services/monthly-cleaning.jpg",
  },
  {
    title: "Dead Animal Removal",
    short: "Safe removal service.",
    full: "Professional and hygienic removal with full sanitization.",
    image: "services/dead-animal-removal.jpg",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Our Cleaning Services in Nepal
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-70 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{service.short}</p>

              {openIndex === index && (
                <p className="text-sm text-gray-700 mb-3">{service.full}</p>
              )}

              <button
            onClick={() => toggle(index)}
            className={`mt-2 px-4 py-2 rounded-md text-white font-medium transition 
                        ${openIndex === index ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"}`}
            >
            {openIndex === index ? "Show Less ↑" : "Book a Service →"}
            </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}