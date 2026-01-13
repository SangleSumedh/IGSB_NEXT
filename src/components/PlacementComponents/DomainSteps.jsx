"use client";

import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCertificate,
  FaListUl,
  // New icons for the certificates
  FaGlobe,
  FaHandshake,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaDatabase,
  FaTrophy,
  FaProjectDiagram,
  FaClipboardCheck,
} from "react-icons/fa";
const DomainSteps = () => {
const domains = [
    {
      title: "Marketing",
      clipart: "/placement/marketing.png",
      icon: <FaBullhorn />,
      // UPDATE 1: Changed 'certs' to an array of objects with icons
      certs: [
        { title: "Digital Marketing", icon: <FaGlobe /> },
        { title: "Sales & Negotiation", icon: <FaHandshake /> },
      ],
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
      certs: [
        { title: "Financial Modelling", icon: <FaFileInvoiceDollar /> },
        { title: "Risk & Portfolio Mgmt", icon: <FaShieldAlt /> },
      ],
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
      certs: [
        { title: "HRIMS", icon: <FaDatabase /> },
        { title: "Talent Management", icon: <FaTrophy /> },
      ],
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
    <section className="bg-gray-50 py-20 min-h-screen font-sans">
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
                      relative p-6 lg:p-8 shadow-xl
                      border-t-4 border-[#00a49e]
                      w-full rounded-md 
                      text-left
                      transition-transform duration-300 hover:-translate-y-2
                      bg-gradient-to-r from-[#10404A] to-[#1F6D71]
                    `}
                  >
                    <div className="relative">
                      {/* Header: Icon + Title */}
                      <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-4">
                        <span className="text-3xl text-[#f9712f] bg-[#1A5F64] p-3 rounded-md shadow-md flex items-center justify-center">
                          {domain.icon}
                        </span>
                        {domain.title}
                      </h3>

                      {/* Body Content */}
                      <div className="space-y-6 text-sm text-white/90">
                        {/* Certifications Block */}
                        <div className="bg-[#0A2E36] p-4 rounded-md border border-[#00a49e]/30 shadow-sm">
                          <div className="flex items-center gap-2 font-bold text-base mb-3 text-[#f9712f]">
                            <FaCertificate className="text-lg" />
                            <span className="text-white">Certifications</span>
                          </div>
                          
                          {/* UPDATE 2: Updated mapping logic for icons */}
                          <div className="flex flex-wrap gap-3">
                            {domain.certs.map((cert, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 text-xs font-medium bg-[#00a49e] text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-[#008f8a] transition-colors"
                              >
                                {/* The Logo/Icon */}
                                <span className="text-white/80 text-sm">
                                  {cert.icon}
                                </span>
                                {/* The Title */}
                                <span>{cert.title}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Topics List */}
                        <div className="mt-4">
                          <div className="flex items-center gap-2 font-bold text-base mb-2 text-[#00a49e]">
                            <FaListUl className="text-lg text-[#f9712f] " />
                            <span className="text-white">Key Topics</span>
                          </div>
                          <ul className="space-y-2 text-base">
                            {domain.topics.map((topic, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 text-white/90"
                              >
                                {/* Dot Bullet */}
                                <span className="w-2 h-2 flex-shrink-0 rounded-md bg-[#f9712f]"></span>
                                {topic}
                              </li>
                            ))}
                          </ul>
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
