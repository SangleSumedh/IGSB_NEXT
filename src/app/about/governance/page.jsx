"use client";
import { useState } from "react";
import Image from "next/image";
import { researchConsultancyCommittee } from "@/static/Governance/ResearchConsultancy";
import { boardOfGovernors } from "@/static/Governance/BOG";
import statutoryCommittees from "@/static/Governance/statutory.json";
import institutionalCommittees from "@/static/Governance/institutional.json";

export default function GovernanceAndCommittees() {
  const [activeTab, setActiveTab] = useState("governance");
  const [activeCommitteeTab, setActiveCommitteeTab] = useState("statutory"); // Sub-tab state

  // Tab configuration
  const tabs = [
    { id: "governance", label: "Governance" },
    { id: "committees", label: "Committees" },
    // { id: "cells", label: "Cells" },
    // { id: "iic", label: "IIC" },
    { id: "research", label: "Research & Consultancy" },
  ];

  /* ========================================================
      ✅ ALL COMMITTEE DATA ARRAYS
  ======================================================== */
  // Old data removed in favor of imports from static files.




  /* ========================================================
      ✅ REUSABLE TABLE RENDER FUNCTION
  ======================================================== */
  const renderTable = (headers, rows) => (
    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
      <table className="min-w-full border-collapse text-center text-gray-800">
        <thead>
          <tr className="bg-secondary text-white">
            {headers.map((h, i) => (
              <th key={i} className="border px-4 py-3 text-sm md:text-base">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 transition-colors">
              {Object.values(r).map((val, j) => (
                <td key={j} className="border px-4 py-3 text-sm md:text-base">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /* ========================================================
      ✅ RENDER CONTENT BASED ON ACTIVE TAB
  ======================================================== */
  const renderContent = () => {
    switch (activeTab) {
      case "governance":
        return (
          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Board of Governors
            </h2>
            <p className="text-gray-600 text-md md:text-lg mb-8">
              Strategic leadership committee guiding our institution's vision and policies
            </p>
            {renderTable(
              ["Sr.No", "Name of the Member", "Role", "Representation"],
              boardOfGovernors
            )}
          </section>
        );

      case "committees":
        const currentData = activeCommitteeTab === "statutory" ? statutoryCommittees : institutionalCommittees;

        // Committees to exclude as they are now on their own page
        const excludedCommittees = [
          "Grievance Redressal Committee - Student",
          "Anti-Ragging Committee",
          "Anti-Ragging Squad",
          "Students Welfare Council",
          "Student Counsellor",
          "Event Committee",
          "Hostel Committee",
        ];

        // Filter out excluded committees
        const filteredData = currentData.filter(
          (committee) => !excludedCommittees.includes(committee.name)
        );

        return (
          <div className="space-y-8">
            {/* Sub-Tabs for Committees */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveCommitteeTab("statutory")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCommitteeTab === "statutory"
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Statutory Committees
              </button>
              <button
                onClick={() => setActiveCommitteeTab("institutional")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCommitteeTab === "institutional"
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Institutional Committees
              </button>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {filteredData.map((committee, index) => {
                const headers =
                  committee.members.length > 0
                    ? Object.keys(committee.members[0]).map((key) => {
                        if (key === "sr_no") return "Sr.No";
                        if (key === "name_of_member") return "Name of the Member";
                        if (key === "mobile_number") return "Mobile Number";
                        if (key === "role") return "Role";
                        if (key === "representation") return "Representation";
                        if (key === "designation") return "Designation";
                        return key.charAt(0).toUpperCase() + key.slice(1);
                      })
                    : [];

                return (
                  <section key={index}>
                    <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
                      {committee.name}
                    </h2>
                    {renderTable(headers, committee.members)}
                  </section>
                );
              })}
            </div>
          </div>
        );

      /* ========================================================
          ❌ COMMENTED OUT TABS
      ======================================================== */
      // case "cells": return ( ... );
      // case "iic": return ( ... );

      case "research":
        return (
          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Research and Consultancy Committee
            </h2>
            {renderTable(
              ["Sr.No", "Name of the Member", "Role", "Designation"],
              researchConsultancyCommittee
            )}
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Gradient Heading Section */}
     <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
  <div className="container mx-auto px-6 xl:px-16 text-center">
    {/* Main heading with animation */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-fade-up">
      Governance & Committees
    </h1>

    {/* Accent divider with animation */}
    <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white animate-fade-up animation-delay-100" />

    {/* Description with animation */}
    <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
      Comprehensive framework of leadership, committees, and cells guiding our institution
    </p>
  </div>
</div>

      {/* Tab Navigation */}
      <div className="px-6 xl:px-16 py-6 bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-6 xl:px-16 py-8 xl:py-12">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}