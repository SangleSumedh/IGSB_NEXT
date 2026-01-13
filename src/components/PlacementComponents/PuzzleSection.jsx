"use client";

import React from "react";
import { FaHandshake, FaBrain, FaUserTie, FaRobot } from "react-icons/fa";

const PuzzleSkills = () => {
  const puzzleData = [
    {
      id: 1,
      title: "Business Communication",
      icon: <FaHandshake />,
      // Dark Teal
      bg: "bg-[#10404a]",
      // The connector color must match the background of this card
      connectorColor: "text-[#10404a]", 
      content: [
        "Interpersonal communication",
        "Cross-cultural communication",
        "Oral & written communication",
      ],
    },
    {
      id: 2,
      title: "Aptitude",
      icon: <FaBrain />,
      // Orange
      bg: "bg-[#f9712f]",
      connectorColor: "text-[#f9712f]",
      content: [
        "Logical reasoning",
        "Quantitative aptitude",
        "Problem solving",
      ],
    },
    {
      id: 3,
      title: "Personal Branding",
      icon: <FaUserTie />,
      // Teal
      bg: "bg-[#00a49e]",
      connectorColor: "text-[#00a49e]",
      content: [
        "LinkedIn optimization",
        "Networking & connections",
        "Content creation & engagement",
      ],
    },
    {
      id: 4,
      title: "Generative AI",
      icon: <FaRobot />,
      // Dark Teal (reused for balance)
      bg: "bg-[#10404a]",
      connectorColor: "text-[#10404a]",
      content: [
        "Introduction to Gen AI",
        "Domain specific AI mastery",
        "AI enabled resume customization",
      ],
    },
  ];

  return (
    <section className="py-10 bg-white font-sans overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#10404a]">
            Skill Integration Matrix
          </h2>
          <p className="mt-4 text-gray-500">
            Connecting the essential pieces of your professional profile.
          </p>
        </div>

        {/* PUZZLE CONTAINER 
            Desktop: 2x2 Grid
            Mobile: Flex Column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto relative">
          
          {puzzleData.map((item, index) => {
            // Logic to determine border radius for corners to make it look like a unified block
            // Top-Left (Index 0), Top-Right (Index 1), Bottom-Left (Index 2), Bottom-Right (Index 3)
            let roundedClass = "";
            if (index === 0) roundedClass = "md:rounded-tl-[3rem]";
            if (index === 1) roundedClass = "md:rounded-tr-[3rem]";
            if (index === 2) roundedClass = "md:rounded-bl-[3rem]";
            if (index === 3) roundedClass = "md:rounded-br-[3rem]";

            return (
              <div
                key={item.id}
                className={`
                  relative p-8 md:p-12 min-h-[300px] flex flex-col justify-center items-start
                  text-white transition-transform duration-300 hover:z-20 hover:scale-[1.02] hover:shadow-2xl
                  ${item.bg} 
                  ${roundedClass}
                  /* Mobile rounded corners */
                  rounded-2xl md:rounded-none mb-4 md:mb-0
                `}
              >
                {/* ================= PUZZLE CONNECTORS (DESKTOP ONLY) ================= */}
                {/* We use pseudo-elements (divs) to create the "tabs" sticking out.
                   Ideally:
                   - Card 1 sticks right into Card 2, and down into Card 3.
                   - Card 2 sticks down into Card 4.
                   - Card 3 sticks right into Card 4.
                */}

                {/* Connector: Right Side (Only for item 0 and 2) */}
                {(index === 0 || index === 2) && (
                  <div 
                    className={`
                        hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 
                        w-12 h-12 rounded-full z-10
                        ${item.bg}
                    `} 
                  />
                )}

                {/* Connector: Bottom Side (Only for item 0 and 1) */}
                {(index === 0 || index === 1) && (
                  <div 
                    className={`
                        hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                        w-12 h-12 rounded-full z-10
                        ${item.bg}
                    `} 
                  />
                )}

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                        {item.icon}
                    </span>
                    <h3 className="text-2xl font-bold tracking-wide">
                        {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {item.content.map((line, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg font-medium text-white/90">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Pattern overlay */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H2v2c0 1.1.9 2 2 2h3.8v-1.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V21h4c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
                    </svg>
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