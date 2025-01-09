"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const courses = [
    {
      title: "Leading With Analysis",
      dates: [
        { date: "13 Jan 2025", venue: "Amsterdam", fee: 5950 },
        { date: "20 Mar 2025", venue: "Dubai", fee: 5950 },
        { date: "15 May 2025", venue: "London", fee: 5950 },
      ],
    },
    {
      title: "Leading with Critical Thinking, Creativity and Innovation",
      dates: [
        { date: "13 Jan 2025", venue: "Dubai", fee: 5950 },
        { date: "15 Apr 2025", venue: "London", fee: 5950 },
        { date: "10 Jul 2025", venue: "Amsterdam", fee: 5950 },
      ],
    },
    {
      title: "Managing Conflict, Decision Making & Empowerment",
      dates: [
        { date: "13 Jan 2025", venue: "London", fee: 5950 },
        { date: "10 May 2025", venue: "Amsterdam", fee: 5950 },
        { date: "20 Sep 2025", venue: "Dubai", fee: 5950 },
      ],
    },
    {
      title: "Mastering the Art of Presence & Influence",
      dates: [
        { date: "13 Jan 2025", venue: "Dubai", fee: 5950 },
        { date: "22 Jun 2025", venue: "London", fee: 5950 },
        { date: "18 Nov 2025", venue: "Amsterdam", fee: 5950 },
      ],
    },
    {
      title: "Agile Practices for Organisational Excellence and Sustainability",
      dates: [
        { date: "20 Jan 2025", venue: "London", fee: 11900 },
        { date: "15 Aug 2025", venue: "Dubai", fee: 11900 },
        { date: "10 Dec 2025", venue: "Amsterdam", fee: 11900 },
      ],
    },
    {
      title: "Building Your Personal Brand",
      dates: [
        { date: "20 Jan 2025", venue: "Amsterdam", fee: 5950 },
        { date: "05 Jul 2025", venue: "London", fee: 5950 },
        { date: "25 Oct 2025", venue: "Dubai", fee: 5950 },
      ],
    },
  ];

/**
 * CourseCard Component for Mobile View
 */
function CourseCard({ course }) {
  const [selectedDateIndex, setSelectedDateIndex] = React.useState(0);

  const handleDateSelect = (index) => {
    setSelectedDateIndex(index);
  };

  const selectedDate = course.dates[selectedDateIndex];

  return (
    <Card className="shadow-lg rounded-lg group hover:bg-[#f0f5fc] transition-colors">
      <CardContent className="p-4 flex flex-col">
        <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-primary">
          {course.title}
        </h3>
        <div className="flex items-center justify-start gap-4 text-sm text-gray-600">
          {/* Dropdown for Date */}
          <Popover>
            <PopoverTrigger className="cursor-pointer inline-flex items-center space-x-1 hover:text-primary">
              <span>{selectedDate.date}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 border border-gray-200 shadow-md rounded-md">
              <div className="space-y-1">
                {course.dates.map((date, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateSelect(index)}
                    className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors ${
                      index === selectedDateIndex ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {date.date}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Dropdown for Venue */}
          <Popover>
            <PopoverTrigger className="cursor-pointer inline-flex items-center space-x-1 hover:text-blue-500">
              <span>{selectedDate.venue}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 border border-gray-200 shadow-md rounded-md">
              <div className="space-y-1">
                {course.dates.map((date, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateSelect(index)}
                    className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors ${
                      index === selectedDateIndex ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {date.venue}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-right text-sm text-gray-800">
          ${selectedDate.fee.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Courses_List() {
  const [selectedIndexes, setSelectedIndexes] = React.useState(
    courses.map(() => 0)
  );

  const handleSelect = (courseIndex, dateIndex) => {
    const updatedIndexes = [...selectedIndexes];
    updatedIndexes[courseIndex] = dateIndex;
    setSelectedIndexes(updatedIndexes);
  };

  return (
    <div className="w-full">
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
          <Table className="w-full text-base text-gray-700">
            <TableHeader>
              <TableRow className="border-b-2 border-primary">
                <TableHead className="font-bold text-black p-4">
                  Course Title
                </TableHead>
                <TableHead className="font-bold text-black text-center p-4">
                  Date
                </TableHead>
                <TableHead className="font-bold text-black text-center p-4">
                  Venue
                </TableHead>
                <TableHead className="font-bold text-black text-center p-4">
                  Fee
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course, courseIndex) => {
                const selectedIndex = selectedIndexes[courseIndex];
                const selectedDate = course.dates[selectedIndex];
                return (
                  <TableRow
                    key={courseIndex}
                    className="border-b border-gray-200 hover:bg-[#f0f5fc] transition-colors"
                  >
                    <TableCell className="font-medium p-4 hover:underline hover:text-primary">
                      <Link href={'/'}>{course.title}</Link>
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <Popover>
                        <PopoverTrigger className="cursor-pointer inline-flex items-center space-x-1 hover:text-primary">
                          <span>{selectedDate.date}</span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2 border border-gray-200 shadow-md rounded-md">
                          <div className="space-y-1">
                            {course.dates.map((date, index) => (
                              <div
                                key={index}
                                onClick={() =>
                                  handleSelect(courseIndex, index)
                                }
                                className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors ${
                                  index === selectedIndex
                                    ? "bg-gray-100 font-medium"
                                    : ""
                                }`}
                              >
                                {date.date}
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell className="p-4 text-center">
                      <Popover>
                        <PopoverTrigger className="cursor-pointer inline-flex items-center space-x-1 hover:text-primary">
                          <span>{selectedDate.venue}</span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2 border border-gray-200 shadow-md rounded-md">
                          <div className="space-y-1">
                            {course.dates.map((date, index) => (
                              <div
                                key={index}
                                onClick={() =>
                                  handleSelect(courseIndex, index)
                                }
                                className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors ${
                                  index === selectedIndex
                                    ? "bg-gray-100 font-medium"
                                    : ""
                                }`}
                              >
                                {date.venue}
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell className="p-4 text-right">
                      ${selectedDate.fee.toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile view */}
      <div className="space-y-4 md:hidden mt-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
