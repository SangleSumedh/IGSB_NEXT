"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBigUp, ChevronLeft, ChevronRight, Download } from "lucide-react";

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
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  // Reset expansion when the testimonial changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  const handleDownload = () => {
    alert("Downloading brochure...");
  };

  return (
    <div className="relative w-full bg-white text-slate-800 shadow-xl overflow-hidden pt-2 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-8">
        {/* --- TESTIMONIALS --- */}
        <div className="md:col-span-4 flex flex-col justify-center items-center p-2 md:p-8 ">
          {/* New Title Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 md:text-[#1F6D71] text-center tracking-tight">
            Student Testimonials
          </h2>

          <div className="p-4 md:p-6 rounded-xl border-2 border-[#3aafa9] max-w-3xl w-full bg-white/10 backdrop-blur-sm md:bg-white md:shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-5 items-start lg:items-center">
              {/* PROFILE (fixed column) */}
              <div className="flex flex-col items-center text-center w-full lg:w-[140px]">
                <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#fb7035] overflow-hidden shadow-md mb-3">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <h3 className="font-bold text-md leading-tight text-slate-900">
                  {active.name}
                </h3>

                <p className="text-sm font-medium text-slate-700">
                  {active.branch}
                </p>
              </div>

              {/* TEXT AREA (fluid column) */}
              <div className="text-center lg:text-left overflow-hidden">
                <p
                  className={`text-sm text-justify lg:text-[0.95rem] leading-relaxed text-slate-700 transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  "{active.text}"
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#fb7035] text-xs font-bold uppercase mt-2 hover:underline tracking-wide"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>

                {/* NAVIGATION */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                    className="p-1.5 rounded-full border border-slate-300 hover:bg-slate-100 transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-600" />
                  </button>

                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === i
                            ? "w-6 bg-[#fb7035]"
                            : "w-1.5 bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % testimonials.length)
                    }
                    className="p-1.5 rounded-full border border-slate-300 hover:bg-slate-100 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CTA --- */}
        <div className="md:col-span-3 flex flex-col justify-center items-center text-center px-4 pt-8 pb-4 md:py-0 md:bg-secondary/5">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 leading-tight text-slate-800">
            <span className="font-[baskerville-bt] italic text-[#1F6D71]">
              Ready to Lead?
            </span>
            <span className="block text-lg lg:text-xl mt-2 font-sans font-medium text-slate-600">
              Get the full details.
            </span>
          </h2>

          <button
            onClick={handleDownload}
            className="
              inline-flex items-center gap-2
              px-6 py-3
              text-sm font-bold uppercase tracking-wider
              text-white bg-[#fb7035]
              rounded-full shadow-lg shadow-orange-500/30
              hover:-translate-y-1 hover:shadow-xl
              active:translate-y-0
              transition-all duration-200
            "
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </button>
        </div>

        {/* --- GENTLEMAN --- */}
        <div className="md:col-span-1 flex items-end justify-center relative h-48 md:h-full overflow-visible">
          <img
            src="/Home/suitwoman2.png"
            alt="Gentleman"
            className="
              h-[90%] md:h-[125%] w-auto object-contain object-bottom translate-y-2 opacity-100 z-10 drop-shadow-xl
            "
          />
        </div>
      </div>
    </div>
  );
}
