import React from "react";
import Image from "next/image";

function Grievance() {
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

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        {/* Use Image component or normal img */}
        <Image
          src="/BannerOverviewPage.jpg" // placed in public folder
          alt="ICEM Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Grievance Redressal Committee
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About the Grievance Redressal Committee
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In accordance with the regulations laid down by AICTE / UGC / SPPU
            for addressing grievances of students and other stakeholders in a
            technical institution, the <b>Grievance Redressal Committee</b> of{" "}
            <b>Indira College of Engineering and Management (ICEM), Pune</b> has
            been constituted. The committee comprises the following faculty and
            staff members, designated to examine the nature and extent of
            grievances and ensure fair redressal.
          </p>

          <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">
            Objectives:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              To establish a structured and responsive mechanism for addressing
              and resolving grievances of students and other stakeholders.
            </li>
            <li>
              To investigate and understand the reasons behind dissatisfaction.
            </li>
            <li>
              To provide timely, impartial, and effective solutions to
              grievances in order to create a harmonious learning environment.
            </li>
          </ul>

          <p className="text-primary font-semibold mt-6">
            Link:{" "}
            <a
              href="https://forms.office.com//pages/responsepage.aspx?id=amfOdG6qwUG8MfgOI9Bgzsr9cGTIHG5IhrnpAKVhmZ1UMzBQTUJTTElBWjRJWEdaRjZaUVNFQTk1Sy4u&fromie=true"
              className="underline hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Grievance Registration
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          {/* Sidebar Links */}
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li
                key={index}
                className="pb-2 border-b border-white/30 hover:text-tertiary cursor-pointer transition-all hover:underline"
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

export default Grievance;
