"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Research() {
  const [activeTab, setActiveTab] = useState("conference");
  const [showMoreAchievements, setShowMoreAchievements] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [showUGCModal, setShowUGCModal] = useState(false);
  const [showScopusModal, setShowScopusModal] = useState(false);
  const [showPeerReviewedModal, setShowPeerReviewedModal] = useState(false);
  const [showConferenceModal, setShowConferenceModal] = useState(false);

  const bookPublications = [
    {
      srNo: 1,
      applicant: "Dr.Priyanka Darekar",
      title: "Futuristic Trends in Social Science",
      chapter: "",
      isbn: "ISBN: 978-93-95632-64-5",
      year: "2022-23",
    },
    {
      srNo: 2,
      applicant: "Dr.Prashant Dubey",
      title: "Manners & Etiquates",
      chapter: "",
      isbn: "ASIN : B0C4JDPCSW",
      year: "2022-23",
    },
    {
      srNo: 3,
      applicant: "Dr.Anuradha Phadnis",
      title:
        "Industry Psychology and Organisational Behaviour for SPPU Engineering BE",
      chapter: "",
      isbn: "ISBN : 978-93-5563-401-6, Tech-Knowledge Publications",
      year: "2022-23",
    },
    {
      srNo: 4,
      applicant: "Dr.Priyanka Darekar",
      title: "Futuristic Trends in Social Science",
      chapter: "",
      isbn: "E-ISBN: 978-93-5747-819-9 Print ISBN: 978-93-6252-367-9",
      year: "2023-24",
    },
    {
      srNo: 5,
      applicant: "Snehal Masurkar & Amol Ankush",
      title:
        "An advance multidisciplinary approach to management, education, technology and science",
      chapter: "",
      isbn: "ISBN 978-93-95060-20-2",
      year: "2024-25",
    },
    {
      srNo: 6,
      applicant: "Dr.Anuradha Phadnis",
      title: "HR Analytics for Talent Management & Employee Engagement",
      chapter: "",
      isbn: "ISBN 978-93-6349-386-5, Writers Row Publications",
      year: "2025-26",
    },
    {
      srNo: 7,
      applicant: "Amol Ankush",
      title: "Perspectives on Culture- Themes & Approaches across Time & Space",
      chapter:
        "Cultural Carvings- Exploring Consumer Behaviour in Food Choices across Cultures",
      isbn: "ISBN 978-93-49738-24-9Lexarcheus Publications",
      year: "2025-26",
    },
    {
      srNo: 8,
      applicant: "Amol Ankush",
      title: "Emerging Trends in Commerce, Science & Management",
      chapter: "Customer Centricity in FMCG Sector",
      isbn: "ISBN 978-7143-353-2, Chyren Publicatons",
      year: "2025-26",
    },
  ];

  const ugcPublications = [
    {
      srNo: 1,
      faculty: "Dr.Virendra Tatake",
      journal: "South India Journal of Social Sciences",
      year: "2022-23",
      title: "Critical Analysis of NPA and its impact on Indian Commercial Banks",
      status: "UGC",
    },
    {
      srNo: 2,
      faculty: "Dr.Aatish Zagade",
      journal: "International Journal of Food and Nutritional Sciences",
      year: "2022-23",
      title:
        "A Study On Review Of Literature: Consumer Buying Behaviour Towards E-Moped",
      status: "UGC",
    },
    {
      srNo: 3,
      faculty: "Dr.Aatish Zagade",
      journal: "The Online Journal of Distance Education and e-Learning",
      year: "2022-23",
      title:
        "Advertising strategies adopted by multinational companies in Sports events and its impact on consumer psychology.",
      status: "UGC",
    },
    {
      srNo: 4,
      faculty: "Dr.Priyanka Darekar",
      journal: "IJFANS International Journal of Food and Nutritional Sciences",
      year: "2022-23",
      title:
        "A Study On Workforce Diversity and Its Impact On Organizational Culture with Special Reference to Service Sector Organizations”- A Theoretical Framework",
      status: "UGC",
    },
    {
      srNo: 5,
      faculty: "Dr.Priyanka Darekar",
      journal: "Online Journal of Distance Education and e-Learning",
      year: "2022-23",
      title:
        "Study On Indian Higher Education System and Role of Teachers from The Perspective of Post Graduate Students",
      status: "UGC",
    },
    {
      srNo: 6,
      faculty: "Dr.Priyanka Darekar",
      journal: "IJFANS International Journal of Food and Nutritional Sciences",
      year: "2022-23",
      title:
        "Unmet Needs of Workforce Diversity Management-The Services Sector Perspective",
      status: "UGC",
    },
    {
      srNo: 7,
      faculty: "Dr.Anuradha Phadnis",
      journal: "Journal Of the Oriental Institute",
      year: "2022-23",
      title: "Organic Shoppers’ Involvement In Organic Foods: Self And Identity",
      status: "UGC",
    },
    {
      srNo: 8,
      faculty: "Dr.Virendra Tatake",
      journal: "Madhya Pradesh Journal of Social Sciences",
      year: "2023-24",
      title:
        "Unraveling the Threads-A Systematic Review of Literature of Capital Structure impact on Financial Performance",
      status: "UGC",
    },
    {
      srNo: 9,
      faculty: "Dr.Virendra Tatake",
      journal: "Utkal Historical Journal",
      year: "2023-24",
      title:
        "Effect of Capital Structure of Profitability-An Empirical Analysis of Automobile Companies listed in NSE",
      status: "UGC",
    },
    {
      srNo: 10,
      faculty: "Dr.Virendra Tatake",
      journal: "Journal of Asoatic Society of Mumbai",
      year: "2023-24",
      title: "Analysis of Investments & Wealth Creation at younger age",
      status: "UGC",
    },
    {
      srNo: 11,
      faculty: "Dr.Aatish Zagade",
      journal: "Journal of the Oriental Institute",
      year: "2023-24",
      title:
        "A Comparative Study of Selected E-Commerce Portals: Analyzing Website Traffic And Factors Influencing User Engagement.",
      status: "UGC",
    },
    {
      srNo: 12,
      faculty: "Dr.Aatish Zagade & Jayant Joshi",
      journal: "Madhya Pradesh Journal of Social Sciences",
      year: "2023-24",
      title:
        "Digital Banking “Growth and Development in Indian scenario its Impact and Implication”",
      status: "UGC",
    },
    {
      srNo: 13,
      faculty: "Dr.Aatish Zagade, Jayant Joshi & Amol Ankush",
      journal: "Humanities and Social Science Studies",
      year: "2023-24",
      title:
        "Customer Loyalty in Retail Banking Navigating Challenges in the Digital Era",
      status: "UGC",
    },
    {
      srNo: 14,
      faculty: "Jayant Joshi",
      journal:
        "Rabindra Bharati University Journal of Economics-International Conference",
      year: "2023-24",
      title:
        "Revolutionizing Dairy Markets A Comprehensive Analysis of Mother Dairy's Innovative Segmentation, Targeting, and Positioning Strategies for Sustainable Growth.",
      status: "UGC",
    },
    {
      srNo: 15,
      faculty: "Jayant Joshi",
      journal: "International Journal of Cultural Studies and Social Sciences",
      year: "2023-24",
      title:
        "The Regulatory Environment in India and Its Impact on FDI and Portfolio Flows.",
      status: "UGC",
    },
    {
      srNo: 16,
      faculty: "Girija Shirurkar",
      journal: "Madhya Pradesh Journal of Social Sciences",
      year: "2023-24",
      title: "BOUNDARYLESS ORGANIZATIONS: CHALLENGES AND OPPORTUNITIES",
      status: "UGC",
    },
    {
      srNo: 17,
      faculty: "Mahesh Bhagat",
      journal: "Madhya Pradesh Journal of Social Sciences",
      year: "2023-24",
      title:
        "THE MEDIATING ROLE OF ORGANIZATIONAL CITIZENSHIP BEHAVIOUR IN BETWEEN THE ORGANIZATIONAL COMMITMENTS AND ORGANIZATIONAL EFFECTIVENESS: A LITERATURE REVIEW",
      status: "UGC",
    },
    {
      srNo: 18,
      faculty: "Dr.Virendra Tatake",
      journal: "Rabindra Bharati Journal of Economics",
      year: "2024-25",
      title:
        "Literature Review on the preception of Women about Wealth Management wrt Pune District",
      status: "UGC",
    },
    {
      srNo: 19,
      faculty:
        "Dr.Anuradha Phadnis & Dr.Aatish Zagade",
      journal: "IEEE International Conference Journal 2024",
      year: "2024-25",
      title:
        "Importance of Green Supply Chain Optimisation on SME Sustainability Performance",
      status: "UGC",
    },
  ];

  const scopusPublications = [
    {
      srNo: 1,
      faculty: "Dr.Aatish Zagade",
      journal: "World Journal of Management and Economics (WJME)",
      year: "2022-23",
      title:
        "Social Networking Sites – A Lean Recruitment Tool Towards Digital Transformation for Sustainable Development",
      status: "Scopus",
    },
    {
      srNo: 2,
      faculty: "Dr.Priyanka Darekar",
      journal: "NeuroQuantology",
      year: "2022-23",
      title:
        "A Study on Effectiveness of Big Data Analytics on Organizational Growth with reference to Manufacturing Sector”",
      status: "Scopus",
    },
    {
      srNo: 3,
      faculty: "Dr.Priyanka Darekar",
      journal: "European Chemical Journal",
      year: "2022-23",
      title: "ESG and Role of HR-A Services Sector Perspective",
      status: "Scopus",
    },
    {
      srNo: 4,
      faculty: "Dr.Virendra Tatake",
      journal: "Korea Review of International Studies",
      year: "2023-24",
      title:
        "Chemical Company Dynamics Unraveling Capital Structuere- Financial Performancce in Ninfty 100 Index",
      status: "ABDC",
    },
    {
      srNo: 5,
      faculty: "Amol Ankush",
      journal: "IEEE International Conference Journal 2024",
      year: "2024-25",
      title:
        "Importance of Green Supply Chain Optimisation on SME Sustainability Performance",
      status: "IEEE",
    },
    {
      srNo: 6,
      faculty: "Dr.Pallavi Sajanapwar",
      journal:
        "3rd International ConferenceJournal on Communication, Security, and Artificial Intelligence (ICCSAI), Greater Noida, India, 2025",
      year: "2025-26",
      title:
        "Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices",
      status: "IEEE",
    },
    {
      srNo: 7,
      faculty: "Dr.Aatish Zagade",
      journal: "2025 ICPTC Amity University Conference",
      year: "2025-26",
      title:
        "IOT Driven Data Analytics- Transforming Digital marketing Campaigns with Real Time Consumer Insights",
      status: "Scopus",
    },
    {
      srNo: 8,
      faculty: "Dr.Priyanka Darekar",
      journal: "2nd International Conference IC3TES",
      year: "2025-26",
      title:
        "Analysing the Impact of Semiotic Strategies in Brand Development of Consumer Psychology using Machine Learning & AI",
      status: "IEEE",
    },
    {
      srNo: 9,
      faculty: "Dr.Priyanka Darekar",
      journal: "International Conference ICSES",
      year: "2025-26",
      title:
        "Artificial Intelligence & Data Science Approaches to Analyzing Human Resource Management in Hybrid & Remote Work Models",
      status: "IEEE",
    },
    {
      srNo: 10,
      faculty: "Dr.Priyanka Darekar",
      journal:
        "3rd International Conference on Communication, Security, and Artificial Intelligence (ICCSAI), Greater Noida, India, 2025",
      year: "2025-26",
      title:
        'AI in Education: Transforming Communication, Security, and Management in Smart EdTech Ecosystems," 2025',
      status: "IEEE",
    },
    {
      srNo: 11,
      faculty: "Dr.Priyanka Darekar",
      journal: "International Journal of I.T, (Bharati Vidyapeeth)",
      year: "2025-26",
      title:
        "Utilization of Virtual Reality (VR) & Deep Learning (DL) in Foresting Online Learning Process in Education Systems",
      status: "Scopus Q2",
    },
    {
      srNo: 12,
      faculty: "Amol Ankush",
      journal: "Advances in Consumer Research",
      year: "2025-26",
      title:
        "Impact of Financial Literacy & Risk Tolerance on Consumer Buying Behaviour",
      status: "ABDC",
    },
  ];

  const peerReviewedPublications = [
    {
      srNo: 1,
      faculty: "Dr.Poonam Wani",
      journal: "IJRCT",
      year: "2022-23",
      title: "Impirical Analysis of General Insurance Agent Performance",
      status: "Peer Reviewed",
    },
    {
      srNo: 2,
      faculty: "Dr.Poonam Wani",
      journal: "IJRAR",
      year: "2022-23",
      title: "India's National Education Policy 2020",
      status: "Peer Reviewed",
    },
    {
      srNo: 3,
      faculty: "Dr.Poonam Wani",
      journal: "IJSRCM",
      year: "2022-23",
      title: "Comprehensive Study of Marketing in Meta Verse",
      status: "Peer Reviewed",
    },
    {
      srNo: 4,
      faculty: "Dr.Poonam Wani",
      journal: "IPE Journal Of Management",
      year: "2023-24",
      title: "Effect of Social Media Marketing on performance of Solar Products",
      status: "Peer Reviewed",
    },
    {
      srNo: 5,
      faculty: "Dr.Virendra Tatake",
      journal: "The IUP Journal of",
      year: "2024-25",
      title:
        "Demographic factors influencing the investment decisions of women in",
      status: "Peer Reviewed",
    },
    {
      srNo: 6,
      faculty: "Dr.Pallavi Sajanapwar",
      journal: "IJSREM",
      year: "2024-25",
      title:
        "Empowering Women through Technology:The Impact of Digitalizationn on SHG",
      status: "Peer Reviewed",
    },
    {
      srNo: 7,
      faculty: "Dr.Virendra Tatake",
      journal: "ANVESHAK, International Journal of Management",
      year: "2025-26",
      title: "Business Model based on Indian Knowledge System",
      status: "Peer Reviewed",
    },
    {
      srNo: 8,
      faculty: "Dr.Anuradha Phadnis",
      journal: "JIDNYASA Conference Journal of HNIMR Pune",
      year: "2025-26",
      title:
        "Promoting Interdisciplinary Appraoch in Management Education to enhance Employbility",
      status: "Peer Reviewed",
    },
    {
      srNo: 9,
      faculty: "Dr.Aatish Zagade",
      journal: "JIDNYASA Conference Journal of HNIMR Pune",
      year: "2025-26",
      title:
        "Ancient Wisdom of Indian Knowledge System, An Innovative Way of enhancing the effectiveness of teaching and learning of Management Education",
      status: "Peer Reviewed",
    },
    {
      srNo: 10,
      faculty: "Amol Ankush",
      journal: "International Journal of EKS",
      year: "2025-26",
      title:
        "Evaluating Consumer Perceptions & Satisafaction in the Retail Banking Experience",
      status: "Peer Reviewed",
    },
  ];

  const conferencePublications = [
    {
      srNo: 1,
      faculty: "Jayant Joshi & Dr.Aatish Zagade",
      organizer:
        "Rabindra Bharati University Journal of Economics-International Conference",
      year: "2023-24",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Revolutionizing Dairy Markets A Comprehensive Analysis of Mother Dairy's Innovative Segmentation, Targeting, and Positioning Strategies for Sustainable Growth.",
    },
    {
      srNo: 2,
      faculty: "Dr. Virendra Tatake",
      organizer: "MITWPU",
      year: "2024-25",
      type: "National",
      participation: "Paper Presentation",
      title: "Economic & Emotional Well being in old age An Indian Perspective",
    },
    {
      srNo: 3,
      faculty: "Mahesh Bhagat",
      organizer: "ISDSI PIBM International Conference",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Determinants of Organizational Citizenship Behaviour & their Impact on organizational performance:A systematic Literature Review",
    },
    {
      srNo: 4,
      faculty: "Dr. Aniruddha T",
      organizer: "ISDSI PIBM International Conference",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title:
        "The Governance Matter in the Recent Growing Fintech Industry in India",
    },
    {
      srNo: 5,
      faculty: "Jayant Joshi & Dr. Poonam Wani",
      organizer: "PVG College of Science & Commerce International Conference",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title:
        "The impact of Indian Regulators Environment on FDI & Portfolio Flow",
    },
    {
      srNo: 6,
      faculty: "Dr. Poonam Wani",
      organizer: "IMR Jalgaon & AICTE,",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title: "Innovation, Automation & Future Trends in Business",
    },
    {
      srNo: 7,
      faculty: "Dr. Anuradha Phadnis",
      organizer: "Indian School of Business Studies PGDM",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title: "Beyond Borders Exploring Global Perspectives in Management",
    },
    {
      srNo: 8,
      faculty: "Dr. Aatish Zagade",
      organizer: "Indian School of Business Studies PGDM",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title: "Beyond Borders Exploring Global Perspectives in Management",
    },
    {
      srNo: 9,
      faculty: "Dr. Aniruddha T",
      organizer: "ICMRS, Sahradaya Institute of Management Thrissur, Kerala",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title: "Application of Investment Center Concept",
    },
    {
      srNo: 10,
      faculty: "Dr. Neha Chaudhay & Dr. Pallavi Sajanapwar",
      organizer: "ICMRS, Sahradaya Institute of Management Thrissur, Kerala",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Green Bonds in India: A Systematic Review of Growth, Challenges, and Future",
    },
    {
      srNo: 11,
      faculty: "Dr. Ashish Vyas, Girija Shirurkar, Dr. Pallavi Sajanapwar",
      organizer: "International Conference EMMA 2025",
      year: "2024-25",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Indian Management Philosophy An integration of Ancient Indian Knowledge Systems with Current Management Practices",
    },
    {
      srNo: 12,
      faculty: "Dr. Virendra Tatake",
      organizer:
        "International Conference in Bharatiya Management, Chanakya University,",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Dasbodh: Ancient Indian Approach to Personal Financial Management",
    },
    {
      srNo: 13,
      faculty: "Dr. Virendra Tatake, Dr. Poonam Wani",
      organizer: "International Conference ICICT, Hyderabad",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Conventional Regression Model to forecasting the Financial Time Series",
    },
    {
      srNo: 14,
      faculty: "Dr. Anuradha Phadnis",
      organizer: "IIM Ranchi, International Conference",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title: "Crowdfunding as a Catalyst for Social Startups in Pune.",
    },
    {
      srNo: 15,
      faculty: "Mahesh Bhagat & Dr.Aatish Zagade",
      organizer: "Galgotias University, International Conference ICCA 2025",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Role of Resilience in Supply Chain Transformation moving from Green to Regenerative",
    },
    {
      srNo: 16,
      faculty: "Dr. Poonam Wani",
      organizer: "IIM Ranchi, International Conference",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Corporate Finance, Capital Structure, Dividend Policy. An Empirical Analysis of Interrelationships & their Impact on Firm Performance",
    },
    {
      srNo: 17,
      faculty: "Snehal Masurkar",
      organizer: "IIM Ranchi, International Conference",
      year: "2025-26",
      type: "International",
      participation:
        "Paper Presentation & Best Paper 2nd Runners Up",
      title:
        "Redefining Responsibility: A Sustainability-Centric Review of India's Diesel Engine Manufacturing Sector",
    },
    {
      srNo: 18,
      faculty: "Dr.Aniruddha T",
      organizer: "IEA Hyderabad Conference",
      year: "2025-26",
      type: "International",
      participation: "Paper Presentation",
      title:
        "Critical Analysis of the selected Public-Private Partnerships (PPP) in India's Renewable Energy Projects in Telangana State",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        
        <div className="w-full px-6 py-12 xl:px-16 xl:py-8">
          {/* ===========================
              🔷 TABS
          ============================ */}
          <div className="flex flex-wrap justify-center gap-3 py-12">
            {[
              // { id: "research", label: "Research" },
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
            {/* ===================== RESEARCH ===================== */}
            {/* {activeTab === "research" && (
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
            )} */}

            {/* ===================== CONFERENCE ===================== */}
            {activeTab === "conference" && (
              <div className="bg-white px-6 py-16 rounded-2xl shadow-lg space-y-12 mb-12">
                {/* AY 25-26 */}
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center">
                    National Conference 2025-26
                  </h2>

                  <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
                    {/* Top Row - Content */}
                    <div className="w-full bg-gradient-to-r from-[#10404A] to-[#1F6D71] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 md:mb-4 lg:mb-6">
                        Innovation Meets Sustainability: Forging the Future
                        Together
                      </h3>
                      <div className="space-y-4 text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
                        <p>
                          The National Conference on “Innovation Meets
                          Sustainability: Forging the Future Together” was
                          inaugurated in the distinguished presence of our
                          esteemed Guests of Honour—Dr. Bharat Kasar, CMA Ajit
                          Shinde, and CMA Balkrishna Ananda Hajare.
                        </p>
                        <p>
                          Their inspiring addresses set a purposeful tone for
                          the conference, fostering meaningful dialogue and
                          insightful exchanges focused on driving innovation and
                          building a sustainable future.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row - Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                      {/* Conference Image 1 */}
                      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl overflow-hidden relative min-h-[300px] md:min-h-[400px]">
                        <Image
                          src="/IGSB/Research/Conference/conference1.jpg"
                          alt="Conference Inauguration"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Conference Image 2 */}
                      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl overflow-hidden relative min-h-[300px] md:min-h-[400px]">
                        <Image
                          src="/IGSB/Research/Conference/conference2.jpg"
                          alt="Conference Guests"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

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
                    <div
                      onClick={() => setShowBookModal(true)}
                      className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition cursor-pointer hover:bg-gray-50 text-secondary flex flex-col items-center gap-2 group"
                    >
                      <span>Book Publications</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition">
                      International Journals
                    </div>
                    <div
                      onClick={() => setShowUGCModal(true)}
                      className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition cursor-pointer hover:bg-gray-50 text-secondary flex flex-col items-center gap-2 group"
                    >
                      <span>UGC</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>

                    <div
                      onClick={() => setShowScopusModal(true)}
                      className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition cursor-pointer hover:bg-gray-50 text-secondary flex flex-col items-center gap-2 group"
                    >
                      <span>Scopus/IEEE/ABDC</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => setShowPeerReviewedModal(true)}
                      className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition cursor-pointer hover:bg-gray-50 text-secondary flex flex-col items-center gap-2 group"
                    >
                      <span>Peer Reviewed</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => setShowConferenceModal(true)}
                      className="bg-white p-8 rounded-xl shadow border border-gray-200 text-center font-semibold hover:shadow-lg transition cursor-pointer hover:bg-gray-50 text-secondary flex flex-col items-center gap-2 group"
                    >
                      <span>Conference</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 group-hover:text-secondary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
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

      {/* Book Publications Modal */}
      {showBookModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-bold text-secondary">
                Book Publications
              </h3>
              <button
                onClick={() => setShowBookModal(false)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <thead className="bg-[#10404A] text-white">
                  <tr>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Sr No
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Applicant
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Book Title
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Chapter Title & Name of book in which published
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Volume & Issue number
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Year of Publication
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {bookPublications.map((book, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {book.srNo}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {book.applicant}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 italic">
                        {book.title}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {book.chapter || "-"}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 font-mono text-xs">
                        {book.isbn}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {book.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* UGC Publications Modal */}
      {showUGCModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-bold text-secondary">
                UGC Publications
              </h3>
              <button
                onClick={() => setShowUGCModal(false)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <thead className="bg-[#10404A] text-white">
                  <tr>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Sr No
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Faculty
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Journal
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Year
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Title of Paper
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Status of Paper
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {ugcPublications.map((pub, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.srNo}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.faculty}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 italic">
                        {pub.journal}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center whitespace-nowrap">
                        {pub.year}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.title}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Peer Reviewed Publications Modal */}
      {showPeerReviewedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-bold text-secondary">
                Peer Reviewed Publications
              </h3>
              <button
                onClick={() => setShowPeerReviewedModal(false)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <thead className="bg-[#10404A] text-white">
                  <tr>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Sr No
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Faculty
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Journal
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Year
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Title of Paper
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Status of Paper
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {peerReviewedPublications.map((pub, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.srNo}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.faculty}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 italic">
                        {pub.journal}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center whitespace-nowrap">
                        {pub.year}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.title}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Conference Publications Modal */}
      {showConferenceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-bold text-secondary">
                Conference Presentations
              </h3>
              <button
                onClick={() => setShowConferenceModal(false)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <thead className="bg-[#10404A] text-white">
                  <tr>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Sr No
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Faculty
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Organizer of Conference
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Year
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      National/International
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Nature of Participation
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Research Paper Title
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {conferencePublications.map((pub, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.srNo}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.faculty}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 italic">
                        {pub.organizer}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center whitespace-nowrap">
                        {pub.year}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.type}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.participation}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Scopus/IEEE/ABDC Publications Modal */}
      {showScopusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-2xl font-bold text-secondary">
                Scopus/IEEE/ABDC Publications
              </h3>
              <button
                onClick={() => setShowScopusModal(false)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto">
              <table className="w-full border-collapse border border-slate-300 text-left text-sm">
                <thead className="bg-[#10404A] text-white">
                  <tr>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Sr No
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Faculty
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Name of Journal
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Year
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold">
                      Title of Paper
                    </th>
                    <th className="border border-slate-400 px-4 py-3 font-semibold whitespace-nowrap">
                      Status of Paper
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {scopusPublications.map((pub, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.srNo}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.faculty}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 italic">
                        {pub.journal}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center whitespace-nowrap">
                        {pub.year}
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        {pub.title}
                      </td>
                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {pub.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}