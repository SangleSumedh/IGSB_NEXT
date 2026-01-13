import React from "react";
import Image from "next/image";
import StudentInduction from "@/components/CampusLife/StudentInduction";

export default function StudentInductionPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      
      {/* Page Content */}
      <div className="max-w-full mx-auto px-4 md:px-8 py-12">
        <StudentInduction />
      </div>
    </div>
  );
}
