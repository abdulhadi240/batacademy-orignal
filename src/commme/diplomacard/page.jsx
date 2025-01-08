// "use client"
// import React from 'react';
// import Card from '../Card/page';

// const Diplomacard = () => {
//   // Card data array with 12 objects
//   const cardData = [
//     {
//       imageUrl: "https://batdacademy.com/uploads/1565272190ytytytyt.jpeg",
//       title: "Mini Diploma in Swift Banking Transfer",
//       courseLink: "/Zurich",
//       dates: ['2024-12-15', '2024-12-20', '2024-12-25']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/1584628561%D8%A3%D8%B3%D8%A7%D9%84%D9%8A%D8%A8_%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9.jpg",
//       title: "Professional Diplomain Modern Management Strategies and Prac...",
//       courseLink: "/Berlin",
//       dates: ['2024-12-16', '2024-12-21', '2024-12-26']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Professional Diploma in Modern Means of Communication in Mar...",
//       courseLink: "/London",
//       dates: ['2024-12-17', '2024-12-22', '2024-12-27']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short Professional Diploma in Leadership Skills",
//       courseLink: "/Paris",
//       dates: ['2024-12-18', '2024-12-23', '2024-12-28']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short professional diploma in Journalism and Media",
//       courseLink: "/NewYork",
//       dates: ['2024-12-19', '2024-12-24', '2024-12-29']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short Professional Diploma in International Relations",
//       courseLink: "/Tokyo",
//       dates: ['2024-12-20', '2024-12-25', '2024-12-30']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short Professional Diploma in Quality Management",
//       courseLink: "/Dubai",
//       dates: ['2024-12-21', '2024-12-26', '2024-12-31']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short Professional Diploma in Cyber Security",
//       courseLink: "/Sydney",
//       dates: ['2024-12-22', '2024-12-27', '2025-01-01']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short professional diploma in internal audit standards in go...",
//       courseLink: "/SanFrancisco",
//       dates: ['2024-12-23', '2024-12-28', '2025-01-02']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Short professional diploma in disaster management in wartime",
//       courseLink: "/Singapore",
//       dates: ['2024-12-24', '2024-12-29', '2025-01-03']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/1589792649Untitled-1-13.jpg",
//       title: "Short professional diploma in change management",
//       courseLink: "/Toronto",
//       dates: ['2024-12-25', '2024-12-30', '2025-01-04']
//     },
//     {
//       imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
//       title: "Renewable Energy According to European Standards",
//       courseLink: "/Amsterdam",
//       dates: ['2024-12-26', '2024-12-31', '2025-01-05']
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center">
//       {cardData.map((card, index) => (
//         <div key={index} className="w-full">
//           <Card
//             imageUrl={card.imageUrl}
//             title={card.title}
//             courseLink={card.courseLink}
//             dates={card.dates}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Diplomacard;



"use client";
import React from "react";
import Link from "next/link";

const Diplomacard = () => {
  const cardData = [
    {
      imageUrl: "https://batdacademy.com/uploads/1565272190ytytytyt.jpeg",
      title: "Mini Diploma in Swift Banking Transfer",
      courseLink: "/Zurich",
      dates: ["2024-12-15", "2024-12-20", "2024-12-25"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1584628561%D8%A3%D8%B3%D8%A7%D9%84%D9%8A%D8%A8_%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9.jpg",
      title: "Professional Diplomain Modern Management Strategies and Prac...",
      courseLink: "/Berlin",
      dates: ["2024-12-16", "2024-12-21", "2024-12-26"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Professional Diploma in Modern Means of Communication in Mar...",
      courseLink: "/London",
      dates: ["2024-12-17", "2024-12-22", "2024-12-27"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short Professional Diploma in Leadership Skills",
      courseLink: "/Paris",
      dates: ["2024-12-18", "2024-12-23", "2024-12-28"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short professional diploma in Journalism and Media",
      courseLink: "/NewYork",
      dates: ["2024-12-19", "2024-12-24", "2024-12-29"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short Professional Diploma in International Relations",
      courseLink: "/Tokyo",
      dates: ["2024-12-20", "2024-12-25", "2024-12-30"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short Professional Diploma in Quality Management",
      courseLink: "/Dubai",
      dates: ["2024-12-21", "2024-12-26", "2024-12-31"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short Professional Diploma in Cyber Security",
      courseLink: "/Sydney",
      dates: ["2024-12-22", "2024-12-27", "2025-01-01"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short professional diploma in internal audit standards in go...",
      courseLink: "/SanFrancisco",
      dates: ["2024-12-23", "2024-12-28", "2025-01-02"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Short professional diploma in disaster management in wartime",
      courseLink: "/Singapore",
      dates: ["2024-12-24", "2024-12-29", "2025-01-03"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1589792649Untitled-1-13.jpg",
      title: "Short professional diploma in change management",
      courseLink: "/Toronto",
      dates: ["2024-12-25", "2024-12-30", "2025-01-04"],
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Renewable Energy According to European Standards",
      courseLink: "/Amsterdam",
      dates: ["2024-12-26", "2024-12-31", "2025-01-05"],
    },
  ];

  return (
    <div className="overflow-x-auto py-8">
      <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-4 text-left text-gray-700 font-semibold">Image</th>
            <th className="border border-gray-300 p-4 text-left text-gray-700 font-semibold">Title</th>
            <th className="border border-gray-300 p-4 text-left text-gray-700 font-semibold">Course Link</th>
            <th className="border border-gray-300 p-4 text-left text-gray-700 font-semibold">Dates</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {cardData.map((card, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-300 p-4">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-16 h-16 object-cover rounded-md shadow-sm"
                />
              </td>
              <td className="border border-gray-300 p-4 text-gray-600">{card.title}</td>
              <td className="border border-gray-300 p-2">
                <Link href={card.courseLink}>
                  <button
                    className="bg-blue-500 text-white px-2 rounded hover:bg-blue-600 transition duration-300"
                    style={{ backgroundColor: "#1e4ba1" }}
                  >
                    Go to Course
                  </button>
                </Link>
              </td>
              <td className="border border-gray-300 p-4 text-gray-500">
                {card.dates.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diplomacard;

