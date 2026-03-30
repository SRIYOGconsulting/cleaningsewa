"use client";

import React from "react";

type BlogPost = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const blogs: BlogPost[] = [
  {
    title: "Expert Bathroom Cleaning Services in Nepal",
    description:
      "Bathrooms are one of the most frequently used areas in any home. Cleaning Sewa specializes in professional bathroom cleaning services across Nepal, ensuring sparkling, sanitized spaces every time. Our deep cleaning removes soap scum, grime, and harmful bacteria, even in difficult areas like behind toilets and tile grout. Eco-friendly products and trained professionals make your bathroom hygienic and fresh.",
    image: "/blog/bathroom-cleaning.jpg",
    link: "/blog/bathroom-cleaning",
  },
  {
    title: "Professional Kitchen Cleaning Services in Nepal",
    description:
      "A clean kitchen is essential for a healthy home. Cleaning Sewa offers expert kitchen cleaning, including countertops, sinks, stovetops, ovens, and floors. Our professionals sanitize surfaces, remove grease and stubborn stains, and prevent food contamination. With efficient services across Kathmandu, Pokhara, and Lalitpur, we make your kitchen safe, hygienic, and spotless.",
    image: "/blog/kitchen-cleaning.jpg",
    link: "/blog/kitchen-cleaning",
  },
  {
    title: "Reliable Home Cleaning Services in Nepal",
    description:
      "Maintaining a clean home can be challenging. Cleaning Sewa provides complete home cleaning services across Nepal, covering bedrooms, living areas, kitchens, bathrooms, floors, windows, and furniture. With trained professionals and eco-friendly solutions, we ensure a hygienic, fresh, and comfortable home every time.",
    image: "/blog/home-cleaning.jpg",
    link: "/blog/home-cleaning",
  },
  {
    title: "Top Carpet Cleaning Services in Nepal",
    description:
      "Carpets can harbor dust, dirt, and allergens. Cleaning Sewa offers professional carpet cleaning in Nepal using vacuuming, stain treatment, steam cleaning, and quick drying methods. Our services remove allergens, extend carpet life, and keep your home healthy and fresh.",
    image: "/blog/carpet-cleaning.jpg",
    link: "/blog/carpet-cleaning",
  },
  {
    title: "Professional Sofa & Upholstery Cleaning",
    description:
      "Your sofas and upholstered furniture accumulate dust, stains, and odors. Cleaning Sewa provides professional sofa and upholstery cleaning in Nepal using deep steam cleaning and fabric-safe solutions. Restore furniture hygiene, protect its lifespan, and maintain a fresh home environment.",
    image: "/blog/sofa-upholstery-cleaning.jpg",
    link: "/blog/sofa-upholstery-cleaning",
  },
  {
    title: "Move-In & Move-Out Cleaning Services in Nepal",
    description:
      "Moving can be stressful. Cleaning Sewa ensures every corner of your home is spotless with move-in and move-out cleaning services across Nepal. Deep cleaning, bathroom/kitchen sanitization, and debris removal make relocation seamless and hygienic.",
    image: "/blog/move-in-move-out-cleaning.jpg",
    link: "/blog/move-in-out-cleaning",
  },
  {
    title: "Trusted Disinfection and Sanitization Services",
    description:
      "Maintain a germ-free environment with Cleaning Sewa’s professional disinfection services. Surface disinfection, high-touch area sanitization, and eco-friendly disinfectants keep homes, offices, and commercial spaces healthier and safer.",
    image: "/blog/disinfection-sanitization-services.jpg",
    link: "/blog/sanitization",
  },
  {
    title: "Air Conditioner Cleaning Services in Nepal",
    description:
      "Dirty AC units circulate dust and reduce efficiency. Cleaning Sewa provides AC cleaning services in Nepal to remove dust, allergens, and bacteria, improving air quality and cooling efficiency for your home or office.",
    image: "/blog/ac-cleaning.jpg",
    link: "/blog/ac-cleaning",
  },
  {
    title: "Laptop Cleaning Services in Nepal",
    description:
      "Protect your devices with Cleaning Sewa’s professional laptop cleaning services. We remove dust from vents, clean screens, and safely sanitize internal components to prevent overheating and hardware issues.",
    image: "/blog/laptop-cleaning.jpg",
    link: "/blog/laptop-cleaning",
  },
  {
    title: "Professional Desktop Cleaning Services in Nepal",
    description:
      "Clean workstations improve productivity and hygiene. Cleaning Sewa provides desktop cleaning services across Nepal for offices, co-working spaces, and home workstations, including dusting, sanitizing, and organizing cables.",
    image: "/blog/desktop-cleaning.jpg",
    link: "/blog/desktop-cleaning",
  },
  {
    title: "Aeroplane & Helicopter Cleaning Services in Nepal",
    description:
      "Aircraft interiors require professional cleaning for hygiene and passenger comfort. Cleaning Sewa provides thorough aeroplane and helicopter cleaning services across Nepal, including cabin sanitization and upholstery care.",
    image: "/blog/helicopter-cleaning.jpg",
    link: "/blog/aircraft-cleaning",
  },
  {
    title: "Safe Reserve Tank Cleaning Services in Nepal",
    description:
      "Water storage tanks can accumulate dirt and bacteria. Cleaning Sewa provides professional reserve tank cleaning services across Nepal to ensure safe, clean water for homes and offices through scrubbing, sediment removal, and sanitization.",
    image: "/blog/reserve-tank-cleaning.jpg",
    link: "/blog/reserve-tank",
  },
  {
    title: "Marble & Tile Cleaning Services in Nepal",
    description:
      "Marble and tiles enhance a home’s beauty but require regular maintenance. Cleaning Sewa offers professional cleaning services for sparkling floors, stain removal, grout cleaning, and polishing using eco-friendly products.",
    image: "/blog/marble-tile-cleaning.jpg",
    link: "/blog/marble-tile",
  },
  {
    title: "Post-Construction Cleaning Services in Nepal",
    description:
      "After construction or renovation, spaces are left dusty and messy. Cleaning Sewa provides post-construction cleaning, including floor cleaning, surface wiping, and bathroom/kitchen sanitization, ensuring your property is ready for use.",
    image: "/blog/post-construction-cleaning.jpg",
    link: "/blog/post-construction",
  },
  {
    title: "Garden Cleaning Services in Nepal",
    description:
      "A well-maintained garden enhances your home’s appeal. Cleaning Sewa offers expert garden cleaning services including trimming, sweeping, leaf removal, and pathway sanitization, ensuring neat and beautiful outdoor spaces.",
    image: "/blog/garden-cleaning.jpg",
    link: "/blog/garden-cleaning",
  },
  {
    title: "Garage Cleaning Services in Nepal",
    description:
      "Garages can quickly become cluttered. Cleaning Sewa organizes, sweeps, washes floors, and removes oil stains and debris, keeping your garage clean, safe, and efficient for storage or vehicle use.",
    image: "/blog/garage-cleaning.jpg",
    link: "/blog/garage-cleaning",
  },
  {
    title: "Air Duct & Vent Cleaning Services in Nepal",
    description:
      "Air ducts and vents collect dust and allergens over time. Cleaning Sewa improves indoor air quality with professional cleaning, sanitization, and HVAC inspection services, keeping homes and offices healthy.",
    image: "/blog/air-duct-vent-cleaning.jpg",
    link: "/blog/air-duct",
  },
  {
    title: "Event Cleaning Services in Nepal",
    description:
      "Cleaning Sewa ensures stress-free post-event cleanup across Nepal, including trash removal, surface cleaning, and restroom sanitization, leaving your event venue spotless and ready for the next use.",
    image: "/blog/post-event-cleaning.jpg",
    link: "/blog/event-cleaning",
  },
  {
    title: "Professional Car Cleaning Services in Nepal",
    description:
      "A clean car enhances both appearance and hygiene. Cleaning Sewa provides exterior washing, polishing, interior vacuuming, and upholstery cleaning services across Nepal to keep your vehicle gleaming.",
    image: "/blog/car-interior-cleaning.jpg",
    link: "/blog/car-cleaning",
  },
  {
    title: "Facade Cleaning Services in Nepal",
    description:
      "Building facades are exposed to dust and pollution. Cleaning Sewa offers professional facade cleaning across Nepal using pressure washing, window cleaning, and exterior polishing to maintain your property’s aesthetics.",
    image: "/blog/facade-cleaning.jpg",
    link: "/blog/facade-cleaning",
  },
  {
    title: "Parquet & Chair Cleaning Services in Nepal",
    description:
      "Wooden floors and chairs require regular care. Cleaning Sewa provides parquet and chair cleaning services using deep cleaning, polishing, and eco-friendly products to restore shine and hygiene.",
    image: "/blog/parquet-cleaning.jpg",
    link: "/blog/parquet-chair",
  },
  {
    title: "Drainage & Septic Tank Cleaning Services in Nepal",
    description:
      "Clogged drains and dirty septic tanks pose health hazards. Cleaning Sewa provides professional drainage and septic tank cleaning services including unclogging, sanitization, and preventive maintenance tips.",
    image: "/blog/drainage-cleaning.jpg",
    link: "/blog/septic-cleaning",
  },
  {
    title: "Lift & Elevator Cleaning Services in Nepal",
    description:
      "Elevators are high-touch areas. Cleaning Sewa ensures safe and sanitized rides with professional lift cleaning, handrail sanitization, and regular maintenance services across Nepal.",
    image: "/blog/lift-elevator-cleaning.jpg",
    link: "/blog/lift-cleaning",
  },
  {
    title: "Corporate & Monthly Cleaning Services in Nepal",
    description:
      "Maintaining clean corporate spaces is vital. Cleaning Sewa offers regular office cleaning, common area sanitization, and monthly deep cleaning packages to keep offices and commercial spaces spotless and professional.",
    image: "/blog/monthly-cleaning.jpg",
    link: "/blog/corporate-cleaning",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Cleaning Sewa Blog
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with expert cleaning tips, professional services, and home & office hygiene advice from Cleaning Sewa.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-700 font-semibold hover:underline mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}