'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const AllCourses = () => {
  const [courses, setCourses] = useState([]); // Store all courses
  const [filteredCourses, setFilteredCourses] = useState([]); // Store filtered courses
  const [searchTerm, setSearchTerm] = useState(''); // Track search input
  const [loading, setLoading] = useState(true);

  // Fetch courses data from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://api.example.com/courses'); // Replace with your API URL
        const data = await response.json();
        setCourses(data);
        setFilteredCourses(data); // Initially, show all courses
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter courses based on the search term
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(value)
    );
    setFilteredCourses(filtered);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        All Courses
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search courses..."
          className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="p-4 bg-white shadow-md rounded-md border border-gray-200"
          >
            <h2 className="text-lg font-bold text-gray-700">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <Link href={`/courses/${course.id}`}>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No courses found.</p>
      )}
    </div>
  );
};

export default AllCourses;
