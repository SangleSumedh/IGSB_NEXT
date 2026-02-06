"use client";

import React from "react";
import { Info } from "lucide-react";
import { MdLightbulb } from "react-icons/md";
import { BsStars } from "react-icons/bs";

export default function MBAOverview() {
  const specializations = [
    "Marketing Management (MKT)",
    "Financial Management (FIN)",
    "Human Resources Management (HRM)",
    "Operations & Supply Chain Management (OSCM)",
    "Business Analytics (BA)",
  ];

  const guidelines = [
    "There is no provision for MAJOR and MINOR Specialization Combination.",
    "Specialization shall be chosen at the BEGINNING of SEM III.",
    "Desk Research, Field Project, On-the Job Training & Research Project shall be in the area of specialization only. i.e. these courses are SUBJECT CORE COURSES",
    "Institutes may offer ONLY SELECT specializations based on industry needs, faculty strength & competencies, student demands, employability potential, etc.",
    "Institutes MAY NOT offer a specialization if a minimum of 20% of students are not registered for that specialization.",
    "The Institute MAY NOT offer an elective course if a minimum of 20% of students are not registered for that elective course.",
    "Institutes may stipulate additional criteria of minimum SGPA / CGPA, number of backlogs, expectations about specific graduation discipline for students who wish to take up a specific specialization.",
  ];

  return (
    <section className="w-full bg-white py-16 text-slate-900">
      <div className="max-w-full mx-auto px-4 md:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8 h-full">
            <div className="text-left mb-12">
              <h1 className="text-2xl lg:text-4xl font-extrabold text-slate-800 leading-tight">
                Master of Business Administration
                <span> (MBA) </span>
                Programme Structure
              </h1>
            </div>

            <div className="space-y-6 text-md leading-relaxed text-slate-700 text-justify">
              <p>
                The MBA programme at Indira Global School of Business (IGSB), affiliated to Savitribai Phule Pune University and approved by AICTE, is a four-semester, career-oriented degree designed to prepare students for leadership in dynamic global business environments. The revised MBA Curriculum 2024 integrates the ethos of the National Education Policy (NEP) 2020 with the Choice Based Credit System (CBCS), Grading System, and Outcomes Based Education (OBE) framework.
              </p>

              <p>
                The programme follows the LTP pattern—Lecture, Tutorial, and Practice—ensuring balanced academic depth and experiential learning. Each credit is structured around one hour of lecture or two hours of tutorial/practical per week, with flexibility for faculty to adapt pedagogy and assessment methods. Courses are delivered in 60-minute sessions, combining classroom learning with projects, industry assignments, and self-study
              </p>

              <p>
                The entire program is curated by expert team of academicians, with proper blend of innovative teaching pedagogies, simulation exercises, ICT driven assignments and projects, situation and case study analysis play, role plays, filed projects, which play a pivotal role in shaping the minds of our students. They bring a wealth of knowledge and experience, ensuring that our students are well-prepared to excel in their careers.
              </p>

              <p>
                Students can customize their academic journey by selecting electives aligned with their career goals, aptitude, and industry interests. The curriculum offers foundation courses in core management disciplines, enrichment courses in advanced and specialized areas, and alternative credit options such as MOOCs, live projects, and industry-based assignments.
              </p>

              <p>
                Learners choose one focused MBA specialization, supported by an outcome-based assessment system that measures their analytical ability, and real-world business readiness, ensuring our MBA cohort are professionally competent and industry-ready. On successful completion, students are awarded the MBA degree by Savitribai Phule Pune University, signifying professional competence and industry-readiness
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-full">

            <div className="bg-gradient-to-br from-[#10404A] to-[#3aa6a9] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden h-full">

              {/* News Flash Header */}
              <div className="flex items-center justify-between mb-6 text-white">
                <div className="flex items-center gap-3 animate-pulse">
                  <Info size={26} className="shrink-0" />
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    News Flash
                  </h3>
                </div>

                <div className="relative flex items-center">
                  <BsStars
                    size={18}
                    className="absolute -top-1 -right-1 text-yellow-300 animate-pulse"
                  />
                  <MdLightbulb
                    size={42}
                    className="text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                  />
                </div>
              </div>

              <ul className="space-y-4">
                {guidelines.map((line, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(253,224,71,0.6)]" />
                    <p className="text-slate-100 leading-relaxed font-medium">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
