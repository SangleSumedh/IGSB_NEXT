"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
// import FAQSection from "@/components/FAQSections/FAQMBA";
import CTASection from "@/components/home/CTASection";
import RecruitersSection from "@/components/home/RecruiterSection";
import PHDSpecs from "@/components/programs/PHDSpecialisations";
import {
  FileText,
  Calendar,
  Info,
  Calendar1,
  CalendarCheck,
} from "lucide-react";
import FormSection from "@/components/home/FormSection";
import SmallDesktopFormSection from "@/components/home/SmallDesktopFormSection"; // LG → XL
import ProgramCTA from "@/components/programs/ProgramCTA";

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
      <div className="relative w-full h-auto  flex items-center">
        <Image
          src="/IGSB/Programmes/PHDBanner1.jpg"
          alt="IGSB Research Centre"
          height={1080}
          width={1920}
          className="object-cover object-center opacity-100"
          priority
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" /> */}
      </div>

      {/* ===================================================
          ABOUT RESEARCH CENTRE
      =================================================== */}
      <section className="bg-white max-w-full mx-auto mt-12 shadow-sm space-y-8">
        <div className="px-6 md:px-8 lg:px-16 grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          {/* --- LEFT SIDE: TEXT (3/5 or 60%) --- */}
          <div className="xl:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary text-left">
              About IGSB Research Centre
            </h2>

            <div className="space-y-4 text-justify text-md md:text-lg text-gray-700 ">
              <p>
                Indira Global School of Business (IGSB) is an AICTE-approved,
                UGC-recognized institution affiliated with Savitribai Phule Pune
                University (SPPU). Established to advance globally relevant
                management education and research, IGSB has emerged as a leading
                B-School in Pune, offering industry-aligned MBA programmes. From
                the academic year 2025–26, IGSB also offers Doctoral Programmes
                in Management.
              </p>

              <p>
                The IGSB Research Center (PGRC) is a recognized Ph.D. Research
                Centre under SPPU, committed to promoting advanced, high-impact
                research in management studies. The Doctoral Programme in
                Management is designed to develop future academicians,
                researchers, and industry experts through rigorous research
                methodology and scholarly inquiry.
              </p>

              <p>
                The Research Center fosters a robust research ecosystem that
                encourages interdisciplinary research, innovation, and
                evidence-based solutions to contemporary business and societal
                challenges, contributing meaningfully to academic knowledge and
                professional practice.
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE (2/5 or 40%) --- */}
          <div className="xl:col-span-5 h-full min-h-[300px] relative  overflow-hidden rounded-lg group">
            <Image
              src="/IGSB/Research/pgrc.webp"
              alt="IGSB Research Centre"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional Overlay for better integration */}
          </div>
        </div>

        {/* Specializations Component remains below */}
        <PHDSpecs />
      </section>

      <section className="w-full bg-white py-16 px-6 md:px-8 lg:px-16 border-t border-slate-100">
        <div className="max-w-[1800px] mx-auto">
          {/* --- FULL WIDTH: RESEARCH CENTRE ACTIVITIES --- */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-[#10404a] mb-8">
              Research Centre Activities
            </h2>

            {/* Activities Content Card */}
            <div className="bg-white text-slate-800   flex flex-col lg:flex-row gap-8  transition-shadow duration-300">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                {/* Event Meta Box */}
                <div className="bg-[#3aa6a9] p-4 rounded-lg border border-slate-200 shadow-sm flex gap-4 items-center">
                  <div className="bg-[#eef2f6] p-2 rounded-full border-3 border-primary text-slate-800">
                    <CalendarCheck />
                  </div>

                  <div className="text-white">
                    <p className="text-sm text-white font-bold uppercase tracking-wide mb-1">
                      Workshop Details
                    </p>
                    <p className="font-medium text-sm">
                      <span>Date:</span> 5th June 2025
                    </p>
                    <p className="font-medium text-sm mt-1">
                      <span>Speaker:</span> Dr. Abhijit Chandratreya{" "}
                      <span className="text-xs">
                        (Deputy Director, PGRC, IIMP)
                      </span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-lg leading-relaxed text-justify">
                  <p>
                    The IGSB Research Centre organized a comprehensive guidance
                    session aiming to provide clarity on doctoral entrance
                    eligibility, research orientation, the purpose of a Ph.D.,
                    and its professional relevance.
                  </p>
                  <p>
                    The workshop was instrumental in building an academic
                    research mindset among aspirants, focusing heavily on
                    ethical considerations and high-quality publication
                    standards required in modern academia.
                  </p>
                </div>
              </div>

              {/* Event Image */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="relative h-64 lg:h-full min-h-[300px] w-full rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/IGSB/Research/IGSBRC/Activities.webp"
                    alt="IGSB Research Centre Guidance Session"
                    height={1080}
                    width={1920}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-[#fb7035] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                      2025
                    </span>
                    <p className="font-semibold text-sm">
                      Research Guidance Session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PHD GUIDES
      =================================================== */}
      <section className="bg-secondary px-6 md:px-8 lg:px-16  py-8  space-y-6 max-w-full mx-auto  mb-10 ">
        <h2 className="text-3xl font-bold text-white text-left">
          Recognized Ph.D. Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[
            [
              "Dr. Virendra Tatake",
              "Financial Management",
              "/Edited/Dr. Virendra Tatake.jpg",
            ],
            [
              "Dr. Pallavi Sajanapwar",
              "Marketing Management",
              "/Edited/Dr. Pallavi Sajanapwar.jpg",
            ],
            [
              "Dr. Aatish Zagade",
              "General Management",
              "/Edited/Dr. Aatish Zagade.jpg",
            ],
            [
              "Dr. Priyanka Darekar",
              "Human Resource Management",
              "/Edited/Dr. Priyanka Darekar.jpg",
            ],
            [
              "Dr. Ashish Vyas",
              "Human Resource Management",
              "/Edited/Dr. Ashish Vyas.jpg",
            ],
          ].map(([name, field, img], i) => (
            <div
              key={i}
              className="bg-[#33a6a9] text-white  rounded-xl  p-4 text-center space-y-2"
            >
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  width={720}
                  height={720}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h2 className="font-semibold  pt-2">{name}</h2>
              <p className="text-white text-sm">{field}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ===================================================
          OPTIONAL CTA + FAQ
      =================================================== */}
      {/* <RecruitersSection />
       */}
      <FormSection />
      <SmallDesktopFormSection />
      {/* <CTASection /> */}
      <ProgramCTA />
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
