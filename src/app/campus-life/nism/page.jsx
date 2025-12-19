"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Award, Users, GitCommitHorizontal } from "lucide-react";

const images = [
  "/IGSB/nism/nism1.jpeg",
  "/IGSB/nism/nism2.jpeg",
  "/IGSB/nism/nism3.jpeg",
  "/IGSB/nism/nism4.jpeg",
];

const certifications = [
  {
    batch: "2020-22",
    name: "Kiran Dalvi",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Mayuri Kanfade",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Prasad Moharir",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Rishikesh Wagh",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Sakshi Shetye",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2020-22",
    name: "Vijaykumar Patil",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2019-21",
    name: "Vikas Gupta",
    series: "V-A",
    cert: "Mutual Fund Distributors",
  },
  {
    batch: "2019-21",
    name: "Vikas Gupta",
    series: "X-II",
    cert: "Securities Markets Foundation",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "XV",
    cert: "Research Analyst",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "X-A",
    cert: "Investment Adviser (Level 1)",
  },
  {
    batch: "2019-21",
    name: "Shubham Sanap",
    series: "X-B",
    cert: "Investment Adviser (Level 2)",
  },
];

const workshops = [
  "Advance Excel and Financial Modeling",
  "Seminar: Investing in Recovery - Challenges & Opportunities",
  "The Pocket Money Program",
  "Personal Finance Workshop for Class IV employees",
  "e-chai (Panel Discussion)",
  "Customized Training Programmes",
];

export default function NISMPage() {
  return (
    <section className="w-full bg-slate-50 py-16 text-slate-800">
      <div className=" px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Inauguration of
            <span className="text-secondary block md:inline">
              {" "}
              NISM Guidance Centre
            </span>
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            Empowering students with industry-relevant financial expertise.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: Content + Dignitaries + Certifications */}
          <div className="lg:col-span-7 space-y-10">
            {/* Introduction Text */}
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 text-justify">
              <p className="">
                The Indian Securities Market has witnessed tremendous growth.
                With rising economic activity, the market offers rewarding
                career opportunities in mutual fund distribution, stock broking,
                and allied sectors.
              </p>

              <p className="bg-white p-6 rounded-xl border-l-4 border-slate-200 shadow-sm font-medium italic text-slate-800">
                "The IGSB NISM Guidance Centre intends to offer certification
                programs like associate programs alongside the regular
                curriculum to make students job-ready."
              </p>

              <p>
                These certifications serve as a value addition to resumes,
                providing preference during shortlisting and increasing
                awareness of real industry practices. The programs are delivered
                by a mix of experienced internal faculty and external industry
                experts.
              </p>
            </div>

            {/* Dignitaries Section */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-slate-900">
                <Users className="w-5 h-5 text-secondary" />
                Dignitaries
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                With the blessings of Chairperson{" "}
                <span className="font-semibold text-slate-900">
                  Dr. Tarita Shankar
                </span>{" "}
                and Group Director{" "}
                <span className="font-semibold text-slate-900">
                  Prof. Chetan Wakalkar
                </span>
                , the centre was inaugurated by{" "}
                <span className="font-semibold text-slate-900">
                  Mr. Prashant Utreja
                </span>{" "}
                (CHRO, Reliance Capital).
              </p>
            </div>

            {/* Student Certifications Table */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
                <Award className="w-6 h-6 text-secondary" />
                <h2 className="text-xl font-bold text-slate-900">
                  Student Certifications
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Batch</th>
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Series</th>
                      <th className="px-6 py-4">Certification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {certifications.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                          {row.batch}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                          {row.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {row.series}
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary font-medium">
                          {row.cert}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (Workshops + Gallery) */}
          <div className="lg:col-span-5 space-y-8 sticky top-8">
            {/* Workshops Card */}
            <div className="bg-secondary text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Planned Workshops</h3>
              </div>
              <ul className="space-y-3">
                {workshops.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-100 text-sm leading-snug"
                  >
                    <GitCommitHorizontal className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-1">
                Event Gallery
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-md border-2 border-white group"
                  >
                    <Image
                      src={src}
                      alt={`NISM Event ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted Quote/Footer for Sidebar */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500 text-center font-medium">
                IGSB NISM Guidance Centre: Bridging the gap between education
                and industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
