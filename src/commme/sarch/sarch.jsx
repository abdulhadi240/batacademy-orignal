
import React from 'react';




const Sarch = () => {
  return (
    <>
      {/* <Navbar /> */}
       {/*satart slider  */}
       {/* end slider  */}
       {/* satrt form */}
       <div>
       <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Search in Courses</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search in specific Courses"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Category</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Specialization</option>
          <option>Specialization 1</option>
          <option>Specialization 2</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>City</option>
          <option>City 1</option>
          <option>City 2</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Language</option>
          <option>English</option>
          <option>Spanish</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Month</option>
          <option>January</option>
          <option>February</option>
        </select>
        <select
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Year</option>
          <option>2024</option>
          <option>2025</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
       </div>
       {/* end form */}
       {/* sart info card */}
       

       {/* end info card */}
      
    </>
  );
}

export default Sarch;
