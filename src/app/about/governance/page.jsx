"use client";
import { useState } from "react";
import Image from "next/image";

export default function GovernanceAndCommittees() {
  const [activeTab, setActiveTab] = useState("governance");

  // Tab configuration
  const tabs = [
    { id: "governance", label: "Governance" },
    { id: "committees", label: "Committees" },
    { id: "cells", label: "Cells" },
    { id: "iic", label: "IIC" },
    { id: "research", label: "Research & Consultancy" },
  ];

  /* ========================================================
      ✅ GOVERNANCE DATA
  ======================================================== */

  const boardOfGovernors = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", representation: "Chairperson IGI" },
    { sr: 2, name: "Mrs. Sarita Shankarrao Wakalkar", role: "Member", representation: "Trust Representative" },
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

  /* ========================================================
      ✅ ALL COMMITTEE DATA ARRAYS
  ======================================================== */

  const collegeDevelopmentCommittee = [
    { sr: 1, name: "Dr. Tarita Shankar", role: "Chairman", rep: "Chairperson IGI" },
    { sr: 2, name: "Mr. Shardul Gangal", role: "Member", rep: "Trust Nominee" },
    { sr: 3, name: "Prof. Chetan Wakalkar", role: "Member", rep: "IGI Academic Advisor" },
    { sr: 4, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Women Teacher Representative (Dean Academics & Research)" },
    { sr: 5, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy. Director" },
    { sr: 6, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head & LF-HR" },
    { sr: 7, name: "Dr. Poonam Wani", role: "Member", rep: "Teaching Representatives, LF-Finance" },
    { sr: 8, name: "Dr. Prashant Dubey", role: "Member", rep: "Teaching Representatives, LF-Marketing" },
    { sr: 9, name: "Mr. Mahesh Bhagat", role: "Member", rep: "Teaching Representatives, CEO" },
    { sr: 10, name: "Mr. Jayant Joshi", role: "Member", rep: "Nominee Teaching & Placement Cell" },
    { sr: 11, name: "Dr. Priyanka Darekar", role: "Member", rep: "Teaching Representatives" },
    { sr: 12, name: "Dr. Supriya Patil", role: "Member", rep: "Local Member – HOD PUMBA SPPU" },
    { sr: 13, name: "Mr. Paresh Gund", role: "Member", rep: "Local Member – Industry Representative (Alumni)" },
    { sr: 14, name: "Mr. Pratik Puppetirwar", role: "Member", rep: "Local Member – Research Representative" },
    { sr: 15, name: "Ms. Smita Shetty", role: "Member", rep: "Local Member – Social Service Representative" },
    { sr: 16, name: "Mr. Yogesh Gheware", role: "Member", rep: "Nominee Non-Teaching Representative" },
    { sr: 17, name: "Mr. Atharva Mulay", role: "Member", rep: "Student Representation" },
    { sr: 18, name: "Dr. Virendra Tatake", role: "Member Secretary", rep: "Director" },
  ];

  const grievanceCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Dr.Pallavi Sajanapwar ", mobile: "9822406437 ", role: "Member", rep: "Teaching Representative – Female" },
    { sr: 3, name: "Ms.Snehal Masurkar ", mobile: "9561317957 ", role: "Member", rep: "Teaching Representative – Female" },
    { sr: 4, name: "Shri. B. D. Udhane Deputy Registrar, Law & Grievances ", mobile: "25601192/ 25690028 ", role: "Member", rep: "Ombudsman by University " },
    { sr: 5, name: "Mr. Yogesh Gheware ", mobile: "02114 661 568 / 9545278111 ", role: "Member", rep: "Non-Teaching Representatives " },
    { sr: 6, name: " Bhumika Deshmukh ", mobile: "7410148796 ", role: "Member", rep: "Student Representative (Female)-Co-curricular Representative " },
    { sr: 7, name: "Abhishek Satav ", mobile: "8805771049", role: "Member", rep: "Student Representative -Academic Representative/ / Sports Representative " },
    { sr: 8, name: "Karan Chandankhed ", mobile: "7057625895 ", role: "Member", rep: "Student Representative -Academic Representative " },
    { sr: 9, name: "Nidhi Sachin Nene ", mobile: "9022523307 ", role: "Member", rep: "Student Representative -Academic Representative " },
    { sr: 10, name: "Mr.Mahesh Bhagat ", mobile: "9822074890 ", role: "Member Secretary ", rep: "Teaching Representative ( SC/ST/OBC)" },
  ];

  const internalComplaintsCommittee = [
    { sr: 1, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Presiding Officer (Female)", rep: "Senior Faculty (Professor/Asso. Professor)" },
    { sr: 2, name: "Ms. Snehal Masurkar", mobile: "9561317957", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Ms. Pushpa Modi", mobile: "7038669091", role: "Member", rep: "Non-Teaching Staff Representative" },
    { sr: 4, name: "Mr. Dinesh Khodke", mobile: "9823245799", role: "Member", rep: "Non-Teaching Staff Representative" },
    { sr: 5, name: "Adv. Mitali Savlekar", mobile: "9890826444", role: "Member", rep: "NGO Representative" },
    { sr: 6, name: "Ms. Riya Sharma", mobile: "7879011138", role: "Member", rep: "Student Representative – Girl" },
    { sr: 7, name: "Ms. Varsha Mohite", mobile: "7350089103", role: "Member", rep: "Student Representative – Girl" },
    { sr: 8, name: "Mr. Deepak Javalgekar", mobile: "9370499040", role: "Member", rep: "Student Representative – Boy" },
    { sr: 9, name: "Ms. Girija Shirurkar", mobile: "9823440772", role: "Member Secretary", rep: "Teaching Representative – Female" },
  ];

  const academicAdvisoryCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head and LF-HR" },
    { sr: 4, name: "Dr. Poonam Wani", role: "Member", desig: "Teaching Representatives, LF-Finance" },
    { sr: 5, name: "Mr. Mahesh Bhagat", role: "Member", desig: "Teaching Representatives, LF-OSCM" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", desig: "Teaching Representatives, LF-Marketing" },
    { sr: 7, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 8, name: "Mr. Dinesh Khodke", role: "Member", desig: "ICT Cell" },
    { sr: 9, name: "-", role: "Member", desig: "Industry Representative" },
    { sr: 10, name: "Mr. Prashant Katrabad", role: "Member", desig: "Alumni Representative" },
    { sr: 11, name: "Mr. Jayant Joshi", role: "Member", desig: "Placement Representative" },
    { sr: 12, name: "Mr. Shashwat Doshetti", role: "Member", desig: "Mentoring Representative" },
    { sr: 13, name: "Prof. Kanchan Patil", role: "Member", desig: "Academic Coordinator" },
    { sr: 14, name: "Dr. Aatish Zagade", role: "Member Secretary", desig: "Dy. Director" },
  ];

  const examinationCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director / Center Head" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research / IS" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director / ISS" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head / AISS" },
    { sr: 5, name: "Ms. Snehal Masurkar", role: "Member", desig: "SIP Co-ordinator / External Viva Voce" },
    { sr: 6, name: "Prof. Kanchan Patil", role: "Member", desig: "Academic Coordinator / Custodian" },
    { sr: 7, name: "Mr. Santosh Dagade", role: "Member", desig: "Non-Teaching Representative – Stationery Incharge" },
    { sr: 8, name: "Mr. Nilesh Yedre", role: "Member", desig: "Non-Teaching Representative – Accountant" },
    { sr: 9, name: "Mr. Sameer Jadhav", role: "Member", desig: "Support Staff" },
    { sr: 10, name: "Mr. Mahesh Bhagat", role: "Member Secretary", desig: "CEO" },
  ];

  const mentoringCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Deputy Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head" },
    { sr: 5, name: "Mr. Shrinivas Pande", role: "Member", rep: "Student Representative – Male" },
    { sr: 6, name: "Ms. Anushka Edake", role: "Member", rep: "Student Representative – Female" },
    { sr: 7, name: "Mr. Shashwat Deoshetti", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const libraryCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director & Teaching Representative" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head & LF-HR" },
    { sr: 5, name: "Dr. Poonam Wani", role: "Member", desig: "LF Finance" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", desig: "LF Marketing" },
    { sr: 7, name: "Prof. Mahesh Bhagat", role: "Member", desig: "LF OSCM" },
    { sr: 8, name: "Mr. Jaganath Kadam", role: "Member", desig: "Non-Teaching Representative" },
    { sr: 9, name: "Saurabhkumar Kadam", role: "Member", desig: "Student Representative II Year" },
    { sr: 10, name: "Vaishnavi Sawkar", role: "Member", desig: "Student Representative II Year" },
    { sr: 11, name: "Mr. Santosh Dagade", role: "Member Secretary", desig: "Librarian and Secretary" },
  ];

  const ictCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Neha Choudhary", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Ms. Pushpa Modi", role: "Member", rep: "Non-Teaching Representative" },
    { sr: 4, name: "Mr. Rohan Shinde", role: "Member", rep: "Asst. IT" },
    { sr: 5, name: "Dakshayani Gaikwad", role: "Member", rep: "Student Representative – II Year" },
    { sr: 6, name: "Atharva Kumbhar", role: "Member", rep: "Student Representative – I Year" },
    { sr: 7, name: "Mr. Dinesh Khodke", role: "Member Secretary", rep: "IT Head" },
  ];

  const adminCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", desig: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", desig: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", desig: "Teaching Representative & Dy. Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", desig: "Teaching Representative – IQAC Head" },
    { sr: 5, name: "Mr. Manish Patel", role: "Member", desig: "HR & Admin Incharge" },
    { sr: 6, name: "Mr. Jaganath Kadam", role: "Member", desig: "Admin: Senior Clerk" },
    { sr: 7, name: "Mr. Balasaheb Shinde", role: "Member", desig: "Admin Officer" },
    { sr: 8, name: "Mr. Nilesh Yedre", role: "Member", desig: "Accountant" },
    { sr: 9, name: "Mr. Dinesh Khodke", role: "Member", desig: "IT Head" },
    { sr: 10, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 11, name: "Mr. Yogesh Gheware", role: "Member Secretary", desig: "Office Superintendent" },
  ];

  const hostelCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Mr. Amol Ankush", role: "Member", rep: "Teaching Representative – Students Welfare Officer" },
    { sr: 3, name: "Dr. Poonam Wani", role: "Member", rep: "Teaching Representative – Anti Ragging Committee" },
    { sr: 4, name: "Ms. Kanchan Patil", role: "Member", rep: "Teaching Representative – Anti Ragging Squad" },
    { sr: 5, name: "Mr. Balasaheb Shinde", role: "Member", rep: "Non-Teaching Representative – Male" },
    { sr: 6, name: "Ms. Pushpa Modi", role: "Member", rep: "Non-Teaching Representative – Female" },
    { sr: 7, name: "Ms. Snehal Masurkar", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  /* ========================================================
      ✅ ALL CELL DATA ARRAYS
  ======================================================== */

  const industryInstitutionalCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy.Director & Teaching Representative" },
    { sr: 3, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Mr. Jayant Joshi", role: "Member", rep: "Placement Coordinator" },
    { sr: 5, name: "Mr. Dinesh Khodke", role: "Member", rep: "Non-Teaching Representative" },
    { sr: 6, name: "Aakash Deshmukh", role: "Member", rep: "Student Representative – Girl" },
    { sr: 7, name: "Aabha Karale", role: "Member", rep: "Student Representative – Boy" },
    { sr: 8, name: "Mr. Hemant Apte", role: "Member", rep: "Industry Representative" },
    { sr: 9, name: "Dr. Priyanka Darekar", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const iprCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Pro. Amol Ankush", role: "Member", rep: "Teaching Representative" },
    { sr: 5, name: "Mr. Santosh Dagade", role: "Member", rep: "Librarian" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const equalOpportunityCell = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Mr. Amol Ankush", mobile: "8767740257", role: "Member", rep: "Student Welfare Council Officer (OBC Category)" },
    { sr: 4, name: "Dr. Anuradha Phadnis", mobile: "9850728206", role: "Member", rep: "Teaching Representative–Female" },
    { sr: 5, name: "Mr. Dinesh Khodke", mobile: "9823245799", role: "Member", rep: "Non–Teaching Representative (OBC Category)" },
    { sr: 6, name: "Dr. Shilpa Tambe", mobile: "9226958888", role: "Member", rep: "Counsellor / Social / Subject Expert" },
    { sr: 7, name: "Ms. Priyanka Dattu Dhumase", mobile: "7085157091", role: "Member", rep: "Student Representative (ST Category)" },
    { sr: 8, name: "Mr. Bhavesh Deepak Nunse", mobile: "7276594726", role: "Member", rep: "Student Representative (SC Category)" },
    { sr: 9, name: "M Sai Sahil", mobile: "9755104082", role: "Member", rep: "Student Representative (Open Category)" },
    { sr: 10, name: "Ms. Yukta Patil", mobile: "8626015231", role: "Member", rep: "Student Representative (OBC Category)" },
    { sr: 11, name: "Chandrashekhar Sanjay Rathod", mobile: "8459516498", role: "Member", rep: "Student Representative (DT/VJ/Minority Category)" },
    { sr: 12, name: "Mr. Vijay Patil", mobile: "9503163139", role: "Member", rep: "Parent Representatives" },
    { sr: 13, name: "M S Jagannath", mobile: "9399478784", role: "Member", rep: "Parent Representatives" },
    { sr: 14, name: "Prof. Kanchan Patil", mobile: "7385717517", role: "Member Secretary", rep: "Teaching Representative (OBC)" },
  ];

  const divyangCell = [
    { sr: 1, name: "Dr. Virendra Tatake", mobile: "02114 661 609 / 9657856103", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Dr. Aatish Zagade", mobile: "9823939483", role: "Member", rep: "Teaching Representative" },
    { sr: 3, name: "Dr. Pallavi Sajanapwar", mobile: "9822406437", role: "Member", rep: "Teaching Representative" },
    { sr: 4, name: "Mr. Yogesh Gheware", mobile: "9545278111", role: "Member", rep: "Non–Teaching Representative" },
    { sr: 5, name: "Mr. Santosh Dagade", mobile: "9763853241", role: "Member", rep: "Expert Advisor 1" },
    { sr: 6, name: "Mr. Shivkumar", mobile: "9730419066", role: "Member", rep: "Expert Advisor 2" },
    { sr: 7, name: "Ms. Shravani Otari", mobile: "9307247732", role: "Member", rep: "Student Representative 1" },
    { sr: 8, name: "Mr. Hrishikesh Nikam", mobile: "7775957990", role: "Member", rep: "Student Representative 2" },
    { sr: 9, name: "Mr. Vijay Otari", mobile: "7385117113", role: "Member", rep: "Parent Representative 1" },
    { sr: 10, name: "Mr. Anil Nikam", mobile: "8655492610", role: "Member", rep: "Parent Representative 2" },
    { sr: 11, name: "Dr. Ashish Vyas", mobile: "9422366894", role: "Member Secretary", rep: "Teaching Representative" },
  ];

  const internshipCell = [
    { sr: 1, name: "Dr. Aatish Zagade", mobile: "9823939483", role: "Dy. Director", rep: "Nodal Officer" },
    { sr: 2, name: "Prof. Jayant Joshi", mobile: "9423226420", role: "Member", rep: "Assistant Coordinator" },
    { sr: 3, name: "Piyush Dilip Pavase", mobile: "7620904434", role: "Member", rep: "Management Student Coordinator" },
    { sr: 4, name: "Mr. Divyanshu Nandeshwar", mobile: "", role: "Member", rep: "Management Student Coordinator" },
    { sr: 5, name: "Ms. Snehal Masurkar", mobile: "9561317957", role: "Member Secretary", rep: "Management Faculty" },
  ];

  const placementCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Chairman", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Member", rep: "Dy. Director" },
    { sr: 4, name: "Dr. Anuradha Phadnis", role: "Member", rep: "IQAC Head & LF HR" },
    { sr: 5, name: "Dr. Poonam Wani", role: "Member", rep: "LF Finance" },
    { sr: 6, name: "Dr. Prashant Dubey", role: "Member", rep: "LF Mktg" },
    { sr: 7, name: "Atharva Mule", role: "Member", rep: "Student Representative–2nd Year" },
    { sr: 8, name: "Yukta Patil", role: "Member", rep: "Student Representative–1st Year" },
    { sr: 9, name: "Prof. Jayant Joshi", role: "Member Secretary", rep: "Teaching Representative – Dy. Director Placements Chanakya Campus" },
  ];

  const brandingCell = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "Director", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Dean: Academics and Research" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", rep: "Teaching Representative – IQAC Head" },
    { sr: 4, name: "Sneha Marodkar", role: "Member", rep: "Student Representative – Team Coordinator" },
    { sr: 5, name: "Sakshi Purohit", role: "Member", rep: "Student Representative – Mktg & Creative Coordinator" },
    { sr: 6, name: "Aditi Agarwal", role: "Member", rep: "Student Representative – Mktg & Creative Coordinator" },
    { sr: 7, name: "Harshwardhan Maske", role: "Member", rep: "Student Representative – Photographer/ Cinematographer" },
    { sr: 8, name: "Aryan Jadhav", role: "Member", rep: "Student Representative – Content Writer" },
    { sr: 9, name: "Rohit Lags", role: "Member", rep: "Student Representative – Content Planning" },
    { sr: 10, name: "Mr. Solomon Gaikwad", role: "Member Secretary", rep: "Branding Officer" },
  ];

  /* ========================================================
      ✅ IIC DATA
  ======================================================== */

  const iicCommittee = [
    { sr: 1, name: "Dr. Virendra Tatake", role: "President", rep: "Director" },
    { sr: 2, name: "Dr. Pallavi Sajanapwar", role: "Member", rep: "Teaching Representative - Consultancy" },
    { sr: 3, name: "Dr. Aatish Zagade", role: "Vice President", rep: "Teaching Representative" },
    { sr: 4, name: "Dr. Aniruddh Thuse", role: "Innovation activity coordinator", rep: "Teaching Representative" },
    { sr: 5, name: "Dr. Anuradha Phadnis", role: "Startup activity coordinator", rep: "Teaching Representative" },
    { sr: 6, name: "Ms. Snehal Masurkar", role: "Internship coordinator", rep: "Teaching Representative" },
    { sr: 7, name: "Dr. Prashant Dubey", role: "IPR activity coordinator", rep: "Teaching Representative" },
    { sr: 8, name: "Mr. Solomon Gaikwad", role: "Social media coordinator", rep: "Non-Teaching Representative" },
    { sr: 9, name: "Mr. Jaganath Kadam", role: "ARIIA coordinator", rep: "Non-Teaching Representative" },
    { sr: 10, name: "Mr. Yogesh Gheware", role: "NIRF coordinator", rep: "Non-Teaching Representative" },
    { sr: 11, name: "Mr. Santosh Dagade", role: "Member", rep: "Librarian" },
    { sr: 12, name: "Ms. Saurav Nilpatrewar", role: "Member", rep: "Student Representation" },
    { sr: 13, name: "Ms. Akshata Mali", role: "Member", rep: "Student Representation" },
    { sr: 14, name: "Mr. Amol Ankush", role: "Convenor", rep: "Teaching Representative" },
  ];

  /* ========================================================
      ✅ RESEARCH & CONSULTANCY DATA
  ======================================================== */

  const researchConsultancyCommittee = [
    { sr: 1, name: "Dr. Pallavi Sajanapwar", role: "Chairman", desig: "Dean: Academics and Research" },
    { sr: 2, name: "Dr. Aatish Zagade", role: "Member", desig: "Dy. Director" },
    { sr: 3, name: "Dr. Anuradha Phadnis", role: "Member", desig: "IQAC Head" },
    { sr: 4, name: "Dr. Priyanka Darekar", role: "Member", desig: "Teaching Representative – Consultancy" },
    { sr: 5, name: "Mr. Santosh Dagade", role: "Member", desig: "Librarian" },
    { sr: 6, name: "Dr. Aniruddh Thuse", role: "Member Secretary", desig: "Teaching Representative – Research" },
  ];

  /* ========================================================
      ✅ REUSABLE TABLE RENDER FUNCTION
  ======================================================== */
  const renderTable = (headers, rows) => (
    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
      <table className="min-w-full border-collapse text-center text-gray-800">
        <thead>
          <tr className="bg-secondary text-white">
            {headers.map((h, i) => (
              <th key={i} className="border px-4 py-3 text-sm md:text-base">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50 hover:bg-gray-50 transition-colors">
              {Object.values(r).map((val, j) => (
                <td key={j} className="border px-4 py-3 text-sm md:text-base">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /* ========================================================
      ✅ RENDER CONTENT BASED ON ACTIVE TAB
  ======================================================== */
  const renderContent = () => {
    switch (activeTab) {
      case "governance":
        return (
          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Board of Governors
            </h2>
            <p className="text-gray-600 text-md md:text-lg mb-8">
              Strategic leadership committee guiding our institution's vision and policies
            </p>
            {renderTable(
              ["Sr.No", "Name of the Member", "Role", "Representation"],
              boardOfGovernors
            )}
          </section>
        );

      case "committees":
        return (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">College Development Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], collegeDevelopmentCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Grievance Redressal Committee - Staff</h2>
              {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], grievanceCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Internal Complaints Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], internalComplaintsCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Academic Advisory Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], academicAdvisoryCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Examination Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], examinationCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Mentoring Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], mentoringCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Library Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], libraryCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">ICT Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], ictCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Administration, Accounts & Maintenance Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Designation"], adminCommittee)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Hostel Committee</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], hostelCommittee)}
            </section>
          </div>
        );

      case "cells":
        return (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Industry Institutional Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], industryInstitutionalCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Intellectual Property Right Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], iprCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Caste Based Discrimination Committee (Equal Opportunity Cell)</h2>
              {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], equalOpportunityCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Divyang Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], divyangCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Internship Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Mobile Number", "Role", "Representation"], internshipCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Placement Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], placementCell)}
            </section>

            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Branding and Creative Cell</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], brandingCell)}
            </section>
          </div>
        );

      case "iic":
        return (
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">Institutions Innovation Council (IIC)</h2>
              {renderTable(["Sr.No", "Name of the Member", "Role", "Representation"], iicCommittee)}
            </section>

            <section>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                The online (IPR) lecture series for MBA students offers a practical and comprehensive
                understanding of intellectual property rights, covering patents, trademarks, copyrights,
                and trade secrets. Through engaging presentations and real-world examples, students gain
                valuable skills for protecting and leveraging intellectual assets in today's business
                landscape. The online format enhances accessibility and flexibility, ensuring students
                can engage with the material at their own pace. Overall, the series equips MBA students
                with essential knowledge and skills for navigating the complexities of modern business
                environments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-md">
                  <Image src="/IIC1.png" alt="IPR Session 1" fill className="object-cover" />
                </div>

                <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-md">
                  <Image src="/IIC2.png" alt="IPR Session 2" fill className="object-cover" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-6">
                Certificate of Participation
              </h3>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/IIC.png"
                  alt="IIC Certificate"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </section>
          </div>
        );

      case "research":
        return (
          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
              Research and Consultancy Committee
            </h2>
            {renderTable(
              ["Sr.No", "Name of the Member", "Role", "Designation"],
              researchConsultancyCommittee
            )}
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Gradient Heading Section */}
      <div className="w-full py-16 bg-gradient-to-r from-[#FF8B61] via-[#10404A] to-[#10404A] shadow-lg">
        <div className="container mx-auto px-6 xl:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Governance & Committees
          </h1>
          <div className="mx-auto mt-5 mb-6 w-16 h-[3px] rounded-full bg-white" />
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive framework of leadership, committees, and cells guiding our institution
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 xl:px-16 py-6 bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-6 xl:px-16 py-8 xl:py-12">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}