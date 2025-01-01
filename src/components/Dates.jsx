'use client'
import React, { useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";

const Dates = () => {
  const summary = {
    slug: "dummy-course",
    available_dates: [
      { date: "2025-01-15" },
      { date: "2025-01-20" },
      { date: "2025-01-25" },
      { date: "2025-02-01" },
    ],
    available_cities: [
      { name: "New York" },
      { name: "Los Angeles" },
      { name: "Chicago" },
      { name: "Houston" },
    ],
  };

  const [selectedCities, setSelectedCities] = useState(
    Array(summary.available_dates.length).fill("")
  );

  const handleCityChange = (index, value) => {
    const updatedCities = [...selectedCities];
    updatedCities[index] = value;
    setSelectedCities(updatedCities);
  };

  return (
    <><div className="border-[1px] border-dashed mt-10 mb-5 " /><div className=" flex justify-center">

          <div className="flex md:justify-start justify-center">
              <div className="flex flex-wrap md:justify-start justify-center gap-4 mr-4 mt-6">
                  {summary?.available_dates.map((item, index) => {
                      return (
                          <div
                              key={index}
                              className="h-auto px-2 py-4 mx-4 flex flex-col gap-3 rounded-md bg-[#e2f0ff]"
                          >
                              <div className="flex items-center gap-2">
                                  <BiCalendarEvent />
                                  <h1 className="text-sm text-primary">{item.date}</h1>
                              </div>
                              <div className="flex gap-2 button">
                                  <div>
                                      <select
                                          name="place"
                                          id=""
                                          className="px-2 text-sm rounded-md h-9"
                                          value={selectedCities[index]}
                                          onChange={(e) => handleCityChange(index, e.target.value)}
                                      >
                                          <option value="">Select City</option>
                                          {summary.available_cities.map((city, i) => (
                                              <option key={i} value={city.name}>
                                                  {city.name}
                                              </option>
                                          ))}
                                      </select>
                                  </div>
                                  <Link
                                      href={`/register?course=${summary.slug}&date=${item.date}&city=${selectedCities[index]}`}
                                      className="px-5 text-sm text-white rounded-md items-center text-center flex bg-primary"
                                  >
                                      Register
                                  </Link>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div></>
  );
};

export default Dates;
