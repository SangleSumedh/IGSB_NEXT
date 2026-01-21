import React from "react";

function page() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-10 ">
      {/* Page Title */}
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Inter-Se-Merit List for ILS & ACAP Admission for A.Y. 2025-26
      </h1>

      {/* List Container */}
      <div className="space-y-4 max-w-3xl">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-gray-200 rounded-md px-4 py-3 shadow-sm">
          <p className="text-gray-800 font-medium">
            Inter-Se-Merit List for (ACAP) for A.Y. 2025-26
          </p>

          <a
            href="/MeritList1AY2526.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200"
          >
            View / Download
          </a>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-gray-200 rounded-md px-4 py-3 shadow-sm">
          <p className="text-gray-800 font-medium">
            Inter-Se-Merit List for (ILS) for A.Y. 2025-26
          </p>

          <a
            href="/MeritList2AY2526.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200"
          >
            View / Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
