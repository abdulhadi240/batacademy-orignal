"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function ImageGallery() {
  const [selectedId, setSelectedId] = useState(null); // Track clicked image ID

  const images = [
    "/plan.webp", // Replace with actual image paths
    "/plan.webp",
    "/plan.webp",
  ];

  const handleImageClick = (id) => {
    setSelectedId(id === selectedId ? null : id); // Toggle selected image
  };

  return (
    <div className="grid grid-cols-3 gap-0 p-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className={`relative cursor-pointer overflow-hidden ${
            selectedId === index ? "col-span-3" : ""
          }`} // Make image span all columns when clicked
          onClick={() => handleImageClick(index)}
        >
          <motion.img
            src={src}
            alt={`Image ${index}`}
            className="h-64 w-full object-cover rounded-lg" // Ensures image takes full width of its container and removes gap
            initial={false}
            animate={{
              width: selectedId === index ? "100%" : "33%", // Expand width to full or 1/3
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGallery;
// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// const AccordionGallery = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null); // Track which image is expanded

//   const images = ['plan.webp', 'plan.webp', 'plan.webp']; // Image names

//   const handleExpand = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
//   };

//   return (
//     <div className="flex max-w-6xl h-[500px] mx-auto mt-20 space-x-4 overflow-hidden">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           onClick={() => handleExpand(index)} // Expand on click
//           className={`relative flex-1 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
//             expandedIndex === index ? 'flex-[4]' : 'flex-[1]'
//           }`}
//         >
//           <Image
//             src={`/images/${img}`} // Image path (public/images folder)
//             alt={`Image ${index + 1}`}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-xl transition-opacity duration-500 hover:opacity-70"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AccordionGallery;
