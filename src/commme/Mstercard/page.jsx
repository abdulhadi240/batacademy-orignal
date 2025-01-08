"use client"
import React from 'react';
import Card from '../Card/page';
import Link from 'next/link';

const Mastercard = () => {
  // Card data array with 12 objects
  const cardData = [
    {
      imageUrl: "https://batdacademy.com/uploads/1643279609matt-chesin-j6owhh7l4ig-unsplash.jpg",
      title: "Mini Professional Master in Crisis and Disaster Management",
      courseLink: "",
      dates: ['2024-12-15', '2024-12-20', '2024-12-25']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/1514202330%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9%D9%80%D9%80.jpg",
      title: "Mini Professional Master in Lighting",
      courseLink: "/Berlin",
      dates: ['2024-12-16', '2024-12-21', '2024-12-26']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Key Performance Indicators (KPI) Training programme",
      courseLink: "/London",
      dates: ['2024-12-17', '2024-12-22', '2024-12-27']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Digital Transformation in Leadership",
      courseLink: "/Paris",
      dates: ['2024-12-18', '2024-12-23', '2024-12-28']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Creative Thinking and Innovation in Leadership",
      courseLink: "/NewYork",
      dates: ['2024-12-19', '2024-12-24', '2024-12-29']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Digital Transformation in Leadership",
      courseLink: "/Tokyo",
      dates: ['2024-12-20', '2024-12-25', '2024-12-30']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Outstanding Leadership and Supervisory Skills and Their Mode...",
      courseLink: "/Dubai",
      dates: ['2024-12-21', '2024-12-26', '2024-12-31']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Mini Professional Master in Banking and Finance Management",
      courseLink: "/Sydney",
      dates: ['2024-12-22', '2024-12-27', '2025-01-01']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Professional Master in Strategic Management and Leadership",
      courseLink: "/SanFrancisco",
      dates: ['2024-12-23', '2024-12-28', '2025-01-02']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Mini Master in Financial Management",
      courseLink: "/Singapore",
      dates: ['2024-12-24', '2024-12-29', '2025-01-03']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Mini Master in Project Management",
      courseLink: "/Toronto",
      dates: ['2024-12-25', '2024-12-30', '2025-01-04']
    },
    {
      imageUrl: "https://batdacademy.com/uploads/15287974551514201843.jpg",
      title: "Master in Management and Human Resource Development",
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

export default Mastercard;
