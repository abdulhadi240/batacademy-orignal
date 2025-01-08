// components/TeamMembers.js
import React from "react";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Cameron Williamson",
      position: "Assistant Manager",
      image: "/images/person1.jpg", // Replace with actual image paths
    },
    {
      name: "Cameron Williamson",
      position: "Supporting Assistant",
      image: "/images/person2.jpg",
    },
    {
      name: "Cameron Williamson",
      position: "Product Manager",
      image: "/images/person3.jpg",
    },
    {
      name: "Cameron Williamson",
      position: "Head of Sales & Services",
      image: "/images/person4.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h3 className="text-sm uppercase tracking-widest text-gray-600">
          Team Members
        </h3>
        <h2 className="text-3xl font-bold text-blue-900">
          Colleague & team members
        </h2>
      </div>
      <div className="flex justify-between items-center mb-8 px-6">
        <button className="text-blue-900 bg-white border border-blue-900 rounded-full p-2">
          &lt;
        </button>
        <button className="text-blue-900 bg-white border border-blue-900 rounded-full p-2">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
