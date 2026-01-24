"use client";
import Image from "next/image";
import React, { useState } from "react";

const trustees = [
  {
    name: "Smt. Sarita Shankar Wakalkar",
    role: "President",
    image: "/banners/sarita-shankar.webp",
  },
  {
    name: "Dr. Tarita Shankar",
    role: "Chief Managing Trustee and Founder Secretary",
    image: "/banners/dr-tarita-shankar-chairperson.webp",
  },
  {
    name: "Mr. Shardul Nitin Gangal",
    role: "Vice - President",
    image: "/banners/Mr-Shardul-Gangal.webp",
  },
  {
    name: "Mr. Sahil Tarita Shankar",
    role: "Joint Secretary",
    image: "/banners/Sahil-Mehendale.webp",
  },
  {
    name: "Mr. Pilaji Sursingh Jadhavrao",
    role: "Treasurer",
    image: "/banners/pilaji-sursingh-jadhavrao.webp",
  },
  {
    name: "Mr. Vasant Maruti Maske",
    role: "Trustee Member",
    image: "/banners/VASANT-MARUTI-MASKE.webp",
  },
  {
    name: "Mr. Shaan Tarita Shankar",
    role: "Trustee Member",
    image: "/banners/SHAAN-ADITYA-MEHENDALE.webp",
  },
];

const leaders = [
  {
    name: "DR. TARITA SHANKAR",
    title: "Chairperson & Chief Mentor-IGI",
    image: "/Home/TS.webp",
    message:
      "Dear Students, For over three decades, our institutions have stood as catalysts of transformation, bridging rigorous academics with real-world relevance. We understand that the leaders of tomorrow need more than knowledge; they need vision, adaptability, and a heart for meaningful change. At IGSB, we cultivate an ecosystem where innovation thrives and ethics lead. Through industry-aligned curricula, immersive learning experiences, and a faculty dedicated to mentorship, we empower each student to become not just a skilled professional, but a compassionate and conscious contributor to society. Our focus extends beyond academic brilliance; we nurture resilient, empathetic, and globally minded individuals who value integrity, sustainability, and inclusive progress. In a rapidly evolving world, we remain committed to integrating cutting-edge technology and outcome-driven pedagogy, ensuring our learners are always a step ahead. Here, you will discover more than an education; you will find a launchpad for your aspirations, a space to grow, lead, and inspire. Together, let's build a future where excellence is a habit, learning is lifelong, and success is measured by the impact we create. The journey ahead is yours to shape. We are here to guide, support, and foster your spirit.  ",
    reverse: false,
  },
  {
    name: "Dr.Virendra Tatake",
    title: "Director",
    image: "/Home/TakdakeSir.webp",
    message:
      "We aim to nurture a culture of curiosity, research, and continuous learning. By encouraging critical thinking and ethical responsibility, we prepare students not only for successful careers but also for meaningful contributions to society.",
    reverse: true,
  },
];

// Teaching Staff IGSB - Simplified as per requirements
const teachingStaff = [
  {
    name: "Dr. Virendra Tatake",
    role: "Director",
    image: "/Edited/Dr. Virendra Tatake.webp",
    type: "teaching",
  },
  {
    name: "Dr. Pallavi Sajanapwar",
    role: "Dean Academics and Research",
    image: "/Edited/Dr. Pallavi Sajanapwar.webp",
    type: "teaching",
  },
  {
    name: "Dr. Aatish Zagade",
    role: "Deputy Director",
    image: "/Edited/Dr. Aatish Zagade.webp",
    type: "teaching",
  },
  {
    name: "Dr. Anuradha Phadnis",
    role: "Associate Professor",
    image: "/Edited/Dr. Anuradha Phadnis.webp",
    type: "teaching",
  },
  {
    name: "Dr. Priyanka Darekar",
    role: "Associate Professor",
    image: "/Edited/Dr. Priyanka Darekar.webp",
    type: "teaching",
  },
  {
    name: "Dr. Aniruddha Thuse",
    role: "Associate Professor",
    image: "/Edited/Dr. Aniruddha Thuse.webp",
    type: "teaching",
  },
  {
    name: "Dr. Poonam Wani",
    role: "Assistant Professor",
    image: "/Edited/Dr. Poonam Wani.webp",
    type: "teaching",
  },
  {
    name: "Dr. Prashant Dubey",
    role: "Assistant Professor",
    image: "/Edited/Dr. Prashant Dubey.webp",
    type: "teaching",
  },
  {
    name: "Mr. Mahesh Bhagat",
    role: "Assistant Professor",
    image: "/Edited/Mr. Mahesh Bhagat.webp",
    type: "teaching",
  },
  {
    name: "Dr. Ashish Vyas",
    role: "Assistant Professor",
    image: "/Edited/Dr. Ashish Vyas.webp",
    type: "teaching",
  },
  {
    name: "Dr. Neha Chaudhry",
    role: "Assistant Professor",
    image: "/Edited/Dr. Neha Chaudhry.webp",
    type: "teaching",
  },
  {
    name: "Mr. Jayant Joshi",
    role: "Deputy Director Corporate Relations",
    image: "/Edited/Mr. Jayant Joshi.webp",
    type: "teaching",
  },
  {
    name: "Mr. Amol Ankush",
    role: "Assistant Professor",
    image: "/Edited/Mr. Amol Ankush.webp",
    type: "teaching",
  },
  {
    name: "Ms. Gijira Shirurkar",
    role: "Assistant Professor",
    image: "/Edited/Ms. Gijira Shirurkar.webp",
    type: "teaching",
  },
  {
    name: "Mrs. Snehal Masurkar",
    role: "Assistant Professor",
    image: "/Edited/Ms. Snehal Masurkar.webp",
    type: "teaching",
  },
  {
    name: "Mrs. Chhaya Bodkurwar",
    role: "Assistant Professor",
    image: "/Edited/Ms. Chhaya Bodkurwar.webp",
    type: "teaching",
  },
  {
    name: "Mrs. Siddhi Dhoble",
    role: "Assistant Professor",
    image: "/Edited/Ms. Siddhi Dhoble.webp",
    type: "teaching",
  },
  {
    name: "Mrs. Neha Shah",
    role: "Assistant Professor",
    image: "/Edited/Ms. Neha Shah.webp",
    type: "teaching",
  },
  {
    name: "Mr. Neelesh Atre",
    role: "Assistant Professor",
    image: "/Edited/Mr. Neelesh Atre.webp",
    type: "teaching",
  },
  {
    name: "Mr. Santosh Dagade",
    role: "Librarian",
    image: "/Edited/Mr. Santosh Dagade.webp",
    type: "teaching",
  },
];

