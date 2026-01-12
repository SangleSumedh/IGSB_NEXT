"use client";
import Image from "next/image";

export default function Governance() {
  const boardOfGovernors = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", representation: "Chairperson IGI" },
    { sr: 2, name: "Mrs. Sarita Shankarrao Wakalkar", role: "Member", representation: "Trust Representative" },
    // { sr: 3, name: "Dr. Pandit Mali", role: "Member", representation: "Trust Representative" },
    { sr: 4, name: "Mr. Shardul Gangal", role: "Member", representation: "Trust Representative" },
    { sr: 5, name: "Prof. Chetan Wakalkar", role: "Member", representation: "IGI Academic Advisor" },
    { sr: 6, name: "Western Regional Officer", role: "Member", representation: "Nominee AICTE" },
    { sr: 7, name: "Dr. D.V Jadhav", role: "Member", representation: "Nominee DTE" },
    { sr: 8, name: "Ms. Rajeshree Ghavte", role: "Member", representation: "Nominee State Govt./UT (Ex-Officio)" },
    { sr: 9, name: "Mr. Shashi Bhat", role: "Member", representation: "Industry Expert" },
    { sr: 10, name: "Awaited", role: "Member", representation: "SPPU Academic Expert" },
    { sr: 11, name: "Dr. Pallavi Sajanapwar", role: "Member", representation: "Nominee Teaching Representative (Professor & Dean - Academics and Research)" },
    { sr: 12, name: "Dr. Aatish Zagade", role: "Member", representation: "Nominee Teaching Representative (Assoc. Professor & Dy. Director)" },
    { sr: 13, name: "Dr. Anuradha Phadnis", role: "Member", representation: "Nominee Teaching Representative (Assoc. Professor & IQAC Head)" },
    { sr: 14, name: "Dr. Priyanka Darekar", role: "Member", representation: "Nominee Teaching Representative - Asst. Prof" },
    { sr: 15, name: "Dr. Virendra Tatake", role: "Director", representation: "Member Secretary" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Gradient Heading Section */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Governance
          </h1>
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white" />
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transparent leadership and strategic guidance for institutional excellence
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="px-6 xl:px-16 py-8 xl:py-12">
        {/* Board of Governors Section */}
        <section className="relative">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Board of Governors
            </h2>
            <p className="text-gray-600 text-md md:text-lg mb-8 md:mb-10">
              Strategic leadership committee guiding our institution's vision and policies
            </p>

            <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
              <table className="min-w-full border-collapse text-center text-gray-800">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="border px-4 py-3 w-20 text-sm md:text-base">Sr.No</th>
                    <th className="border px-4 py-3 text-sm md:text-base">Name of the Member</th>
                    <th className="border px-4 py-3 text-sm md:text-base">Role</th>
                    <th className="border px-4 py-3 text-sm md:text-base">Representation</th>
                  </tr>
                </thead>

                <tbody>
                  {boardOfGovernors.map((row) => (
                    <tr key={row.sr} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border px-4 py-3 text-sm md:text-base">{row.sr}</td>
                      <td className="border px-4 py-3 text-sm md:text-base font-medium">{row.name}</td>
                      <td className="border px-4 py-3 text-sm md:text-base">{row.role}</td>
                      <td className="border px-4 py-3 text-sm md:text-base text-left">{row.representation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}