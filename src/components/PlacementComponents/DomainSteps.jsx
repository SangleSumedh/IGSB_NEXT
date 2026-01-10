"use client";

import React from "react";
import { 
  FaBullhorn, 
  FaChartLine, 
  FaUsers, 
  FaCogs, 
  FaCertificate, 
  FaListUl 
} from "react-icons/fa";

const DomainSteps = () => {
  const domains = [
    {
      id: "01",
      title: "Marketing",
      icon: <FaBullhorn />,
      certs: ["Digital Marketing", "Sales & Negotiation"],
      topics: [
        "Marketing & Brand Outreach",
        "Marketing Research & Competitive Analysis",
        "Customer Relation Management (CRM Tool)",
        "Marketing Mix Modelling",
      ],
    },
    {
      id: "02",
      title: "Finance",
      icon: <FaChartLine />,
      certs: ["Financial Modelling", "Risk & Portfolio Management"],
      topics: [
        "Banking Financial Services & Insurance",
        "Investment Analytics",
        "Financial Planning & Analysis",
        "Budgeting and Forecasting",
      ],
    },
    {
      id: "03",
      title: "Human Resources",
      icon: <FaUsers />,
      certs: ["HRIMS", "Performance & Talent Management"],
      topics: [
        "Talent Acquisition",
        "HR Business Partner",
        "HR Analytics",
        "Retention & Attrition Analytics",
        "Employee Engagement & Performance Analytics",
      ],
    },
    {
      id: "04",
      title: "OSCM",
      sub: "(Operations & Supply Chain)",
      icon: <FaCogs />,
      certs: ["Six Sigma", "Project & Quality Management"],
      topics: [
        "Inventory Management",
        "Logistics & Transportation",
        "Capacity Planning",
        "Operation Strategy",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-full mx-auto px-4 sm:px-6">

        {/* HEADER */}
        {/* <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#10404A] mb-5">
            Domain Specializations
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            A comprehensive curriculum designed to provide both recognized certifications and in-depth topic mastery.
          </p>
        </div> */}

        <div className="relative space-y-20 ">

          {/* Vertical Line */}
          

          {domains.map((domain, index) => (
            <div key={index} className="relative">

              {/* ICON NODE */}
              <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-8 z-30 ">   
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff712d] to-[#ff8f5a] text-white flex items-center justify-center text-2xl shadow-xl ring-8 ring-gray-50">
                  {domain.icon}
                </div>
              </div>
            

              {/* CARD */}
              <div className="mt-8 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl ">

                <div className="flex flex-col md:flex-row">

                  {/* LEFT PANEL */}
                  <div className="md:w-2/5 p-8 md:p-10 bg-gradient-to-br from-[#10404A] to-[#0b2f35] text-white relative">

                    {/* Accent Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff712d] to-[#3aafa9]" />

                    <h3 className="text-2xl font-bold leading-tight mb-1 ">
                      {domain.title}
                    </h3>

                    {domain.sub && (
                      <span className="text-xs text-gray-300 mb-6 block ">
                        {domain.sub}
                      </span>
                    )}

                    <div className="space-y-5">
                      <div className="flex items-center gap-2 text-[#ff712d] text-xs font-semibold tracking-widest uppercase">
                        <FaCertificate />
                        Certifications
                      </div>

                      <ul className="space-y-3">
                        {domain.certs.map((cert, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-200"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT PANEL */}
                  <div className="md:w-3/5 p-8 md:p-10 bg-white relative">

                    <div className="space-y-5">
                      <div className="flex items-center gap-2 text-[#3aafa9] text-xs font-bold tracking-widest uppercase">
                        <FaListUl />
                        Core Topics
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {domain.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-gray-700 text-sm font-medium"
                          >
                            <span className="text-[#ff712d] mt-[2px]">✓</span>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DomainSteps;
