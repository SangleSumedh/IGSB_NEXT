import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "SARAH JENKINS",
    role: "Senior Product Manager",
    campus: "IGSB Pune",
    img: "/boy.png",
    quote: "Leading global teams started with the foundations I built here.",
  },
  {
    id: 2,
    name: "RAJ PATEL",
    role: "Tech Lead",
    campus: "IGSB Mumbai",
    img: "/boy.png",
    quote: "The technical exposure and mentorship were world-class.",
  },
  {
    id: 3,
    name: "CHEN WEI",
    role: "Data Scientist",
    campus: "IGSB Remote",
    img: "/boy.png",
    quote: "I use the analytical skills I learned every single day.",
  },
];

export default function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-16 items-center bg-[#10404A]">
      {/* LEFT SIDE */}
      <div className="space-y-6 col-span-3 flex flex-col justify-evenly   ">
        <h2 className="text-4xl md:text-4xl font-bold text-white tracking-tight">
          SHAPING THE FUTURE{" "}
          <span className="text-[#FF8B61]">ONE LEADER AT A TIME</span>
        </h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-5xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          reiciendis iste porro hic! Enim, vel aliquid! Corrupti eaque esse
          consequatur natus dolore, ab voluptatum asperiores! Minima provident
          qui, iusto commodi rem molestias perspiciatis perferendis officia ea
          similique, enim tempora excepturi rerum labore voluptatem blanditiis
          possimus corporis tempore esse ad? Assumenda.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end col-span-2">
        {/* CARD */}
        <div className="bg-[#3aafa9] shadow-2xl rounded-2xl w-full max-w-xl overflow-hidden relative min-h-[280px]">
          {/* NAME */}
          <div className="w-full text-center py-4">
            <h3 className="text-2xl font-black text-[#fff] tracking-widest uppercase">
              {current.name}
            </h3>
          </div>

          <div className="flex gap-4 justify-between items-center">
            {/* PHOTO */}
            <div className="relative  mr-6">
              <div className="w-24 h-32 rounded-r-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Designation
                </span>
                <p className="text-lg font-semibold text-white leading-tight">
                  {current.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                  Campus
                </span>
                <p className="text-lg font-semibold text-white">
                  {current.campus}
                </p>
              </div>
            </div>
            <div className="relative shrink-0 mr-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  }
                  alt={"Company LOGO"}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="bg-[#3aafa9] p-4 text-center flex justify-between items-center">
            <p className="text-[white]/80 text-xs italic">"{current.quote}"</p>
            <div className="flex gap-3">
              {/* Prev */}
              <button
                onClick={prevSlide}
                className="
      w-12 h-12 flex items-center justify-center rounded-full 
      bg-white text-[#10404A] shadow-md
      hover:bg-[#FF8B61] hover:text-white hover:shadow-lg
      transition-all duration-300 ease-in-out transform hover:-translate-y-1
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="
      w-12 h-12 flex items-center justify-center rounded-full 
      bg-white text-[#10404A] shadow-md
      hover:bg-[#FF8B61] hover:text-white hover:shadow-lg
      transition-all duration-300 ease-in-out transform hover:-translate-y-1
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* NAV BUTTONS */}
        {/* <div className="flex gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full border border-white/40 text-white hover:bg-[#FF8B61] hover:text-[#10404A] hover:border-[#FF8B61] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="p-4 rounded-full border border-white/40 text-white hover:bg-[#FF8B61] hover:text-[#10404A] hover:border-[#FF8B61] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}
