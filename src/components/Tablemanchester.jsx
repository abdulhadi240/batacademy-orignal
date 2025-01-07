'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Tablemanchester = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Courses list
  const courses = [
    { name: "Training course in Total Quality Control", city: "Manchester", specialization: "Quality Control" },
    { name: "Course in The Use of Information Technology", city: "Manchester", specialization: "IT" },
    { name: "Management of Fast Food Restaurants", city: "Manchester", specialization: "Management" },
    { name: "Short Professional Diploma in Cyber Security", city: "Manchester", specialization: "Cyber Security" },
    { name: "Course in The Management of Training and Development", city: "Manchester", specialization: "Training" },
    { name: "A Training Course in Construction Management", city: "Manchester", specialization: "Construction" },
    { name: "Training Course in The Importance of Hygiene", city: "Manchester", specialization: "Hygiene" },
    { name: "Legal Strategies of Contractual Negotiation", city: "Manchester", specialization: "Legal" },
    { name: "A course on international laws and practice of figures", city: "Manchester", specialization: "Legal" },
    { name: "A Training Course in Building Smart Cities and Green Tech", city: "Manchester", specialization: "Smart Cities" },
    { name: "Cyber Security Professional Program", city: "Manchester", specialization: "Cyber Security" },
    { name: "Professional Diplomatic Protocol Training Program", city: "Manchester", specialization: "Diplomatic" },
  ];

  // Filtered courses based on searchTerm, specialization, and city
  const filteredCourses = courses.filter(course => 
    (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
    (course.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase()) || selectedSpecialization === '') &&
    (course.city.toLowerCase().includes(selectedCity.toLowerCase()) || selectedCity === '')
  );

  return (
    <div className="overflow-hidden">
  {/* Table layout for screens larger than 360px */}
  <div className="hidden md:block overflow-x-auto rounded-xl shadow-md">
    <table className="w-full table-auto bg-white text-sm">
      <thead className="bg-primary text-white">
        <tr>
          <th className="px-4 py-2 text-left">Course</th>
          <th className="px-4 py-2 text-left">City</th>
          <th className="px-4 py-2 text-center">Options</th>
        </tr>
      </thead>
      <tbody>
        {filteredCourses.map((course, index) => {
          const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();
            return (
            <tr key={index} className="border-t hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 text-black hover:text-primary cursor-pointer">
              <Link href={`/courses/${courseLink}`} passHref>
                {course.name}
              </Link>
              </td>
              <td className="px-4 py-2 text-center text-gray-600">{course.city}</td>
              <td className="px-4 py-2 text-center flex flex-col sm:flex-row justify-center gap-2">
              <Link href={`/courses/${courseLink}`} passHref>
                <button
                className="px-4 py-2 text-white rounded hover:bg-pink-700 transition duration-200"
                style={{ backgroundColor: '#1e3a8a' }}
                >
                Course Details
                </button>
              </Link>
              <Link href="/register" passHref>
                <button
                className="px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700 transition duration-200"
                >
                Register
                </button>
              </Link>
              </td>
            </tr>
            );
        })}
      </tbody>
    </table>
  </div>

  {/* Card layout for screens smaller than 360px */}
  <div className="block md:hidden space-y-4">
  {filteredCourses.map((course, index) => {
    const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();
    return (
      <div
        key={index}
        className="p-4 bg-white border rounded-lg shadow-md flex flex-col space-y-4 min-h-[150px]"
      >
        <h3 className="text-lg font-semibold text-black">
          <Link href={`/courses/${courseLink}`} passHref>
            {course.name}
          </Link>
        </h3>
        <p className="text-gray-600">City: {course.city}</p>
        <div className="flex  gap-2 mt-4">
          <Link href={`/courses/${courseLink}`} passHref>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 "
            >
              Course Details
            </button>
          </Link>
          <Link href="/register" passHref>
            <button
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>

</div>

  );
};

export default Tablemanchester;
