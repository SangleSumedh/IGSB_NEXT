"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== DATA SECTION ==================
const sanctionIntake = [
  {
    program: "B.Tech AIDS Engineering",
    intake: "60 Seats",
    duration: "4 Years",
    type: "Full Time",
  },
];

const eligibilityCriteria = [
  {
    program: "B.Tech AIDS Engineering",
    text: `• Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.
• Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.
• Valid score in JEE Main/MHT-CET or equivalent entrance examination.`,
  },
];

const feeInfo = `Fee structure for Academic Year 2024-25 will be updated soon.
Please contact the admission office for the latest and exact fee details.`;

const syllabusList = [
  { id: "sybtech", label: "SY B.Tech (2025 Pattern) Syllabus", pdf: "/Programs/AIDS/SESyllabus.pdf" },
  { id: "te", label: "TE AIDS Engineering (2019 Pattern) Syllabus", pdf: "/Programs/AIDS/TEsyllabus.pdf" },
  { id: "be", label: "BE AIDS Engineering (2019 Pattern) Syllabus", pdf: "/Programs/AIDS/BESyllabus.pdf" },
];

const courseStructureImages = [
  { id: "fe1", label: "FE SEM 1 Course Structure", src: "/Programs/AIDS/FESem1.jpg" },
  { id: "fe2", label: "FE SEM 2 Course Structure", src: "/Programs/AIDS/FESem2.jpg" },
  { id: "se1", label: "SE SEM 1 Course Structure", src: "/Programs/AIDS/SYBtechSem1.jpg" },
  { id: "se2", label: "SE SEM 2 Course Structure", src: "/Programs/AIDS/SYBtechSem2.jpg" },
  { id: "te1", label: "TE SEM 1 Course Structure", src: "/Programs/AIDS/TESem1.jpg" },
  { id: "te2", label: "TE SEM 2 Course Structure", src: "/Programs/AIDS/TESem2.jpg" },
  { id: "be1", label: "BE SEM 1 Course Structure", src: "/Programs/AIDS/BESem1.jpg" },
  { id: "be2", label: "BE SEM 2 Course Structure", src: "/Programs/AIDS/BESem2.jpg" },
];

const overviewData = [
  {
    title: "About Department",
    content: `The Department of Artificial Intelligence and Data Science at ICEM aims to be one of the leading programs to provide value-added quality education in Computer Science and Engineering with specialization in Artificial Intelligence and Data Science.`,
  },
  {
    title: "Vision",
    content: `To revolutionize pool of knowledge and develop innovative, ethical, responsible, and global leaders who will transform Institute and community services.`,
  },
  {
    title: "Mission",
    content: `• To offer an industry ready curriculum and happy learning environment, enabling our learners to become responsible citizens with holistic skill sets, to solve worldwide challenges.
• To inculcate impactful research through global collaborations with faculties, students & industry, using comprehensive technology and infrastructure to nurture innovation.
• To be a contributor towards a sustainable future by promoting conservation, prosperity, and social impact.`,
  },
];

export default function FAQSectionAIDS() {
  const [active, setActive] = useState("Overview");

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Department of Artificial Intelligence & Data Science</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with AI knowledge and industry-ready Data Science skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT SIDEBAR */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h3>

            {[
              "Overview",
              "Sanction Intake",
              "Eligibility Criteria",
              "Admission Procedure",
              "Fee Structure",
              "Syllabus & Course Structure",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            {/* ================= OVERVIEW ================= */}
            {active === "Overview" && (
              <div className="space-y-4">
                {overviewData.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg list-none">
                        <h4 className="font-semibold text-secondary text-lg">{item.title}</h4>
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>

                      <div className="p-4 text-gray-700 whitespace-pre-line">
                        {item.content}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}

            {/* ================= SANCTION INTAKE ================= */}
            {active === "Sanction Intake" && (
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 border-b font-semibold">Program</th>
                      <th className="p-3 border-b font-semibold">Intake</th>
                      <th className="p-3 border-b font-semibold">Duration</th>
                      <th className="p-3 border-b font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sanctionIntake.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{row.program}</td>
                        <td className="p-3">{row.intake}</td>
                        <td className="p-3">{row.duration}</td>
                        <td className="p-3">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ================= ELIGIBILITY CRITERIA ================= */}
            {active === "Eligibility Criteria" && (
              <div className="space-y-4">
                {eligibilityCriteria.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg">
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg list-none font-semibold text-secondary">
                        {item.program}
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </summary>

                      <div className="p-4 text-gray-700 whitespace-pre-line">
                        {item.text}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            )}

            {/* ================= ADMISSION PROCEDURE ================= */}
            {active === "Admission Procedure" && (
              <p className="text-gray-600 text-lg">Admission procedure for Academic Year 2024–25 will be updated soon.</p>
            )}

            {/* ================= FEE STRUCTURE ================= */}
            {active === "Fee Structure" && (
              <div className="text-gray-700 whitespace-pre-line bg-gray-50 p-6 rounded-lg border border-gray-200">
                {feeInfo}
              </div>
            )}

            {/* ================= SYLLABUS & COURSE STRUCTURE ================= */}
            {active === "Syllabus & Course Structure" && (
              <div className="space-y-8">

                {/* PDFs */}
                <div className="space-y-4">
                  {syllabusList.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <h5 className="font-semibold text-gray-800">{item.label}</h5>
                      <a href={item.pdf} target="_blank" className="px-4 py-2 bg-secondary text-white rounded-md mt-2 sm:mt-0">
                        View / Download
                      </a>
                    </div>
                  ))}
                </div>

                {/* Course Structure Images */}
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Course Structure</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courseStructureImages.map((img) => (
                      <div key={img.id} className="border rounded-lg shadow-sm bg-white overflow-hidden">
                        <div className="relative w-full h-48">
                          <a href={img.src} target="_blank">
                            <Image
                              src={img.src}
                              alt={img.label}
                              fill
                              className="object-contain p-2"
                            />
                          </a>
                        </div>
                        <div className="p-3 text-sm">{img.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
