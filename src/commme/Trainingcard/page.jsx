"use client"
import React from 'react';
import Card from '../Card/page';
import Link from 'next/link';

const Trainingcard = () => {
  // Card data array with 12 objects
  const cardData = [
    {
      imageUrl: "https://batdacademy.com/uploads/163574830336802620122_fe3ca90fca_b.jpg",
      title: "Internet of Things Training Program",
      courseLink: "/Zurich",
      dates: ['2024-12-15', '2024-12-20', '2024-12-25']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/16345503641514201843%D8%A7%D9%84%D8%A7%D9%95%D8%AF%D8%A7%D8%B1%D8%A9.jpg",
      title: "Advanced Systems for Industrial Security and General Safety...",
      courseLink: "/Berlin",
      dates: ['2024-12-16', '2024-12-21', '2024-12-26']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1647344514Article-size-800-x-600-76.jpg",
      title: "Successful TV Photography Specialist Course",
      courseLink: "/London",
      dates: ['2024-12-17', '2024-12-22', '2024-12-27']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1571905398WhatsApp%20Image%202019-10-22%20at%2010.50.41.jpeg",
      title: "Skills of writing legal notes and legislative drafting",
      courseLink: "/Paris",
      dates: ['2024-12-18', '2024-12-23', '2024-12-28']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/16345503641514201843%D8%A7%D9%84%D8%A7%D9%95%D8%AF%D8%A7%D8%B1%D8%A9.jpg",
      title: "Strategic of organizations security",
      courseLink: "/NewYork",
      dates: ['2024-12-19', '2024-12-24', '2024-12-29']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1566461149WhatsApp%20Image%202019-08-21%20at%202.21.10%20PM.jpeg",
      title: "Factors Affecting International Relations",
      courseLink: "/Tokyo",
      dates: ['2024-12-20', '2024-12-25', '2024-12-30']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1567675688WhatsApp%20Image%202019-09-05%20at%2010.57.09.jpeg",
      title: "Training Course in The Basics and Principles of Health Manag...",
      courseLink: "/Dubai",
      dates: ['2024-12-21', '2024-12-26', '2024-12-31']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1567925847WhatsApp%20Image%202019-09-06%20at%2013.30.23.jpeg",
      title: "Training Course on Methods of Preserving Information in Gove.",
      courseLink: "/Sydney",
      dates: ['2024-12-22', '2024-12-27', '2025-01-01']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1565272006ff.jpeg",
      title: "Corporate Governance Training Course",
      courseLink: "/SanFrancisco",
      dates: ['2024-12-23', '2024-12-28', '2025-01-02']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1571731957WhatsApp%20Image%202019-10-21%20at%205.53.44%20PM.jpeg",
      title: "Course on The Development of Intellectual Security",
      courseLink: "/Singapore",
      dates: ['2024-12-24', '2024-12-29', '2025-01-03']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1571732378WhatsApp%20Image%202019-10-17%20at%2010.26.06%20AM.jpeg",
      title: "A training course in the modern preventive measures of infor...",
      courseLink: "/Toronto",
      dates: ['2024-12-25', '2024-12-30', '2025-01-04']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1571905306WhatsApp%20Image%202019-10-23%20at%2011.49.37.jpeg",
      title: "Business Information Management Systems (BIMS)",
      courseLink: "/Amsterdam",
      dates: ['2024-12-26', '2024-12-31', '2025-01-05']
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

export default Trainingcard;
