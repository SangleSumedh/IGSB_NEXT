"use client";

import React, { useRef, useState } from "react";
import FAQSection from "@/components/FAQSections/FAQMBA";
import Image from "next/image";
import RecruitersSection from "@/components/home/RecruiterSection";
import CTASection from "@/components/home/CTASection";
import ApplyForm from "@/components/home/ApplyForm";

export default function MBAContent() {
  const faqRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: "MBA in Marketing Management",
      overview:
        "This specialization delves into consumer behaviour, digital marketing strategies, brand management, and integrated marketing communications.",
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
          text: "Understand market dynamics and consumer insights.",
        },
        {
          title: "Digital-First Approach",
          text: "Hands-on experience with digital tools and analytics.",
        },
        {
          title: "Industry Interface",
          text: "Work on live projects with leading brands.",
        },
      ],
    },

    finance: {
      title: "MBA in Financial Management",
      overview:
        "This specialization provides deep understanding of corporate finance, investments, risk management, financial markets, and valuation.",
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
          text: "Develop quantitative and financial modeling skills.",
        },
        {
          title: "Market-Ready Skills",
          text: "Experience with financial tools, databases, and simulations.",
        },
        {
          title: "Strategic Perspective",
          text: "Learn the strategic role of finance in organizations.",
        },
      ],
    },

    hr: {
      title: "MBA in Human Resources Management",
      overview:
        "This specialization focuses on talent acquisition, organizational behaviour, performance management, and HR analytics.",
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
          text: "Align HR with business goals.",
        },
        {
          title: "People Analytics",
          text: "Use data-driven HR decision making.",
        },
        {
          title: "Leadership in Change Management",
          text: "Drive organizational transformation.",
        },
      ],
    },

    operations: {
      title: "MBA in Operations & Supply Chain Management",
      overview:
        "Learn supply chain dynamics, logistics, operations strategy, and project planning.",
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
          text: "Understand sourcing to last-mile delivery.",
        },
        {
          title: "Quantitative Problem-Solving",
          text: "Learn forecasting, optimization & ERP tools.",
        },
        {
          title: "Global Perspective",
          text: "Understand international trade & logistics.",
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
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              2-Year Master of Business Administration (MBA)
            </h2>

            <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
              A rigorous programme designed to develop strategic thinkers and
              future business leaders.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-secondary text-white px-8 py-3 rounded-lg"
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

        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* INFO SECTION */}
      <div className="w-full bg-[#f8f8f8] text-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">🕓 Duration</h4>
            <p>2 Years</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">💼 Internship</h4>
            <p>Opportunities in top companies</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🏫 Placements</h4>
            <p>Excellent record nationally</p>
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

      <div ref={faqRef}>
        <FAQSection />
      </div>

      {/* ==============================
          STRUCTURE: ALL 4 IN ONE SECTION
      =============================== */}
      {/* ==============================
    STRUCTURE: FULL WIDTH CARDS
============================== */}
      {/* ==============================
    STRUCTURE: TWO CARDS PER ROW
============================== */}
      <div className="w-full bg-white py-16 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">
            Programme Structure (All Specializations)
          </h2>

          {/* GRID: 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.keys(mbaData).map((key) => {
              const s = mbaData[key];

              return (
                <div
                  key={key}
                  className="bg-white shadow-md border border-gray-300 p-8 rounded-xl"
                >
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-secondary mb-4">
                    {s.title}
                  </h2>

                  {/* Overview */}
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {s.overview}
                  </p>

                  {/* Structure */}
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    Programme Structure
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {s.structure.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
      <div className="max-w-7xl mx-auto px-6 py-16 text-black">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          Apply Now
        </h2>
        <ApplyForm />
      </div>

      <CTASection />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]">
          <div className="bg-white w-[90%] md:w-[680px] p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
              Enquire Now
            </h2>

            <ApplyForm />
          </div>
        </div>
      )}
    </div>
  );
}
