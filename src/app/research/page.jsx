"use client";

import React, { useState, useEffect } from "react";
import OldPage from "./OldPage";
import Image from "next/image"; // Import Next.js Image component

const phdHolders = [
  {
    name: "Dr. Virendra Tatake",
    designation: "Professor & Research Guide",
    image: "/Edited/Dr. Virendra Tatake.webp",
    expertise: "Financial Management",
    description:
      "Dr. Virendra V. Tatake is an eminent academician and approved PhD Research Supervisor in Financial Management with over 25 years of experience in teaching, research, and academic administration. He serves as Director of Indira Global Business School and specializes in finance, stock markets, mutual funds, and investor behaviour. A prolific author and media contributor, Dr. Tatake has guided doctoral researchers, presented at national and international forums, and received multiple awards for academic leadership and excellence in finance education.",
    students: [
      { name: "Ms. Manasi Tushar Patil", image: "/boy.png" },
      { name: "Ms. Chhaya Thakaji Lande", image: "/boy.png" },
    ],
  },
  {
    name: "Dr. Pallavi Sajanapwar",
    designation: "Professor & Research Guide",
    image: "/Edited/Dr. Pallavi Sajanapwar.webp",
    expertise: "Marketing Management",
    description:
      "Dr. Pallavi Sajanapwar is a senior academic leader and recognized PhD Research Supervisor in Marketing Management with over two decades of experience in higher education and research. She currently serves as Dean – Academics & Research at Indira Global School of Business. Her academic expertise includes Marketing Management, Consumer Behaviour, Services Marketing, and Business Research. An alumna of IIM Ahmedabad’s Faculty Development Programme, she has contributed to national and international research publications and has been honoured with prestigious academic leadership awards.",
    students: [
      { name: "Mr. Nivrutti Nagare", image: "/boy.png" },
      { name: "Mr. Amol Daspute", image: "/boy.png" },
      { name: "Ms. Sai Vijetha", image: "/boy.png" },
      { name: "Ms. Sharvari Ratnakar", image: "/boy.png" },
      { name: "Mr. Tushar Kadlag", image: "/boy.png" },
    ],
  },
  {
    name: "Dr. Priyanka Darekar",
    designation: "Professor & Research Guide",
    image: "/Edited/Dr. Priyanka Darekar.webp",
    expertise: "Human Resource Management",
    description:
      "Dr. Priyanka Darekar is an approved PhD Research Supervisor in Human Resource Management with over 15 years of experience in academics, research, and professional training. She holds a doctorate from Savitribai Phule Pune University and currently serves as Associate Professor at Indira Global School of Business. Her areas of expertise include Organizational Behaviour, Human Resource Management, Strategic Management, and Business Research Methods. Dr. Darekar has guided doctoral scholars, authored books, published extensively in reputed journals, and received national recognition for academic excellence.",
    students: [
      {
        name: "Ms. Sarika Khandekar",
        image: "/boy.png",
      },
      {
        name: "Ms. Neelam Singh",
        image: "/boy.png",
      },
    ],
  },
  {
    name: "Dr. Ashish Vyas",
    designation: "Professor & Research Guide",
    image: "/Edited/Dr. Ashish Vyas.webp",
    expertise: "Human Resource Management",
    description:
      "Dr. Ashish K. Vyas is an experienced academician and PhD Research Supervisor in Human Resource Management with more than 14 years of experience in teaching, research guidance, and academic quality processes. He currently serves as Assistant Professor and Research Center Coordinator at Indira Global School of Business. His research interests include competency mapping, employee engagement, organizational behaviour, and research methodology. Dr. Vyas has published widely in reputed journals and actively contributes to fostering a strong research culture at the institution.",
    students: [
      {
        name: "Mr. Someshwar Pawar",
        image: "/boy.png",
      },
      {
        name: "Ms, Hemangi Dhokte",
        image: "/boy.png",
      },
    ],
  },
  {
    name: "Dr. Aatish Zagade",
    designation: "Professor & Research Guide",
    image: "/Edited/Dr. Aatish Zagade.webp",
    expertise: "Organizational Management",
    description:
      "Dr. Aatish Dilip Zagade is an award-winning academician and approved PhD Research Supervisor with over 17 years of combined industry and academic experience. He holds a PhD from Nagpur University and an MBA in Human Resource Management, and has completed executive development programs from IIM Ahmedabad. Currently serving as Deputy Director and Professor at Indira Global Business School, his expertise spans Human Resource Management, digital marketing, management education, and organizational development, supported by extensive publications in reputed journals.",
    students: [
      {
        name: "Selection of one student is under process from SPPU",
        image: "/boy.png",
      },
    ],
  },
];

