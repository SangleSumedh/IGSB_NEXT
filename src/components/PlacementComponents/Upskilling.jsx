"use client";
import Image from "next/image";

export default function Upskilling() {
  const sections = [
    {
      title: "Mechanical",
      items: [
        { image: "/autocad.png", name: "AUTODESK AutoCAD", showName: true },
        { image: "/ptc-creo.png", name: "Creo" },
        { image: "/catia.png", name: "CATIA" },
        { image: "/solidworks.png", name: "SolidWorks" },
        { image: "/autocad.png", name: "CAD & CAM" },
        { image: "/assembly.png", name: "Assembly" },
      ],
    },
    {
      title: "Civil",
      items: [
        { image: "/revit.png", name: "Revit" },
        { image: "/etabs.png", name: "ETABS" },
        { image: "/bim360.png", name: "Autodesk BIM 360" },
        { image: "/staad.png", name: "STAAD.Pro" },
        { image: "/3max.png", name: "3DS Max" },
        { image: "/autocad.png", name: "AutoCAD", showName: true },
      ],
    },
    {
      title: "Electrical / ENTC",
      items: [
        { image: "/scada.png", name: "PLC SCADA" },
        { image: "/vehicle.png", name: "Electric Vehicle" },
        { image: "/trans.png", name: "Transformers & Circuits" },
        { image: "/battery.png", name: "Battery Management" },
        { image: "/moble.png", name: "App/Web Development" },
        { image: "/iot.png", name: "Internet of Things (IoT)" },
      ],
    },
    {
      title: "AI - DS - ML",
      items: [
        { image: "/comp/ml.png", name: "Machine Learning" },
        { image: "/comp/python.png", name: "Python" },
        { image: "/comp/data-science.png", name: "Data Science" },
        { image: "/comp/tablo.png", name: "Tableau" },
        { image: "/comp/ai.png", name: "Artificial Intelligence" },
        { image: "/comp/deep.png", name: "Deep Learning" },
      ],
    },
    {
      title: "Computer",
      items: [
        { image: "/comp/full-stack.png", name: "Full Stack Development" },
        { image: "/comp/react.png", name: "React" },
        { image: "/comp/css.png", name: "HTML / CSS" },
        { image: "/comp/python.png", name: "Python" },
        { image: "/comp/mongodb.png", name: "MongoDB" },
        { image: "/comp/dsa.png", name: "DSA" },
      ],
    },
    {
      title: "IT",
      items: [
        { image: "/comp/nodejs.png", name: "Node.js" },
        { image: "/comp/django.png", name: "Django" },
        { image: "/comp/webdev.png", name: "App/Web Development" },
        { image: "/comp/linux.png", name: "Linux" },
        { image: "/comp/js.png", name: "JavaScript" },
        { image: "/comp/php.png", name: "PHP" },
      ],
    },
  ];

  return (
    <>
      {/* Upskilling for the Future Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future
          </h2>

          {/* Interpersonal Skills */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden rounded-lg">
            <div className="relative w-full flex-1 min-h-[200px] bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              <Image
                src="/Interpersonal Skills.jpg"
                alt="Interpersonal Skills"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Interpersonal Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Effective Communication Skills & Importance of Verbal and Non-Verbal Communication</li>
                <li>Questioning Skills to Clarify Doubts and Assumptions</li>
                <li>Improving Listening Skills</li>
                <li>Mock GD & Mock PI</li>
                <li>Effective Writing Skills – Emails & Chats</li>
                <li>Emotional Intelligence in Communication</li>
                <li>7Cs of Professional Communication</li>
                <li>Telephone Communication Skills – Seven Aspects</li>
                <li>Managerial Communication Skills</li>
                <li>Conflict Management in Teams</li>
              </ul>
            </div>
          </div>

          {/* Aptitude */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg">
            <div className="relative w-full flex-1 min-h-[350px] bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              <Image
                src="/Aptitude.jpg"
                alt="Aptitude"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Aptitude
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Algebra and Number Theory</li>
                <li>Arithmetic and Mensuration</li>
                <li>Work, Time and Distance</li>
                <li>Permutations and Combinations</li>
                <li>Data Interpretation and Sufficiency</li>
                <li>Modern and Financial Mathematics</li>
                <li>Gamification</li>
                <li>Logical Reasoning and Puzzles</li>
                <li>Data Analysis and Probability</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering - Technical Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-10 uppercase">
            Engineering - Technical
          </h2>

          {/* Columns (Mechanical / Civil / ENTC etc.) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className="text-center  border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base sm:text-lg font-bold text-secondary mb-4 sm:mb-5 uppercase tracking-wide">
                  {section.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="relative h-18 sm:h-20 md:h-24 w-18 sm:w-20 md:w-24 bg-white border border-gray-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all rounded-md overflow-hidden group"
                    >
                      {/* Icon */}
                      <div className="flex-1 flex items-center justify-center w-full p-1.5">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="object-contain transition-transform duration-300 group-hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                      </div>

                      {/* Name inside same box */}
                      <div className="w-full bg-white border-t border-gray-100">
                        <p className="text-[9px] sm:text-[10px] md:text-[11px] text-secondary font-semibold text-center leading-tight px-1 py-1.5">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}