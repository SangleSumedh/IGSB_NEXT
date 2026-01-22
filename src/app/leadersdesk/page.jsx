"use client";
import Image from "next/image";
import React, { useState } from "react";

const trustees = [
  {
    name: "Smt. Sarita Shankar Wakalkar",
    role: "President",
    image: "/banners/sarita-shankar.jpeg",
  },
  {
    name: "Dr. Tarita Shankar",
    role: "Chief Managing Trustee and Founder Secretary",
    image: "/banners/dr-tarita-shankar-chairperson.png",
  },
  {
    name: "Mr. Shardul Nitin Gangal",
    role: "Vice - President",
    image: "/banners/Mr-Shardul-Gangal.webp",
  },
  {
    name: "Mr. Sahil Tarita Shankar",
    role: "Joint Secretary",
    image: "/banners/Sahil-Mehendale.jpg",
  },
  {
    name: "Mr. Pilaji Sursingh Jadhavrao",
    role: "Treasurer",
    image: "/banners/pilaji-sursingh-jadhavrao.jpg",
  },
  {
    name: "Mr. Vasant Maruti Maske",
    role: "Trustee Member",
    image: "/banners/VASANT-MARUTI-MASKE.png",
  },
  {
    name: "Mr. Shaan Tarita Shankar",
    role: "Trustee Member",
    image: "/banners/SHAAN-ADITYA-MEHENDALE.png",
  },
];

