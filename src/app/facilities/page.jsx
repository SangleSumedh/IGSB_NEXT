"use client";
import { useState } from "react";
import BannerSlider from "./BannerSlider";
import Image from "next/image";

export default function Sports() {
  const [activeSection, setActiveSection] = useState("Sports");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Transport data
  const transportData = {
    contact: {
      telephone: "02114-661661",
      mobile: "+91 9158302525"
    }
  };

  // Primary Health Centre data
  const healthCentreData = {
    description: "Indira Primary Health Centre is an In-house Medical Clinic Facility for Students and Staffs of IGSB campus. Medical Clinic is equipped with equipment needed for primary health management.",
    services: [
      "Medical Consultation",
      "Gynaecological Consultation",
      "Counselling for Students",
      "First Aid",
      "Nebulization",
      "Tetanus Vaccination",
      "Free Medicines"
    ]
  };




  // Hostel data
  const hostelData = {
    overview: {
      description: "IGSB is having Boys & Girls hostel facility with spacious rooms.",
      capacity: {
        girls: "168",
        boys: "126"
      },
      roomFacilities: [
        "Beds",
        "Study table",
        "Chairs",
        "Cupboard facility"
      ]
    },
    managementTeam: [
      { name: "Mr. Dattatray Ovhal", designation: "Boys Hostel Warden", contact: "8788562431", email: "dattatraya.ovhal@indiraicem.ac.in" },
      { name: "Ms. Manisha Dhiwar", designation: "Girls Hostel Warden", contact: "9588475368", email: "Manisha.dhiwar@indiraicem.ac.in" },
      { name: "Ms. Sapna Dahake", designation: "Girls Hostel Warden", contact: "9699913109", email: "sapnadahake@indiraicem.ac.in" }
    ],
    messTeam: [
      { name: "Mr. Vikas Kumar Shetty – M/s Little Chef Canteen", designation: "Canteen Owner", contact: "9665869000", email: "" },
      { name: "Mr. Prajwal Shetty – M/s Little Chef Canteen", designation: "Canteen In-charge for Mess Fees", contact: "8310972775", email: "" }
    ],
    facilities: [
      "Free College Ambulance service 24×7 for hostel students.",
      "Washing machine Facility.",
      "Water coolers for drinking water on each floor.",
      "Separate Common TV room with LCD facility at girls & boys hostel.",
      "CCTV cameras at all major points at girls & boys hostel.",
      "Wi-Fi facility.",
      "DG power backup – 24×7.",
      "Housekeeping & daily cleaning of all rooms (8 am to 4 pm).",
      "Hot water facility in all rooms (6 am to 9 am).",
      "Sanitary pad disposal machine in girls hostel.",
      "Facility of Easy dry wash system in all rooms.",
      "Facility of Security Guards – 24×7.",
      "Facility of warden in hostel.",
      "Facility of Pest control – Monthly.",
      "Facility of Separate sports room – carom & table tennis.",
      "Common Gym facility for hostel students.",
      "Daily attendance & roll call register is maintained.",
      "Health & Accident Insurance coverage for all hostel students.",
      "Hostel committee is operational at hostel.",
      "Mess facility for all hostel students."
    ],
    timings: [
      "Hostel entry time: 7:00 PM",
      "Campus Gate closing time: 7:15 PM",
      "All students should be present in their respective rooms before wardens visit for daily night attendance i.e. by 9:45 PM sharp.",
      "Late Entry NOT ALLOWED. (In case of valid reason, parents' written message/mail must be sent in advance. Only 2 emergency late entries permitted per month.)",
      "Admission will be cancelled if found frequently late or indisciplined.",
      "Students should maintain entries in 'In & Out' registers available at the Main Security Gate."
    ],
    messTimings: [
      "Breakfast: 7:45 am – 9:15 am",
      "Lunch: 1:00 pm – 2:30 pm",
      "Evening Snacks: 5:00 pm – 6:00 pm",
      "Dinner: 8:00 pm – 9:00 pm"
    ],
    documents: [
      "Indemnity Bond (Rs. 100/- Stamp paper with Notary) (format with warden).",
      "Medical Fitness Certificate on Doctor's Letterhead stamped & signed. (If any medical history exists, it must be informed to warden.)",
      "Copy of Student's Aadhar Card.",
      "2 Passport size photos.",
      "Undertaking by Students & Parents (at time of hostel entry).",
      "Declarations (at the time of hostel entry).",
      "Copy of hostel & mess fees receipts.",
      "Two-wheeler permission form."
    ],
    cancellationRules: [
      {
        title: "Cancel Seat Before Hostel Accommodation Within 20 Days",
        steps: [
          "Inform Institute Coordinator → Fill Hostel Cancellation Form (PDF with warden) → Get Director/HOD signature → Submit to warden within 20 days from date of registration.",
          "(Refund amount calculated as per management policy.)"
        ]
      },
      {
        title: "Cancel Seat Before Hostel Accommodation Exceeding 20 Days",
        steps: [
          "If student delays more than 20 days → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund after 20 days.)"
        ]
      },
      {
        title: "Cancel Seat After Taking Hostel Accommodation",
        steps: [
          "Step 1: Inform Institute Coordinator → Fill Cancellation Form → Get Director/HOD signature → Submit to warden.",
          "(No refund policy applicable.)",
          "Step 2: Fill Hostel Leaving Form at authorized signatures → Submit at Security Gate to take luggage out.",
          "(No refund policy applicable.)"
        ]
      }
    ],
    securityDeposit: [
      "At the end of academic session, Refund Form (signed by warden) + Security deposit of Rs. 5000/- refunded after deducting insurance amount.",
      "Keep original receipts safely for refund process."
    ],
    messInstructions: [
      "Hostel student must pay full mess fees for academic year in advance.",
      "Mess food services are mandatory for hostel students.",
      "Students should not waste food or share food with outsiders.",
      "Timings must be strictly followed.",
      "Complaints related to mess must be reported immediately to Canteen In-charge."
    ],
    medicalAssistance: [
      "It is mandatory for all hostel students to submit Medical Fitness Form.",
      "If a student has any previous medical history, it must be informed during admission.",
      "For any medical assistance, contact warden immediately (First Aid Box available).",
      "In case of emergency – Warden & Hostel Team will shift student to nearby hospital in college ambulance.",
      "Parents & Guardians will be connected for updates & expenses.",
      "Medical Fitness Certificate must be submitted after vacation/long leave."
    ]
  };

  return (
    <div className="w-full bg-white text-gray-800">
      <BannerSlider activeSection={activeSection}/>
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["Sports", "Library", "Transport", "Canteen", "Labs", "Hostel", "Primary Health Centre"].map((facility) => (
            <button
              key={facility}
              onClick={() => {
                setActiveSection(facility);
                setActiveFAQ(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === facility
                  ? "bg-secondary text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {facility}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeSection === "Sports" ? (
          // Sports-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-semibold text-secondary text-center mb-6">
                Sports & Recreation
              </h2>

              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
                At <b>IGSB</b>, we believe in the holistic development of our
                students, and sports play a vital role in shaping character,
                building teamwork, and promoting physical fitness.
              </p>

              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                Our institute provides state-of-the-art sports facilities and
                encourages students to participate in various indoor and outdoor
                sports activities at university, state, and national levels.
              </p>

              {/* Sports Infrastructure Grid - 2x2 Grid */}
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
                Sports Infrastructure
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Image 1 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Sports1.jpg"
                    alt="Sports Facility 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 2 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Sports2.jpg"
                    alt="Sports Facility 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl md:text-4xl font-semibold text-secondary mb-4">
                  Sports Facilities
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-md md:text-lg text-gray-700">
                  <li>Well-equipped gymnasium with modern equipment</li>
                  <li>Indoor sports complex for table tennis, chess, and carrom</li>
                  <li>Outdoor playground for cricket, football, and athletics</li>
                  <li>Basketball and volleyball courts</li>
                </ul>
              </div>
            </div>
          </div>
        ) : activeSection === "Library" ? (
          // Library-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Library @ IGSB</h2>
              
              <div className="mb-8">
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  The Library at Indira Global School of Business (IGSB) is a vibrant hub of academic resources, supporting the MBA programme with a rich and diverse collection of learning materials, with a comprehensive collection of physical and digital learning materials.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  Our library boasts a rich repository of 9150 books and 33 journals and 6 daily newspapers spanning various domains of management, business, and allied disciplines. We utilize Koha, an advanced integrated library management software, to streamline operations and enhance user experience.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  IGSB is also a proud member and access of DELNET, J-Gate, NDLI Club and Jayakar Library providing students and faculty access to a vast network of digital resources and scholarly content. Additionally, our digital library includes eBook collections from leading publishers such as Tata McGraw-Hill and Pearson, ensuring that learners have access to high-quality academic content anytime, anywhere.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                  We also offer the student copy of Mint newspaper, a leading business daily, to keep students updated with current affairs, market insights, and economic developments—an essential resource for aspiring business leaders.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  The library is committed to fostering a culture of research, innovation, and lifelong learning.
                </p>
              </div>

              {/* Library Images Grid - 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Image 1 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lib1.jpg"
                    alt="Library Facility 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 2 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lib4.jpg"
                    alt="Library Facility 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 3 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lib3.jpg"
                    alt="Library Facility 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 4 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lib2.jpg"
                    alt="Library Facility 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Transport" ? (
          // Transport-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Transport @ IGSB</h2>
              
              {/* Route Layout Section */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Route Layout</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {["Route-Layout-1","Route-Layout-2", "Route-Layout-3", "Route-Layout-4", "Route-Layout-5"].map((item) => (
                    <div key={item} className=" rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-106  flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Transport Route ${item}`}
                          fill
                          className="object-contain h-auto"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Route {item}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Telephone Number</h4>
                    <p className="text-xl">{transportData.contact.telephone}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Mobile Number</h4>
                    <p className="text-xl">{transportData.contact.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Canteen" ? (
          // Canteen-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Canteen @ IGSB</h2>
              
              {/* Canteen Images Grid */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Our Canteen Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {["Canteen1","Canteen2","Canteen3","Canteen4","Canteen5","Canteen6"].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                       
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-md md:text-lg text-gray-700">
                  Our canteen offers a variety of delicious, hygienic, and affordable food options 
                  to cater to diverse tastes and dietary preferences of students and staff.
                </p>
              </div>
            </div>
          </div>
        ) : activeSection === "Labs" ? (
          // Labs-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Labs @ IGSB</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Well-equipped Computer Lab</h3>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  IGSB has well equipped computer Lab with LAN connectivity. Lab is effectively used in teaching learning process by both Faculty and Student.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
                  Institute has provided dedicated workstations for every Faculty member. Faculty and staff are also provided with laptops on need basis for ease of work and effective delivery of assigned tasks. Every Faculty room has been provided printers as shared resource and scanners are available in library and computer room to be used as and when required. Projection Television sets have been installed in the corridor which is used for internal information dissemination and live streaming business news channels to keep students and staff updated on latest developments.
                </p>

                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6 mt-8">Network Resources</h3>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  Leased Line and Wi-Fi facility is available on campus for seamless connectivity for users. One Drive which is a Microsoft's service for hosting files in the "cloud" Office Online services, is also available for all Outlook users. Through this facility, files can be synced to a PC and accessed from a web browser or a mobile device, as well as shared publicly or with specific individuals.
                </p>

                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6 mt-8">Smart & Virtual Classroom</h3>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  IGSB Classrooms now opting for smart classrooms, aiming to provide students with interactive, engaging, and modern learning experiences. The idea is to leverage technology such as projectors, interactive whiteboards, audio-visual aids, and internet-enabled devices.
                </p>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                  Microsoft Teams is an online teaching and learning environment where teachers and students can present course materials, engage and interact with one another, and work in groups together. The key distinction of a virtual classroom is that it takes place in a live, synchronous setting. The language lab interactive courses provide a very different experience from the traditional system of teaching and learning English, offering more advanced features and functionalities. The lab offers the students a structured e-learning environment to practice English in an entertaining and interactive way to acquire the main language skills such as listening, speaking, reading, and writing.
                </p>
              </div>

              {/* Labs Images Grid - 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Image 1 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lab1.jpg"
                    alt="Lab Facility 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 2 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lab2.jpg"
                    alt="Lab Facility 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 3 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lab3.jpg"
                    alt="Lab Facility 3"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Image 4 */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lab4.jpg"
                    alt="Lab Facility 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
                
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/Facilities/Lab5.jpg"
                    alt="Lab Facility 4"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Primary Health Centre" ? (
          // Primary Health Centre-specific content
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Primary Health Centre @ IGSB</h2>
              
              {/* Health Centre Images Grid */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Our Medical Facilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {["Indira_Primary_Health_Centre_1","Indira_Primary_Health_Centre_2","Indira_Primary_Health_Centre_3","Indira_Primary_Health_Centre_4"].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                      <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                        <Image
                          src={`/Facilities/${item}.webp`}
                          alt={`Health Centre ${item}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    {healthCentreData.description}
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Services Provided</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {healthCentreData.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-md md:text-lg text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === "Hostel" ? (
          // Hostel-specific content
          <div className="max-w-full mx-auto px-6 py-16 space-y-12">
            {/* Overview Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">Hostel @ IGSB</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl md:text-4xl font-bold text-green-800 mb-4">Girls Hostel</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{hostelData.overview.capacity.girls}</div>
                  <p className="text-md md:text-lg text-gray-700">Seats Available</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl md:text-4xl font-bold text-blue-800 mb-4">Boys Hostel</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{hostelData.overview.capacity.boys}</div>
                  <p className="text-md md:text-lg text-gray-700">Seats Available</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
                  {hostelData.overview.description} All rooms are equipped with:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hostelData.overview.roomFacilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-md md:text-lg text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
  Hostel Management Team
</h3>

<div className="bg-white border border-gray-200 rounded-lg mb-8">
  <div className="overflow-x-auto">
    <table className="min-w-[900px] w-full">
      <thead className="bg-secondary text-white">
        <tr>
          <th className="p-4 text-left">Name</th>
          <th className="p-4 text-left">Designation</th>
          <th className="p-4 text-left">Contact</th>
          <th className="p-4 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {hostelData.managementTeam.map((staff, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            <td className="p-4 border-b border-gray-200 text-md md:text-lg">
              {staff.name}
            </td>
            <td className="p-4 border-b border-gray-200 text-md md:text-lg">
              {staff.designation}
            </td>
            <td className="p-4 border-b border-gray-200 text-md md:text-lg">
              {staff.contact}
            </td>
            <td className="p-4 border-b border-gray-200 text-blue-600 text-md md:text-lg">
              {staff.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Mess (Canteen) Team</h3>
              <div className="bg-white border border-gray-200 rounded-lg mb-8">
  <div className="overflow-x-auto">
    <table className="min-w-[700px] w-full">

                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Designation</th>
                      <th className="p-4 text-left">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostelData.messTeam.map((staff, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 border-b border-gray-200 text-md md:text-lg">{staff.name}</td>
                        <td className="p-4 border-b border-gray-200 text-md md:text-lg">{staff.designation}</td>
                        <td className="p-4 border-b border-gray-200 text-md md:text-lg">{staff.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                  </div>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Hostel Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostelData.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-md md:text-lg text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Hostel Timings</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  {hostelData.timings.map((timing, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-md md:text-lg text-gray-700">{timing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h4 className="text-xl md:text-4xl font-bold text-secondary mb-4">Mess Timings</h4>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {hostelData.messTimings.map((timing, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-md md:text-lg text-gray-800">{timing}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Documents Required for Admission</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">{index + 1}.</span>
                      <span className="text-md md:text-lg text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Rules Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Hostel Admission Cancellation Rules</h3>
              <div className="space-y-6">
                {hostelData.cancellationRules.map((rule, index) => (
                  <div key={index} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg md:text-4xl font-bold text-red-800 mb-3">{rule.title}</h4>
                    <ul className="space-y-2">
                      {rule.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-md md:text-lg text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-lg md:text-4xl font-bold text-green-800 mb-3">Security Deposit Refund</h4>
                <ul className="space-y-2">
                  {hostelData.securityDeposit.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-md md:text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mess Instructions Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Canteen (Mess) Instructions</h3>
              <div className="bg-orange-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.messInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-3">•</span>
                      <span className="text-md md:text-lg text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medical Assistance Section */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-6">Medical Assistance & Insurance</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {hostelData.medicalAssistance.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-md md:text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Default content for other tabs
          <div className="max-w-full mx-auto px-6 py-16">
            <div className="w-full bg-white p-8 rounded-xl shadow-md text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-6">{activeSection} @ IGSB</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  Content for {activeSection} section is being updated. Please check back later for detailed information about our {activeSection.toLowerCase()} facilities and services.
                </p>
                <div className="mt-6 text-gray-500">
                  <p className="text-md md:text-lg">For immediate assistance, please contact the administration office.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}