"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function InductionProgramme() {
  const [openIndex, setOpenIndex] = useState(null);

  // Assets from public folder
  const bannerImg = "/BannerOverviewPage.jpg";
  const beComp = "/BEComp.pdf";


  const activityReports = [
    "Report 2023-2024",
    "Report 2022-2023",
    "Report 2021-2022",
    "Report 2018-2019",
    "Report 2017-2018",
    "Report 2016-2017",
    "Report 2015-2016",
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Banner */}

      {/* Main Content */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6">
          About Induction Programme
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          The term <b>induction</b> is generally used to describe the process
          whereby new incumbents adjust to or acclimatize to their new roles and
          environment. In other words, it is a well-planned event to educate new
          entrants about the institution's environment and connect them with the
          people in it.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
          Objectives of the Induction Programme
        </h3>

        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
          The purpose of the <b>Student Induction Programme</b> is to help new
          students adjust and feel comfortable in the new environment, inculcate
          in them the ethos and culture of the institution, help them build
          bonds with other students and faculty members, and expose them to a
          sense of larger purpose and self-exploration.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6 mb-6 sm:mb-10">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
            Key Highlights of the Programme
          </h4>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Orientation about the institution and its departments.</li>
            <li>Interactive sessions with faculty and student mentors.</li>
            <li>Workshops on personality development and ethics.</li>
            <li>Introduction to academic rules, facilities, and resources.</li>
            <li>Team-building and cultural integration activities.</li>
          </ul>
        </div>

        {/* Activities Accordion */}
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-3 sm:mb-4">
          Activities
        </h3>

        <div className="space-y-2 sm:space-y-3">
          {activityReports.map((report, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg bg-gray-50 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <span className="underline text-sm sm:text-base font-semibold hover:text-primary transition">
                  {report}
                </span>
                <span className="text-lg sm:text-xl text-gray-700">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 mb-2 text-sm sm:text-base">
                    Click below to view the {report} document.
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
    </>
  );
}
