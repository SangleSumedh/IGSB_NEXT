"use client"

import React, { useState } from "react";

// ✅ UPDATE all PDF imports to use public folder paths
const BE_Syllabus = "/BEComp.pdf";
const TE_Syllabus = "/TEComp.pdf";
const SE_Syllabus = "/SEComp.pdf";
const SY_BTech = "/BTech.pdf";
const MTech_2024 = "/MTECHFinal.pdf";
const MTech_Syllabus = "/MTECHComp.pdf";

// ✅ UPDATE admission PDFs
const AdmissionAdvertisement = "/BEComp.pdf";
const NoticeACAP = "/TEComp.pdf";
const InstituteLevelAdmission = "/SEComp.pdf";
const VacancyACAP = "/BTech.pdf";
const BTechAdmission = "/MTECHFinal.pdf";
const MBAAdmission = "/MTECHComp.pdf";

// ✅ UPDATE image imports to use Next.js Image component and public folder
import Image from "next/image";

// Remove these import statements and use public folder paths directly:
const FESEM1 = "/FESEM1.png";
const FESEM2 = "/FESEM2.png";
const SESEM1 = "/SESEM1.png";
const SESEM2 = "/SESEM2.png";
const TESEM1 = "/TESEM1.png";
const TESEM2 = "/TESEM2.png";
const BESEM1 = "/BESEM1.png";
const BESEM2 = "/BESEM2.png";


