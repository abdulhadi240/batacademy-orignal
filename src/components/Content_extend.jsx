"use client";
import React, { useState } from "react";
import { TiWorld } from "react-icons/ti";
import { cn } from "@/lib/utils";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Content_extend = ({ children, categories, params }) => {
  const [openIndex, setOpenIndex] = useState(null); // Use null for no dropdown initially open
  const [category, setCategory] = useState(categories);
  const router = useRouter();
  
  const handleToggle = (index) => {
    // Toggle the specific dropdown; if already open, close it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center md:justify-normal">
      <div className="md:p-4 md:block hidden md:w-auto">
        <div className="w-full md:w-64 h-auto p-3 shadow-md">
          <h1 className={`mb-4 text-sm ${params === 'en' ? '' : 'text-end '}`}>{params === 'en' ? 'All Category' : 'جميع الفئات'}</h1>
          {category?.map((item, index) => {
            return (
              index > 0 && (
                <div key={index} className="mb-2">
                  <div
                    className={cn(
                      "flex items-center justify-between px-4 w-full h-10 cursor-pointer transition-all duration-300",
                      openIndex === index ? "bg-secondary text-white" : "bg-transparent"
                    )}
                    onClick={() => handleToggle(index)} // Handle toggle for this index
                  >
                    <div className="flex items-center gap-4">
                      <div className="icon">
                        <BiCategory size={20} />
                      </div>
                      <div className="text-xs font-semibold name line-clamp-2">{item.name}</div>
                    </div>
                    <div className="icon">
                      {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden transition-max-height duration-500 ease-in-out",
                      openIndex === index ? "max-h-screen" : "max-h-0"
                    )}
                  >
                    {openIndex === index && (
                      <div className="mt-2 ml-8">
                        {item.specialization?.map((data, i) => {
                          return (
                            <Link href={`/${params}/search_course?type=1&specialization=${data.id}&category=${item.id}`}
                              
                              key={i}
                              className="flex gap-2 hover:bg-secondary cursor-pointer p-2 hover:text-white items-center mb-2 text-xs"
                            >
                              <FaRegBookmark />
                              {data.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>

      <div className="w-full sm:w-auto">{children}</div>
    </div>
  );
};

export default Content_extend;