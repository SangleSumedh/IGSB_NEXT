import React, {useState} from "react";

export default function AlumniSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "SARAH JENKINS",
      role: "Senior Product Manager",
      campus: "IGSB Pune",
      img: "/boy.png", // Replace with real images
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
    <section className="w-full py-12 bg-white px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
      {/* LEFT SIDE: Title & Paragraph */}
      <div className="space-y-6 col-span-3">
        <h2 className="text-4xl md:text-5xl font-bold text-[#10404A] tracking-tight">
          SHAPING THE FUTURE <br />
          <span className="text-[#fb7035]">ONE LEADER AT A TIME</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="h-1 w-24 bg-[#10404A] mt-4"></div>
      </div>

      {/* RIGHT SIDE: Carousel Component */}
      <div className="flex flex-col items-end col-span-2">
        {/* The Card */}
        <div className="bg-slate-50 border border-slate-200 shadow-2xl rounded-2xl w-full max-w-xl overflow-hidden relative min-h-[280px]">
          {/* Top Center Name */}
          <div className="w-full text-center pt-8 pb-4">
            <h3 className="text-2xl font-black text-[#10404A] tracking-widest uppercase">
              {current.name}
            </h3>
            <div className="w-12 h-1 bg-[#fb7035] mx-auto mt-2"></div>
          </div>

          <div className="flex items-center pb-8 px-8">
            {/* Left: Semicircle Photo 
                 We create a 'D' shape by rounding the right side fully 
                 and keeping the left side straight (or vice versa depending on preference).
                 Here, I'm using a pill shape clipped to look like a semicircle.
             */}
            <div className="relative shrink-0 mr-6">
              <div className="w-24 h-32 rounded-r-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={current.img}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Designation
                </span>
                <p className="text-lg font-semibold text-slate-800 leading-tight">
                  {current.role}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Campus
                </span>
                <p className="text-lg font-semibold text-slate-800">
                  {current.campus}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Quote (Optional filler) */}
          <div className="bg-[#10404A] p-4 text-center">
            <p className="text-white/80 text-xs italic">"{current.quote}"</p>
          </div>
        </div>

        {/* Navigation Buttons (Right Aligned after card) */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full border border-slate-300 hover:bg-[#10404A] hover:text-white hover:border-[#10404A] transition-all duration-300 group"
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
            className="p-4 rounded-full border border-slate-300 hover:bg-[#10404A] hover:text-white hover:border-[#10404A] transition-all duration-300 group"
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
        </div>
      </div>
    </section>
  );
}
