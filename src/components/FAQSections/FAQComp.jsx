"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/Computer/SE.pdf",
  },
  {
    id: "te",
    label: "TE Computer Engineering (2019 Pattern) Syllabus",
    pdf: "/Programs/Computer/TE.pdf",
  },
  {
    id: "be",
    label: "BE Computer Engineering (2019 Pattern) Syllabus",
    pdf: "/Programs/Computer/BE.pdf",
  },
];

// ================== ACADEMIC CALENDAR DATA ==================
const academicCalendarList = [
  {
    id: "compac",
    label: "Computer Academic Calendar",
    pdf: "/Programs/Computer/COMPAC.pdf",
  }
];

// ================== TIME TABLE DATA ==================
const timeTableList = [
  {
    id: "bett",
    label: "BETT Time Table",
    pdf: "/Programs/Computer/BETT.pdf",
  },
  {
    id: "tett",
    label: "TETT Time Table",
    pdf: "/Programs/Computer/TETT.pdf",
  },
  {
    id: "sett",
    label: "SETT Time Table",
    pdf: "/Programs/Computer/SETT.pdf", 
  },
];

// ================== CLUBS & MOU DATA ==================


// ================== LABORATORY DATA ==================
const labData = [
  {
    srNo: 1,
    name: "Programming Language & Software Engineering Lab - I",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 2,
    name: "Programming Language & Software Engineering Lab - II",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 3,
    name: "Data Science Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 4,
    name: "Project & Research Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 5,
    name: "Project Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 and Core i7 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 6,
    name: "Database Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software:
      "Windows and Linux OS with all Open Source Software's and Open Source Databases and RDBMS.",
  },
  {
    srNo: 7,
    name: "iOS (Apple) Lab",
    pcs: "10",
    equipment:
      "Apple M1 with standard configurations with Internet Connectivity",
    software: "iOS Operating System with all Mac Compliant Softwares.",
  },
  {
    srNo: 8,
    name: "Networking & Cyber Security Lab",
    pcs: "25",
    equipment:
      "Core2Duo with standard configurations with Internet Connectivity",
    software: "Chrome OS Flex and Linux with Open Source Software's.",
  },
  {
    srNo: 9,
    name: "System Programming & Operating System Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
  {
    srNo: 10,
    name: "PG Lab",
    pcs: "25",
    equipment:
      "PCs Intel Core i5 with standard configurations with Internet Connectivity",
    software: "Windows and Linux OS with all Open Source Software's.",
  },
];

// ================== IMAGE PLACEHOLDERS ==================


const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`
}));

// ================== MAIN COMPONENT ==================
export default function FAQSectionComputer() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
  type: "accordion",
  content: {
    "About the Department": [
      "Welcome to the Department of Computer Engineering at Indira College of Engineering and Management, a vibrant hub of innovation, academic excellence, and professional growth. The department is committed to producing competent and creative engineers who can meet the dynamic challenges of the global IT industry. With a strong focus on both theoretical and practical learning, the department offers comprehensive training in core domains such as Programming, Algorithms, Databases, Artificial Intelligence, Cyber security, and Computational Theory and Data Structures.",

"Our faculty members are a blend of experienced academicians and industry professionals who mentor students through innovative teaching methods, research projects, and hands-on learning. The department is equipped with state-of-the-art laboratories, modern computing facilities, and smart classrooms that foster a rich learning environment. We take immense pride in our collaborations with AWS Academy, Robotic Process Academy, UiPath, and CSI Cyber security, which provide students access to global certifications, internships, and real-world project experiences.",

"Beyond academics, the department encourages holistic development through active participation in professional bodies such as CSI, ISTE, IEEE, and the Google Developer Students Club (GDSC). Students regularly engage in hackathons, coding competitions, seminars, workshops, and national as well as international events and state and national sports, consistently bringing laurels to the institution. To enhance employability, specialized training Programmes in aptitude, soft skills, technical certifications, Guidance for Higher Studies and GATE coaching are integrated into the curriculum.",

"With a remarkable placement record for the past five years, our graduates are excelling in top multinational companies and pursuing higher studies at reputed universities worldwide. The Department of Computer Engineering at ICEM continues to be a center of excellence empowering students with the knowledge, skills, and confidence to become leaders and innovators in the digital era."
    ],

    "Vision": [
      "To become an acclaimed center of excellence by rendering modern technology, academics and research for creating holistic, socio-economic professionals with interdisciplinary potential."
    ],

    "Mission": [
      "To foster strong fundamental concepts to students and inspire them to find creative solutions with critical thinking and disciplined time managed environment.",
      "To impart knowledge and skill based education in collaboration with industry, academia and research organizations.",
      "To develop a center of excellence and setup a research laboratory to develop software applications for the society with the association of industry.",
      "To enlighten students with the latest technologies through carefully designed training modules with the alliance of Alumni and Industry as a part of value added education.",
      "To nurture and nourish effective communication, interpersonal skills, and create awareness of ethical and social responsibilities."
    ],

    "Programs Offered": [
      "The Department of Computer Engineering was established in 2007, offering both Undergraduate (B.Tech) and Postgraduate (M.Tech) Programmes in Computer Engineering. The Programmes are affiliated to Savitribai Phule Pune University (SPPU), recognized by the Government of Maharashtra, and approved by the All India Council for Technical Education (AICTE), New Delhi. The institute proudly holds the status of an Autonomous Institute under SPPU, enabling the department to design and implement a dynamic, industry-oriented curriculum that meets global standards and fosters innovation, research, and excellence in technical education"      
    ]
  }
},

    "POs, PSOs, PEOs": {
      type: "accordion",
      content: {
        "Programme Outcomes (POs)": [
          "Apply Knowledge of Mathematics, Science and Engineering: Relate & apply fundamental knowledge of mathematics, science and engineering paradigm to real world problems.",
          "Problem Analysis: Analyze, identify and formulate tangible products/services/solutions/applications with computing requirements.",
          "Design and Development of algorithms : Design, implement, and evaluate a computer – based solution applicable to public health, ecological safety, human resource management and economical sustainability, cultural, societal and environmental considerations.",
          "Analysis design and modeling of complex problems: Understand management and engineering principles meets need of atomization of industry.",
          "Usage of latest open source tools and technologies: Select & use current techniques, skills, and tools to solve societal, health, safety, cultural issues by analyzing the local and global impact of engineering on individuals or society.",
          "Social contribution of Engineers: Distinguish a problem; design a solution for the needs of the society in health, safety, public, private sectors applying relevant engineering practices.",
          "Environment and Sustainability: Understand the affecting factors thru’ various fields of engineering to the environment context, develop the solutions which would support green Environment initiative.",
          "Professional Development and Ethics: Inculcate ethical values amongst students to develop best engineering practices.",
          "Commitment at Individual level and as a team: Work effectively in multidisciplinary environment as individual & diverse team structure too.",
          "Communication skills: Learn an emphatic communication to function effective on teams, including diversified and multidisciplinary goal.",
          "Project Planning & Management for Complex Solutions: Use of modeling techniques to design experiments, by analyzing and interpreting data",
          "Self-learning: Recognize the need of continuous expertized development through lifelong learning.",
          
        ],
        "Programme Specific Outcomes (PSOs)": [
          "Professional Skills: The ability to understand, analyze and develop high-end applications to meet the current industrial requirements using varied algorithmic strategies, system software, multimedia, web design, database management, hardware troubleshooting, and network administration.",
          "Problem-Solving Skills: The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business success",
          "Successful Career and Entrepreneurship: The ability to employ modern computer languages, environments, and platforms in creating innovative career paths to be an entrepreneur and create employability for nation building, and a zest for higher studies."
        ],
        "Programme Educational Objectives (PEOs)": [
          "To build graduates for successful careers in Computer Engineering those are able to serve state and regional industries, government agencies, or national and international industries.",
          "To build graduates that identifies the underlying scientific foundation of Computer Aided Innovation and also to evaluate their effectiveness and efficiency",
          "To build graduates who engage in self-development activities through further professional studies and personal research that will allow them to adapt technological challenges in many frames like computer hardware and software design, embedded systems, computer network design, system integration, electronic design automation etc.",
          "To build graduates in computer engineering who are acquiring knowledge of the discipline, teamwork, communication skills and an ability to work with a diverse set of constraints."
        ]
      }
    },
    // ================= NEW SECTIONS =================

"Fee Structure": {
  type: "accordion",
  content: {
    "Fee Structure": [
      {
        label: "View Fee Structure PDF",
        pdf: "/Programs/Computer/Feestructure2526.pdf"
      }
    ],
    "FRA": [
      {
        label: "View FRA PDF",
        pdf: "/Programs/Computer/FRA2025.pdf"
      }
    ]
  }
},

"Admission Procedure": {
  type: "notice",
  content: "Admission procedure details will be updated soon."
},

"Sanctioned Intake": {
  type: "table",
  content: [
    {
      program: "B.Tech Computer Engineering(Dummy)",
      intake: "120 Seats",
      duration: "4 Years",
      type: "Full Time"
    }
  ]
},

"Eligibility Criteria": {
  type: "text",
  content: `
Under Progress`
},


    Faculty: {
      type: "gallery",
      content: facultyImages,
      title: "Faculty Members"
    },

    "Syllabus & Course Structure": {
      type: "syllabus",
      content: syllabusList
    },



    Laboratories: {
      type: "labs",
      content: labData
    },

    "Academic Calendar": {
      type: "syllabus",
      content: academicCalendarList,
      title: "Academic Calendars"
    },
    
    "Time Table": {
      type: "syllabus",
      content: timeTableList,
      title: "Time Tables"
    },
    

    "Academic Performance": {
      type: "notice",
      content: "Academic performance data is currently under development and will be available soon."
    },
    
    Achievements: {
      type: "notice",
      content: "Achievements information is currently under development and will be available soon."
    },
    
  };

  const tabs = Object.keys(sectionContent);

  // Render different content types
  const renderContent = (contentData) => {
    switch (contentData.type) {
      case "text":
        return (
          <div className="prose prose-gray max-w-none">
            {contentData.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .split(/(\*\*.*?\*\*)/g)
                  .map((part, i) => 
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={i} className="text-secondary font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
              </p>
            ))}
          </div>
        );

      case "list":
        return (
          <ul className="space-y-3">
            {contentData.content.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );

            case "accordion":
        return (
          <div className="space-y-4">
            {Object.entries(contentData.content).map(([title, items]) => (
              <div key={title} className="border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-secondary text-lg">{title}</h4>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="p-4 pt-2 space-y-3">
                    {items.map((item, index) => (
                      typeof item === "object" && item.pdf ? (
                        <a
                          key={index}
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary font-medium underline hover:text-secondary/80"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p key={index} className="flex items-start text-gray-700">
                          <span className="text-secondary mr-2 mt-1">•</span>
                          {item}
                        </p>
                      )
                    ))}
                  </div>

                </details>
              </div>
            ))}
          </div>
        );


        case "table":
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="p-3 border-b font-semibold">Programme</th>
            <th className="p-3 border-b font-semibold">Intake</th>
            <th className="p-3 border-b font-semibold">Duration</th>
            <th className="p-3 border-b font-semibold">Type</th>
          </tr>
        </thead>

        <tbody>
          {contentData.content.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 border-b last:border-b-0">
              <td className="p-3 text-gray-700">{row.program}</td>
              <td className="p-3 text-gray-700">{row.intake}</td>
              <td className="p-3 text-gray-700">{row.duration}</td>
              <td className="p-3 text-gray-700">{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


      case "syllabus":
        return (
          <div className="space-y-4">
            
            {contentData.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 mb-3 sm:mb-0">
                  <h5 className="font-semibold text-gray-800">{item.label}</h5>
                </div>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors text-sm font-medium text-center"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );

      case "labs":
        return (
          <div className="overflow-hidden">
            <h4 className="font-semibold text-secondary text-lg mb-4">Laboratory Facilities</h4>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="p-3 border-b font-semibold w-16">Sr.No.</th>
                    <th className="p-3 border-b font-semibold min-w-[200px]">Lab Name</th>
                    <th className="p-3 border-b font-semibold w-24">No. of PCs</th>
                    <th className="p-3 border-b font-semibold min-w-[250px]">Major Equipment</th>
                    <th className="p-3 border-b font-semibold min-w-[200px]">Software Installed</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.content.map((lab) => (
                    <tr key={lab.srNo} className="hover:bg-gray-50 border-b last:border-b-0">
                      <td className="p-3 text-gray-600">{lab.srNo}</td>
                      <td className="p-3 font-medium text-gray-800">{lab.name}</td>
                      <td className="p-3 text-gray-600">{lab.pcs}</td>
                      <td className="p-3 text-gray-700">{lab.equipment}</td>
                      <td className="p-3 text-gray-700">{lab.software}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );


 

    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Department of Computer Engineering
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with cutting-edge education and research in computer science and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 sticky top-24 self-start border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h3>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  active === tab
                    ? "bg-secondary text-white shadow-md"
                    : "hover:bg-gray-50 text-gray-700 hover:text-secondary hover:border-l-4 hover:border-secondary"
                }`}
              >
                <span className="font-medium">{tab}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">
                {active}
              </h3>
            </div>
            
            <div className="content-area">
              {renderContent(sectionContent[active])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}