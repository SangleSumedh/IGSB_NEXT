"use client";

import React from "react";
import Image from "next/image";

export default function StudentCommittees() {
  return (
    <div className="w-full bg-white text-gray-800 scroll-smooth">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh]">
        <Image
          src="/IGSB/student-committees/Banner.jpg"
          alt="Student Certification Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* ================================
            1. Grievance Redressal Committee
        ================================= */}
        <section
          id="student-grievance-redressal-committee"
          className="space-y-6 scroll-mt-[15vh]"
        >
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Grievance Redressal Committee - Student
            </h2>
            {/* <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div> */}
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Pallavi Sajanapwar",
                "9822406437",
                "Member",
                "Teaching Representative - Senior Faculty",
              ],
              [
                "3",
                "Ms.Snehal Masurkar",
                "9561317957",
                "Member",
                "Teaching Representative - Female",
              ],
              [
                "4",
                "Shri. B. D. Udhane Deputy Registrar, Law & Grievances",
                "25601192/ 25690028",
                "Member",
                "Ombudsman by University",
              ],
              [
                "5",
                "Mr. Yogesh Gheware",
                "02114 661 568 / 9545278111",
                "Member",
                "Non-Teaching Representatives",
              ],
              [
                "6",
                "Bhumika Deshmukh",
                "7410148796 ",
                "Member",
                "Student Representative (Female)-Co-curricular Representative ",
              ],
              [
                "7",
                "Abhishek Satav ",
                "8805771049 ",
                "Member",
                "Student Representative -Academic Representative / Sports Representative ",
              ],
              [
                "8",
                "Karan Chandankhed",
                "7057625895",
                "Member",
                "Student Representative -Academic Representative ",
              ],
              [
                "9",
                "Nidhi Sachin Nene",
                "9022523307",
                "Member",
                "Student Representative -Academic Representative",
              ],
              [
                "10",
                "Mr.Mahesh Bhagat",
                "9822074890",
                "Member Secretary",
                "Teaching Representative (SC/ST/OBC)",
              ],
            ]}
            isEventsCommittee={false}
          />
        </section>

        {/* ================================
            2. Anti Ragging Committee
        ================================= */}
        <section
          id="anti-ragging-committee"
          className="space-y-6 scroll-mt-[15vh]"
        >
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Anti Ragging Committee
            </h2>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Prashant Dubey",
                "9699314970",
                "Member",
                "Teaching Representative",
              ],
              [
                "3",
                "Mr.Yogesh Gheware ",
                "02114 661 568 / 9545278111 ",
                "Member",
                "Non - Teaching Representative",
              ],
              [
                "4",
                "Dattatray Tukaram Oval ",
                "8788562431 ",
                "Member",
                "Boys Hostel Rector",
              ],
              [
                "5",
                "Manisha Aburao Dhiwar ",
                "9588475368 ",
                "Member",
                "Girls Hostel Rector",
              ],
              [
                "6",
                "Mahesh Narendra Kolhe ",
                "9325109224 ",
                "Member",
                "Student Representative - Fresher Batch (Boy) ",
              ],
              [
                "7",
                "Shreya Narasinha Prabhukhanolkar",
                "9764707052 ",
                "Member",
                "Student Representative - Fresher Batch (Girl)",
              ],
              [
                "8",
                "Sahil M",
                "9755104082",
                "Member",
                "Student Representative - Seniors-Boy",
              ],
              [
                "9",
                "Yukta Patil",
                "8626015231",
                "Member",
                "Student Representative - Seniors-Girl",
              ],
              [
                "10",
                "Mr.Narendra Kolhe ",
                "8055859081 ",
                "Member",
                "Parents Representative -  Fresher  Batch ",
              ],
              [
                "11",
                "Mr.Vijay Patil",
                "9503163139",
                "Member",
                "Parents Representative - Senior Batch",
              ],
              [
                "12",
                "Mrs. Sulbhatai Kundan Bhote",
                "8766456009",
                "Member", 
                "Civil Administration Representative",
              ],
              [
                "13",
                "Mr. Samadhan Phadtare",
                "8805544106",
                "Member",
                "Police Administration Representative",
              ],
              [
                "14",
                "Mrs. Reshma Phadtare",
                "7038784875",
                "Member",
                "Local Media (Senior Officer Business Standard Pvt. Ltd.) - AWAJ News Tal. - Maval",
              ],
              [
                "15",
                "Ms.Smita Shetty",
                "9881091409",
                "Member",
                "NGO Representative",
              ],
              [
                "16",
                "Ms.Chhaya Bodkurwar ",
                "9767104510 ",
                "Member Secretary",
                "Teaching Representative - Female",
              ],
            ]}
            isEventsCommittee={false}
          />
        </section>

        {/* ================================
            3. Anti Ragging Squad
        ================================= */}
        <section id="anti-ragging-squad" className="space-y-6 scroll-mt-[15vh]">
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Anti Ragging Squad
            </h2>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Mr.Jagannath Kadam",
                "9730023413",
                "Member",
                "Non-Teaching Staff Representative",
              ],
              [
                "3",
                "Mr.Balasaheb Shinde",
                "9971658919",
                "Member",
                "Non-Teaching Staff Representative",
              ],
              [
                "4",
                "Mr.Ganesh Phanve",
                "9503884287",
                "Member",
                "Boys Hostel Warden",
              ],
              [
                "5",
                "Ms.Sapna Dhalke",
                "9699913109",
                "Member",
                "Girls Hostel Warden",
              ],
              [
                "6",
                "Dr.Neha Chaudhry ",
                "9172657155 ",
                "Member Secretary",
                "Teaching Representative -Female",
              ],
            ]}
            isEventsCommittee={false}
          />
        </section>

        {/* ================================
            4. Students Welfare Council
        ================================= */}
        <section
          id="students-welfare-council"
          className="space-y-6 scroll-mt-[15vh]"
        >
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Students Welfare Council
            </h2>
            
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Dr. Virendra Tatake",
                "02114 661 609 / 9657856103",
                "Chairman",
                "Director",
              ],
              [
                "2",
                "Dr.Pallavi Sajanapwar",
                "9822406437",
                "Member",
                "Teaching Representative - Senior Faculty Member",
              ],
              ["3", "Ms.Snehal Masurkar", "9561317957", "Member ", "Teaching Representative-Cultural Coordinator"],
              ["4", "Ms.Mrunal Salve", "7498 684 661", "President", "Student Representative"],
              ["5", "Abhishek Padale", "7972749782", "Secretary", "Student Representative"],
              [
                "6",
                "Ms. Neha Wankhade",
                "8830263096",
                "Lady Representative",
                "Student Representative",
              ],
              ["7", "Ms. Shrawani Otari", "9307247732", "Community Representative", "Student Representative"],
              ["8", "Mr. Hrishikesh Nikam", "7775957990", "NSS/NCC/Sports Representative", "Student Representative"],
              ["9", "Mr. Mayur Darade", "7666215348", "Cultural Representative", "Student Representative - Marketing"],
              ["10", "Mr. Datta Gore", "8766520505", "Class Representative – Div A", "Student Representative- Placements (HR)"],
              ["11", "Mr. Siddhesh Gujarathi", "7775094250", "Class Representative – Div B ", "Student Representative - Alumni (Finance) "],
              ["12", "Ms.Shrushti Gondekar ", "8830614847 ", "Class Representative – Div C", "Student Representative- Branding  "],
              ["13", "Mr.Amol Ankush", "8767740257", "Member Secretary", "Teaching Representative- Sports Coordinator"],
            ]}
            isEventsCommittee={false}
          />
        </section>

        {/* ================================
            5. Student Counsellor
        ================================= */}
        <section id="student-counsellor" className="space-y-6 scroll-mt-[15vh]">
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Student Counsellor
            </h2>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Mrs..Shilpa Tambe",
                "9226958888",
                "Student Counsellor",
                "Clinical Counsellor",
              ],
              [
                "2",
                "Ms.Siddhi Dhoble",
                "7058145454",
                "Member",
                "Teaching Representative",
              ],
              [
                "3",
                "Dr.Aatish Zagade",
                "9823939483",
                "Incharge",
                "Deputy Director",
              ],
            ]}
            isEventsCommittee={false}
          />
        </section>

        <section id="Events-Committee" className="space-y-6 scroll-mt-[15vh]">
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
              Events-Committee
            </h2>
          </div>
          <CommitteeTable
            rows={[
              [
                "1",
                "Mr. Sadahiv Joshi",
                "90210 04897",
                "Team Leader",
                
              ],
              [
                "2",
                "Ms. Shriya Jain",
                "97665 58948",
                "Coordinator- Content",
                
              ],
              [
                "3",
                "Mr. Datta Gore",
                "87665 20505",
                "Coordinator - Logistic",
              ],
              [
                "4",
                "Ms. Khushboo Singh",
                "84858 93320",
                "Coordinator - Creatives",
              ],
              [
                "5",
                "Ms. Samiksha Mukadam",
                "724 935 4960",
                "Coordinator - Music",
              ],
              [
                "6",
                "Mr. Mayur Sawant",
                "93703 45507",
                "Coordinator - IT support",
              ],
              [
                "7",
                "Mr. Shubham Dhengle",
                "90227 11370",
                "Coordinator - Finance ",
              ],
            ]}
            isEventsCommittee={true}
          />
        </section>
      </div>
    </div>
  );
}

/* ============================================
   TABLE COMPONENT (Updated)
============================================= */
function CommitteeTable({ rows, isEventsCommittee = false }) {
  // Define headers based on whether it's the Events Committee
  const headers = isEventsCommittee 
    ? ["Sr.No", "Name of the Member", "Mobile Number", "Role"]
    : ["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"];

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 shadow-lg transition-all hover:shadow-xl">
      <table className="min-w-full text-left text-[0.95rem] border-collapse">
        <thead className="bg-secondary text-white">
          <tr>
            {headers.map((head, idx) => (
              <th
                key={idx}
                className="px-6 py-4 font-semibold text-sm uppercase tracking-wider border border-gray-200"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="transition-colors hover:bg-gray-50 even:bg-gray-50/50"
            >
              {row.map((col, i) => (
                <td
                  key={i}
                  className="px-6 py-4 text-gray-700 border border-gray-200"
                >
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}