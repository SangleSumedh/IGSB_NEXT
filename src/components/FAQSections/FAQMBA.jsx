"use client";

import {
  ArrowBigDown,
  ArrowBigDownDashIcon,
  Book,
  BookAIcon,
  BookAudio,
} from "lucide-react";
import React, { useState } from "react";
import { FaHandPointUp } from "react-icons/fa";
import { TbPointerUp } from "react-icons/tb";

// ================== ICONS ==================
// Simple SVG components to keep the file self-contained
const Icons = {
  Target: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  ),
  Globe: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  Bulb: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
  Briefcase: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  ),
  Star: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  ),
  Book: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  Puzzle: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 4.83 4.83 0 00-4.146 5.3c.099.538.361 1.035.746 1.435l.792.883v.003a.64.64 0 01-.657.643 4.83 4.83 0 00-4.146 5.3c.099.538.361 1.035.746 1.435l.792.883V21M14.25 6v-.063M14.25 6c.54.103 1.056.273 1.545.503m-1.545-.503A5.256 5.256 0 0121 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043M6.75 7.5l.628.566"
      />
    </svg>
  ),
  Chart: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
  Users: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
  Megaphone: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 018.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73"
      />
    </svg>
  ),
  Currency: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Truck: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  ),
  Leaf: () => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

// ================== SYLLABUS DATA ==================
const syllabusList = [
  {
    id: "mba",
    label: "MBA",
    pdf: "/IGSB/Programmes/MBA_NEP.pdf",
  },
];

const araList = [
  {
    id: "ara",
    label: "ARA",
    pdf: "/IGSB/Programmes/ARA.pdf",
  },
];
const examList = [
  {
    id: "academic-calendar",
    label: "Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/AcademicCalendar.pdf",
  },
  {
    id: "sppu-academic-calendar",
    label: "SPPU Academic Calendar 23-24",
    pdf: "/IGSB/Programmes/SPPUAcademicCalendar.pdf",
  },
];

