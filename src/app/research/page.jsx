"use client";

import React, { useState, useEffect } from "react";
import OldPage from "./OldPage"

export default function Page() {
  const phdHolders = [
    {
      name: "Dr. A. K. Sharma",
      designation: "Professor & Research Guide",
      image: "/boy.png",
      expertise: "Artificial Intelligence, Machine Learning",
      description:
        "Dr. Sharma has over 18 years of academic and research experience. His work focuses on applied AI systems, intelligent decision-making, and industry-driven research.",
      students: [
        { name: "Rahul Verma", image: "/boy.png" },
        { name: "Sneha Patil", image: "/boy.png" },
        { name: "Amit Kulkarni", image: "/boy.png" },
        { name: "Pooja Sharma", image: "/boy.png" },
      ],
    },
    {
      name: "Dr. Meera Kulkarni",
      designation: "Associate Professor",
      image: "/boy.png",
      expertise: "Data Science, Business Analytics",
      description:
        "Dr. Kulkarni specializes in data-driven research and analytics-based decision systems. She actively collaborates with industry and research institutions.",
      students: [
        { name: "Neha Joshi", image: "/boy.png" },
        { name: "Rohan Deshpande", image: "/boy.png" },
        { name: "Kunal Mehta", image: "/boy.png" },
      ],
    },
    {
      name: "Dr. S. R. Iyer",
      designation: "Dean – Research & Innovation",
      image: "/boy.png",
      expertise: "Computer Networks, Cyber Security",
      description:
        "Dr. Iyer has guided multiple funded research projects and published extensively in international journals. His research interests include secure networks and distributed systems.",
      students: [
        { name: "Arjun Nair", image: "/boy.png" },
        { name: "Priyanka Rao", image: "/boy.png" },
        { name: "Vivek Singh", image: "/boy.png" },
        { name: "Ananya Das", image: "/boy.png" },
      ],
    },
  ];

  const mdpItems = [
    {
      id: 1,
      title: "Development Centre",
      description: "Dr. Priyanka Darekar conducted a Developmental Centre for an established Insurance company at Mumbai on 23 to 25th January 2023. The assignment involved: Assessing employees' competencies on prescribed tool matrix; giving feedback; Consolidation of observations, interpretation and preparation of reports and developing Individual Development Plans",
      image: "/IGSB/Research/MDP/1MDP.png",
    },
    {
      id: 2,
      title: "External Evaluator for the HR Capability Program",
      description: "Dr. Anuradha Phadnis undertook an MDP assignment as an External Evaluator for the HR capability program of a large-scale retail client; Reliance Retails- HR Academy (Via V-Mentors) for Capabilities Assessment of Senior HR Professionals for Pan India from 10th July 2023 till 25th September 2023.",
      image: "/IGSB/Research/MDP/2MDP1.png",
    },
    {
      id: 3,
      title: "Mentor for Reliance Retail's Capability-Building Program",
      description: "Dr. Anuradha Phadnis and Dr. Priyanka Darekar had been assigned as a Mentor for Reliance Retail's prestigious capability-building program. It was a skill development program that nurtured and groomed the next set of HR leaders in the organization.",
      image: "/IGSB/Research/MDP/4MDP.png",
    },
    {
      id: 4,
      title: "Pre and Post Psychometric Assessment for VNL Constrotech Pvt Ltd",
      description: "Dr. Priyanka Darekar completed the pre and post psychometric assessment for VNL Constrotech Pvt Ltd for their Sales, Negotiation and Presentation Skills Training in June 2024.",
      image: "/IGSB/Research/MDP/3MDP.png",
    },
    {
      id: 5,
      title: "Development Centre for a Diversified Contract Manufacturing Company",
      description: "Dr. Priyanka Darekar was appointed as an Assessor for conducting development centre for senior leadership team of a leading SEZ for diversified contract manufacturing company providing vertically integrated product solutions across the Aerospace and Consumer Goods industries.",
      image: "/IGSB/Research/MDP/5MDP.jpg",
    },
  ];

  const fdpItems = [
    {
      id: 1,
      title: "1-Day In-House FDP: Overview of NBA, OBE & BLOOMS TAXONOMY",
      description: "IGSB organized 1-day FDP program on Overview of NBA, OBE & BLOOMS TAXONOMY on 28th March 2024. The course was delivered by Dr. Pallavi Sajanapwar, starting with basics of deep understanding of NBA, OBE overview to faculty members.",
      image: "/IGSB/Research/FDP/1FDP.jpg",
    },
    {
      id: 2,
      title: "1-Day In-House FDP: Sectorial & Industry Analysis Using Strategic Models",
      description: "IGSB's IQAC organized a one-day FDP on 'Sectorial and Industry Analysis using Strategic models' for all Faculty members.",
      image: "/IGSB/Research/FDP/2FDP.jpg",
    },
    {
      id: 3,
      title: "1-Day In-House FDP: CO-PO Mapping and Attainments",
      description: "IGSB organized 1 day In-house FDP on CO-PO Mapping and attainments for faculty members of IGSB and ICMS on 25th April 2023. Resource Person Dr. Anuradha Phadnis conducted the FDP in workshop mode.",
      image: "/IGSB/Research/FDP/3FDP1.png",
    },
    {
      id: 4,
      title: "Translation of Investment-related Books into Regional Language",
      description: "Dr Tatake has translated the famous books *Romancing the Balance Sheet* and *Flirting with the Stocks* into regional languages. These books simplify complex financial concepts for the common man.",
      image: "/IGSB/Research/FDP/4FDP.png",
    },
  ];

    const [showMemoryLane, setShowMemoryLane] = useState(false);
  const [currentMdpIndex, setCurrentMdpIndex] = useState(0);
  const [currentFdpIndex, setCurrentFdpIndex] = useState(0);
  const [isMdpHovered, setIsMdpHovered] = useState(false);
  const [isFdpHovered, setIsFdpHovered] = useState(false);

  const nextMdpSlide = () => {
    if (!isMdpHovered) {
      setCurrentMdpIndex((prevIndex) => (prevIndex + 1) % mdpItems.length);
    }
  };

  const prevMdpSlide = () => {
    setCurrentMdpIndex((prevIndex) => (prevIndex - 1 + mdpItems.length) % mdpItems.length);
  };

  const nextFdpSlide = () => {
    if (!isFdpHovered) {
      setCurrentFdpIndex((prevIndex) => (prevIndex + 1) % fdpItems.length);
    }
  };

  const prevFdpSlide = () => {
    setCurrentFdpIndex((prevIndex) => (prevIndex - 1 + fdpItems.length) % fdpItems.length);
  };

  // Auto slide effect with hover pause
  useEffect(() => {
    const mdpInterval = setInterval(() => {
      nextMdpSlide();
    }, 8000);

    const fdpInterval = setInterval(() => {
      nextFdpSlide();
    }, 8000);

    return () => {
      clearInterval(mdpInterval);
      clearInterval(fdpInterval);
    };
  }, [isMdpHovered, isFdpHovered]);

  return (
    <div className="w-full bg-white">
      {/* SCHOLAR QUOTE CTA */}
   <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] text-white py-12 px-6 xl:py-8 xl:px-16 text-center border-b border-gray-200">
  {/* Main heading with animation */}
  <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
    Research is seeing what everybody else has seen, and thinking what nobody else has thought.
  </h1>
  
  {/* Description with animation */}
  <p className="text-xl opacity-90 animate-fade-up animation-delay-100">
    Our institution fosters a strong culture of innovation, inquiry, and impactful research.
  </p>
</section>

      {/* TOP PHD HOLDERS */}
      <section className="w-full py-12 px-6 xl:py-12 xl:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 pb-12  text-center">
          Our Top PhD Holders
        </h2>

        <div className="space-y-24">
          {phdHolders.map((phd, index) => (
            <div
              key={index}
              className="
                w-full
                rounded-3xl
                p-6 md:p-8 lg:p-10
                bg-gradient-to-r from-[#10404A] to-[#1F6D71]
                shadow-xl
              "
            >
              <PhdCard phd={phd} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* MDP HIGHLIGHTS SECTION */}
      <section className="w-full py-12 px-6 xl:py-8 xl:px-16 bg-gray-50 ">
        <div className="">
          {/* Heading - Left aligned */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12 text-center">
            Management Development Programmes (MDP) 
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Static Content */}
            <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                About Our MDP Cell
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Management Development Program [MDP] Cell of IGSB focuses on skill improvement, interaction ability, confidence building, competence, and capacity of managing projects in a cross-cultural environment.
                </p>

                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  The MDP cell aims at managerial development within a structured scenario & synergetic system of organizational behavior with value addition to recognize functional areas such as:
                </p>
                
                <ul className="space-y-1.5 md:space-y-2 text-white text-sm md:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Develop effective training programs based on experiential learning models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Maximize individual potential through soft skills training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Personality Grooming (Communication, Presentation Skills, Team Dynamics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Finance for Non-Finance professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Personal Effectiveness for Corporates & Academic Capacity Building</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
              <div className="h-full flex flex-col">
                {/* Carousel Content */}
                <div 
                  className="flex-1 relative min-h-[400px]"
                  onMouseEnter={() => setIsMdpHovered(true)}
                  onMouseLeave={() => setIsMdpHovered(false)}
                >
                  <div className="relative h-full">
                    {/* Carousel Items - Stacked vertically */}
                    <div className="relative h-full">
                      {/* Current Slide - Text at top */}
                      <div className="mb-4 md:mb-6">
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 text-white rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                          MDP Highlight {mdpItems[currentMdpIndex].id}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900">
                          {mdpItems[currentMdpIndex].title}
                        </h3>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto mb-4 md:mb-6 max-h-[120px] md:max-h-[140px]">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                          {mdpItems[currentMdpIndex].description}
                        </p>
                      </div>

                      {/* Image at bottom */}
                      <div className="mt-4 md:mt-6 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={mdpItems[currentMdpIndex].image}
                          alt={mdpItems[currentMdpIndex].title}
                          className="w-full h-48 md:h-56 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-6 md:mt-8">
                  <div className="flex space-x-1.5 md:space-x-2">
                    {mdpItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMdpIndex(idx)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          idx === currentMdpIndex 
                            ? 'bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 w-6 md:w-8' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FDP HIGHLIGHTS SECTION */}
      <section className="w-full py-12 px-6 xl:py-8 xl:px-16 bg-gray-50 text-center">
        <div className="">
          {/* Heading - Left aligned */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12">
            Faculty Development Programmes (FDP) 
          </h2>

          {/* Two Column Layout - Reversed for FDP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Carousel */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
              <div className="h-full flex flex-col">
                {/* Carousel Content */}
                <div 
                  className="flex-1 relative min-h-[400px]"
                  onMouseEnter={() => setIsFdpHovered(true)}
                  onMouseLeave={() => setIsFdpHovered(false)}
                >
                  <div className="relative h-full">
                    {/* Carousel Items - Stacked vertically */}
                    <div className="relative h-full">
                      {/* Current Slide - Text at top */}
                      <div className="mb-4 md:mb-6">
                        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 text-white rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                          FDP Highlight {fdpItems[currentFdpIndex].id}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900">
                          {fdpItems[currentFdpIndex].title}
                        </h3>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto mb-4 md:mb-6 max-h-[120px] md:max-h-[140px]">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                          {fdpItems[currentFdpIndex].description}
                        </p>
                      </div>

                      {/* Image at bottom */}
                      <div className="mt-4 md:mt-6 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={fdpItems[currentFdpIndex].image}
                          alt={fdpItems[currentFdpIndex].title}
                          className="w-full h-48 md:h-56 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-6 md:mt-8">
                  <div className="flex space-x-1.5 md:space-x-2">
                    {fdpItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentFdpIndex(idx)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          idx === currentFdpIndex 
                            ? 'bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 w-6 md:w-8' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Static Content */}
            <div className="bg-gradient-to-l from-[#10404A] to-[#1F6D71] rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                About Our FDP Initiatives
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Faculty Development Programmes at IGSB are designed to enhance teaching methodologies, research capabilities, and industry-academia collaboration among our faculty members.
                </p>

                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Our FDP initiatives focus on:
                </p>
                
                <ul className="space-y-1.5 md:space-y-2 text-white text-sm md:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Upgrading pedagogical skills and modern teaching techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Enhancing research methodology and publication skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Curriculum development and outcome-based education implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Industry-relevant skill development and case study development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Technology integration in teaching and learning processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">•</span>
                    <span>Professional ethics and academic leadership development</span>
                  </li>
                </ul>

                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-[#10404A]/10 to-[#1F6D71]/10 rounded-lg md:rounded-xl">
                  <p className="text-white text-sm md:text-base lg:text-lg font-medium">
                    <span className="text-[#FF8B61] font-bold">Impact:</span> Our FDPs have significantly improved faculty performance, research output, and student learning outcomes across all departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Memory Lane Section */}
            <div className="w-full bg-white border-t border-slate-200">
              <button
                onClick={() => setShowMemoryLane(!showMemoryLane)}
                className="w-full py-8 flex flex-col items-center justify-center  transition-colors duration-300 group cursor-pointer outline-none"
              >
                <div className="flex items-center gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
                  <h3 className="text-lg font-bold tracking-wide uppercase">
                    Revisit Memory Lane
                  </h3>
                  <svg
                    className={`w-5 h-5 transition-transform duration-500 ${
                      showMemoryLane ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100">
                  CLICK TO EXPAND ARCHIVE
                </p>
              </button>
      
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  showMemoryLane ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className=" border-t border-slate-100 bg-white shadow-inner">
                    <OldPage />
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

/* ================= PhD Card Component ================= */

function PhdCard({ phd, index }) {
  const [activeStudentIndex, setActiveStudentIndex] = useState(null);
  const isEven = index % 2 === 1;

  return (
    <div
      className={`
        flex flex-col md:flex-row items-center gap-6
        ${isEven ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* IMAGE SECTION — 1/3 */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/boy.png"
          alt={phd.name}
          className="
            w-40 h-40 md:w-84 md:h-84
            rounded-full object-cover
            border-4 border-[#ffb088]
            shadow-md
          "
        />
      </div>

      {/* CONTENT SECTION — 2/3 */}
      <div className="w-full md:w-2/3">
        <div
          className="
            bg-[#3aafa9]
            rounded-2xl
            p-6 md:p-7 lg:p-8
            shadow-xl
            text-white
          "
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-1">
            {phd.name}
          </h3>

          <p className="text-white/90 font-medium text-lg mb-2">
            {phd.designation}
          </p>

          <p className="text-white/95 text-lg mb-3">
            <span className="font-semibold text-white/90">
              Research Expertise:
            </span>{" "}
            {phd.expertise}
          </p>

          <p className="text-white/90 text-lg leading-relaxed mb-5">
            {phd.description}
          </p>

          {/* SUBTLE DIVIDER */}
          <div className="w-12 h-[2px] bg-[#ffb088] rounded-full mb-5" />

          {/* STUDENTS */}
          <h4 className="uppercase tracking-widest text-xs font-semibold mb-3 text-white/90">
            PhD Scholars Guided
          </h4>

          <div className="flex -space-x-3">
            {phd.students.map((student, idx) => (
              <div
                key={idx}
                className="relative hover:z-20"
                onMouseEnter={() => setActiveStudentIndex(idx)}
                onMouseLeave={() => setActiveStudentIndex(null)}
              >
                <img
                  src="/boy.png"
                  alt={student.name}
                  className="
                    w-10 h-10 md:w-11 md:h-11
                    rounded-full object-cover
                    border-2 border-[#10404A]
                    cursor-pointer
                  "
                />

                {activeStudentIndex === idx && (
                  <div
                    className="
                      absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                      bg-white text-black
                      px-3 py-2 rounded-lg
                      text-sm shadow-xl whitespace-nowrap z-30
                    "
                  >
                    {student.name}
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2 top-full
                        w-0 h-0
                        border-l-[6px] border-r-[6px] border-t-[6px]
                        border-l-transparent border-r-transparent
                        border-t-white
                      "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}