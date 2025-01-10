'use client';

import React, { useState, useEffect } from 'react';

const publicationsData = {
  blog: [
    {
      title: 'Innovation in Business: Importance, Benefits, and Skills',
      content:
        'In the contemporary market scenario, which is highly competitive, developing a thoughtful strategy is only part of the challenge. The distinguishing factor is the capacity to assess and modify that strategy over time. Even in the context of achieving set objectives and promoting steady growth, the assessment of business strategies is crucial. Hence, the focus of this article will be on the primary techniques and tools that are used for the efficient evaluation of business strategies. Understanding Business Strategy Evaluation The evaluation of business strategy is the evaluative...',
      image: '/123.png',
    },
  ],
  'academy news': [
    {
      title: 'Certified Accounting and Finance Courses in Riyadh',
      content:
        'The British Academy for Training is thrilled to bring its prestigious certified accounting and finance courses to Riyadh, one of the Middle East’s thriving business hubs. Through these courses, the British Academy seeks to contribute to the national transformation initiatives...',
      image: '/123.png',
    },
  ],
  advertisement: [
    {
      title: 'Contract Management, Legal Disputes Courses in London',
      content:
        'The British Academy for Training is thrilled to bring its prestigious certified accounting and finance courses to Riyadh, one of the Middle East’s thriving business hubs. Through these courses, the British Academy seeks to contribute to the national transformation initiatives...',
      image: '/123.png',
    },
  ],
  careers: [
    {
      title: 'Remote Administrative and Customer Service Job Opportunity',
      content:
        'The British Academy for Training is thrilled to bring its prestigious certified accounting and finance courses to Riyadh, one of the Middle East’s thriving business hubs. Through these courses, the British Academy seeks to contribute to the national transformation initiatives... In today\'s digital age, remote work has become an increasingly popular option for companies looking to expand their teams. Among the many roles that are highly suited for remote work is the Administrative and Customer Service position...',
      image: '/123.png',
    },
  ],
  video: [
    {
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your actual YouTube video URL
    },
  ],
};

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('blog');

  useEffect(() => {
    const categories = Object.keys(publicationsData);
    let index = categories.indexOf(selectedCategory);

    const interval = setInterval(() => {
      index = (index + 1) % categories.length; // Loop through the sections
      setSelectedCategory(categories[index]);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedCategory]);

  return (
    <div className="md:px-32 px-4 mt-4">
      <div className="flex flex-wrap justify-center gap-4 md:mb-8">
        {Object.keys(publicationsData).map((category) => (
          <button
            key={category}
            className={`px-4 py-1 text-sm md:text-sm rounded-md ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 mt-10"
            style={{
              transform: `translateX(-${
                Object.keys(publicationsData).indexOf(selectedCategory) * 100
              }%)`,
            }}
          >
            {Object.entries(publicationsData).map(([category, items]) => (
              <div key={category} className="flex flex-col min-w-full space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row bg-white  rounded-lg gap-6"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:w-2/5 rounded-md object-cover"
                      />
                    )}
                    {item.video && (
                      <iframe
                        src={item.video}
                        className="w-full md:w-full rounded-md"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                      {item.content && (
                        <p className="text-gray-600 tracking-wider">{item.content}</p>
                      )}
                     
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
