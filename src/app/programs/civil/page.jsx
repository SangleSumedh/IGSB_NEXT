"use client";
import React, { useState, useRef } from "react";
import FAQSection from "@/components/FAQSections/FAQComp";
import Link from "next/link";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function Civil() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqRef = useRef(null);

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-white text-white">
      {/* -------------------------------------- HERO SECTION -------------------------------------- */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/Programs/computer.jpg"
            alt="Civil Engineering Department"
            fill
            className="object-cover object-center scale-105 opacity-90"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Department of Civil Engineering
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              The Department of Civil Engineering at Indira College of
              Engineering and Management (ICEM) stands as a pillar of innovation,
              knowledge, and excellence in shaping tomorrow’s infrastructure
              leaders.
              <br />
              <br />
              The department is equipped with well-established laboratories,
              modern instruments, advanced computing facilities with licensed
              software, and interactive teaching aids such as models, visual
              charts, and multimedia content. It emphasizes research and
              development in Structural, Geotechnical, Transportation, Water
              Resources, and Environmental Engineering.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleBrochureDownload}
                className="bg-secondary text-white px-8 py-3 rounded-lg"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* -------------------------------------- PROGRAM HIGHLIGHTS -------------------------------------- */}
      <div className="w-full bg-[#f7f7f7] py-16 text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Programme Highlights
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            The Civil Engineering Programme at ICEM blends strong theoretical
            foundations with practical exposure through latest software,
            cutting-edge construction practices, and hands-on learning across key
            Civil Engineering domains.
          </p>

          {/* -------------------------------------- HIGHLIGHT CARDS -------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ------------------ CARD 1 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp1.jpg"
                  alt="Interdisciplinary Expertise"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Interdisciplinary Expertise
                </h3>

                <ul className="space-y-4">
                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Integration with Other Domains</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Collaboration with Computer Science, Mechanical, and Environmental Engineering</li>
                      <li>• AI, ML, and Data Analytics in infrastructure design</li>
                      <li>• Remote Sensing, GIS & BIM for smart project development</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Sustainability & Innovation</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Green technologies and renewable energy concepts</li>
                      <li>• Climate-resilient & sustainable construction</li>
                      <li>• Entrepreneurship & policy-driven learning</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Collaborative Learning</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Joint interdisciplinary projects & seminars</li>
                      <li>• Strong industry-academia ecosystem</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* ------------------ CARD 2 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp2.jpg"
                  alt="Cutting Edge Laboratories"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Cutting-Edge Laboratories
                </h3>

                <ul className="ml-6 space-y-2">
                  <li>• Advanced labs: Concrete, Geotechnical, Transportation, Environmental & Structural Testing</li>
                  <li>• Modern instruments & testing equipment</li>
                  <li>• Software exposure: AutoCAD, STAAD Pro, Revit, ETABS, GIS, BIM</li>
                </ul>
              </div>
            </div>

            {/* ------------------ CARD 3 ------------------ */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <div className="w-full h-48 relative">
                <Image
                  src="/Programs/Computer/Comp3.jpg"
                  alt="Industry Alignment"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left text-gray-700 text-sm leading-relaxed">
                <h3 className="font-semibold text-lg text-secondary mb-3">
                  Industry Alignment
                </h3>

                <ul className="space-y-4">

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Technical Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• AutoCAD, STAAD Pro, Revit, ETABS, Primavera</li>
                      <li>• Survey instruments & material testing</li>
                      <li>• BIM & GIS software expertise</li>
                      <li>• Strong foundation in codes & structural analysis</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Analytical & Managerial Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Planning, estimation, scheduling</li>
                      <li>• Data-driven engineering decisions</li>
                      <li>• Sustainability & green building concepts</li>
                      <li>• Quality control, safety & contract management</li>
                    </ul>
                  </li>

                  <li>
                    <span className="text-secondary text-lg">🔹</span>{" "}
                    <strong>Professional & Soft Skills</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Communication & teamwork</li>
                      <li>• Leadership & ethical responsibility</li>
                      <li>• Adaptability & digital readiness</li>
                      <li>• Entrepreneurial mindset for start-ups</li>
                    </ul>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* -------------------------------------- CAREER OPPORTUNITIES -------------------------------------- */}
      <div className="w-full bg-white text-black py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6">

          <div className="flex-1 text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Career Opportunities
            </h2>

            <div className="space-y-6">

              <div>
                <p>
                  <span className="text-secondary text-lg">🔹</span>{" "}
                  <strong>Public Sector Opportunities</strong>
                </p>
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• PWD, Irrigation, Urban & Rural Development</li>
                  <li>• Smart City & Municipal Corporations</li>
                  <li>• PSUs: NBCC, NHAI, CPWD, Railways, DRDO</li>
                  <li>• UPSC, MPSC & Govt engineering roles</li>
                  <li>• Infrastructure planning & research bodies</li>
                </ul>
              </div>

              <div>
                <p>
                  <span className="text-secondary text-lg">🔹</span>{" "}
                  <strong>Private Sector Opportunities</strong>
                </p>
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• Construction & infrastructure firms</li>
                  <li>• Design, planning & PMC consultancies</li>
                  <li>• Real-estate developers & contractors</li>
                  <li>• Environmental & water management companies</li>
                  <li>• Urban planning & transportation firms</li>
                  <li>• BIM, GIS & infra-tech companies</li>
                </ul>
              </div>

              <div>
                <p>
                  <span className="text-secondary text-lg">🔹</span>{" "}
                  <strong>Entrepreneurship & Higher Studies</strong>
                </p>
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• Construction, consultancy or survey start-ups</li>
                  <li>• M.Tech/MS/PhD in specializations (India/Abroad)</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-[320px] relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <Image
                src="/Programs/1.jpg"
                alt="Civil Engineering Careers"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>

      {/* -------------------------------------- OTHER SECTIONS -------------------------------------- */}
      <RecruitersSection />



      
    </div>
  );
}