const leaders = [
  {
    name: "Chairperson's Message",
    title: "Chairperson",
    image: "/Home/TS.jpg",
    message:
      "At our institution, we believe education is the foundation of a progressive society. Our goal is to empower students with knowledge, values, and skills that prepare them to lead with confidence and integrity. We are committed to fostering innovation, discipline, and excellence in every learner.",
    reverse: false,
  },
  {
    name: "Principal's Message",
    title: "Principal",
    image: "/Home/TakdakeSir.jpg",
    message:
      "We aim to nurture a culture of curiosity, research, and continuous learning. By encouraging critical thinking and ethical responsibility, we prepare students not only for successful careers but also for meaningful contributions to society.",
    reverse: true,
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
  const [isScesExpanded, setIsScesExpanded] = useState(false);

  const displayedStaff = showAllStaff ? allStaff : allStaff.slice(0, 20);

  return (
    <section className="w-full bg-white">
      {/* PAGE HEADING - Full width with gradient */}
      <div className="w-full py-8 sm:py-12 md:py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg mb-6 sm:mb-8 md:mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 text-center">
          {/* Main heading with animation */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white animate-fade-up">
            Leader&apos;s Desk
          </h1>

          {/* Accent divider with animation */}
          <div className="mx-auto mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-5 md:mb-6 w-12 sm:w-16 h-[2px] sm:h-[3px] rounded-full bg-white animate-fade-up animation-delay-100" />

          {/* Description with animation */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Messages from the leadership that guide our vision, values, and
            commitment to excellence.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION - With padding */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* LEADER SECTIONS */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-12 sm:mb-16 md:mb-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="
                w-full
                rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl
                p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10
                bg-gradient-to-r from-[#10404A] to-[#1F6D71]
                shadow-lg md:shadow-xl
              "
            >
              <div
                className={`
                  flex flex-col ${leader.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-4 sm:gap-5 md:gap-6
                `}
              >
                {/* IMAGE SECTION — 1/3 */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.title}
                      className="
                        w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-72 lg:h-72 xl:w-84 xl:h-84
                        rounded-full object-cover
                        border-4 border-[#ffb088]
                        shadow-md object-top
                      "
                    />
                  </div>
                </div>

                {/* CONTENT SECTION — 2/3 */}
                <div className="w-full lg:w-2/3">
                  <div
                    className="
                      bg-[#3aafa9]
                      rounded-lg sm:rounded-xl md:rounded-2xl
                      p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
                      shadow-xl
                      text-white
                    "
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1">
                      {leader.name}
                    </h3>

                    <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                      {leader.title}
                    </p>

                    {/* SUBTLE DIVIDER */}
                    <div className="w-10 sm:w-12 h-[2px] bg-[#ffb088] rounded-full mb-3 sm:mb-4 md:mb-5" />

                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                      {leader.message}
                    </p>

                    {/* SIGNATURE AREA */}
                    <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-white/20">
                      <p className="text-white/80 text-xs sm:text-sm italic">
                        Leading with vision, inspiring with action
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
{/* Board of Trustees Section */}
<section id="about-trustees" className="relative scroll-mt-[15vh] mb-12 sm:mb-16 md:mb-20">
  <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
      Board of Trustees
    </h2>
    <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10">
      Managing Committee Members/Trustees of 'Shree Chanakya Education Society'
    </p>

    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
      {trustees.map((person, index) => (
        <div
          key={index}
          className="bg-[#3aafa9] rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary group flex flex-col"
        >
          {/* Image Container - SQUARE for mobile, tighter rectangle for desktop */}
          <div className="w-full aspect-square sm:aspect-auto sm:h-44 md:h-48 lg:h-52 bg-gray-100 flex items-center justify-center text-gray-400 rounded-t-lg sm:rounded-t-xl group-hover:bg-gray-50 transition-colors overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center p-1.5">
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="object-contain w-full h-full"
                sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 14vw"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="p-2 sm:p-2.5 flex flex-col">
            <h4 
              className="font-bold text-white text-xs sm:text-sm md:text-sm leading-snug group-hover:text-secondary transition-colors"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {person.name}
            </h4>
            <p className="text-white mt-0.5 text-[11px] sm:text-xs leading-snug">
              {person.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* SCES Section with Read More */}
        <section id="about-sces" className="relative scroll-mt-[15vh] mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-[#10404A] to-[#1F6D71] p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Shree Chanakya Education Society (SCES)
            </h2>
            <div className="relative">
              <div 
                className={`text-white leading-relaxed text-sm sm:text-base md:text-lg text-justify ${isScesExpanded ? '' : 'line-clamp-10 md:line-clamp-none'}`}
                style={{
                  display: isScesExpanded ? 'block' : '-webkit-box',
                  WebkitLineClamp: !isScesExpanded && '10',
                  WebkitBoxOrient: !isScesExpanded && 'vertical',
                  overflow: !isScesExpanded && 'hidden',
                }}
              >
                The Shree Chanakya Education Society (SCES) was established in
                February 1994, under the visionary leadership of Dr. Tarita
                Shankar, with the aim of providing top quality post-graduate
                education in the ﬁelds of Business Management, International
                Business and Information Technology. By consistently providing
                quality education over the past few decades, institutes at Indira
                Group is now considered as one of the best institutes in Pune. At
                a time when India was struggling to put its economy back on its
                feet, after the nation having pawned the "family jewels" just to
                keep aﬂoat, Dr. Tarita Shankar sensed that education too would
                have to become more broad based and more vocational in nature if
                India was to stand up to the world competition in quality and
                price for its products, The then Finance Minister had prescribed
                for the economy and so, in 1994, began a saga of growth and
                quality in education; a story that is just reaching its zenith
                with 14 full ﬂedged Institutes registering a strong presence on
                Pune's educational horizon. Since inception, the Institutes
                managed by SCES, have maintained high academic standards and have
                successfully provided trained manpower to the industrial and
                services sector of the country. These institutes are now listed
                amongst the top colleges not just in Pune, but also in Maharashtra
                and India. With a modest strength of 60 students pursuing a single
                course, SCES has grown steadily and today boasts of 14 Institutes,
                having more than 8000 students from all over India pursuing
                multi-disciplinary, graduate & post-graduate programs. The
                objective of the institute is providing 'Management education in a
                corporate environment', has been possible due to the sincere and
                dedicated efforts of the members of SCES, who have invaluable
                experience in varied areas like academics, industry, service and
                social-world.
              </div>
              
              {/* Read More/Less Button for mobile */}
              <div className="md:hidden mt-4 text-center">
                <button
                  onClick={() => setIsScesExpanded(!isScesExpanded)}
                  className="text-[#ffb088] font-medium text-sm hover:underline"
                >
                  {isScesExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STAFF DROPDOWN SECTION */}
        <div className="border-t border-b border-slate-200">
          {/* Dropdown Toggle Button */}
          <button
            onClick={() => setShowFaculties(!showFaculties)}
            className="w-full py-4 sm:py-6 md:py-8 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer outline-none"
          >
            <div className="flex items-center gap-2 sm:gap-3 text-[#10404A] group-hover:text-[#fb7035] transition-colors">
              <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase">
                Our Faculty & Staff
              </h3>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 ${
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
            <p className="text-xs text-slate-400 mt-1 sm:mt-2 font-medium tracking-widest opacity-80 group-hover:opacity-100">
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
              <div className="bg-[#1F6D71] px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-10 lg:py-12 rounded-md">
                {/* Combined Staff Section */}
                <div className="mb-12 sm:mb-14 md:mb-16">
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {displayedStaff.map((person, index) => (
                      <div
                        key={index}
                        className="
                          bg-[#3aafa9]
                          rounded-lg sm:rounded-xl
                          shadow-md
                          border border-gray-200
                          overflow-hidden
                          hover:shadow-lg
                          transition-shadow duration-300
                          flex flex-col
                          h-full
                        "
                      >
                        {/* Staff Image - SQUARE for mobile, rectangle for desktop */}
                        <div className="w-full aspect-square sm:aspect-auto sm:h-56 md:h-64 lg:h-72 xl:h-84 overflow-hidden bg-gray-50">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Staff Info */}
                        <div className="p-3 sm:p-4 flex flex-col flex-grow">
                          <h3 
                            className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: '2',
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              minHeight: '2.5rem',
                            }}
                          >
                            {person.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-white mb-1">
                            {person.role}
                          </p>
                          {person.subRole && (
                            <p 
                              className="text-xs text-white mb-1 sm:mb-2"
                              style={{
                                display: '-webkit-box',
                                WebkitLineClamp: '1',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {person.subRole}
                            </p>
                          )}
                          {person.expertise && (
                            <p 
                              className="text-xs text-white mb-2 sm:mb-3 flex-grow"
                              style={{
                                display: '-webkit-box',
                                WebkitLineClamp: '3',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {person.expertise}
                            </p>
                          )}

                          <div className="w-full flex items-center justify-between mt-auto">
                            <div>
                              <span
                                className={`
                                  inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full
                                  ${
                                    person.type === "teaching"
                                      ? "bg-[#fb7035] text-white"
                                      : "bg-[#fb7035] text-white"
                                  }
                                `}
                              >
                                {person.type === "teaching" ? "Teaching" : "Non-Teaching"}
                              </span>
                            </div>

                            <div className="flex gap-1 sm:gap-2">
                              {person.linkedin && (
                                <button
                                  className="text-white hover:text-[#0077B5] transition-colors p-1"
                                  aria-label="LinkedIn profile"
                                >
                                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                  </svg>
                                </button>
                              )}
                              {person.website && (
                                <button
                                  className="text-white hover:text-[#10404A] transition-colors p-1"
                                  aria-label="Website"
                                >
                                  <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More/Less Button for All Staff */}
                  {allStaff.length > 20 && (
                    <div className="flex justify-center mt-8 sm:mt-10">
                      <button
                        onClick={() => setShowAllStaff(!showAllStaff)}
                        className="
                          px-4 sm:px-6 md:px-8 py-2 sm:py-3
                          bg-gradient-to-r from-[#FF8B61] to-[#FF8B61]/80
                          text-white
                          rounded-full
                          font-semibold text-sm sm:text-base
                          hover:shadow-lg
                          transition-all duration-300
                          flex items-center gap-1 sm:gap-2
                        "
                      >
                        {showAllStaff ? (
                          <>
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                            Show Less
                          </>
                        ) : (
                          <>
                            Show More (+{allStaff.length - 20})
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
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