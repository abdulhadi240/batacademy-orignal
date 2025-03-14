import Image from "next/image";
import React from "react";
import Course_card from "./Course_card";
import Link from "next/link";

const Features_detail = ({ image, number, heading, text , data}) => {
  return (
    <div className="mt-16 overflow-hidden">
      <div className="flex flex-col justify-center mx-5 sm:mx-10 sm:gap-32 sm:flex-row">
        {/* Left side with Image */}
        <div className="relative w-full max-w-sm">
      <div className="overflow-hidden">
        <Image
          src={image}// Replace with the actual image path
          alt="Team Collaboration"
          width={400}
          height={400}
          priority
          className=""
        />
      </div>
    </div>
        {/* Right side with content */}
        <div className="flex flex-col max-w-[600px] gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-4xl">{number}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{heading}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="container p-4 mx-auto">
      <div className="space-y-8">
        {/* Summary Section */}
        <section className="p-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold">Summary</h2>
          <p className="text-gray-700 dark:text-white">
            {data.summary}
          </p>
        </section>

        {/* Objectives and Target Group */}
        <section className="px-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold dark:text-white">Objectives And Target Group</h2>
          <p className="text-gray-700 dark:text-white">
            {data.objectives_target_group}
          </p>
        </section>

        {/* Course Content */}
        <section className="px-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold dark:text-white">Course Content</h2>
          <p className="mb-4 text-gray-700 dark:text-white">
            {data.content}
          </p>
        </section>
        <div className='border-[1px] w-full border-dashed'/> 
      </div>

    </div>
    </div>
  );
};

export default Features_detail;
