"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

const AwardDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id; // Now from dynamic route: /awards/1

  // Images are now in /public folder
  const bannerImg = "/BannerOverviewPage.jpg";
  const placeholderImg = "/award-placeholder.jpg";

  const awards = {
    1: {
      title: "Best Academia Industry Alliance Award",
      date: "25th April, 2025",
      image: placeholderImg,
      content: `
        Indira College of Engineering and Management, Pune received the <b>“Best Academia Industry Alliance Award”</b> by <b>Education World</b> at The Grand, New Delhi on 25th April 2025 for AY 2025-26.<br/><br/>
        This award recognizes ICEM's commitment to fostering industry-academia partnerships, innovation-driven education, and hands-on student exposure through internships and collaborative projects.<br/><br/>
        The event featured top academic institutions and corporate leaders acknowledging initiatives that bridge skill gaps and prepare future-ready graduates.<br/><br/>
        ICEM continues to lead as a model for industry-oriented engineering education in India.
      `,
    },
    2: {
      title: "Innovation and Excellence Awards 2022",
      date: "26th March, 2022",
      image: placeholderImg,
      content: `
        <b>Indira College of Engineering and Management (ICEM)</b> and <b>Indira Global Business School (IGBS)</b> hosted the <b>Indira Innovation and Excellence Awards 2022</b> under the theme <b>"Innovate to Excel"</b>.<br/><br/>
        The awards honored leading Indian Innovators, Entrepreneurs, and Senior Leaders from reputed organizations for their contributions to humanity and technological advancement.<br/><br/>
        The event celebrated innovation as the driving force of human progress — from the invention of the wheel to AI-driven machines and biotech breakthroughs.<br/><br/>
        <b>Highlights:</b>
        <ul class='list-disc ml-6'>
          <li>Morning sessions with experts from Civil, Mechanical, Computer, MCA, and MBA disciplines.</li>
          <li>Evening HR & Innovation Awards Ceremony recognizing outstanding innovators.</li>
          <li>Cultural performances, stand-up by Mandar Bhide, and a concert by the Lambada Band.</li>
        </ul><br/>
        The event emphasized nurturing creative thinking among young professionals and showcasing India's innovation potential.
      `,
    },
    3: {
      title: "Sample Award 3",
      date: "15th January, 2023",
      image: placeholderImg,
      content: `Sample content for award 3.`,
    },
    // Add more awards as needed...
  };

  const award = awards[id];

  if (!award) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-white text-gray-700">
        <h1 className="text-2xl font-bold mb-2">Award Not Found</h1>
        <p className="text-gray-600 mb-4">Requested ID: {id}</p>
        <button
          onClick={() => router.push("/awards")}
          className="text-primary font-semibold hover:underline"
        >
          ← Back to All Awards
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src={bannerImg}
          alt="Award Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Award Details
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => router.push("/campus-life/icem-awards")}
          className="text-primary font-semibold mb-6 hover:underline"
        >
          ← Back to All Awards
        </button>

        <h2 className="text-3xl font-bold text-secondary mb-2">
          {award.title}
        </h2>
        <p className="text-sm text-gray-500 mb-6">Published on {award.date}</p>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-6">
          <Image
            src={award.image}
            alt={award.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
          />
        </div>

        <div
          className="text-gray-700 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: award.content }}
        />
      </div>
    </div>
  );
};

export default AwardDetails;
