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
    <section className="bg-[#2b9d97] py-20 font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        
        {/* GRID CONTAINER: 1 column mobile, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, index) => {
            return (
              <div
                key={index}
                className="w-full group relative z-10 h-full"
              >
                <div
                  className={`
                      relative p-6 md:p-8 h-full shadow-2xl rounded-2xl
                      bg-white
                      border-t-8 border-primary
                      flex flex-col
                      transition-transform duration-300 hover:-translate-y-2 overflow-hidden
                    `}
                >
                  {/* ================= BACKGROUND IMAGE (Watermark) ================= */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <img 
                      src={domain.clipart} 
                      alt="" 
                      className="w-3/4 h-3/4 object-contain opacity-10 grayscale-[50%]"
                    />
                  </div>

                  {/* ================= CONTENT (z-10 to sit above image) ================= */}
                  <div className="relative z-10">
                    {/* --- Header: Icon + Title --- */}
                    <h3 className="text-xl font-extrabold uppercase tracking-wider mb-8 flex items-center gap-4 text-primary">
                      <span className="text-xl text-white bg-secondary p-4 rounded-full shadow-lg flex items-center justify-center">
                        {domain.icon}
                      </span>
                      {domain.title}
                    </h3>

                    {/* --- Body Content --- */}
                    <div className="space-y-6 flex-grow">
                      {/* 1. Topics List */}
                      <div>
                        <div className="flex items-center gap-2 font-bold text-lg mb-4 text-secondary uppercase tracking-wide">
                          <FaListUl className="text-xl" />
                          <span>Core Modules</span>
                        </div>
                        
                        {/* CHANGED: Grid layout for topics (2 columns on sm+ screens) */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
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

                      {/* 2. Certifications Block */}
                      <div className="pt-6 border-t border-gray-200 mt-auto">
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