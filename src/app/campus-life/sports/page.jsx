"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SportsRecreation() {

  const bannerImg = "/Facilities/FacilitiesSports.jpg";

  const achievements = [
    {
      title: "Table Tennis Runners-Up",
      description:
        "The ICEM Parandwadi Girls Team clinched the Runner-up position in the SPPU Intercollegiate Table Tennis Tournament, honoured by national player Mr. Rajat Kadam.",
    },
    {
      title: "National Gold Medal (Athletics)",
      description:
        "Mr. Dhanaraj Raut (B.E. Civil) brought pride to the institute and state by winning a Gold Medal while representing the Maharashtra Team at the Senior National Championship in Karnataka.",
    },
    {
      title: "Gold Medal in Boxing",
      description:
        "Ms. Kartikee Salve (T.E. AI-DS) demonstrated exceptional skill to secure a Gold Medal in Boxing, earning a qualification for the SPPU Interzonal round.",
    },
    {
      title: "Bronze Medal in Fencing",
      description:
        "Our talented fencer, Ms. Surbhi Jadhav, showcased her prowess by winning a Bronze Medal and qualifying for the prestigious SPPU Interzonal Competition.",
    },
    {
      title: "Water Polo Runners-Up",
      description:
        "The ICEM Water Polo Team secured the Runner-up trophy at the SPPU Intercollegiate tournament, with team members Mr. Dhanraj Raut and Mr. Vallabh Lawate selected for the Pune District Team.",
    },
    {
      title: "Mallkhambh Qualification",
      description:
        "Mr. Deepak Yadav (S.E. Computer) excelled in his sport, qualifying to represent ICEM at the SPPU Interzonal Mallkhambh Competition.",
    },
  ];

  const highlight = {
    title: "Arjuna Award & Alumnus Felicitation",
    description1:
      "In a moment of immense pride, our alumnus Mr. Sachin Khilari was honored with the prestigious Arjuna Award by the Honorable President of India, Smt. Droupadi Murmu.",
    description2:
      "The institute also proudly felicitated Mr. Sachin Khilari (Mechanical Engineering, Batch 2013), a Paralympic Silver Medallist in Men's Shot Put F46, during the Induction Programme 2024-25.",
  };

  return (
    <div className="max-w-full mx-auto bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={bannerImg}
          alt="ICEM Sports"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Sports & Recreation
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-full flex flex-col md:flex-row gap-10 py-1 px-6 pl-3 ">
        {/* Left Section */}
        <div className=" bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            About Sports & Recreation
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At <b>ICEM</b>, we believe in the holistic development of our
            students, and sports play a vital role in shaping character,
            building teamwork, and promoting physical fitness.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our institute provides state-of-the-art sports facilities and
            encourages students to participate in various indoor and outdoor
            sports activities at university, state, and national levels.
          </p>

          <h3 className="text-xl font-semibold text-secondary mb-4">
            Sports Facilities
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Well-equipped gymnasium with modern equipment</li>
            <li>Indoor sports complex for table tennis, chess, and carrom</li>
            <li>Outdoor playground for cricket, football, and athletics</li>
            <li>Basketball and volleyball courts</li>
          </ul>
          {/* Sports Infrastructure Grid */}
          <h2 className="text-2xl font-bold text-secondary mt-10 mb-6">
            Sports Infrastructure
          </h2>

          <div className="overflow-hidden py-4 relative">
            <div className="flex gap-8 animate-scroll">
              {[
                { name: "Badminton", img: "/sports/football.webp" },
                { name: "Volleyball", img: "/sports/volleyball1.webp" },
                { name: "Cricket", img: "/sports/cricket.webp" },
                { name: "Gymnastics", img: "/sports/basketball.webp" },
                { name: "Athletics", img: "/sports/cricket.webp" },
                { name: "Basketball", img: "/sports/basketball.webp" },
                { name: "Chess", img: "/sports/basketball.webp" },
                { name: "Football", img: "/sports/football.webp" },
                { name: "Kabbadi", img: "/sports/kabbadi.webp" },
                { name: "Table Tennis", img: "/sports/basketball.webp" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[270px] h-[260px] rounded-2xl overflow-hidden shadow-md flex-shrink-0"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                    {item.name}
                  </div>
                </div>
              ))}

              {/* Duplicate for seamless looping */}
              {[
                { name: "Badminton", img: "/sports/football.webp" },
                { name: "Volleyball", img: "/sports/volleyball1.webp" },
                { name: "Cricket", img: "/sports/cricket.webp" },
                { name: "Gymnastics", img: "/sports/basketball.webp" },
                { name: "Athletics", img: "/sports/cricket.webp" },
                { name: "Basketball", img: "/sports/basketball.webp" },
                { name: "Chess", img: "/sports/basketball.webp" },
                { name: "Football", img: "/sports/football.webp" },
                { name: "Kabbadi", img: "/sports/kabbadi.webp" },
                { name: "Table Tennis", img: "/sports/basketball.webp" },
              ].map((item, idx) => (
                <div
                  key={"dup-" + idx}
                  className="relative min-w-[270px] h-[260px] rounded-2xl overflow-hidden shadow-md flex-shrink-0"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Achievements Section */}
          <h3 className="text-2xl font-semibold text-secondary mb-6">
            Sports Achievements
          </h3>

          <div className="w-full space-y-6 mb-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white flex items-start justify-between gap-6"
              >
                {/* Left Text */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-secondary">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Right Image Placeholder */}
                <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                  Image
                </div>
              </div>
            ))}
          </div>

          {/* Special Highlight Section */}
          <div className="mt-8 p-8 border-2 border-yellow-500 bg-yellow-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-yellow-700">
              {highlight.title}
            </h3>
            <p className="mt-4 text-gray-800 leading-relaxed">
              {highlight.description1}
            </p>
            <p className="mt-3 text-gray-800 leading-relaxed">
              {highlight.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
