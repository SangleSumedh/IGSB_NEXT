import React from "react";

function page() {
  const reports = [
    {
      title: "AICTE EOA Report- 2025-26 (IGSB)",
      file: "/AICTE EOA - Approval Process A.Y. 2025-26.pdf",
      type: "pdf",
    },
    {
      title: "AICTE EOA Report- 2024-25 (IGSB)",
      file: "/2 AICTE EOA Report-2023-24 (IGSB).pdf",
      type: "pdf",
    },
    {
      title: "AICTE EOA Report- 2023-24 (IGSB)",
      file: "/2 AICTE EOA Report-2023-24 (IGSB).pdf",
      type: "pdf",
    },
    {
      title: "AICTE Merger Report-2023-24",
      file: "/3 AICTE Closure of Merger Report-2023-24 (IGBS).pdf",
      type: "pdf",
    },
    {
      title: "AICTE - LOA Report 2022-2023 (ICMS)",
      file: "/1. AICTE - LOA Report 2022-2023 (ICMS).pdf",
      type: "pdf",
    },

    // ✅ NEW VIDEO CARD
    {
      title: "IGSB Infrastructure Video (30 mins)",
      file: "https://shreechanakya-my.sharepoint.com/personal/solomon_gaikwad_indiraigsb_edu_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsolomon_gaikwad_indiraigsb_edu_in%2FDocuments%2FIGSB%20Photos%2FIGSB%2030%20Mins%20Infra%2Emp4",
      type: "video",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
        AICTE Approvals & Reports
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md px-5 py-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-gray-800 font-semibold text-sm md:text-base mb-4">
              {item.title}
            </p>

            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200"
            >
              {item.type === "video" ? "Watch Video" : "View / Download"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
