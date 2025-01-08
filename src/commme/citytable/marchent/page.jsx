// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Tablemanchester = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSpecialization, setSelectedSpecialization] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   // Courses list
//   const courses = [
//     { name: "Training course in Total Quality Control", city: "Manchester", specialization: "Quality Control" },
//     { name: "Course in The Use of Information Technology", city: "Manchester", specialization: "IT" },
//     { name: "Management of Fast Food Restaurants", city: "Manchester", specialization: "Management" },
//     { name: "Short Professional Diploma in Cyber Security", city: "Manchester", specialization: "Cyber Security" },
//     { name: "Course in The Management of Training and Development", city: "Manchester", specialization: "Training" },
//     { name: "A Training Course in Construction Management", city: "Manchester", specialization: "Construction" },
//     { name: "Training Course in The Importance of Hygiene", city: "Manchester", specialization: "Hygiene" },
//     { name: "Legal Strategies of Contractual Negotiation", city: "Manchester", specialization: "Legal" },
//     { name: "A course on international laws and practice of figures", city: "Manchester", specialization: "Legal" },
//     { name: "A Training Course in Building Smart Cities and Green Tech", city: "Manchester", specialization: "Smart Cities" },
//     { name: "Cyber Security Professional Program", city: "Manchester", specialization: "Cyber Security" },
//     { name: "Professional Diplomatic Protocol Training Program", city: "Manchester", specialization: "Diplomatic" },
//     // Add all courses here with their respective specialization and city
//   ];

//   // Filtered courses based on searchTerm, specialization, and city
//   const filteredCourses = courses.filter(course => 
//     (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
//     (course.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase()) || selectedSpecialization === '') &&
//     (course.city.toLowerCase().includes(selectedCity.toLowerCase()) || selectedCity === '')
//   );

//   return (
//     <div className="container mx-auto p-6 bg-white mt-6 rounded-xl shadow-xl">
//       <h1 className="text-2xl font-semibold text-center text-indigo-900 mb-4">
//         Search <samp style={{ color: '#b91c1c' }}>Courses</samp>
//       </h1>

//       <div className="flex justify-center mb-4 space-x-4">
//         <input
//           type="text"
//           placeholder="Search for courses"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-1/3 px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//         />
        
//         {/* Specialization Filter */}
//         <select
//           value={selectedSpecialization}
//           onChange={(e) => setSelectedSpecialization(e.target.value)}
//           className="px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="">Select Specialization</option>
//           <option value="Quality Control">Quality Control</option>
//           <option value="IT">IT</option>
//           <option value="Management">Management</option>
//           <option value="Cyber Security">Cyber Security</option>
//           <option value="Training">Training</option>
//           <option value="Construction">Construction</option>
//           <option value="Hygiene">Hygiene</option>
//           <option value="Legal">Legal</option>
//           <option value="Smart Cities">Smart Cities</option>
//           <option value="Diplomatic">Diplomatic</option>
//         </select>
        
//         {/* City Filter */}
//         <select
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//           className="px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="">Select City</option>
//           <option value="Manchester">Manchester</option>
//           <option value="London">London</option>
//           {/* Add more cities as needed */}
//         </select>
//       </div>

//       <div className="overflow-hidden rounded-xl shadow-md">
//         <table className="w-full table-auto bg-white text-sm">
//           <thead className="bg-indigo-700 text-white">
//             <tr>
//               <th className="px-2 py-2 text-left">Course</th>
//               <th className="px-2 py-2 text-left">City</th>
//               <th className="px-2 py-2 text-center">Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCourses.map((course, index) => {
//               const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();

