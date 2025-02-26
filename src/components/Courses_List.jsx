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
import { Button } from "@/components/ui/button";

const dummyCourses = [
  {
    name: "UI/UX Masterclass",
    dates: ["March 10, 2025", "April 15, 2025"],
    cities: ["New York", "Los Angeles"],
    price: "$299",
  },
  {
    name: "Advanced UX Strategies",
    dates: ["March 20, 2025", "May 5, 2025"],
    cities: ["Chicago", "San Francisco"],
    price: "$349",
  },
];

export default function CoursesList() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
        <Table className="w-full text-base text-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-primary">
              <TableHead className="font-bold text-black p-4">Course Title</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Date</TableHead>
              <TableHead className="font-bold text-black text-center p-4">City</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Price</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyCourses.map((course, index) => (
              <TableRow
                key={index}
                className="border-b border-gray-200 hover:bg-[#f0f5fc] transition-colors"
              >
                <TableCell className="font-medium p-4">{course.name}</TableCell>
                <TableCell className="p-4 text-center">
                  <Popover>
                    <PopoverTrigger className="text-gray-500 hover:text-primary">
                      Select Date
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2 border shadow-md rounded-md">
                      {course.dates.map((date, idx) => (
                        <div key={idx} className="p-2 hover:bg-gray-100 cursor-pointer">
                          {date}
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Popover>
                    <PopoverTrigger className="text-gray-500 hover:text-primary">
                      Select City
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2 border shadow-md rounded-md">
                      {course.cities.map((city, idx) => (
                        <div key={idx} className="p-2 hover:bg-gray-100 cursor-pointer">
                          {city}
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="p-4 text-center font-semibold">{course.price}</TableCell>
                <TableCell className="p-4 text-center">
                  <Button className="bg-primary text-white px-4 py-2 rounded-md">
                    Register
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
