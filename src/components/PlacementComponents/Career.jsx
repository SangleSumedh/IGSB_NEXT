// pages/career.js
import {
  FaUserGraduate,
  FaHandshake,
  FaLightbulb,
  FaIndustry,
} from "react-icons/fa";

export default function Career() {
  const cards = [
    {
      icon: <FaUserGraduate className="text-3xl sm:text-4xl mb-2 text-primary" />,
      title: "Alumni Mentorship & Placement Guidance",
      desc: "Connect with our powerful network of accomplished alumni for one-on-one mentorship. Get personalized guidance on career paths, resume building, and interview strategies to land your dream role.",
    },
    {
      icon: <FaHandshake className="text-3xl sm:text-4xl mb-2 text-primary" />,
      title: "Corporate Partnerships & Recruitment Drive",
      desc: "We have established strong, lasting relationships with a diverse portfolio of national and multinational corporations. Benefit from exclusive recruitment drives, on-campus placements, and direct access to sought-after employers actively seeking ICEM talent.",
    },
    {
      icon: <FaLightbulb className="text-3xl sm:text-4xl mb-2 text-primary" />,
      title: "Internships & Industry Exposure",
      desc: "Theory meets practice through mandatory, paid internships with our partner companies. From semester-long projects in Pune to global opportunities, gain invaluable hands-on experience that makes your resume stand out.",
    },
    {
      icon: <FaIndustry className="text-3xl sm:text-4xl mb-2 text-primary" />,
      title: "Career Development Workshops",
      desc: "We polish your professional edge. Through a continuous schedule of workshops—from mastering communication and leadership to acing mock interviews and building a powerful personal brand—we ensure you are not just qualified, but truly job-ready.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 lg:py-20"
      style={{ backgroundImage: `url('/studentsraisinghands.jpg')` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Your Career is Our Mission.
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14 leading-relaxed text-gray-200">
          Your potential is limitless, and so are your opportunities at ICEM. We
          merge academic rigor with real-world readiness, empowering you with
          the skills, network, and experience to excel.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 hover:border-primary/40 hover:bg-white/15 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <div className="flex flex-col items-center text-center flex-1 justify-between">
                {card.icon}
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}