const mdpItems = [
  {
    id: 1,
    title: "Development Centre",
    description:
      "Dr. Priyanka Darekar conducted a Developmental Centre for an established Insurance company at Mumbai on 23 to 25th January 2023. The assignment involved: Assessing employees' competencies on prescribed tool matrix; giving feedback; Consolidation of observations, interpretation and preparation of reports and developing Individual Development Plans",
    image: "/IGSB/Research/MDP/1MDP.png",
  },
  {
    id: 2,
    title: "External Evaluator for the HR Capability Program",
    description:
      "Dr. Anuradha Phadnis undertook an MDP assignment as an External Evaluator for the HR capability program of a large-scale retail client; Reliance Retails- HR Academy (Via V-Mentors) for Capabilities Assessment of Senior HR Professionals for Pan India from 10th July 2023 till 25th September 2023.",
    image: "/IGSB/Research/MDP/2MDP1.png",
  },
  {
    id: 3,
    title: "Mentor for Reliance Retail's Capability-Building Program",
    description:
      "Dr. Anuradha Phadnis and Dr. Priyanka Darekar had been assigned as a Mentor for Reliance Retail's prestigious capability-building program. It was a skill development program that nurtured and groomed the next set of HR leaders in the organization.",
    image: "/IGSB/Research/MDP/4MDP.png",
  },
  {
    id: 4,
    title: "Pre and Post Psychometric Assessment for VNL Constrotech Pvt Ltd",
    description:
      "Dr. Priyanka Darekar completed the pre and post psychometric assessment for VNL Constrotech Pvt Ltd for their Sales, Negotiation and Presentation Skills Training in June 2024.",
    image: "/IGSB/Research/MDP/3MDP.png",
  },
  {
    id: 5,
    title:
      "Mentor for Reliance Retail's prestigious capability-building program",
    description:
      "Dr. Pallavi Sajanapwar and Dr. Priyanka Darekar had been assigned as a Mentor for Reliance Retail's prestigious capability-building program. It was a skill development program that nurtured and groomed the next set of HR leaders in the organization, and they were a part of the mentoring team for the Business Impact projects.",
    image: "/IGSB/Research/MDP/6MDP.png",
  },
  {
    id: 6,
    title:
      "Development Centre for a Diversified Contract Manufacturing Company",
    description:
      "Dr. Priyanka Darekar was appointed as an Assessor for conducting development centre for senior leadership team of a leading SEZ for diversified contract manufacturing company providing vertically integrated product solutions across the Aerospace and Consumer Goods industries.",
    image: "/IGSB/Research/MDP/5MDP.jpg",
  },
];

