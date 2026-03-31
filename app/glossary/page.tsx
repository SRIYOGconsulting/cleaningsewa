'use client';
import React, { useState } from 'react';
import Ribbon from '../../components/Ribbon';

export default function Glossary() {
    const [selectedLetter, setSelectedLetter] = useState<string>('A');

    type Term = {
        term: string;
        definition: string;
    }

    type TermsByLetter = {
        [key: string]: Term[];
    }

    const glossaryTerms: TermsByLetter = {
        A: [
            { term: "Air Duct Cleaning", definition: "The process of removing dust, debris, and allergens from heating, ventilation, and air conditioning (HVAC) ducts." },
            { term: "Antibacterial Cleaning", definition: "Cleaning methods and products specifically designed to kill bacteria on surfaces." }
        ],
        B: [
            { term: "Biohazard Cleanup", definition: "Specialized cleaning for spaces contaminated with biological substances, such as blood, bodily fluids, or medical waste." },
            { term: "Bathroom Sanitization", definition: "Deep cleaning and disinfecting of toilets, sinks, showers, and other bathroom surfaces." }
        ],
        C: [
            { term: "Carpet Cleaning", definition: "The process of removing dirt, stains, and allergens from carpets using hot water extraction, steam, or dry cleaning methods." },
            { term: "Commercial Cleaning", definition: "Cleaning services for offices, hotels, restaurants, and other commercial spaces." },
            { term: "COVID-19 Disinfection", definition: "Sanitization procedures using hospital-grade disinfectants to prevent the spread of the coronavirus." }
        ],
        D: [
            { term: "Deep Cleaning", definition: "Intensive cleaning of surfaces, corners, and hard-to-reach areas to eliminate dirt and germs." },
            { term: "Disinfection", definition: "The process of killing or deactivating harmful microorganisms on surfaces using chemical agents." }
        ],
        E: [
            { term: "Eco-Friendly Cleaning", definition: "Cleaning practices that use environmentally safe products and methods." },
            { term: "Exhaust Fan Cleaning", definition: "Removing dust, grease, and buildup from exhaust fans to improve ventilation and hygiene." }
        ],
        F: [
            { term: "Floor Polishing", definition: "Restoring shine and smoothness to tile, marble, wood, or concrete floors." },
            { term: "Fogging Disinfection", definition: "Using mist or fog to distribute disinfectant chemicals across large spaces for sterilization." }
        ],
        G: [
            { term: "Glass Cleaning", definition: "Cleaning and polishing glass surfaces, windows, and mirrors for streak-free results." },
            { term: "Green Cleaning", definition: "Sustainable cleaning practices using non-toxic and biodegradable cleaning agents." }
        ],
        H: [
            { term: "Hospital Cleaning", definition: "Specialized cleaning and sanitization in hospitals and clinics to prevent infections." },
            { term: "HVAC Sanitization", definition: "Cleaning and disinfecting heating, ventilation, and air conditioning systems to maintain air quality." }
        ],
        I: [
            { term: "Industrial Cleaning", definition: "Heavy-duty cleaning for factories, warehouses, and manufacturing plants." },
            { term: "Infection Control", definition: "Protocols to reduce or eliminate the risk of spreading infectious diseases in a facility." }
        ],
        J: [
            { term: "Janitorial Services", definition: "Routine cleaning services for offices, schools, and commercial spaces including trash removal, sweeping, and surface cleaning." }
        ],
        K: [
            { term: "Kitchen Sanitization", definition: "Cleaning and disinfecting kitchen surfaces, appliances, and utensils to maintain food safety." }
        ],
        L: [
            { term: "Laundry Services", definition: "Professional washing, drying, and folding of linens, uniforms, or garments." },
            { term: "Laminate Floor Cleaning", definition: "Proper cleaning techniques for laminate flooring to avoid damage and maintain shine." }
        ],
        M: [
            { term: "Mold Removal", definition: "Elimination of mold and mildew from walls, ceilings, and other surfaces to improve health and safety." },
            { term: "Medical Facility Cleaning", definition: "Specialized cleaning in hospitals, clinics, and labs with strict hygiene standards." }
        ],
        N: [
            { term: "Non-Toxic Cleaning", definition: "Using chemical-free or low-toxicity products for safer cleaning environments." }
        ],
        O: [
            { term: "Odor Removal", definition: "Techniques and products used to neutralize and remove unpleasant odors from rooms or surfaces." }
        ],
        P: [
            { term: "Post-Construction Cleaning", definition: "Deep cleaning after construction or renovation to remove dust, debris, and leftover materials." },
            { term: "Polishing", definition: "Buffing surfaces like metal, wood, or marble to restore shine and remove scratches." }
        ],
        Q: [
            { term: "Quaternary Ammonium Compounds (Quats)", definition: "Chemical disinfectants commonly used for sanitizing surfaces in hospitals and food areas." }
        ],
        R: [
            { term: "Residential Cleaning", definition: "Cleaning services for homes, apartments, and condos including kitchens, bathrooms, and living areas." },
            { term: "Restroom Sanitization", definition: "Deep cleaning and disinfecting of public or private bathrooms to ensure hygiene." }
        ],
        S: [
            { term: "Sanitization", definition: "Reducing microbes on surfaces to safe levels using disinfectants and cleaning protocols." },
            { term: "Surface Cleaning", definition: "Removing dirt, dust, and contaminants from desks, counters, and tables." },
            { term: "Sterilization", definition: "Complete elimination of all microorganisms from a surface or object, often in medical settings." }
        ],
        T: [
            { term: "Tile Cleaning", definition: "Removing grime, stains, and mold from ceramic or porcelain tiles." },
            { term: "Trash Removal", definition: "Collecting and disposing of garbage in a safe and hygienic manner." }
        ],
        U: [
            { term: "Ultraviolet (UV) Disinfection", definition: "Using UV light to kill bacteria, viruses, and other pathogens on surfaces or in the air." }
        ],
        V: [
            { term: "Vacuuming", definition: "Using a vacuum cleaner to remove dust, dirt, and allergens from floors and carpets." }
        ],
        W: [
            { term: "Window Cleaning", definition: "Cleaning exterior and interior windows for streak-free clarity." },
            { term: "Waste Management", definition: "Organizing, collecting, and disposing of waste safely and responsibly." }
        ],
        X: [],
        Y: [],
        Z: []
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const availableLetters = Object.keys(glossaryTerms);

    return (
        <div className="h-full">
            <Ribbon name="Glossary" showfont={false} />

            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                {/* Alphabet Navigation */}
                <div className="card rounded-lg py-4 px-6 mb-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {alphabet.map((letter) => (
                            <button
                                key={letter}
                                onClick={() => availableLetters.includes(letter) && setSelectedLetter(letter)}
                                className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded transition-all ${
                                    availableLetters.includes(letter)
                                        ? selectedLetter === letter
                                            ? 'bg-teal-700 text-white'
                                            : 'bg-white text-gray-800 hover:bg-teal-100'
                                        : 'text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!availableLetters.includes(letter)}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Terms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {glossaryTerms[selectedLetter]?.map((item, index) => (
                        <div
                            key={index}
                            className="footer border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-bold mb-3">{item.term}</h3>
                            <p className="text-sm leading-relaxed text-gray-700">{item.definition}</p>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {!glossaryTerms[selectedLetter]?.length && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No terms available for letter {selectedLetter}</p>
                    </div>
                )}
            </div>
        </div>
    );
}