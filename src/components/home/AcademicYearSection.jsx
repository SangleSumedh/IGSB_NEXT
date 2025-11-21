"use client";

import React from "react";
import ProgramList from "./ProgramList";
import ApplyForm from "./ApplyForm";

const AcademicYearSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 
          lg:grid-cols-2 
          gap-12
          px-4 sm:px-6 lg:px-0
        "
      >
        {/* LEFT: Program List (50%) */}
        <div className="w-full">
          <ProgramList />
        </div>

        {/* RIGHT: Apply Form (50%) */}
        <div className="w-full">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
};

export default AcademicYearSection;
