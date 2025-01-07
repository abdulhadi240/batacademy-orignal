import React from "react";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";

export default function Cites({params}) {
  // Only 7 cities for demo
  const cities = [
    {
      name: "London",
      image: "https://batdacademy.com/uploads/158091293255425108.webp",
      url: "/Training-Course-in-London",
    },
    {
      name: "Manchester",
      image: "https://batdacademy.com/uploads/1514020413%D9%85%D8%A7%D9%86%D8%B4%D8%B3%D8%AA%D8%B1.webp",
      url: "/Training-Course-in-Manchester",
    },
    {
      name: "Geneva",
      image: "https://batdacademy.com/uploads/1514020439%D8%AC%D9%86%D9%8A%D9%81.webp",
      url: "/Training-Course-in-Geneva",
    },
    {
      name: "Zurich",
      image: "https://batdacademy.com/uploads/1514020439%D8%AC%D9%86%D9%8A%D9%81.webp",
      url: "/Training-Course-in-Z%C3%BCrich",
    },
    {
      name: "Singapore",
      image: "https://batdacademy.com/uploads/1514020527%D8%B3%D9%86%D8%BA%D8%A7%D9%81%D9%88%D8%B1%D8%A9.webp",
      url: "/Training-Course-in-Singapore",
    },
    {
      name: "Tokyo",
      image: "https://batdacademy.com/uploads/1514020623%D8%B7%D9%88%D9%83%D9%8A%D9%88.webp",
      url: "/Training-Course-in-Tokyo",
    },
    {
      name: "New York",
      image: "https://batdacademy.com/uploads/1514020658%D9%86%D9%8A%D9%88%D9%8A%D9%88%D8%B1%D9%83.webp",
      url: "/Training-Course-in-New%20York",
    },
    {
      name: "New York",
      image: "https://batdacademy.com/uploads/1514020658%D9%86%D9%8A%D9%88%D9%8A%D9%88%D8%B1%D9%83.webp",
      url: "/Training-Course-in-New%20York",
    },
  ];

  return (
    <>
      {/* Header (remove if not needed) */}
      <HeaderSection params={params.locale}/>

      <div className="bg-white py-8 px-4">
        <h2 className="text-center text-2xl font-bold text-red-500">
          COURSES BY CITY
        </h2>
        <p className="text-center text-gray-600 mt-2">
          OUR FAVORITE CITIES WITH ATTRACTIVE ATTRACTIONS
        </p>

        {/* Grid of Cities */}
        <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 mt-8 w-full justify-center">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative group shadow-lg overflow-hidden w-[267px] h-[180px]"
            >
              {/* City Image */}
              <img
                src={city.image}
                alt={city.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />

              {/* The "frame": an absolute-positioned bordered div inside the image */}
              <div className="absolute inset-2 border-[1px] border-white pointer-events-none" />

              {/* Dark overlay + centered text/link */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                <Link href={city.url} legacyBehavior>
                  <a className="text-white border border-white text-xs bg-[#0b151e] p-2 tracking-wide hover:underline">
                    {city.name.toUpperCase()}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
