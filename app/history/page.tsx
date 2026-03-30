'use client'

import Image from 'next/image';
import Ribbon from '../../components/Ribbon';

export default function History() { 

    return (
        <div>

            {/* Header */}
            <Ribbon name="History" showfont={false}/>

            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">

                {/* Introduction Section */}
                <section>
                    <h2 className="text-2xl font-bold  mb-4">Our Beginning</h2>
                    <p className=" leading-relaxed">
                        Cleaning Sewa . began its journey with a mission to bring advanced digital
                        transformation to industries that needed it the most. What started as a small initiative
                        has now grown into a trusted technology partner for organizations across healthcare,
                        employment, and tourism.
                    </p>

                    <div className="mt-6 rounded-lg overflow-hidden shadow-md">
                        <Image height={600} width={800}
                            src="/history/2.jpg"
                            alt="History Beginning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Evolution Section */}
                <section>
                    <h2 className="text-2xl font-bold  mb-4">Evolution Over the Years</h2>
                    <p className=" leading-relaxed">
                        Over the years, our company evolved by adopting modern technologies, expanding our 
                        team, and building systems that support thousands of users. Continuous learning,
                        innovation, and adaptability have shaped our growth and helped us stay ahead of
                        technological advancements.
                    </p>

                    {/* Two Card Format */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                        {/* Card 1 */}
                        <div className="card p-6 shadow-sm rounded-xl hover:shadow-md transition ">
                            <Image height={600} width={800}
                                src="/history/1.png"  // Male placeholder
                                alt="Male Placeholder"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                            />

                            <h3 className="text-[24px] font-semibold text-center">
                                Full Name
                            </h3>
                            <p className="text-center text-sm">
                                Designation
                            </p>
                            <p className="mt-3  text-center leading-relaxed">
                                    Our journey has been shaped by individuals who have contributed to key projects and supported the growth of multiple teams. Their leadership has guided important initiatives, strengthened operational performance, and helped us maintain consistent service standards in a competitive environment. 


                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="card p-6 shadow-sm rounded-xl hover:shadow-md transition h-full">
                            <Image height={600} width={800}
                                src="/history/2.png"  // Female placeholder
                                alt="Female Placeholder"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                            />

                            <h3 className="text-[24px] font-semibold text-center ">
                                Full Name
                            </h3>
                            <p className="text-center  text-sm">
                                Designation
                            </p>
                            <p className="mt-3  text-center leading-relaxed">
                                    Through continuous effort, innovation, and a strong focus on customer satisfaction, we have played a meaningful role in improving hygiene standards and creating cleaner, healthier spaces for homes and businesses. As we move forward, we remain committed to expanding our services.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Milestones */}
                <section>
                    <h2 className="text-2xl font-bold  mb-4">Key Milestones</h2>

                    <div className="space-y-6">

                        <div className="p-6 card   rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2018 – Company Established</h3>
                            <p className=" mt-2 ">
                                Cleaning Sewa was officially founded in Kathmandu, marking the beginning of its journey in delivering professional cleaning services with a commitment to quality and reliability.
                            </p>
                        </div>

                        <div className="p-6 card  rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2020 – Service Expansion</h3>
                            <p className=" mt-2">
                                Expanded service offerings to include residential, commercial, and specialized cleaning solutions, catering to a growing customer base across the city.
                            </p>
                        </div>

                        <div className="p-6 card  rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2022 – Major Platform Launch</h3>
                            <p className="mt-2">
                                Strengthened team capacity, improved service processes, and successfully handled large-scale cleaning projects for offices, apartments, and institutions.

                            </p>
                        </div>

                        <div className="p-6 card  rounded-xl shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold ">2024 – Modernization & Innovation</h3>
                            <p className="mt-2">
                                Introduced advanced cleaning equipment, eco-friendly practices, and digital service management systems to enhance efficiency and customer experience.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Closing Section */}
                <section className="pb-12">
                    <h2 className="text-2xl font-bold  mb-4">Our Journey Continues</h2>
                    <p className=" leading-relaxed">
                        With each passing year, Cleaning Sewa grows stronger and more dedicated to delivering
                        high-quality digital experiences. Our history reflects our commitment to innovation,
                        service excellence, and building solutions that make a real difference.
                    </p>
                </section>

            </div>
        </div>
    );
}
