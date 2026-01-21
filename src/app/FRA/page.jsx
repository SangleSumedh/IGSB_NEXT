import React from "react";

function page() {
  const fraDocs = [
    {
      title: "Fees Approval for Academic Year 2026-27",
      file: "/Fees-Approval-for-Academic-Year-2026-27.pdf",
    },
    {
      title: "FRA – Fee Structure",
      file: "/Fees Details on Website as per the FRA format.pdf",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      {/* Page Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
        Fees Regulating Authority (FRA)
      </h1>

      {/* Cards Grid */}
      <div className="space-y-4 max-w-3xl">
        {fraDocs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md px-5 py-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-gray-800 font-semibold text-sm md:text-base">
              {item.title}
            </p>

            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200"
            >
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
