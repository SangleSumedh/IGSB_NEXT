import Image from "next/image";
export default function ResearchLab() {
  return (
    <>
      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center border border-gray-200 shadow-md p-4 md:p-8 bg-white rounded-lg">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4">
                Research Labs & Facilities
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                ICEM stands as a hub of innovation and experiential learning,
                where technology, creativity, and research converge. Every
                laboratory and facility is designed to nurture curiosity,
                encourage experimentation, and build industry-relevant
                expertise. These spaces empower students to translate concepts
                into real-world solutions, fostering hands-on learning,
                interdisciplinary collaboration, and future-ready innovation.
              </p>

              <h3 className="text-lg font-semibold text-secondary mb-4">
                Key Facilities Include:
              </h3>

              {/* ✅ Replaced Logos with List */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Programming Labs – I & II</li>
                <li>Artificial Intelligence & Research Labs – I & II</li>
                <li>Project Lab</li>
                <li>Database Management System Lab</li>
                <li>iOS (Apple) Lab</li>
                <li>Robotics & Automation Lab</li>
                <li>Mechatronics Lab</li>
                <li>CAD & Modelling Lab</li>
                <li>Electronics & Digital Electronics Labs</li>
                <li>Communication & IoT Labs</li>
              </ul>
            </div>

            {/* Right Image Placeholder */}
            <div className=" relative w-full h-[300px] md:h-[580px] rounded-md overflow-hidden order-1 md:order-2 shadow-md shadow-gray-400 bg-white
            ">
              <Image
                src="/researchlab.jpg"
                alt="Research Lab"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