// Non-Teaching Staff IGSB - Simplified as per requirements
const nonTeachingStaff = [
  {
    name: "Mr. Yogesh Gheware",
    role: "Office Superintendent",
    image: "/Edited/Yogesh Gheware.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Dinesh Khodke",
    role: "System Administrator",
    image: "/Edited/Mr. Dinesh Khodke.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Nilesh Yedre",
    role: "Account Officer",
    image: "/Edited/Mr. Nilesh Yedre.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Ashish Jadhav",
    role: "Junior Clerk",
    image: "/Edited/Mr. Ashish Jadhav.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Jagannath Kadam",
    role: "Senior Clerk",
    image: "/Edited/Mr. Jagannath Kadam.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Bhagavan Patil",
    role: "Sr. Admin Officer",
    image: "/Edited/Mr. Bhagavan Patil.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Balasaheb Shinde",
    role: "Admin Officer",
    image: "/Edited/Mr. Balasaheb Shinde.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Solomon Gaikwad",
    role: "Social Media Manager",
    image: "/Edited/Mr. Solomon Gaikwad.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Rohan Shinde",
    role: "IT Lab Assistant",
    image: "/Faculty/Rohan-Shinde.webp",
    type: "non-teaching",
  },
  {
    name: "Mr. Vaibhav Jadhav",
    role: "Executive Assistant",
    image: "/Edited/Mr. Vaibhav Jadhav.webp",
    type: "non-teaching",
  },
];

// Combined staff for display
const allStaff = [...teachingStaff, ...nonTeachingStaff];

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
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-72 lg:h-72 xl:w-84 xl:h-84">
                      <Image
                        src={leader.image}
                        alt={leader.title}
                        fill
                        className="
                          rounded-full
                          border-4 border-[#ffb088]
                          shadow-md object-cover object-top
                        "
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 288px"
                      />
                    </div>
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
                  {/* Image Container - SQUARE for mobile, rectangle for desktop */}
                  <div className="w-full aspect-square sm:aspect-auto sm:h-48 md:h-54 bg-gray-100 flex items-center justify-center text-gray-400 rounded-t-lg sm:rounded-t-xl group-hover:bg-gray-50 transition-colors overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 14vw"
                      />
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 flex-grow flex flex-col">
                    <h4 
                      className="font-bold text-white text-xs sm:text-sm md:text-sm group-hover:text-secondary transition-colors"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {person.name}
                    </h4>
                    <p className="text-white mt-1 text-xs sm:text-xs flex-grow">{person.role}</p>
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
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
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
                        {/* Staff Image - SQUARE for mobile, rectangle for desktop with object-contain */}
                        <div className="w-full aspect-square sm:aspect-auto sm:h-56 md:h-64 lg:h-72 xl:h-84 overflow-hidden bg-gray-50 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="object-cover object-top hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                            />
                          </div>
                        </div>

                        {/* Staff Info - Simplified */}
                        <div className="p-3 sm:p-4 flex flex-col flex-grow">
                          <h3 
                            className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2"
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
                          <p className="text-xs sm:text-sm font-medium text-white">
                            {person.role}
                          </p>

                          <div className="w-full flex items-center justify-between mt-auto pt-3">
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