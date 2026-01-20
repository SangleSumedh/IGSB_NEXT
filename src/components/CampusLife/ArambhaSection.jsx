"use client";

import Image from "next/image";

export default function ArambhaSection() {
  return (
    <>
      {/* ARAMBHA SECTION */}
      <div className="bg-[#3aafa9]">
        <div className="relative overflow-hidden">
          <div className="max-w-full mx-auto flex flex-col lg:flex-row-reverse">
            {/* RIGHT (DESKTOP) → GALLERY / BENTO */}
            <div className="w-full lg:w-1/2 flex items-start px-6 py-12">
              <div className="w-full">
                <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[500px] ">
                  {/* HERO IMAGE - Top row spanning 2 columns */}
                  <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/30">
                    <Image
                      src="/IGSB/student-induction/induction25-15.png"
                      alt="Main induction event"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 66vw, 33vw"
                    />
                  </div>

                  {/* TALL IMAGE - Right column spanning 2 rows */}
                  <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden border border-white/30">
                    <Image
                      src="/IGSB/student-induction/induction25-16.png"
                      alt="Induction highlight"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* SMALL IMAGE 1 - Bottom left */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30">
                    <Image
                      src="/IGSB/student-induction/induction25-13.png"
                      alt="Induction activity"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* SMALL IMAGE 2 - Bottom middle */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30">
                    <Image
                      src="/IGSB/student-induction/induction25-12.png"
                      alt="Induction moment"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* Optional: Add a 5th image or leave empty for design */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30 bg-white/10 flex items-center justify-center">
                    <span className="text-white/70 text-sm font-medium">
                      + More
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT (DESKTOP) → TEXT CONTENT */}
            <div className="w-full lg:w-1/2 flex items-start px-6 py-12">
              <div className="max-w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-6">
                  Arambha 2024
                </h1>

                <p className="text-white text-base md:text-lg leading-relaxed mb-6 text-justify">
                  Arambha 2024 effectively laid a strong academic, professional,
                  and ethical foundation, preparing students for a successful MBA
                  journey and future corporate roles.
                </p>
                <div className="border border-white rounded-md p-4 shadow-2xs">
                  <p className="text-white  md:text-lg leading-relaxed mb-6 text-justify">
                    The induction programme introduced participants to the
                    institutional culture, <span className="font-bold">SPPU curriculum</span>, <span className="font-bold">AICTE framework</span>, and
                    industry expectations. It featured foundation sessions about a
                    variety of case study analysis across multiple domains.
                  </p>

                  <p className="text-white text-base md:text-lg leading-relaxed mb-8 text-justify">
                    Holistic development was addressed through wellness sessions,
                    universal human values discussions, and aptitude training
                    aligned with placement readiness. It further enriched by
                    industry expert interactions, alumni panel discussions, and a
                    full-day leadership workshop on emotional intelligence,
                    strategic thinking, and corporate readiness.
                  </p>
                </div>

                {/* CHARACTER IMAGE */}
                {/* <div className="ml-120 relative w-[260px] md:w-[210px]">
                  <Image
                    src="/chanu/chanuleftnew.png"
                    alt="Arambha visual"
                    width={320}
                    height={420}
                    className="object-contain transform drop-shadow-xl"
                    sizes="(max-width: 768px) 260px, 320px"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C-SUITE SECTION - Added below Arambha */}
      <div className="bg-secondary">
        <div className="relative overflow-hidden">
          <div className="max-w-full mx-auto flex flex-col lg:flex-row">
            {/* LEFT (DESKTOP) → GALLERY / BENTO */}
            <div className="w-full lg:w-1/2 flex items-start px-6 py-12">
              <div className="w-full">
                <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[600px]">
                  {/* HERO IMAGE - Top row spanning 2 columns */}
                  <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/30">
                    <Image
                      src="/placeholder.jpeg"
                      alt="Boardroom presentation at C-Suite simulation"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 66vw, 33vw"
                    />
                  </div>

                  {/* TALL IMAGE - Right column spanning 2 rows */}
                  <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden border border-white/30">
                    <Image
                      src="/placeholder.jpeg"
                      alt="Team collaboration during simulation"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* SMALL IMAGE 1 - Bottom left */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30">
                    <Image
                      src="/placeholder.jpeg"
                      alt="Expert evaluation session"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* SMALL IMAGE 2 - Bottom middle */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30">
                    <Image
                      src="/placeholder.jpeg"
                      alt="Leadership workshop"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 33vw, 16.5vw"
                    />
                  </div>

                  {/* Optional: Add a 5th image or leave empty for design */}
                  <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden border border-white/30 bg-white/10 flex items-center justify-center">
                    <span className="text-white/70 text-sm font-medium">
                      + More
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (DESKTOP) → TEXT CONTENT */}
            <div className="w-full lg:w-1/2 flex items-start px-6 py-12">
              <div className="max-w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-6">
                  C-Suite: Corporate Simulation 2025
                </h1>

                <p className="text-white md:text-lg leading-relaxed mb-6 text-justify">
                  The competition was successfully conducted at <span className="font-bold">Indira Global School of Business (IGSB)</span> as a flagship experiential learning initiative, offering MBA students a realistic boardroom and leadership simulation. The event enabled participants to conceptualize and manage a company from the ground up by defining an industry focus, creating a brand identity, selecting leadership roles, and developing strategic and operational frameworks.
                </p>
                
                <div className="border border-white rounded-md p-4 shadow-2xs">
                 

                  <p className="text-white md:text-lg leading-relaxed mb-8 text-justify">
                    The simulation concluded with boardroom-style presentations evaluated by industry experts, where teams demonstrated business strategy, leadership decisions, and organizational effectiveness. Through hands-on corporate exposure, peer collaboration, and expert feedback, the event strengthened strategic thinking, leadership readiness, and industry-aligned decision-making, reinforcing IGSB's commitment to <span className="font-bold">practice-driven MBA education</span> and <span className="font-bold">industry-ready management professionals</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}