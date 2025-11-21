"use client";

import React, { useState } from "react";
import { councilReports } from "../../static/campuslife/student_council";

export default function IcemStudentCouncil() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
  <h2 className="text-2xl font-semibold text-secondary mb-4">
    The ICEM Student Council
  </h2>
  
  <h3 className="text-xl font-semibold text-secondary mb-4">
    Governance and Student Leadership
  </h3>

  <p className="text-gray-700 leading-relaxed mb-4">
    Indira College of Engineering and Management has formally established its Student Council in full compliance with the Maharashtra Public Universities Act, 2016 (Section 99). This statutory body serves as the official representative voice of our student community, operating within a structured framework designed to enhance both academic experience and corporate life while explicitly maintaining a non-political stance.
  </p>

  <h4 className="text-lg font-semibold text-secondary mb-3">
    Constitutional Framework:
  </h4>
  <p className="text-gray-700 leading-relaxed mb-4">
    The Student Council operates under the legal provisions of the Maharashtra Public Universities Act, which mandates the formation of student governance bodies to promote student welfare and coordinate extracurricular activities. This legislative foundation ensures proper governance structures while authorizing the Council to manage student activity fees and programming in accordance with university guidelines.
  </p>

  <h4 className="text-lg font-semibold text-secondary mb-3">
    Institutional Mission & Vision:
  </h4>
  <p className="text-gray-700 leading-relaxed mb-4">
    The ICEM Student Council functions as the primary representative body for our student community, with a clear mission to cultivate leadership capabilities and promote ethical values among students. Through collaborative partnerships with faculty, administration, and alumni, the Council works to foster an environment of responsible leadership and constructive dialogue.
  </p>

  <h4 className="text-lg font-semibold text-secondary mb-3">
    Organizational Structure:
  </h4>
  <p className="text-gray-700 leading-relaxed mb-4">
    The Council's executive committee comprises:<br />
    • Administrative and faculty advisors providing institutional guidance<br />
    • Elected student office bearers representing diverse academic disciplines<br />
    • Class representatives ensuring comprehensive student representation
  </p>

  <h4 className="text-lg font-semibold text-secondary mb-3">
    Strategic Objectives:
  </h4>
  <ul className="text-gray-700 leading-relaxed mb-6 list-disc list-inside space-y-2">
    <li>Develop and implement programs addressing co-curricular, cultural, and social interests</li>
    <li>Enhance leadership capabilities through structured planning and volunteer opportunities</li>
    <li>Promote ethical leadership and character development across the student community</li>
    <li>Facilitate cross-campus collaboration and idea exchange</li>
    <li>Manage student activity resources with fiscal responsibility</li>
  </ul>

  <p className="text-gray-700 leading-relaxed mb-6">
    The ICEM Student Council represents our institutional commitment to developing well-rounded professionals equipped with both technical expertise and essential leadership qualities, preparing them for success in their future careers and communities.
  </p>

  <h3 className="text-xl font-semibold text-secondary mb-4">
    Student Council Reports
  </h3>

  <div className="space-y-2">
    {councilReports.map((report, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded overflow-hidden"
      >
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <span className="font-medium text-gray-800">{report.year}</span>
          <span className="text-xl font-bold">
            {openIndex === index ? "−" : "+"}
          </span>
        </button>

        {openIndex === index && (
          <div className="p-4 bg-white border-t border-gray-300 overflow-x-auto">
            {report.members.length > 0 ? (
              <table className="w-full border border-gray-300 text-left text-gray-800 text-xs sm:text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-center">
                      Sr. No.
                    </th>
                    <th className="border border-gray-300 p-2">
                      Name
                    </th>
                    <th className="border border-gray-300 p-2">
                      Designation
                    </th>
                    <th className="border border-gray-300 p-2">
                      Mobile No.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.members.map(([sr, name, role, mobile]) => (
                    <tr
                      key={sr}
                      className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <td className="border border-gray-300 p-2 text-center">
                        {sr}
                      </td>
                      <td className="border border-gray-300 p-2">{name}</td>
                      <td className="border border-gray-300 p-2">{role}</td>
                      <td className="border border-gray-300 p-2">
                        {mobile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-700 text-sm">
                Data for this academic year will be updated soon.
              </p>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
}
