"use client";

import React from "react";
import { FaHandshake, FaBrain, FaUserTie, FaRobot } from "react-icons/fa";

const PuzzleSkills = () => {
  const puzzleData = [
    {
      id: 1,
      title: "Business Communication",
      icon: <FaHandshake />,
      bg: "bg-[#10404a]", // Dark Teal
      hasBottomTab: true,
      content: ["Interpersonal comms", "Cross-cultural", "Oral & written"],
    },
    {
      id: 2,
      title: "Aptitude",
      icon: <FaBrain />,
      bg: "bg-[#f9712f]", // Orange
      hasTopTab: true,
      content: ["Logical reasoning", "Quant aptitude", "Problem solving"],
    },
    {
      id: 3,
      title: "Personal Branding",
      icon: <FaUserTie />,
      bg: "bg-[#00a49e]", // Teal
      hasBottomTab: true,
      content: ["LinkedIn optimization", "Networking", "Content creation"],
    },
    {
      id: 4,
      title: "Generative AI",
      icon: <FaRobot />,
      bg: "bg-[#10404a]", // Dark Teal
      hasTopTab: true,
      content: ["Intro to Gen AI", "Domain mastery", "AI Resume"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-visible">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#10404a]">
            Skill Integration Matrix
          </h2>
          <p className="mt-4 text-gray-500">
            Connecting the essential pieces of your professional profile.
          </p>
        </div>

        {/* PUZZLE ROW CONTAINER */}
        <div className="flex flex-col md:flex-row justify-center w-full max-w-[95%] mx-auto gap-0">
          {puzzleData.map((item, index) => {
            const isLast = index === puzzleData.length - 1;

            return (
              <div
                key={item.id}
                style={{ zIndex: 20 - index }}
                className={`
                  relative flex-1 p-8 min-h-[250px] flex flex-col justify-center
                  text-white 
                  ${item.bg} 
                  
                  /* MOBILE: Standard Cards with spacing */
                  rounded-2xl mb-6 items-start text-left
                  
                  /* DESKTOP: Puzzle Shapes, no spacing, centered text */
                  md:rounded-none md:mb-0 md:items-center md:text-center
                  md:first:rounded-l-2xl md:last:rounded-r-2xl
                  
                  /* Shadow for depth */
               
                `}
              >
                {/* 1. RIGHT CONNECTOR (Horizontal Lock) - Desktop Only */}
                {!isLast && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div
                      className={`
                        w-12 h-12 rounded-full 
                        ${item.bg}
                    
                      `}
                    />
                  </div>
                )}

                {/* 2. BOTTOM CONNECTOR (Vertical Lock) - Desktop Only */}
                {item.hasBottomTab && (
                  <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-12 h-12 rounded-full ${item.bg} `} />
                  </div>
                )}

                {/* 3. TOP CONNECTOR (Vertical Lock) - Desktop Only */}
                {item.hasTopTab && (
                  <div className="hidden md:block absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-12 h-12 rounded-full ${item.bg} `} />
                  </div>
                )}

                {/* ================= CONTENT ================= */}
                {/* On mobile: Flex-row for Icon + Title to save vertical space */}
                <div className="relative z-10 w-full flex flex-col md:items-center">
                  
                  {/* Header Section */}
                  <div className="flex items-center gap-4 md:flex-col md:gap-2 mb-4 md:mb-6">
                    <span className="text-3xl md:text-4xl drop-shadow-md bg-white/10 p-2 rounded-lg md:bg-transparent md:p-0">
                      {item.icon}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      {item.title}
                    </h3>
                  </div>

                  {/* List Content */}
                  <ul className="space-y-3 md:space-y-2 text-sm font-medium text-white/90 w-full">
                    {item.content.map((line, i) => (
                      <li key={i} className="flex items-start gap-3 md:justify-center">
                        {/* Bullet point only visible on mobile for left-align structure */}
                        <span className="md:hidden mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PuzzleSkills;