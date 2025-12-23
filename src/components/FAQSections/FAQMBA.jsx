"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mba",
    label: "MBA",
    pdf: "/IGSB/Programmes/MBA_NEP.pdf",
  },
];

const araList = [
  {
    id: "ara",
    label: "ARA",
    pdf: "/IGSB/Programmes/ARA.pdf",
  },
];
const examList = [
  {
    id: "academic-calendar",
    label: "Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/AcademicCalendar.pdf",
  },
  {
    id: "sppu-academic-calendar",
    label: "SPPU Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/SPPUAcademicCalendar.pdf",
  },
];

const sectionContent = {
  "MBA Programme Structure (Detailed)": {
    type: "accordion",
    content: {
      "Types of Courses in CBCS": [
        `• Foundation Courses – For students needing fundamental knowledge such as Accounting, Economics, etc.`,
        `• Enrichment Courses – For students interested in exploring subjects beyond the core syllabus.`,
        `• Alternative Study Credit Courses – Independent study via live projects, MOOCs, research work, and more.`,
      ],

      "Major + Minor Specialization Structure": [
        `Major Specialization – 9 Courses (4 Core + 5 Elective)`,
        `Minor Specialization – 4 Courses (2 Core + 2 Elective)`,
        `Major Specialization Credits: 22 (12 Core + 10 Elective)`,
        `Minor Specialization Credits: 10 (6 Core + 4 Elective)`,
        `The Major + Minor specialization structure is OPTIONAL.`,
        `Students opting for Major + Minor must choose Foundation/Enrichment/ASC courses ONLY in lieu of Generic Electives.`,
      ],

      "Degree Award Details": [
        `• Completing 6 Core + 7 Electives in one domain earns: MBA (Specialization).`,
        `• Completing a Major + Minor combination earns: MBA (Major Specialization + Minor Specialization).`,
      ],
    },
  },
  "Programme Objectives (AY 2024-25)": {
    type: "accordion",
    content: {
      "Programme Educational Objectives (PEOs)": [
        "1. PEO1: Graduates of the MBA program will successfully integrate core, cross-functional and inter-disciplinary aspects of management theories, models and frameworks with the real-world practices and the sector specific nuances to provide solutions to real world business, policy and social issues in a dynamic and complex world.",
        "2. PEO2: Graduates of the MBA program will possess excellent communication skills, excel in cross-functional, multi-disciplinary, multi-cultural teams, and have an appreciation for local, domestic and global contexts so as to manage continuity, change, risk, ambiguity and complexity.",
        "3. PEO3: Graduates of the MBA program will be appreciative of the significance of Indian ethos and values in managerial decision making and exhibit value centered leadership.",
        "4. PEO4: Graduates of the MBA program will be ready to engage in successful career pursuits covering a broad spectrum of areas in corporate, non-profit organizations, public policy, entrepreneurial ventures and engage in life-long learning.",
        "5. PEO5: Graduates of the MBA program will be recognized in their chosen fields for their managerial competence, creativity & innovation, integrity & sensitivity to local and global issues of social relevance and earn the trust & respect of others as inspiring, effective and ethical leaders, managers, entrepreneurs, intrapreneurs and change agents.",
      ],
      "Programme Outcomes (POs)": [
        "1. Generic and Domain Knowledge - Ability to articulate, illustrate, analyze, synthesize and apply the knowledge of principles and frameworks of management and allied domains to the solutions of real-world complex business issues.",
        "2. Problem Solving & Innovation - Ability to Identify, formulate and provide innovative solution frameworks to real world complex business and social problems by systematically applying modern quantitative and qualitative problem-solving tools and techniques.",
        "3. Critical Thinking - Ability to conduct investigation of multidimensional business problems using research based knowledge and research methods to arrive at data driven decisions.",
        "4. Effective Communication - Ability to effectively communicate in cross-cultural settings, in technology mediated environments, especially in the business context and with society at large.",
        "5. Leadership and Team Work - Ability to collaborate in an organizational context and across organizational boundaries and lead themselves and others in the achievement of organizational goals and optimize outcomes for all stakeholders.",
        "6. Global Orientation and Cross-Cultural Appreciation: Ability to approach any relevant business issues from a global perspective and exhibit an appreciation of Cross Cultural aspects of business and management.",
        "7. Entrepreneurship - Ability to identify entrepreneurial opportunities and leverage managerial & leadership skills for founding, leading & managing startups as well as professionalizing and growing family businesses.",
        "8. Environment and Sustainability - Ability to demonstrate knowledge of and need for sustainable development and assess the impact of managerial decisions and business priorities on the societal, economic and environmental aspects.",
        "9. Social Responsiveness and Ethics - Ability to exhibit a broad appreciation of the ethical and value underpinnings of managerial choices in a political, cross-cultural, globalized, digitized, socio-economic environment and distinguish between ethical and unethical behaviors & act with integrity.",
        "10. LifeLong Learning – Ability to operate independently in new environment, acquire new knowledge and skills and assimilate them into the internalized knowledge and skills.",
      ],
      "Programme Specific Outcomes (PSOs) - Marketing": [
        "PSO MKT1: Strategic Marketing Analysis and Decision Making: Graduates specializing in Marketing Management for the MBA programme will be able to Analyze market opportunities and challenges using advanced marketing research tools and techniques. They will develop strategic marketing plans that align with organizational objectives and respond effectively to dynamic market conditions.",
        "PSO MKT2: Digital and Social Media Marketing Proficiency: Graduates specializing in Marketing Management for the MBA programme will be able to demonstrate proficiency in leveraging digital and social media platforms to enhance brand visibility and customer engagement. They will design and execute integrated digital marketing campaigns that drive business growth.",
        "PSO MKT3: Customer Relationship Management and Service Excellence: Graduates specializing in Marketing Management for the MBA programme will be able to excel in building and maintaining strong customer relationships through effective communication, personalized marketing, and superior customer service. They will implement CRM systems to enhance customer loyalty and satisfaction.",
        "PSO MKT4: Innovative Product and Brand Management: Graduates specializing in Marketing Management for the MBA programme will be able to develop innovative product and brand management strategies that address consumer needs and preferences. They will manage product lifecycles, brand portfolios, and execute branding initiatives that strengthen brand equity.",
      ],
      "Programme Specific Outcomes (PSOs) - Finance": [
        "PSO FIN1: Financial Analysis and Reporting: Graduates specializing in Financial Management for the MBA programme will be able to demonstrate the ability to analyze and interpret financial statements, conduct financial ratio analysis, and prepare comprehensive financial reports to support decision-making processes.",
        "PSO FIN2: Investment and Portfolio Management: Graduates specializing in Financial Management for the MBA programme will be able to Apply knowledge of investment theories, financial instruments, and portfolio management techniques to construct and manage investment portfolios aimed at achieving specific financial goals.",
        "PSO FIN3: Corporate Finance and Risk Management: Graduates specializing in Financial Management for the MBA programme will be able to Develop expertise in corporate finance principles, including capital structure, cost of capital, and capital budgeting, while effectively managing financial risks using various risk management tools and techniques.",
        "PSO FIN4: Financial Technology and Innovation: Graduates specializing in Financial Management for the MBA programme will be able to Leverage emerging financial technologies (FinTech) and innovative financial solutions to improve financial services delivery, enhance operational efficiency, and support strategic financial planning.",
      ],
      "Programme Specific Outcomes (PSOs) - HRM": [
        "PSO HRM1: Strategic HR Planning and Implementation: Graduates specializing in Human Resource Management for the MBA programme will be able to Demonstrate the ability to develop and implement strategic human resource plans that align with organizational goals, ensuring optimal utilization of human capital.",
        "PSO HRM2: Talent Acquisition and Development: Graduates specializing in Human Resource Management for the MBA programme will be able to Apply advanced techniques and methodologies for effective talent acquisition, development, and retention, fostering a culture of continuous learning and professional growth.",
        "PSO HRM3: Employee Relations and Legal Compliances: Graduates specializing in Human Resource Management for the MBA programme will be able to Ensure compliance with labor laws and ethical standards while managing employee relations, promoting a positive and legally compliant work environment.",
        "PSO HRM4: HR Analytics and Performance Management: Graduates specializing in Human Resource Management for the MBA programme will be able to Utilize HR analytics and performance management systems to drive data-driven decisions, enhance employee performance, and achieve organizational excellence.",
      ],
      "Programme Specific Outcomes (PSOs) - OSCM": [
        "PSO OSCM1: Operations Strategy and Process Improvement: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Develop and implement effective operations strategies to enhance process efficiency, reduce waste, and improve overall productivity within organizations.",
        "PSO OSCM2: Supply Chain Design and Management: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Design, analyze, and manage end-to-end supply chains to ensure the seamless flow of goods, services, and information, while minimizing costs and meeting customer demands.",
        "PSO OSCM3: Data-Driven Decision Making in Operations: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Utilize quantitative and qualitative data analysis techniques to make informed decisions in operations and supply chain management, ensuring alignment with business goals and customer requirements.",
        "PSO OSCM4: Sustainable and Ethical Supply Chain Practices: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Promote and implement sustainable and ethical practices within operations and supply chain management to support environmental sustainability, social responsibility, and ethical governance.",
      ],
      "Programme Specific Outcomes (PSOs) - Business Analytics": [
        "PSO BA1: Data-Driven Decision Making: Graduates specializing in Business Analytics for the MBA programme will be able to apply advanced analytical techniques and tools to collect, process, and interpret large datasets, enabling data-driven decision making in various business functions.",
        "PSO BA2: Business Intelligence and Reporting: Graduates specializing in Business Analytics for the MBA programme will be able to Demonstrate proficiency in using business intelligence tools and software to create comprehensive reports and dashboards.",
        "PSO BA3: Application of Business Analytics: Graduates specializing in Business Analytics for the MBA programme will be able to Apply business analytics methodologies to various functional areas such as marketing, finance, operations, and human resources.",
        "PSO BA4: Integration of Analytics in Business Strategy: Graduates specializing in Business Analytics for the MBA programme will be able to Integrate business analytics methodologies with strategic management practices.",
      ],
    },
  },
  "Programme Objectives (Legacy/Pre-2024)": {
    type: "accordion",
    content: {
      "Programme Educational Objectives (PEOs)": [
        "PEO-1: Graduates will integrate cross-functional management theories with real-world practices.",
        "PEO-2: Graduates will possess excellent communication skills and appreciate global contexts.",
        "PEO-3: Graduates will be appreciative of Indian ethos and values in decision making.",
        "PEO-4: Graduates will be ready for careers in corporate, non-profit, and entrepreneurial ventures.",
        "PEO-5: Graduates will be recognized for managerial competence and ethical leadership.",
      ],
      "Programme Outcomes (POs)": [
        "PO-1: Generic and Domain Knowledge",
        "PO-2: Problem Solving & Innovation",
        "PO-3: Critical Thinking",
        "PO-4: Effective Communication",
        "PO-5: Leadership and Team Work",
        "PO-6: Global Orientation",
        "PO-7: Entrepreneurship",
        "PO-8: Environment and Sustainability",
        "PO-9: Social Responsiveness and Ethics",
        "PO-10: Life Long Learning",
      ],
      "Programme Specific Outcomes (PSOs)": [
        "PSO – MKT: To groom Marketing Professionals with abilities to contemplate business problems and design sustainable strategies.",
        "PSO – FIN: To develop finance professionals with analytical skills for various industries.",
        "PSO – HR: To develop HR professionals with in-depth knowledge of HRM practices.",
        "PSO – OSCM: To develop skills for planning, designing and operations control.",
        "PSO – BA: To be updated by next week.",
      ],
    },
  },
  "Syllabus & Course Structure": {
    type: "syllabus",
    content: syllabusList,
  },
  "Fee Structure": {
    type: "accordion",
    content: {
      "MBA Fees (Batch 2025–27)": [
        `MBA 1st & 2nd Year yearly fees in ₹ for the Batch 2025-27`,
        `Final Fees Approved by Fees Regulating Authority, Govt. of Maharashtra in the meeting held on April 3, 2025.`,
        {
          table: true,
          headers: ["Category", "Tuition Fees", "Development Fees", "Total"],
          rows: [
            ["Open (Male/Female)", "₹ 140,359", "₹ 16,141", "₹ 156,500"],
            [
              "EBC / OBC / EWS / SEBC (Female)",
              "₹ 70,180",
              "₹ 16,141",
              "₹ 86,321",
            ],
            ["VJ/DT/NT", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["SBC", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["SC", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["ST", "₹ 0", "₹ 0", "₹ 0"],
          ],
        },
        `*Subject to revision by the Fees Regulating Authority (FRA).`,
        `Category-wise fees apply only if the student is eligible for respective Government Scholarships. Non-eligible students must pay full fees.`,
        `Management Quota Fee (as per FRA meeting dated 24 April 2025): ₹ 4,69,500`,
        `Education loan available under PM Vidyalaxmi scheme: https://pmvidyalaxmi.co.in`,
      ],

      "मराठी शुल्क माहिती": [
        `एमबीए २०२५–२७ बॅचसाठी शुल्क नियामक प्राधिकरण, महाराष्ट्र शासन यांनी ३ एप्रिल २०२५ रोजी मंजूर केलेले शुल्क.`,
        {
          table: true,
          headers: ["प्रवर्ग", "शैक्षणिक शुल्क", "विकास शुल्क", "एकूण"],
          rows: [
            ["खुला", "₹ १४०३५९", "₹ १६१४१", "₹ १५६५००"],
            [
              "ईबीसी / इ.मा.व / आ.दु.घ / सा.शै.मा.प्र.",
              "₹ ७०१८०",
              "₹ १६१४१",
              "₹ ८६३२१",
            ],
            ["वि.जा./भ.ज.(ब)/भ.ज.(क)/भ.ज.(ड)", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["वि.मा.प्र.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["अ.जा.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["अ.ज.", "₹ ०", "₹ ०", "₹ ०"],
          ],
        },
        `व्यवस्थापन कोटा शुल्क: ₹ ४,६९,५००`,
        `PM Vidyalaxmi शैक्षणिक कर्ज: https://pmvidyalaxmi.co.in`,
      ],
    },
  },

  Admission: {
    type: "table",
    content: [
      {
        title: "Approved Intake for A.Y. 2025-26",
        headers: [
          "Choice Code",
          "Choice Code TFWS",
          "Course Name",
          "Course Status",
          "Intake 2025-26",
          "Intake (AICTE)",
          "Gov. GR",
          "University Affiliated",
          "Final Intake for Admission 2025-26",
          "Intake Status",
        ],
        rows: [
          [
            "697610110",
            "697610111T",
            "M. B. A.",
            "Regular",
            "180",
            "180",
            "180",
            "180",
            "180",
            "Approved",
          ],
          ["Total", "", "", "", "180", "180", "180", "180", "180", ""],
        ],
      },
    ],
  },

  "Eligibility Criteria": {
    type: "accordion",
    content: {
      Criteria: [
        {
          table: true,
          headers: [
            "Maharashtra State Candidates",
            "Jammu & Kashmir Migrant Candidates",
            "All India Candidates (AI)",
          ],
          rows: [
            [
              `(i) The candidate should be an Indian National;

(ii) Passed minimum three-year duration Bachelor’s Degree awarded by any of the Universities recognized by UGC or AIU in any discipline with at least 50% marks in aggregate (45% for backward class categories and PwD of Maharashtra State only);

(iii) Obtained non-zero score in MAH-MBA/MMS-CET.`,
              `**Obtained non-zero positive score in any one of the following examinations:  
MAH-MBA/MMS-CET, CAT, CMAT**`,
              `The candidate should be an Indian National;

Passed minimum three-year duration Bachelor’s Degree awarded by any of the Universities recognized by UGC/AIU with at least 50% marks (45% for backward class categories & PwD of Maharashtra State);

OR

Appeared for final year of any Bachelor's Degree.

Must obtain a non-zero positive score in MAH-MBA/MMS-CET, CAT, CMAT.`,
            ],
          ],
        },

        // NOTES
        `Note:
• "Aggregate marks" means the grand total of marks for subjects considered for class declaration by the respective University.  
• If grades/CGPA are awarded instead of marks, conversion will follow the procedure certified by the respective University/Institution.  
• Percentage shall be calculated by rounding off to two decimal places.  
• Candidates belonging to SC, VJ/DT (NT-A), NT-B, NT-C, NT-D, OBC, SBC, SEBC categories must submit “Caste Validity Certificate” issued by Social Welfare Scrutiny Committee.  
• ST candidates must submit “Tribe Validity Certificate” issued by the Tribal Department Scrutiny Committee.`,

        // DOCUMENTS REQUIRED
        {
          title: "Documents Required",
          list: [
            "MAH CET 2024 Scorecard",
            "FC Acknowledgement (Document Verification)",
            "10th Marksheet",
            "12th Marksheet",
            "Undergraduate Marksheet & Provisional Certificate",
            "Transfer Certificate",
            "Migration Certificate (if applicable)",
            "Educational GAP Certificate (if applicable, on ₹100 stamp paper)",
            "Nationality Certificate (Passport or Certificate from District Magistrate)",
            "Maharashtra Domicile or Birth Certificate",
            "Caste Certificate (if applicable)",
            "Caste Validity Certificate (if applicable)",
            "EWS / SEBC Certificate (if applicable)",
            "Income Certificate (if applicable)",
            "Non-Creamy Layer Certificate (if applicable)",
            "Aadhar Card",
            "(Documents applicable for all candidates)",
          ],
        },

        {
          link: true,
          label: "Click Here: Documents Required",
          href: "/IGSB/Programmes/Admission-Documents-Required.pdf",
        },
      ],
    },
  },

  Exam: {
    type: "syllabus",
    content: examList,
  },

  ARA: {
    type: "syllabus",
    content: araList,
  },
};

// ================== MAIN COMPONENT ==================
export default function FAQENTC() {
  const [active, setActive] = useState("MBA Programme Structure (Detailed)");

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    if (!data) return null; // Safety check

    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-4">
            {Object.entries(data.content).map(([title, items], index) => (
              <div key={title} className="border border-gray-300 rounded-lg">
                <details className="group" open={index === 0}>
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-4 pt-2 space-y-2 text-justify">
                    {items.map((item, i) => {
                      if (typeof item === "object" && item.table) {
                        return (
                          <div key={i} className="overflow-x-auto my-4">
                            <table className="w-full border border-gray-300 text-sm">
                              <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                  {item.headers.map((h, idx) => (
                                    <th
                                      key={idx}
                                      className="border border-gray-300 p-2 font-semibold"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.rows.map((row, rIndex) => (
                                  <tr
                                    key={rIndex}
                                    className="border-b hover:bg-gray-50"
                                  >
                                    {row.map((cell, cIndex) => (
                                      <td
                                        key={cIndex}
                                        className="border border-gray-300 p-2"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      if (typeof item === "object" && item.pdf) {
                        return (
                          <a
                            key={i}
                            href={item.pdf}
                            target="_blank"
                            className="text-secondary underline font-medium hover:text-secondary/80 block"
                          >
                            {item.label}
                          </a>
                        );
                      }
                      if (typeof item === "object" && item.list) {
                        return (
                          <ul
                            key={i}
                            className="list-disc pl-6 space-y-1 text-gray-700"
                          >
                            {item.list.map((l, li) => (
                              <li key={li}>{l}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (typeof item === "object" && item.link) {
                        return (
                          <a
                            key={i}
                            href={item.href}
                            className="text-secondary underline font-medium hover:text-secondary/80 block"
                          >
                            {item.label}
                          </a>
                        );
                      }
                      return (
                        <p
                          key={i}
                          className="text-gray-700 whitespace-pre-line"
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );
      case "text":
        return (
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {data.content}
          </div>
        );
      case "notice":
        return <p className="text-gray-600 text-lg">{data.content}</p>;
      case "table":
        return (
          <div className="space-y-6">
            {data.content.map((tbl, idx) => (
              <div key={idx}>
                {tbl.title && (
                  <h4 className="font-semibold text-secondary text-lg mb-3">
                    {tbl.title}
                  </h4>
                )}

                <div className="overflow-x-auto border border-gray-300 rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        {tbl.headers.map((h, hi) => (
                          <th key={hi} className="p-3 border-b font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tbl.rows.map((row, ri) => (
                        <tr key={ri} className="border-b hover:bg-gray-50">
                          {row.map((cell, ci) => (
                            <td key={ci} className="p-3 border-b">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );
      case "syllabus":
        return (
          <div className="space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="mt-2 sm:mt-0 px-4 py-2 bg-secondary text-white rounded-md text-center"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of MBA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with technical excellence, research,
            and hands-on engineering experience.
          </p>
        </div>

        {/* ================= MOBILE VIEW (Accordion Layout) ================= */}
        {/* This div is hidden on large screens (lg:hidden) */}
        <div className="lg:hidden space-y-4">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden"
            >
              {/* Accordion Header (The Tab Button) */}
              <button
                onClick={() => setActive(active === tab ? "" : tab)}
                className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center transition-colors ${
                  active === tab
                    ? "bg-secondary text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                {tab}
                <span
                  className={`transform transition-transform duration-200 ${
                    active === tab ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Accordion Content (Renders below header if active) */}
              {active === tab && (
                <div className="p-6 border-t border-gray-200 bg-white animate-fadeIn">
                  {renderContent(sectionContent[tab])}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (Sidebar + Content) ================= */}
        {/* This div is hidden on small screens and grid on large (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-300 sticky top-24 h-fit">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg text-center">
              MBA Overview
            </h3>

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-300 min-h-[400px]">
            {active && sectionContent[active] ? (
              renderContent(sectionContent[active])
            ) : (
              <p className="text-gray-500 text-center mt-10">
                Select a section to view details.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
