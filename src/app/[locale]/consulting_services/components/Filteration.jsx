'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Filteration = ({ data, category , params}) => {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filtered, setFiltered] = useState(data?.data);

  useEffect(() => {
    handleSearch();
  }, [title, selectedCategory]);

  const handleSearch = () => {
    let filteredData = data?.data;

    // Title filter (case-insensitive)
    if (title) {
      filteredData = filteredData.filter((service) =>
        service.name.toLowerCase().includes(title.toLowerCase())
      );
    }

    // Category filter (by slug)
    if (selectedCategory) {
      filteredData = filteredData.filter(
        (service) => service.consultancy.slug === selectedCategory
      );
    }

    setFiltered(filteredData);
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="items-center gap-4 flex-row flex">
          {/* Title Search Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search Services"
            className="flex-1 p-3 w-full text-sm border rounded-lg shadow-md"
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-1 p-3 hidden md:block border rounded-lg shadow-md"
          >
            <option value="">All Categories</option>
            {category?.data.map((cat) => (
              <option key={cat.id} value={cat.slug} className="text-black">
                {cat.name}
              </option>
            ))}
          </select>

          {/* Search Button (optional if using auto filter on input change) */}
          <button
            onClick={handleSearch}
            className="px-10 py-3 hidden md:block text-sm text-center text-white transition rounded-lg sm:px-16 bg-primary hover:bg-primary/70"
          >
            Search
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 md:mx-28 max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {filtered?.map((service, index) => (
          <Card
            key={index}
            number={index + 1}
            slug={service.slug}
            title={service.name}
            description={service.content}
            param={params}
          />
        ))}
      </div>
    </div>
  );
};

export default Filteration;
