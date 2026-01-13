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
  FaCheckCircle
} from "react-icons/fa";

const DomainSteps = () => {
  const domains = [
    {
      title: "Marketing",
      clipart: "/placement/marketing.png",
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
    <section className="bg-slate-50 py-20 font-sans overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="space-y-24">
          {domains.map((domain, index) => {
            const isCardLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col items-center w-full gap-8 lg:gap-0
                  ${isCardLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* ================= SECTION 1: CONTENT CARD ================= */}
                <div
                  className={`
                        w-full lg:w-1/2 group relative z-10
                        ${isCardLeft ? "lg:pr-16" : "lg:pl-16"}
                    `}
                >
                  <div
                    className={`
                      relative p-8 shadow-2xl rounded-2xl
                      /* CHANGED: Solid Dark Teal background to match IRP Header */
                      bg-[#10404A]
                      /* CHANGED: Accent Border to Light Teal */
                      border-t-8 border-[#3AAFA9]
                      w-full text-left
                      transition-transform duration-300 hover:-translate-y-2
                    `}
                  >
                    <div className="relative">
                      {/* --- Header: Icon + Title --- */}
                      <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-8 flex items-center gap-4">
                        {/* CHANGED: Icon container is now Light Teal to match buttons */}
                        <span className="text-xl text-black bg-white p-4 rounded-full shadow-lg flex items-center border-4 border-orange-500 justify-center">
                          {domain.icon}
                        </span>
                        {domain.title}
                      </h3>

                      {/* --- Body Content --- */}
                      <div className="space-y-8">
                        
                        {/* 1. Topics List */}
                        <div>
                          <div className="flex items-center gap-2 font-bold text-lg mb-4 text-[#3AAFA9] uppercase tracking-wide">
                            <FaListUl className="text-xl" />
                            <span>Core Modules</span>
                          </div>
                          <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 ">
                            {domain.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-3 text-white text-base ">
                                <FaCheckCircle className="mt-1 text-[#3AAFA9] shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. Certifications Block (Styled like the IRP Buttons) */}
                        <div className="pt-6 border-t border-white/10">
                          <p className="font-bold text-sm text-white/60 uppercase tracking-widest mb-4">
                            Specialized Certifications
                          </p>
                          
                          <div className="flex flex-wrap gap-4">
                            {domain.certs.map((cert, i) => (
                              <div
                                key={i}
                                /* CHANGED: Styled to look like the "Aptitude/Technical" buttons */
                                className="flex items-center gap-3 bg-[#3AAFA9] text-white px-5 py-3 rounded- shadow-md hover:bg-[#2b9d97] transition-all duration-300 cursor-default"
                              >
                                {/* The Logo/Icon */}
                                <span className="text-xl">
                                  {cert.icon}
                                </span>
                                {/* The Title */}
                                <span className="font-bold text-sm">{cert.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= SECTION 2: CLIPART IMAGE ================= */}
                <div
                  className={`
                        hidden lg:flex lg:w-1/2 justify-center items-center
                        ${isCardLeft ? "lg:pl-16" : "lg:pr-16"}
                    `}
                >
                  <div className="relative">
                    {/* Optional: A subtle glow behind the image matching the teal theme */}
                    <div className="absolute inset-0 bg-[#3AAFA9]/20 blur-3xl rounded-full scale-75"></div>
                    
                    <img
                      src={domain.clipart}
                      alt={`${domain.title} illustration`}
                      className="relative z-10 max-w-full h-auto max-h-[400px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
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