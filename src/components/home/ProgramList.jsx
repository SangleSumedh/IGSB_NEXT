"use client";

import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const ProgramList = () => {
  const mbaPrograms = [
    { name: "MBA – Human Resource Management", link: "/programs/mba/hr" },
    { name: "MBA – Finance", link: "/programs/mba/finance" },
    { name: "MBA – Marketing Management", link: "/programs/mba/marketing" },
    { name: "MBA – Business Analytics", link: "/programs/mba/business-analytics" },
        { name: "MBA – Operations & Supply Chain Management", link: "/programs/mba/operations" },
  ];

  const phdPrograms = [
    { name: "PhD in Finance" },
    { name: "PhD in Marketing" },
    { name: "PhD in Business Analytics" },
    { name: "PhD in Human Resource Management" },
  ];

  return (
    <div className="h-full bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200">

      {/* HEADING */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
        ACADEMIC <span className="text-secondary">YEAR 2026–27</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* MBA PROGRAMMES */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            MBA Programmes
          </h3>

          <div className="space-y-3">
            {mbaPrograms.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="
                  flex items-center group
                  text-md md:text-lg
                  font-medium text-gray-800
                  hover:text-secondary transition-all
                "
              >
                <IoMdArrowDropright
                  className="
                    text-secondary text-xl mr-1
                    transform transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* PHD PROGRAMMES */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            PhD Research Programmes
          </h3>

          <ul className="space-y-3">
            {phdPrograms.map((item, index) => (
              <li
                key={index}
                className="
                  flex items-center group
                  text-md md:text-lg
                  font-medium text-gray-800
                  hover:text-secondary transition-all
                "
              >
                <IoMdArrowDropright
                  className="
                    text-secondary text-xl mr-1
                    transform transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProgramList;
