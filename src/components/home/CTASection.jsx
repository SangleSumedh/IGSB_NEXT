"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";

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
  // {
  //   name: "Saurabh Kulkarni",
  //   branch: "NielsenIQ",
  //   image: "/Home/Testimonials/Saurabh-Kulkarni.png",
  //   text: "There are very few moments in one's life when one feels to be genuinely fortunate. Indira Global Business School is not just the B-School but an institution that helped me transform and create my own identity in corporate world. My Faculties and mentors were always a part of this beautiful journey with me, and helped me survive, succeed and shine. IGBS not only provides the students an armory of knowledge, but also develops industry requirement skills which helps as ultimate confidence booster.",
  // },
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
    // Pause rotation if expanded so user can read
    if (isExpanded) return;

    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, [isExpanded]);

  const active = testimonials[activeIndex];

  // Reset expansion when testimonial changes manually
  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  const handleDownload = () => {
    const el = document.getElementById("form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#10404A] via-[#10404A] to-[#FF8B61] text-white shadow-xl overflow-hidden pt-2 md:pt-0">
      {/* GRID UPDATE: 
         Matched cols to 4 (Testimonial) - 2 (CTA) - 2 (Gentleman) 
      */}
      <div className="grid grid-cols-1 md:grid-cols-8 min-h-[300px]">
        {/* --- COL 1: TESTIMONIALS (Span 4) --- */}
        <div className="md:col-span-4 flex flex-col justify-center items-center p-2 md:p-6 bg-[#1F6D71]/50 md:bg-transparent z-20">
          {/* ADDED TITLE */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white text-center tracking-tight shadow-black/10 drop-shadow-md">
            Student Testimonials
          </h2>

          <div className="p-4 md:p-5 rounded-xl border border-[#3aafa9] max-w-3xl w-full bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* PROFILE */}
              <div className="flex flex-col items-center text-center min-w-[100px]">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#fb7035] overflow-hidden shadow mb-2">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base leading-tight">
                  {active.name}
                </h3>
                <p className="text-[0.75rem] text-white/80">{active.branch}</p>
              </div>

              {/* TEXT AREA */}
              <div className="flex-1 text-center md:text-left overflow-hidden">
                <p
                  className={`text-xs md:text-sm leading-relaxed text-white/95 px-1 transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-3 md:line-clamp-4"
                  }`}
                >
                  "{active.text}"
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#fb7035] text-[10px] md:text-xs font-bold uppercase mt-2 hover:text-[#ff9d70] hover:underline tracking-wide transition-colors"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>

                {/* DOTS */}
                <div className="flex justify-center md:justify-start gap-1.5 mt-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "w-6 bg-[#fb7035]"
                          : "w-1.5 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- COL 2: CTA (Span 2) --- */}
        <div className="md:col-span-2 flex flex-col justify-center items-center text-center px-4 pt-8 pb-4 md:py-0 bg-white/5 md:bg-transparent z-20">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 leading-tight drop-shadow-lg">
            <span className="font-[baskerville-bt] italic text-[#fb7035] md:text-white">
              Ready to Lead?
            </span>
            <span className="block text-lg lg:text-xl mt-1 font-sans">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center gap-2 
              px-5 py-3 
              text-sm font-bold 
              text-[#10404A] bg-white 
              rounded-full shadow-lg 
              hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-50
              transition-all duration-200
            "
          >
            <ArrowBigUp className="w-5 h-5" />
            Get in Touch
          </button>
        </div>

        {/* --- COL 3: GENTLEMAN (Span 2 & Dynamic Size) --- */}
        <div className="md:col-span-2 flex items-end justify-center relative h-44 md:h-auto bg-white/5 md:bg-transparent overflow-visible">
          <img
            src="/Home/suitman.png"
            alt="Gentleman"
            className={`
              w-[80%]
              object-contain object-bottom
              transition-all duration-500 ease-in-out
              z-10
              drop-shadow-2xl
              ${
                isExpanded
                  ? "h-[105%] md:h-[125%] translate-y-2 opacity-100"
                  : "h-[90%] md:h-[95%] translate-y-4 opacity-90"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}
