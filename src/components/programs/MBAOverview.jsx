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
    <section className="w-full bg-slate-50 py-16 text-slate-800">
      <div className="max-w-full mx-auto px-4 md:px-8">
        {/* Header Section - Synced with NHRD/NISM UI */}
        <div className="text-left mb-12 ">
          <h1 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Master of Business Administration
            <span className="text-secondary"> (MBA) </span>
            Programme Structure (Will be updated soon)
          </h1>
          <p className="text-lg text-secondary mt-2">
            Affiliated to Savitribai Phule Pune University (SPPU).
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Philosophy & Learning */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 text-justify">
              <p className="">
                The new MBA programme offered by SPPU from this year, is an
                Outcome Based Education and Outcome Based Assessment programme.
                The outcome based education implies there is a performer
                (student) and the focus is on performance of the students, not
                the activity or task to be performed. The new curriculum takes
                MBA programme to the next level. The programme can be completed
                in four semesters and the curriculum is based on Choice Based
                Credit and Grading System. The syllabus offers wide choice for
                students to opt for various courses based on their interest,
                aptitude and career goals. The programme enables a student to
                obtain a degree by accumulating the required number of credits
                prescribed for the course. The programme has well defined five
                Programme Educational Objectives (PEOs), ten Programme Outcomes
                (POs) and Programme Specific outcomes (PSOs) for the
                specialization courses.
              </p>

              <p>
                The Choice Based Credit System provides the students with an
                academically rich, highly flexible, learning system, blended
                with abundant provision for skill development and a practical
                orientation. The curriculum, in addition to regular courses, is
                equipped with various types of courses to cater to the different
                intellectual level of students. Foundation courses are for those
                students who are seeking basic abilities of that subject like
                accounting, economics etc. Enrichment courses are courses for
                students who want to go beyond the syllabus and in areas of
                their interest. And Alternative study credit courses are courses
                for students who want to do independent study of their choice in
                the field of management through innovative/live projects, online
                courses like MOOCs etc.
              </p>

              <p>
                In case of specialization, students has the option of choosing
                only one specialisation from the given list. Also the assessment
                process is outcome based assessment. Outcome based assessment
                asks teachers to first identify what it is that we expect
                students to be able to do once they have completed a course.
              </p>

              
            </div>
          </div>

          {/* Right Column: Specializations & Sticky Guidelines */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            {/* Guidelines Section */}
            <div className="bg-secondary text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Info size={24} />
                <h3 className="text-xl font-semibold">News Flash (To be added here)</h3>
              </div>
              <ul className="space-y-4">
                {guidelines.map((line, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                    <p className="text-slate-100 leading-relaxed font-medium">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20 text-xs text-slate-200/80 italic">
                * Institutes may stipulate additional criteria like SGPA/CGPA or
                graduation discipline requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
