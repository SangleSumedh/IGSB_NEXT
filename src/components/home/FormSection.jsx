"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import ApplyForm from "./ApplyForm";

const commonText =
`The MBA in Finance at IGSB prepares students for analytical,
decision-driven roles in the financial ecosystem. The curriculum
emphasizes financial management, corporate finance, financial
modelling, investment analysis, risk management, and strategic
financial decision-making. Students gain exposure to capital markets,
valuation, budgeting, compliance, fintech fundamentals, enabling them
to contribute effectively in corporate finance, banking, and consulting.`;

const testimonials = [
  { name: "Amit Kulkarni", branch: "MBA – Finance", image: "/boy.png" },
  { name: "Sneha Patil", branch: "MBA – Marketing", image: "/boy.png" },
  { name: "Rahul Deshmukh", branch: "MBA – Business Analytics", image: "/boy.png" },
  { name: "Pooja Sharma", branch: "MBA – Human Resource Management", image: "/boy.png" },
  { name: "Kunal Mehta", branch: "MBA – Operations & Supply Chain", image: "/boy.png" },
];

export default function FormSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section className="relative w-full min-h-screen md:min-h-[880px] bg-white overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-[80%_20%] min-h-[880px]">

        {/* LEFT COLUMN */}
        <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71]
          px-6 md:px-12 lg:px-16 py-20 flex items-center justify-center">

          <div className="max-w-4xl w-full flex flex-col items-center">

            {/* QUOTE */}
            <div className="max-w-3xl mb-14 text-center">
              <p className="text-white text-2xl md:text-3xl italic leading-relaxed font-['baskerville-bt']">
                Every risk is worth taking as long as it’s for a good cause and
                contributes to a good life.
              </p>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="relative w-full max-w-3xl">

              {/* AVATAR */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2
                w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white
                z-10 overflow-hidden bg-white">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CARD */}
              <div className="bg-[#3aafa9] rounded-[32px]
                px-8 md:px-12 py-10 pt-16 text-white shadow-2xl text-center">

                <h3 className="text-xl md:text-2xl font-bold">
                  {active.name}
                </h3>
                <p className="text-sm md:text-base opacity-90 mb-4">
                  {active.branch}
                </p>

                <p className="mt-3 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {commonText}
                </p>

                {/* CONTROLS */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${
                          activeIndex === i ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-white" />
      </div>

      {/* FLOATING FORM */}
      <div
        className="
          absolute z-20 w-full
          md:w-[480px] lg:w-[520px] xl:w-[580px]
          top-0 md:top-1/2 md:-translate-y-1/2
          right-0 md:right-[2%] lg:right-[5%] xl:right-[8%]
          p-4 md:p-0
        "
      >
        <div className="bg-[#ff885b] text-white rounded-xl shadow-2xl
          p-5 md:p-8 lg:p-10">

          <h2 className="text-2xl md:text-4xl text-center font-bold mb-6">
            Admission Form
          </h2>

          <ApplyForm variant="modal" />

          <div className="text-center mt-6">
            <p className="font-semibold flex justify-center items-center gap-2">
              Or Give us a call <Phone size={18} /> +91 0000000000
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
