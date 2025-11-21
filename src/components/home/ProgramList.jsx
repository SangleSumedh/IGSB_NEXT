"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramList = () => {
  const programs = [
    { name: "Computer Engineering", link: "/programs/computer-engineering" },
    { name: "Mechanical Engineering", link: "/programs/mechanical-engineering" },
    { name: "Artificial Intelligence and Data Science", link: "/programs/ai-ds" },
    { name: "Electronics and Telecommunication", link: "/programs/entc" },
    { name: "First Year Engineering", link: "/programs/fye" },
    { name: "Information Technology", link: "/programs/it" },
    { name: "Integrated MBA (BBA + MBA)", link: "/programs/imba" },
    { name: "Integrated MCA (BCA + MCA)", link: "/programs/imca" },
    { name: "MBA", link: "/programs/mba" },
    { name: "MCA", link: "/programs/mca" },
    { name: "M-Tech in Mechanical Engineering", link: "/programs/mtech-mech" },
    { name: "M-Tech in Computer Science", link: "/programs/mtech-comp" },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg p-4 sm:p-8 shadow-sm border border-gray-200">
      {/* ✅ Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        ACADEMIC <span className="text-secondary">
  YEAR 2026
</span>

      </h2>

      {/* ✅ Program Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 text-gray-800 mb-8">
        {programs.map((item, index) => (
          <p key={index} className="flex items-start text-sm sm:text-base">
            <span className="text-secondary mr-2 font-bold">›</span>
            <Link
              href={item.link}
              className="hover:underline cursor-pointer hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </p>
        ))}
      </div>

      {/* ✅ Academic Image */}
      <div className="mt-4">
        <Image
          src="/academic.jpg" // Place this image in your public folder
          alt="Academic"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow-md object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ProgramList;
