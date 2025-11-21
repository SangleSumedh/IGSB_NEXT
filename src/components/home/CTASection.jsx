"use client";

import React, { useEffect, useState } from "react";

export default function CTASection() {
  const [pathname, setPathname] = useState("");

  // ✅ Detect route (works for both App & Pages router)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  // ✅ Brochure Download
  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/ICEMAdmissionBrochure2025.pdf";
    link.download = "ICEM-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Scroll to Apply Form
  const handleScrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ Headline & Body text per route
  const pageContent = {
    "/": {
      headline: "The Next Steps",
      body: "The steps you take today shape your future. At Indira College, we empower bright minds with strong fundamentals, a global perspective, and leadership skills to make a meaningful change in the world.",
    },
    "/programs/computer-engineering": {
      headline: "The Next Steps",
      body: "The steps you take today shape your future. At Indira College, we empower bright minds with strong fundamentals, a global perspective, and leadership skills to make a meaningful change in the world.",
    },
    "/programs/mechanical-engineering": {
      headline: "Connect with Us",
      body: "The decision to pursue Mechanical Engineering is the first step towards building a career that shapes the physical world. At Indira College, we provide the foundational knowledge, specialized skills, and industry exposure to launch a successful career as a leader in engineering and innovation.",
    },
    "/programs/entc": {
      headline: "Build the Future of Connectivity",
      body: "The decision to pursue Electronics & Telecommunication Engineering is the first step towards a career that powers global communication. At Indira College, we provide the foundational knowledge, specialized skills, and industry exposure to launch a successful career at the forefront of technological innovation.",
    },
    "/programs/it": {
      headline: "Become the Architect of Digital Business",
      body: "The decision to pursue Information Technology is the first step towards a career at the heart of digital transformation. At Indira College, we provide the foundational knowledge, specialized skills, and industry exposure to launch a successful career building and managing the technologies that power the world's businesses.",
    },
    "/programs/mba": {
      headline: "Lead the Future of Business",
      body: "The decision to pursue an MBA is an investment in your leadership potential. At Indira College, we provide the strategic knowledge, specialized skills, and industry connections to accelerate your career and prepare you for senior management roles.",
    },
    "/programs/mca": {
      headline: "Architect Your Future in Software Development",
      body: "The decision to pursue an MCA is a definitive step towards a leadership role in the technology sector. At Indira College, we provide the advanced knowledge, practical experience, and industry connections to launch a successful career as a software expert and innovator.",
    },
    "/programs/fye": {
      headline: "Build Your Engineering Future on a Solid Foundation",
      body: "The quality of your engineering education depends on the strength of its foundation. At Indira College, our First Year Engineering programme is designed to give you that unbeatable start, equipping you with the knowledge, skills, and confidence to excel in your chosen specialized field and beyond.",
    },
    "/programs/mtech-mech": {
      headline: "Become a Specialist in Mechanical Innovation",
      body: "Pursue an M.Tech to transition from an engineer to an expert and innovator. At Indira College, we provide the advanced knowledge, research opportunities, and industry connections to excel in specialized mechanical engineering roles.",
    },
    "/programs/mtech-comp": {
      headline: "Lead the Next Wave of Technological Advancement",
      body: "An M.Tech in Computer Science is your pathway to the forefront of tech innovation. At Indira College, we provide the advanced theoretical knowledge, research environment, and industry partnerships to propel your career into specialized and leadership roles.",
    },
    "/programs/imca": {
      headline: "Architect Your Future in Software Development",
      body: "Choose a definitive path to becoming a software expert with our Integrated MCA program. This is your opportunity to build a powerful and continuous academic foundation, positioning you for a successful and impactful career in the ever-evolving technology landscape.",
    },
    "/programs/imba": {
      headline: "Secure Your Future in Business Leadership",
      body: "Embark on a structured and strategic path to a successful management career with our Integrated MBA programme. This is your opportunity to build a powerful academic foundation that will set you apart in the competitive world of business.",
    },
  };

  const { headline, body } = pageContent[pathname] || pageContent["/"];

  return (
    <section className=" bg-secondary text-center text-white py-16 px-6 rounded-2xl max-w-7xl mx-auto my-16 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{headline}</h2>
      <p className="text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
        {body}
      </p>

      {/* ✅ Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleBrochureDownload}
          className="bg-white text-[#002D72] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
        >
          Download Brochure
        </button>

        <button
          onClick={handleScrollToForm}
          className="bg-[#002D72] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#001e4a] transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
