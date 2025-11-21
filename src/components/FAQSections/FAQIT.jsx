"use client";

import React, { useState } from "react";
import Image from "next/image";

// ================== SYLLABUS DATA ==================
const syllabusList = [
  
  {
    id: "sybtech",
    label: "SY B.Tech (2025 Pattern) Syllabus",
    pdf: "/Programs/IT/SE.pdf",
  },
  
  
];

const entcLabs = [
  {
    srNo: 1,
    labNo: "B-314",
    labName: "Programming Lab 1",
    totalPCs: "25",
    configuration: `AMD Ryzen 5 8500G w/Radeon 740M Graphics (3.55 GHz)
Installed RAM - 16.0 GB (15.1 usable)
64-bit Operating System, x64-based Processor`,
    software: `Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark`
  },
  {
    srNo: 2,
    labNo: "B-114",
    labName: "Programming Lab 2",
    totalPCs: "25",
    configuration: `Lenovo V520-15IKL, RAM - 8 GB, Intel Core-i7 07700x8,
Graphics - NV106, Hard Disk - 1TB,
OS Type - 64-bit`,
    software: `Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark`
  },
  {
    srNo: 3,
    labNo: "A",
    labName: "Programming Lab 3",
    totalPCs: "25",
    configuration: `Processor - 12th Gen Intel(R) Core(TM) i5-12500 (3.00 GHz)
Installed RAM - 8.00 GB (7.69 usable)
System type - 64-bit OS, x64-based processor`,
    software: `Ubuntu OS: Python, g++, Lamp Server, jdk, flex, yacc, sbcl, nasm, TASM, samba, wireshark, packet tracer`
  }
];


// ================== MECHANICAL LABORATORIES (2-COLUMN FORMAT) ==================


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
          "IT department focuses on educating students in the theory and practice of information technology. This department equips students with the skills necessary to design, develop, manage, and maintain advanced computing systems and software applications. ",

          
"The curriculum is designed to cover a broad spectrum of IT topics, including programming, data structures, algorithms, databases, networking, cybersecurity, and software engineering, Artificial Intelligence, Cloud Technology’s, Machine Learning."

        ],
        "Programs Offered ": [
          "Department of Information Technology is established in 2024 by offering undergraduate program in Information Technology. The program is affiliated to University of Pune, recognized by Govt. of Maharashtra & All India Council of Technical Education (AICTE) New Delhi."

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
      program: "Btech in IT",
      intake: "60 Seats",
      duration: "4 Years",
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
    "Laboratories": {
  type: "entcLabs",
  content: entcLabs
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

        case "entcLabs":
  return (
    <div>
      <h4 className="font-semibold text-secondary text-lg mb-4">Department Laboratories</h4>

      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border p-3">Sr. No.</th>
              <th className="border p-3">Lab No.</th>
              <th className="border p-3">Lab Name</th>
              <th className="border p-3">Total PCs</th>
              <th className="border p-3">Configuration</th>
              <th className="border p-3">Software Installed</th>
            </tr>
          </thead>

          <tbody>
            {data.content.map((lab, index) => (
              <tr key={index} className="border-b align-top">
                <td className="border p-3">{lab.srNo}</td>
                <td className="border p-3">{lab.labNo}</td>
                <td className="border p-3">{lab.labName}</td>
                <td className="border p-3">{lab.totalPCs}</td>
                <td className="border p-3 whitespace-pre-line">{lab.configuration}</td>
                <td className="border p-3 whitespace-pre-line">{lab.software}</td>
              </tr>
            ))}

            {/* Total PCs Row */}
            <tr className="font-semibold bg-gray-50">
              <td className="border p-3" colSpan={3}>Total PCs</td>
              <td className="border p-3">75</td>
              <td className="border p-3" colSpan={2}></td>
            </tr>
          </tbody>
        </table>
      </div>
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
            Department of IT Engineering
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
