"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Governance() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const CompBrochure = "/pdfs/BEComp.pdf";
  const CDC = "/governance/CDC-ICEM-2024-25.pdf";
  const Committee = "/governance/Committee_2024-25_New.pdf";

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ===== Hero Banner ===== */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Governance at ICEM"
          className="w-full h-full object-cover"
          height={600}
          width={1700}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Governance at Indira College
          </h1>
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="w-full flex flex-col md:flex-row py-6">
        {/* LEFT SECTION */}
        <div className="md:w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Institutional Governance and Leadership
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Governance at Indira College of Engineering and Management (ICEM)
            emphasizes transparency, accountability, and participative
            decision-making. The institution operates under the strategic vision
            of the Shree Chanakya Education Society (SCES) and adheres to
            policies aligned with AICTE, DTE, and Savitribai Phule Pune
            University.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Governing Body, Academic Council, and various statutory
            committees ensure the seamless implementation of academic,
            financial, and administrative processes. Each committee functions
            under defined responsibilities to maintain compliance, quality, and
            institutional excellence.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The governance model promotes participative leadership where faculty
            and staff contribute to strategic planning, curriculum design, and
            institutional development initiatives. Student representation in key
            bodies fosters inclusion and mutual growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Regular audits, feedback mechanisms, and performance reviews are key
            to ensuring that ICEM operates effectively and ethically while
            achieving its educational mission and objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The institutional governance system thus ensures transparency,
            responsibility, and continual improvement in all facets of
            administration — academics, finance, infrastructure, and human
            resources.
          </p>

          {/* ===== Governance Documents Section ===== */}
          <h3 className="mt-10 text-2xl font-bold text-secondary mb-6">
            Institutional Committees & Governance Documents
          </h3>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
            {[
              {
                title: "College Development Committee (CDC)",
                pdf: CDC,
                description:
                  "The CDC oversees academic development, infrastructure improvement, and faculty growth plans. Download the document below for full details.",
              },
              {
                title: "Institute Level Committees - AY 2024-25",
                pdf: Committee,
                description:
                  "Institute-level committees ensure quality assurance and student engagement across all departments.",
              },
              {
                title: "Governing Body (AY 2023-24 to AY 2027-28)",

                table: [
                  [
                    "Dr. Tarita Shankar, Chair Person & Chief Mentor-IGI",
                    "Management members",
                  ],
                  ["Mr. Rajiv Bansal, COO", "Management members"],
                  ["Mr. Sanjul Bhakri, CTIO", "Management members"],
                  [
                    "Mr. Shardul Gangal, Director Business Development",
                    "Management members",
                  ],
                  ["Dr. Poornashankar, Dean (R&D)", "Management members"],
                  [
                    "Dr. Manjusha Tatiya, HoD (AI & DS).",
                    "Teachers of College",
                  ],
                  ["Dr. Saurabh Gupta, Dean-Academics", "Teachers of College"],
                  ["Mrs. Anita Surve, Registrar", "Administrative Staff"],
                  ["Prof. Chetan Wakalkar, Academic Advisor", "Educationist"],
                  ["Vacant", "State Government Nominee"],
                  [
                    "Dr. Suresh Shirbahadurkar, D Y Patil Technical Campus, Talegaon Dabhade Pune",
                    "SPPU Pune Nominee",
                  ],
                  ["Dr. Nilesh Uke, Principal", "Member Secretary"],
                ],
              },
              {
                title: "Academic Council (AY 2023-24 to AY 2025-26)",
                table: [
                  ["Dr. Nilesh Uke, Principal", "Chairman (Academic Council)"],

                  ["Dr. Mahesh Bhong, HoD-Mechanical", "HoDs"],
                  ["Dr. Manjusha Tatiya, HoD-AI/DS", "HoDs"],
                  ["Dr. Archana R. Salve, HoD-MBA", "HoDs"],
                  ["Dr. Darshana J. Desai, HoD-MCA", "HoDs"],
                  ["Mr. Dhiraj S. Bhagwat, HoD-E&TC", "HoDs"],
                  ["Ms. Deepali Dhadwad, HoD-IT", "HoDs"],

                  ["Dr. Soumitra Das, Vice Principal", "Senior Teachers"],
                  ["Dr. Poornashankar, Dean-R&D", "Senior Teachers"],
                  ["Dr Priya Pise, Professor-AI/DS", "Senior Teachers"],
                  ["Mr. Atul Gore, Physical Director", "Senior Teachers"],

                  [
                    "Dr. Sudarshan Iyengar, HoD(Computer), IIT Ropar",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Dr. Sonali Agarwal, Asso Professor (IT), IIIT Allahabad",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Mr. Sushant Kumar, Talent Acquisition Manager, Brillio",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Prof. Kamal Ghosh, College of Military Engineering, Pune",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Mr. Ramesh Varadharajan, Head-Customer Support, IQVIA Technologies",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Mr. Gajendran Ravindran, Corporate Vice President-WNS",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],
                  [
                    "Dr. Rakesh Kumar Jain, Principal, Rajarshi Sahu College of Engineering, Pune",
                    "Industry experts/academicians from outside the Autonomous College",
                  ],

                  [
                    "Dr Rajendra Kanphade, Jaywantrao Sawant College of Engineering, Pune",
                    "SPPU Pune Nominee",
                  ],
                  [
                    "Dr. Mahesh Abale, Director, Prin. N.G. Naralkar Institute, Pune",
                    "SPPU Pune Nominee",
                  ],
                  [
                    "Dr. Sangita Jagtap, HoD-Chemistry, Baburaoji Gholap College, Pune",
                    "SPPU Pune Nominee",
                  ],

                  ["Mrs Minakshi Patil, COE", "Controller of Examination"],

                  ["Dr. Saurabh Gupta, Dean-Academics", "Member Secretary"],
                ],
              },
              {
                title: "Finance Committee (AY 2023-24 to AY 2025-26)",
                table: [
                  ["Dr. Nilesh Uke, Principal", "Chairman"],
                  ["Mr. Girish Popatlal Parekh, Director-Finance", "Member"],
                  ["Dr. Saurabh Gupta, Dean (Academics)", "Teacher"],
                  ["Mr. Mahesh Mahamunkar, Sr Accountant", "Member Secretary"],
                  [
                    "Mr Arvind Gavali, Sr Accountant, Chanakya Campus",
                    "Member Secretary",
                  ],
                ],
              },
              {
                title: "Examination Committee (AY 2023-24 to AY 2025-26)",
                table: [
                  ["Dr. Nilesh Uke, Principal", "Chairman"],
                  ["Dr. Saurabh Gupta, Dean (Academics)", "Vice Chairman"],

                  ["Mrs. Pratima Gaikwad, Asst Professor", "Teachers"],
                  ["Mr. Harshal Mahajan, Asst Professor", "Teachers"],
                  ["Mr. Tejas Pawar, Asst Professor", "Teachers"],
                  ["Ms. Aditi Hupparikar, Asst Professor", "Teachers"],
                  ["Mr. Sagar Chirade, Asst Professor", "Teachers"],

                  [
                    "Mrs. Minakshi Patil, Controller of Examination",
                    "Member Secretary",
                  ],
                ],
              },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Accordion Header */}
                <div
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 underline underline-offset-2 hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xl font-bold text-gray-700">
                    {activeFAQ === index ? "−" : "+"}
                  </span>
                </div>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFAQ === index ? "max-h-full" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                    {item.description && (
                      <p className="mb-3">{item.description}</p>
                    )}

                    {item.table && (
                      <div className="overflow-x-auto mb-4 ">
                        <table className="min-w-full border text-center border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="border px-3 py-2  w-16">Sr No.</th>
                              <th className="border px-3 py-2 ">
                                Name of Member with Designation
                              </th>
                              <th className="border px-3 py-2  w-48">
                                Category
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {(() => {
                              // ===========================
                              // GROUP ROWSPAN BY CATEGORY
                              // ===========================
                              const grouped = {};
                              item.table.forEach((row) => {
                                const category = row[1];
                                if (!grouped[category]) grouped[category] = [];
                                grouped[category].push(row);
                              });

                              let sr = 1;

                              return Object.keys(grouped).map((category) => {
                                const rows = grouped[category];
                                const rowspan = rows.length;

                                return rows.map((row, idx) => (
                                  <tr
                                    key={sr}
                                    className="odd:bg-white even:bg-gray-50"
                                  >
                                    {/* S. No. */}
                                    <td className="border px-3 py-2">{sr++}</td>

                                    {/* Name */}
                                    <td className="border px-3 py-2">
                                      {row[0]}
                                    </td>

                                    {/* Category - only render on first row (merged) */}
                                    {idx === 0 && (
                                      <td
                                        rowSpan={rowspan}
                                        className="border px-3 py-2 align-top bg-gray-100 font-medium"
                                      >
                                        {category}
                                      </td>
                                    )}
                                  </tr>
                                ));
                              });
                            })()}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {item.pdf && (
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition"
                      >
                        View / Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
      </div>
    </div>
  );
}
