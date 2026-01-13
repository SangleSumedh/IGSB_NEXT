"use client";

import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCertificate,
  FaListUl,
} from "react-icons/fa";

const DomainSteps = () => {
  const domains = [
    {
      title: "Marketing",
      clipart: "/placement/marketing.png",
      icon: <FaBullhorn />,
      // Orange for high energy
      color: "bg-[#f9712f]",
      accentBorder: "border-[#f9712f]",
      certs: ["Digital Marketing", "Sales & Negotiation"],
      topics: [
        "Marketing and Brand Outreach",
        "Marketing Research and Competitive Analysis",
        "Customer Relation Management (CRM Tool)",
        "Marketing Mix Modelling",
      ],
    },
    {
      title: "Finance",
      clipart: "/placement/finance.png",
      icon: <FaChartLine />,
      // Dark Teal for trust and stability
      color: "bg-[#10404a]",
      accentBorder: "border-[#10404a]",
      certs: ["Financial Modelling", "Risk & Portfolio Management"],
      topics: [
        "Banking Financial Services and Insurance",
        "Investment Analytics",
        "Financial Planning and Analysis",
        "Budgeting and Forecasting",
      ],
    },
    {
      title: "Human Resources",
      clipart: "/placement/hr.png",
      icon: <FaUsers />,
      // Bright Teal for approachability
      color: "bg-[#00a49e]",
      accentBorder: "border-[#00a49e]",
      certs: ["HRIMS", "Performance & Talent Management"],
      topics: [
        "Talent Acquisition",
        "HR Analytics",
        "Human Resources Business Partner",
        "Retention and Attrition Analytics",
        "Employee Engagement and Performance Analytics",
      ],
    },
    {
      title: "OSCM",
      clipart: "/placement/oscm.png",
      icon: <FaCogs />,
      // Reusing Dark Teal for consistency and professionalism
      color: "bg-[#10404a]",
      accentBorder: "border-[#10404a]",
      certs: ["Six Sigma", "Project & Quality Management"],
      topics: [
        "Inventory Management",
        "Logistics and Transportation",
        "Capacity & Planning",
        "Operation Strategy",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 min-h-screen font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="space-y-24">
          {domains.map((domain, index) => {
            // Logic: Is the CONTENT CARD on the left?
            // Even index (0, 2) = Left. Odd index (1, 3) = Right.
            const isCardLeft = index % 2 === 0;

            return (
              <div
                key={index}
                // FLEX CONTAINER
                // Mobile: flex-col (Stack vertical)
                // Desktop: if isCardLeft, normal row (Card -> Image)
                //          if !isCardLeft, row-reverse (Image <- Card)
                className={`
                  relative flex flex-col items-center w-full gap-8 lg:gap-0
                  ${isCardLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* ================= SECTION 1: CONTENT CARD ================= */}
                {/* This div is always first in DOM, so on mobile it appears on top of the image. */}
                <div
                  className={`
                        w-full lg:w-1/2 group relative z-10
                        /* Padding logic: If card is Left, pad Right. If card is Right, pad Left. */
                        ${isCardLeft ? "lg:pr-16" : "lg:pl-16"}
                    `}
                >
                  <div
                    className={`
                      relative bg-white p-6 lg:p-8 shadow-xl
                      border-t-4 ${domain.accentBorder}
                      w-full rounded-xl 
                      /* FORCE TEXT LEFT ALIGNMENT ALWAYS */
                      text-left
                      transition-transform duration-300 hover:-translate-y-2
                    `}
                  >
                    {/* Header: Icon + Title */}
                    <h3 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-6 flex items-center gap-4">
                      <span className="text-3xl text-gray-400 bg-gray-50 p-2 rounded-lg">
                        {domain.icon}
                      </span>
                      {domain.title}
                    </h3>

                    {/* Body Content */}
                    <div className="space-y-6 text-sm text-gray-600">
                      {/* Certifications Block */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div
                          className={`flex items-center gap-2 font-bold text-base mb-3 ${domain.accentBorder.replace(
                            "border",
                            "text"
                          )}`}
                        >
                          <FaCertificate className="text-lg" />
                          Certifications
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {domain.certs.map((cert, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full shadow-sm"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Topics List */}
                      <div className="mt-4">
                        <div
                          className={`flex items-center gap-2 font-bold text-base mb-2 ${domain.accentBorder.replace(
                            "border",
                            "text"
                          )}`}
                        >
                          <FaListUl className="text-lg" />
                          Key Topics
                        </div>
                        <ul className="space-y-2 text-base">
                          {domain.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-3">
                              {/* Dot Bullet */}
                              <span
                                className={`w-2 h-2 flex-shrink-0 rounded-full ${domain.color}`}
                              ></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= SECTION 2: CLIPART IMAGE ================= */}
                <div
                  className={`
                        hidden lg:flex lg:w-1/2 justify-center items-center
                        /* Padding logic is opposite of the card to keep balance */
                        ${isCardLeft ? "lg:pl-16" : "lg:pr-16"}
                    `}
                >
                  <img
                    src={domain.clipart}
                    alt={`${domain.title} illustration`}
                    className="max-w-full h-auto max-h-[350px] object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainSteps;
