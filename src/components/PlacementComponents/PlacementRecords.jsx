"use client";
import React, { useState } from "react";
import Image from "next/image";

const PlacementRecords = () => {
  /* ======================================================
      ✅ YEAR-WISE PLACEMENT DATA (FULLY UPDATED)
  ====================================================== */

  const placementData = {
    

    /* ======================================================
        ✅ 2022-24
    ====================================================== */
    "2022-24": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2022-24.png", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2022-24.png", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2022-24.png", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2022-24.png", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Agre Vaishnavi Maheshappa"  , specialization: "Finance", organization: "Searce" },
        { sr: 2, name: "Ahire Tejal Madhukar", specialization: "Finance", organization: "FIS Global" },
        { sr: 3, name: "Bedmutha Aagam Shantilal", specialization: "Finance", organization: "FIS Global" },
        { sr: 4, name: "Bhadane Nikhil Murlidhar", specialization: "Marketing", organization: "UP Market Research" },
        { sr: 5, name: "Chore Shamal Vijayrao", specialization: "Marketing", organization: "Global Market Insights" },
        { sr: 6, name: "Dalvi Nikita Dinesh", specialization: "Finance", organization: "TATA Technologies" },
        { sr: 7, name: "Darade Rahul Bhaskar", specialization: "Marketing", organization: "OM Logistics" },
        { sr: 8, name: "Bhushan Balaram Dhanorkar", specialization: "Marketing", organization: "Asian Paints" },
        { sr: 9, name: "Prathamesh Kumbhar", specialization: "Marketing", organization: "Jyothy Labs Limited" },
        { sr: 10, name: "Sanskruti Prakash Gajapure", specialization: "Finance", organization: "Searce" },
        { sr: 11, name: "Gangurde Arvind Milind", specialization: "Marketing", organization: "Homefirst Finance" },
        { sr: 12, name: "Sanika Sandeep Gole", specialization: "Marketing", organization: "Diversey" },
        { sr: 13, name: "Sonali Keshri", specialization: "Marketing", organization: "Saint Gobain" },
        { sr: 14, name: "Khan Naikwadi Sehrish Feroz", specialization: "Marketing", organization: "Madison World" },
        { sr: 15, name: "Kulmethe Disha Bandu", specialization: "Marketing", organization: "BAGIC" },
        { sr: 16, name: "Mittal Kiran Dinesh", specialization: "Finance", organization: "Ujjivan Small Finance Bank" },
        { sr: 17, name: "Panchal Mahesh Balajirao", specialization: "Marketing", organization: "Grasim Industries Limited (Birla Paints)" },
        { sr: 18, name: "Aniket Sunil Patil", specialization: "Marketing", organization: "Reliance BP Mobility Limited" },
        { sr: 19, name: "Patil Asmita Subhash", specialization: "HR", organization: "Neeyamo" },
        { sr: 20, name: "Patil Pankaj Rajendra", specialization: "Marketing", organization: "Grasim Industries Limited (Birla Paints)" },
        { sr: 21, name: "Patil Prajwal Pramod", specialization: "Marketing", organization: "Neilsoft" },
        { sr: 22, name: "Pittalwar Nidhi Tulshidas", specialization: "Marketing", organization: "Mondelez International" },
        { sr: 23, name: "Preeti", specialization: "Finance", organization: "e-Clerx" },
        { sr: 24, name: "Ramteke Mrunmayee Chandu", specialization: "Marketing", organization: "Genzeon" },
        { sr: 25, name: "Rokade Nikhil Dinesh", specialization: "OSCM", organization: "Mahindra CIE" },
        { sr: 26, name: "Nikhil Trimbak Sable", specialization: "Marketing", organization: "Federal" },
        { sr: 27, name: "Ameya Vinay Shete", specialization: "Marketing", organization: "Deloitte" },
        { sr: 28, name: "Shinde Nikhil Chandrakant", specialization: "Marketing", organization: "Neilsoft" },
        { sr: 29, name: "Rajveer Singh Thakur", specialization: "Marketing", organization: "OM Logistics" },
        { sr: 30, name: "Rishabh Tiwari", specialization: "Marketing", organization: "Kotak Mahindra Bank" },
        { sr: 31, name: "Vidhate Shubham Sunil", specialization: "Marketing", organization: "Asian Paints" },
        { sr: 32, name: "Vishnu Suruchi Prakash", specialization: "Finance", organization: "BNY Mellon" },
        { sr: 33, name: "Yashodhar Vishwas Phatak", specialization: "Finance", organization: "Reval Analytical Services Pvt. Ltd" },
        { sr: 34, name: "Mohasin Salim Sayyad", specialization: "Marketing", organization: "CIE India" },
        { sr: 35, name: "Chhaya Shrikrushna Badkhal", specialization: "Marketing", organization: "BAGIC" },
        { sr: 36, name: "Priyanka Anand Koniti", specialization: "Marketing", organization: "Homefirst Finance" },
        { sr: 37, name: "Joshi Sachin Anil", specialization: "Marketing", organization: "Nestle Ltd" },
        { sr: 38, name: "Srushti Satish Wani", specialization: "Marketing", organization: "Global Market Insights" },
        { sr: 39, name: "Mini Kumari Singh", specialization: "HR", organization: "OM Logistics" },
        { sr: 40, name: "Yash Uttam Pisat", specialization: "Marketing", organization: "OM Logistics" },
        { sr: 41, name: "Anjali Ghaywate", specialization: "Marketing", organization: "Kotak Mahindra Bank" },
        { sr: 42, name: "Yuvraj Bhagwan Dedwal", specialization: "Finance", organization: "HDFC Ergo" },
        { sr: 43, name: "Varadchandra P Bagal.", specialization: "OSCM", organization: "Plank And Weave Pvt. Ltd." },
        { sr: 44, name: "Dipak Mahajan", specialization: "Marketing", organization: "ITC" },
        { sr: 45, name: "Santosh Mahadev Dhakane", specialization: "Marketing", organization: "Corizo Edutech" },
        { sr: 46, name: "Prachi Kisan Navghare", specialization: "Marketing", organization: "Appstrail Technology Pvt Ltd." },
        { sr: 47, name: "Amey Jayant Kulkarni", specialization: "Marketing", organization: "American Express" },
        { sr: 48, name: "Shivam Chakane", specialization: "Marketing", organization: "GlamLooks Studio Pvt. Ltd" },
        { sr: 49, name: "Shriram Satish Mahashikare", specialization: "Marketing", organization: "ROCKSPORT" },
        { sr: 50, name: "Sarvesh Sandeep Kudke", specialization: "Marketing", organization: "ROCKSPORT" },
        { sr: 51, name: "Neha Pitale", specialization: "Marketing", organization: "Bajaj Consumer Care Ltd" },
        { sr: 52, name: "Abhinay Yadav Nakhale", specialization: "Marketing", organization: "Neilsoft" },
        { sr: 53, name: "Yograj Kailas Desale", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 54, name: "Janhvi Narendra Hinge", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 55, name: "Radhika Rajesh Jadhav", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 56, name: "Vaishnavi Sunil Kohale", specialization: "Finance", organization: "4Fin Finance Private Limited" },
        { sr: 57, name: "Siddhesh Anil Vispute", specialization: "Finance", organization: "4Fin Finance Private Limited" },
        { sr: 58, name: "Yukta Deepak Khaire", specialization: "Marketing", organization: "Godrej Tyson" },
        { sr: 59, name: "Dona Chatterjee", specialization: "Marketing", organization: "L&T Housing Financial Ltd" },
      ],
    },

    /* ======================================================
        ✅ 2021-23
    ====================================================== */
    "2021-23": {
      statsImages: [
        { img: "/IGSB/Placement/Chart4-2021-23.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2021-23.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2021-23.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2021-23.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Rathod Swapnil Vilas", specialization: "Finance", organization: "Federal Bank" },
        { sr: 2, name: "Saumya Ramesh Singh Jadoun", specialization: "Marketing", organization: "TATA Technologies" },
        { sr: 3, name: "Adarsh Emmanuel", specialization: "Finance", organization: "Deloitte" },
        { sr: 4, name: "Shewale Rahul Shantaram", specialization: "Marketing", organization: "Asian Paints" },
        { sr: 5, name: "Karangale Pratik Kamlakar", specialization: "HR", organization: "Fujitsu Consulting India Pvt. Ltd." },
        { sr: 6, name: "Vedant Ajay Gosavi", specialization: "Finance", organization: "SBI Mutual Funds" },
        { sr: 7, name: "Mahajan Nilesh Gorakhnath", specialization: "Finance", organization: "Reval Analytical Services Pvt Ltd." },
        { sr: 8, name: "Kangare Jayesh Balasaheb", specialization: "Marketing", organization: "The Insight Partners" },
        { sr: 9, name: "Sarode Ajinkya Dattatraya", specialization: "Finance", organization: "ANZ Bank" },
        { sr: 10, name: "Prashant Bhausaheb Karad", specialization: "Marketing", organization: "Pinnacle Industries" },
        { sr: 11, name: "Hanchate Shrinivas", specialization: "Finance", organization: "ANZ Bank" },
        { sr: 12, name: "Paygude Geeta Dattatray", specialization: "Finance", organization: "ANZ Bank" },
        { sr: 13, name: "Patil Prachi Pramod", specialization: "Marketing", organization: "Nivea" },
        { sr: 14, name: "Gaurav Santosh Sangewar", specialization: "Marketing", organization: "Grand View Research" },
        { sr: 15, name: "Bugde Kaushiki Mukund", specialization: "Finance", organization: "Deloitte" },
        { sr: 16, name: "Jadhav Apurva Atul", specialization: "Marketing", organization: "Neeyamo" },
        { sr: 17, name: "Girnare Pallavi Shivaji", specialization: "Finance", organization: "TATA Technologies" },
        { sr: 18, name: "Shashank Ashok Patil", specialization: "Marketing", organization: "Reliance Retail" },
        { sr: 19, name: "Narayane Amit Pradeep", specialization: "OSCM", organization: "4Fin" },
        { sr: 20, name: "Tushar Sanjay Ravankar", specialization: "Marketing", organization: "AAIS Global" },
        { sr: 21, name: "Abhyankar Aryaa Ashutosh", specialization: "Marketing", organization: "Genie Infotech Private Limited" },
        { sr: 22, name: "Sathe Saurabh Houshiram", specialization: "Finance", organization: "HDFC Life Insurance" },
        { sr: 23, name: "Sabasagi Vinayak", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 24, name: "Pushkaraj Amol Wadikar", specialization: "Marketing", organization: "Kolte Patil Developers Ltd." },
        { sr: 25, name: "Sawant Maheshchandra", specialization: "Marketing", organization: "Bandhan Bank" },
        { sr: 26, name: "Chore Rushikesh Hemchandra", specialization: "Finance", organization: "ICICI Prudential" },
        { sr: 27, name: "Aniket Suresh Yeole", specialization: "Marketing", organization: "Aditya Birla Group - Grasim Paints" },
        { sr: 28, name: "Shinde Paresh Rajesh", specialization: "Finance", organization: "Deloitte" },
        { sr: 29, name: "Harshwardhan Sonawane", specialization: "Marketing", organization: "Kolte Patil Developers Ltd." },
        { sr: 30, name: "Kadam Durgesh Prakash", specialization: "Marketing", organization: "ICICI Prudential" },
        { sr: 31, name: "Shetye Teertha Shekhar", specialization: "Finance", organization: "AAIS Global" },
        { sr: 32, name: "Thigale Sayali Dattatraya", specialization: "HR", organization: "Four Front Private Limited" },
        { sr: 33, name: "Rushikesh Tanaji Kadam", specialization: "Marketing", organization: "Kolte Patil Developers Ltd." },
        { sr: 34, name: "Joshi Shravani Shrinivas", specialization: "HR", organization: "Sorigin Group" },
        { sr: 35, name: "Gauri Ganesh Dabhane", specialization: "Finance", organization: "ANZ Bank" },
        { sr: 36, name: "Nitin Malla", specialization: "Marketing", organization: "Wipro Enterprises Pvt. Ltd." },
      ],
    },

    /* ======================================================
        ✅ 2020-22
    ====================================================== */
    "2020-22": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2020-22.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2020-22.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2020-22.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2020-22.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Vijaykumar Hanumant Patil", specialization: "Finance", organization: "AXA Insurance" },
        { sr: 2, name: "Pratima Sameer Raykar", specialization: "Marketing", organization: "Transperancy Market Research" },
        { sr: 3, name: "FATEMA SHABBIR RAJA", specialization: "Marketing", organization: "L&T Infotech" },
        { sr: 4, name: "Aarti Deepak Raut", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 5, name: "Vishal Raina", specialization: "Marketing", organization: "Sky High" },
        { sr: 6, name: "Priyal Mahesh Verma", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 7, name: "Gauri Premnarayan Vaidya", specialization: "Marketing", organization: "Schaeffler India Limited" },
        { sr: 8, name: "Ashish Kumar", specialization: "Marketing", organization: "Kolte Patil Developers Ltd" },
        { sr: 9, name: "Nikita Rashtrapal Gedam", specialization: "Marketing", organization: "Neilsen IQ" },
        { sr: 10, name: "Lalit Nitin Chopade", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 11, name: "Chetan Balasaheb Sakate", specialization: "Finance", organization: "4A Financial Technologies Pvt. Ltd." },
        { sr: 12, name: "Shreyash Ishwar Barsagade", specialization: "Marketing", organization: "Easebuzz" },
        { sr: 13, name: "Ankit Santosh Bhimte", specialization: "Finance", organization: "HashedIn by Deloitte" },
        { sr: 14, name: "Pratik Bhanudas Balkawade", specialization: "Marketing", organization: "Neilsen IQ" },
        { sr: 15, name: "Sakshi Tickoo", specialization: "Marketing", organization: "Deloitte" },
        { sr: 16, name: "Rutuja Dilip Shinde", specialization: "Marketing", organization: "Grand View Reseearch" },
        { sr: 17, name: "Vivek Diliprao Mate", specialization: "Marketing", organization: "Deloitte" },
        { sr: 18, name: "Harishsingh Kharaksingh Negi", specialization: "Marketing", organization: "Makebot Robotics Solutions Pvt. Ltd." },
        { sr: 19, name: "Nandkishor Arun Kale", specialization: "Finance", organization: "HDFC Life" },
        { sr: 20, name: "Nilima Vaman Gharate", specialization: "Marketing", organization: "HashedIn by Deloitte" },
        { sr: 21, name: "Nikhil Rameshchandra Chavan", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 22, name: "Moneeka Rajeshkumar Lodha", specialization: "Marketing", organization: "PhonePe" },
        { sr: 23, name: "Vaishnavi Dipak Bhakte", specialization: "Marketing", organization: "IDFC First" },
        { sr: 24, name: "AKHADE NILESH RAMKISAN", specialization: "Marketing", organization: "AdLift" },
        { sr: 25, name: "Nikhil Prakash Choudhary", specialization: "Marketing", organization: "H&R Johnson Ltd" },
        { sr: 26, name: "Prajakta Mahesh Shahane", specialization: "Marketing", organization: "XANADU" },
        { sr: 27, name: "Aditya Shailendra Chavan", specialization: "Finance", organization: "Kotak Mahindra Bank Ltd" },
        { sr: 28, name: "Mayuri Sanjiv Kanfade", specialization: "Finance", organization: "Interative Brokers (IBKR)" },
        { sr: 29, name: "Rishikesh Rajesh Wagh", specialization: "Finance", organization: "FIS Global" },
        { sr: 30, name: "Prasad Shantaram Moharir", specialization: "Finance", organization: "Interative Brokers (IBKR)" },
        { sr: 31, name: "Sakshi Rajesh Shetye", specialization: "Finance", organization: "Interative Brokers (IBKR)" },
        { sr: 32, name: "Sanket Balasaheb Mane", specialization: "OSCM", organization: "Mirana Innovations Pvt Ltd" },
        { sr: 33, name: "Saurabh Kailas Khonde", specialization: "OSCM", organization: "Bharat Forge" },
        { sr: 34, name: "Aanoushhka Aaditya", specialization: "Finance", organization: "HashedIn by Deloitte" },
        { sr: 35, name: "Aniket Bharat Phulari", specialization: "OSCM", organization: "Deloitte" },
        { sr: 36, name: "Jayati Mahendra Bhansali", specialization: "Marketing", organization: "Sky High" },
        { sr: 37, name: "Parag Devidas Sonar", specialization: "Marketing", organization: "Sky High" },
        { sr: 38, name: "Varun Gajanan Kumbhar", specialization: "Marketing", organization: "Sky High" },
        { sr: 39, name: "Akshay Chandrakant Jaware", specialization: "OSCM", organization: "e-Emphasys" },
        { sr: 40, name: "Shubham Chintamani Chaturvedi", specialization: "Marketing", organization: "Reliance JIO-BP" },
        { sr: 41, name: "Suryavanshi Aniket Arjun", specialization: "Marketing", organization: "L&T Infotech" },
        { sr: 42, name: "Vishal Satish Dude", specialization: "Marketing", organization: "Asian Paints Ltd." },
        { sr: 43, name: "Manasi Arvind Katkar", specialization: "Finance", organization: "PWC" },
        { sr: 44, name: "Shubham Sanjay Sonawane", specialization: "Marketing", organization: "Schaeffler India Limited" },
        { sr: 45, name: "Saurabh Ravindra Patil", specialization: "Marketing", organization: "Bajaj Lifestyle Finance" },
        { sr: 46, name: "Tejas sunil Yadav", specialization: "Finance", organization: "Infosys" },
        { sr: 47, name: "SWARAJ MAHESH PAWAR", specialization: "Marketing", organization: "LG Electronics India Pvt Ltd" },
        { sr: 48, name: "Akanksha Vitthal Kolhe", specialization: "Finance", organization: "Deloitte" },
        { sr: 49, name: "SHRIRAM VITTHAL GAVKARE", specialization: "Marketing", organization: "Mahindra Home Finance Ltd." },
        { sr: 50, name: "SHITAL SITARAM BURUD", specialization: "Finance", organization: "HDFC Life" },
        { sr: 51, name: "Pooja Atul Mehta", specialization: "Finance", organization: "L&T Infotech" },
      ],
    },

    /* ======================================================
        ✅ 2019-21
    ====================================================== */
    "2019-21": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2019-21.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2019-21.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2019-21.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2019-21.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Akant Mohit", specialization: "Finance", organization: "Marico" },
        { sr: 2, name: "Aramwar Shravani", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 3, name: "Atar Sohel Raju", specialization: "Marketing", organization: "TCS" },
        { sr: 4, name: "Bargire Vishal Balaji", specialization: "Marketing", organization: "Aptara Corp" },
        { sr: 5, name: "Bhende Rutuja", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 6, name: "Bokey Sumiran", specialization: "Marketing", organization: "Federal Bank" },
        { sr: 7, name: "Chaitna Bhat", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 8, name: "Chaudhari Sagar", specialization: "Marketing", organization: "TATA Technologies" },
        { sr: 9, name: "Chaudhari Yash", specialization: "Finance", organization: "Globelfex" },
        { sr: 10, name: "Davay Adarsh", specialization: "Marketing", organization: "Amazon" },
        { sr: 11, name: "Deshmukh Aditya", specialization: "Marketing", organization: "Cybage" },
        { sr: 12, name: "Gaud Radhika", specialization: "Finance", organization: "Huron Consulting Group" },
        { sr: 13, name: "Gupta Gaurav", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 14, name: "Jadhav Shweta", specialization: "Finance", organization: "e-Emphasys" },
        { sr: 15, name: "Jain Bhavya", specialization: "Finance", organization: "Pwc" },
        { sr: 16, name: "Jha Tarun Kumar", specialization: "Marketing", organization: "ESAF Small Finance Bank" },
        { sr: 17, name: "Joshi Yash", specialization: "Marketing", organization: "Bajaj Finance" },
        { sr: 18, name: "Kajale Anant", specialization: "Marketing", organization: "Berger Paints" },
        { sr: 19, name: "Katale Ajinkye", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 20, name: "Kawaljit Kaur", specialization: "Marketing", organization: "TATA Technologies" },
        { sr: 21, name: "Lande Ashutosh Ashok", specialization: "Marketing", organization: "Aptara Corp" },
        { sr: 22, name: "Moharir Pooja Dilip", specialization: "Finance", organization: "FIS Global" },
        { sr: 23, name: "Mohod Arju", specialization: "Marketing", organization: "Data Bridge Market Research" },
        { sr: 24, name: "More Akash Kumar", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 25, name: "Nimje Akshay Balkrushna", specialization: "Marketing", organization: "HDFC Life" },
        { sr: 26, name: "Oswal Rishabh", specialization: "Marketing", organization: "XL Dynamics" },
        { sr: 27, name: "Patil Parikshit", specialization: "Marketing", organization: "Data Bridge Market Research" },
        { sr: 28, name: "Pendam Bhagyashree", specialization: "Marketing", organization: "New Vision Software" },
        { sr: 29, name: "Rahul Bhat", specialization: "Marketing", organization: "J&K Government" },
        { sr: 30, name: "Rane Ajinkya Arun", specialization: "Marketing", organization: "Indigo Paints" },
        { sr: 31, name: "Rathod Karan Dilipsingh", specialization: "Marketing", organization: "Deloitte" },
        { sr: 32, name: "Reshma Prasad", specialization: "Marketing", organization: "PlanetSpark" },
        { sr: 33, name: "Sanap Shubham", specialization: "Finance", organization: "Citibank" },
        { sr: 34, name: "Shimpi Aditya Anil", specialization: "Marketing", organization: "Oriental Rubber Pvt. Ltd." },
        { sr: 35, name: "Sonawane Sayali", specialization: "Marketing", organization: "SBI General Insurance" },
        { sr: 36, name: "Thorve Shubham", specialization: "Marketing", organization: "Hettich India Pvt.Ltd." },
        { sr: 37, name: "Wagh Madhusha", specialization: "Finance", organization: "Pwc" },
        { sr: 38, name: "Waghmare Parimal", specialization: "Finance", organization: "Globelfex" },
        { sr: 39, name: "Wankhede Sanket", specialization: "Marketing", organization: "E-infochips" },
        { sr: 40, name: "Yeole Nikita", specialization: "Finance", organization: "Pwc" },
      ],
    },

    /* ======================================================
        ✅ 2018-20
    ====================================================== */
    "2018-20": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2018-20.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2018-20.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2018-20.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2018-20.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Davita Moses", specialization: "Finance", organization: "FIS Global" },
        { sr: 2, name: "Ashutosh Sharma", specialization: "Marketing", organization: "Deloitte" },
        { sr: 3, name: "Suyog Joshi", specialization: "Marketing", organization: "HDFC Ltd" },
        { sr: 4, name: "Shreya Gurav", specialization: "Marketing", organization: "Deloitte" },
        { sr: 5, name: "Sagar Thakure", specialization: "Marketing", organization: "Manyatech India" },
        { sr: 6, name: "Shubham Shinde", specialization: "Marketing", organization: "Mithi Software" },
        { sr: 7, name: "Neelesh Mishra", specialization: "Marketing", organization: "Nitor Infotech" },
        { sr: 8, name: "Shubham Pal", specialization: "Marketing", organization: "Nitor Infotech" },
        { sr: 9, name: "Omkar Dhawale", specialization: "Marketing", organization: "Aditya Birla Fashion Retail Limited" },
        { sr: 10, name: "Krutika Patil", specialization: "Marketing", organization: "HDFC Ltd" },
        { sr: 11, name: "Arti Amlekar", specialization: "Finance", organization: "FIS Global" },
        { sr: 12, name: "Disha Jain", specialization: "Operations", organization: "ICERTIS" },
        { sr: 13, name: "Poonam Patil", specialization: "Marketing", organization: "Paranjpe Schemes" },
        { sr: 14, name: "Nikhil Dhar", specialization: "Marketing", organization: "Kumar Properties" },
        { sr: 15, name: "Pranit Sondawle", specialization: "Marketing", organization: "ICICI Prudential Life Insurance" },
        { sr: 16, name: "Kaustubh Wasule", specialization: "Marketing", organization: "Jana Small Finance Bank Ltd." },
        { sr: 17, name: "Gaurav Wagh", specialization: "Marketing", organization: "Berger Paints" },
        { sr: 18, name: "Aniket Lonkar", specialization: "Marketing", organization: "Berger Paints" },
        { sr: 19, name: "Yogesh Ingale", specialization: "Marketing", organization: "BAGIC" },
        { sr: 20, name: "Arti Tambe", specialization: "Marketing", organization: "BAGIC" },
        { sr: 21, name: "Pranav Munje", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 22, name: "Jaypal Bhagat", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 23, name: "Sanket Thakare", specialization: "Finance", organization: "TATA Consultancy Services" },
        { sr: 24, name: "Shraddha Mane", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 25, name: "Shivani Ekbote", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 26, name: "Manashree Waghmare", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 27, name: "Ashutosh Kulkarni", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 28, name: "Amruta Bhoyar", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 29, name: "Abhijeet Gaikwad", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 30, name: "Atul Raut", specialization: "Marketing", organization: "Tata Consulancy Services" },
        { sr: 31, name: "Pranav Kumbhar", specialization: "Marketing", organization: "Tata Consulancy Services" },
        { sr: 32, name: "Anagha Pundge", specialization: "Finance", organization: "Tata Consulancy Services" },
        { sr: 33, name: "Mubin Inamdar", specialization: "Finance", organization: "Tata Consulancy Services" },
        { sr: 34, name: "Swetangi Behera", specialization: "Finance", organization: "HDFC AMC" },
        { sr: 35, name: "Sushant Gaidhani", specialization: "Marketing", organization: "TATA Motors Finance" },
        { sr: 36, name: "Pratik Mulik", specialization: "Marketing", organization: "TATA Motors Finance" },
        { sr: 37, name: "Nikhil Dhoot", specialization: "Finance", organization: "HFFC" },
        { sr: 38, name: "Lokendra Kumar", specialization: "Marketing", organization: "Sundaram Finance" },
        { sr: 39, name: "Ruchita Jotrao", specialization: "Marketing", organization: "Teerth Realities" },
        { sr: 40, name: "Nisha Pareek", specialization: "Finance", organization: "Australi New Zealand Bank(ANZ)" },
        { sr: 41, name: "Harsh Hitange", specialization: "Marketing", organization: "ICE Creative Excellence Pvt. Ltd." },
        { sr: 42, name: "Shriramchandra Bhagat", specialization: "Marketing", organization: "Aegon Life Insurance" },
        { sr: 43, name: "Rohini Aher", specialization: "HR", organization: "Network Components Pvt. Ltd" },
        { sr: 44, name: "Suraj Pawar", specialization: "Marketing", organization: "Receivables Exchange of India" },
        { sr: 45, name: "Prashant Patil", specialization: "Marketing", organization: "HDFC Sales" },
        { sr: 46, name: "Snehal Arvikar", specialization: "Finance", organization: "IIFL" },
        { sr: 47, name: "Punit Kapse", specialization: "Marketing", organization: "HFFC" },
        { sr: 48, name: "Tejaswini Pawar", specialization: "Finance", organization: "Axis Bank" },
        { sr: 49, name: "Sayali Dhole Patil", specialization: "Finance", organization: "Axis Bank" },
        { sr: 50, name: "Dapke Chetan", specialization: "Finance", organization: "Bajaj Housing Finance Limited" },
        { sr: 51, name: "Gujarathi Yash", specialization: "Finance", organization: "IDFC Bank" },
        { sr: 52, name: "Kulkarni Rasika", specialization: "Finance", organization: "Capgemini" },
        { sr: 53, name: "Shendge Akash", specialization: "Finance", organization: "Ujjivan Small Finance Bank" },
        { sr: 54, name: "Sharma Ashish", specialization: "Finance", organization: "IDFC Bank" },
        { sr: 55, name: "Kale Trupti", specialization: "Marketing", organization: "Ujjivan Small Finance Bank" },
        { sr: 56, name: "Kolhe Vaibhav", specialization: "Finance", organization: "Life Corporation of India (LIC)*" },
      ],
    },

    /* ======================================================
        ✅ 2017-19
    ====================================================== */
    "2017-19": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2017-19.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2017-19.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2017-19.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2017-19.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Jyotsna Veer", specialization: "Marketing", organization: "Capital First" },
        { sr: 2, name: "Vaishnavi Vartak", specialization: "Marketing", organization: "Deloitte" },
        { sr: 3, name: "Prashik Gadge", specialization: "Marketing", organization: "Deloitte" },
        { sr: 4, name: "Samiksha Patil", specialization: "HR", organization: "Catenon" },
        { sr: 5, name: "Pallavi Pazare", specialization: "Finance", organization: "Reval Analytical Services" },
        { sr: 6, name: "Ankit Kale", specialization: "Marketing", organization: "Amazon" },
        { sr: 7, name: "Devesh Maheshwari", specialization: "Marketing", organization: "Home First Finance Company" },
        { sr: 8, name: "Shrikant Shinde", specialization: "Marketing", organization: "Mahindra Finance" },
        { sr: 9, name: "Pratik Sakhare", specialization: "Marketing", organization: "Mahindra Finance" },
        { sr: 10, name: "Bhagyashri Pachpande", specialization: "Marketing", organization: "Glenmark" },
        { sr: 11, name: "Suryakant Palimkar", specialization: "Marketing", organization: "Glenmark" },
        { sr: 12, name: "Viraj Deogaonkar", specialization: "Marketing", organization: "Country Club" },
        { sr: 13, name: "Aniket Sonone", specialization: "Marketing", organization: "Om Logistics" },
        { sr: 14, name: "Burhanuddin Amreliwala", specialization: "Marketing", organization: "Purnartha" },
        { sr: 15, name: "Akshay Hashilkar", specialization: "Marketing", organization: "Purnartha" },
        { sr: 16, name: "Kiran Devan", specialization: "Finance", organization: "ICICI Prudential" },
        { sr: 17, name: "Akansha Sangle", specialization: "Finance", organization: "ICICI Prudential" },
        { sr: 18, name: "Pranav Pathak", specialization: "Marketing", organization: "ICICI Prudential" },
        { sr: 19, name: "Samiksha Tiwari", specialization: "Finance", organization: "KPMG" },
        { sr: 20, name: "Vaibhav Hirwani", specialization: "Finance", organization: "Federal bank" },
        { sr: 21, name: "Shikha Gabda", specialization: "Finance", organization: "ICICI Bank" },
        { sr: 22, name: "Praful Khalane", specialization: "Marketing", organization: "ICICI Bank" },
        { sr: 23, name: "Dipali Ghadwe", specialization: "Marketing", organization: "ICICI Bank" },
        { sr: 24, name: "Rishu Rani", specialization: "Finance", organization: "ICICI Bank" },
        { sr: 25, name: "Swarna Misra", specialization: "Finance", organization: "ICICI Bank" },
        { sr: 26, name: "Riya Modi", specialization: "Finance", organization: "ICICI Bank" },
        { sr: 27, name: "Samruddhi Bhingare", specialization: "Marketing", organization: "ICICI Bank" },
        { sr: 28, name: "Rootuja Kosare", specialization: "Marketing", organization: "ICICI Bank" },
        { sr: 29, name: "Sankalp Lade", specialization: "Finance", organization: "ICICI Bank" },
        { sr: 30, name: "Amrita Patkar", specialization: "Marketing", organization: "ICICI Bank" },
        { sr: 31, name: "Gaurav Dhabale", specialization: "Marketing", organization: "Capital First" },
        { sr: 32, name: "Sushil Survade", specialization: "Finance", organization: "Capital First" },
        { sr: 33, name: "Sandeep Bargande", specialization: "HR", organization: "Viraj Profile" },
        { sr: 34, name: "Piyush Moharir", specialization: "Finance", organization: "FIS Global" },
        { sr: 35, name: "Rajnish Kumar", specialization: "Marketing", organization: "Mother Dairy" },
        { sr: 36, name: "Sonali Bhalerao", specialization: "Marketing", organization: "IDFC First Bank" },
        { sr: 37, name: "Aakash Kapse", specialization: "Marketing", organization: "HDFC Bank" },
        { sr: 38, name: "Amit Sharma", specialization: "Finance", organization: "Home First Finance Company" },
        { sr: 39, name: "Chandrashekar Hepat", specialization: "Marketing", organization: "Home First Finance Company" },
        { sr: 40, name: "Harshal Patil", specialization: "Finance", organization: "Home First Finance Company" },
        { sr: 41, name: "Kinjal Bhandarkar", specialization: "Marketing", organization: "Bajaj Allianz Life Insurance Company" },
        { sr: 42, name: "Saurabh Kulkarni", specialization: "Finance", organization: "FIS Global" },
        { sr: 43, name: "Ajit Yadav", specialization: "Marketing", organization: "Kalyani TechnoForge ltd" },
        { sr: 44, name: "Rucha Ramde", specialization: "Marketing", organization: "Genau Wellness Solutions Pvt. Ltd." },
        { sr: 45, name: "Eeva Razdan", specialization: "Marketing", organization: "Optimal Media Solutions" },
        { sr: 46, name: "Akshay Phutane", specialization: "Marketing", organization: "99acres.com" },
        { sr: 47, name: "Prathamesh Wagh", specialization: "Marketing", organization: "Kotak Mahindra Bank" },
        { sr: 48, name: "Sasmit Raut", specialization: "Marketing", organization: "Ingram Micro" },
        { sr: 49, name: "Rahul Cheke", specialization: "Operations", organization: "Svatantra Mircofin Pvt Ltd" },
        { sr: 50, name: "Dhananjay Bankar", specialization: "Marketing", organization: "Paytm" },
        { sr: 51, name: "Sandeep Bhagwat", specialization: "Finance", organization: "FIS Global" },
      ],
    },

    /* ======================================================
        ✅ 2016-18
    ====================================================== */
    "2016-18": {
      statsImages: [
        { img: "/IGSB/Placement/Chart1-2016-18.svg", title: "Sectoral Distribution" },
        { img: "/IGSB/Placement/Chart2-2016-18.svg", title: "Specialization" },
        { img: "/IGSB/Placement/Chart3-2016-18.svg", title: "Package Overview" },
        { img: "/IGSB/Placement/Chart4-2016-18.svg", title: "Gender Diversity" },
      ],
      studentTable: [
        { sr: 1, name: "Mayur Puri", specialization: "Marketing", organization: "Colgate Palmolive India" },
        { sr: 2, name: "Suraj Mehta", specialization: "Marketing", organization: "AO Smith" },
        { sr: 3, name: "Avishek Mishra", specialization: "Marketing", organization: "GlobalSpace Technologies Ltd." },
        { sr: 4, name: "Sunny Khemani", specialization: "Marketing", organization: "Kolte Patil" },
        { sr: 5, name: "Ravindra Umap", specialization: "Marketing", organization: "ICICI Prudential" },
        { sr: 6, name: "Ashish Kolte", specialization: "Marketing", organization: "ICICI Prudential" },
        { sr: 7, name: "Shimon Salve", specialization: "Marketing", organization: "Aloha Technologies" },
        { sr: 8, name: "Paresh Gund", specialization: "Marketing", organization: "Paranjape Scheme" },
        { sr: 9, name: "Utkarsha Gajghate", specialization: "Marketing", organization: "Goel Ganga" },
        { sr: 10, name: "Ankur Uppadhyey", specialization: "Marketing", organization: "OM Logistics" },
        { sr: 11, name: "Shreepal Sanghavi", specialization: "Finance", organization: "Karvy" },
        { sr: 12, name: "Mamta Jadhav", specialization: "Finance", organization: "FIS Global" },
        { sr: 13, name: "Kiran Jadhav", specialization: "Finance", organization: "ICICI Prudential" },
        { sr: 14, name: "Pragya Gurang", specialization: "Finance", organization: "ICICI Prudential" },
        { sr: 15, name: "Prashant Nikam", specialization: "Operations", organization: "Avan Motors" },
        { sr: 16, name: "Pavan Kote", specialization: "Marketing", organization: "Bajaj Allianz General Insurance" },
        { sr: 17, name: "Hemant Apte", specialization: "Finance", organization: "Huron Consulting Group" },
        { sr: 18, name: "Gunjan Kaushik", specialization: "Finance", organization: "Eclerx" },
        { sr: 19, name: "Nitesh Tavate", specialization: "Marketing", organization: "HDFC Ltd." },
        { sr: 20, name: "Deesha Soni", specialization: "Marketing", organization: "ICICI Securities" },
        { sr: 21, name: "Akhil Dhoot", specialization: "Finance", organization: "ICICI Securities" },
        { sr: 22, name: "Akash Shah", specialization: "Operations", organization: "Reliance Retail" },
        { sr: 23, name: "Rahul Khedkar", specialization: "Marketing", organization: "Reliance Retail" },
        { sr: 24, name: "Anwesh Gajbhiye", specialization: "Finance", organization: "Centre For Monitoring Indian Economy Pvt. Ltd" },
        { sr: 25, name: "Ajaj Khan", specialization: "Marketing", organization: "Ceasefire" },
        { sr: 26, name: "Vikash Gandhi", specialization: "Marketing", organization: "Ceasefire" },
        { sr: 27, name: "Sunny Kumar", specialization: "Marketing", organization: "Konnection India Group" },
        { sr: 28, name: "Yogeshwar Bhalke", specialization: "Finance", organization: "Ujjivan Small Finance Bank" },
        { sr: 29, name: "Susmita Das", specialization: "Finance", organization: "Indiabulls" },
        { sr: 30, name: "Mukesh Kumar", specialization: "Marketing", organization: "Edzeal Technologies" },
        { sr: 31, name: "Krishna Sangle", specialization: "Marketing", organization: "Nippon Paints" },
        { sr: 32, name: "Akhilesh Shastri", specialization: "Finance", organization: "Madura MicroFinance" },
      ],
    },
  };

  const years = Object.keys(placementData).reverse(); // newest first
  const [activeYear, setActiveYear] = useState(years[0]);

  /* ======================================================
      ✅ TABLE COMPONENT
  ====================================================== */
  const renderTable = (rows) => (
    <div className="overflow-x-auto shadow-md rounded-xl border border-gray-300">
      <table className="min-w-full text-center text-gray-800 border-collapse">
        <thead>
          <tr className="bg-secondary text-white">
            <th className="border px-4 py-3">Sr.No</th>
            <th className="border px-4 py-3">Student Name</th>
            <th className="border px-4 py-3">Specialization</th>
            <th className="border px-4 py-3">Organization</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.sr} className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-3">{r.sr}</td>
              <td className="border px-4 py-3">{r.name}</td>
              <td className="border px-4 py-3">{r.specialization}</td>
              <td className="border px-4 py-3">{r.organization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  /* ======================================================
      ✅ UI STARTS HERE
  ====================================================== */

  return (
    <div className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-14">

        {/* Title */}
        <h1 className="text-4xl font-bold text-secondary text-center">
          Placement Records <span className="text-red-500">(Will be Updated Soon)</span>
        </h1>

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeYear === year
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-secondary hover:text-secondary"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Statistics 4-Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placementData[activeYear].statsImages.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <Image
                src={stat.img}
                alt={stat.title}
                width={500}
                height={500}
                className="w-full h-56 object-contain p-4"
              />
              <h3 className="text-center font-semibold text-gray-700 p-3">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Student Placement Table */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
            IGSB Placement MBA Batch — {activeYear}
          </h2>

          {placementData[activeYear].studentTable.length > 0 ? (
            renderTable(placementData[activeYear].studentTable)
          ) : (
            <p className="text-center text-gray-600 py-10 italic">
              Placement data will be updated soon...
            </p>
          )}
        </div>
      </div>
    </div>

    
  );
};

export default PlacementRecords;
