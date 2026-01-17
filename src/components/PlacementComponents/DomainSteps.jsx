"use client";

import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaListUl,
  FaGlobe,
  FaHandshake,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaDatabase,
  FaTrophy,
  FaProjectDiagram,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";

const DomainSteps = () => {
  const domains = [
    {
      title: "Marketing",
      clipart: "/mii.png",
      icon: <FaBullhorn />,
      certs: [
        { title: "Digital Marketing", icon: <FaGlobe /> },
        { title: "Sales & Negotiation", icon: <FaHandshake /> },
      ],
      topics: [
        "Marketing and Brand Outreach",
        "Marketing Research & Analysis",
        "Customer Relation Management",
        "Marketing Mix Modelling",
      ],
    },
    {
      title: "Finance",
      clipart: "/placement/finance.png",
      icon: <FaChartLine />,
      certs: [
        { title: "Financial Modelling", icon: <FaFileInvoiceDollar /> },
        { title: "Risk & Portfolio Mgmt", icon: <FaShieldAlt /> },
      ],
      topics: [
        "Banking Financial Services",
        "Investment Analytics",
        "Financial Planning & Analysis",
        "Budgeting and Forecasting",
      ],
    },
    {
      title: "Human Resources",
      clipart: "/placement/hr.png",
      icon: <FaUsers />,
      certs: [
        { title: "HRIMS", icon: <FaDatabase /> },
        { title: "Talent Management", icon: <FaTrophy /> },
      ],
      topics: [
        "Talent Acquisition",
        "HR Analytics",
        "HR Business Partner",
        "Retention & Attrition Analytics",
      ],
    },
    {
      title: "OSCM",
      clipart: "/placement/oscm.png",
      icon: <FaCogs />,
      certs: [
        { title: "Six Sigma", icon: <FaProjectDiagram /> },
        { title: "Project & Quality", icon: <FaClipboardCheck /> },
      ],
      topics: [
        "Inventory Management",
        "Logistics and Transportation",
        "Capacity & Planning",
        "Operation Strategy",
      ],
    },
  ];

  return (
    <section className="bg-[#2b9d97] py-20 font-sans overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="">
          {domains.map((domain, index) => {
            const isCardLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col md:items-stretch w-full gap-4 lg:gap-0
                  ${isCardLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* ================= SECTION 1: CONTENT CARD ================= */}
                <div
                  className={`
                        w-full lg:w-1/2 group relative z-10
                        ${isCardLeft ? "lg:pr-8" : "lg:pl-8"}
                    `}
                >
                  <div
                    className={`
                      relative p-4 shadow-2xl rounded-2xl
                      /* CHANGED: White Card for clean contrast */
                      bg-white
                      /* CHANGED: Border is now a darker shade of the section teal */
                      border-t-8 border-primary
                      w-full text-left
                      transition-transform duration-300 hover:-translate-y-2 overflow-hidden
                    `}
                  >
                    <div className="absolute -top-6 -right-6 text-[10rem] text-secondary opacity-[0.07] pointer-events-none rotate-12 select-none z-0 ">
                      {domain.icon}
                    </div>
                    <div className="relative">
                      {/* --- Header: Icon + Title --- */}
                      <h3 className="text-xl font-extrabold uppercase tracking-wider mb-8 flex items-center gap-4 text-primary">
                        {/* ICON: Dark Teal bg, White Icon */}
                        <span className="text-xl text-white bg-secondary p-4 rounded-full shadow-lg flex items-center justify-center">
                          {domain.icon}
                        </span>
                        {domain.title}
                      </h3>

                      {/* --- Body Content --- */}
                      <div className="space-y-3">
                        {/* 1. Topics List */}
                        <div>
                          <div className="flex items-center gap-2 font-bold text-lg mb-4 text-secondary uppercase tracking-wide">
                            <FaListUl className="text-xl" />
                            <span>Core Modules</span>
                          </div>
                          <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2">
                            {domain.topics.map((topic, i) => (
                              <li
                                key={i}
                                // Text is now dark gray for readability
                                className="flex items-start gap-3 text-gray-600 font-medium"
                              >
                                {/* Checkmark is the Brand Teal */}
                                <FaCheckCircle className="mt-1 text-secondary shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. Certifications Block */}
                        <div className="pt-6 border-t border-gray-200">
                          <p className="font-bold text-sm text-secondary uppercase tracking-widest mb-4">
                            Professional Certifications
                          </p>

                          <div className="flex flex-wrap gap-4">
                            {domain.certs.map((cert, i) => (
                              <div
                                key={i}
                                // Buttons: Light Gray bg with Dark Text (Subtle)
                                className="flex items-center gap-3 bg-gray-100 text-gray-700 px-5 py-3 rounded- shadow-md hover:bg-[#e0f2f1] hover:text-[#00695c] transition-all duration-300 cursor-default"
                              >
                                <span className="text-xl text-secondary">
                                  {cert.icon}
                                </span>
                                <span className="font-bold text-sm">
                                  {cert.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= SECTION 2: CLIPART IMAGE (FIXED) ================= */}
                {/* ================= SECTION 2: CLIPART IMAGE (RESPONSIVE FIXED) ================= */}
                <div
                  className={`
    /* Mobile: Relative (stacks normally), visible, restricted height */
    relative w-full h-64 mt-8
    
    /* Desktop: Absolute (floats to side), full height */
    lg:absolute lg:top-0 lg:bottom-0 lg:w-1/2 lg:h-auto lg:mt-0

    /* Side positioning logic (Desktop only) */
    ${isCardLeft ? "lg:right-0 lg:pl-16" : "lg:left-0 lg:pr-16"}
  `}
                >
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img
                      src={domain.clipart}
                      alt={`${domain.title} illustration`}
                      /* Adjusted to fit container height on mobile */
                      className="relative z-10 max-w-full h-full lg:max-h-[400px] object-contain"
                    />
                  </div>
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
