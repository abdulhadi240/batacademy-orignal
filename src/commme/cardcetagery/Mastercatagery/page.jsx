import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component

const Masters = () => {
  const categories = [
    {
      name: "Management",
      subcategories: [
        {  name: "Project Management Courses", link: "/project-management" },
        { name: "Mini Masters Programmes In Management", link: "/mini-masters-management" },
        { name: "Mini Professional Diploma In Management", link: "/professional-diploma-management" },
        { name: "Short Masters", link: "/short-masters" },
        { name: "Leadership & Professional Development", link: "/leadership-development" },
        { name: "Human Resources Training Courses", link: "/hr-training" },
        { name: "Tendering & Contract Management", link: "/contract-management" },
        { name: "Procurement & Warehouses", link: "/procurement-warehouses" },
        { name: "Strategic Planning Courses", link: "/strategic-planning" },
        { name: "Quality Management & 6 Sigma Courses", link: "/quality-management-6-sigma" },
        { name: "Customer Service Courses", link: "/customer-service" },
        { name: "Administrative & Secretariat Courses", link: "/admin-secretariat-courses" },
        { name: "Administrative Skills Courses", link: "/admin-skills-courses" },
        { name: "Sales Management Courses", link: "/sales-management-courses" },
        { name: "Education Management Courses", link: "/education-management-courses" },
        { name: "Retail Management Courses", link: "/retail-management-courses" },
        { name: "Risk Management Courses", link: "/risk-management-courses" },
        { name: "Office Management Courses", link: "/office-management-courses" },
        { name: "Management Skills Courses", link: "/management-skills-courses" },
      ],
    },
    {
      name: "Media and Public Relations",
      subcategories: [
        { name: "Protocol and Management", link: "/protocol-management" },
        { name: "Diplomacy & International Relations", link: "/diplomacy-international-relations" },
        { name: "Media & Journalism", link: "/media-journalism" },
        { name: "Public Relations", link: "/public-relations" },
      ],
    },
    {
      name: "Information Technology and Telecommunication",
      subcategories: [
        { name: "Telecommunication Courses", link: "/telecommunication-courses" },
        { name: "Information Technology and Programming Courses", link: "/it-programming-courses" },
        { name: "Graphics & Design Skills Courses", link: "/graphics-design-skills" },
        { name: "Programming & Coding Courses", link: "/programming-coding" },
        { name: "Cybersecurity and Digital Security", link: "/cybersecurity-digital-security" },
      ],
    },
    {
      name: "Environment, Municipalities, and Urban Planning",
      subcategories: [
        { name: "Urban Planning and City Building Courses", link: "/urban-planning-city-building" },
      ],
    },
    {
      name: "Accounting, Finance & Banking Courses",
      subcategories: [
        { name: "Accountancy & Bookkeeping Courses", link: "/accountancy-bookkeeping" },
        { name: "Corporate Governance & Anti Corruption Courses", link: "/corporate-governance-anti-corruption" },
        { name: "Investment & Banking Training Courses", link: "/investment-banking-training" },
        { name: "Financial Reporting And Auditing", link: "/financial-reporting-auditing" },
      ],
    },
    {
      name: "Energy",
      subcategories: [
        { name: "Oil and Gas Training Courses", link: "/oil-gas-training" },
        { name: "Renewable and Clean Energy Training Courses", link: "/renewable-clean-energy-training" },
        { name: "Electricity and Operation & Maintenance", link: "/electricity-operation-maintenance" },
      ],
    },
    {
      name: "Health and Safety Management",
      subcategories: [
        { name: "Health & Safety Training Courses", link: "/health-safety-training" },
        { name: "Public Health & Hospital Management Courses", link: "/public-health-hospital-management" },
      ],
    },
    {
      name: "Engineering, Maintenance and Operation",
      subcategories: [
        { name: "Training Courses in Engineering Maintenance", link: "/training-engineering-maintenance" },
        { name: "Engineering Management", link: "/engineering-management" },
      ],
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 text-black">
      
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        <h1 className=' text-red-700 text-lg text-center'>Master Categories</h1>
        {categories.map((category, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleCategory(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span>{category.name}</span>
              </div>
              <span>{expandedCategory === index ? '-' : '+'}</span>
            </button>
            {expandedCategory === index && category.subcategories.length > 0 && (
              <div className="p-4 text-sm text-gray-600">
                <ul className="list-disc pl-6">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="flex items-center gap-3 mb-2 mt-3">
                      {/* Removed the image */}
                      <Link href={subcategory.link} className="text-black ">
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masters;
