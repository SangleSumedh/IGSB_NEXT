"use client";

import React from "react";
import { Check, Phone, ChevronDown, Quote } from "lucide-react";

export default function FormSection() {
  return (
    <section className="relative w-full ">
      {/* ================= GRID WRAPPER ================= */}
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] ">
        {/* ================= LEFT EMPTY / SPACER ================= */}
        <div className="hidden md:block" />

        {/* ================= RIGHT COLUMN ================= */}
        <div className="bg-[#0f3640] px-6 md:px-16 py-12 flex items-center">
          <div className="max-w-3xl ml-auto">
            {/* Quote */}
            <Quote
              size={32}
              className="text-[#ff885b] rotate-180 mb-6"
              fill="currentColor"
            />
            <p className="text-white text-2xl italic text-center leading-relaxed">
              Every risk is worth taking as long as it’s for a good cause and
              contributes to a good life.
            </p>
            <div className="flex justify-end mt-6">
              <Quote size={32} className="text-[#ff885b]" fill="currentColor" />
            </div>

            {/* Info Card */}
            <div className="relative mt-16">
              <div className="absolute -top-12 left-8 w-24 h-24 rounded-full bg-gray-300 border-4 border-white" />

              <div className="bg-[#3aafa9] rounded-3xl px-8 py-4 pt-16 text-lg text-white shadow-xl">
                <p className="mb-4">
                  The MBA in Finance at IGSB prepares students for analytical,
                  decision-driven roles in the financial ecosystem. The
                  curriculum emphasizes financial management, corporate finance,
                  financial modelling, investment analysis, risk management, and
                  strategic financial decision-making, aligned with real-word
                  business scenarios.
                </p>
                <p>
                  Students gain exposure to capital markets, valuation,
                  budgeting, compliance, fintech fundamentals, enabling them to
                  contribute effectively in corporate finance, banking,
                  consulting, investment analysis, and financial strategy roles
                  across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FLOATING FORM ================= */}
      <div
        className="
          relative md:absolute
          md:left-[5%]
          md:top-1/2
          md:-translate-y-1/2
          w-full max-w-xl
          px-6 md:px-0
          z-20
        "
      >
        <div className="bg-[#ff885b] text-white rounded-xl shadow-2xl px-16 py-8">
          <h2 className="text-2xl md:text-4xl text-center font-bold mb-6">
            Admission Form
          </h2>

          <form className="space-y-4">
            <h2 className="text-lg font-bold">Personal Information: </h2>
            <input
              className="w-full px-3 py-2 rounded text-gray-800"
              placeholder="Name"
            />

            <div className="flex gap-3">
              <input
                className="w-1/2 px-3 py-2 rounded text-gray-800"
                placeholder="Email"
              />
              <input
                className="w-1/2 px-3 py-2 rounded text-gray-800"
                placeholder="Phone"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Distance in (Kilometer)</span>
                <span>500</span>
              </div>
              <input type="range" className="w-full accent-white" />
            </div>

            <div className="flex gap-3">
              <div className="relative w-1/2">
                <select className="w-full p-3 rounded text-gray-600 appearance-none">
                  <option>Course</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative w-1/2">
                <select className="w-full p-3 rounded text-gray-600 appearance-none">
                  <option>Specialization</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button className="w-full bg-[#1a2e35] py-3 rounded-md flex items-center justify-between px-5 font-semibold">
              <span className="flex-1 text-center">Talk to us</span>
              <span className="bg-white p-1 rounded">
                <Check className="text-[#1a2e35]" />
              </span>
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="font-semibold flex justify-center items-center gap-2">
              Or Give us a call <Phone size={18} /> To be added
            </p>
            <p className="text-sm opacity-90">
              The Support Centre is Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
