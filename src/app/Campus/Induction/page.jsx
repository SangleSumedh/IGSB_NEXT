"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaImage,
  FaVideo,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ---------------- DATA ---------------- */

const timelineData = [
  {
    topic: "Campus to Corporate",
    speakerName: "Mr. Prasad Narayan",
    designation: "Vice President",
    dateTime: "10th September 2025 | 10:00 AM Onwards",
    speakerImage: "/boy.png", // add image later
    companyLogo: "/logos/1.jpg", // add logo later
    icon: <FaImage size={22} className="text-white" />,
    color: "bg-green-500",
    // leapfrog
  },
  {
    topic: "Sahaj Yoga Meditation",
    speakerName: "Mr. Dhanesh Paradkar",
    designation: "Business Development & Customer Relation Manager",
    dateTime: "10th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // vodafone
  },
  {
    topic: "India Ten on Ten",
    speakerName: "Mr. Nishant Modi",
    designation: "Vice President",
    dateTime: "11th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // edelweiss
  },
  {
    topic: "Decoding Happiness",
    speakerName: "Ms. Smita Shetty",
    designation: "Managing Trustee Navkshitij , Pune",
    dateTime: "11th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Navkshitij
  },
  {
    topic: "Make Friends with AI",
    speakerName: "Ms. Nithya N A",
    designation: "Manager Internal Audit Europe & Asia PAC",
    dateTime: "12th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Eaton
  },
  {
    topic: "Learing Through Drama",
    speakerName: "Mr. Soham Dadarkar",
    designation: "Facilitator and Founder",
    dateTime: "12th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Soham Dadarkar Academy
  },
  {
    topic: "The Executive Edge : Art of Dressing & Effective Communication",
    speakerName: "Ms. Neha Ratnakar",
    designation: "Executive Presence Consultant & Corporate Trainer",
    dateTime: "13th Spetember 2025 | 10.30 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // note sure
  },
  {
    topic: "The Pattern of Potential",
    speakerName: "Ms. Ummeaiman Ansari",
    designation: "Co-founder Gryphon Academy Pvt Ltd",
    dateTime: "13th Spetember 2025 | 02.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Gryphon Academy
  },
  {
    topic: "The Z Factor : Rethinking Success in the Corporate World",
    speakerName: "Ms. Trupti Pansare",
    designation: "Director & CHRQ , Intelliment",
    dateTime: "15th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Intelliment
  },
  {
    topic: "Pharma Horizons : Unlocking Careers after MBA",
    speakerName: "Mr. Parikshit Baviskar",
    designation: "Regional Business Manager , ERIS Lifesciences",
    dateTime: "15th Spetember 2025 | 01.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // ERIS Lifesciences
  },
  {
    topic: "Placement Counselling",
    speakerName: "Mr. Jayant Joshi",
    designation: "Deputy Director , Corporate Relations",
    dateTime: "15th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // not sure
  },
  {
    topic: "Managing Self is everything",
    speakerName: "Mr. Amey Joshi",
    designation: "Not Sure",
    dateTime: "16th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    //not sure
  },
  {
    topic: "Understading POSH (Prevention of Sexual Harassment)",
    speakerName: "Ms. Meetali Sawalekar",
    designation: "Advocate",
    dateTime: "16th Spetember 2025 | 01.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // not sure
  },
  // {
  //   topic: "Battle of Brands",
  //   speakerName: "ICEM Faculty",
  //   designation: "ICEM",
  //   dateTime: "16th Spetember 2025 | 03.00 PM Onwards",
  //   speakerImage: "/boy.png",
  //   companyLogo: "/logos/1.jpg",
  //   icon: <FaVideo size={22} className="text-white" />,
  //   color: "bg-red-500",
  
  // },
  {
    topic: "Career Opportunities in Human Capital for Management Graduates",
    speakerName: "Mr. Santosh Bhave",
    designation: "Ex. Director HR and IR Bharat Forge Ltd",
    dateTime: "17th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Bharat Forge
  },
  {
    topic: "Good to Great",
    speakerName: "Ms. Vahida Pathan",
    designation: "Founder & Director , NEORARE SERVICES LLP",
    dateTime: "17th Spetember 2025 | 01.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // NEORARE SERVICES LLP
  },
  {
    topic: "Effective Communication : Wings to Your Professional Metamorphosis",
    speakerName: "Ms. Shweta Lamda",
    designation: "Counselling Psychologist",
    dateTime: "17th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // not sure
  },
  {
    topic: "Corporate Yodha - Unleashing the Power of Qu in You ",
    speakerName: "Prof. Chetan Wakalkar",
    designation: "Academic Advisor , Indira University and IGI",
    dateTime: "18th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // IU
  },
  {
    topic: "Campus to Corporate Transformation",
    speakerName: "Mr. Kiran Panchal",
    designation: "Business Consultant to Atlas Copco Group Sweden and Academies",
    dateTime: "18th Spetember 2025 | 02.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    // Atlas Copco
  },
  {
    topic: "Unlocking potential for future Champions",
    speakerName: "Mr. Dilip Chaudhary",
    designation: "India Talent Acquisition Leader, Syngenta.",
    dateTime: "19th Spetember 2025 | 10.00 AM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    
  },
  {
    topic: "HR Functions in various companie",
    speakerName: "Dr. Tasneem Khokar",
    designation: "Expert Trainer",
    dateTime: "19th Spetember 2025 | 01.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    
  },
  {
    topic: "Sales in the City: Navigating Modern Business Etiquette",
    speakerName: "Mr. Ashish Gandevia",
    designation: "Mortgage, Magicbricks.",
    dateTime: "19th Spetember 2025 | 03.00 PM Onwards",
    speakerImage: "/boy.png",
    companyLogo: "/logos/1.jpg",
    icon: <FaVideo size={22} className="text-white" />,
    color: "bg-red-500",
    
  },
  
];

