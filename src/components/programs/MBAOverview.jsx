"use client";

import React from "react";
import {
  CheckCircle2,
  Layers,
  Lightbulb,
  Target,
  ArrowRightCircle,
  Info,
  Users,
} from "lucide-react";

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
        {/* Header Section - Synced with NHRD/NISM UI */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Philosophy & Learning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left mb-12 ">
              <h1 className="text-2xl lg:text-4xl font-extrabold text-slate-800 leading-tight">
                Master of Business Administration
                <span className=""> (MBA) </span>
                Programme Structure
              </h1>
              {/* <p className="text-lg text-secondary mt-2">
            Affiliated to Savitribai Phule Pune University (SPPU).
          </p> */}
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 text-justify">
              <p className="">
                The SPPU MBA programme is a four-semester, AICTE-aligned degree
                offers a flexible, career-oriented curriculum. Students can
                customize their academic journey by selecting courses aligned
                with their career goals, aptitude, and industry interests.
              </p>

              <p>
                The CBCGS framework combines academic depth with practical skill
                development, integrating foundation, enrichment, and alternative
                credit courses. Foundation courses strengthen core management
                knowledge such as accounting, economics, and business
                fundamentals, while enrichment courses allow students to explore
                advanced and specialized areas. Alternative credit options
                encourage independent learning through live projects, MOOCs, and
                industry-based assignments, enhancing experiential learning.
              </p>

              <p>
                Students choose one focused MBA specialization, supported by an
                outcome-based assessment system that measures practical
                application, analytical ability, and real-world business
                readiness, ensuring graduates are professionally competent and
                industry-ready.
              </p>
            </div>
          </div>

          {/* Right Column: Specializations & Sticky Guidelines */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            {/* Guidelines Section */}
            <div className="bg-gradient-to-br from-[#10404A] to-[#3aa6a9] text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Optional: Background Ping Effect for extra annoyance/visibility */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse pointer-events-none" />

              {/* Header with Flash Animation */}
              <div className="flex items-center gap-3 mb-6 animate-pulse text-yellow-300">
                <Info size={28} className="shrink-0" />
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  News Flash
                </h3>
              </div>

              <ul className="space-y-4">
                {guidelines.map((line, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-300 shrink-0 shadow-[0_0_8px_rgba(253,224,71,0.6)]" />
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
