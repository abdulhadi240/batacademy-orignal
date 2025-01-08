"use client";

import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "100M", label: "Client Satisfaction" },
    { value: "24h", label: "Expert Support Team" },
    { value: "98k+", label: "Sales Count" },
    { value: "208+", label: "Client Worldwide" },
  ];

  return (
    <div className=" rounded-lg shadow-md p-8 mx-8 py-10 max-w-7xl bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <p className="text-4xl font-bold text-gray-900">
              <span className="text-red-500">{stat.value}</span>
            </p>
            <p className="text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