/* ---------------- PAGE ---------------- */

export default function Page() {
  const blocksRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target.querySelector(".timeline-card");
            card?.classList.remove(
              "opacity-0",
              "md:-translate-x-24",
              "md:translate-x-24"
            );
            card?.classList.add("opacity-100", "translate-x-0");

            const icon = entry.target.querySelector(".timeline-icon");
            icon?.classList.remove("scale-0");
            icon?.classList.add("scale-100");
          }
        });
      },
      { threshold: 0.3 }
    );

    blocksRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#e9f0f5] min-h-screen pb-10">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#5c1a5e] via-[#7b1e63] via-[#9e274e] to-[#4a1220] h-52 flex flex-col items-center justify-center mb-20 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">
          METAMORPHOSIS
        </h1>
        <p className="mt-2 text-white text-lg italic tracking-wide">
          Unfolding Wings of Knowledge
        </p>
      </header>

      {/* TIMELINE */}
      <section className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2" />

        <div className="space-y-24">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (blocksRef.current[index] = el)}
                className="relative flex items-center"
              >
                {/* CARD */}
                <div
                  className={`timeline-card w-full md:w-[45%] bg-gradient-to-r from-[#5c1a5e] via-[#7b1e63] via-[#9e274e] to-[#4a1220] rounded-2xl shadow-xl p-6
                  opacity-0 transition-all duration-700 ease-out
                  ${
                    isLeft
                      ? "md:-translate-x-24 md:mr-auto"
                      : "md:translate-x-24 md:ml-auto"
                  }`}
                >
                  {/* Topic */}
                  <h2 className="text-xl font-extrabold text-white mb-5 italic">
                    {item.topic}
                  </h2>

                  {/* Speaker + Company */}
                  <div className="flex items-center gap-4">
                    {/* Speaker Image */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={item.speakerImage}
                        alt={item.speakerName}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>

                    {/* Speaker Info */}
                    <div className="flex-1">
                      <p className="font-semibold text-white">
                        {item.speakerName}
                      </p>
                      <p className="text-sm text-white">
                        {item.designation}
                      </p>
                    </div>

                    {/* Company Logo */}
                    <div className="w-12 h-12 ">
                      <Image
                        src={item.companyLogo}
                        alt="Company Logo"
                        width={48}
                        height={48}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* ICON */}
                <div
                  className={`timeline-icon absolute left-1/2 -translate-x-1/2
                  w-14 h-14 rounded-full flex items-center justify-center
                  shadow-lg border-4 border-white ${item.color}
                  scale-0 transition-transform duration-300 ease-out`}
                >
                  {item.icon}
                </div>

                {/* DATE & TIME (TIMELINE SIDE ONLY) */}
                <span
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-600 text-sm whitespace-nowrap hidden md:block
                  ${
                    isLeft
                      ? "left-1/2 ml-16"
                      : "right-1/2 mr-16"
                  }`}
                >
                  {item.dateTime}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
