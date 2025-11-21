"use client";

import React from "react";
import { annualFests } from "@/static/campuslife/annual_fests";
import ImageSlider from "@/components/CampusLife/ImageSlider";

export default function AnnualFest() {
  return (
    <div className="space-y-16">

      {/* PAGE HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary drop-shadow-sm">
          Annual Festivals & Celebrations
        </h1>
        <p className="text-gray-600 mt-3 mx-auto text-lg">
          A glimpse into ICEM's vibrant and colorful cultural celebrations
          conducted throughout the academic year.
        </p>
      </div>

      {/* FEST SECTIONS */}
      {annualFests.map((fest, idx) => (
        <div
          key={idx}
          className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
        >
          {/* Fest Title */}
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            {fest.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {fest.description}
          </p>

          {/* Image Slider */}
          <ImageSlider images={fest.images} />
        </div>
      ))}
    </div>
  );
}
