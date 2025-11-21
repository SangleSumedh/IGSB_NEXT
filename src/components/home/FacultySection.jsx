"use client";

import React from "react";

const FacultySection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Faculty, Our Strength
        </h2>

        <p className="text-gray-700 text-lg max-w-6xl leading-relaxed mb-10">
          Indira College of Engineering & Management's faculty combines academic
          rigor with real-world expertise, guiding students to think critically
          and creatively. Alongside our accomplished professors, we host
          distinguished guest faculty, including industry leaders and global
          experts, who bring fresh perspectives and practical insights.
          Together, they ensure learning is dynamic, relevant, and prepares
          students for future success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
              >
                [ Image {index + 1} Here ]
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FacultySection;
