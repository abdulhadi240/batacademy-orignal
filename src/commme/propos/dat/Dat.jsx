// import React, { useState } from 'react';

// const CourseDates = () => {
//   const courseDates = [
//     { date: "2024-12-30" },
//     { date: "2025-03-31" },
//     { date: "2025-06-30" },
//     { date: "2025-09-29" },
//     { date: "" },
//   ];
//   return (
//     <div className="bg-gray-200 w-full flex items-center justify-center p-5 mr-4 sm:p-6">
//   <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-4xl w-full">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     {/* Course Dates Section */}
//     <div className="py-4">
//       <h2 className="text-lg font-semibold mb-4">Course Date</h2>
//       {courseDates.map((item, index) => (
//         <div
//           key={index}
//           className="flex flex-wrap items-center gap-4 mb-4"
//         >
//           {/* Date Input */}
//           <div className="flex items-center gap-2 flex-1">
//             <div className="bg-green-100 p-1 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-green-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="text"
//               value={item.date}
//               placeholder="Date"
//               readOnly={!item.date}
//               className={`border rounded px-3 py-2 w-full text-sm ${
//                 item.date ? "bg-white" : "bg-gray-200"
//               }`}
//             />
//           </div>

//           {/* City Selector */}
//           <select
//             className="border rounded px-3 py-2 bg-white text-gray-700 text-sm w-32"
//             defaultValue=""
//           >
//             <option value="" disabled>
//               City
//             </option>
//             <option value="City1">City1</option>
//             <option value="City2">City2</option>
//             <option value="City3">City3</option>
//           </select>

//           {/* Register Button */}
//           <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-sm">
//             Register
//           </button>
//         </div>
//       ))}
//     </div>

//     {/* Course Cost Section */}
//     <div className="py-4">
//       <h2 className="text-lg font-semibold mb-4">Course Cost</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Note: Price varies according to the selected city
//       </p>
//       <div className="space-y-4">
//         <div className="flex justify-between items-center">
//           <span className="text-sm">Members NO.: 1</span>
//           <input
//             type="text"
//             readOnly
//             value="/ Member"
//             className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
//           />
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm">Members NO.: 2 - 3</span>
//           <input
//             type="text"
//             readOnly
//             value="/ Member"
//             className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
//           />
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm">Members NO.: +3</span>
//           <input
//             type="text"
//             readOnly
//             value="/ Member"
//             className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </div>


//   );
// }  

// export default CourseDates;
import React, { useState } from "react";

const CourseDates = () => {
  const [courseDates, setCourseDates] = useState([
    { date: "2024-12-30" },
    { date: "2025-03-31" },
    { date: "2025-06-30" },
    { date: "2025-09-29" },
    { date: "" },
  ]);

  const handleDateChange = (index, newDate) => {
    const updatedDates = [...courseDates];
    updatedDates[index].date = newDate;
    setCourseDates(updatedDates);
  };

  return (
    <div className="bg-gray-200 w-full flex items-center justify-center p-5 mr-4 sm:p-6">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Course Dates Section */}
          <div className="py-4">
            <h2 className="text-lg font-semibold mb-4">Course Date</h2>
            {courseDates.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center gap-4 mb-4"
              >
                {/* Date Input */}
                <div className="flex items-center gap-2 flex-1">
                  <div className="bg-green-100 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={item.date}
                    onChange={(e) => handleDateChange(index, e.target.value)}
                    placeholder="Date"
                    className={`border rounded px-3 py-2 w-full text-sm ${
                      item.date ? "bg-white" : "bg-gray-200"
                    }`}
                  />
                </div>

                {/* City Selector */}
                <select
                  className="border rounded px-3 py-2 bg-white text-gray-700 text-sm w-32"
                  defaultValue=""
                >
                  <option value="" disabled>
                    City
                  </option>
                  <option value="City1">City1</option>
                  <option value="City2">City2</option>
                  <option value="City3">City3</option>
                </select>

                {/* Register Button */}
                <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-sm">
                  Register
                </button>
              </div>
            ))}
          </div>

          {/* Course Cost Section */}
          <div className="py-4">
            <h2 className="text-lg font-semibold mb-4">Course Cost</h2>
            <p className="text-sm text-gray-600 mb-4">
              Note: Price varies according to the selected city
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Members NO.: 1</span>
                <input
                  type="text"
                  readOnly
                  value="/ Member"
                  className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Members NO.: 2 - 3</span>
                <input
                  type="text"
                  readOnly
                  value="/ Member"
                  className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Members NO.: +3</span>
                <input
                  type="text"
                  readOnly
                  value="/ Member"
                  className="border rounded px-3 py-2 text-right bg-gray-50 w-28 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDates;
