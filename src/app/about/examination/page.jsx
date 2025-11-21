"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Examination() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const ExamCommittee = "/ExamCommittee.pdf";
  const ExamFees = "/ExamFees.pdf";

  const rightLinks = [
    "Overview",
    "Examination Schedule",
    "Exam Forms & Fees",
    "Results & Grade Cards",
    "Revaluation Process",
    "Exam Rules & Regulations",
    "Hall Tickets",
    "Important Dates",
    "Examination Committee",
    "Contact Exam Section",
    "Academic Calendar",
    "Governance",
  ];

  const quickLinks = [
    "Download Exam Forms",
    "Exam Time Table",
    "Result Portal",
    "Revaluation Application",
    "Apply for ATKT",
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      
      {/* ================= HERO BANNER ================= */}
      <div className="w-full h-[60vh] relative">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Examination at ICEM"
          className="w-full h-full object-cover"
          width={1700}
          height={600}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Examination Section
          </h1>
        </div>
      </div>

      {/* ================= CONTENT + SIDEBAR LAYOUT (UPDATED TO MATCH OVERVIEW) ================= */}
      <div className="w-full flex flex-col md:flex-row">
        
        {/* ================= LEFT SECTION (md:w-3/4) ================= */}
        <div className="md:w-3/4 space-y-12 p-6">

          {/* ===== Examination System ===== */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-6">
              Examination & Evaluation System
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Examination Department at Indira College of Engineering and
              Management (ICEM) ensures a fair, transparent, and efficient
              evaluation process in accordance with Savitribai Phule Pune
              University guidelines. Our examination system is designed to assess
              students' academic performance comprehensively while maintaining the
              highest standards of integrity.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The department manages all aspects of examinations including
              scheduling, hall ticket issuance, answer sheet evaluation, result
              declaration, and grade card distribution. We follow a systematic
              approach to ensure timely completion of all examination-related
              processes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Students can access their examination schedules, download hall
              tickets, check results, and apply for revaluation through our online
              portal. The examination committee works diligently to address any
              concerns and ensure a smooth examination experience for all
              students.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Regular internal assessments, practical examinations, and
              semester-end theory examinations are conducted as per the academic
              calendar. The evaluation process includes both internal and external
              examiners to maintain objectivity and fairness.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The examination system at ICEM is continuously improved based on
              feedback from students, faculty, and industry requirements to ensure
              it remains relevant and effective in measuring student learning
              outcomes.
            </p>
          </div>

          {/* ===== DOCUMENTS + ACCORDION ===== */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="mt-4 text-2xl font-bold mb-6">
              Examination Documents & Resources
            </h3>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
              {[

                /* ========== ITEM 1 ========== */
                {
                  title: "Revaluation & Verification Process",
                  description: (
                    <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                      <p>
                        After the declaration of results, students can apply for
                        revaluation through their ERP login by paying the
                        prescribed revaluation and photocopy fees.
                      </p>

                      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 text-gray-800 text-sm">
                        <p className="font-semibold">Important Note:</p>
                        The marks obtained after revaluation will be treated as
                        final.
                      </div>
                    </div>
                  ),
                },

                /* ========== ITEM 2 ========== */
                {
                  title: "Examination Fee Structure 2024-25",
                  pdf: ExamFees,
                  description:
                    "Complete fee structure for various examinations including regular, backlog, and improvement examinations.",
                },

                /* ========== ITEM 3 ========== */
                {
                  title: "Examination Committee (2024-25)",
                  pdf: ExamCommittee,
                  description:
                    "The Examination Committee is responsible for coordinating examination activities, ensuring proper conduct of theory and practical exams, maintaining confidentiality, and overseeing smooth execution of evaluation and result processes.",
                },

                /* ========== ITEM 4 ========== */
                {
                  title: "Controller & Examination Officers",
                  description: (
                    <div className="space-y-6 text-sm leading-relaxed text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Prof. Meenakshi Patil
                        </h4>
                        <p>Controller of Examination</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Prof. Mani Shankar Pandey
                        </h4>
                        <p>Deputy Controller of Examination</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Mr. Somnath Bhote
                        </h4>
                        <p>Examination Officer</p>
                      </div>
                    </div>
                  ),
                },

                /* ========== ITEM 5 – NEW TIMETABLE SECTION ========== */
                {
                  title: "Examination Timetable",
                  description: (
                    <div className="text-gray-800 text-sm leading-relaxed space-y-6">
                      
                      {/* UG */}
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Undergraduate Programs
                        </h4>

                        <ul className="list-decimal ml-6 space-y-2">
                          <li>
                            <a href="/exam/SYBTECH25.pdf" target="_blank" className="text-secondary hover:underline">
                              SY B.Tech Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>

                          <li>
                            <a href="/exam/SYBBA25.pdf" target="_blank" className="text-secondary hover:underline">
                              SY IMBA/BBA Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>

                          <li>
                            <a href="/exam/SYBCA25.pdf" target="_blank" className="text-secondary hover:underline">
                              SY IMCA/BCA Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>

                          <li>
                            <a href="/exam/FYBTECH25.pdf" target="_blank" className="text-secondary hover:underline">
                              FY B.Tech Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* PG */}
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Postgraduate Programs
                        </h4>

                        <ul className="list-decimal ml-6 space-y-2">
                          <li>
                            <a href="/exam/SYMBA25.pdf" target="_blank" className="text-secondary hover:underline">
                              SY MBA Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>

                          <li>
                            <a href="/exam/SYMCA25.pdf" target="_blank" className="text-secondary hover:underline">
                              SY MCA Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>

                          <li>
                            <a href="/pdfs/sample.pdf" target="_blank" className="text-secondary hover:underline">
                              FY MTech Endsemester Examination Timetable _ Nov/Dec. 2025 (2024 Pattern)
                            </a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  ),
                },

              ].map((item, index) => (
                <div key={index} className="overflow-hidden">
                  
                  {/* ===== ACCORDION HEADER ===== */}
                  <div
                    onClick={() =>
                      setActiveFAQ(activeFAQ === index ? null : index)
                    }
                    className="flex justify-between items-center w-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900 underline underline-offset-2">
                      {item.title}
                    </span>
                    <span className="text-xl font-bold text-gray-700">
                      {activeFAQ === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* ===== ACCORDION CONTENT ===== */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeFAQ === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm leading-relaxed">
                      {typeof item.description === "string" ? (
                        <>
                          <p className="mb-3">{item.description}</p>
                          {item.pdf && (
                            <a
                              href={item.pdf}
                              target="_blank"
                              className="inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition"
                            >
                              View / Download PDF
                            </a>
                          )}
                        </>
                      ) : (
                        item.description
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ===== CONTACT BOX ===== */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-4">
              For examination-related queries, contact our examination section
              during office hours.
            </h4>
            <ul className="text-sm text-green-700 space-y-3">
              <li className="flex gap-4 items-center"><Mail /> exam@indiraicem.ac.in</li>
              <li className="flex gap-4 items-center"><Phone /> 02114 – 661529</li>
              <li className="flex gap-4 items-center"><Clock /> 10:00 AM – 5:00 PM (Mon–Sat)</li>
            </ul>
          </div>

        </div>

        {/* ================= RIGHT SIDEBAR (md:w-1/4) ================= */}
        <div className="md:w-1/4">
          <Sidebar />
        </div>

      </div>
    </div>
  );
}
