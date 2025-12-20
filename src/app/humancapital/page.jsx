"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGlobe } from "react-icons/fa";

/* =========================
   DATA
========================= */

// Teaching Staff (existing)
const teachingStaff = [
  {
    name: "Dr. Virendra Vasant Tatake",
    role: "Director",
    expertise: "Finance",
    image: "/Faculty/Dr-Virendra-Tatake.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Dr. Pallavi Shrirang Sajanapwar",
    role: "Dean Academics and Research",
    expertise: "Marketing and General Management",
    image: "/Faculty/Dr_Pallavi_Sajanapawar.png",
  },
  {
    name: "Dr. Aatish Dilip Zagade",
    role: "Deputy Director",
    expertise: "Human Resource & Marketing Management",
    image: "/Faculty/Dr-Aatish-Zagade.jpg",
    linkedin: true,
    website: true,
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
  },
  {
    name: "Dr. Priyanka Rohan Darekar",
    role: "Associate Professor",
    subRole: "Learning Facilitator (Human Resources)",
    expertise: "Human Resource & General Management",
    image: "/Faculty/Dr_Priyanka_Darekar_New.png",
    linkedin: true,
    website: true,
  },
  {
    name: "Dr. Aniruddha Vilas Thuse",
    role: "Associate Professor",
    expertise: "Financial Management",
    image: "/Faculty/Dr_Anirudha_Thus_New.png",
    linkedin: true,
  },
  {
    name: "Dr. Poonam Avinash Wani",
    role: "Assistant Professor",
    subRole: "Learning Facilitator (Finance)",
    expertise: "Financial & Marketing Management",
    image: "/Faculty/Dr_Poonam_Wani_New.png",
    linkedin: true,
    website: true,
  },
  {
    name: "Dr. Prashant Dubey",
    role: "Assistant Professor",
    subRole: "Learning Facilitator (Marketing)",
    expertise: "Marketing & Financial Management",
    image: "/Faculty/Dr-Prashan-Dubey.jpg",
  },
  {
    name: "Mr. Mahesh Ganpatrao Bhagat",
    role: "Assistant Professor",
    subRole:
      "Chief Exam Officer (IGSB) / Learning Facilitator Operations & Supply Chain Management",
    expertise: "Human Resource Management",
    image: "/Faculty/Prof-Mahesh-Bhagat.jpg",
  },
  {
    name: "Dr. Ashish Krishna Vyas",
    role: "Assistant Professor",
    expertise: "Human Resource Management",
    image: "/Faculty/Dr_Ashish-Vyas.png",
    linkedin: true,
    website: true,
  },
  {
    name: "Dr. Neha Chaudhry",
    role: "Assistant Professor",
    subRole: "Finance Management",
    image: "/Faculty/Neha-Chaudhry-New-img.png",
    linkedin: true,
    website: true,
  },
  {
    name: "Mr. Jayant Arun Joshi",
    role: "Deputy Director Corporate Relations, Assistant Professor",
    subRole: "Placement Coordinator",
    expertise: "Marketing & Financial Management",
    image: "/Faculty/Prof-Jayant-Joshi.jpg",
    linkedin: true,
  },
  {
    name: "Mr. Amol Kundalik Ankush",
    role: "Assistant Professor",
    subRole: "Event Coordinator",
    expertise: "Marketing & Operations Managment",
    image: "/Faculty/Prof-Amol-Ankush.jpg",
  },
  {
    name: "Ms. Girija Deepak Shirurkar",
    role: "Assistant Professor",
    expertise: "Human Resource Management and General Management",
    image: "/Faculty/Prof-Girija-Shirurkar.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Mrs. Snehal Ganesh Masurkar",
    role: "Assistant Professor",
    expertise: "Marketing & Human Resource Management",
    image: "/Faculty/Prof_Snehal_Masulkar_New.png",
    linkedin: true,
  },
  {
    name: "Mrs. Chhaya Shivkumar Bodkurwar",
    role: "Assistant Professor",
    expertise: "Business Analytics",
    image: "/Faculty/Prof-chhaya-bodkurwar.png",
    linkedin: true,
  },
  {
    name: "Mrs. Siddhi Sanjay Dhoble",
    role: "Assistant Professor",
    expertise: "Finance",
    image: "/Faculty/Ms-Siddhi-Dhoble.png",
    linkedin: true,
  },
  {
    name: "Mrs. Neha Shah",
    role: "Assistant Professor",
    expertise: "Banking & Finance",
    image: "/Faculty/Neha-Shah-Img.png",
    linkedin: true,
  },
  {
    name: "Mr. Neelesh Madhukar Atre",
    role: "Professor of Practice",
    expertise: "Marketing Management",
    image: "/Faculty/Mr-Neelesh-Atre.png",
    linkedin: true,
  },
  {
    name: "Mr. Santosh Vitthalrao Dagade",
    role: "Librarian",
    expertise: "Library and Information Science",
    image: "/Faculty/Santosh-Dagade.jpg",
  },
];