const fdpItems = [
  {
    id: 1,
    title: "1-Day In-House FDP: Overview of NBA, OBE & BLOOMS TAXONOMY",
    description:
      "IGSB organized 1-day FDP program on Overview of NBA, OBE & BLOOMS TAXONOMY on 28th March 2024. The course was delivered by Dr. Pallavi Sajanapwar, starting with basics of deep understanding of NBA, OBE overview to faculty members.",
    image: "/IGSB/Research/FDP/1FDP.jpg",
  },
  {
    id: 2,
    title:
      "1-Day In-House FDP: Sectorial & Industry Analysis Using Strategic Models",
    description:
      "IGSB's IQAC organized a one-day FDP on 'Sectorial and Industry Analysis using Strategic models' for all Faculty members.",
    image: "/IGSB/Research/FDP/2FDP.jpg",
  },
  {
    id: 3,
    title: "1-Day In-House FDP: CO-PO Mapping and Attainments",
    description:
      "IGSB organized 1 day In-house FDP on CO-PO Mapping and attainments for faculty members of IGSB and ICMS on 25th April 2023. Resource Person Dr. Anuradha Phadnis conducted the FDP in workshop mode.",
    image: "/IGSB/Research/FDP/3FDP1.png",
  },
  {
    id: 4,
    title: "Translation of Investment-related Books into Regional Language",
    description:
      "Dr Tatake has translated the famous books *Romancing the Balance Sheet* and *Flirting with the Stocks* into regional languages. These books simplify complex financial concepts for the common man.",
    image: "/IGSB/Research/FDP/4FDP.png",
  },
];

