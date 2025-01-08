import React from 'react';
import Link from "next/link";

const Btn = ({
  title = "Course",
  leftButtons = [],
  rightButton = null,
  tabs = [],
  summary = "",
  objectives = [],
  benefits = [],
  courseDetails = [],
  registerLink = "/register",
  registerLabel = "Register Now",
  registerBgColor = "#1e3a8a",
}) => {
  return (
    <div className="p-4 lg:p-6 bg-white rounded">
      <div className="mt-4 mb-4 text-3xl font-bold">
        <h1>{title}</h1>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 text-sm bg-white py-2 px-2 rounded-lg shadow">
        {/* Left Buttons */}
        <div className="flex flex-wrap gap-4 mb-2 lg:mb-0">
          {leftButtons.map((button, index) => (
            <button
              key={index}
              className={`rounded text-white py-2 px-4 text-sm hover:${button.hoverBg} border-none cursor-pointer`}
              style={{ backgroundColor: button.bgColor }}
            >
              {button.label}
            </button>
          ))}
        </div>
        {/* Right Button */}
        {/* {rightButton && (
          <button
            className={`rounded py-2 px-6 text-sm hover:${rightButton.hoverBg} border-none cursor-pointer`}
            style={{ backgroundColor: rightButton.bgColor, color: "white" }}
          >
            {rightButton.label}
          </button>
        )} */}
      </div>

      {/* Tabs Section */}
      <div className="border-b bg-white py-2 px-2 border-gray-300 flex flex-wrap lg:flex-nowrap justify-between items-center mb-4 rounded-lg shadow">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`font-semibold border-none cursor-pointer ${tab.isActive ? "text-black" : "text-gray-600"} hover:${tab.hoverText}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Layout Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Course Details */}
        <div className="text-gray-800 bg-white py-4 px-4 lg:px-6 rounded-lg shadow flex-1">
          {/* Summary Section */}
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <p className="mb-4 text-sm">{summary}</p>

          {/* Objectives Section */}
          <div className="text-sm mt-4">
            <h2 className="text-lg font-bold  mt-6 mb-2">Objectives and Target Group</h2>
            <ul className="list-disc ml-10 py-5 mx-5 mb-4">
              {objectives.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 pc font-semibold">Knowledge and Benefits:</p>
            <ul className="list-disc mt-6 mx-5 ml-6">
              {benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="course_details flex flex-col gap-3 w-full lg:w-1/3 h-60 p-3 bg-[#e2f0ff]">
          {courseDetails.map((detail, index) => (
            <div key={index} className="flex justify-between tags">
              <h1>{detail.label}</h1>
              <p className={detail.isHighlighted ? "font-bold text-secondary" : ""}>{detail.value}</p>
            </div>
          ))}
          <Link
            href={registerLink}
            className="p-2 text-white text-center rounded-md hover:bg-gray-800"
            style={{ backgroundColor: registerBgColor }}
          >
            {registerLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Btn;