const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeSyllabus, setActiveSyllabus] = useState(null);
  const [activeStructure, setActiveStructure] = useState(null);
  const [activeWhyIndira, setActiveWhyIndira] = useState(null);
  const [activeFeatures, setActiveFeatures] = useState(null);
  const [activeAdmission, setActiveAdmission] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview"); // Default tab

  const faqCategories = [
    "Overview",
    "Sanction Intake",
    "Eligibility Criteria",
    "Documents Required",
    "Admission Procedure",
    "Fee Structure",
    "Admission Advertisement",
    "IL & ACAP Merit List",
    "NOTICE",
    "Scholarship",
    "Syllabus",
    "Course Structure & Credits",
    "Facilities",
    "Staff",
    "Why Indira ICEM",
    "Features",
  ];

  // ✅ Scholarship Table Data
  const scholarshipTableData = [
    {
      category: "ST/SC/Neo-Buddhist/VJNT",
      eligibility:
        "• For SC/ST- No income limit\n• For others income < 8.00 Lacs",
      scholarship: "Tuition Fee and Exam Fees",
    },
    {
      category: "SBC",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship: "Tuition Fee and Exam Fees",
    },
    {
      category: "OBC",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship: "50% of Tuition and Exam Fee",
    },
    {
      category: "EBC",
      eligibility:
        "• EBC students admitted through (CAP)\n• Parent's annual income < 8.00 Lacs.",
      scholarship: "50% of Tuition and Exam Fee",
    },
    {
      category: "Dr. Panjabrao Deshmukh (Hostel Scheme)",
      eligibility:
        "Students whose parents are certified as a marginal farmer or whose parents are registered laborers.",
      scholarship:
        "• For child of Registered Labor / Alpabhudharak (Marginal Land Holder) - For institute in MMRDA - Rs.30,000/- for 10 months.\n• For Annual Family income up to 8 Lakhs - For institute in MMRDA- Rs.10,000/- for 10 months.",
    },
    {
      category:
        "Minority Communities (Muslim, Buddhist, Christian, Sikh, Parsi, Jain & Jews Community)",
      eligibility: "Parent's annual income < 8.00 Lacs.",
      scholarship:
        "Scholarship Amount Maximum Rs.25,000/- Per Annum or Actual Tuition Fees whichever is less",
    },
    {
      category: "TFWS",
      eligibility: "Parent's annual income less than Rs. 8 Lakh",
      scholarship: "Waiver is limited to the tuition fee",
    },
    {
      category: "Indira Scholar Scholarship",
      eligibility:
        "Applicable to Meritorious students of Civil and Mechanical only (For First year and DSE students)",
      scholarship: "Please Contact: Prof. Ashwin Dharme 9764408057",
    },
  ];

  // ✅ Admission Advertisement PDF Data
  const admissionAdvertisementData = [
    {
      id: "advertisement",
      name: "Admission Advertisement",
      pdf: AdmissionAdvertisement,
    },
    {
      id: "notice-acap",
      name: "Notice ACAP IL Admission Reporting",
      pdf: NoticeACAP,
    },
    {
      id: "institute-level",
      name: "Institute Level & Against CAP Admission",
      pdf: InstituteLevelAdmission,
    },
    {
      id: "vacancy-acap",
      name: "Vacancy of ACAP and Institute Level Admission",
      pdf: VacancyACAP,
    },
    {
      id: "btech-admission",
      name: "Institute Level & Against CAP Admission (BTech)",
      pdf: BTechAdmission,
    },
    {
      id: "mba-admission",
      name: "Institute Level & Against CAP Admission (MBA)",
      pdf: MBAAdmission,
    },
    { id: "notice", name: "Notice", pdf: NoticeACAP },
  ];

  // ✅ IL & ACAP Merit List PDF Data
  const meritListData = [
    { id: "btech", name: "BTECH Merit List", pdf: BTechAdmission },
    { id: "mtech", name: "MTECH Merit List", pdf: MTech_Syllabus },
    { id: "mba", name: "MBA Merit List", pdf: MBAAdmission },
    { id: "mca", name: "MCA Merit List", pdf: AdmissionAdvertisement },
    {
      id: "bba-mba",
      name: "BBA/MBA Integrated Merit List",
      pdf: InstituteLevelAdmission,
    },
    { id: "bca-mca", name: "BCA/MCA Integrated Merit List", pdf: VacancyACAP },
  ];

  // ✅ Overview Accreditation Questions
  const faqData = [
    {
      question: "About Department",
      answer: `Keeping in view the emerging IT industry challenges, the computer department at ICEM is known for its academic excellence along with professional learning flexibility for turning the students and providing enhanced training in advanced technologies. The students are trained in core domain areas like Computational Complexity Theory, Applications and Databases, Computer Graphics, Programming and Algorithms.

The Computer Engineering Department at ICEM is well equipped with the Highly Qualified and Skilled Teaching Staff with Industrial Experience, Sophisticated Laboratories and state-of-art infrastructure.

The Department focusses on inculcating in-depth knowledge of all fields of Computer Engineering as well as imparting knowledge of discipline, teamwork, communication skills and an ability to work with a diverse set of constraints. The Department regularly arranges guest lectures, seminars and workshops to train the students in all these aspects. The trainers are from Academia as well as from Industry.

The Department also provides extra inputs through in-house certification programs, aptitude, soft skills, technical training & GATE coaching for Final Year students. To build the overall personality of every student the department also arranges Hackathon, Tech-Fest, Paper Presentations, various competitions which are for the students and organized by the students.`,
    },
    {
      question: "Programs Offered",
      answer: `Department of Computer Engineering was established in 2007 by offering undergraduate program (B.Tech) and postgraduate program (M.Tech) in Computer Engineering. The program is affiliated to University of Pune, recognized by Govt. of Maharashtra & All India Council of Technical Education (AICTE) New Delhi.`,
    },
    {
      question: "VISION",
      answer: `To become an acclaimed center of excellence by rendering modern technology, academics and research for creating holistic, socio-economic professionals with interdisciplinary potential.`,
    },
    {
      question: "MISSION",
      answer: `To foster strong fundamental concepts to students and inspire them to find creative solutions with critical thinking and disciplined time managed environment.
To impart knowledge and skill based education in collaboration with industry, academia and research organizations.
To develop a center of excellence and setup a research laboratory to develop software applications for the society with the association of industry.
To enlighten students with the latest technologies through carefully designed training modules with the alliance of Alumni and Industry as a part of value added education.
To nurture and nourish effective communication, interpersonal skills, and create awareness of ethical and social responsibilities.`,
    },
  ];

  // ✅ Admission Related Data
  const admissionData = {
    sanctionIntake: [
      {
        program: "B.Tech Computer Engineering",
        intake: "180 Seats",
        duration: "4 Years",
        type: "Full Time",
      },
      {
        program: "M.Tech Computer Engineering",
        intake: "24 Seats",
        duration: "2 Years",
        type: "Full Time",
      },
    ],
    eligibilityCriteria: [
      {
        program: "B.Tech Computer Engineering",
        criteria: `• Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/Technical Vocational subject.
• Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together.
• Valid score in JEE Main/MHT-CET or equivalent entrance examination.`,
      },
      {
        program: "M.Tech Computer Engineering",
        criteria: `• Passed Bachelor's degree or equivalent in the relevant field.
• Obtained at least 50% marks (45% in case of candidate belonging to reserved category) in the qualifying examination.
• Valid score in GATE or equivalent entrance examination.`,
      },
    ],
    documentsRequired: [
      "10th Standard Mark Sheet & Passing Certificate",
      "12th Standard Mark Sheet & Passing Certificate",
      "Graduation Mark Sheets & Degree Certificate (for M.Tech)",
      "Transfer Certificate / School Leaving Certificate",
      "Migration Certificate (if applicable)",
      "Domicile Certificate",
      "Nationality Certificate / Birth Certificate",
      "Aadhar Card",
      "Passport Size Photographs",
      "Caste Certificate (if applicable)",
      "Caste Validity Certificate (if applicable)",
      "Non-Creamy Layer Certificate (if applicable)",
      "Gap Certificate (if applicable)",
      "JEE Main/MHT-CET/GATE Score Card",
      "Allotment Letter from Admission Authority",
    ],
    admissionProcedure: [
      "Register for the respective entrance examination (JEE Main/MHT-CET for B.Tech, GATE for M.Tech)",
      "Participate in the Centralized Admission Process (CAP) conducted by Maharashtra State",
      "Fill the option form for college preference",
      "Get allotted to Indira College of Engineering & Management through CAP rounds",
      "Complete the document verification process",
      "Pay the admission fees to confirm the seat",
      "Report to the college for final admission formalities",
    ],
    scholarship: [
      {
        name: "Government Scholarships",
        details: `• EBC Scholarship
• OBC Scholarship
• SC/ST Scholarship
• NT/DNT Scholarship
• Minority Scholarship`,
      },
      {
        name: "State Government Schemes",
        details: `• Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna
• Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna
• Post Matric Scholarship Scheme`,
      },
      {
        name: "Institute Scholarships",
        details: `• Merit-based scholarships for top performers
• Fee concession for economically weaker sections
• Sports quota scholarships
• Special scholarships for female students`,
      },
    ],
  };

  // ✅ Notice Data
  const noticeData = [
    {
      title: "Admission Notice 2024-25",
      date: "March 15, 2024",
      content:
        "Admissions for Academic Year 2024-25 are now open. Interested candidates can apply through the official website.",
    },
    {
      title: "Last Date for Application Submission",
      date: "June 30, 2024",
      content:
        "Last date for submission of application forms for B.Tech and M.Tech programs is June 30, 2024.",
    },
    {
      title: "Document Verification Schedule",
      date: "July 15-20, 2024",
      content:
        "Document verification for admitted candidates will be conducted from July 15 to July 20, 2024.",
    },
  ];

  // ✅ Why Indira ICEM Section
  const whyIndiraData = [
    {
      question: "About Indira College of Engineering & Management",
      answer: `Indira College of Engineering and Management (ICEM), Pune is an AICTE approved engineering college in Pune, established in 2007 under the umbrella of Indira Group of Institutes. The institute is approved by All India Council of Technical Education (AICTE), New Delhi, recognized by the Government of Maharashtra, and is affiliated to Savitribai Phule, Pune University. 

ICEM, one of the best NAAC accredited engineering colleges in Pune, has laid its foundation in the serene and picturesque settings of Parandwadi Village of Maval Taluka, which was then dried in terms of educational and infrastructural facilities. With the untiring efforts of the management, this college has been successful in creating educational and economic possibilities in the adjacent rural areas. 

The college offers a stress-free process for Engineering Admission 2024 with reasonable Engineering Admission 2024 fees, thus helping the locals. It has also made possible positive results in empowering people from surrounding rural communities and has been a torch-bearer in providing the refined education system.

Indira College of Engineering Management, Pune has maintained a perfect balance between the theory and the practical aspects of the learning process, with the theoretical inputs being adequately supplemented by functional components as case studies, fieldwork, industry visits, interaction with professionals, and project study. 

Several industrial tours organized by the institute help the students get exposed to industry practices, skills demanded, management practices, industry expectations, and market opportunities. Such Industry–Institute Interaction keeps the students abreast with the latest technology to help them meet the competitive standards of the industry. ICEM is thus the best engineering college in Pune, empowering students for life.`,
    },
    {
      question: "Three Decade Legacy",
      answer: `The legacy of three decades is a reflection of its highly qualified resource teams which structure advanced teaching methodologies to create a quality industry-ready force year after year.`,
    },
    {
      question: "Fully Equipped World Class Campus",
      answer: `Our commitment to excellence extends to the facilities, infrastructure, sports, library, secure and safe hostels, and classrooms equipped with modern education technology.`,
    },
    {
      question: "Global Learning Platform",
      answer: `The advanced global learning exposure is offered to students via numerous international programs and tie-ups with foreign universities and industries in Singapore, Dubai, Malaysia, and other countries.`,
    },
  ];

  // ✅ Features Section
  const featuresData = [
    {
      question:
        "Distinct Features at Indira College of Engineering & Management",
      answer: `• Highly qualified and skilled teaching staff with industry experience.
• MoU with the University of Nottingham, Malaysia.
• Strong Industry-Institute Interaction & MoU with many industries.
• Domain-oriented international technical certifications.
• Scholar club for students' career elevation and academic enrichment.
• Well-equipped workshop & sophisticated laboratories.
• Well-stocked library with many online & digital journals.
• Care club to counsel & mentor students for personal and academic growth.
• Computer Laboratory with 100 Mbps internet facility and Wi-Fi connectivity.
• Separate Boys and Girls hostel with mess facility.
• Excellent and hygienic canteen facility, recreation hall, sports, and gym.
• Efficient transport system connecting the campus with various hubs of Pune.
• Classrooms with advanced training pedagogies.
• Regular industrial visits and educational tours.`,
    },
    {
      question: "Accreditations & Recognitions",
      answer: `• Approved by All India Council of Technical Education (AICTE), New Delhi
• Recognized by Government of Maharashtra
• Affiliated to Savitribai Phule Pune University
• NAAC Accredited Institution`,
    },
  ];

  // ✅ Syllabus Data
  const syllabusData = [
    {
      category: "Syllabus for Computer Engineering (SPPU Courses)",
      items: [
        {
          id: "be",
          name: "BE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: BE_Syllabus,
        },
        {
          id: "te",
          name: "TE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: TE_Syllabus,
        },
        {
          id: "se",
          name: "SE Computer Engineering (2019 Course) Pattern Syllabus",
          pdf: SE_Syllabus,
        },
      ],
    },
    {
      category: "Syllabus for Computer Engineering (Autonomous Courses)",
      items: [
        { id: "sybtech", name: "SY BTech 2025 course", pdf: SY_BTech },
        {
          id: "mtech2024",
          name: "MTech Computer Engineering 2024 course",
          pdf: MTech_2024,
        },
        {
          id: "mtechsyl",
          name: "M Tech Computer Engineering Syllabus",
          pdf: MTech_Syllabus,
        },
      ],
    },
  ];

  // ✅ Course Structure (Images)
  const courseStructure = [
    { id: "fe1", name: "FE SEM 1 Course Structure", img: FESEM1 },
    { id: "fe2", name: "FE SEM 2 Course Structure", img: FESEM2 },
    { id: "se1", name: "SE SEM 1 Course Structure", img: SESEM1 },
    { id: "se2", name: "SE SEM 2 Course Structure", img: SESEM2 },
    { id: "te1", name: "TE SEM 1 Course Structure", img: TESEM1 },
    { id: "te2", name: "TE SEM 2 Course Structure", img: TESEM2 },
    { id: "be1", name: "BE SEM 1 Course Structure", img: BESEM1 },
    { id: "be2", name: "BE SEM 2 Course Structure", img: BESEM2 },
  ];

  // ✅ Facilities Data (Labs)
  const labs = [
    {
      id: 1,
      name: "Programming Lab-I",
      pcs: 17,
      config:
        "ASUS Intel Core i5, 8GB RAM, 512 SSD, 19.5' LED | Lenovo Think Center Core i7, 8GB RAM, 1TB HDD",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Flex, Mysql, Nasm, TASM, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 2,
      name: "Programming Lab-II",
      pcs: 20,
      config: "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Flex, Mysql, Nasm, TASM, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 3,
      name: "Artificial Intelligence and Research Lab-I",
      pcs: 29,
      config: "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Tensorflow, Keras, OpenGL, yacc",
    },
    {
      id: 4,
      name: "Artificial Intelligence and Research Lab-II",
      pcs: 20,
      config:
        "HP Pro Tower 280 G9 Intel i5-12500, 8GB RAM, 512GB NVME HDD, 19.5' LED",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Mysql, Netbeans, Android Studio, yacc",
    },
    {
      id: 5,
      name: "Project Lab",
      pcs: 22,
      config: "HCL Infinity Intel C2D, 2GB RAM, 320GB HDD, 18.5' Monitor",
      software: "UBUNTU OS: Python, JDK, C++, G++, NASM, MongoDB, Mysql",
    },
    {
      id: 6,
      name: "Database Management System Lab",
      pcs: 38,
      config:
        "Lenovo Think Center Core i7, 8GB RAM, 1TB HDD | HCL Infinity Intel C2D, 2GB RAM, 320GB HDD",
      software:
        "UBUNTU OS: Python, JDK, G++, Lamp Server, Flex, SBCL, Mysql, Nasm, TASM, NS2, Oracle, Samba, Eclipse, Libgraph, yacc",
    },
    {
      id: 7,
      name: "iOS (Apple) Lab",
      pcs: 10,
      config: "Apple M1 Chip with 8-Core CPU & 7-Core GPU, 8GB RAM, 256GB SSD",
      software: "MAC OS",
    },
    {
      id: 8,
      name: "Operating System and Networking Lab",
      pcs: 39,
      config:
        "ASUS Intel Core i5, 8GB RAM, 512 SSD | HCL Infinity Intel C2D, 2GB RAM, 320GB HDD",
      software:
        "UBUNTU OS: Python, JDK, C++, G++, Jupyter Notebook, Pycharm, Mysql, Packet Tracer, Wireshark, Samba, Eclipse, Libgraph",
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-10">
          Department Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT MENU */}
          <div className="bg-white rounded-lg shadow-sm p-4 space-y-2 text-sm font-medium text-gray-700">
            {faqCategories.map((tab, i) => (
              <div
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSyllabus(null);
                  setActiveStructure(null);
                  setActiveWhyIndira(null);
                  setActiveFeatures(null);
                  setActiveAdmission(null);
                }}
                className={`px-3 py-2 rounded cursor-pointer hover:bg-gray-100 transition-all ${
                  activeTab === tab
                    ? "border-l-4 border-secondary bg-gray-50 font-semibold text-secondary"
                    : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* ✅ Sanction Intake */}
            {activeTab === "Sanction Intake" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Sanctioned Intake
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">Program</th>
                        <th className="border p-3 text-left">Intake</th>
                        <th className="border p-3 text-left">Duration</th>
                        <th className="border p-3 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admissionData.sanctionIntake.map((program, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">
                            {program.program}
                          </td>
                          <td className="border p-3">{program.intake}</td>
                          <td className="border p-3">{program.duration}</td>
                          <td className="border p-3">{program.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ✅ Eligibility Criteria */}
            {activeTab === "Eligibility Criteria" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Eligibility Criteria
                </h3>
                {admissionData.eligibilityCriteria.map((program, index) => (
                  <div key={index} className="border rounded-md mb-4">
                    <div
                      onClick={() =>
                        setActiveAdmission(
                          activeAdmission === `eligibility-${index}`
                            ? null
                            : `eligibility-${index}`
                        )
                      }
                      className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-semibold text-secondary">
                        {program.program}
                      </span>
                      <span className="text-xl font-bold text-secondary">
                        {activeAdmission === `eligibility-${index}` ? "−" : "+"}
                      </span>
                    </div>
                    {activeAdmission === `eligibility-${index}` && (
                      <div className="p-4 bg-white whitespace-pre-line">
                        {program.criteria}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Documents Required */}
            {activeTab === "Documents Required" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Documents Required for Admission
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {admissionData.documentsRequired.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 p-3 border rounded-lg bg-gray-50"
                    >
                      <span className="text-secondary font-bold">•</span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Admission Procedure */}
            {activeTab === "Admission Procedure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Admission Procedure
                </h3>
                <div className="space-y-3">
                  {admissionData.admissionProcedure.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 border rounded-lg bg-gray-50"
                    >
                      <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Fee Structure */}
            {activeTab === "Fee Structure" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Fee Structure
                </h3>
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Fee structure for Academic Year 2024-25 will be updated
                    soon.
                  </p>
                  <p className="text-sm text-gray-500">
                    Please contact the admission office for detailed fee
                    information.
                  </p>
                </div>
              </div>
            )}

            {/* ✅ Admission Advertisement - Updated with PDF Accordions */}
            {activeTab === "Admission Advertisement" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Admission Advertisement 2024-25
                </h3>

                {/* PDF Accordions */}
                <div className="mb-6">
                  {admissionAdvertisementData.map((item) => (
                    <div key={item.id} className="border rounded-md mb-2">
                      <div
                        onClick={() =>
                          setActiveAdmission(
                            activeAdmission === item.id ? null : item.id
                          )
                        }
                        className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <span>{item.name}</span>
                        <span className="text-xl font-bold text-secondary">
                          {activeAdmission === item.id ? "−" : "+"}
                        </span>
                      </div>
                      {activeAdmission === item.id && (
                        <div className="p-3 bg-gray-50">
                          <iframe
                            src={item.pdf}
                            title={item.name}
                            className="w-full h-[600px] border rounded-md"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Admission Info */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-secondary mb-3">
                    Admissions Open for Academic Year 2024-25
                  </h4>
                  <div className="space-y-2 text-secondary">
                    <p>• B.Tech Computer Engineering - 180 Seats</p>
                    <p>• M.Tech Computer Engineering - 24 Seats</p>
                    <p>• Apply through Maharashtra CAP Process</p>
                    <p>• Last Date for Application: June 30, 2024</p>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded border">
                    <p className="font-semibold text-secondary">
                      Contact Admission Office:
                    </p>
                    <p>Phone: 020-XXXX-XXXX</p>
                    <p>Email: admissions@icem.ac.in</p>
                    <p>Website: www.icem.ac.in</p>
                  </div>
                </div>
              </div>
            )}

            {/* ✅ IL & ACAP Merit List - Updated with PDF Accordions */}
            {activeTab === "IL & ACAP Merit List" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Institute Level & ACAP Merit Lists
                </h3>

                {/* PDF Accordions */}
                <div className="mb-6">
                  {meritListData.map((item) => (
                    <div key={item.id} className="border rounded-md mb-2">
                      <div
                        onClick={() =>
                          setActiveAdmission(
                            activeAdmission === item.id ? null : item.id
                          )
                        }
                        className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <span>{item.name}</span>
                        <span className="text-xl font-bold text-secondary">
                          {activeAdmission === item.id ? "−" : "+"}
                        </span>
                      </div>
                      {activeAdmission === item.id && (
                        <div className="p-3 bg-gray-50">
                          <iframe
                            src={item.pdf}
                            title={item.name}
                            className="w-full h-[600px] border rounded-md"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-primary/10">
                    <h4 className="font-bold text-secondary mb-2">
                      Institute Level Merit List
                    </h4>
                    <p className="text-secondary">
                      Institute level merit lists for vacant seats will be
                      displayed on the college notice board and official
                      website.
                    </p>
                  </div>
                  <div className="text-center py-4 bg-gray-50 rounded">
                    <p className="text-gray-600">
                      Merit lists will be updated as per the admission schedule.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ✅ NOTICE */}
            {activeTab === "NOTICE" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Important Notices
                </h3>
                <div className="space-y-4">
                  {noticeData.map((notice, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-secondary bg-gray-50 p-4 rounded-r"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-secondary">
                          {notice.title}
                        </h4>
                        <span className="bg-secondary text-white px-2 py-1 rounded text-sm">
                          {notice.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{notice.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ✅ Scholarship - Updated with Table */}
            {activeTab === "Scholarship" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Scholarship Schemes
                </h3>

                {/* Scholarship Table */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-secondary">
                    Scholarship Details
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border p-3 text-left text-secondary">
                            Scholarship Category
                          </th>
                          <th className="border p-3 text-left text-secondary">
                            Scholarship Eligibility
                          </th>
                          <th className="border p-3 text-left text-secondary">
                            Nature of Scholarship
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {scholarshipTableData.map((scholarship, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border p-3 font-medium text-secondary">
                              {scholarship.category}
                            </td>
                            <td className="border p-3 whitespace-pre-line">
                              {scholarship.eligibility}
                            </td>
                            <td className="border p-3 whitespace-pre-line">
                              {scholarship.scholarship}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-secondary mb-2">
                    <strong>Note:</strong> Above information is for basic
                    understanding.
                  </p>
                  <p className="text-sm text-secondary mb-2">
                    Exact present rules / reforms, documents required and
                    eligibility is available on Scholarship Schemes:
                    <a
                      href="https://mahadbtmahait.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary underline ml-1 font-medium"
                    >
                      https://mahadbtmahait.gov.in/
                    </a>
                  </p>
                  <p className="text-sm text-secondary">
                    If applied to scholarship without complete documents,
                    application will be rejected and candidates has to pay full
                    fees.
                  </p>
                </div>

                {/* Existing Scholarship Accordions */}
                {admissionData.scholarship.map((scheme, index) => (
                  <div key={index} className="border rounded-md mb-4 mt-4">
                    <div
                      onClick={() =>
                        setActiveAdmission(
                          activeAdmission === `scholarship-${index}`
                            ? null
                            : `scholarship-${index}`
                        )
                      }
                      className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-semibold text-secondary">
                        {scheme.name}
                      </span>
                      <span className="text-xl font-bold text-secondary">
                        {activeAdmission === `scholarship-${index}` ? "−" : "+"}
                      </span>
                    </div>
                    {activeAdmission === `scholarship-${index}` && (
                      <div className="p-4 bg-white whitespace-pre-line">
                        {scheme.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Staff Tab - Empty for now */}
            {activeTab === "Staff" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Staff Information
                </h3>
                <div className="text-gray-700 text-center py-8">
                  <p>Staff information will be added soon.</p>
                </div>
              </div>
            )}

            {/* ✅ Why Indira ICEM Tab */}
            {activeTab === "Why Indira ICEM" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Why Choose Indira ICEM
                </h3>
                {whyIndiraData.map((item, i) => (
                  <div key={i} className="border rounded-md mb-2">
                    <div
                      onClick={() =>
                        setActiveWhyIndira(activeWhyIndira === i ? null : i)
                      }
                      className={`flex justify-between items-center px-4 py-2 cursor-pointer ${
                        activeWhyIndira === i
                          ? "bg-secondary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>
                        {i + 1}. {item.question}
                      </span>
                      <span className="text-xl font-bold">
                        {activeWhyIndira === i ? "−" : "+"}
                      </span>
                    </div>
                    {activeWhyIndira === i && (
                      <div className="p-4 text-sm bg-gray-50 text-gray-700 whitespace-pre-line">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Features Tab */}
            {activeTab === "Features" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Key Features & Accreditations
                </h3>
                {featuresData.map((item, i) => (
                  <div key={i} className="border rounded-md mb-2">
                    <div
                      onClick={() =>
                        setActiveFeatures(activeFeatures === i ? null : i)
                      }
                      className={`flex justify-between items-center px-4 py-2 cursor-pointer ${
                        activeFeatures === i
                          ? "bg-secondary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>
                        {i + 1}. {item.question}
                      </span>
                      <span className="text-xl font-bold">
                        {activeFeatures === i ? "−" : "+"}
                      </span>
                    </div>
                    {activeFeatures === i && (
                      <div className="p-4 text-sm bg-gray-50 text-gray-700 whitespace-pre-line">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Facilities */}
            {activeTab === "Facilities" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Department of Computer Engineering Laboratories
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-300 text-left">
                    <thead className="bg-gray-100 font-semibold">
                      <tr>
                        <th className="border p-2 text-secondary">Sr. No.</th>
                        <th className="border p-2 text-secondary">Lab Name</th>
                        <th className="border p-2 text-secondary">Total PCs</th>
                        <th className="border p-2 text-secondary">
                          Configuration
                        </th>
                        <th className="border p-2 text-secondary">
                          Software Installed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {labs.map((lab) => (
                        <tr key={lab.id} className="hover:bg-gray-50">
                          <td className="border p-2">{lab.id}</td>
                          <td className="border p-2 font-medium text-secondary">
                            {lab.name}
                          </td>
                          <td className="border p-2">{lab.pcs}</td>
                          <td className="border p-2">{lab.config}</td>
                          <td className="border p-2">{lab.software}</td>
                        </tr>
                      ))}
                      <tr className="font-bold bg-gray-100">
                        <td
                          className="border p-2 text-center text-secondary"
                          colSpan={2}
                        >
                          Total
                        </td>
                        <td className="border p-2 text-secondary">195</td>
                        <td
                          className="border p-2 text-secondary"
                          colSpan={2}
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ✅ Syllabus */}
            {activeTab === "Syllabus" && (
              <div>
                {syllabusData.map((section) => (
                  <div key={section.category} className="mb-6">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {section.category}
                    </h3>
                    {section.items.map((item) => (
                      <div key={item.id} className="border rounded-md mb-2">
                        <div
                          onClick={() =>
                            setActiveSyllabus(
                              activeSyllabus === item.id ? null : item.id
                            )
                          }
                          className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <span className="text-secondary">{item.name}</span>
                          <span className="text-xl font-bold text-secondary">
                            {activeSyllabus === item.id ? "−" : "+"}
                          </span>
                        </div>
                        {activeSyllabus === item.id && (
                          <div className="p-3 bg-gray-50">
                            <iframe
                              src={item.pdf}
                              title={item.name}
                              className="w-full h-[600px] border rounded-md"
                            ></iframe>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Course Structure */}
            {activeTab === "Course Structure & Credits" && (
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  Course Structure & Credit Details
                </h3>
                {courseStructure.map((item) => (
                  <div key={item.id} className="border rounded-md mb-2">
                    <div
                      onClick={() =>
                        setActiveStructure(
                          activeStructure === item.id ? null : item.id
                        )
                      }
                      className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <span className="text-secondary">{item.name}</span>
                      <span className="text-xl font-bold text-secondary">
                        {activeStructure === item.id ? "−" : "+"}
                      </span>
                    </div>
                    {activeStructure === item.id && (
                      <div className="p-3 bg-gray-50 flex justify-center">
                        <div className="relative w-full max-w-4xl h-[700px]">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-contain rounded-md border"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ✅ Overview */}
            {activeTab === "Overview" && (
              <>
                {faqData.map((faq, i) => (
                  <div
                    key={i}
                    className="border rounded-md bg-white overflow-hidden transition-all duration-300"
                  >
                    <div
                      onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                      className={`flex justify-between items-center p-3 cursor-pointer font-medium transition-colors ${
                        activeFAQ === i
                          ? "bg-secondary text-white"
                          : "text-black"
                      }`}
                    >
                      <span>
                        {i + 1}. {faq.question}
                      </span>
                      <span className="text-xl font-bold">
                        {activeFAQ === i ? "−" : "+"}
                      </span>
                    </div>
                    {activeFAQ === i && (
                      <div className="p-3 text-sm bg-gray-50 text-gray-700 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
