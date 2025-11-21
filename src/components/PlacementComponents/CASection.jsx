export default function CASsection() {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-5">
            We turn your potential into placement.
          </h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto mb-16 leading-relaxed">
            Indira College of Engineering and Management ensures every student
            steps into the industry with confidence. From specialized training
            to top-tier recruiter connect, our placement ecosystem is built to
            transform academic learning into real-world success
          </p>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IRP */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 text-left rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Industry Readiness Programme (IRP)
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                IRP is curated by Gryphon Academy to be a structured training
                initiative designed to prepare students for the real-world
                demands of the corporate world. It focuses on building technical
                expertise, professional communication, problem-solving
                abilities, workplace discipline, and overall confidence. Through
                hands-on training, mentorship, and industry-aligned modules, IRP
                ensures that every student graduates with the skills, mindset,
                and readiness to excel from day one in their careers.
              </p>
            </div>

            {/* CLDP */}
            <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 text-left rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Career Leadership Development Programme (CLDP)
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                CLDP is conceptualized by Gryphon Academy as a specialized
                framework that trains the future MBA professionals to evolve
                into industry-ready leaders. It focuses on building aptitude,
                business communication, digital presence, and domain-specific
                competencies essential for corporate success. Through systematic
                training, guided mentorship, and specialization-driven modules,
                CLDP ensures every student is prepared to step confidently into
                leadership roles and achieve long-term career growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
