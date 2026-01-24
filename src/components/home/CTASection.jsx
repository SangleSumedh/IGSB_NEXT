"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp, ChevronLeft, ChevronRight } from "lucide-react";

/* ======================================================
   TESTIMONIALS DATA
====================================================== */
const testimonials = [
  {
    name: "Vikrant Kulkarni",
    branch: "Nayara Energy Limited",
    image: "/Home/Testimonials/Vikrant-Kulkarni.png",
    text: "I am grateful to Indira Global Business School for helping me unleash my worth in these 2 years as a memorable experience. Course curriculum & club activities have provided me a platform to work with my peers coming from a diverse range of backgrounds, interests and talents, thereby equipping me with skills required for succeeding in cross-cultural environments in my career ahead.",
  },
  {
    name: "Eshwari Pawar",
    branch: "Deloitte",
    image: "/Home/Testimonials/Eshwari-Pawar.png",
    text: "The unique and distinctive proposition of learning at Indira Global Business School, through collective discourse providing both theoretical concept clarity and application-oriented methodology has helped in understanding the management concepts in a more effective way. We had the opportunity to learn through the extremely interactive and engaging lectures from the in-house faculty and visiting professors with both industrial experience and academic experience. In addition to the academics, it is the podium that IGBS has given me for the development of my leadership skills that I would cherish for lifetime.",
  },
  {
    name: "Krutika Patil",
    branch: "HDFC Bank",
    image: "/Home/Testimonials/Krutika-Patil.png",
    text: "I am fully satisfied with my decision to join Indira Global Business School. Excellent staff with exceptional support for academics and extra-curricular activities. Well-equipped infrastructure to meet the academic and accommodation requirements of students. The institute has one of the best ROIs amongst most MBA colleges, in terms of placements. I am placed with HDFC Ltd with more than a decent package for about a year now through campus placements and am very satisfied with my job.",
  },
  {
    name: "Akshay Shirke",
    branch: "Amazon",
    image: "/Home/Testimonials/Akshay-Shirke.jpg",
    text: "I have always felt that I was so lucky to be a student at IGBS. The thing I admire the most about IGBS is the support I received from everyone at the campus. The friendly atmosphere here and the fact the teachers are really close to the students makes it unique. It has imparted a perfect blend of technical and soft skills and made me ready for industry.",
  },
  {
    name: "Ritu Tripathi",
    branch: "Deloitte",
    image: "/Home/Testimonials/Ritu-Tripathi.jpg",
    text: "My experience at Indira Global Business School has meant career advancement to a highly responsible and challenging position in the corporate world. The energy and enthusiasm driven by our Professors brought nothing but the best out of us. I didn't spend time studying rather I spent it learning, growing and having fun.",
  },
  {
    name: "Vaishnavi Vartak",
    branch: "Deloitte",
    image: "/Home/Testimonials/vaishnavi_vartak.jpg",
    text: "My association with IGBS has been a wholesome experience of the business world. IGBS offers a sea of opportunities to explore your potential supported by a rich alumni network, industry association and best in class placement opportunity to shape your career.",
  },
];

export default function CTASection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) return;
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, [isExpanded]);

  const active = testimonials[activeIndex];

  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  const handleDownload = () => {
    const el = document.getElementById("form-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePrev = () => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const handleNext = () => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#10404A] via-[#10404A] to-[#FF8B61] text-white shadow-xl overflow-hidden pt-1 md:pt-0">
      {/* 🔹 grid now 10 cols instead of 8 */}
      <div className="grid grid-cols-1 md:grid-cols-10 min-h-[180px] md:min-h-[220px]">
        {/* --- COL 1: TESTIMONIALS (≈70%) --- */}
        <div className="md:col-span-7 flex flex-col justify-center items-center p-2 md:p-4 bg-[#1F6D71]/50 md:bg-transparent z-20">
          <h2 className="text-lg md:text-2xl font-bold mb-3 text-white text-center tracking-tight shadow-black/10 drop-shadow-md">
            Student Testimonials
          </h2>

          <div className="p-3 md:p-4 rounded-xl border border-[#3aafa9] max-w-4xl w-full bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-3">
              {/* PROFILE */}
              <div className="flex flex-col items-center text-center min-w-[90px]">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#fb7035] overflow-hidden shadow mb-1.5">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="min-h-[2.75rem] md:min-h-[3.25rem] flex flex-col justify-start">
                  <h3 className="font-semibold text-xs md:text-sm leading-tight">
                    {active.name}
                  </h3>
                  <p className="text-[0.7rem] text-white/80">{active.branch}</p>
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="flex-1 text-center md:text-left overflow-hidden">
                <div className="min-h-[3.25rem] md:min-h-[4.75rem]">
                  <p
                    className={`text-[11px] md:text-sm leading-relaxed text-white/95 px-1 transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-3 md:line-clamp-4"
                    }`}
                  >
                    "{active.text}"
                  </p>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#fb7035] text-[9px] md:text-[10px] font-bold uppercase mt-1.5 hover:text-[#ff9d70] hover:underline tracking-wide transition-colors"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>

                {/* DOTS + NEXT / PREV */}
                <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  <button
                    onClick={handlePrev}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-white" />
                  </button>

                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === i
                            ? "w-6 bg-[#fb7035]"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- COL 2: CTA (≈20%) --- */}
        <div className="md:col-span-2 flex flex-col justify-center items-center text-center px-3 pt-6 pb-3 md:py-0 bg-white/5 md:bg-transparent z-20">
          <h2 className="text-lg lg:text-2xl font-bold mb-3 leading-tight drop-shadow-lg">
            <span className="font-[baskerville-bt] italic text-[#fb7035] md:text-white">
              Ready to Lead?
            </span>
            <span className="block text-sm lg:text-base mt-1 font-sans">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#10404A] bg-white rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            <ArrowBigUp className="w-4 h-4" />
            Get in Touch
          </button>
        </div>

        {/* --- COL 3: GENTLEMAN (≈10%) --- */}
        <div className="md:col-span-1 flex items-end justify-center relative h-32 md:h-auto bg-white/5 md:bg-transparent overflow-visible">
          <Image
            src="/Home/suitman.png"
            alt="Gentleman"
            height={200}
            width={180}
            className={`w-[95%] object-contain object-bottom transition-all duration-500 ease-in-out z-10 drop-shadow-2xl ${
              isExpanded
                ? "h-[100%] md:h-[115%] translate-y-1 opacity-100"
                : "h-[85%] md:h-[90%] translate-y-2 opacity-90"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
