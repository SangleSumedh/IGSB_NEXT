"use client";

import React from "react";
import Image from "next/image";

const DiscoverSection = () => {
  const cards = [
    {
      title: "Get Industry-ready",
      description:
        "We ensure every graduate is industry-ready through cutting-edge curriculum, innovation labs, and strong industry collaborations that keep students aligned with the latest technologies and trends.",
      image: "/industry.JPG",
    },
    {
      title: "Research from Day One",
      description:
        "At Indira College, research is a way of life, supported by state-of-the-art facilities, experienced faculty, and collaborations that empower students to solve real-world challenges.",
      image: "/Researchfromday1.jpg",
    },
    {
      title: "Corporate Partnerships & Recruitment",
      description:
        "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from recruitment drives, on-campus placements, and access to employers seeking ICEM talent.",
      image: "/CorporateRelations.JPG",
    },
  ];

  return (
    <section className="relative bg-[#003366] py-24 px-6 lg:px-16 overflow-visible">
      {/* 🔹 Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003366] via-[#004080] to-[#002b55] opacity-90"></div>

      {/* 🔹 Soft glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* 🔹 Section Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Heading */}
        <h2 className="text-3xl lg:text-3xl font-extrabold text-white mb-2 leading-snug">
          At Indira College of Engineering & Management, you will discover an
        </h2>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-14 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-snug pb-2">
          Energy that runs through Everything and Everyone.
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transform transition-all duration-500 border border-gray-100"
              style={{
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.15), 0 0 20px rgba(255,255,255,0.05)",
              }}
            >
              {/* Image Section */}
              <div className="rounded-t-2xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-56"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-[#003366] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  {card.description}
                </p>
                <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0059b3] transition">
                  Know more
                </button>
              </div>

      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
