"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
// import FAQSection from "@/components/FAQSections/FAQMBA";
import CTASection from "@/components/home/CTASection";
import RecruitersSection from "@/components/home/RecruiterSection";
import PillarsSection from "@/components/home/Pillar";
import PHDSpecs from "@/components/programs/PHDSpecialisations";

export default function PHD() {
  // const faqRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const scrollToFAQ = () => {
  //   faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/IGSB/programmes/IGSB-Prospectus-Final.pdf";
    link.download = "IGSB-PhD-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* ===================================================
          HERO SECTION
      =================================================== */}
      <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center">
        <Image
          src="/IGSB/Research/FDP/2FDP.jpg"
          alt="IGSB Research Centre"
          fill
          className="object-cover object-center opacity-90"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative max-w-6xl px-6 md:px-12 lg:px-20 z-20 text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Ph.D. Research Centre in Indira Global School of Business
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
            Advancing Research. Inspiring Innovation. Developing Future Leaders
            in Academics and Industry.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={toggleModal}
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold"
            >
              Enquire Now
            </button>

            <button
              onClick={handleBrochureDownload}
              className="bg-secondary text-white px-8 py-3 rounded-lg"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
          ABOUT RESEARCH CENTRE
      =================================================== */}
      <section className="bg-white px-8 md:px-16 max-w-full mx-auto py-12 shadow-sm space-y-8">
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* --- LEFT SIDE: TEXT (3/5 or 60%) --- */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary text-left">
              About IGSB Research Centre
            </h2>

            <div className="space-y-4 text-justify text-md md:text-lg text-gray-700">
              <p>
                Indira Global School of Business (IGSB) is recognized by AICTE
                and UGC, and is affiliated with Savitribai Phule Pune University
                (SPPU). It was established with a clear vision to develop
                globally-oriented researchers capable of driving sustainable
                growth in the evolving international business landscape. Over
                the years, IGSB has emerged as a premier B-School in Pune,
                offering MBA programs. From the academic year 2025–26, IGSB also
                offers Doctoral Programs in Management.
              </p>

              <p>
                The IGSB Research Center (PGRC) is a recognized Ph.D. Research
                Center, affiliated with SPPU, and is dedicated to fostering
                advanced research in the field of management. The Doctoral
                Programme in Management plays a pivotal role in nurturing future
                scholars, academicians, and industry researchers by encouraging
                rigorous inquiry and innovation across various management
                domains.
              </p>

              <p>
                The aim of the IGSB Research Center is to cultivate a vibrant
                research ecosystem that promotes scholarly inquiry, critical
                thinking, and innovation in management. The Center is committed
                to contributing to the advancement of knowledge by supporting
                high-quality doctoral research, encouraging interdisciplinary
                collaboration, and addressing contemporary business and societal
                challenges through evidence-based insights.
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE (2/5 or 40%) --- */}
          <div className="lg:col-span-2 h-full min-h-[300px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
            <Image
              src="/Programs/ResearchCentre.png"
              alt="IGSB Research Centre"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Specializations Component remains below */}
      </section>
      <PHDSpecs />

      {/* ===================================================
          PHD GUIDES
      =================================================== */}
      <section className="bg-white px-6 md:px-16  py-8  space-y-6 max-w-full mx-auto mt-12  ">
        <h2 className="text-3xl font-bold text-secondary text-left">
          Recognized Ph.D. Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[
            [
              "Dr. Virendra Tatake",
              "Financial Management",
              "/IGSB/Research/IGSBRC/PHD1.jpg",
            ],
            [
              "Dr. Pallavi Sajanapwar",
              "Marketing Management",
              "/IGSB/Research/IGSBRC/PHD2.png",
            ],
            [
              "Dr. Aatish Zagade",
              "General Management",
              "/IGSB/Research/IGSBRC/PHD3.jpg",
            ],
            [
              "Dr. Priyanka Darekar",
              "Human Resource Management",
              "/IGSB/Research/IGSBRC/PHD4.png",
            ],
            [
              "Dr. Ashish Vyas",
              "Human Resource Management",
              "/IGSB/Research/IGSBRC/PHD5.png",
            ],
          ].map(([name, field, img], i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-300 rounded-xl  p-4 text-center space-y-2"
            >
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  width={720}
                  height={1280}
                  className="w-full h-full object-cover "
                />
              </div>

              <p className="font-semibold text-secondary pt-2">{name}</p>
              <p className="text-gray-600 text-sm">{field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================
          COMBINED: RESEARCH ACTIVITIES & ADMISSION NEWS
      =================================================== */}
      <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 border-t border-slate-100">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-10 items-stretch">
          {/* --- LEFT SIDE: RESEARCH ACTIVITIES (Span 8) --- */}
          <div className="xl:col-span-8 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10404a] mb-8">
              Research Centre Activities
            </h2>

            {/* Activities Content Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 h-full">
              {/* Text Content */}
              <div className="flex-1 space-y-6 text-justify">
                <p className="text-slate-700 text-lg leading-relaxed">
                  On 5th June 2025, the IGSB Research Centre organized a
                  guidance session led by{" "}
                  <strong>Dr. Abhijit Chandratreya</strong>, Deputy Director
                  (PGRC), IIMP. The workshop aimed to provide guidance on
                  doctoral entrance eligibility, research orientation, purpose
                  of Ph.D., and its professional relevance.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The session also focused on building an academic research
                  mindset, ethical considerations, and publication standards.
                </p>
              </div>

              {/* Event Image */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="relative h-64 lg:h-full min-h-[250px] w-full rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src="/IGSB/Research/IGSBRC/Activities.png"
                    alt="IGSB Research Centre Session"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-[#fb7035] px-2 py-1 rounded">
                    Workshop 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: ADMISSION DETAILS (News Flash) (Span 4) --- */}
          <div className="xl:col-span-4 flex flex-col">
            {/* Alignment Spacer to align with Left Header (approx height of header + subheader) */}
            <div className="hidden xl:block h-[116px]"></div>

            <div className="bg-white rounded-xl shadow-xl border-t-4 border-[#3aafa9] overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="bg-[#10404a] p-6 flex items-center justify-between text-white flex-shrink-0">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#3aafa9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                  News Flash
                </h3>
                <span className="animate-pulse w-2 h-2 rounded-full bg-red-500"></span>
              </div>

              {/* Content */}
              <div className="p-6 relative flex flex-col flex-grow">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-6 flex-grow">
                  {/* Admission Details */}
                  <div>
                    <h4 className="font-bold text-[#fb7035] text-sm uppercase tracking-wide mb-2">
                      Admission Details
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed text-justify mb-4">
                      Admissions to the Ph.D. program are conducted strictly as
                      per{" "}
                      <span className="font-bold text-[#10404a]">
                        SPPU norms and guidelines
                      </span>
                      . Vacancy details are announced as per university
                      timelines before each admission cycle.
                    </p>

                    <div className="p-3 bg-slate-50 border-l-2 border-[#10404a] rounded-r text-xs text-slate-500 italic">
                      The Research Center ensures complete transparency for all
                      official procedures.
                    </div>
                  </div>

                  <div className="flex-grow"></div>

                  {/* Download Action */}
                  <div className="pt-4 mt-auto">
                    <a
                      href="/Programs/PHDSPPU.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group relative flex items-center justify-center gap-3 bg-[#10404a] text-white py-4 rounded-lg hover:bg-[#0c3139] shadow-lg shadow-[#10404a]/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <span className="font-bold text-sm tracking-wide">
                        Download SPPU Circular
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          OPTIONAL CTA + FAQ
      =================================================== */}
      <RecruitersSection />
      <CTASection />

      {/* ===================================================
          ENQUIRY MODAL
      =================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60] animate-in fade-in-0 duration-300">
          <div className="bg-white w-[90%] md:w-[680px] p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-500">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900 animate-in fade-in-0 slide-in-from-top-2 duration-500">
              Enquire Now
            </h2>

            <form className="space-y-4">
              {/* Name & Email */}
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />
              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />

              {/* Mobile */}
              <div className="flex gap-2">
                <select className="w-24 border border-gray-300 rounded-md px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" selected className="text-gray-400">
                    +91
                  </option>
                  <option value="" className="text-gray-400">
                    +92
                  </option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* State & City */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select State *
                  </option>
                  <option value="Maharashtra" className="text-gray-900">
                    Maharashtra
                  </option>
                  <option value="Karnataka" className="text-gray-900">
                    Karnataka
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select City *
                  </option>
                  <option value="Pune" className="text-gray-900">
                    Pune
                  </option>
                  <option value="Mumbai" className="text-gray-900">
                    Mumbai
                  </option>
                </select>
              </div>

              {/* Discipline & Course */}
              <div className="flex gap-2">
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select Discipline Applying For *
                  </option>
                  <option value="Engineering" className="text-gray-900">
                    Engineering
                  </option>
                  <option value="Management" className="text-gray-900">
                    Management
                  </option>
                </select>
                <select className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                  <option value="" disabled selected className="text-gray-400">
                    Select Course *
                  </option>
                  <option
                    value="Computer Engineering"
                    className="text-gray-900"
                  >
                    Computer Engineering
                  </option>
                  <option
                    value="Mechanical Engineering"
                    className="text-gray-900"
                  >
                    Mechanical Engineering
                  </option>
                </select>
              </div>

              {/* Program */}
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105">
                <option value="" disabled selected className="text-gray-400">
                  Select Programme *
                </option>
                <option value="B.Tech" className="text-gray-900">
                  B.Tech
                </option>
                <option value="M.Tech" className="text-gray-900">
                  M.Tech
                </option>
              </select>

              {/* CET Score */}
              <input
                type="text"
                placeholder="Enter CET Score"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
              />

              {/* Captcha */}
              <div className="flex gap-3 items-center">
                <div className="bg-gray-100 border border-gray-300 rounded-md w-1/2 flex items-center justify-center py-2 text-gray-700 font-bold select-none transition-all duration-300 hover:shadow-md">
                  8fcb09
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85C0D] transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="agreeModal"
                  className="transition-all duration-300 hover:scale-110"
                />
                <label htmlFor="agreeModal" className="text-sm text-gray-700">
                  I agree to receive information regarding my submitted enquiry*
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E85C0D] hover:bg-[#d14f08] text-white font-semibold py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
