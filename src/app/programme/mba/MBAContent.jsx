"use client";

import React, { useRef, useState } from "react";
import FAQSection from "@/components/FAQSections/FAQMBA";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";
import MBAOverview from "@/components/programs/MBAOverview";

export default function MBAContent() {
  const faqRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const applyRef = useRef(null);

  const scrollToApply = () => {
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight Marquee Hover Effect
  const marqueeRef = useRef(null);

  React.useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const cards = marquee.querySelectorAll(".highlight-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
        card.classList.add("scale-up");
      });

      card.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
        card.classList.remove("scale-up");
      });
    });
  }, []);

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const commonCareers = [
    "Brand Manager",
    "Digital Marketing Manager",
    "Market Research Analyst",
    "Sales Manager",
    "Product Manager",
    "Media Planner",
    "CRM Manager",
    "Head of Marketing",
    "Financial Analyst",
    "Investment Banker",
    "Risk Manager",
    "HR Business Partner",
    "Talent Acquisition Manager",
    "Operations Manager",
    "Supply Chain Analyst",
    "Business Development Manager",
    "Project Manager",
    "Strategy Consultant",
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/IGSB/programmes/IGSB-Prospectus-Final.pdf";
    link.download = "IGSB-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const mbaHighlightImages = [
    "/Programs/MBA/MBA1.jpg",
    "/Programs/MBA/MBA2.jpg",
    "/Programs/MBA/MBA3.jpg",
  ];

  const mbaData = {
    marketing: {
      title: "Marketing Management (MKT)",
      overview:
        "This specialization equips students with cutting-edge skills in digital marketing, branding, consumer behavior, sales strategy, market research, and product management. Students learn to understand markets, create value-driven campaigns, and build strong customer relationships, developing into innovative marketers ready to compete in fast-changing global markets.  ",
      structure: [
        "Marketing Management & Consumer Behaviour",
        "Digital Marketing & Social Media Strategy",
        "Brand Management & Integrated Marketing Communications",
        "Sales & Distribution Management",
        "Strategic Marketing & Marketing Analytics",
      ],
      highlights: [
        {
          title: "Strategic Marketing Expertise",
          text: "Develop a profound understanding of market dynamics, consumer insights, and competitive strategy to make informed, impactful marketing decisions.",
        },
        {
          title: "Digital-First Approach",
          text: "Gain hands-on experience with the latest digital marketing tools and analytics platforms, preparing you for the evolving landscape of online consumer engagement.",
        },
        {
          title: "Industry Interface",
          text: "Learn from industry experts and work on live projects with leading brands, bridging the gap between theory and practical marketing challenges.",
        },
      ],
    },

    finance: {
      title: "Finance Management (FIN)",
      overview:
        "The finance specialization develops strong analytical and strategic decision-making skills in financial planning, investment analysis, corporate finance, banking, risk management, and capital markets. Students learn to interpret financial data, evaluate opportunities, and drive sustainable financial growth, preparing them for diverse roles in the financial sector.",
      structure: [
        "Corporate Finance & Financial Statement Analysis",
        "Investment Analysis & Portfolio Management",
        "Financial Markets & Institutions",
        "International Finance & Risk Management",
        "Mergers, Acquisitions & Corporate Valuation",
      ],
      highlights: [
        {
          title: "Analytical Rigor",
          text: "Build quantitative and analytical skills essential for modelling, valuation, and investment decision-making.",
        },
        {
          title: "Market-Ready Skills",
          text: "Gain practical exposure using financial databases, tools, and simulations.",
        },
        {
          title: "Strategic Perspective",
          text: "Understand the strategic role of finance in budgeting, governance, and corporate decision-making.",
        },
      ],
    },

    hr: {
      title: "Human Resource Management (HR)",
      overview:
        "The HR specialization prepares students to manage people, culture, and organizational development with strategic insight. Students learn talent acquisition, performance management, employee engagement, HR analytics, and labor laws, enabling them to build high-performing workplaces and lead transformational people practices in dynamic business environments.",
      structure: [
        "Talent Management & Acquisition",
        "Organizational Behaviour & Development",
        "Performance Management Systems & Compensation",
        "Employment Laws & Labor Relations",
        "HR Analytics & Strategic HRM",
      ],
      highlights: [
        {
          title: "Strategic HR Partnering",
          text: "Align HR strategies with business goals for talent-driven growth",
        },
        {
          title: "People Analytics",
          text: "Use data for evidence-based decisions in hiring, retention, and performance.",
        },
        {
          title: "Leadership in Change Management",
          text: "Develop the ability to drive organizational transformation and employee engagement.",
        },
      ],
    },

    operations: {
      title: "Operations and Supply Chain Management (OSCM)",
      overview:
        "Focused on efficiency and value creation, this specialization trains students in logistics, process optimization, supply chain strategy, project management, quality systems, and technology-enabled operations. Graduates gain the expertise to streamline operations, reduce costs, and manage complex supply networks in a competitive global business landscape.",
      structure: [
        "Operations Strategy & Supply Chain Management",
        "Logistics & Transportation Management",
        "Project Management & Quality Control",
        "Procurement & Sourcing Strategies",
        "Analytics for Operations & Decision Modelling",
      ],
      highlights: [
        {
          title: "End-to-End Supply Chain View",
          text: "Understand sourcing, production, logistics, distribution, and last-mile operations.",
        },
        {
          title: "Quantitative Problem-Solving",
          text: "Learn forecasting, optimization, and ERP tools for real-world problem solving.",
        },
        {
          title: "Global Perspective",
          text: "Explore international logistics, trade regulations, and risk mitigation strategies",
        },
      ],
    },
    ba: {
      title: "Business Analytics (BA)",
      overview: "Coming soon",
      structure: ["Coming soon"],
      highlights: [
        {
          title: "End-to-End Supply Chain View",
          text: "Understand sourcing, production, logistics, distribution, and last-mile operations.",
        },
        {
          title: "Quantitative Problem-Solving",
          text: "Learn forecasting, optimization, and ERP tools for real-world problem solving.",
        },
        {
          title: "Global Perspective",
          text: "Explore international logistics, trade regulations, and risk mitigation strategies",
        },
      ],
    },
  };

  return (
    <div className="w-full bg-white text-white">
      {/* HERO SECTION */}
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[75vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/IGSB/Programmes/Banner.jpg"
            alt="MBA Program"
            fill
            className="object-cover object-center scale-105 opacity-90"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />

        <div className="relative max-w-[1500px] px-6 md:px-12 lg:px-20 z-20">
          <div className="max-w-3xl text-white text-sm md:text-lg">
            <h2 className="text-2xl  md:text-4xl font-bold leading-snug">
              2-Year Master of Business Administration (MBA)
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              This rigorous programme is designed to develop strategic thinkers
              and future business leaders. It combines core management
              principles with deep specialization, fostering analytical prowess,
              leadership qualities, and an ethical mindset to drive
              organizational success in a complex global economy.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-secondary text-white px-6 py-2 rounded-lg"
              >
                Enquire Now
              </button>
              <button
                onClick={handleBrochureDownload}
                className="bg-secondary text-white px-6 py-2 rounded-lg"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* INFO SECTION */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">🕓 Duration</h4>
            <p>The MBA Programme lasts 2 years</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">💼 Internship</h4>
            <p>Internships with leading organizations across industries.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🏫 Placements</h4>
            <p>Excellent placement record with top companies nationwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🎓 Eligibility</h4>
            <p
              onClick={scrollToFAQ}
              className="cursor-pointer hover:text-blue-600 underline"
            >
              Click here to see eligibility
            </p>
          </div>
        </div>
      </div>

      <MBAOverview />

      <div ref={faqRef}>
        <FAQSection />
      </div>

      {/* ==============================
          STRUCTURE: ALL 4 IN ONE SECTION
      =============================== */}
      <div className="w-full bg-white py-16 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4 text-center">
            MBA Specializations
          </h2>
          <p className="text-md md:text-lg font-bold text-slate-700 mb-10 text-center">
            IGSB offers diverse MBA specializations—including Marketing,
            Finance, HR, and Operations & Supply Chain Management - designed to
            build industry-ready professionals with strong analytical,
            leadership, and strategic capabilities.
          </p>

          {/* GRID: 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(mbaData).map((key) => {
              const s = mbaData[key];

              return (
                <div
                  key={key}
                  className="bg-white shadow-md border border-gray-300 px-4 py-4 sm:px-8 sm:py-8 rounded-xl flex flex-col justify-between"
                >
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-secondary mb-4">
                    {s.title}
                  </h2>

                  {/* Overview */}
                  <p className="text-gray-700 mb-6 text-md leading-relaxed">
                    {s.overview}
                  </p>

                  {/* Structure */}
                  {/* <h3 className="text-xl font-semibold text-secondary mb-3">
                    Programme Structure
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {s.structure.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul> */}

                  {/* APPLY BUTTON */}
                  <button
                    onClick={scrollToApply}
                    className=" bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition"
                  >
                    Enquire Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==============================
          ALL HIGHLIGHTS OF ALL SPECIALIZATIONS
      =============================== */}
      {/* ==============================
    PROGRAM HIGHLIGHTS MARQUEE
============================== */}
      <section className="w-full bg-gray-50 py-16 overflow-hidden">
        {/* HEADING */}
        <h2 className="text-3xl font-bold text-secondary text-center mb-10">
          Programme Highlights
        </h2>

        <div className="relative w-full overflow-visible py-10">
          {/* TRIPLE DUP FOR SMOOTH LOOP */}
          <div ref={marqueeRef} className="highlights-marquee flex px-6">
            {[...Object.keys(mbaData)]
              .flatMap((key) => mbaData[key].highlights)
              .flatMap((item) => [item, item, item]) // triple duplication
              .map((highlight, index) => (
                <div
                  key={index}
                  className="highlight-card-wrapper mr-6 flex-shrink-0"
                >
                  <div className="highlight-card w-[260px] sm:w-[300px] md:w-[340px] bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    {/* IMAGE */}
                    <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-t-xl overflow-hidden">
                      <Image
                        src={mbaHighlightImages[index % 3]}
                        alt={highlight.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-base mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* STYLES */}
        <style jsx>{`
          @keyframes marqueeScrollHighlights {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .highlights-marquee {
            animation: marqueeScrollHighlights 40s linear infinite;
            width: max-content;
            will-change: transform;
          }

          .highlight-card-wrapper,
          .highlight-card {
            will-change: transform;
            transform: translateZ(0);
          }

          .highlight-card.scale-up {
            transform: scale(1.06) translateZ(0);
            background-color: #b2f5ea;
            z-index: 20;
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
          }
        `}</style>
      </section>

      <RecruitersSection />

      {/* APPLY FORM AT THE END */}
      {/* ============================
     CAREER OPPORTUNITIES + APPLY FORM (SIDE BY SIDE)
============================ */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-black grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT — COMMON CAREER OPPORTUNITIES */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Career Opportunities
          </h2>

          <p className="text-gray-700 mb-6">
            This programme opens pathways to impactful leadership and management
            roles:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commonCareers.map((career, index) => (
              <p key={index} className="text-gray-800 flex items-center gap-2">
                ➜ <span>{career}</span>
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT — APPLY FORM */}
        <div
          ref={applyRef}
          className="bg-white scroll-mt-15 rounded-xl shadow-md border border-gray-200"
        >
          <ApplyForm />
        </div>
      </div>

      <CTASection />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]">
          <div className="bg-white w-[90%] md:w-[680px]  rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-2xl"
            >
              ×
            </button>

            <ApplyForm />
          </div>
        </div>
      )}
    </div>
  );
}