export default function Page() {
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
    setCurrentMdpIndex(
      (prevIndex) => (prevIndex - 1 + mdpItems.length) % mdpItems.length,
    );
  };

  const nextFdpSlide = () => {
    if (!isFdpHovered) {
      setCurrentFdpIndex((prevIndex) => (prevIndex + 1) % fdpItems.length);
    }
  };

  const prevFdpSlide = () => {
    setCurrentFdpIndex(
      (prevIndex) => (prevIndex - 1 + fdpItems.length) % fdpItems.length,
    );
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
      <section className="w-full bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] text-white py-8 md:py-12 px-4 md:px-6 xl:px-16 text-center border-b border-gray-200">
        {/* Main heading with animation */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 animate-fade-up">
          Research is seeing what everybody else has seen, and thinking what
          nobody else has thought.
        </h1>

        {/* Description with animation */}
        <p className="text-base md:text-xl opacity-90 animate-fade-up animation-delay-100 max-w-4xl mx-auto">
          Our institution fosters a strong culture of innovation, inquiry, and
          impactful research.
        </p>
      </section>

      {/* TOP PHD HOLDERS */}
      <section className="w-full py-8 md:py-12 px-4 md:px-6 xl:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 pb-6 md:pb-12 text-center">
          Our Top Ph.D Guides
        </h2>

        <div className="space-y-12 md:space-y-24">
          {phdHolders.map((phd, index) => (
            <div
              key={index}
              className="
                w-full
                rounded-xl md:rounded-2xl lg:rounded-3xl
                p-4 md:p-6 lg:p-8
                bg-gradient-to-r from-[#10404A] to-[#1F6D71]
                shadow-lg md:shadow-xl
              "
            >
              <PhdCard phd={phd} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* MDP HIGHLIGHTS SECTION */}
      <section className="w-full py-8 md:py-12 px-4 md:px-6 xl:px-16 bg-gray-50">
        <div className="">
          {/* Heading - Center aligned on mobile, left on desktop */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 lg:mb-12 text-center lg:text-left">
            Management Development Programmes (MDP)
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Static Content */}
            <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 md:mb-4 lg:mb-6">
                About Our MDP Cell
              </h3>

              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Management Development Program [MDP] Cell of IGSB focuses on
                  skill improvement, interaction ability, confidence building,
                  competence, and capacity of managing projects in a
                  cross-cultural environment.
                </p>

                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  The MDP cell aims at managerial development within a
                  structured scenario & synergetic system of organizational
                  behavior with value addition to recognize functional areas
                  such as:
                </p>

                <ul className="space-y-1.5 md:space-y-2 text-white text-sm md:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Develop effective training programs based on experiential
                      learning models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Maximize individual potential through soft skills training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Personality Grooming (Communication, Presentation Skills,
                      Team Dynamics)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>Finance for Non-Finance professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Personal Effectiveness for Corporates & Academic Capacity
                      Building
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <div className="h-full flex flex-col">
                {/* Carousel Content */}
                <div
                  className="flex-1 relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
                  onMouseEnter={() => setIsMdpHovered(true)}
                  onMouseLeave={() => setIsMdpHovered(false)}
                >
                  <div className="relative h-full">
                    {/* Carousel Items - Stacked vertically */}
                    <div className="relative h-full">
                      {/* Current Slide - Text at top */}
                      <div className="mb-3 md:mb-4 lg:mb-6">
                        <div className="inline-block px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 text-white rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3 lg:mb-4">
                          MDP Highlight {mdpItems[currentMdpIndex].id}
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-slate-900">
                          {mdpItems[currentMdpIndex].title}
                        </h3>
                      </div>

                      <div className="flex-1 overflow-y-auto mb-3 md:mb-4 lg:mb-6 max-h-[100px] md:max-h-[120px] lg:max-h-[140px]">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                          {mdpItems[currentMdpIndex].description}
                        </p>
                      </div>

                      {/* Image at bottom */}
                      <div className="mt-3 md:mt-4 lg:mt-6 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-md md:shadow-lg">
                        <Image
                          src={mdpItems[currentMdpIndex].image}
                          alt={mdpItems[currentMdpIndex].title}
                          className="w-full h-40 md:h-48 lg:h-56 object-cover"
                          width={600}
                          height={300}
                          priority={currentMdpIndex === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
                  <div className="flex space-x-1.5 md:space-x-2">
                    {mdpItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMdpIndex(idx)}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                          idx === currentMdpIndex
                            ? "bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 w-4 md:w-6 lg:w-8"
                            : "bg-gray-300 hover:bg-gray-400"
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
      <section className="w-full py-8 md:py-12 px-4 md:px-6 xl:px-16 bg-gray-50">
        <div className="">
          {/* Heading - Center aligned on mobile, left on desktop */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 lg:mb-12 text-center lg:text-left">
            Faculty Development Programmes (FDP)
          </h2>

          {/* Two Column Layout - Reversed for FDP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Carousel */}
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <div className="h-full flex flex-col">
                {/* Carousel Content */}
                <div
                  className="flex-1 relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
                  onMouseEnter={() => setIsFdpHovered(true)}
                  onMouseLeave={() => setIsFdpHovered(false)}
                >
                  <div className="relative h-full">
                    {/* Carousel Items - Stacked vertically */}
                    <div className="relative h-full">
                      {/* Current Slide - Text at top */}
                      <div className="mb-3 md:mb-4 lg:mb-6">
                        <div className="inline-block px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 text-white rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3 lg:mb-4">
                          FDP Highlight {fdpItems[currentFdpIndex].id}
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-slate-900">
                          {fdpItems[currentFdpIndex].title}
                        </h3>
                      </div>

                      <div className="flex-1 overflow-y-auto mb-3 md:mb-4 lg:mb-6 max-h-[100px] md:max-h-[120px] lg:max-h-[140px]">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                          {fdpItems[currentFdpIndex].description}
                        </p>
                      </div>

                      {/* Image at bottom */}
                      <div className="mt-3 md:mt-4 lg:mt-6 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-md md:shadow-lg">
                        <Image
                          src={fdpItems[currentFdpIndex].image}
                          alt={fdpItems[currentFdpIndex].title}
                          className="w-full h-40 md:h-48 lg:h-56 object-cover"
                          width={600}
                          height={300}
                          priority={currentFdpIndex === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
                  <div className="flex space-x-1.5 md:space-x-2">
                    {fdpItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentFdpIndex(idx)}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                          idx === currentFdpIndex
                            ? "bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80 w-4 md:w-6 lg:w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Static Content */}
            <div className="bg-gradient-to-l from-[#10404A] to-[#1F6D71] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 md:mb-4 lg:mb-6">
                About Our FDP Initiatives
              </h3>

              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Faculty Development Programmes at IGSB are designed to enhance
                  teaching methodologies, research capabilities, and
                  industry-academia collaboration among our faculty members.
                </p>

                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  Our FDP initiatives focus on:
                </p>

                <ul className="space-y-1.5 md:space-y-2 text-white text-sm md:text-base lg:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Upgrading pedagogical skills and modern teaching
                      techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Enhancing research methodology and publication skills
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Curriculum development and outcome-based education
                      implementation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Industry-relevant skill development and case study
                      development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Technology integration in teaching and learning processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF8B61] mr-2 md:mr-3 flex-shrink-0">
                      •
                    </span>
                    <span>
                      Professional ethics and academic leadership development
                    </span>
                  </li>
                </ul>

                <div className="mt-3 md:mt-4 lg:mt-6 p-2 md:p-3 lg:p-4 bg-gradient-to-r from-[#10404A]/10 to-[#1F6D71]/10 rounded-lg md:rounded-xl">
                  <p className="text-white text-sm md:text-base lg:text-lg font-medium">
                    <span className="text-[#FF8B61] font-bold">Impact:</span>{" "}
                    Our FDPs have significantly improved faculty performance,
                    research output, and student learning outcomes across all
                    departments.
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
          className="w-full py-4 md:py-6 lg:py-8 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer outline-none"
        >
          <div className="flex items-center gap-2 md:gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
            <h3 className="text-base md:text-lg font-bold tracking-wide uppercase">
              Revisit Memory Lane
            </h3>
            <svg
              className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${
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
          <p className="text-xs text-slate-400 mt-1 md:mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100">
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
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 1;

  // ✅ keep only students with a non-empty name
  const validStudents = phd.students.filter(
    (s) => s.name && s.name.trim().length > 0,
  );

  return (
    <div
      className={`
        flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-4 md:gap-6
      `}
    >
      {/* IMAGE SECTION — Full width on mobile, 1/3 on desktop, filling height */}
      <div className="w-full lg:w-1/3 relative aspect-[3/4] sm:aspect-[3/4] md:aspect-[1/1.3] lg:aspect-auto">
        <div
          className="
          w-full h-full
          rounded-xl md:rounded-2xl
          border-4 border-[#ffb088]
          shadow-md
          overflow-hidden
          relative
        "
        >
          <Image
            src={phd.image}
            alt={phd.name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* CONTENT SECTION — Full width on mobile, 2/3 on desktop */}
      <div className="w-full lg:w-2/3">
        <div
          className="
            bg-[#3aafa9]
            rounded-xl md:rounded-2xl
            p-4 md:p-6 lg:p-8
            shadow-xl
            text-white
          "
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-1">
            {phd.name}
          </h3>

          <p className="text-white/90 font-medium text-base md:text-lg lg:text-xl mb-1 md:mb-2">
            {phd.designation}
          </p>

          <p className="text-white/95 text-base md:text-lg lg:text-xl mb-2 md:mb-3">
            <span className="font-semibold text-white/90">
              Research Expertise:
            </span>{" "}
            {phd.expertise}
          </p>

          {/* Description with line clamp on mobile */}
          <div className="mb-3 md:mb-4 lg:mb-5">
            <p
              className={`text-white/90 text-base md:text-lg lg:text-xl leading-relaxed `}
            >
              {phd.description}
            </p>
            {phd.description.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#ffb088] font-medium text-sm md:text-base mt-1 hover:underline"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* SUBTLE DIVIDER */}
          <div className="w-12 h-[2px] bg-[#ffb088] rounded-full mb-3 md:mb-4 lg:mb-5" />

          {/* ✅ STUDENT NAMES ONLY (conditional render) */}
          {validStudents.length > 0 && (
            <>
              <h4 className="uppercase tracking-widest text-xs font-semibold mb-2 md:mb-3 text-white/90">
                PhD Scholars Guided
              </h4>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {validStudents.map((student, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-white/20 backdrop-blur-sm
                      px-2 py-1 md:px-3 md:py-1.5
                      rounded-full
                      text-xs md:text-sm
                      font-medium
                      text-white
                      border border-white/30
                    "
                  >
                    {student.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= Add custom CSS for line clamp ================= */
<style jsx global>{`
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .line-clamp-4 {
      display: block;
      -webkit-line-clamp: none;
      overflow: visible;
    }
  }
`}</style>;
