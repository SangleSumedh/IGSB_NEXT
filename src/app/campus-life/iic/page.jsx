"use client";

import React from "react";
import Image from "next/image";

function IIC() {
  // Images and PDFs from public folder
  const bannerImg = "/BannerOverviewPage.jpg";
  const establishmentCert = "/Establisment_Certificate.pdf";
  const iicRatingCert = "/IIC_Rating_Certificate_2023-24.pdf";

  const rightLinks = [
    "Student Welfare",
    "IIC",
    "Induction Programme",
    "Student Council",
    "National Service Scheme (NSS)",
    "Award Functions",
    "Academic Cell",
    "Academic Calendar",
    "Statutory Committee",
    "Non-Statutory Committee",
    "Grievance Redressal",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const iicTeam = [
    ["1", "Dr. Nilesh Uke, Director", "Head of Institute"],
    ["2", "Dr. Saurabh Gupta, Dean-Academics", "President"],
    ["3", "Ms. Supriya Kumbhar, Asst Prof- FY", "Convener"],
    ["4", "Ms. Minal Patil, Asst Prof-Computer", "Members"],
    ["5", "Ms. Deepa Padwal, Asst Prof-AI/DS", "Members"],
    ["6", "Mr. Vishal Meshram, Asst Prof-Mechanical", "Members"],
    ["7", "Ms. Priyanka Patil, Asst Prof-E&TC", "Members"],
    ["8", "Ms. Aditi Hupparikar, Asst Prof-MBA", "Members"],
    ["9", "Ms. Dhanshri Pisal, Asst Prof-MCA", "Members"],
    ["10", "Ms. Trupti Kathale, Asst Prof-FY", "Members"],
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={bannerImg}
          alt="Institution’s Innovation Council"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Institution’s Innovation Council (IIC)
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Content */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Introduction
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <b>Indira College of Engineering and Management</b> has established
            the <b>Institution’s Innovation Council (ICEM - IIC)</b> under the
            guidelines of the Ministry of Education’s Innovation Cell (MIC) to
            promote innovation and entrepreneurship at the institute level.
          </p>

          <p className="text-gray-700 mb-4">
            <b>Establishment Year:</b> December 2021
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Objective of ICEM – IIC
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            To encourage, inspire and nurture young minds of students by
            supporting them to work with new ideas and transform them into
            prototypes as well as products, thus creating a vibrant local
            innovation ecosystem within the institute.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            Functions of ICEM – IIC
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
            <li>
              Conduct various innovation and entrepreneurship-related activities
              prescribed by the Ministry of Education’s Innovation Cell.
            </li>
            <li>
              Mentor, identify, and reward innovations, while sharing success
              stories.
            </li>
            <li>
              Organize periodic workshops, seminars, and interactions with
              entrepreneurs, investors, and professionals to create a mentor
              pool for student innovators.
            </li>
            <li>
              Highlight innovative projects carried out by institution’s faculty
              and students.
            </li>
            <li>
              Conduct idea competitions, business plan competitions, mini
              challenges, and hackathons with active industry involvement.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-secondary mb-3">
            ICEM – IIC Team
          </h3>
          <p className="text-gray-700 mb-4">
            The team consists of the following members:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-gray-800">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-center">Sr. No.</th>
                  <th className="border p-2">Name of Member</th>
                  <th className="border p-2">Position assigned in IIC</th>
                </tr>
              </thead>
              <tbody>
                {iicTeam.map(([sr, name, pos]) => (
                  <tr key={sr} className="odd:bg-white even:bg-gray-50">
                    <td className="border p-2 text-center">{sr}</td>
                    <td className="border p-2">{name}</td>
                    <td className="border p-2">{pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Certificates Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 mt-6">
            <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 shadow-sm text-center">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Establishment Certificate
              </h4>
              <a
                href={establishmentCert}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Certificate
              </a>
            </div>

            <div className="border border-gray-200 bg-gray-50 rounded-lg p-5 shadow-sm text-center">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                IIC Rating Certificate 2023–24
              </h4>
              <a
                href={iicRatingCert}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar Links */}
          <ul className="space-y-4 mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 cursor-pointer transition-all duration-300 hover:underline"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-tertiary p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4 text-secondary">
              GET IN TOUCH WITH US
            </h3>
            <form className="space-y-3 modal-form">
              <input
                type="text"
                placeholder="YOUR NAME*"
                className="w-full p-2 text-black rounded"
              />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2 text-black">🇮🇳</span>
                <input
                  type="text"
                  placeholder="PHONE NUMBER*"
                  className="w-full p-2 text-black rounded-r"
                />
              </div>
              <input
                type="email"
                placeholder="YOUR EMAIL ID"
                className="w-full p-2 text-black rounded"
              />
              <select className="w-full p-2 text-black rounded">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input
                type="text"
                placeholder="STATE"
                className="w-full p-2 text-black rounded"
              />
              <p className="text-xs text-gray-300">
                By providing your contact details, you agree to receive updates
                from Indira College through WhatsApp.
              </p>
              <button
                type="submit"
                className="w-full bg-secondary text-white font-semibold py-2 rounded hover:bg-white hover:text-[#003c84] transition-colors duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-secondary font-bold mb-4 border-t border-white/30 pt-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm hover:text-tertiary cursor-pointer transition"
                >
                  <span className="text-secondary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IIC;
