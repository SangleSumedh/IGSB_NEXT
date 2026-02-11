"use client";

import React from "react";
import statutoryCommittees from "@/static/Governance/statutory.json";
import institutionalCommittees from "@/static/Governance/institutional.json";

export default function StudentCommittees() {
  // Define the list of committees to display
  const targetCommittees = [
    "Grievance Redressal Committee - Student",
    "Anti-Ragging Committee",
    "Anti-Ragging Squad",
    "Students Welfare Council",
    "Student Counsellor",
    "Event Committee",
    "Hostel Committee",
  ];

  // Combine both data sources
  const allCommittees = [...statutoryCommittees, ...institutionalCommittees];

  // Filter the data
  const committeesData = allCommittees.filter((c) =>
    targetCommittees.includes(c.name)
  );

  // Helper to sort committees according to the target list order
  const sortedCommittees = committeesData.sort(
    (a, b) => targetCommittees.indexOf(a.name) - targetCommittees.indexOf(b.name)
  );

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Gradient Heading Section */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          {/* Main heading with animation */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-fade-up">
            Student Committees
          </h1>

          {/* Accent divider with animation */}
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white animate-fade-up animation-delay-100" />

          {/* Description with animation */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Various committees and councils dedicated to student welfare, grievance redressal, and overall development
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-6 xl:px-16 py-8 xl:py-12">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-12">
          {sortedCommittees.map((committee, index) => {
            // Determine description based on committee name (optional customization)
            let description = "";
            switch (committee.name) {
              case "Grievance Redressal Committee - Student":
                description = "Committee dedicated to addressing and resolving student grievances";
                break;
              case "Anti-Ragging Committee":
                description = "Committee ensuring a safe and respectful campus environment free from ragging";
                break;
              case "Anti-Ragging Squad":
                description = "Vigilant squad actively monitoring and preventing ragging incidents on campus";
                break;
              case "Students Welfare Council":
                description = "Council focused on overall student development, activities, and welfare";
                break;
              case "Student Counsellor":
                description = "Professional counseling support for student mental health and well-being";
                break;
              case "Event Committee":
                description = "Committee organizing and managing various campus events and activities";
                break;
              case "Hostel Committee":
                description = "Committee overseeing hostel facilities and accommodations";
                break;
              default:
                description = "";
            }

             // Generate headers dynamically based on the first member's keys
            const headers =
            committee.members.length > 0
                ? Object.keys(committee.members[0]).map((key) => {
                    if (key === "sr_no") return "Sr.No";
                    if (key === "name_of_member") return "Name of the Member";
                    if (key === "mobile_number") return "Mobile Number";
                    if (key === "role") return "Role";
                    if (key === "representation") return "Representation";
                    if (key === "designation") return "Designation";
                    return key.charAt(0).toUpperCase() + key.slice(1); // Fallback for other keys
                })
                : [];


            return (
              <section key={committee.name} id={committee.name.replace(/\s+/g, '-').toLowerCase()} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
                    {committee.name === "Event Committee" ? "Events Committee" : committee.name}
                  </h2>
                  {description && (
                    <p className="text-gray-600 text-md md:text-lg mb-8">
                      {description}
                    </p>
                  )}
                </div>
                <CommitteeTable headers={headers} rows={committee.members} />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   TABLE COMPONENT (Generic)
============================================= */
function CommitteeTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
      <table className="min-w-full border-collapse text-center text-gray-800">
        <thead>
          <tr className="bg-secondary text-white">
            {headers.map((h, i) => (
              <th key={i} className="border px-4 py-3 text-sm md:text-base">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 transition-colors">
              {Object.values(row).map((val, i) => (
                <td key={i} className="border px-4 py-3 text-sm md:text-base">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}