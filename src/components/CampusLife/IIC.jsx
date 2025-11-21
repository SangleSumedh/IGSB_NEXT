"use client";

import React from "react";
import { iicTeam } from "../../static/campuslife/iic";

export default function IIC() {
  const establishmentCert = "/Establisment_Certificate.pdf";
  const iicRatingCert = "/IIC_Rating_Certificate_2023-24.pdf";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
  {/* Header Section */}
  <div className="space-y-2 mb-6">
    <h2 className="text-2xl font-semibold text-secondary mb-2">
      The Institution's Innovation Council at ICEM
    </h2>
    <h3 className="text-xl font-semibold text-secondary">
      Fostering a Culture of Innovation
    </h3>
  </div>

  {/* Introduction */}
  <div className="space-y-4 mb-6">
    <div className="bg-white p-0">
      <p className="text-gray-700 leading-relaxed">
        Indira College of Engineering and Management formally established
        the Institution's Innovation Council (ICEM-IIC) in December 2021,
        operating under the strategic guidelines of the Ministry of
        Education's Innovation Cell (MIC). This initiative underscores our
        commitment to systematically cultivating innovation and
        entrepreneurship at the institutional level, creating a structured
        ecosystem for transformative ideas.
      </p>
    </div>
  </div>

  {/* Primary Objective Section */}
  <div className="space-y-4 mb-6">
    <h3 className="text-xl font-semibold text-secondary">
      Primary Objective of IIC
    </h3>
    <div className="bg-white p-0">
      <p className="text-gray-700 leading-relaxed">
        The fundamental objective of ICEM-IIC is to actively encourage,
        inspire, and nurture young minds by providing a supportive framework
        that enables students to develop novel ideas into functional
        prototypes and viable products. This dedicated effort aims to
        establish a self-sustaining local innovation ecosystem within our
        academic environment.
      </p>
    </div>
  </div>
  {/* Core Functions Section */}
  <div className="space-y-4 mb-6">
    <h3 className="text-xl font-semibold text-secondary">
      Core Functions & Strategic Initiatives
    </h3>
    <div className="space-y-3">
      {[
        "Implementation of comprehensive innovation and entrepreneurship activities as prescribed by the Ministry of Education's Innovation Cell.",
        "Systematic identification, mentoring, and recognition of innovative projects while disseminating success narratives.",
        "Regular organization of workshops, seminars, and interactive sessions with established entrepreneurs, investors, and industry professionals to build a robust mentor network.",
        "Strategic promotion and highlighting innovative projects developed by both faculty and students.",
        "Coordination of competitive events including idea contests, business plan competitions, mini-challenges, and hackathons with active industry participation.",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 bg-white p-0"
        >
          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
            {index + 1}
          </div>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Closing Statement */}
  <div className="bg-white p-0 mb-6">
    <p className="text-gray-700 leading-relaxed">
      Through these focused initiatives, ICEM-IIC serves as the central
      platform for transforming creative concepts into tangible solutions,
      positioning our institution at the forefront of technological
      innovation and entrepreneurial development.
    </p>
  </div>

  {/* Team Section */}
  <div className="space-y-4 mb-6">
    <h3 className="text-xl font-semibold text-secondary">
      ICEM – IIC Team
    </h3>
    <p className="text-gray-700 mb-4">
      The team consists of the following members:
    </p>

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-left text-gray-800 text-xs sm:text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2 text-center">Sr. No.</th>
            <th className="border border-gray-300 p-2">Name of Faculty</th>
            <th className="border border-gray-300 p-2">Member</th>
            <th className="border border-gray-300 p-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {iicTeam.map(([sr, name, mem, pos]) => (
            <tr key={sr} className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
              <td className="border border-gray-300 p-2 text-center">{sr}</td>
              <td className="border border-gray-300 p-2">{name}</td>
              <td className="border border-gray-300 p-2">{mem}</td>
              <td className="border border-gray-300 p-2">{pos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Certificates Section */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-secondary">
      Certificates
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg border border-gray-300">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800">
            Establishment Certificate
          </h4>
          <a
            href={establishmentCert}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View Certificate
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-300">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-800">
            IIC Rating Certificate 2023–24
          </h4>
          <a
            href={iicRatingCert}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View Certificate
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
