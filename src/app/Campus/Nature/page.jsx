"use client";
import React from "react";

function FacilitiesPage() {
  return (
    <section className="relative bg-white">

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Academic Facilities
          </h2>
          <div className="mt-2 w-20 h-[2px] bg-yellow-400"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* LEFT LARGE IMAGE — PLACEHOLDER */}
          <div className="lg:col-span-2">
            <img
              src="/placeholder.jpeg"
              alt="Academic Facilities Placeholder"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* TOP IMAGE */}
            <img
              src="/facilities/classroom-students.jpg"
              alt="Students in classroom"
              className="w-full object-cover rounded-sm"
            />

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Classrooms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We have well-furnished and spacious classrooms with comfortable
                seating arrangements and modern facilities.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The classrooms are cleaned and sanitized every day. Its positive
                learning environment aids in the educational process.
              </p>
            </div>

            {/* BOTTOM IMAGE */}
            <img
              src="/placeholder.jpeg"
              alt="Smart Classroom"
              className="w-full object-cover rounded-sm"
            />
          </div>

        </div>
      </div>

      {/* YELLOW BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow-300 -z-10"></div>
    </section>
  );
}

export default FacilitiesPage;
