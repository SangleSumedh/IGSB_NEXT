"use client"
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function Computer() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("admissions");

  // ✅ Ref for FAQ Section
  const faqRef = useRef(null);

  // Toggle Apply Now Modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "//brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Smooth scroll function
  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Calculate active tab index for sliding indicator
  const getActiveTabIndex = () => {
    switch (activeTab) {
      case "admissions":
        return 0;
      case "department":
        return 1;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full bg-white text-white">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
                   {/* Background Image */}
                   <div className="absolute inset-0">
                     <Image
                       src="/Programs/mtechMech.jpg"
                       alt="Artificial Intelligence Program"
                       fill
                       className="object-cover object-center scale-105  opacity-90"
                       priority
                     />
                   </div>
           
                   {/* Dark Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
           
                   {/* Content Wrapper */}
                   {/* Content Wrapper */}
                   <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
                     <div className="max-w-3xl text-white">
                       <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                         2-Year M.Tech in Mechanical Engineering <br></br>
                         <span className="bg-gradient-to-br from-cyan-400  to-sky-400 bg-clip-text text-transparent font-extrabold ">
                           Specializing in Advanced Mechanical Systems and Research
                         </span>
                       </h2>
           
                       <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                         This postgraduate programme offers advanced study and research in specialized domains of mechanical engineering. It is designed to cultivate expertise in thermal engineering, design engineering, or manufacturing systems, preparing graduates for R&D, design, and specialist roles in industry and academia.
                       </p>
           
                       {/* Floating Stat Cards */}
           
                       {/* Buttons */}
                       <div className="flex gap-4 mt-6">
                         <button
                           onClick={toggleModal}
                           className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold 
                         "
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
           
                   {/* Bottom Fade Mask */}
                   <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
                 </div> 

   
          {/* ===== WHITE INFO SECTION ===== */}
          <div className="w-full bg-[#f8f8f8] text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🕓 Course Duration
                </h4>
                <p className="text-gray-700">
                  A focused 2-year programme with coursework and a significant research-based dissertation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Opportunities for industry-sponsored projects and research internships with leading automotive, aerospace, and manufacturing firms.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Recruitment for specialized roles in R&D centers, core engineering companies, and public sector undertakings (PSUs).
                </p>
              </div>

              {/* ✅ Updated Eligibility section with scroll functionality */}
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🎓 Eligibility
                </h4>
                <p
                  onClick={scrollToFAQ}
                  className="text-gray-700 cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                >
                  Click here to read more about the eligibility criteria for our M.Tech in Mechanical Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* ===== PROGRAM STRUCTURE + APPLY FORM SECTION ===== */}
          <div className="w-full bg-white text-black py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 items-stretch">

    {/* LEFT TEXT SECTION */}
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between border border-gray-100">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 leading-snug">
          M.Tech in Mechanical Engineering
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          This programme provides an in-depth understanding of advanced mechanical concepts, computational methods, 
          and research methodologies. It empowers students to address complex engineering challenges, innovate in 
          product design, and contribute to cutting-edge developments in fields like robotics, composite materials, 
          and sustainable energy systems.
        </p>

        <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
          Programme Structure
        </h3>

        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
          <li>Advanced Thermodynamics & Heat Transfer</li>
          <li>Finite Element Analysis (FEA) & Computational Fluid Dynamics (CFD)</li>
          <li>Advanced Mechanics of Materials & Vibrations</li>
          <li>Computer-Integrated Manufacturing & Automation</li>
          <li>Research Methodology & Dissertation</li>
        </ul>
      </div>
    </div>

    {/* RIGHT FORM SECTION */}
    <div className="flex flex-col justify-between">
      <ApplyForm />
    </div>
  </div>
</div>


          {/* ===== PROGRAM HIGHLIGHTS SECTION ===== */}
          <div className="w-full bg-[#f7f7f7] py-16 text-black">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Programme Highlights
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our M.Tech programme is tailored to develop specialists who can push the boundaries of mechanical engineering through advanced analysis, innovation, and research.
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/MTECHmech/MTechMech1.jpg"
                      alt="Interdisciplinary Expertise"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Specialization Tracks
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold">Focused Expertise : </span>Choose from specializations in Thermal Engineering, Machine Design, or Manufacturing Systems to build deep, domain-specific knowledge.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/MTECHmech/MTechMech2.jpg"
                      alt="Cutting-Edge Laboratories"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Advanced Research Facilities
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold">Research-Led Learning : </span>Access state-of-the-art labs for CAD/CAM, Robotics, FEA, and CFD to conduct pioneering research and development. 
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/MTECHmech/MTechMech3.jpg"
                      alt="Industry-Relevant Skills"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Industry & Research Integration
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold">Solving Real-World Problems : </span>Work on live industry problems and research projects, often in collaboration with corporate R&D divisions, to create impactful engineering solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CAREER OPPORTUNITIES SECTION ===== */}
          <div className="w-full bg-white text-black py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
              {/* LEFT TEXT SECTION */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Career Opportunities
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  M.Tech in Mechanical Engineering graduates are equipped for high-end specialist and research-oriented careers across various sectors. 
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                  <p>R&D Engineer </p>
                  <p>Design & Analysis Engineer </p>
                  <p>CFD/FEA Analyst </p>
                  <p>Project Lead (Engineering) </p>
                  <p>Thermal Engineer </p>
                  <p>Production & Quality Head </p>
                  <p>Academic Researcher/Professor </p>
                  <p>Consultant (Core Engineering) </p>
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="/Programs/11.jpg"
                    alt="Career Opportunities in AI and Future Technologies"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== CAMPUS RECRUITMENT SECTION ===== */}
          <RecruitersSection />

          {/* ===== NEXT STEPS SECTION ===== */}
          <CTASection />

          {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
          <div ref={faqRef}>
            <FAQSection />
          </div>
     

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
