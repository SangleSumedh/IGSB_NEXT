"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Research() {
  const [activeTab, setActiveTab] = useState("research");
  const [showMoreAchievements, setShowMoreAchievements] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        
        <div className="w-full px-6 py-12 xl:px-16 xl:py-8">
          {/* ===========================
              🔷 TABS
          ============================ */}
          <div className="flex flex-wrap justify-center gap-3 py-12">
            {[
              { id: "research", label: "Research" },
              { id: "conference", label: "Conference" },
              { id: "publications", label: "Publications" },
              { id: "resourcePerson", label: "Resource Person" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-secondary text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ===========================
              🔷 TAB CONTENT
          ============================ */}
          <div>
            {/* ===================== RESEARCH ===================== */}
            {activeTab === "research" && (
              <div className="bg-white px-6 py-16 rounded-2xl shadow-lg space-y-10 mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                  Research & Innovation
                </h2>

                <p className="text-md md:text-lg text-gray-700 leading-relaxed text-justify">
                  Education is considered to be a catalyst in change management and it is possible because of its ability to anticipate future trends and equip human resources with the required skills. Academic institutes should shoulder the responsibility to drive the market trends and provide necessary consultation to the industry for sustainable growth.

Research plays a vital role in grooming a teacher with contemporary skills and empowering learners with the wisdom to face future challenges. IGSB has consistently attempted to align its institutional growth and pivoted on research for a sustainable future. Faculty members in IGSB try to develop research acumen through persistent participation in research activities by publishing papers in reputed journals and working on research projects and other allied research activities.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-gray-700">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="p-3 border">Sr.No</th>
                        <th className="p-3 border">Description</th>
                        <th className="p-3 border">
                          No. Of Resources / Publications
                        </th>
                        <th className="p-3 border">Resource Person</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Ph.D Guide</td>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Dr. Virendra Tatake</td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">2</td>
                        <td className="p-3 border">Ph.D Faculty</td>
                        <td className="p-3 border text-center">5</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Anuradha Phadnis</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">3</td>
                        <td className="p-3 border">Book Publications</td>
                        <td className="p-3 border text-center">14</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">4</td>
                        <td className="p-3 border">
                          Research Paper – National
                        </td>
                        <td className="p-3 border text-center">9</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                          <p>Prof. Nilam Naidu</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">5</td>
                        <td className="p-3 border">
                          Research Paper – International
                        </td>
                        <td className="p-3 border text-center">8</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">6</td>
                        <td className="p-3 border">
                          Research Paper – UGC CARE
                        </td>
                        <td className="p-3 border text-center">13</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Virendra Tatake</p>
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">7</td>
                        <td className="p-3 border">Research Paper – SCOPUS</td>
                        <td className="p-3 border text-center">6</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">8</td>
                        <td className="p-3 border">Research Paper – ABDC</td>
                        <td className="p-3 border text-center">1</td>
                        <td className="p-3 border">Dr. Aatish Zagade</td>
                      </tr>

                      <tr>
                        <td className="p-3 border text-center">9</td>
                        <td className="p-3 border">Blogs</td>
                        <td className="p-3 border text-center">15</td>
                        <td className="p-3 border space-y-1">
                          <p>Dr. Aatish Zagade</p>
                          <p>Dr. Priyanka Darekar</p>
                          <p>Dr. Supriya Desai</p>
                          <p>Prof. Nilam Naidu</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ===================== CONFERENCE ===================== */}
            {activeTab === "conference" && (
              <div className="bg-white px-6 py-16 rounded-2xl shadow-lg space-y-12 mb-12">
                {/* AY 24-25 */}
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Academic Year 2024–25
                  </h2>

                  <p className="text-md md:text-lg text-gray-700 text-justify">
                    <strong>Fintech for inclusivity and sustainability</strong>
                    <br />
                    This conference was organized at IGSB to promote student
                    research activity. The conference saw a wonderful response
                    with 35 students participating and presenting research
                    papers on "Fintech for Inclusivity and Sustainability". The
                    inauguration was done by CMA Sagar Malpure, Chairperson,
                    ICMAI PCA Chapter. Valuable inputs were given by Prof.
                    Chetan Wakalkar (Academic Advisor - IGI) and Dr. Virendra
                    Tatake (Director - IGSB). The program successfully showcased
                    multiple dimensions of Fintech and encouraged student
                    researchers.
                  </p>

                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow">
                    <img
                      src="/IGSB/Research/Conference/C1.jpg"
                      alt="Conference 2024–25"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>

                {/* AY 23-24 */}
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Academic Year 2023–24
                  </h2>

                  <p className="text-md md:text-lg text-gray-700 text-justify">
                    <strong>
                      India's Growth Story Amidst Global Challenges
                    </strong>
                    <br />
                    Team Indira celebrated a National Conference in association
                    with ICMAI - PCA Chapter. The theme was "India's Growth
                    Story Amidst Global Challenges". A total of 57 researchers
                    participated and presented research papers, contributing to
                    a rich academic discourse.
                  </p>

                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow">
                    <img
                      src="/IGSB/Research/Conference/C2.jpg"
                      alt="Conference 2023–24"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>

                {/* AY 22-23 */}
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Academic Year 2022–23
                  </h2>

                  <p className="text-md md:text-lg text-gray-700 text-justify">
                    <strong>
                      National Conference in Association with The Institute of
                      Cost Accountants of India PCA
                    </strong>
                    <br />A national conference on "Advancements in Business and
                    Management Sciences: Embracing Change, Sustainability &
                    Transformation" was organised by IGSB on 11th January 2023
                    in association with The Institute of Cost Accountants of
                    India, PCA Chapter. The objective was to provide a platform
                    for budding and experienced researchers to discuss topics of
                    sustainability, growth and transformation. Notable guests
                    and speakers provided insights aligned with the conference
                    theme.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="h-64 rounded-2xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/Conference/C3.jpeg"
                        alt="Conference 2022–23 Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/Conference/C4.jpeg"
                        alt="Conference 2022–23 Image 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ===================== PUBLICATIONS ===================== */}
            {activeTab === "publications" && (
              <div className="bg-white px-6 py-16 rounded-2xl shadow-lg space-y-16 mb-12">
                {/* Faculty Publications */}
                <section className="space-y-10">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Faculty Publications
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Ph.D Guide
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Faculty with Ph.D
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Book Publications
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      National Journals
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      International Journals
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      UGC Care
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Scopus
                    </div>
                  </div>
                </section>

                {/* Institute Publications */}
                <section className="space-y-10">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Institute Publications
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Campus Drone
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Campus Herald
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Management Research Monograph
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Analysi - Case Booklet
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Conference Proceedings
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Blog
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      Patent
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ===================== RESOURCE PERSON ===================== */}
            {activeTab === "resourcePerson" && (
              <div className="bg-white px-6 py-16 rounded-2xl shadow-lg space-y-20 mb-12">
                {/* 1 */}
                <section className="space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Session Chair — International Conference (Tashkent)
                  </h2>
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="lg:w-1/2">
                      <p className="text-md md:text-lg text-gray-700 text-justify">
                        Dr. Priyanka Darekar served as a Session Chair at 4th
                        International Conference on Technological Advancements in
                        Computational Sciences, Amity University, Tashkent City,
                        Street Labzak, Building-70, 100028, Uzbekistan. She
                        facilitated the scholarly presentations and discussions,
                        and contributing to the smooth conduct of the
                        international academic event.
                      </p>
                    </div>

                    <div className="lg:w-1/2 w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow">
                      <Image
                        src="/placeholder.jpg"
                        height={720}
                        width={1280}
                        className="w-full h-full object-cover bg-gray-400"
                        alt="Session Chain Tashkent"
                      />
                    </div>
                  </div>
                </section>

                {/* 2 */}
                <section className="space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    FDPs Conducted as Resource Person
                  </h2>

                  <p className="text-md md:text-lg text-gray-700 text-justify">
                    Dr. Anuradha Phadnis conducted 1 Day Faculty Development
                    Program at Sinhgad Institute of Management, Pune, Vadagon
                    (BK) for Faculty Members on the Topic: "How to prepare
                    course file and CO PO mapping for NAAC Preparation " on
                    Tuesday 17th Oct 2023.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="relative h-48 rounded-xl overflow-hidden shadow"
                      >
                        <Image
                          src={`/IGSB/Research/ResourcePerson/2RP${i}.jpeg`}
                          alt={`FDP Resource Person ${i}`}
                          height={720}
                          width={1280}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={85}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3 */}
                <section className="space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Guest Speaker at Government College for Women, Cluster
                    University, Srinagar
                  </h2>

                  <p className="text-md md:text-lg text-gray-700 text-justify">
                    Dr. Priyanka Darekar conducted was invited as a Guest
                    Speaker at the Government College for Women, Cluster
                    University, Srinagar. She delivered a session on "Career
                    Planning" for the Students of Post Graduate department of
                    Computer Science on 25th May 2023. The students were
                    enlightened on topics like Contemporary practices in CV
                    Writing, creating and using professional social media
                    profiles, latest industry trends in Recruitment and
                    selection.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="h-64 rounded-xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/ResourcePerson/3RP1.jpeg"
                        alt="Guest Speaker Session Image 1"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="h-64 rounded-xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/ResourcePerson/3RP2.jpeg"
                        alt="Guest Speaker Session Image 2"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </section>

                {/* 4 */}
                <section className="space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    Aarthbodh Forum — Initiatives by Dr. Tatake
                  </h2>

                  {/* sub 1 */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-semibold text-secondary">
                      1. Conducting Investment Awareness Programs at Reputed
                      Educational Institutes:
                    </h3>
                    <p className="text-md md:text-lg text-gray-700 text-justify">
                      IGSB Aarthbodh Forum is very keen in creating financial
                      awareness amongst the young generation. Dr Tatake has been
                      conducting investment awareness sessions for post-graduate
                      and undergraduate students for past 10 years. He has
                      cleared the Series V A Certification Examination of NISM
                      (National Institute of Securities Market) in the year 2005
                      and has been doing the CEP (Continuous Education Program)
                      as per the rules every three years. By virtue of the same
                      he is able to update the new developments in the field of
                      investments easily. He shares the same with the students
                      through such sessions.
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/ResourcePerson/4RP1.png"
                        alt="Investment Awareness Program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* sub 2 */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-semibold text-secondary">
                      2. Writing articles in daily newspapers and magazines
                    </h3>
                    <p className="text-md md:text-lg text-gray-700 text-justify">
                      Dr Tatake has been an avid writer and loves to educate
                      people on financial topics through his prolific writing
                      skills. He has is an editor in regional newspapers and
                      magazines for past 20 years.He is able to reach the rural
                      and semi-urban areas of interior Maharashtra to create
                      financial awareness amongst through these articles.
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/ResourcePerson/4RP2.png"
                        alt="Newspaper Articles"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* sub 3 */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-semibold text-secondary">
                      3. Conducting programs on Radio
                    </h3>
                    <p className="text-md md:text-lg text-gray-700 text-justify">
                      Radio is an effective tool to reach out to youngsters and
                      can be entertaining to educate people through engaging
                      programs.Dr Tatake has conducted programs on All India
                      Radio, Pune and on Community Radio Channel of Savitribai
                      Phule Pune University (Vidyavani ) to create financial
                      awareness amongst the general public.
                    </p>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow">
                      <img
                        src="/IGSB/Research/ResourcePerson/4RP3.png"
                        alt="Radio Programs"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}