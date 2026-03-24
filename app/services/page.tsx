"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Professional Cleaning Services in Nepal
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Bathroom Cleaning */}
        <Card
          title="Bathroom Cleaning"
          img="bathroom-cleaning"
          link="bathroom-cleaning"
          desc="Professional bathroom cleaning in Nepal. We deep clean tiles, sinks, toilets, showers, mirrors, and remove mold, soap scum, hard water stains, and bacteria. Using eco-friendly cleaning solutions and advanced equipment, we ensure a fresh, hygienic, and safe bathroom environment."
        />

        {/* Kitchen Cleaning */}
        <Card
          title="Kitchen Cleaning"
          img="kitchen-cleaning"
          link="kitchen-cleaning"
          desc="Expert kitchen cleaning service in Nepal. We sanitize countertops, cabinets, sinks, stovetops, and appliances, removing grease, grime, and bacteria. Our professional team ensures a hygienic and safe cooking environment for your home or office."
        />

        {/* Home Cleaning */}
        <Card
          title="Home Cleaning"
          img="home-cleaning"
          link="home-cleaning"
          desc="Comprehensive home cleaning services in Nepal, covering living rooms, bedrooms, kitchens, and bathrooms. We remove dust, dirt, stains, and allergens to maintain a spotless, fresh, and healthy home environment."
        />

        {/* Carpet Cleaning */}
        <Card
          title="Carpet Cleaning"
          img="carpet-cleaning"
          link="carpet-cleaning"
          desc="Professional carpet cleaning in Nepal to remove dirt, dust, allergens, and stubborn stains. We restore your carpets to a clean, fresh, and hygienic state, improving indoor air quality and prolonging carpet life."
        />

        {/* Sofa / Upholstery Cleaning */}
        <Card
          title="Sofa / Upholstery Cleaning"
          img="sofa-upholstery-cleaning"
          link="sofa-upholstery-cleaning"
          desc="Professional sofa and upholstery cleaning service in Nepal. We deep clean all types of furniture, including fabric, leather, and microfiber sofas, recliners, chairs, and cushions."
        />

        {/* Move In / Move Out Cleaning */}
        <Card
          title="Move-In / Move-Out Cleaning"
          img="move-in-move-out-cleaning"
          link="move-in-move-out-cleaning"
          desc="Specialized move-in and move-out cleaning service in Nepal. We clean every corner of your property including floors, walls, kitchens, bathrooms, and furniture, ensuring a spotless space ready for new occupants."
        />

        {/* Disinfection / Sanitization */}
        <Card
          title="Disinfection / Sanitization"
          img="disinfection-sanitization-services"
          link="disinfection-sanitization-services"
          desc="Professional disinfection and sanitization for homes, offices, and commercial spaces in Nepal. We eliminate germs, bacteria, and viruses using safe and effective cleaning solutions, providing a healthy and hygienic environment."
        />

        {/* A/C Cleaning */}
        <Card
          title="A/C Cleaning"
          img="ac-cleaning"
          link="ac-cleaning"
          desc="Air conditioner cleaning service in Nepal to improve indoor air quality and system efficiency. We remove dust, allergens, and mold from filters, ducts, and coils, ensuring clean and healthy air circulation."
        />

        {/* Laptop Cleaning */}
        <Card
          title="Laptop Cleaning"
          img="laptop-cleaning"
          link="laptop-cleaning"
          desc="Professional laptop cleaning service in Nepal. We safely remove dust, dirt, and bacteria from keyboards, screens, vents, and ports, enhancing device hygiene and preventing overheating."
        />

        {/* Desktop Cleaning */}
        <Card
          title="Desktop Cleaning"
          img="desktop-cleaning"
          link="desktop-cleaning"
          desc="Professional desktop and workstation cleaning in Nepal. We remove dust, dirt, and debris from computers, monitors, keyboards, and office surfaces, maintaining a clean and healthy workspace."
        />

        {/* Aeroplane Cleaning */}
        <Card
          title="Aeroplane Cleaning"
          img="aeroplane-cleaning"
          link="aeroplane-cleaning"
          desc="Aircraft cleaning services in Nepal, including cabin seats, storage areas, and interiors. We ensure a hygienic, sanitized, and comfortable environment for passengers and crew."
        />

        {/* Helicopter Cleaning */}
        <Card
          title="Helicopter Cleaning"
          img="helicopter-cleaning"
          link="helicopter-cleaning"
          desc="Specialized helicopter cleaning service in Nepal. We sanitize and clean interior surfaces, seating, and equipment while adhering to strict safety standards."
        />

        {/* Reserve Tank Cleaning */}
        <Card
          title="Reserve Tank Cleaning"
          img="reserve-tank-cleaning"
          link="reserve-tank-cleaning"
          desc="Professional cleaning of water storage tanks in Nepal. We remove sludge, debris, and contaminants to ensure safe and clean water supply for homes and businesses."
        />

        {/* Marble / Tile Cleaning */}
        <Card
          title="Marble / Tile Cleaning"
          img="marble-tile-cleaning"
          link="marble-tile-cleaning"
          desc="Marble and tile cleaning service in Nepal. We remove dirt, stains, and grout discoloration, restoring shine and maintaining the beauty of floors, walls, and surfaces."
        />

        {/* Post-Construction Cleaning */}
        <Card
          title="Post-Construction Cleaning"
          img="post-construction-cleaning"
          link="post-construction-cleaning"
          desc="Thorough post-construction cleaning in Nepal. We remove dust, debris, and residue from newly built or renovated properties to make them move-in ready and spotless."
        />

        {/* Garden Cleaning */}
        <Card
          title="Garden Cleaning"
          img="garden-cleaning"
          link="garden-cleaning"
          desc="Professional garden cleaning in Nepal. We remove leaves, debris, trash, and unwanted items to maintain a neat, healthy, and visually appealing outdoor space."
        />

        {/* Garage Cleaning */}
        <Card
          title="Garage Cleaning"
          img="garage-cleaning"
          link="garage-cleaning"
          desc="Garage cleaning services in Nepal. We remove dirt, oil stains, and clutter to create a clean, organized, and safe space."
        />

        {/* Air Duct & Vent Cleaning */}
        <Card
          title="Air Duct & Vent Cleaning"
          img="air-duct-vent-cleaning"
          link="air-duct-vent-cleaning"
          desc="Professional air duct and vent cleaning in Nepal to improve airflow, reduce dust accumulation, and maintain healthy indoor air quality."
        />

        {/* Post Event Cleaning */}
        <Card
          title="Post Event Cleaning"
          img="post-event-cleaning"
          link="post-event-cleaning"
          desc="Efficient post-event cleaning in Nepal. We remove trash, spills, and restore spaces to their original condition after parties, events, or gatherings."
        />

        {/* Car Interior Cleaning */}
        <Card
          title="Car Interior Cleaning"
          img="car-interior-cleaning"
          link="car-interior-cleaning"
          desc="Comprehensive car interior cleaning in Nepal. We clean seats, carpets, mats, and surfaces to remove dirt, stains, and odors, keeping your vehicle fresh and hygienic."
        />

        {/* Facade Cleaning */}
        <Card
          title="Facade Cleaning"
          img="facade-cleaning"
          link="facade-cleaning"
          desc="Exterior building cleaning service in Nepal. We remove dirt, grime, and pollution from facades to enhance aesthetics and maintain property value."
        />

        {/* Parquet Cleaning */}
        <Card
          title="Parquet Cleaning"
          img="parquet-cleaning"
          link="parquet-cleaning"
          desc="Professional parquet and wooden floor cleaning in Nepal. We remove dust, stains, and polish surfaces to maintain shine, quality, and longevity."
        />

        {/* Chair Cleaning */}
        <Card
          title="Chair Cleaning"
          img="chair-cleaning"
          link="chair-cleaning"
          desc="Deep cleaning for office and home chairs in Nepal. Removes dirt, stains, and odors while maintaining fabric or leather quality for a hygienic seating experience."
        />

        {/* Drainage Cleaning */}
        <Card
          title="Drainage Cleaning"
          img="drainage-cleaning"
          link="drainage-cleaning"
          desc="Professional drain and pipe cleaning in Nepal. We remove blockages and ensure smooth water flow while preventing unpleasant odors and water damage."
        />

        {/* Septic Tank Cleaning */}
        <Card
          title="Septic Tank Cleaning"
          img="septic-tank-cleaning"
          link="septic-tank-cleaning"
          desc="Safe septic tank cleaning and maintenance in Nepal. We prevent overflows, remove sludge, and maintain proper sanitation for residential and commercial properties."
        />

        {/* Lift / Elevator Cleaning */}
        <Card
          title="Lift / Elevator Cleaning"
          img="lift-elevator-cleaning"
          link="lift-elevator-cleaning"
          desc="Professional cleaning of lifts and elevators in Nepal, focusing on floors, walls, buttons, and handrails to ensure hygiene and safety for all users."
        />

        {/* Corporate House Cleaning */}
        <Card
          title="Corporate House Cleaning"
          img="corporate-house-cleaning"
          link="corporate-house-cleaning"
          desc="Commercial and office cleaning services in Nepal. We maintain clean workspaces, sanitizing offices and communal areas for a professional and healthy environment."
        />

        {/* Medical Facility Cleaning */}
        <Card
          title="Medical Facility Cleaning"
          img="medical-facility-cleaning"
          link="medical-facility-cleaning"
          desc="Medical-grade cleaning for hospitals, clinics, and laboratories in Nepal. Ensures sanitization, infection control, and a safe environment for patients and staff."
        />

        {/* Monthly Cleaning */}
        <Card
          title="Monthly Cleaning"
          img="monthly-cleaning"
          link="monthly-cleaning"
          desc="Scheduled monthly cleaning services in Nepal for homes and offices. Maintains consistent hygiene, freshness, and cleanliness on a recurring basis."
        />

        {/* Dead Animal Removal */}
        <Card
          title="Dead Animal Removal"
          img="dead-animal-removal"
          link="dead-animal-removal"
          desc="Safe dead animal removal service in Nepal. We dispose of deceased animals hygienically, preventing odors, contamination, and health hazards."
        />

      </div>
    </main>
  );
}

function Card({
  title,
  img,
  link,
  desc,
}: {
  title: string;
  img: string;
  link: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={`/services/${img}.jpg`}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>

        <Link href={`/services/${link}`}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Browse More
          </button>
        </Link>
      </div>
    </div>
  );
}