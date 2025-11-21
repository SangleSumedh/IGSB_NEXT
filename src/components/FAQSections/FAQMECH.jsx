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

// ================== MECHANICAL LABORATORIES (2-COLUMN FORMAT) ==================
const mechanicalLabs = [
  {
    heading: "Basic Mechanical Engineering",
    description: [
      "1] Babcock Boiler Model.",
      "2] Cochran Boiler Model.",
      "3] Chain and Belt Conveyor.",
      "4] All Types of Brakes Models.",
      "5] All Types of Clutch Models.",
      "6] All Types of Gear Models."
    ]
  },
  {
    heading: "Fluid Machinery",
    description: [
      "1] Reynolds Apparatus.",
      "2] Minor Losses Due To Pipe Fitting Apparatus.",
      "3] Venturimeter calibration and Orifice meter calibration apparatus.",
      "4] Pelton wheel test rig.",
      "5] Kaplan Turbine test rig.",
      "6] Const. speed centrifugal pump test rig."
    ]
  },
  {
    heading: "Applied Thermodynamics",
    description: [
      "1] Steam turbine test rig.",
      "2] Two stage reciprocating air compressor test rig.",
      "3] Steam generator model E Steam 300 with economizer with mounting & accessories.",
      "4] Junkers Gas Calorimeter.",
      "5] Bomb Calorimeter.",
      "6] Orsat Gas Apparatus."
    ]
  },
  {
    heading: "I C Engine",
    description: [
      "1] Single Cylinder 4 Stroke 5 HP Diesel Engine Test Rig.",
      "2] Four Cylinder 4 Stroke Petrol Engine Test Rig.",
      "3] Multi cylinder Diesel Engine Cut Section Model.",
      "4] Battery Ignition System.",
      "5] Four Stroke Single Cylinder Diesel Engine Cut Section Model."
    ]
  },
  {
    heading: "Theory of Machines",
    description: [
      "1] Synchromesh Gear Box.",
      "2] Differential Gear Box.",
      "3] Epicyclic Gear Train Setup.",
      "4] Motorized Gyroscope.",
      "5] Generation involute gear tooth profile & Rack shift Equipment."
    ]
  },
  {
    heading: "Dynamics of Machinery",
    description: [
      "1] Static & Dynamic Balancing Apparatus.",
      "2] Universal Vibration Testing m/c.",
      "3] Digital Sound Measurement Apparatus."
    ]
  },
  {
    heading: "Workshop",
    description: [
      "1] Hearth Furnace.",
      "2] Plastic Molding Machine (MMT Brand 1/2 OZ).",
      "3] All Geared Lathe Machine (Turner make, 4 ½ ‘).",
      "4] Power Hacksaw Machine.",
      "5] Radial Drill Machine.",
      "6] Spot Welding Machine.",
      "7] Power Press M/c.",
      "8] Milling Machine (Sunrise Make) with Vertical Attachment.",
      "9] Lathe Machine (Light Duty)."
    ]
  },
  {
    heading: "Heat Transfer",
    description: [
      "1] Thermal Conductivity of Metal Rod Apparatus.",
      "2] Parallel Flow & Counter Flow Apparatus.",
      "3] Emissivity Measurement Apparatus.",
      "4] Thermal Conductivity by Guarded Hot Plate Method.",
      "5] Critical Heat Flux Apparatus.",
      "6] Natural, Forced Convection Apparatus."
    ]
  },
  {
    heading: "Refrigeration and Air Conditioning",
    description: [
      "1] Vapour Compression Refrigeration Test Rig.",
      "2] Air Conditioning Trainer.",
      "3] ICE Plant Test Rig.",
      "4] Vapour Absorption Test Rig.",
      "5] Cut Section Model of Hermetically Compressor."
    ]
  },
  {
    heading: "Industrial Fluid Power",
    description: [
      "1] Advanced Pneumatic Trainer.",
      "2] Advanced Hydraulic Trainer.",
      "3] Gear Pump Test Rig.",
      "4] Vane Pump Test Rig.",
      "5] Testing of Pressure Relief Valve."
    ]
  },
  {
    heading: "Mechatronics",
    description: [
      "1] Micrologix 1000 PLC Trainer.",
      "2] PID Flow Control Trainer.",
      "3] Arduino (Atmega 328P) Development kit with Accelerometer Sensor.",
      "4] PID Trainer.",
      "5] Temperature Sensor Calibration Trainer Kit."
    ]
  },
  {
    heading: "Metrology and Quality Control",
    description: [
      "1] Auto Collimator With Angle Dekker.",
      "2] Floating Carriage Micrometer.",
      "3] Optical Flat With Monochromatic Light Source.",
      "4] Portable Surface Roughness Tester.",
      "5] Pneumatic Comparator.",
      "6] Profile Projector (PPT-200)."
    ]
  },
  {
    heading: "Metallurgy",
    description: [
      "1] Standard Metallurgical Microscope Set.",
      "2] Trinocular Microscope With CCTV.",
      "3] Micrometer Eyepiece.",
      "4] Fluorescent Dye Penetrant Kit.",
      "5] Jominy End Quench Hardness Tester.",
      "6] Single Disc Polishing Machine."
    ]
  },
  {
    heading: "Modeling and Analysis",
    description: [
      "Total No. of machines: 25",
      "Configuration: Intel -g(41) c2d e 7500, os-windows 7 enterprise, ram-4gb, intel core i5, hdd 500gb",
      "Software installed: Matlabtm 2010"
    ]
  },
  {
    heading: "Computer Aided Design",
    description: [
      "Total no. Of machines: 30",
      "Configuration: G(41) c-2 d hcl infinite bl 1330, os-windows 7 enterprise, ram-2gb, intel core 2 duo, hdd 300gb",
      "Software installed: Catia v5 r21, autocad 2015"
    ]
  },
  {
    heading: "PG Computer Lab",
    description: [
      "Total no. Of machines: 25",
      "Configuration: Lenovo think centre intel h61 i3, os-windows 7 enterprise, ram-4gb, intel core i3, hdd 500gb",
      "Software installed: Autocad 2015, mastercam x9, ansys 13"
    ]
  },
  {
    heading: "Electrical Vehicles Lab & Robotics Lab",
    description: [
      "Passenger EV.",
      "Goods Carrier EV.",
      "Full-fledged Robot programming lab."
    ]
  }
];

