"use client";

import { useState } from "react";
import { Target, Users, ChevronDown, ChevronUp } from "lucide-react";

// 1. Reusable Card Component to handle "Read More" logic
const InfoCard = ({ title, icon: Icon, text, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to wrap specific text in bold
  const formatText = (text) => {
    const parts = text.split(
      /(foundational training|industry-recognised Professional Certifications)/gi,
    );

    return parts.map((part, index) => {
      if (
        part.toLowerCase() === "foundational training" ||
        part.toLowerCase() === "industry-recognised professional certifications"
      ) {
        return (
          <strong key={index} className="font-bold text-secondary">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white
      p-6
      text-secondary transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
      flex items-start gap-6 border-secondary/50 border-2"
    >
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 relative z-10">
        {/* Header */}
        <div className="flex items-center mb-3">
          <div className="bg-gradient-to-r from-[#f15a24] to-orange-500 p-2 rounded-lg mr-3 shadow-md">
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>

        {/* Body Text with bold highlights */}
        <div className="relative text-justify leading-snug">
          <p>{formatText(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default function CASsection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-10 px-4">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-strech h-full">
          {/* IRP Card */}
          <InfoCard
            title="Industry Readiness Programme"
            icon={Users}
            text="The Industry Readiness Programme (IRP) is a foundational training initiative designed to prepare students for entry into the corporate world. By building core professional skills, business fundamentals, and workplace awareness, IRP bridges the gap between classroom education and industry expectations, ensuring job readiness from the outset."
          />

          {/* CENTER — 360 ICON (clean white space) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-55 h-55 flex items-center justify-center bg-white rounded-full ">
              <img
                src="/placement/3601.png"
                alt="360 Degree Development"
                className="w-55 h-55 object-contain"
              />
            </div>
          </div>

          {/* CLDP Card */}
          <InfoCard
            title="Career Leadership Development Programme"
            icon={Target}
            text="The Career Leadership Development Programme (CLDP) accelerates MBA careers through specialised training and industry-recognised Professional Certifications. Focused on professional credibility and leadership readiness, CLDP prepares students for advanced corporate and managerial roles."
          />
        </div>
      </div>
    </section>
  );
}
