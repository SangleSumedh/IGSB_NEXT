"use client";

import React, { useState } from "react";

const leaders = [
  {
    name: "Chairperson's Message",
    title: "Chairperson",
    image: "/Home/TaritaMam.jpg",
    message:
      "At our institution, we believe education is the foundation of a progressive society. Our goal is to empower students with knowledge, values, and skills that prepare them to lead with confidence and integrity. We are committed to fostering innovation, discipline, and excellence in every learner.",
    reverse: false,
  },
  {
    name: "Managing Director's Message",
    title: "Managing Director",
    image: "/Home/ShashiSir1.jpg",
    message:
      "Our focus has always been on bridging the gap between academics and industry. Through modern infrastructure, industry-oriented curriculum, and experienced faculty, we strive to create professionals who are adaptable, skilled, and future-ready.",
    reverse: true,
  },
  {
    name: "Principal's Message",
    title: "Principal",
    image: "/Home/DrVirendraTatake.jpg",
    message:
      "We aim to nurture a culture of curiosity, research, and continuous learning. By encouraging critical thinking and ethical responsibility, we prepare students not only for successful careers but also for meaningful contributions to society.",
    reverse: false,
  },
];

// Combined Faculty and Staff Data
const allStaff = [
  // Teaching Staff
  {
    name: "Dr. Virendra Vasant Tatake",
    role: "Director",
    expertise: "Finance",
    image: "/Faculty/Dr-Virendra-Tatake.jpg",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Pallavi Shrirang Sajanapwar",
    role: "Dean Academics and Research",
    expertise: "Marketing and General Management",
    image: "/Faculty/Dr_Pallavi_Sajanapawar.png",
    type: "teaching",
  },
  {
    name: "Dr. Aatish Dilip Zagade",
    role: "Deputy Director",
    expertise: "Human Resource & Marketing Management",
    image: "/Faculty/Dr-Aatish-Zagade.jpg",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Anuradha Samarth Phadnis",
    role: "Associate Professor",
    subRole: "IQAC Head",
    expertise:
      "Human Resources Management, Marketing Management and General Management",
    image: "/Faculty/Dr_Anuraddha_Phadnis_1.jpg",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Priyanka Rohan Darekar",
    role: "Associate Professor",
    subRole: "Learning Facilitator (Human Resources)",
    expertise: "Human Resource & General Management",
    image: "/Faculty/Dr_Priyanka_Darekar_New.png",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Aniruddha Vilas Thuse",
    role: "Associate Professor",
    expertise: "Financial Management",
    image: "/Faculty/Dr_Anirudha_Thus_New.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Dr. Poonam Avinash Wani",
    role: "Assistant Professor",
    subRole: "Learning Facilitator (Finance)",
    expertise: "Financial & Marketing Management",
    image: "/Faculty/Dr_Poonam_Wani_New.png",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Prashant Dubey",
    role: "Assistant Professor",
    subRole: "Learning Facilitator (Marketing)",
    expertise: "Marketing & Financial Management",
    image: "/Faculty/Dr-Prashan-Dubey.jpg",
    type: "teaching",
  },
  {
    name: "Mr. Mahesh Ganpatrao Bhagat",
    role: "Assistant Professor",
    subRole:
      "Chief Exam Officer (IGSB) / Learning Facilitator Operations & Supply Chain Management",
    expertise: "Human Resource Management",
    image: "/Faculty/Prof-Mahesh-Bhagat.jpg",
    type: "teaching",
  },
  {
    name: "Dr. Ashish Krishna Vyas",
    role: "Assistant Professor",
    expertise: "Human Resource Management",
    image: "/Faculty/Dr_Ashish-Vyas.png",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Dr. Neha Chaudhry",
    role: "Assistant Professor",
    subRole: "Finance Management",
    image: "/Faculty/Neha-Chaudhry-New-img.png",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Mr. Jayant Arun Joshi",
    role: "Deputy Director Corporate Relations, Assistant Professor",
    subRole: "Placement Coordinator",
    expertise: "Marketing & Financial Management",
    image: "/Faculty/Prof-Jayant-Joshi.jpg",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mr. Amol Kundalik Ankush",
    role: "Assistant Professor",
    subRole: "Event Coordinator",
    expertise: "Marketing & Operations Managment",
    image: "/Faculty/Prof-Amol-Ankush.jpg",
    type: "teaching",
  },
  {
    name: "Ms. Girija Deepak Shirurkar",
    role: "Assistant Professor",
    expertise: "Human Resource Management and General Management",
    image: "/Faculty/Prof-Girija-Shirurkar.jpg",
    linkedin: true,
    website: true,
    type: "teaching",
  },
  {
    name: "Mrs. Snehal Ganesh Masurkar",
    role: "Assistant Professor",
    expertise: "Marketing & Human Resource Management",
    image: "/Faculty/Prof_Snehal_Masulkar_New.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mrs. Chhaya Shivkumar Bodkurwar",
    role: "Assistant Professor",
    expertise: "Business Analytics",
    image: "/Faculty/Prof-chhaya-bodkurwar.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mrs. Siddhi Sanjay Dhoble",
    role: "Assistant Professor",
    expertise: "Finance",
    image: "/Faculty/Ms-Siddhi-Dhoble.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mrs. Neha Shah",
    role: "Assistant Professor",
    expertise: "Banking & Finance",
    image: "/Faculty/Neha-Shah-Img.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mr. Neelesh Madhukar Atre",
    role: "Professor of Practice",
    expertise: "Marketing Management",
    image: "/Faculty/Mr-Neelesh-Atre.png",
    linkedin: true,
    type: "teaching",
  },
  {
    name: "Mr. Santosh Vitthalrao Dagade",
    role: "Librarian",
    expertise: "Library and Information Science",
    image: "/Faculty/Santosh-Dagade.jpg",
    type: "teaching",
  },

  // Non-Teaching Staff
  {
    name: "Mr. Yogesh Dilip Gheware",
    role: "Office Superintendent",
    expertise: "MBA (HR)",
    image: "/Faculty/Yogesh-Gheware.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Dinesh Vilas Khodke",
    role: "System Administrator",
    expertise: "MBA (HR)",
    subRole: "Microsoft certified Professional",
    image: "/Faculty/Dinesh-Khodke.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Nilesh Govind Yedre",
    role: "Account Officer",
    expertise: "MBA (Finance)",
    subRole: "Diploma in Taxation Law",
    image: "/Faculty/Nilesh-Yendre.jpg",
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Ashish Bhimrao Jadhav",
    role: "Junior Clerk",
    expertise: "BBA",
    image: "/Faculty/Ashish-Jadhav.jpg",
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Jagannath Dhanaji Kadam",
    role: "Senior Clerk",
    expertise: "BA",
    image: "/Faculty/Jagannath-Kadam.jpg",
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Bhagavan Shivaji Patil",
    role: "Senior Admin Officer",
    image: "/Faculty/Jiban-Murikal.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Balasaheb Chhaburao Shinde",
    role: "Admin Officer",
    image: "/Faculty/Balasaheb-Shinde.jpg",
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Solomon Sanjay Gaikwad",
    role: "Social Media Manager",
    expertise:
      "Branding Officer with 7 years of media experience in Mass Communication & Journalism",
    subRole: "BA Journalism and Mass Communication",
    image: "/Faculty/Solomon-Gaikwad.jpg",
    linkedin: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Rohan Ravindra Shinde",
    role: "IT Lab Assistant",
    expertise: "BCA, MCA",
    image: "/Faculty/Rohan-Shinde.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Vaibhav Bhimrao Jadhav",
    role: "Executive Assistant",
    image: "/Faculty/Mr.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
  {
    name: "Mr. Amit Shashikant Kothari",
    role: "coming soon",
    image: "/Faculty/Mr.jpg",
    linkedin: true,
    website: true,
    type: "non-teaching",
  },
];

export default function LeadersDeskPage() {
  const [showAllStaff, setShowAllStaff] = useState(false);
  const [showFaculties, setShowFaculties] = useState(false);

  const displayedStaff = showAllStaff ? allStaff : allStaff.slice(0, 20);

  return (
    <section className="w-full bg-white">
      {/* PAGE HEADING - Full width with gradient */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg mb-12">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Leader&apos;s Desk
          </h1>

          {/* Accent divider */}
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white" />

          {/* Description */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Messages from the leadership that guide our vision, values, and
            commitment to excellence.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION - With padding */}
      <div className=" px-6 xl:px-16 py-12 xl:py-8">
        {/* LEADER SECTIONS */}
        <div className="space-y-12 mb-20">
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
                        shadow-md object-top
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

        {/* STAFF DROPDOWN SECTION */}
        <div className="border-t border-b border-slate-200">
          {/* Dropdown Toggle Button */}
          <button
            onClick={() => setShowFaculties(!showFaculties)}
            className="w-full py-8 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer outline-none"
          >
            <div className="flex items-center gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
              <h3 className="text-lg font-bold tracking-wide uppercase">
                Our Faculty & Staff
              </h3>
              <svg
                className={`w-5 h-5 transition-transform duration-500 ${
                  showFaculties ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100">
              CLICK TO EXPAND DIRECTORY
            </p>
          </button>

          {/* Staff Content with Animation */}
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              showFaculties ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="bg-white py-12">
                {/* Combined Staff Section */}
                <div className="mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {displayedStaff.map((person, index) => (
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
                          flex flex-col
                          h-full
                        "
                      >
                        {/* Staff Image - Increased height */}
                        <div className="h-84 overflow-hidden bg-gray-100">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Staff Info */}
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[3.5rem]">
                            {person.name}
                          </h3>
                          <p className="text-sm font-medium text-[#10404A] mb-1">
                            {person.role}
                          </p>
                          {person.subRole && (
                            <p className="text-xs text-gray-600 mb-2">
                              {person.subRole}
                            </p>
                          )}
                          {person.expertise && (
                            <p className="text-xs text-gray-600 line-clamp-2 mb-3 flex-grow">
                              {person.expertise}
                            </p>
                          )}
                          
                          {/* Type Badge */}
                          <div className="mb-3">
                            <span className={`
                              inline-block px-2 py-1 text-xs font-semibold rounded-full
                              ${person.type === 'teaching' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'}
                            `}>
                              {person.type === 'teaching' ? 'Teaching' : 'Non-Teaching'}
                            </span>
                          </div>
                          
                          {/* Social Links */}
                          <div className="flex gap-2 mt-auto">
                            {person.linkedin && (
                              <button 
                                className="text-gray-400 hover:text-[#0077B5] transition-colors p-1"
                                aria-label="LinkedIn profile"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </button>
                            )}
                            {person.website && (
                              <button 
                                className="text-gray-400 hover:text-[#10404A] transition-colors p-1"
                                aria-label="Website"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More/Less Button for All Staff */}
                  {allStaff.length > 20 && (
                    <div className="flex justify-center mt-10">
                      <button
                        onClick={() => setShowAllStaff(!showAllStaff)}
                        className="
                          px-8 py-3
                          bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80
                          text-white
                          rounded-full
                          font-semibold
                          hover:shadow-lg
                          transition-all duration-300
                          flex items-center gap-2
                        "
                      >
                        {showAllStaff ? (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            Show Less
                          </>
                        ) : (
                          <>
                            Show More (+{allStaff.length - 20})
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}