//               return (
//                 <tr key={index} className="border-t hover:bg-gray-50 transition duration-200">
//                   <td className="px-2 py-2 text-black hover:text-indigo-600 cursor-pointer">
//                     <Link href={`/courses/${courseLink}`} passHref>
//                       {course.name}
//                     </Link>
//                   </td>
//                   <td className="px-2 py-2 text-center text-gray-600">{course.city}</td>
//                   <td className="px-2 py-2 text-center">
//                     <button
//                       className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-200"
//                       style={{ backgroundColor: '#1e3a8a' }}
//                     >
//                       Course Details
//                     </button>
//                     <Link href="/register" passHref>
//                       <button
//                         className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//                         style={{ backgroundColor: '#1e3a8a' }}
//                       >
//                         Register
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Tablemanchester;
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Tablemanchester = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSpecialization, setSelectedSpecialization] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   // Courses list
//   const courses = [
//     { name: "Training course in Total Quality Control", city: "Manchester", specialization: "Quality Control" },
//     { name: "Course in The Use of Information Technology", city: "Manchester", specialization: "IT" },
//     { name: "Management of Fast Food Restaurants", city: "Manchester", specialization: "Management" },
//     { name: "Short Professional Diploma in Cyber Security", city: "Manchester", specialization: "Cyber Security" },
//     { name: "Course in The Management of Training and Development", city: "Manchester", specialization: "Training" },
//     { name: "A Training Course in Construction Management", city: "Manchester", specialization: "Construction" },
//     { name: "Training Course in The Importance of Hygiene", city: "Manchester", specialization: "Hygiene" },
//     { name: "Legal Strategies of Contractual Negotiation", city: "Manchester", specialization: "Legal" },
//     { name: "A course on international laws and practice of figures", city: "Manchester", specialization: "Legal" },
//     { name: "A Training Course in Building Smart Cities and Green Tech", city: "Manchester", specialization: "Smart Cities" },
//     { name: "Cyber Security Professional Program", city: "Manchester", specialization: "Cyber Security" },
//     { name: "Professional Diplomatic Protocol Training Program", city: "Manchester", specialization: "Diplomatic" },
//   ];

//   // Filtered courses based on searchTerm, specialization, and city
//   const filteredCourses = courses.filter(course => 
//     (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
//     (course.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase()) || selectedSpecialization === '') &&
//     (course.city.toLowerCase().includes(selectedCity.toLowerCase()) || selectedCity === '')
//   );

//   return (
//     <div className="container mx-auto p-4 md:p-6 bg-white mt-6 rounded-xl shadow-xl">
//       <h1 className="text-lg md:text-2xl font-semibold text-center text-indigo-900 mb-4">
//         Search <samp style={{ color: '#b91c1c' }}>Courses</samp>
//       </h1>

//       <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search for courses"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full md:w-1/3 px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
//         />
        
//         {/* Specialization Filter */}
//         <select
//           value={selectedSpecialization}
//           onChange={(e) => setSelectedSpecialization(e.target.value)}
//           className="w-full md:w-auto px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="">Select Specialization</option>
//           <option value="Quality Control">Quality Control</option>
//           <option value="IT">IT</option>
//           <option value="Management">Management</option>
//           <option value="Cyber Security">Cyber Security</option>
//           <option value="Training">Training</option>
//           <option value="Construction">Construction</option>
//           <option value="Hygiene">Hygiene</option>
//           <option value="Legal">Legal</option>
//           <option value="Smart Cities">Smart Cities</option>
//           <option value="Diplomatic">Diplomatic</option>
//         </select>
        
//         {/* City Filter */}
//         <select
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//           className="w-full md:w-auto px-3 py-2 border border-indigo-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="">Select City</option>
//           <option value="Manchester">Manchester</option>
//           <option value="London">London</option>
//         </select>
//       </div>

//       <div className="overflow-hidden rounded-xl shadow-md">
//         <table className="w-full table-auto bg-white text-sm">
//           <thead className="bg-indigo-700 text-white">
//             <tr>
//               <th className="px-2 py-2 text-left">Course</th>
//               <th className="px-2 py-2 text-left">City</th>
//               <th className="px-2 py-2 text-center">Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCourses.map((course, index) => {
//               const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();

//               return (
//                 <tr key={index} className="border-t hover:bg-gray-50 transition duration-200">
//                   <td className="px-2 py-2 text-black hover:text-indigo-600 cursor-pointer">
//                     <Link href={`/courses/${courseLink}`} passHref>
//                       {course.name}
//                     </Link>
//                   </td>
//                   <td className="px-2 py-2 text-center text-gray-600">{course.city}</td>
//                   <td className="px-2 py-2 text-center flex flex-col md:flex-row justify-center items-center gap-2">
//                     <button
//                       className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-200"
//                       style={{ backgroundColor: '#1e3a8a' }}
//                     >
//                       Course Details
//                     </button>
//                     <Link href="/register" passHref>
//                       <button
//                         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//                         style={{ backgroundColor: '#1e3a8a' }}
//                       >
//                         Register
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Tablemanchester;
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
      <thead className="bg-indigo-700 text-white">
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
              <td className="px-4 py-2 text-black hover:text-indigo-600 cursor-pointer">
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
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                style={{ backgroundColor: '#1e3a8a' }}
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
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
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