// ================== FACULTY IMAGES ==================
const facultyImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/faculty-${(i % 4) + 1}.jpg`,
  alt: `Faculty Member ${i + 1}`
}));

// ================== MAIN COMPONENT ==================
export default function FAQMECH() {
  const [active, setActive] = useState("About Us");

  const sectionContent = {
    "About Us": {
      type: "accordion",
      content: {
        "About the Department": [
          "Welcome to the Department of Mechanical Engineering at Indira College of Engineering and Management. Established in 2007, the department has been a hub of innovation, hands-on learning, and technical excellence.",

          
"From 2025–26, the department is proud to launch B.Tech Mechanical Engineering with Specialization in Electric Vehicle Technology, aligning our curriculum with the rapidly growing EV industry and future mobility solutions."

        ],
        Vision: [
          "Be a nationally recognized Mechanical Engineering Department that provides right academic ambience and nurtures innate talent of students"
        ],
        Mission: [
          "Prepare engineering students for successful career in Mechanical Engineering by imparting knowledge, skills and attitude."
        ],
        Values: ["Integrity, Innovation, Excellence, Collaboration."],
        "Programs Offered": [
  "Department of Mechanical Engineering was established in 2007 by offering undergraduate and Post Graduate program in Mechanical Engineering. The program is affiliated to University of Pune, recognized by Govt. of Maharashtra & All India Council of Technical Education (AICTE) New Delhi.",
  "B.E. in Mechanical Engineering (SPPU) – Intake: 60",
  "M.E. (Mechanical Engineering) – Intake: 12",
  "B. Tech (Mechanical - EV Specialization)"
]

      }
    },
    // ================= NEW SECTIONS (MECHANICAL) =================

"Fee Structure": {
  type: "accordion",
  content: {
    "Fee Structure": [
      {
        label: "View Fee Structure PDF",
        pdf: "/Programs/Mechanical/FeeStructure2526.pdf"
      }
    ],
    "FRA": [
      {
        label: "View FRA PDF",
        pdf: "/Programs/Mechanical/FRA2025.pdf"
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
      program: "B.Tech Mechanical Engineering",
      intake: "60 Seats",
      duration: "4 Years",
      type: "Full Time"
    }
  ]
},

"Eligibility Criteria": {
  type: "text",
  content: `
An interested candidate seeking engineering admission in Maharashtra must be a citizen of India. A candidate opting for engineering 1st-year admission is stated eligible if he/she has passed class 12th exam of CBSC/HSC/ICSE board with min 50% for open category, 45% for backward class from any state in India. A candidate also has to have a valid positive score in either of the examinations MH-CET/JEE-Mains, can apply for an engineering admission process.

Engineering admission criteria for Direct 2nd-year admission

The Candidate opting for engineering 2nd-year admission should be an Indian Citizen.Candidate must have completed Diploma Course in Engineering and Technology with at least 45% marks (40% marks for Backward class categories students and Persons with Disability belonging to Maharashtra State only) in appropriate branch of Engineering and Technology from an (AICTE) All India Council for Technical Education or Central or State Government approved Institution or its equivalent for securing engineering 2nd-year admission`
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
      type: "mechLabs",
      content: mechanicalLabs
    }
  };

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    switch (data.type) {
      
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
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
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




      // ========== UPDATED MECHANICAL LAB TABLE (2 COLUMNS) ==========
      case "mechLabs":
        return (
          <div>
            <h4 className="font-semibold text-secondary text-lg mb-4">
              Mechanical Engineering Laboratories
            </h4>

            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  {data.content.map((lab, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      {/* COLUMN 1 – HEADING */}
                      <td className="p-4 font-semibold text-gray-900 w-1/3 align-top">
                        {lab.heading}
                      </td>

                      {/* COLUMN 2 – DESCRIPTION */}
                      <td className="p-4 text-gray-700 space-y-1">
                        {lab.description.map((item, i) => (
                          <div key={i}>{item}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            Department of Mechanical Engineering
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
