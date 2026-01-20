"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";

/* ======================================================
   TESTIMONIALS DATA (REAL CONTENT)
====================================================== */
const testimonials = [
  {
    name: "Vikrant Kulkarni",
    branch: "Nayara Energy Limited",
    image: "/Home/Testimonials/Vikrant-Kulkarni.png",
    text:
      "I am grateful to Indira Global Business School for helping me unleash my worth in these 2 years as a memorable experience. Course curriculum & club activities have provided me a platform to work with my peers coming from a diverse range of backgrounds, interests and talents, thereby equipping me with skills required for succeeding in cross-cultural environments in my career ahead.",
  },
  {
    name: "Eshwari Pawar",
    branch: "Deloitte",
    image: "/Home/Testimonials/Eshwari-Pawar.png",
    text:
      "The unique and distinctive proposition of learning at Indira Global Business School, through collective discourse providing both theoretical concept clarity and application-oriented methodology has helped in understanding the management concepts in a more effective way. We had the opportunity to learn through the extremely interactive and engaging lectures from the in-house faculty and visiting professors with both industrial experience and academic experience. In addition to the academics, it is the podium that IGBS has given me for the development of my leadership skills that I would cherish for lifetime.",
  },
  {
    name: "Krutika Patil",
    branch: "HDFC Bank",
    image: "/Home/Testimonials/Krutika-Patil.png",
    text:
      "I am fully satisfied with my decision to join Indira Global Business School. Excellent staff with exceptional support for academics and extra-curricular activities. Well-equipped infrastructure to meet the academic and accommodation requirements of students. The institute has one of the best ROIs amongst most MBA colleges, in terms of placements. I am placed with HDFC Ltd with more than a decent package for about a year now through campus placements and am very satisfied with my job.",
  },
  {
    name: "Akshay Shirke",
    branch: "Amazon",
    image: "/Home/Testimonials/Akshay-Shirke.jpg",
    text:
      "I have always felt that I was so lucky to be a student at IGBS. The thing I admire the most about IGBS is the support I received from everyone at the campus. The friendly atmosphere here and the fact the teachers are really close to the students makes it unique. It has imparted a perfect blend of technical and soft skills and made me ready for industry.",
  },
  {
    name: "Ritu Tripathi",
    branch: "Deloitte",
    image: "/Home/Testimonials/Ritu-Tripathi.jpg",
    text:
      "My experience at Indira Global Business School has meant career advancement to a highly responsible and challenging position in the corporate world. The energy and enthusiasm driven by our Professors brought nothing but the best out of us. I didn't spend time studying rather I spent it learning, growing and having fun.",
  },
  {
    name: "Vaishnavi Vartak",
    branch: "Deloitte",
    image: "/Home/Testimonials/vaishnavi_vartak.jpg",
    text:
      "My association with IGBS has been a wholesome experience of the business world. IGBS offers a sea of opportunities to explore your potential supported by a rich alumni network, industry association and best in class placement opportunity to shape your career.",
  },
];

export default function CTASection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const active = testimonials[activeIndex];

  // ✅ UPDATED: smooth scroll to form section
  const handleDownload = () => {
    const el = document.getElementById("form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#10404A] via-[#10404A] to-[#FF8B61] text-white shadow-xl overflow-hidden pt-2 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-8">

        {/* --- TESTIMONIAL CARD --- */}
        <div className="md:col-span-4 flex items-center justify-center p-2 md:p-4 bg-[#1F6D71]/50 md:bg-transparent">
          <div className="p-4 md:p-3 rounded-xl border-2 border-[#3aafa9] max-w-xl w-full">
            <div className="flex flex-col lg:flex-row items-center gap-5">

              {/* PROFILE */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#fb7035] overflow-hidden shadow mb-2">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="font-semibold text-base leading-tight">
                  {active.name}
                </h3>
                <p className="text-[0.8rem] text-white/80">
                  {active.branch}
                </p>
              </div>

              {/* TEXT */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-[0.8rem] lg:text-sm leading-relaxed text-white/95 px-2">
                  {active.text}
                </p>

                {/* DOTS */}
                <div className="flex justify-center lg:justify-start gap-1.5 mt-4">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "w-6 bg-[#fb7035]"
                          : "w-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="md:col-span-2 flex flex-col justify-center items-center text-center px-4 pt-8 pb-4 md:py-0 bg-white/5 md:bg-transparent">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 leading-tight">
            <span className="font-[baskerville-bt] italic">Ready to Lead?</span>
            <span className="block text-lg lg:text-2xl mt-1">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#10404A] bg-white rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <ArrowBigUp />
            Get in Touch
          </button>
        </div>

        {/* --- GENTLEMAN IMAGE --- */}
        <div className="md:col-span-2 flex items-end justify-center relative h-44 md:h-full bg-white/5 md:bg-transparent">
          <img
            src="/Home/suitman.png"
            alt="Gentleman"
            className="h-[115%] md:h-[125%] xl:w-[80%] object-contain object-bottom translate-y-2 opacity-95"
          />
        </div>

      </div>
    </div>
  );
}
