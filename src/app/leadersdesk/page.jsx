"use client";

import React, { useState } from "react";

const leaders = [
  {
    name: "Chairperson's Message",
    title: "Chairperson",
    image: "/boy.png",
    message:
      "At our institution, we believe education is the foundation of a progressive society. Our goal is to empower students with knowledge, values, and skills that prepare them to lead with confidence and integrity. We are committed to fostering innovation, discipline, and excellence in every learner.",
    reverse: false,
  },
  {
    name: "Managing Director's Message",
    title: "Managing Director",
    image: "/boy.png",
    message:
      "Our focus has always been on bridging the gap between academics and industry. Through modern infrastructure, industry-oriented curriculum, and experienced faculty, we strive to create professionals who are adaptable, skilled, and future-ready.",
    reverse: true,
  },
  {
    name: "Principal's Message",
    title: "Principal",
    image: "/boy.png",
    message:
      "We aim to nurture a culture of curiosity, research, and continuous learning. By encouraging critical thinking and ethical responsibility, we prepare students not only for successful careers but also for meaningful contributions to society.",
    reverse: false,
  },
];

// Faculty Data
const teachingStaff = [
  { name: "Dr. Virendra Vasant Tatake", image: "/Faculty/Dr-Virendra-Tatake.jpg" },
  { name: "Dr. Pallavi Shrirang Sajanapwar", image: "/Faculty/Dr_Pallavi_Sajanapawar.png" },
  { name: "Dr. Aatish Dilip Zagade", image: "/Faculty/Dr-Aatish-Zagade.jpg" },
  { name: "Dr. Anuradha Samarth Phadnis", image: "/Faculty/Dr_Anuraddha_Phadnis_1.jpg" },
  { name: "Dr. Priyanka Rohan Darekar", image: "/Faculty/Dr_Priyanka_Darekar_New.png" },
  { name: "Dr. Aniruddha Vilas Thuse", image: "/Faculty/Dr_Anirudha_Thus_New.png" },
  { name: "Dr. Poonam Avinash Wani", image: "/Faculty/Dr_Poonam_Wani_New.png" },
  { name: "Dr. Prashant Dubey", image: "/Faculty/Dr-Prashan-Dubey.jpg" },
  { name: "Dr. Ashish Krishna Vyas", image: "/Faculty/Dr_Ashish-Vyas.png" },
  { name: "Dr. Neha Chaudhry", image: "/Faculty/Neha-Chaudhry-New-img.png" },
  { name: "Prof. Nilam Naidu", image: "/Faculty/Prof_Nilam_Naidu_New.png" },
  { name: "Ms. Rutuja Rajendra Mote", image: "/Faculty/Ms_Rutuja_Mote_New.png" },
  { name: "Ms. Ruchika Rajendra Motegaonkar", image: "/Faculty/Ms_Ruchika_Motegaonkar_New.png" },
  { name: "Ms. Prajakta Dattatray Kshirsagar", image: "/Faculty/Ms_Prajakta_Kshirsagar_New.png" },
  { name: "Ms. Radha Sunil Nair", image: "/Faculty/Ms_Radha_Nair_New.png" },
  { name: "Mr. Amit Vijay Kulkarni", image: "/Faculty/Mr_Amit_Kulkarni_New.png" },
  { name: "Ms. Pragati Dharmendra Deokar", image: "/Faculty/Ms_Pragati_Deokar_New.png" },
  { name: "Ms. Aishwarya Prakash Patil", image: "/Faculty/Ms_Aishwarya_Patil_New.png" },
  { name: "Ms. Manisha Sanjay Malode", image: "/Faculty/Ms_Manisha_Malode_New.png" },
  { name: "Mr. Piyush Suresh Bhosale", image: "/Faculty/Mr_Piyush_Bhosale_New.png" },
];

const nonTeachingStaff = [
  { name: "Ms. Shubhangi Sanjay Phadtare", image: "/Faculty/Ms_Shubhangi_Phadtare_New.png" },
  { name: "Ms. Kajal Pradip Pawar", image: "/Faculty/Ms_Kajal_Pawar_New.png" },
  { name: "Mr. Dhiraj Vitthal Patil", image: "/Faculty/Mr_Dhiraj_Patil_New.png" },
  { name: "Ms. Snehal Dilip Ubhe", image: "/Faculty/Ms_Snehal_Ubhe_New.png" },
];

