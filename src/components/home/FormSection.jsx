"use client";

import React from "react";
import { Check, Phone, ChevronDown, Quote } from "lucide-react";

export default function FormSection() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[800px] flex flex-col md:block bg-white">
      {/* ================= BACKGROUND GRID WRAPPER ================= */}
      {/* Mobile: Flex order-2 (Bottom). 
          MD: Grid 35/65 ratio. 
          XL: Grid 30/70 ratio. 
      */}
      <div className="order-2 md:order-none grid grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[30%_70%] h-full min-h-[600px]">
        {/* ================= LEFT EMPTY / SPACER ================= */}
        <div className="hidden md:block bg-white" />

        {/* ================= RIGHT COLUMN (Teal Gradient) ================= */}
        <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] px-6 md:px-12 lg:px-16 py-16 md:py-20 flex items-center justify-center md:justify-end">
          <div className="max-w-3xl w-full">
            {/* Quote Section */}
            <div className="flex flex-col items-center text-center">
              <Quote
                size={32}
                className="text-[#ff885b] rotate-180 mb-6"
                fill="currentColor"
              />
              <p className="text-white text-xl md:text-2xl italic leading-relaxed">
                Every risk is worth taking as long as it’s for a good cause and
                contributes to a good life.
              </p>
              <div className="w-full flex justify-end mt-6">
                <Quote
                  size={32}
                  className="text-[#ff885b]"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* Info Card Section */}
            <div className="relative mt-16 md:ml-12 lg:ml-20">
              {/* Profile Image Placeholder */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:-left-12 md:translate-x-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300 border-4 border-white z-10" />

              <div className="bg-[#3aafa9] rounded-3xl px-6 md:px-8 py-8 pt-12 md:pt-6 md:pl-16 text-white text-base md:text-lg shadow-xl relative z-0 mt-10 md:mt-0">
                <p className="mb-4">
                  The MBA in Finance at IGSB prepares students for analytical,
                  decision-driven roles in the financial ecosystem. The
                  curriculum emphasizes financial management, corporate finance,
                  financial modelling, investment analysis, risk management, and
                  strategic financial decision-making.
                </p>
                <p>
                  Students gain exposure to capital markets, valuation,
                  budgeting, compliance, fintech fundamentals, enabling them to
                  contribute effectively in corporate finance, banking, and
                  consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING FORM ================= */}
      {/* Mobile: Order-1 (Top), Relative, Full Width.
          MD: Absolute, Centered Vertically, Left 2%.
          XL: Left 8%, Wider Max-Width.
      */}
      <div
        className="
          order-1 md:order-none
          relative md:absolute
          z-20
          w-full 
          md:w-[500px] lg:w-[550px] xl:w-[600px]
          md:top-1/2 md:-translate-y-1/2
          md:left-[2%] lg:left-[5%] xl:left-[8%]
          p-4 md:p-0
        "
      >
        <div className="bg-[#ff885b] text-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-12">
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-6">
            Admission Form
          </h2>

          <form className="space-y-4">
            <h2 className="text-lg font-bold">Personal Information:</h2>
            <input
              className="w-full px-4 py-3 rounded text-gray-800 focus:outline-none"
              placeholder="Name"
            />

            {/* Stacks on mobile, Row on Tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="w-full sm:w-1/2 px-4 py-3 rounded text-gray-800 focus:outline-none"
                placeholder="Email"
              />
              <input
                className="w-full sm:w-1/2 px-4 py-3 rounded text-gray-800 focus:outline-none"
                placeholder="Phone"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>Distance in (Kilometer)</span>
                <span>500</span>
              </div>
              <input
                type="range"
                className="w-full accent-white cursor-pointer"
              />
            </div>

            {/* Stacks on mobile, Row on Tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:w-1/2">
                <select className="w-full p-3 rounded text-gray-600 appearance-none focus:outline-none bg-white">
                  <option>Course</option>
                  <option>MBA</option>
                  <option>BBA</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>

              <div className="relative w-full sm:w-1/2">
                <select className="w-full p-3 rounded text-gray-600 appearance-none focus:outline-none bg-white">
                  <option>Specialization</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#1a2e35] hover:bg-[#122126] transition-colors py-3 rounded-md flex items-center justify-between px-5 font-semibold mt-4"
            >
              <span className="flex-1 text-center">Talk to us</span>
              <span className="bg-white p-1 rounded">
                <Check className="text-[#1a2e35]" size={16} />
              </span>
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="font-semibold flex justify-center items-center gap-2">
              Or Give us a call <Phone size={18} fill="currentColor" /> +91
              0000000000
            </p>
            <p className="text-xs md:text-sm opacity-90 mt-1">
              The Support Centre is Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
