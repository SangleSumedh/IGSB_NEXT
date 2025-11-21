"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const BEComp = "/BEComp.pdf";

const Research = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/BannerOverviewPage.jpg"
          alt="Innovation at Indira College"
          fill
          className="object-cover"
          priority // Important for above-the-fold images
          unoptimized={true}
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20">
          <div className="max-w-2xl bg-black/60 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Innovation that Makes a Difference
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Turn ideas into impact through real-world research, invention, and
              entrepreneurial thinking. Our research culture encourages
              curiosity, creativity, and collaboration — empowering students and
              faculty to pioneer solutions that shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-6">
          Research & Innovation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Indira College, research and innovation are not confined to
          laboratories—they are embedded in the culture. We empower our students
          and faculty to imagine, investigate, and implement solutions for
          real-world challenges. From internationally recognised research
          outputs to cutting-edge prototypes, our ecosystem supports every stage
          of innovation
        </p>
      </section>

      {/* Research Highlights Summary Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Research Highlights 2024-25
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {[
              { number: "5", label: "UGC Care Group 1" },
              { number: "26", label: "Scopus Indexed" },
              { number: "8", label: "Web of Science" },
              { number: "13", label: "Peer Reviewed" },
              { number: "75", label: "Student Publications" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-2xl font-bold text-secondary mb-1">
                  {item.number}
                </div>
                <div className="text-sm text-gray-700 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { number: "13", label: "Books" },
              { number: "6", label: "Book Chapters" },
              { number: "20", label: "Patents Published" },
              { number: "8", label: "Patents Granted" },
              { number: "30", label: "Copyright Granted" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-2xl font-bold text-secondary mb-1">
                  {item.number}
                </div>
                <div className="text-sm text-gray-700 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seed Funding Initiative Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-6">
            Seed Funding Initiative at ICEM
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            The Seed Funding program at ICEM is designed to catalyze innovative
            research by providing initial financial support to faculty members
            since 2022. This initiative aims to nurture early-stage ideas,
            encourage interdisciplinary collaboration, and strengthen the
            institution's research ecosystem.
          </p>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-bold text-secondary mb-4 text-center">
              Sanctioned Seed Funding Projects for 2025-2026
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="border border-gray-300 p-3 text-left">
                      S.No
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Name of the Faculty
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Department
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Topic
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Amount Sanctioned
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">1</td>
                    <td className="border border-gray-300 p-3">
                      Dr. Saurabh Gupta
                    </td>
                    <td className="border border-gray-300 p-3">
                      Mechanical Engineering
                    </td>
                    <td className="border border-gray-300 p-3">
                      Sustainable parabolic solar cooker for rural area
                    </td>
                    <td className="border border-gray-300 p-3">₹60,000/-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">2</td>
                    <td className="border border-gray-300 p-3">
                      Prof. Pranali Khatake
                    </td>
                    <td className="border border-gray-300 p-3">
                      Mechanical Engineering
                    </td>
                    <td className="border border-gray-300 p-3">
                      Smart Material Filters used for automobile oil filtration
                      process
                    </td>
                    <td className="border border-gray-300 p-3">₹40,000/-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">3</td>
                    <td className="border border-gray-300 p-3">
                      Prof. Ashwini Admane
                    </td>
                    <td className="border border-gray-300 p-3">
                      Mechanical Engineering
                    </td>
                    <td className="border border-gray-300 p-3">
                      Heating Water using the waste heat from domestic
                      refrigerator condenser
                    </td>
                    <td className="border border-gray-300 p-3">₹40,000/-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">4</td>
                    <td className="border border-gray-300 p-3">
                      Prof. Ashwini Gaikwad
                    </td>
                    <td className="border border-gray-300 p-3">
                      Mechanical Engineering
                    </td>
                    <td className="border border-gray-300 p-3">
                      Dielectric Heating for Drying agriculture Produce and Food
                    </td>
                    <td className="border border-gray-300 p-3">₹40,000/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Hackathon Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-6">
            MSME Hackathon 4.0
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            The MSME Idea Hackathon 4.0 is a premier national-level innovation
            initiative by the Ministry of Micro, Small & Medium Enterprises
            (MSME), Government of India, under its MSME Innovative Scheme.
            Designed to empower India's youth, the hackathon solicits
            cutting-edge ideas from individuals aged 18–35 to solve real-world
            challenges across diverse sectors—fueling the vision of a "Viksit
            Bharat @2047".
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Selection & Support Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Host Institute Evaluation:</strong> Each HI assembles
                  expert panels to shortlist promising ideas.
                </li>
                <li>
                  <strong>Ministry Screening:</strong> Shortlisted ideas undergo
                  further evaluation by the Ministry of MSME.
                </li>
                <li>
                  <strong>Funding & Incubation:</strong> Selected ideas receive
                  up to ₹15 lakhs for development support.
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Impact & Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Massive Reach:</strong> 29,000+ submissions, 400 ideas
                  awarded funding
                </li>
                <li>
                  <strong>National Recognition:</strong> Results announced by
                  Hon'ble President of India
                </li>
                <li>
                  <strong>ICEM Success:</strong> Three innovative proposals
                  secured funding
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-4">
                ICEM Funded Projects
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary">
                    Utilization of Images for Monitoring Construction Progress
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gajendra Thakur - AI&DS Branch
                  </p>
                  <p className="text-secondary font-semibold">₹13.5 Lakhs</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary">Emotion Detector</h4>
                  <p className="text-sm text-gray-600">
                    Sumit Kumbhar - Alard College of Pharmacy
                  </p>
                  <p className="text-secondary font-semibold">₹13.5 Lakhs</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-primary">Hydrobot</h4>
                  <p className="text-sm text-gray-600">
                    Shon Rakesh Gaikwad - Trinity College of Engineering &
                    Research
                  </p>
                  <p className="text-secondary font-semibold">₹14 Lakhs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
         
          {/* PhD Guides Table Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
              PhD Research Guides & Scholars
            </h3>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-secondary text-white">
                      <th className="border border-gray-300 p-3 text-left">
                        S.No
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Name of Faculty
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Qualification
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Year of Recognition
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Name of Scholar
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Year of Registration
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        Title of Thesis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Dr. Nilesh Uke */}
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2" rowSpan="12">
                        1
                      </td>
                      <td
                        className="border border-gray-300 p-2 font-semibold"
                        rowSpan="12"
                      >
                        Dr. Nilesh Uke
                      </td>
                      <td className="border border-gray-300 p-2" rowSpan="12">
                        Ph.D in Computer Engineering
                      </td>
                      <td className="border border-gray-300 p-2" rowSpan="12">
                        2022
                      </td>
                      <td className="border border-gray-300 p-2">
                        Pankaja Bagul
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D awarded in Dec 2023
                      </td>
                      <td className="border border-gray-300 p-2">
                        Mapping of Digital Mediation through Process Information
                        Diagrams in Architectural Design
                      </td>
                    </tr>
                    {[
                      {
                        name: "Priya Pise",
                        year: "Ph.D awarded in Nov 2018",
                        thesis:
                          "Secure sensitive big data sharing on recent operating Systems",
                      },
                      {
                        name: "Deepak Dharrao",
                        year: "Ph.D awarded in Oct 2018",
                        thesis:
                          "A study of face detection and recognition methods for real time video surveillance",
                      },
                      {
                        name: "Sarika Deokate",
                        year: "Ph.D awarded in Apr 2019",
                        thesis:
                          "Enhancement Of Document Analysis, Classification, And Post Processing Of Devnagari Script",
                      },
                      {
                        name: "Anchal Agrawal",
                        year: "1/1/2023",
                        thesis:
                          "Design of Effective Techniques for Early Prediction of Heart Arrhythmia",
                      },
                      {
                        name: "Shetty Nikita",
                        year: "1/1/2023",
                        thesis:
                          "Design of trajectories of moving object with non-overlapping Surveillance cameras Field of View Cameras",
                      },
                      {
                        name: "Ajay Kapase",
                        year: "1/1/2023",
                        thesis:
                          "Reactive Multimodal Affective System with Artificial Emotional Intelligence for Effective Human Computer Interaction",
                      },
                      {
                        name: "Kamble Vitthal",
                        year: "1/1/2023",
                        thesis:
                          "Forensics Analysis of Digital Image Tampering Using Algorithmic Approach",
                      },
                      {
                        name: "Priyanka Mane",
                        year: "1/1/2023",
                        thesis:
                          "Fetal Movement Detection to Monitor It's Health Remotely During Prenatal Period",
                      },
                      {
                        name: "Yevale Pallavi",
                        year: "1/1/2023",
                        thesis:
                          "Design of an Intelligent Multilingual Virtual Assistant using Natural Language Understanding",
                      },
                      {
                        name: "Sayali Bamble",
                        year: "1/1/2023",
                        thesis:
                          "Breast Cancer Detection from Mammography Images using Machine Learning",
                      },
                      {
                        name: "Ugile Tukaram",
                        year: "1/1/2023",
                        thesis:
                          "Abnormal Event Detection in Real-time Video Surveillance",
                      },
                    ].map((scholar, index) => (
                      <tr key={index} className="bg-gray-50">
                        <td className="border border-gray-300 p-2">
                          {scholar.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.year}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.thesis}
                        </td>
                      </tr>
                    ))}

                    {/* Dr. Mrs. Poorna Shankar */}
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-2">2</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Mrs. Poorna Shankar
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Computer Science
                      </td>
                      <td className="border border-gray-300 p-2">2016</td>
                      <td className="border border-gray-300 p-2">
                        Pratibha Kulkarni
                      </td>
                      <td className="border border-gray-300 p-2">
                        29/1/2016 (Ph.D Awarded in Dec 2021)
                      </td>
                      <td className="border border-gray-300 p-2">
                        A Study of use of Social Networking Sites by the
                        Academicians in Selected Professional Colleges in and
                        around Pune City
                      </td>
                    </tr>
                    {[
                      {
                        name: "Brijesh Joshi",
                        year: "20/4/2018 (Ph.D Awarded in June 2022)",
                        thesis:
                          "Identifying the performance challenges with Big data processing and partial solutions",
                      },
                      {
                        name: "Awantika Bijwe",
                        year: "24-03-2018 (Ph.D Awarded in June 2024)",
                        thesis:
                          "Analysis of performance measures and effectiveness of devops framework in developing IoT applications",
                      },
                      {
                        name: "Kiran Shinde",
                        year: "3/11/2020",
                        thesis:
                          "Designing of edge computing based smart health care framework using authentication services",
                      },
                      {
                        name: "Ashish Dhoke",
                        year: "3/11/2020",
                        thesis:
                          "To Design a Smart Navigation System for Multiple Destinations using GPS and Machine Learning Algorithm",
                      },
                    ].map((scholar, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2">
                          {scholar.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.year}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.thesis}
                        </td>
                      </tr>
                    ))}

                    {/* Dr. Sunil Rathod */}
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">3</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Sunil Rathod
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Computer Engineering
                      </td>
                      <td className="border border-gray-300 p-2">2018</td>
                      <td className="border border-gray-300 p-2">
                        Nilesh Mali
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D Awarded in JAN 2024
                      </td>
                      <td className="border border-gray-300 p-2">
                        Implementation of Information Security in Cloud Through
                        Multi Access Control & Key Aggregation on Crypto System
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2"></td>
                      <td className="border border-gray-300 p-2">
                        Sonali Purney
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D Awarded in JAN 2024
                      </td>
                      <td className="border border-gray-300 p-2">
                        Using AI to model the Future of Energy Conversation and
                        Storage System
                      </td>
                    </tr>

                    {/* Dr. Soumitra Das */}
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-2">4</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Soumitra Das
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Computer Engineering
                      </td>
                      <td className="border border-gray-300 p-2">2019</td>
                      <td className="border border-gray-300 p-2">
                        Mr. Malayaj Kumar
                      </td>
                      <td className="border border-gray-300 p-2">1/1/2022</td>
                      <td className="border border-gray-300 p-2">
                        Analysis of Speech of Political Leaders Writing NCP and
                        AI: Its Effect on Political Discourse
                      </td>
                    </tr>

                    {/* Dr. Archana Ravindra Salve */}
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">5</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Archana Ravindra Salve
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Management
                      </td>
                      <td className="border border-gray-300 p-2">2020</td>
                      <td className="border border-gray-300 p-2">
                        Priyanka Budhkar
                      </td>
                      <td className="border border-gray-300 p-2">3/22/2022</td>
                      <td className="border border-gray-300 p-2">
                        A critical study of hybrid mode of working on employee
                        performance in IT industry with reference to Pune and
                        Mumbai region
                      </td>
                    </tr>
                    {[
                      {
                        name: "Pradip Sandbhor",
                        year: "7/5/2022",
                        thesis:
                          "Impact of BVOC Education on student skill enhancement and job opportunities",
                      },
                      {
                        name: "Gayatri Nimbalkar",
                        year: "3/23/2023",
                        thesis:
                          "A Study of Work-Life Balance of Women Employees Post-Pandemic and Its Impact on Their Performance",
                      },
                    ].map((scholar, index) => (
                      <tr key={index} className="bg-gray-50">
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2">
                          {scholar.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.year}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.thesis}
                        </td>
                      </tr>
                    ))}

                    {/* Dr. Darshana Jignesh Desai */}
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-2">6</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Darshana Jignesh Desai
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Computer Management
                      </td>
                      <td className="border border-gray-300 p-2">2021</td>
                      <td className="border border-gray-300 p-2">
                        Raj Kamal Sangole
                      </td>
                      <td className="border border-gray-300 p-2">6/28/2022</td>
                      <td className="border border-gray-300 p-2">
                        Empirical Study of Hiring Trends in the IT Industry and
                        Design a Model using Machine Learning Techniques
                      </td>
                    </tr>
                    {[
                      {
                        name: "Sameer Patil",
                        year: "5/18/2023",
                        thesis:
                          "Design and Develop a Framework using Blockchain with Integration of AI for Indian Judicial System",
                      },
                      {
                        name: "Dhanashree Patil",
                        year: "In Process",
                        thesis: "In Process",
                      },
                    ].map((scholar, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2">
                          {scholar.name}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.year}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {scholar.thesis}
                        </td>
                      </tr>
                    ))}

                    {/* Dr. Manjusha Tatiya */}
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2">7</td>
                      <td className="border border-gray-300 p-2 font-semibold">
                        Dr. Manjusha Tatiya
                      </td>
                      <td className="border border-gray-300 p-2">
                        Ph.D in Computer Engineering
                      </td>
                      <td className="border border-gray-300 p-2">2023</td>
                      <td className="border border-gray-300 p-2">
                        Pallavi Chavan
                      </td>
                      <td className="border border-gray-300 p-2">11/24/2024</td>
                      <td className="border border-gray-300 p-2">
                        Perishable produce quality prediction using machine
                        learning - A smart system for nutrient loss estimation
                        and freshness categorization
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Research Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Sidebar Tabs */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2">
                {[
                  "Overview",
                  "Publication",
                  "IPR",
                  "Research Activities",
                  "Research Policy",
                  "Research Committee",
                ].map((tab, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 rounded-md cursor-pointer font-medium ${
                      activeTab === tab
                        ? "bg-tertiary border-l-4 border-secondary text-secondary"
                        : "hover:bg-gray-100 text-primary"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Accordion */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg">
              {/* Overview Accordion */}
              {activeTab === "Overview" && (
                <>
                  {[
                    {
                      title: "1. About the R&D Cell",
                      content: (
                        <>
                          <p className="text-primary">
                            Indira College of Engineering and Management is
                            committed to inculcate research culture among
                            faculty, researchers and students. The R&D Cell aims
                            to develop and promote research and development
                            activities to realize the vision and mission of the
                            college. The research areas of academic, practical
                            and social significance will be identified and thus
                            contributing to the nation development.
                          </p>
                          <p className="mt-3 text-primary">
                            The research policy defines the applicable rules and
                            regulations to be adhered while carrying out various
                            research activities and norms related to safe and
                            ethical conduct of research. The R&D Cell provides
                            guidance to faculty members and students
                            consistently to write research papers, research
                            projects and IPR activities. The management
                            encourages all faculty members and students by
                            providing financial assistance for research paper
                            presentation, attending national/international
                            conferences, publishing books and filing copyrights
                            and patents. To encourage innovative ideas and
                            competitive projects, the Institute provides Seed
                            funding to the research projects to develop
                            prototype and testing.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Objectives",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            To identify and inform all researchers about the
                            research opportunities available in academic,
                            industry, government and research organizations.
                          </li>
                          <li>
                            To provide a conducive environment and motivation
                            for undertaking interdisciplinary projects and
                            research.
                          </li>
                          <li>
                            To facilitate the presentation of research work in
                            national/international conferences and enhance
                            publication standards.
                          </li>
                          <li>
                            To establish centers of excellence in association
                            with industries and undertake joint research
                            projects.
                          </li>
                          <li>
                            To establish long-term relationships with research
                            organizations to widen funding and research scope.
                          </li>
                          <li>
                            To encourage participative research and promote
                            internal funded projects and consultancy services.
                          </li>
                          <li>
                            To acquire membership of renowned professional
                            bodies and build global institutional linkages.
                          </li>
                          <li>
                            To ensure quality and uphold high standards of
                            ethics and integrity in all research activities.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Memorandums of Understanding (MoUs)",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            MoU with Consortium of Technical Education for
                            innovative programs and research initiatives.
                          </li>
                          <li>
                            MoU with Shashitek Company, Bangalore for
                            internships and real-time tech projects.
                          </li>
                          <li>
                            MoU with Cyber Secured India for cyber security and
                            digital forensics training.
                          </li>
                          <li>
                            MoU with RWTH Aachen University, Germany for
                            collaborative research projects.
                          </li>
                          <li>
                            MoU with Sahyadri Pratishthan Gad Samvardhan Samiti
                            for environmental and heritage awareness.
                          </li>
                          <li>
                            MoU with India First Robotics Innovation and
                            Research LLP for robotics training.
                          </li>
                          <li>
                            MoU with IQAC Cluster India to support NAAC
                            accreditation improvement.
                          </li>
                          <li>
                            MoU with Gryphon Consultancy for training and
                            placement opportunities.
                          </li>
                          <li>
                            MoU with Edukerron to develop and monitor academic
                            work plans and projects.
                          </li>
                          <li>
                            MoU with Global Reach for international study tours,
                            lectures, and workshops.
                          </li>
                          <li>
                            MoU with MIT-ADT Incubator Forum for startup
                            mentoring programs under NITI Aayog.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Research & Development Documents",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2024-2025]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Registered Ph.D Guides AY [2022-2023]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee AY [2024-2025]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee AY [2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research & Development Committee
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* Publication Accordion */}
              {activeTab === "Publication" && (
                <>
                  {[
                    {
                      title: "1. Journals",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2023-2024]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2022-2023]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Key Publications in the Indexed Journals by
                              Faculty Members AY-[2021-2022]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Conferences",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2022-23
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Conference 2021-22
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Books",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2023-2024
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2022-2023
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Books AY-2021-2022
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>
                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* IPR Accordion */}
              {activeTab === "IPR" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Patents",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2023-24]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2022-23]
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Patents Filed/Published in the AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Copyrights",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Copyrights Filed in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Trademarks",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2023-24
                            </a>
                          </li>
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Trademarks Registered in the academic year 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Activities Accordion */}
              {activeTab === "Research Activities" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Workshops/Seminars Conducted AY-[2023-24]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Workshops/Seminars Conducted AY-[2022-23]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Workshops/Seminars Conducted AY-[2021-22]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Workshops/Seminars Conducted AY-[2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Policy Accordion */}
              {activeTab === "Research Policy" && (
                <div className="p-0">
                  {[
                    {
                      title: "Research Policy [2023-24]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2023-24]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2022-23]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2022-23]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "Research Policy [2021-22]",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Research Policy Document for AY [2021-22]
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Research Committee Accordion */}
              {activeTab === "Research Committee" && (
                <div className="p-0">
                  {[
                    {
                      title: "ICEM Research Committee AY 2025-26",
                      content: (
                        <div className="bg-white rounded-lg border border-gray-200">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-secondary text-white">
                                <th className="border border-gray-300 p-3 text-left">
                                  Sr.No.
                                </th>
                                <th className="border border-gray-300 p-3 text-left">
                                  Name of the Staff
                                </th>
                                <th className="border border-gray-300 p-3 text-left">
                                  Designation
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                {
                                  name: "Dr. Poorna Shankar",
                                  designation: "Coordinator",
                                },
                                {
                                  name: "Dr. Sunil Damodar Rathod",
                                  designation: "Member",
                                },
                                {
                                  name: "Mr. Shreyas Rajendra Satpute",
                                  designation: "Member",
                                },
                                {
                                  name: "Dr. Manjusha Rahul Tatiya",
                                  designation: "Member",
                                },
                                {
                                  name: "Mr. Vishal Abhiman Meshram",
                                  designation: "Member",
                                },
                                {
                                  name: "Dr. Archana Ravindra Salve",
                                  designation: "Member",
                                },
                                {
                                  name: "Mrs. Aditee Hrishikesh Huparikar",
                                  designation: "Member",
                                },
                                {
                                  name: "Dr. Darshana Jignesh Desai",
                                  designation: "Member",
                                },
                                {
                                  name: "Dr. Mrs. Priya Jeevan Pise",
                                  designation: "Member",
                                },
                                {
                                  name: "Mr. Sudhir Kumar Sawarkar",
                                  designation: "Member",
                                },
                              ].map((member, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="border border-gray-300 p-3">
                                    {index + 1}
                                  </td>
                                  <td className="border border-gray-300 p-3">
                                    {member.name}
                                  </td>
                                  <td className="border border-gray-300 p-3">
                                    {member.designation}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
