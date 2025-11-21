"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/MCA/SY2426.pdf",
  },  
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/MCA/SY2527.pdf",
  },  
];

const activitiesList = [
  {
    heading: "1. Session “Innovation/Start up Eco System”",
    desc: `The Department of Master of Computer Applications (MCA) at Imperial College of Engineering and Management (ICEM) organized an insightful session on the topic "Innovation/Start-Up Ecosystem" under the banner of the Institution’s Innovation Council (IIC) on 23rd July 2025.

The session was coordinated by Prof. Dhanashree Pisal, who took the initiative to facilitate this enriching experience for the students. The session was delivered by Prof. Aditi Huparikar, a knowledgeable and experienced speaker in the domain of entrepreneurship and innovation.`,
  },
  {
    heading: "2. Project Presentation on Innovative Ideas",
    desc: `The Department of MCA at Indira College of Engineering & Management organized an "Innovative Ideas Project Presentation" on 22nd April, 2025 under the Institution’s Innovation Council (IIC) initiative for FYMCA students.

This event aimed to foster creativity, problem-solving, and an entrepreneurial mindset among first-year students. Held on campus, the activity encouraged participants to present unique project ideas addressing real-world challenges across domains like technology, healthcare, education, and sustainability.`,
  },
  {
    heading: "3. Fort Cleaning Activity",
    desc: `The MCA Department organized a Fort Cleaning Activity on 7th December 2024 to promote cleanliness and heritage conservation.

Total 55 students actively participated in fort cleaning activity. The activity was coordinated by Prof. Dhanashree Patil.`,
  },
  {
    heading: "4. Copyright Filing Process",
    desc: `Institution’s Innovation Council at ICEM & MCA Department organized an IPR session on “Copyright Filing Process” on 7th Feb, 2025 from 3 pm to 5 pm.

Prof. Dhanashree Patil guided FYMCA students through the step-by-step procedure of filing a copyright application.`,
  },
  {
    heading: "5. Project Presentation on Innovative Ideas",
    desc: `The Department of MCA at Indira College of Engineering & Management organized a "Project Presentation on Innovative Ideas" on 19th Nov, 2024 under the Institution’s Innovation Council (IIC).

This initiative fostered creativity, problem-solving, and an entrepreneurial mindset among students.`,
  },
  {
    heading: "6. Teckshetra-2025",
    desc: `Department of MCA successfully organized Teckshetra 2025 on 17th Feb, 2025 with enthusiastic participation from various colleges.

Two major events were organized:

1. UI Design Competition  
2. CodeFest Competition

Both events were coordinated by Prof. Dhanashree Patil.`,
  },
  {
    heading: "7. Industry Visit",
    desc: `The MCA Department organized an insightful industry visit to the Software Technology Parks of India (STPI) on 14th November 2024.

Mr. Manhar Gadhavi delivered an interactive session on current IT trends and the importance of professional networking.`,
  },
  {
    heading: "8. OMT for FY MCA batch 2025–2027",
    desc: `The Outdoor Management Training (OMT) on September 13, 2025 was a full-day session aimed at enhancing teamwork, leadership, and problem-solving abilities.

The session was conducted from 09:00 AM to 04:30 PM under the guidance of Prof. Atul Gore Sir.`,
  }
];


// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`
}));

// ================== MAIN COMPONENT ==================
export default function FAQENTC() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "The knowledge and skills required for planning; designing and building Complex, Intelligent Software Systems are highly valued in all industrial sectors like business, health care, education and manufacturing. Master program in Computer Application (M.C.A) is steady stream of the essential knowledge, skills and foundation for acquiring a wide range of rewarding careers into the rapidly expanding world of the Information Technology.",  

          "The Curriculum is well updated with latest technology like Big Data Analytics, Cloud Computing, Service Oriented Architecture, and Python Programming along with core subjects and management skill development for being successful tech-managers, utilizing the resources to their fullest.",

          "The department of MCA is affiliated to Savitribai Phule Pune University (SPPU) and approved by All India Council for Technical Education (AICTE), New-Delhi at Indira College of Engineering & Management with intake of 60 students."

        ],
        
      }
    },
    // ================= NEW SECTIONS FOR IMCA =================

"Fee Structure": {
  type: "accordion",
  content: {
    "Fee Structure": [
      {
        label: "View Fee Structure PDF",
        pdf: "/Programs/IBBAMCA/FeeStructure2526.pdf"
      }
    ],
    "FRA": [
      {
        label: "View FRA PDF",
        pdf: "/Programs/IBBAMCA/FRA2025.pdf"
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
      program: "Integrated MCA (BCA + MCA)",
      intake: "60 Seats",
      duration: "5 Years",
      type: "Full Time"
    }
  ]
},

"Eligibility Criteria": {
  type: "text",
  content: `
Eligibility for admission to the Integrated MCA program requires candidates to have passed 10+2 from any recognized board with Mathematics or Statistics.

Admission is based on merit and institutional selection guidelines. No entrance exam required.`
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
    "Activities": {
  type: "activities",
  content: activitiesList
},






  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      case "accordion":
  return (
    <div className="space-y-4">
      {Object.entries(data.content).map(([title, items]) => (
        <div key={title} className="border border-gray-200 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
              <h4 className="font-semibold text-secondary text-lg">{title}</h4>
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>

            <div className="p-4 pt-2 space-y-2">
              {items.map((item, i) =>
                typeof item === "object" && item.pdf ? (
                  <a
                    key={i}
                    href={item.pdf}
                    target="_blank"
                    className="text-secondary underline font-medium hover:text-secondary/80"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p key={i} className="text-gray-700">{item}</p>
                )
              )}
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
  return (
    <p className="text-gray-600 text-lg">
      {data.content}
    </p>
  );
case "table":
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 border-b font-semibold">Program</th>
            <th className="p-3 border-b font-semibold">Intake</th>
            <th className="p-3 border-b font-semibold">Duration</th>
            <th className="p-3 border-b font-semibold">Type</th>
          </tr>
        </thead>

        <tbody>
          {data.content.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">{row.program}</td>
              <td className="p-3">{row.intake}</td>
              <td className="p-3">{row.duration}</td>
              <td className="p-3">{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


      case "syllabus":
        return (
          <div className="space-y-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <h5 className="font-semibold text-gray-800">{item.label}</h5>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="px-4 py-2 bg-secondary text-white rounded-md"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );
        case "activities":
  return (
    <div className="space-y-4">
      {data.content.map((ac, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg">
          <details className="group">
            <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-lg">
              <h4 className="font-semibold text-secondary text-lg">{ac.heading}</h4>
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>

            <div className="p-4 pt-2 space-y-3">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {ac.desc}
              </p>

              {/* IMAGE SPACE */}
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">[ Image will be added here ]</p>
              </div>
            </div>
          </details>
        </div>
      ))}
    </div>
  );


  
  


      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========


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
            Department of MCA
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering future innovators with technical excellence, research, and hands-on engineering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT MENU */}
          <nav className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-2 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h3>

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
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-secondary">{active}</h3>
            </div>

            {renderContent(sectionContent[active])}
          </div>
        </div>
      </div>
    </section>
  );
}
