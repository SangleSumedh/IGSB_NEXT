"use client";

import React from "react";
import Image from "next/image";

export default function NISMPage() {
  return (
    <section className="w-full bg-slate-50 py-16 text-slate-800">
      {/* Added max-w-6xl to prevent text from stretching too wide while keeping your px-4/8 */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-left mb-10 ">
          <h1 className="text-2xl lg:text-4xl text-center md:text-left font-bold text-slate-900 leading-tight">
            Indira Global School of Business becomes Institutional Member of
            <span className="text-secondary block md:inline">
              {" "}
              NHRD Network
            </span>
          </h1>
        </div>

        {/* Content Section - Using a grid layout to balance the page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Container */}
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-slate-700 text-justify">
            <p className="">
              Indira Global School of Business (IGSB) proudly announces its
              institutional membership with the National HRD Network (NHRDN) —
              India’s premier association of Human Resource Development
              professionals. This membership, valid for the next ten years,
              marks a significant milestone in IGSB’s ongoing commitment to
              fostering academic excellence, industry collaboration, and
              professional development in the field of Human Resource
              Management.
            </p>

            <p>
              Through this long-term association, IGSB joins a vibrant community
              of HR leaders, academicians, and practitioners dedicated to
              advancing learning and leadership practices across the country.
              The partnership opens new avenues for our faculty and students to
              engage in knowledge-sharing platforms, industry dialogues,
              research collaborations, and skill-enhancement initiatives driven
              by NHRDN.
            </p>

            <p className="f">
              This institutional membership reinforces IGSB’s vision of bridging
              the gap between management education and industry expectations,
              ensuring our learners gain access to the most contemporary HR
              insights.
            </p>
          </div>

          {/* Image Wrapper - Positioned to the side on desktop to fill empty space */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white p-2">
              <Image
                src="/IGSB/associations/nhrd.png"
                alt="NHRD Association"
                width={800}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
                priority
              />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Official Institutional Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
