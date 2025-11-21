"use client";
import React, { useState, useRef } from "react";
import FAQSection from "../../../components/FAQSections/FAQSectionAIDS";
import RecruiterSection from "../../../components/home/RecruiterSection";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import EnquireModal from "@/components/EnquireModal";

export default function AIDS() {
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
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
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

  const allLogos = Array.from(
    { length: 44 },
    (_, i) => `/logos/logo${i + 1}.png`
  ).filter((_, index) => ![13, 35, 37].includes(index + 1));

  // ✅ Remove logos 18 & 25 (behind center circle)
  const mainLogos = allLogos.filter((_, index) => ![17, 24].includes(index));

  // ✅ Add logos 18 & 25 to the last row
  const reorderedLogos = [...mainLogos, allLogos[17], allLogos[24]];

  return (
    <div className="w-full bg-white text-white">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Programs/IT11.jpg"
            alt="Artificial Intelligence Program"
            fill
            className="object-cover object-center scale-105  opacity-90"
            priority
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />


        {/* Content Wrapper */}
        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              4-Year B.Tech AIDS Programme <br />
              with specialisation in <br />
              <span className="bg-gradient-to-br from-cyan-400  to-sky-400 bg-clip-text text-transparent font-extrabold ">
                Artificial Intelligence & Future Technologies
              </span>
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              The Department of Artificial Intelligence and Data Science at ICEM
              aim to be one of the leading programs to provide value-added
              quality education in Computer Science and Engineering with
              specialization in Artificial Intelligence and Data Science.
            </p>

            {/* Floating Stat Cards */}

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
  <button
  onClick={toggleModal}
  className="relative px-10 py-3 font-semibold rounded-xl
  text-white 
  bg-gradient-to-r from-cyan-400 to-sky-400
  border border-neutral-800
  shadow-[6px_6px_0px_0px_#e5e7eb]
  transition-all duration-200
  hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#e5e7eb]"
>
  Enquire Now
</button>


  <button
  onClick={handleBrochureDownload}
  className="relative px-10 py-3 font-semibold rounded-xl
  text-white 
  bg-gradient-to-r from-cyan-400 to-sky-400
  border border-neutral-800
  shadow-[6px_6px_0px_0px_#e5e7eb]
  transition-all duration-200
  hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#e5e7eb]"
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
                  The Programme spans 4 years, providing comprehensive education
                  in artificial intelligence and emerging technologies.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  💼 Internship Opportunity
                </h4>
                <p className="text-gray-700">
                  Students undertake a 6-month to 1-year internship with global
                  tech leaders to gain real-world experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  🏫 Campus Recruitment
                </h4>
                <p className="text-gray-700">
                  Placement opportunities with top tech companies, including
                  Fortune 500 corporations.
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
                  Click here to read more about eligibility for our CSE Programme
                  with Specialisation in AI & Future Tech.
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
              Btech in Artificial Intelligence
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              The Programme prepares graduates to drive innovation in industries
              like AI, Cloud Computing, Cyber Security, and Blockchain. It
              combines academic rigor with practical experience, ensuring
              students gain real-world skills and exposure to emerging
              technologies.
            </p>

            <h3 className="font-semibold text-lg sm:text-xl text-secondary mb-3">
              Programme Structure
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
              <li>Computer Science and Programming Foundations</li>
              <li>Data Structures and Advanced Algorithms</li>
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Blockchain and Cybersecurity</li>
              <li>Cloud Computing and Emerging Tech Labs</li>
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
              <p className="text-gray-700 max-w-7xl mx-auto mb-12 leading-relaxed">
                Builds a solid foundation in advanced technologies of Artificial
                Intelligence through industry-oriented curriculum.
                Industry-Academia Collaboration Framework encourages students to
                Learn, Collaborate, and Discover. Exposure of In-house
                Incubation Cell nurturing various Startups. Strong emphasis on
                Project, Labs, and Case Study-based learning. Opportunity to
                gain expertise in advanced topics such as robotics, data science
                components, intelligent reasoning, deep learning, pattern
                recognition, computer vision, cognitive computing,
                human-computer interaction, and various AI tools and
                technologies. Acquire ability to design models and intelligent
                solutions in a variety of domains & business applications.
                Unique in-depth learning on emerging technologies. Student
                participation in global competitions like hackathons.
              </p>

              {/* HIGHLIGHT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/AIDS/AIDS1.jpg"
                      alt="Interdisciplinary Expertise"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Interdisciplinary Expertise
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The Computer Science Programme with a specialisation in AI &
                      Future Technologies provides a multidisciplinary
                      foundation in AI, Blockchain, Cloud Computing, and Cyber
                      Security, preparing students to tackle complex challenges
                      in a fast-paced industry.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/AIDS/AIDS2.jpg"
                      alt="Cutting-Edge Laboratories"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Cutting-Edge Laboratories
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Hands-on experience in high-tech environments using
                      industry-standard tools. Students engage in real-world
                      projects bridging theory and practice, building critical
                      skills for modern tech careers.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/Programs/AIDS/AIDS3.jpg"
                      alt="Industry-Relevant Skills"
                      fill
                      className="object-cover object-top-right"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-secondary mb-2">
                      Industry-Relevant Skills
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This Programme equips students to master technologies like
                      AI, Cloud Computing, and Blockchain, fostering innovation
                      and ensuring readiness for the future tech industry.
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
                  The field of AI and future technologies offers diverse career
                  opportunities across various sectors. Professionals can shape
                  innovations in industries like healthcare, finance, and tech,
                  with roles focusing on data, security, and emerging
                  technologies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                  <p>➜ Artificial Intelligence Engineer</p>
                  <p>➜ Data Scientist</p>
                  <p>➜ Blockchain Developer</p>
                  <p>➜ Cyber Security Analyst</p>
                  <p>➜ Cloud Solutions Architect</p>
                  <p>➜ Machine Learning Specialist</p>
                  <p>➜ AI Researcher</p>
                  <p>➜ Robotics Engineer</p>
                </div>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src="/Programs/3.jpg"
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
          <RecruiterSection />

          {/* ===== NEXT STEPS SECTION ===== */}
          <CTASection />

          {/* ===== FREQUENTLY ASKED QUESTIONS SECTION ===== */}
          <div ref={faqRef}>
            <FAQSection />
          </div>
    <EnquireModal isOpen={isModalOpen} onClose={toggleModal} />

    
    </div>
  );
}