export default function LeadersDeskPage() {
  const [showFaculties, setShowFaculties] = useState(false);
  const [showAllTeaching, setShowAllTeaching] = useState(false);
  const [showAllNonTeaching, setShowAllNonTeaching] = useState(false);

  const displayedTeaching = showAllTeaching ? teachingStaff : teachingStaff.slice(0, 12);
  const displayedNonTeaching = showAllNonTeaching ? nonTeachingStaff : nonTeachingStaff.slice(0, 12);

  return (
    <section className="w-full py-12 px-6 xl:py-8 xl:px-16 bg-white">
      {/* PAGE HEADING */}
      <div className="mb-20 text-center relative">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Leader&apos;s Desk
        </h1>

        {/* Accent divider */}
        <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-[#FF8B61]" />

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Messages from the leadership that guide our vision, values, and
          commitment to excellence.
        </p>
      </div>

      {/* LEADER SECTIONS */}
      <div className="space-y-24 mb-20">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`
              w-full
              rounded-3xl
              p-6 md:p-8 lg:p-10
              bg-gradient-to-r from-[#10404A] to-[#1F6D71]
              shadow-xl
            `}
          >
            <div
              className={`
                flex flex-col md:flex-row items-center gap-6
                ${leader.reverse ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* IMAGE SECTION — 1/3 */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src={leader.image}
                    alt={leader.title}
                    className="
                      w-40 h-40 md:w-84 md:h-84
                      rounded-full object-cover
                      border-4 border-[#ffb088]
                      shadow-md
                    "
                  />
                </div>
              </div>

              {/* CONTENT SECTION — 2/3 */}
              <div className="w-full md:w-2/3">
                <div
                  className="
                    bg-[#3aafa9]
                    rounded-2xl
                    p-6 md:p-7 lg:p-8
                    shadow-xl
                    text-white
                  "
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1">
                    {leader.name}
                  </h3>

                  <p className="text-white/90 font-medium text-lg mb-2">
                    {leader.title}
                  </p>

                  {/* SUBTLE DIVIDER */}
                  <div className="w-12 h-[2px] bg-[#ffb088] rounded-full mb-5" />

                  <p className="text-white/90 text-lg leading-relaxed">
                    {leader.message}
                  </p>

                  {/* SIGNATURE AREA */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm italic">
                      Leading with vision, inspiring with action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FACULTY DROPDOWN SECTION */}
      <div className="border-t border-gray-200 pt-12">
        {/* Dropdown Toggle Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowFaculties(!showFaculties)}
            className="
              flex items-center justify-between
              px-8 py-4
              bg-gradient-to-r from-[#10404A] to-[#1F6D71]
              text-white
              rounded-2xl
              shadow-lg
              hover:shadow-xl
              transition-all duration-300
              w-full max-w-2xl
            "
          >
            <span className="text-xl md:text-2xl font-bold">
              Our Faculty Members
            </span>
            <span className="text-2xl">
              {showFaculties ? "−" : "+"}
            </span>
          </button>
        </div>

        {/* Faculty Content (Hidden by default) */}
        {showFaculties && (
          <div className="space-y-16">
            {/* Teaching Staff Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                Teaching Staff
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedTeaching.map((faculty, index) => (
                  <div
                    key={index}
                    className="
                      bg-white
                      rounded-xl
                      shadow-md
                      border border-gray-200
                      overflow-hidden
                      hover:shadow-lg
                      transition-shadow duration-300
                    "
                  >
                    {/* Faculty Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Faculty Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {faculty.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {faculty.name.toLowerCase().includes("dr.") || faculty.name.toLowerCase().includes("dr ") 
                          ? "PhD Faculty" 
                          : faculty.name.toLowerCase().includes("prof.") || faculty.name.toLowerCase().includes("prof ")
                            ? "Professor"
                            : "Faculty Member"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Button for Teaching Staff */}
              {teachingStaff.length > 12 && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllTeaching(!showAllTeaching)}
                    className="
                      px-6 py-3
                      bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80
                      text-white
                      rounded-full
                      font-semibold
                      hover:shadow-lg
                      transition-all duration-300
                    "
                  >
                    {showAllTeaching ? "Show Less" : `Show More (+${teachingStaff.length - 12})`}
                  </button>
                </div>
              )}
            </div>

            {/* Non-Teaching Staff Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                Non-Teaching Staff
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedNonTeaching.map((staff, index) => (
                  <div
                    key={index}
                    className="
                      bg-white
                      rounded-xl
                      shadow-md
                      border border-gray-200
                      overflow-hidden
                      hover:shadow-lg
                      transition-shadow duration-300
                    "
                  >
                    {/* Staff Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Staff Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {staff.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Non-Teaching Staff
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Button for Non-Teaching Staff */}
              {nonTeachingStaff.length > 12 && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllNonTeaching(!showAllNonTeaching)}
                    className="
                      px-6 py-3
                      bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80
                      text-white
                      rounded-full
                      font-semibold
                      hover:shadow-lg
                      transition-all duration-300
                    "
                  >
                    {showAllNonTeaching ? "Show Less" : `Show More (+${nonTeachingStaff.length - 12})`}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}