"use client";

import React, { useState } from "react";

export default function NationalServiceScheme() {
  const [openIndex, setOpenIndex] = useState(null);

  const beComp = "/BEComp.pdf";

  const reports = [
    "NSS Activity Report 2022-23",
    "NSS Activity Report 2021-22",
    "NSS Activity Report 2020-21",
    "NSS Activity Report 2019-20",
    "NSS Activity Report 2018-19",
    "NSS Activity Report 2017-18",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary mb-4 sm:mb-6">
        National Service Scheme (NSS)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
        NSS has been introduced at <b>Savitribai Phule Pune University</b> since 1969 as part of the academic programs. The overall objective is educational, and service to the community is the activity through which the objective is achieved.
      </p>

      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
        <b>National Service Scheme (NSS)</b> helps students to cater to the needs of the community, develop social responsibility, and communicate effectively.
      </p>

      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
        Objectives of NSS
      </h3>

      <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
        <li>Develop social sensitivity, moral values, and professional ethics.</li>
        <li>Arrange workshops on social issues, ethics, and moral values.</li>
        <li>Organize social service groups, clubs, and outdoor field activities.</li>
      </ul>

      {/* NSS Activity Report Accordion */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary mb-3 sm:mb-4">
        NSS Activity Reports
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {reports.map((report, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-800 underline hover:text-primary transition text-sm sm:text-base">
                {report}
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-700">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-3 sm:p-4 bg-white border-t border-gray-300">
                <p className="text-gray-700 mb-2 text-sm sm:text-base">
                  Click below to view the {report} PDF.
                </p>
                <a
                  href={beComp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline text-sm sm:text-base"
                >
                  View Report
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}