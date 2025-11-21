"use client";
import { useState } from "react";
import BannerSlider from "./BannerSlider";


export default function Sports() {
  const [activeSection, setActiveSection] = useState("Sports");
  const [activeFAQ, setActiveFAQ] = useState(null);

  const facilities = {
    Sports: {
      title: "Sports @ ICEM",
      description:
        "At Indira College of Engineering & Management (ICEM), sports are an integral part of the holistic development of students. The college provides a range of sports facilities that encourage physical fitness, teamwork, discipline, and leadership among students.",
      overview:
        "ICEM believes that participation in sports is vital for overall growth, instilling in students the values of teamwork, discipline, and perseverance. The college provides ample infrastructure for a variety of sports and games, both indoor and outdoor, to cater to diverse interests. Students are encouraged to participate in sports events, inter-college tournaments, and university-level competitions throughout the year.",
      items: [
        "Gymnastics",
        "Swimming",
        "Volleyball",
        "Archery",
        "Badminton",
        "Boxing",
        "Handball",
        "Table Tennis",
        "Wrestling",
        "Athletics",
        "Basketball",
        "Chess",
      ],
      faqs: [
        {
          question: "Does ICEM have dedicated sports facilities on campus?",
          answer:
            "Yes, ICEM offers dedicated infrastructure for both indoor and outdoor sports including grounds, courts, and gymnasium facilities for students.",
        },
        {
          question: "Are intercollegiate sports tournaments conducted?",
          answer:
            "Yes. ICEM organizes and participates in intercollegiate, university, and national level tournaments in multiple sports disciplines.",
        },
        {
          question: "Is there a sports committee or coordinator?",
          answer:
            "Yes, ICEM has a dedicated Sports Committee and Faculty Sports Coordinator who plan, organize, and supervise sports activities throughout the academic year.",
        },
        {
          question: "Are there any awards or scholarships for athletes?",
          answer:
            "Outstanding performers in sports are recognized annually with awards, certificates, and in some cases, sports scholarships or fee concessions.",
        },
        {
          question: "Is participation in sports compulsory for students?",
          answer:
            "Participation is encouraged but not compulsory. However, students are motivated to take part in annual sports week and fitness programs.",
        },
      ],
      gradient: "from-gray-300 to-gray-400",
    },
    Library: {
      title: "Library @ ICEM",
      description:
        "The ICEM library is a knowledge hub equipped with extensive print and digital resources, providing an ideal environment for learning, research, and academic growth.",
      overview:
        "The ICEM library serves as the academic heart of the institution, housing a vast collection of books, journals, periodicals, and digital resources. With state-of-the-art facilities including digital library access, reading halls, and research corners, it provides students and faculty with comprehensive support for their academic and research endeavors.",
      items: [
        "Digital Library Section",
        "E-Journals & E-Books",
        "Print Books Collection",
        "Reference Section",
        "Periodicals Section",
        "Reading Hall",
        "Research Corner",
        "Group Study Rooms",
        "Newspaper Section",
        "Thesis & Dissertation",
        "Book Bank Facility",
        "Online Database Access",
      ],
      faqs: [
        {
          question: "What are the library timings?",
          answer:
            "The library is open from 8:00 AM to 8:00 PM on all working days, and from 9:00 AM to 5:00 PM on weekends and holidays.",
        },
        {
          question: "How many books can a student issue at a time?",
          answer:
            "Students can issue up to 4 books for a period of 15 days. Renewal is possible if there are no pending reservations.",
        },
        {
          question: "Does the library provide digital resources?",
          answer:
            "Yes, the library provides access to various e-journals, e-books, online databases, and digital learning resources through its digital library section.",
        },
        {
          question: "Is there a book bank facility?",
          answer:
            "Yes, the library operates a book bank scheme for economically disadvantaged students to support their academic needs.",
        },
        {
          question: "Can students access library resources remotely?",
          answer:
            "Yes, students can access digital resources remotely through the library portal using their institutional login credentials.",
        },
      ],
      gradient: "from-blue-300 to-blue-400",
    },
    Transport: {
      title: "Transport @ ICEM",
      description:
        "ICEM provides safe and reliable transport facilities connecting various parts of Pune to the campus, ensuring comfortable and timely commute for students and staff.",
      overview:
        "The college operates a fleet of well-maintained buses covering major routes across Pune and nearby areas. With emphasis on safety, punctuality, and comfort, the transport service ensures that students can focus on their academics without worrying about daily commute challenges.",
      items: [
        "Pune Station Route",
        "Shivajinagar Route",
        "Hinjewadi Route",
        "Wakad Route",
        "Pimpri Chinchwad Route",
        "Hadapsar Route",
        "Kothrud Route",
        "Aundh Route",
        "Baner Route",
        "Katraj Route",
        "Swargate Route",
        "Nigdi Route",
      ],
      faqs: [
        {
          question: "Is transport facility compulsory for students?",
          answer:
            "No, the transport facility is optional. Students can avail bus services based on their convenience and route availability.",
        },
        {
          question: "How are bus fees charged?",
          answer:
            "Bus fees are charged on a quarterly or yearly basis. The fee structure varies based on the distance and route.",
        },
        {
          question: "Are the buses equipped with safety features?",
          answer:
            "Yes, all college buses are equipped with first-aid kits, fire extinguishers, and experienced drivers. Female attendants are present in buses for additional safety.",
        },
        {
          question: "What is the bus timing schedule?",
          answer:
            "Buses typically arrive at college by 8:00 AM and depart after 4:30 PM. Exact timings may vary based on routes and college schedule.",
        },
        {
          question:
            "Can students change their bus route during the academic year?",
          answer:
            "Route changes are subject to availability and can be requested through the transport office with valid reasons.",
        },
      ],
      gradient: "from-green-300 to-green-400",
    },
    Canteen: {
      title: "Canteen @ ICEM",
      description:
        "The ICEM canteen offers a variety of delicious, hygienic, and affordable food options to cater to diverse tastes and dietary preferences of students and staff.",
      overview:
        "Our canteen is more than just a place to eat - it's a vibrant social hub where students gather, relax, and refuel. With a focus on quality, hygiene, and variety, we serve nutritious meals that cater to different tastes and dietary requirements at reasonable prices.",
      items: [
        "North Indian Thali",
        "South Indian Meals",
        "Chinese Cuisine",
        "Sandwiches & Wraps",
        "Burgers & Fries",
        "Pizza & Pasta",
        "Fresh Juices",
        "Ice Cream & Desserts",
        "Salads & Healthy Options",
        "Beverages & Coffee",
        "Snacks & Fast Food",
        "Special Diet Menus",
      ],
      faqs: [
        {
          question: "What are the canteen operating hours?",
          answer:
            "The canteen operates from 8:00 AM to 6:00 PM on all college working days, with extended hours during examination periods.",
        },
        {
          question: "Is the food hygienic and quality checked?",
          answer:
            "Yes, the canteen maintains high standards of hygiene and quality. Regular inspections and quality checks are conducted to ensure food safety.",
        },
        {
          question: "Are there options for vegetarians and special diets?",
          answer:
            "Yes, the canteen offers separate vegetarian and non-vegetarian sections, along with options for special dietary requirements.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "The canteen accepts cash, UPI payments, and also offers a canteen coupon system for regular students.",
        },
        {
          question: "Can students provide feedback about food quality?",
          answer:
            "Yes, students can provide feedback through suggestion boxes or directly to the canteen committee for continuous improvement.",
        },
      ],
      gradient: "from-orange-300 to-orange-400",
    },
    Gym: {
      title: "Gymnasium @ ICEM",
      description:
        "State-of-the-art gymnasium facilities at ICEM promote physical fitness and well-being among students with modern equipment and professional guidance.",
      overview:
        "Our well-equipped gymnasium provides students with the perfect environment to maintain physical fitness and relieve academic stress. With modern equipment and expert trainers, we encourage a healthy lifestyle and fitness consciousness among the student community.",
      items: [
        "Treadmills",
        "Exercise Bikes",
        "Elliptical Trainers",
        "Weight Training Machines",
        "Free Weights Area",
        "Cable Cross Machines",
        "Leg Press Machines",
        "Smith Machine",
        "Bench Press Stations",
        "Dumbbell Racks",
        "Yoga & Stretching Area",
        "Functional Training Zone",
      ],
      faqs: [
        {
          question: "What are the gym timings?",
          answer:
            "The gym is open from 6:00 AM to 10:00 AM and 4:00 PM to 8:00 PM on all days, including weekends.",
        },
        {
          question: "Is there a trainer available at the gym?",
          answer:
            "Yes, certified fitness trainers are available during operational hours to guide students with proper exercise techniques and workout plans.",
        },
        {
          question: "Are there separate timings for boys and girls?",
          answer:
            "Yes, the gym has designated time slots for boys and girls to ensure comfort and privacy for all users.",
        },
        {
          question: "Is gym membership included in college fees?",
          answer:
            "Basic gym access is included for all students. Specialized training programs may have additional charges.",
        },
        {
          question: "What safety measures are in place at the gym?",
          answer:
            "The gym is equipped with safety equipment, first-aid kits, and trained staff. Regular maintenance and sanitization are conducted.",
        },
      ],
      gradient: "from-purple-300 to-purple-400",
    },
    Hostel: {
      title: "Hostel @ ICEM",
      description:
        "Comfortable and secure hostel accommodation at ICEM provides a home away from home for students with all essential amenities and a conducive environment for learning.",
      overview:
        "Our hostel facilities are designed to provide a comfortable and secure living environment that supports both academic and personal growth. With modern amenities, nutritious food, and round-the-clock security, we ensure that students feel at home while focusing on their studies.",
      items: [
        "AC & Non-AC Rooms",
        "Wi-Fi Connectivity",
        "Study Rooms",
        "Common Recreation Area",
        "Laundry Services",
        "Mess with Dining Hall",
        "24/7 Security",
        "Medical Assistance",
        "Hot Water Supply",
        "Housekeeping Services",
        "Indoor Games",
        "Parking Facility",
      ],
      faqs: [
        {
          question: "Are there separate hostels for boys and girls?",
          answer:
            "Yes, ICEM provides separate, secure hostel facilities for boys and girls with dedicated wardens and staff.",
        },
        {
          question: "What is the hostel fee structure?",
          answer:
            "Hostel fees vary based on room type (AC/Non-AC) and occupancy. Detailed fee structure is available at the hostel administration office.",
        },
        {
          question: "What are the hostel rules and regulations?",
          answer:
            "Hostel has specific rules regarding visiting hours, curfew timings, and conduct to ensure safety and discipline. These are provided to students at the time of admission.",
        },
        {
          question: "Is food included in hostel fees?",
          answer:
            "Yes, hostel fees include mess charges providing nutritious and hygienic meals throughout the day.",
        },
        {
          question: "Can students choose roommates?",
          answer:
            "Roommate preferences are considered during room allocation, subject to availability and administration approval.",
        },
      ],
      gradient: "from-teal-300 to-teal-400",
    },
    "Primary Health Centre": {
      title: "Primary Health Centre @ ICEM",
      description:
        "The Primary Health Centre at ICEM ensures comprehensive healthcare services for students and staff, promoting wellness and providing immediate medical attention when needed.",
      overview:
        "Our Primary Health Centre is committed to maintaining the health and well-being of every member of the ICEM community. With qualified medical professionals, essential equipment, and tie-ups with nearby hospitals, we provide comprehensive healthcare services and promote a culture of wellness on campus.",
      items: [
        "First Aid Treatment",
        "Medical Consultations",
        "Emergency Care",
        "Health Check-ups",
        "Vaccination Services",
        "Health Awareness Programs",
        "Ambulance Service",
        "Medicine Dispensing",
        "Psychological Counseling",
        "Dental Check-up",
        "Eye Check-up",
        "Yoga & Wellness Sessions",
      ],
      faqs: [
        {
          question: "What are the health centre timings?",
          answer:
            "The Primary Health Centre operates from 9:00 AM to 5:00 PM on working days. Emergency services are available 24/7.",
        },
        {
          question: "Is there a doctor available on campus?",
          answer:
            "Yes, qualified doctors are available during working hours, and emergency medical assistance is accessible round the clock.",
        },
        {
          question: "Are medical services free for students?",
          answer:
            "Basic medical services and first-aid are provided free of cost to all students. Specialized treatments may involve nominal charges.",
        },
        {
          question: "Does the health centre conduct health check-up camps?",
          answer:
            "Yes, regular health check-up camps, vaccination drives, and health awareness programs are organized throughout the year.",
        },
        {
          question: "Is ambulance service available?",
          answer:
            "Yes, ambulance service is available for emergencies and referrals to nearby hospitals when required.",
        },
      ],
      gradient: "from-red-300 to-red-400",
    },
  };

  const currentFacility = facilities[activeSection];

 return (
    <div className="w-full bg-white text-gray-800">
       <BannerSlider activeSection={activeSection}/>
      <div className="max-w-7xl mx-auto py-6 px-6 space-y-12">
        {/* Banner Image */}
       

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(facilities).map((facility) => (
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
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {currentFacility.title}
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {currentFacility.description}
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            {activeSection} Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {currentFacility.overview}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">
            {activeSection} Facilities & Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentFacility.items.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl shadow-md overflow-hidden bg-gray-200 group h-56 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentFacility.gradient} group-hover:from-secondary/70 group-hover:to-secondary/60 transition-all duration-300`}
                ></div>
                <p className="relative text-white font-semibold text-lg z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md text-center px-4">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            {currentFacility.faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-md bg-white overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className={`flex justify-between items-center p-3 cursor-pointer font-medium transition-colors ${
                    activeFAQ === i
                      ? "bg-secondary text-white"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  <span>
                    {i + 1}. {faq.question}
                  </span>
                  <span className="text-xl font-bold">
                    {activeFAQ === i ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFAQ === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-3 text-sm bg-gray-50 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


