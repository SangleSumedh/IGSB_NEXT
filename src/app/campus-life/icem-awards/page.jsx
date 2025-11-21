"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IcemAwards = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(null);

  // Images are in /public folder
  const bannerImg = "/awards/AwardBanner.webp";
  const placeholderImg = "/awards/IndiraExcellenceAward.webp";
  const indiraExcellence = "/awards/IndiraExcellenceAward.webp";

  const awards = [
    {
      id: 1,
      title: "Indira International Innovation Summit & HR Excellence Awards ",
      date: "8th Edition | January 2015 ",
      image: placeholderImg,
      shortDescription:
        "The 8th Indira International Innovation Summit marked a significant endeavour to align academia with global innovation practices. Graced by Hon. Shri Anil Shirole, Member of Parliament, the summit emphasized innovation as a cornerstone for national development. The event facilitated meaningful dialogue between industry leaders and aspiring entrepreneurs, reinforcing ICEM's commitment to nurturing forward-thinking professionals. ",
    },
    {
      id: 2,
      title: "Indira International Innovation Summit & HR Excellence Awards ",
      date: "9th Edition | January 2016 ",
      image: placeholderImg,
      shortDescription:
        "This edition focused on the transformative potential of digital innovation in India's growing economy. The summit expanded to acknowledge the contributions of junior colleges in strengthening Pune's educational ecosystem. Since its inception in 2008, the Innovation Summit has evolved into a vital platform for fostering creativity and driving industrial innovation through robust industry-academia partnerships. ",
    },
    {
      id: 3,
      title: "Indira International Innovation Summit & HR Excellence Awards ",
      date: "11th Edition |  2018 ",
      image: placeholderImg,
      shortDescription:
        "Featuring insights from leading Indian startups and HR professionals, the summit provided engineering graduates with unparalleled opportunities to engage with industry pioneers. The event showcased exceptional organizational efforts and dynamic cultural performances by ICEM students. ",
    },
    {
      id: 4,
      title: "Indira Engineering and Architecture Excellence Awards 2017 ",
      date: "18th January, 2017",
      image: placeholderImg,
      shortDescription:
        "In celebration of the 10th anniversary of Indira Group of Institutes, we honoured the excellence in engineering and architecture. The event was distinguished by the presence of Lt. Gen. A.K. Singh (Retd.), former Lieutenant Governor of Puducherry and the Andaman and Nicobar Islands. The celebrations culminated in a performance by renowned artist Badshah, highlighting ICEM's blend of academic rigor and vibrant campus culture. ",
    },
    {
      id: 5,
      title: "Indira Innovation Excellence Awards 2022",
      date: "Date not available",
      image: placeholderImg,
      shortDescription:
        "Hosted jointly by Indira College of Engineering & Management and Indira Global Business School, this edition honoured innovators and leaders who have significantly advanced their fields, particularly during the COVID-19 pandemic. The event featured interactive sessions with industry experts for engineering, MCA, and MBA students, followed by an awards ceremony recognizing HR and innovation excellence. The day concluded with cultural performances, a stand-up comedy act by Mandar Bhide, and a concert by the famed Lambada band. ",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* ===== Banner Section ===== */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={bannerImg}
          alt="Awards Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="transition-transform duration-700 ease-out "
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2  bg-black/10 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg transform transition-all duration-500 ease-out hover:scale-105">
            Awards & Achievements
          </h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-secondary mb-10 text-center transform transition-all duration-500 ease-out hover:scale-105">
          Awards @ Indira College of Engineering and Management
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden transform opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary hover:text-primary transition-colors duration-300 ease-in-out">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 transition-colors duration-300">
                  {award.date}
                </p>
                {/* Description with smooth expand/collapse */}
                <div className="mt-3">
                  <p
                    className={`text-sm text-gray-600 transition-all duration-500 ease-in-out overflow-hidden ${
                      expanded === award.id
                        ? "max-h-96 opacity-100"
                        : "max-h-20 opacity-90"
                    }`}
                  >
                    {award.shortDescription}
                  </p>

                  <button
                    onClick={() =>
                      setExpanded(expanded === award.id ? null : award.id)
                    }
                    className="text-primary text-sm font-medium mt-3 hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-1"
                  >
                    {expanded === award.id ? "Read Less" : "Read More"}
                    <span className="inline-block ml-1 transition-transform duration-300">
                      {expanded === award.id ? "↑" : "↓"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom styles for the fade-in-up animation */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IcemAwards;
