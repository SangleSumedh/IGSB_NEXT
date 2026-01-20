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
      clipart: "/placement/M11.png",
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
      clipart: "/placement/F11.png",
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
      clipart: "/placement/HR11.png",
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
      clipart: "/placement/OSCM11.png",
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
    <section className="bg-secondary py-10 font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        {/* GRID CONTAINER: 1 column mobile, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, index) => {
            return (
              <div key={index} className="w-full group relative z-10 h-full">
                <div
                  className={`
            relative p-6 md:p-8 h-full shadow-2xl rounded-2xl
            bg-white
            border-t-8 border-primary
            flex flex-col
            transition-transform duration-300 hover:-translate-y-2 overflow-hidden
          `}
                >
                  <div className="absolute -top-5 -right-2 z-0 pointer-events-none opacity-10">
                    <div className="relative">
                      {/* Large faded icon - can duplicate for layered effect */}
                      <div className="text-9xl rotate-12 text-secondary">
                        {domain.icon}
                      </div>
                      {/* Optional: Additional smaller icon for depth */}
                      <div className="absolute -top-2 -right-2 text-5xl rotate-45 opacity-30">
                        {domain.icon}
                      </div>
                    </div>
                  </div>
                  {/* ================= MAIN CONTENT ================= */}
                  <div className="relative z-10 flex-grow">
                    {/* --- Header: Icon + Title --- */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <span className="text-xl text-white bg-secondary p-4 rounded-full shadow-lg flex items-center justify-center">
                          {domain.icon}
                        </span>
                        <h3 className="text-xl font-extrabold uppercase tracking-wider text-primary max-w-[70%]">
                          {domain.title}
                        </h3>
                      </div>
                    </div>

                    {/* --- Body Content --- */}
                    <div className="space-y-6">
                      {/* 1. Topics List */}
                      <div>
                        <div className="flex items-center gap-2 font-bold text-lg mb-4 text-secondary uppercase tracking-wide">
                          <FaListUl className="text-xl" />
                          <span>Core Modules</span>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-1 gap-x-2 gap-y-2">
                          {domain.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-700 font-semibold text-sm"
                            >
                              <FaCheckCircle className="mt-1 text-secondary shrink-0" />
                              <span className="bg-white/60 backdrop-blur-sm rounded px-1 leading-snug">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 2. Certifications Block */}
                    <div className="pt-6 mt-6">
                      <p className="font-bold text-sm text-secondary uppercase tracking-widest mb-4">
                        Professional Certifications
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {domain.certs.map((cert, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-gray-50/90 border border-gray-200 text-gray-700 px-4 py-2 rounded shadow-sm hover:bg-[#e0f2f1] hover:text-[#00695c] transition-all duration-300 cursor-default backdrop-blur-sm"
                          >
                            <span className="text-lg text-secondary">
                              {cert.icon}
                            </span>
                            <span className="font-bold text-xs">
                              {cert.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ================= DECORATIVE IMAGE (Right Corner) ================= */}
                  <div className="hidden md:flex absolute right-13 bottom-8 z-0 pointer-events-none overflow-hidden">
                    <img
                      src={domain.clipart}
                      alt=""
                      className="h-85 w-auto object-contain hover:opacity-25 transition-opacity duration-300"
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
