"use client";

import React, { useState } from "react";
import { culturalEvents } from "@/static/campuslife/cultural-events";

export default function CulturalEvents() {
  const [openIndex, setOpenIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-semibold text-secondary mb-4">
        Cultural Activities
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        ICEM conducts various cultural activities and celebrations throughout
        the academic year, promoting creativity, engagement, and unity among
        students. These events showcase talent, strengthen collaboration, and
        enrich campus life with vibrant traditions and themes.
      </p>

      <h3 className="text-xl font-semibold text-secondary mb-4">
        Cultural Event Reports & Documents
      </h3>

      <div className="space-y-2">
        {culturalEvents.map((event, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-out"
            >
              <span className="font-medium text-gray-800 text-left">
                {event.title}
              </span>
              <span className="text-xl font-bold text-gray-600 transition-transform duration-300 ease-out ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-6 bg-white border-t border-gray-200 animate-fade-in">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Event Image with proper dimensions */}
                  {event.imageLink && (
                    <div className="flex-shrink-0">
                      <img
                        src={event.imageLink}
                        alt={event.title}
                        className="w-full md:w-[365px] h-[244px] object-cover rounded-lg shadow-sm transition-transform duration-500 ease-out hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    {/* Description with Read More */}
                    <div className="mb-4">
                      <p
                        className={`text-gray-700 text-sm leading-relaxed transition-all duration-500 ease-in-out ${
                          expanded === index
                            ? "line-clamp-none"
                            : "line-clamp-4"
                        }`}
                      >
                        {event.description}
                      </p>

                      <button
                        onClick={() =>
                          setExpanded(expanded === index ? null : index)
                        }
                        className="text-primary text-sm mt-2 font-medium hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-flex items-center"
                      >
                        {expanded === index ? "Read Less" : "Read More"}
                        <span
                          className={`ml-1 transition-transform duration-300 ${
                            expanded === index ? "rotate-180" : ""
                          }`}
                        >
                          ↓
                        </span>
                      </button>
                    </div>

                    {/* View Document (only if file exists) */}
                    {event.file && (
                      <a
                        href={event.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-tertiary transition-all duration-300 ease-out transform hover:scale-105 font-medium text-sm"
                      >
                        View Document
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
