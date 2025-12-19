import React from "react";
import Image from "next/image";
import StudentCertification from "@/components/CampusLife/StudentCertification";

export default function StudentCertificationPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-certifications/student-certification-banner.jpg"
          alt="Student Engagement Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Page Content */}
      <div className=" px-4 md:px-8 py-12">
        <StudentCertification />
      </div>
    </div>
  );
}
