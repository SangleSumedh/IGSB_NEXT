"use client";

import React, { useRef, useState } from "react";
import FAQSection from "@/components/FAQSections/FAQMBA";
import ApplyForm from "@/components/home/ApplyForm";
import MBAOverview from "@/components/programs/MBAOverview";
import FormSection from "@/components/home/FormSection";
import MBASpecializations from "@/components/programs/MBASpecialisations";
import MBASlider from "@/components/programs/MBASlider";
import ProgramCTA from "@/components/programs/ProgramCTA";

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
        title: "Coming Soon",
        text: "Coming Soon",
      },
      {
        title: "Coming Soon",
        text: "Coming Soon",
      },
      {
        title: "Coming Soon",
        text: "Coming Soon",
      },
    ],
  },
};

const highlights = [
  {
    title: "Duration",
    desc: "2 Years | 4 Semesters",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Credit System",
    desc: "Choice Based Credits",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    ),
  },
  {
    title: "Eligibility",
    desc: "Admission Criteria",
    action: true, // Special flag for clickable item
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Degree",
    desc: "SPPU-Affiliated MBA",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.534 50.534 0 00-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Pedagogy",
    desc: "Experiential & Case Based Learning Model",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Methodology",
    desc: "Outcome Based Education",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Placements",
    desc: "350+ Recruiting Partners",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    title: "Internship",
    desc: "Industry Exposure Programme",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    ),
  },
];

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

  return (
    <div className="w-full bg-white text-white">
      {/* HERO SECTION */}
      <MBASlider
        handleBrochureDownload={handleBrochureDownload}
        toggleModal={toggleModal}
      />

      {/* INFO SECTION – Pillars Style */}
      <div className="w-full bg-gradient-to-r from-[white] via-[white] to text-slate-900 py-14 px-6 md:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 justify-items-center">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 w-full max-w-[280px]"
              >
                {/* ICON CIRCLE */}
                <div className="shrink-0 relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full bg-white border-3 border-[#FF8B61] flex items-center justify-center">
                    <div className="text-slate-800">{item.icon}</div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="space-y-1">
                  <h4 className="font-bold text-lg leading-tight tracking-wide">
                    {item.title}
                  </h4>

                  {item.action ? (
                    <p
                      onClick={scrollToFAQ}
                      className="text-slate-700 text-sm leading-relaxed cursor-pointer
                           hover:text-[#FF8B61] underline decoration-[#FF8B61]
                           underline-offset-4 transition-colors"
                    >
                      {item.desc}
                    </p>
                  ) : (
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center px-4 sm:px-6 lg:px-8 py-12  bg-gradient-to-r from-[#ff8b61] via-[#10404a] to-[#10404a]  border-b border-[#3aafa9]/30 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Department of <span className="">MBA</span>
        </h2>
        <p className="text-slate-100  mx-auto text-lg max-w-7xl font-light leading-relaxed">
          Empowering future innovators with technical excellence, research, and
          hands-on business experience.
        </p>
      </div>

      <MBAOverview />

      <div ref={faqRef}>
        <FAQSection />
      </div>

      <MBASpecializations scrollToApply={scrollToApply} />

      <FormSection ref={applyRef} />

      {/* <JobProfiles /> */}
      {/* ==============================
          PROGRAM HIGHLIGHTS MARQUEE
      ============================== */}

      {/* APPLY FORM AT THE END */}
      {/* ============================
     CAREER OPPORTUNITIES + APPLY FORM (SIDE BY SIDE)
============================ */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16 text-black grid grid-cols-1 md:grid-cols-2 gap-12">
       
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

        <div
          ref={applyRef}
          className="bg-white scroll-mt-15 rounded-xl shadow-md border border-gray-200"
        >
          <ApplyForm />
        </div>
      </div> */}

      {/* <NewCTA /> */}
      {/* <CTASection /> */}
      <ProgramCTA />

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[60]"
          onClick={() => setIsModalOpen(false)}
        >
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