const sectionContent = {
  "MBA Programme Structure": {
    type: "accordion",
    content: {
      "Types of Courses under CBCS": [
        `Core courses are the compulsory courses for all the students. Core courses are of two types: Generic Core & Subject Core.`,
        `• Generic Core: This is the course which should compulsorily be studied by a candidate as a core requirement to complete the requirement of a degree in a said discipline of study. Therefore, Generic Core courses are mandatory and fundamental in nature. These courses cannot be substituted by any other courses. Such courses are also known as Hard Core Courses.`,
        `• Subject Core: A Core course may be a Subject Core if there is a choice or an option for the candidate to choose from a broad category (grouping) of subjects (specializations).`,
        `• Elective Course: Elective course is a course which can be chosen from a pool of courses. It may be:`,
        `a) Very Specialized or advanced course focusing on a specific aspect`,
        `b) Supportive to the discipline of study`,
        `c) Providing an extended scope`,
        `d) Enabling an exposure to some other discipline/domain`,
        `e) Nurturing candidate's proficiency/skills.`,
        `• Generic Elective: An elective course which is common across disciplines / subjects is called a generic elective. 'Generic Elective' courses develop generic proficiencies amongst the students`,
        `• Subject Elective: A 'Discipline (specialization) centric' elective is called 'Subject Elective.' Subject Elective courses, in the Semester II, III and IV are focused on a specialization.`,
        `• Research Methodology Courses: These courses are focused on various aspects of Research. They include –Business Research Methods, Desk Research (DR) and Field Project (FP) in Semester II, On The Job Training (OJT) in Semester III and Research Project (RP) in Semester IV. DR, FP, OJT and RP shall be specialization specific compulsory courses (subject core). BRM shall be a generic compulsory course.`,
        `• Course Announcement Each semester, the institute announces the elective courses and specializations offered from a wider course basket. While it is not mandatory to offer all electives or specializations, in the spirit of CBCS, students are provided with meaningful choices beyond the minimum required options. This enables them to tailor their learning journey according to their interests and career goals.`,
        `• Course Orientation`,
        `Orientation of courses is conducted at the beginning of every semester. On admission, each student is assigned a Faculty Mentor who provides academic guidance and counseling on course selection, considering the student's profile, career objectives, and prior coursework. With the Mentors consent, students selects a set of courses planned for the semester.`,
        `This structured approach ensures that students benefit from academic flexibility, guided mentorship, and a curriculum aligned with their professional development and industry readiness`,
      ],

      "Major Specialization Structure": [
        `The following specializations are being offered:`,
        `1. Marketing Management (MKT)`,
        `2. Financial Management (FIN)`,
        `3. Human Resources Management (HRM)`,
        `4. Operations & Supply Chain Management (OSCM)`,
        `5. Business Analytics (BA) `,
        `• Additional Specialization:`,
        `A student who has completed the MBA programme under this pattern may enroll for additional specialization after passing out the regular MBA programme. Such students will be exempted from appearing for all the generic core and generic elective courses.`,
        `Such students shall have to appear for the subject core, subject elective courses, DR, FP, OJT and RP of the additional specialization that they have opted for`,
      ],

      "Degree Award Details": [
        `The degree requirements for the MBA programme are completion of minimum 104 credits.`,
        `Maximum Attempts per Course:`,
        `A student shall earn the credits for a given course in maximum FOUR attempts.`,
        `Maximum Duration for completion of the Programme:`,
        `The candidates shall complete the MBA Programme within 4 years from the date of admission.`,
        `The entire process of MBA Degree Convocation is executed by Savitribai Phule Pune University, Pune, Maharashtra.`,
      ],
    },
  },
  "POs , PEOs , PSOs": {
    type: "accordion",
    content: {
      "Programme Educational Objectives (PEOs)": [
        {
          icon: <Icons.Target />,
          text: "PEO1: Graduates of the MBA program will successfully integrate core, cross-functional and inter-disciplinary aspects of management theories, models and frameworks with the real-world practices and the sector specific nuances to provide solutions to real world business, policy and social issues in a dynamic and complex world.",
        },
        {
          icon: <Icons.Globe />,
          text: "PEO2: Graduates of the MBA program will possess excellent communication skills, excel in cross-functional, multi-disciplinary, multi-cultural teams, and have an appreciation for local, domestic and global contexts so as to manage continuity, change, risk, ambiguity and complexity.",
        },
        {
          icon: <Icons.Bulb />,
          text: "PEO3: Graduates of the MBA program will be appreciative of the significance of Indian ethos and values in managerial decision making and exhibit value centered leadership.",
        },
        {
          icon: <Icons.Briefcase />,
          text: "PEO4: Graduates of the MBA program will be ready to engage in successful career pursuits covering a broad spectrum of areas in corporate, non-profit organizations, public policy, entrepreneurial ventures and engage in life-long learning.",
        },
        {
          icon: <Icons.Star />,
          text: "PEO5: Graduates of the MBA program will be recognized in their chosen fields for their managerial competence, creativity & innovation, integrity & sensitivity to local and global issues of social relevance and earn the trust & respect of others as inspiring, effective and ethical leaders, managers, entrepreneurs, intrapreneurs and change agents.",
        },
      ],
      "Programme Outcomes (POs)": [
        {
          icon: <Icons.Book />,
          text: "Generic and Domain Knowledge - Ability to articulate, illustrate, analyze, synthesize and apply the knowledge of principles and frameworks of management and allied domains to the solutions of real-world complex business issues.",
        },
        {
          icon: <Icons.Puzzle />,
          text: "Problem Solving & Innovation - Ability to Identify, formulate and provide innovative solution frameworks to real world complex business and social problems by systematically applying modern quantitative and qualitative problem-solving tools and techniques.",
        },
        {
          icon: <Icons.Chart />,
          text: "Critical Thinking - Ability to conduct investigation of multidimensional business problems using research based knowledge and research methods to arrive at data driven decisions.",
        },
        {
          icon: <Icons.Users />,
          text: "Effective Communication - Ability to effectively communicate in cross-cultural settings, in technology mediated environments, especially in the business context and with society at large.",
        },
        {
          icon: <Icons.Target />,
          text: "Leadership and Team Work - Ability to collaborate in an organizational context and across organizational boundaries and lead themselves and others in the achievement of organizational goals and optimize outcomes for all stakeholders.",
        },
        {
          icon: <Icons.Globe />,
          text: "Global Orientation and Cross-Cultural Appreciation: Ability to approach any relevant business issues from a global perspective and exhibit an appreciation of Cross Cultural aspects of business and management.",
        },
        {
          icon: <Icons.Briefcase />,
          text: "Entrepreneurship - Ability to identify entrepreneurial opportunities and leverage managerial & leadership skills for founding, leading & managing startups as well as professionalizing and growing family businesses.",
        },
        {
          icon: <Icons.Leaf />,
          text: "Environment and Sustainability - Ability to demonstrate knowledge of and need for sustainable development and assess the impact of managerial decisions and business priorities on the societal, economic and environmental aspects.",
        },
        {
          icon: <Icons.Star />,
          text: "Social Responsiveness and Ethics - Ability to exhibit a broad appreciation of the ethical and value underpinnings of managerial choices in a political, cross-cultural, globalized, digitized, socio-economic environment and distinguish between ethical and unethical behaviors & act with integrity.",
        },
        {
          icon: <Icons.Bulb />,
          text: "LifeLong Learning – Ability to operate independently in new environment, acquire new knowledge and skills and assimilate them into the internalized knowledge and skills.",
        },
      ],
      "Programme Specific Outcomes (PSOs) - Marketing": [
        {
          icon: <Icons.Chart />,
          text: "PSO MKT1: Strategic Marketing Analysis and Decision Making: Graduates specializing in Marketing Management for the MBA programme will be able to Analyze market opportunities and challenges using advanced marketing research tools and techniques. They will develop strategic marketing plans that align with organizational objectives and respond effectively to dynamic market conditions.",
        },
        {
          icon: <Icons.Megaphone />,
          text: "PSO MKT2: Digital and Social Media Marketing Proficiency: Graduates specializing in Marketing Management for the MBA programme will be able to demonstrate proficiency in leveraging digital and social media platforms to enhance brand visibility and customer engagement. They will design and execute integrated digital marketing campaigns that drive business growth.",
        },
        {
          icon: <Icons.Users />,
          text: "PSO MKT3: Customer Relationship Management and Service Excellence: Graduates specializing in Marketing Management for the MBA programme will be able to excel in building and maintaining strong customer relationships through effective communication, personalized marketing, and superior customer service. They will implement CRM systems to enhance customer loyalty and satisfaction.",
        },
        {
          icon: <Icons.Bulb />,
          text: "PSO MKT4: Innovative Product and Brand Management: Graduates specializing in Marketing Management for the MBA programme will be able to develop innovative product and brand management strategies that address consumer needs and preferences. They will manage product lifecycles, brand portfolios, and execute branding initiatives that strengthen brand equity.",
        },
      ],
      "Programme Specific Outcomes (PSOs) - Finance": [
        {
          icon: <Icons.Currency />,
          text: "PSO FIN1: Financial Analysis and Reporting: Graduates specializing in Financial Management for the MBA programme will be able to demonstrate the ability to analyze and interpret financial statements, conduct financial ratio analysis, and prepare comprehensive financial reports to support decision-making processes.",
        },
        {
          icon: <Icons.Chart />,
          text: "PSO FIN2: Investment and Portfolio Management: Graduates specializing in Financial Management for the MBA programme will be able to Apply knowledge of investment theories, financial instruments, and portfolio management techniques to construct and manage investment portfolios aimed at achieving specific financial goals.",
        },
        {
          icon: <Icons.Briefcase />,
          text: "PSO FIN3: Corporate Finance and Risk Management: Graduates specializing in Financial Management for the MBA programme will be able to Develop expertise in corporate finance principles, including capital structure, cost of capital, and capital budgeting, while effectively managing financial risks using various risk management tools and techniques.",
        },
        {
          icon: <Icons.Globe />,
          text: "PSO FIN4: Financial Technology and Innovation: Graduates specializing in Financial Management for the MBA programme will be able to Leverage emerging financial technologies (FinTech) and innovative financial solutions to improve financial services delivery, enhance operational efficiency, and support strategic financial planning.",
        },
      ],
      "Programme Specific Outcomes (PSOs) - HRM": [
        {
          icon: <Icons.Users />,
          text: "PSO HRM1: Strategic HR Planning and Implementation: Graduates specializing in Human Resource Management for the MBA programme will be able to Demonstrate the ability to develop and implement strategic human resource plans that align with organizational goals, ensuring optimal utilization of human capital.",
        },
        {
          icon: <Icons.Star />,
          text: "PSO HRM2: Talent Acquisition and Development: Graduates specializing in Human Resource Management for the MBA programme will be able to Apply advanced techniques and methodologies for effective talent acquisition, development, and retention, fostering a culture of continuous learning and professional growth.",
        },
        {
          icon: <Icons.Book />,
          text: "PSO HRM3: Employee Relations and Legal Compliances: Graduates specializing in Human Resource Management for the MBA programme will be able to Ensure compliance with labor laws and ethical standards while managing employee relations, promoting a positive and legally compliant work environment.",
        },
        {
          icon: <Icons.Chart />,
          text: "PSO HRM4: HR Analytics and Performance Management: Graduates specializing in Human Resource Management for the MBA programme will be able to Utilize HR analytics and performance management systems to drive data-driven decisions, enhance employee performance, and achieve organizational excellence.",
        },
      ],
      "Programme Specific Outcomes (PSOs) - OSCM": [
        {
          icon: <Icons.Leaf />,
          text: "PSO OSCM1: Operations Strategy and Process Improvement: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Develop and implement effective operations strategies to enhance process efficiency, reduce waste, and improve overall productivity within organizations.",
        },
        {
          icon: <Icons.Truck />,
          text: "PSO OSCM2: Supply Chain Design and Management: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Design, analyze, and manage end-to-end supply chains to ensure the seamless flow of goods, services, and information, while minimizing costs and meeting customer demands.",
        },
        {
          icon: <Icons.Chart />,
          text: "PSO OSCM3: Data-Driven Decision Making in Operations: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Utilize quantitative and qualitative data analysis techniques to make informed decisions in operations and supply chain management, ensuring alignment with business goals and customer requirements.",
        },
        {
          icon: <Icons.Globe />,
          text: "PSO OSCM4: Sustainable and Ethical Supply Chain Practices: Graduates specializing in Operations and Supply Chain Management for the MBA programme will be able to Promote and implement sustainable and ethical practices within operations and supply chain management to support environmental sustainability, social responsibility, and ethical governance.",
        },
      ],
      "Programme Specific Outcomes (PSOs) - Business Analytics": [
        {
          icon: <Icons.Puzzle />,
          text: "PSO BA1: Data-Driven Decision Making: Graduates specializing in Business Analytics for the MBA programme will be able to apply advanced analytical techniques and tools to collect, process, and interpret large datasets, enabling data-driven decision making in various business functions.",
        },
        {
          icon: <Icons.Chart />,
          text: "PSO BA2: Business Intelligence and Reporting: Graduates specializing in Business Analytics for the MBA programme will be able to Demonstrate proficiency in using business intelligence tools and software to create comprehensive reports and dashboards.",
        },
        {
          icon: <Icons.Bulb />,
          text: "PSO BA3: Application of Business Analytics: Graduates specializing in Business Analytics for the MBA programme will be able to Apply business analytics methodologies to various functional areas such as marketing, finance, operations, and human resources.",
        },
        {
          icon: <Icons.Target />,
          text: "PSO BA4: Integration of Analytics in Business Strategy: Graduates specializing in Business Analytics for the MBA programme will be able to Integrate business analytics methodologies with strategic management practices.",
        },
      ],
    },
  },

  "Syllabus & Course Structure": {
    type: "syllabus",
    content: syllabusList,
  },
  "Fee Structure": {
    type: "accordion",
    content: {
      "MBA Fees (Batch 2025–27)": [
        `MBA 1st & 2nd Year yearly fees in ₹ for the Batch 2025-27`,
        `Final Fees Approved by Fees Regulating Authority, Govt. of Maharashtra in the meeting held on April 3, 2025.`,
        {
          table: true,
          headers: ["Category", "Tuition Fees", "Development Fees", "Total"],
          rows: [
            ["Open (Male/Female)", "₹ 140,359", "₹ 16,141", "₹ 156,500"],
            [
              "EBC / OBC / EWS / SEBC (Female)",
              "₹ 70,180",
              "₹ 16,141",
              "₹ 86,321",
            ],
            ["VJ/DT/NT", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["SBC", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["SC", "₹ 0", "₹ 16,141", "₹ 16,141"],
            ["ST", "₹ 0", "₹ 0", "₹ 0"],
          ],
        },
        `*Subject to revision by the Fees Regulating Authority (FRA).`,
        `Category-wise fees apply only if the student is eligible for respective Government Scholarships. Non-eligible students must pay full fees.`,
        `Management Quota Fee (as per FRA meeting dated 24 April 2025): ₹ 4,69,500`,
        `Education loan available under PM Vidyalaxmi scheme: https://pmvidyalaxmi.co.in`,
      ],

      "मराठी शुल्क माहिती": [
        `एमबीए २०२५–२७ बॅचसाठी शुल्क नियामक प्राधिकरण, महाराष्ट्र शासन यांनी ३ एप्रिल २०२५ रोजी मंजूर केलेले शुल्क.`,
        {
          table: true,
          headers: ["प्रवर्ग", "शैक्षणिक शुल्क", "विकास शुल्क", "एकूण"],
          rows: [
            ["खुला", "₹ १४०३५९", "₹ १६१४१", "₹ १५६५००"],
            [
              "ईबीसी / इ.मा.व / आ.दु.घ / सा.शै.मा.प्र.",
              "₹ ७०१८०",
              "₹ १६१४१",
              "₹ ८६३२१",
            ],
            ["वि.जा./भ.ज.(ब)/भ.ज.(क)/भ.ज.(ड)", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["वि.मा.प्र.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["अ.जा.", "₹ ०", "₹ १६१४१", "₹ १६१४१"],
            ["अ.ज.", "₹ ०", "₹ ०", "₹ ०"],
          ],
        },
        `व्यवस्थापन कोटा शुल्क: ₹ ४,६९,५००`,
        `PM Vidyalaxmi शैक्षणिक कर्ज: https://pmvidyalaxmi.co.in`,
      ],
    },
  },

  Admission: {
    type: "table",
    content: [
      {
        title: "Approved Intake for A.Y. 2025-26",
        headers: [
          "Choice Code",
          "Choice Code TFWS",
          "Course Name",
          "Course Status",
          "Intake 2025-26",
          "Intake (AICTE)",
          "Gov. GR",
          "University Affiliated",
          "Final Intake for Admission 2025-26",
          "Intake Status",
        ],
        rows: [
          [
            "697610110",
            "697610111T",
            "M. B. A.",
            "Regular",
            "180",
            "180",
            "180",
            "180",
            "180",
            "Approved",
          ],
          ["Total", "", "", "", "180", "180", "180", "180", "180", ""],
        ],
      },
    ],
  },

  "Eligibility Criteria": {
    type: "accordion",
    content: {
      Criteria: [
        {
          table: true,
          headers: [
            "Maharashtra State Candidates",
            "Jammu & Kashmir Migrant Candidates",
            "All India Candidates (AI)",
          ],
          rows: [
            [
              `(i) The candidate should be an Indian National;

(ii) Passed minimum three-year duration Bachelor's Degree awarded by any of the Universities recognized by UGC or AIU in any discipline with at least 50% marks in aggregate (45% for backward class categories and PwD of Maharashtra State only);

(iii) Obtained non-zero score in MAH-MBA/MMS-CET.`,
              `**Obtained non-zero positive score in any one of the following examinations:  
MAH-MBA/MMS-CET, CAT, CMAT**`,
              `The candidate should be an Indian National;

Passed minimum three-year duration Bachelor's Degree awarded by any of the Universities recognized by UGC/AIU with at least 50% marks (45% for backward class categories & PwD of Maharashtra State);

OR

Appeared for final year of any Bachelor's Degree.

Must obtain a non-zero positive score in MAH-MBA/MMS-CET, CAT, CMAT.`,
            ],
          ],
        },

        // NOTES
        `Note:
• "Aggregate marks" means the grand total of marks for subjects considered for class declaration by the respective University.  
• If grades/CGPA are awarded instead of marks, conversion will follow the procedure certified by the respective University/Institution.  
• Percentage shall be calculated by rounding off to two decimal places.  
• Candidates belonging to SC, VJ/DT (NT-A), NT-B, NT-C, NT-D, OBC, SBC, SEBC categories must submit "Caste Validity Certificate" issued by Social Welfare Scrutiny Committee.  
• ST candidates must submit "Tribe Validity Certificate" issued by the Tribal Department Scrutiny Committee.`,

        // DOCUMENTS REQUIRED
        {
          title: "Documents Required",
          list: [
            "MAH CET 2024 Scorecard",
            "FC Acknowledgement (Document Verification)",
            "10th Marksheet",
            "12th Marksheet",
            "Undergraduate Marksheet & Provisional Certificate",
            "Transfer Certificate",
            "Migration Certificate (if applicable)",
            "Educational GAP Certificate (if applicable, on ₹100 stamp paper)",
            "Nationality Certificate (Passport or Certificate from District Magistrate)",
            "Maharashtra Domicile or Birth Certificate",
            "Caste Certificate (if applicable)",
            "Caste Validity Certificate (if applicable)",
            "EWS / SEBC Certificate (if applicable)",
            "Income Certificate (if applicable)",
            "Non-Creamy Layer Certificate (if applicable)",
            "Aadhar Card",
            "(Documents applicable for all candidates)",
          ],
        },

        {
          link: true,
          label: "Click Here: Documents Required",
          href: "/IGSB/Programmes/Admission-Documents-Required.pdf",
        },
      ],
    },
  },

  Exam: {
    type: "syllabus",
    content: examList,
  },

  ARA: {
    type: "syllabus",
    content: araList,
  },
};

// ================== MAIN COMPONENT ==================
export default function FAQMBA() {
  const [active, setActive] = useState("MBA Programme Structure");

  const tabs = Object.keys(sectionContent);

  // Render content by type
  const renderContent = (data) => {
    if (!data) return null; // Safety check

    switch (data.type) {
      case "accordion":
        return (
          <div className="space-y-4">
            {Object.entries(data.content).map(([title, items], index) => (
              <div
                key={title}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <details className="group" open={index === 0}>
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-[#3aafa9] hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-white text-lg">
                      {title}
                    </h4>
                    <span className="transition-transform group-open:rotate-180 text-white">
                      <ArrowBigDownDashIcon className="w-6 h-6" />
                    </span>
                  </summary>

                  <div className="p-5 pt-3 space-y-3 bg-white border-t border-slate-800 text-justify">
                    {items.map((item, i) => {
                      // NEW: Handle items with icons
                      if (typeof item === "object" && item.icon) {
                        return (
                          <div
                            key={i}
                            className="flex gap-4 items-start p-3 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="shrink-0 p-2 bg-[#ff8b61]/10 text-[#ff8b61] rounded-lg">
                              {item.icon}
                            </div>
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                              {item.text}
                            </p>
                          </div>
                        );
                      }

                      if (typeof item === "object" && item.table) {
                        return (
                          <div
                            key={i}
                            className="overflow-x-auto my-4 rounded-lg border border-slate-200 shadow-sm"
                          >
                            <table className="w-full text-sm">
                              <thead className="bg-[#10404a] text-white">
                                <tr>
                                  {item.headers.map((h, idx) => (
                                    <th
                                      key={idx}
                                      className="p-3 font-semibold text-left border-r border-[#3aafa9]/30 last:border-none"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.rows.map((row, rIndex) => (
                                  <tr
                                    key={rIndex}
                                    className="border-b border-slate-100 hover:bg-slate-50 last:border-none text-slate-700"
                                  >
                                    {row.map((cell, cIndex) => (
                                      <td
                                        key={cIndex}
                                        className="p-3 border-r border-slate-100 last:border-none whitespace-pre-line"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      if (typeof item === "object" && item.pdf) {
                        return (
                          <a
                            key={i}
                            href={item.pdf}
                            target="_blank"
                            className="text-[#10404a] underline font-medium hover:text-[#ff8b61] block transition-colors"
                          >
                            {item.label}
                          </a>
                        );
                      }
                      if (typeof item === "object" && item.list) {
                        return (
                          <div key={i}>
                            {item.title && (
                              <h5 className="font-semibold text-[#10404a] mb-2 mt-4">
                                {item.title}
                              </h5>
                            )}
                            <ul className="list-disc pl-6 space-y-1 text-slate-700 marker:text-[#ff8b61]">
                              {item.list.map((l, li) => (
                                <li key={li}>{l}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      if (typeof item === "object" && item.link) {
                        return (
                          <a
                            key={i}
                            href={item.href}
                            className="text-[#10404a] font-bold underline hover:text-[#ff8b61] block mt-2 transition-colors"
                          >
                            {item.label}
                          </a>
                        );
                      }
                      return (
                        <p
                          key={i}
                          className="text-slate-700 whitespace-pre-line leading-relaxed"
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </details>
              </div>
            ))}
          </div>
        );
      case "text":
        return (
          <div className="prose max-w-none text-slate-700 leading-relaxed">
            {data.content}
          </div>
        );
      case "notice":
        return <p className="text-slate-600 text-lg">{data.content}</p>;
      case "table":
        return (
          <div className="space-y-8">
            {data.content.map((tbl, idx) => (
              <div key={idx} className="bg-white">
                {tbl.title && (
                  <h4 className="font-bold text-[#10404a] text-xl mb-4 border-l-4 border-[#ff8b61] pl-3">
                    {tbl.title}
                  </h4>
                )}

                <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#10404a] text-white">
                      <tr>
                        {tbl.headers.map((h, hi) => (
                          <th key={hi} className="p-4 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tbl.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className="border-b border-slate-100 hover:bg-slate-50 text-slate-700 last:border-none"
                        >
                          {row.map((cell, ci) => (
                            <td key={ci} className="p-4 whitespace-nowrap">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        );
      case "syllabus":
        return (
          <div className="grid gap-4">
            {data.content.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-slate-200 rounded-lg hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center gap-3">
                  <BookAudio className="w-8 h-8 text-[#ff8b61] shrink-0" />
                  <h5 className="font-semibold text-[#10404a] text-lg">
                    {item.label}
                  </h5>
                </div>
                <a
                  href={item.pdf}
                  target="_blank"
                  className="mt-3 sm:mt-0 px-6 py-2 bg-[#3aafa9] text-white font-medium rounded-full text-center hover:bg-[#2b8a85] transition-colors shadow-sm"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#10404a] to-[#1d676b] py-8">
      <div className=" mx-auto ">
        {/* HEADER */}

        {/* ================= MOBILE VIEW (Accordion Layout) ================= */}
        <div className="lg:hidden space-y-4 px-4 sm:px-6 lg:px-8 py-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setActive(active === tab ? "" : tab)}
                className={`w-full text-left px-6 py-4 font-bold text-md flex justify-between items-center transition-all ${
                  active === tab
                    ? "bg-[#10404a] text-white"
                    : "bg-white text-[#10404a] hover:bg-slate-50"
                }`}
              >
                {tab}
                <span
                  className={`transform transition-transform duration-200 ${
                    active === tab ? "rotate-180" : ""
                  }`}
                >
                  <ArrowBigDownDashIcon className="w-6 h-6" />
                </span>
              </button>

              {/* Accordion Content */}
              {active === tab && (
                <div className="p-6 border-t border-slate-200 bg-white animate-fadeIn">
                  {renderContent(sectionContent[tab])}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (Sidebar + Content) ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 pb-8 items-start px-4 sm:px-6 lg:px-8">
          {/* LEFT MENU (Sidebar) */}
          <nav className="col-span-3 bg-[#3aafa9] rounded-xl shadow-xl p-2 border border-[#3aafa9]/20 sticky top-24">
            <div className="p-4 mb-2">
              <h3 className="font-extrabold text-white text-2xl md:text-3xl tracking-wide">
                MBA Overview
              </h3>
              <div className="h-1 w-12 bg-[#ff8b61] mt-2 rounded-full"></div>
            </div>

            <div className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-between group ${
                    active === tab
                      ? "bg-secondary text-white shadow-md transform translate-x-1"
                      : "text-white hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="truncate mr-2">{tab}</span>
                  {active === tab && (
                    <span className="text-white text-sm">➜</span>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* RIGHT CONTENT (Main Display) */}
          <div className="col-span-9 bg-white rounded-xl shadow-2xl p-10 border border-slate-200 min-h-[600px] relative">
            <h3 className="text-3xl font-bold text-[#10404a] mb-8 pb-4 border-b border-slate-100">
              {active}
            </h3>

            {active && sectionContent[active] ? (
              <div className="animate-fadeIn">
                {renderContent(sectionContent[active])}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[400px] text-slate-400">
                {/* <span className="text-6xl mb-4">👆</span> */}
                <TbPointerUp className="text-6xl mb-4" />
                <p className="text-xl">Select a section to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}