// Non-Teaching Staff
const nonTeachingStaff = [
  {
    name: "Mr. Yogesh Dilip Gheware",
    role: "Office Superintendent",
    expertise: "MBA (HR)",
    image: "/Faculty/Yogesh-Gheware.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Mr. Dinesh Vilas Khodke",
    role: "System Administrator",
    expertise: "MBA (HR)",
    subRole: "Microsoft certified Professional",
    image: "/Faculty/Dinesh-Khodke.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Mr. Nilesh Govind Yedre",
    role: "Account Officer",
    expertise: "MBA (Finance)",
    subRole: "Diploma in Taxation Law",
    image: "/Faculty/Nilesh-Yendre.jpg",
    website: true,
  },
  {
    name: "Mr. Ashish Bhimrao Jadhav",
    role: "Junior Clerk",
    expertise: "BBA",
    image: "/Faculty/Ashish-Jadhav.jpg",
    website: true,
  },
  {
    name: "Mr. Jagannath Dhanaji Kadam",
    role: "Senior Clerk",
    expertise: "BA",
    image: "/Faculty/Jagannath-Kadam.jpg",
    website: true,
  },
  {
    name: "Mr. Bhagavan Shivaji Patil",
    role: "Senior Admin Officer",
    image: "/Faculty/Jiban-Murikal.jpg",
    linkedin: true,
    website: true,  
  },
  {
    name: "Mr. Balasaheb Chhaburao Shinde",
    role: "Admin Officer",
    image: "/Faculty/Balasaheb-Shinde.jpg",
    website: true,
  },
  {
    name: "Mr. Solomon Sanjay Gaikwad",
    role: "Social Media Manager",
    expertise:
      "Branding Officer with 7 years of media experience in Mass Communication & Journalism",
    subRole: "BA Journalism and Mass Communication",
    image: "/Faculty/Solomon-Gaikwad.jpg",
    linkedin: true,
  },
  {
    name: "Mr. Rohan Ravindra Shinde",
    role: "IT Lab Assistant",
    expertise: "BCA, MCA",
    image: "/Faculty/Rohan-Shinde.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Mr. Vaibhav Bhimrao Jadhav",
    role: "Executive Assistant",
    image: "/Faculty/Mr.jpg",
    linkedin: true,
    website: true,
  },
  {
    name: "Mr. Amit Shashikant Kothari",
    role: "coming soon",
    image: "/Faculty/Mr.jpg",
    linkedin: true,
    website: true,
  },
];


// Visiting Staff
const visitingStaff = [
  {
    name: "Mr. Swapnil Kharde",
    role: "Visiting Faculty",
    expertise: "MBA Marketing Management",
    experience: "12 Years",
    image: "/faculty/default.jpg",
  },
  {
    name: "Mr. Sidharth Bajpai",
    role: "Visiting Faculty",
    expertise: "MBA Marketing Management",
    experience: "35 Years",
    image: "/faculty/default.jpg",
  },
];

/* =========================
   PAGE
========================= */

export default function Page() {
  const [activeTab, setActiveTab] = useState("teaching");

  const getActiveData = () => {
    if (activeTab === "teaching") return teachingStaff;
    if (activeTab === "nonTeaching") return nonTeachingStaff;
    return visitingStaff;
  };

  return (
    <div className="bg-gray-100">

      {/* BANNER */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/AboutBanner1.jpg"
          alt="Faculty Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* TABS */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex gap-6 px-6 py-6">
          <TabButton
            active={activeTab === "teaching"}
            onClick={() => setActiveTab("teaching")}
          >
            Teaching Staff
          </TabButton>
          <TabButton
            active={activeTab === "nonTeaching"}
            onClick={() => setActiveTab("nonTeaching")}
          >
            Non-Teaching Staff
          </TabButton>
          <TabButton
            active={activeTab === "visiting"}
            onClick={() => setActiveTab("visiting")}
          >
            Visiting Staff
          </TabButton>
        </div>
      </div>

      {/* CARDS */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {getActiveData().map((item, index) => (
            <FacultyCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-full transition ${
        active
          ? "bg-secondary text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

function FacultyCard({ data }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex min-h-[260px]">

      {/* BLUE SHAPE */}
      <div className="absolute left-0 top-0 h-full w-[40%] bg-secondary clip-path-slant" />

      {/* IMAGE */}
      <div className="relative z-10 flex items-center pl-12">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200">
          <Image
            src={data.image}
            alt={data.name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex-1 px-10 py-8">
        <h3 className="text-2xl font-bold text-secondary">{data.name}</h3>

        <p className="font-semibold text-gray-800 mt-1">{data.role}</p>

        {data.subRole && (
          <p className="font-semibold text-gray-700">{data.subRole}</p>
        )}

        {data.expertise && (
          <p className="text-gray-700 mt-3 text-sm">{data.expertise}</p>
        )}

        {data.experience && (
          <p className="text-gray-700 text-sm mt-1">
            Experience: {data.experience}
          </p>
        )}

        {(data.linkedin || data.website) && (
          <div className="flex items-center gap-4 mt-6">
            {data.linkedin && (
              <FaLinkedinIn className="text-[#0a66c2] text-xl cursor-pointer" />
            )}
            {data.website && (
              <FaGlobe className="text-gray-700 text-xl cursor-pointer" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
