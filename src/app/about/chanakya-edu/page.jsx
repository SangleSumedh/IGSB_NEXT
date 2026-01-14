"use client";
import React, { useState } from "react";
import Image from "next/image";

const ChanakyaEdu = () => {
  const trustees = [
    {
      name: "Smt. Sarita Shankar Wakalkar",
      role: "President",
      image: "/banners/sarita-shankar.jpeg",
    },
    {
      name: "Dr. Tarita Shankar",
      role: "Chief Managing Trustee and Founder Secretary",
      image: "/banners/dr-tarita-shankar-chairperson.png",
    },
    {
      name: "Mr. Shardul Nitin Gangal",
      role: "Vice - President",
      image: "/banners/Mr-Shardul-Gangal.webp",
    },
    {
      name: "Mr. Sahil Tarita Shankar",
      role: "Joint Secretary",
      image: "/banners/Sahil-Mehendale.jpg",
    },
    {
      name: "Mr. Pilaji Sursingh Jadhavrao",
      role: "Treasurer",
      image: "/banners/pilaji-sursingh-jadhavrao.jpg",
    },
    {
      name: "Mr. Vasant Maruti Maske",
      role: "Trustee Member",
      image: "/banners/VASANT-MARUTI-MASKE.png",
    },
    {
      name: "Mr. Shaan Tarita Shankar",
      role: "Trustee Member",
      image: "/banners/SHAAN-ADITYA-MEHENDALE.png",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Main Content with padding */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About Us
          </h1>

          {/* Accent divider */}
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white" />

          {/* Description */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our institution's legacy, leadership, and commitment to excellence
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="px-6 xl:px-16 py-8 xl:py-12 space-y-20">
        {/* About IGSB Section */}
        <section id="about-igsb" className="relative scroll-mt-[15vh]">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
              About Indira Global School of Business
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Text Content */}
              <div className="lg:w-2/3">
                <div className="text-gray-700 leading-relaxed text-md md:text-lg text-justify space-y-6">
                  <p>
                    About Indira Global School of Business (IGSB) has been
                    established with the explicit vision to train managers with a
                    global perspective who can provide sustainable impetus to growing
                    international business. IGSB has established its presence in Pune
                    as a premier B- School offering MBA (MBA and MBA - Services
                    Management) affiliated to Savitribai Phule Pune University and
                    approved by AICTE, New Delhi. As a driving philosophy, the
                    belief is that the emerging global environment has created a
                    scenario where managers have to face greater situational
                    challenges, predict and handle the vagaries of the market and
                    provide sustainable strategic solutions to corporate issues. The
                    current global economy has created an environment where managers
                    have to face greater situational challenges; predict and handle
                    the impulses of the market and provide quality service
                    management. Such an environment requires professional graduates
                    not only armed with the necessary knowledge but also the
                    confidence of facing extreme competition with greater
                    articulation.
                  </p>
                  <p>
                    The IGSB campus is located imposingly adjoining the Mumbai-Pune
                    Expressway, on a beautiful site amidst open fields and clusters
                    of large trees in a beautiful, green valley which gives a sense
                    of endless space to the quest of mind and soul. The
                    infrastructure is dynamic in nature because of our constant
                    attempt to maintain pace with the development opportunities
                    available to us. Our infrastructure acts as a facilitator for the
                    effective delivery of our curriculum and nurtures the quest for
                    knowledge. The MBA programs (MBA and MBA - Services Management)
                    at IGSB equip students with fresh insights and alternative ways
                    of thinking, helping them to succeed in highly unpredictable and
                    non-linear conditions, making global leaders out of them.
                  </p>
                </div>
              </div>
              
              {/* Campus Image */}
              <div className="lg:w-1/3">
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/Home/IGSB.jpg"
                    alt="IGSB Campus"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SCES Section */}
        <section id="about-sces" className="relative scroll-mt-[15vh]">
          <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Shree Chanakya Education Society (SCES)
            </h2>
            <p className="text-white leading-relaxed text-md md:text-lg text-justify">
              The Shree Chanakya Education Society (SCES) was established in
              February 1994, under the visionary leadership of Dr. Tarita
              Shankar, with the aim of providing top quality post-graduate
              education in the ﬁelds of Business Management, International
              Business and Information Technology. By consistently providing
              quality education over the past few decades, institutes at Indira
              Group is now considered as one of the best institutes in Pune. At
              a time when India was struggling to put its economy back on its
              feet, after the nation having pawned the "family jewels" just to
              keep aﬂoat, Dr. Tarita Shankar sensed that education too would
              have to become more broad based and more vocational in nature if
              India was to stand up to the world competition in quality and
              price for its products, The then Finance Minister had prescribed
              for the economy and so, in 1994, began a saga of growth and
              quality in education; a story that is just reaching its zenith
              with 14 full ﬂedged Institutes registering a strong presence on
              Pune's educational horizon. Since inception, the Institutes
              managed by SCES, have maintained high academic standards and have
              successfully provided trained manpower to the industrial and
              services sector of the country. These institutes are now listed
              amongst the top colleges not just in Pune, but also in Maharashtra
              and India. With a modest strength of 60 students pursuing a single
              course, SCES has grown steadily and today boasts of 14 Institutes,
              having more than 8000 students from all over India pursuing
              multi-disciplinary, graduate & post-graduate programs. The
              objective of the institute is providing 'Management education in a
              corporate environment', has been possible due to the sincere and
              dedicated efforts of the members of SCES, who have invaluable
              experience in varied areas like academics, industry, service and
              social-world.
            </p>
          </div>
        </section>

        {/* Board of Trustees Section */}
        <section id="about-trustees" className="relative scroll-mt-[15vh]">
          <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Board of Trustees
            </h2>
            <p className="text-white text-md md:text-lg mb-8 md:mb-10">
              Managing Committee Members/Trustees of 'Shree Chanakya Education Society'
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {trustees.map((person, index) => (
                <div
                  key={index}
                  className="bg-[#3aafa9] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary group flex flex-col"
                >
                  {/* Image Container */}
                  <div className="w-full h-54 bg-gray-100 flex items-center justify-center text-gray-400 rounded-t-xl group-hover:bg-gray-50 transition-colors overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 14vw"
                      />
                    </div>
                  </div>

                  <div className="p-3 flex-grow flex flex-col">
                    <h4 className="font-bold text-white text-xs md:text-sm group-hover:text-secondary transition-colors line-clamp-2">
                      {person.name}
                    </h4>
                    <p className="text-white mt-1 text-xs flex-grow">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChanakyaEdu;