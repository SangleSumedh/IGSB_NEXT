"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import ApplyForm from "./ApplyForm";

const commonText = `The MBA in Finance at IGSB prepares students for analytical,
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
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* ================= XL AND ABOVE ================= */}
      <div className="hidden xl:grid grid-cols-[78%_22%] min-h-[600px]">

        {/* LEFT */}
        <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71]
          flex items-center justify-center px-20 py-8">

          <div className="max-w-[860px] w-full text-center">

            <p className="text-white text-[28px] italic leading-snug
              font-['baskerville-bt'] mb-14">
              Every risk is worth taking as long as it’s for a good <br /> cause and
              contributes to a good life.
            </p>

            <div className="relative mx-auto max-w-[660px]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2
                w-16 h-16 rounded-full border-4 border-white
                bg-white overflow-hidden z-10">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#3aafa9] rounded-[22px]
                px-6 pt-12 pb-6
                text-white shadow-xl">

                <h3 className="text-lg font-semibold">{active.name}</h3>
                <p className="text-xs opacity-90 mb-3">{active.branch}</p>

                <p className="text-md leading-relaxed whitespace-pre-line">
                  {commonText}
                </p>

                <div className="flex justify-center items-center gap-3 mt-5">
                  <button onClick={prev} className="p-1.5 rounded-full bg-white/20">
                    <ChevronLeft size={14} />
                  </button>

                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          activeIndex === i ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button onClick={next} className="p-1.5 rounded-full bg-white/20">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          <div
            className="
              absolute
              top-1/2
              -translate-y-1/2
              right-[4%]
              2xl:right-[36%]
              w-[420px]
            "
          >
            <div className="bg-[#ff885b] text-white rounded-xl shadow-2xl p-5">
              <h2 className="text-xl text-center font-bold mb-4">
                Admission Form
              </h2>

              <ApplyForm variant="modal" />

              <div className="text-center mt-4">
                <p className="font-semibold flex justify-center gap-2 text-sm">
                  Or Give us a call <Phone size={14} /> +91 0000000000
                </p>
                <p className="text-xs opacity-90 mt-1">
                  The Support Centre is Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
