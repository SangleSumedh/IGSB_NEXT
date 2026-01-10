const actions = [
  {
    title: "Guest Sessions",
    desc: "Share your industry insights and journey with current students.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: "Be a Mentor",
    desc: "Guide a student through their final year projects and career choices.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Campus Visit",
    desc: "Drop by for a coffee and interact with faculty and peers.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Connect HR",
    desc: "Help your organization discover talent at IGSB.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    ),
  },
  {
    title: "Sponsor Events",
    desc: "Support business competitions and cultural fests.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172V9.45ad.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v5.808c0 1.153-.33 2.232-.903 3.142zm-9.015 0a7.454 7.454 0 01.982-3.172V9.45a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v5.808c0 1.153.33 2.232.903 3.142z"
        />
      </svg>
    ),
  },
  {
    title: "Build Business",
    desc: "Partner with IGSB Incubation Centre to grow your startup.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
];

export default function ContributionSection() {
  return (
    <section className="w-full py-12  px-6 md:px-16">
      <div className="max-w-full mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#10404A] tracking-tight">
            HOW YOU CAN CONTRIBUTE
          </h2>
          <div className="w-20 h-1 bg-[#fb7035] mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Your journey doesn't end when you graduate. Here are the most
            impactful ways to stay connected and give back to the IGSB
            community.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {actions.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon Container with Hover Effect */}
                <div className="w-16 h-16 rounded-full bg-slate-50 text-[#10404A] flex items-center justify-center group-hover:bg-[#fb7035] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#10404A] transition-colors">
                  {item.title}
                </h3>

                {/* <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
