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
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesList({ courses , locale }) {
  const [selectedOptions, setSelectedOptions] = React.useState(
    courses.map(() => ({ date: '', city: null }))
  );

  const handleSelectDate = (courseIndex, date) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[courseIndex].date = date;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
        <Table className="w-full text-base text-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-primary">
              <TableHead className="font-bold text-black p-4">Course Title</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Date</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Price</TableHead>
              <TableHead className="font-bold text-black text-center p-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow
                key={index}
                className="border-b border-gray-200 hover:bg-[#f0f5fc] transition-colors"
              >
                <TableCell className="font-medium p-4 w-96">
                  <Link href={`/${locale}/course_details/${course.id}/${course.slug}`}>
                    {course.name}
                  </Link>
                </TableCell>
                {/* Date Cell */}
                <TableCell className="p-4 text-center">
                  <Popover>
                    <PopoverTrigger className="text-gray-500 hover:text-primary">
                      {selectedOptions[index]?.date || "Select Date"}
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2 border shadow-md rounded-md">
                      {course?.dates?.map((dateObj, idx) => (
                        <div
                          key={idx}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSelectDate(index, dateObj.course_date)}
                        >
                          {dateObj.course_date}
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>

                {/* Price Cell */}
                <TableCell className="p-4 text-center font-semibold">
                  £ {course.price}
                </TableCell>

                {/* Register Button */}
                <TableCell className="p-4 text-center">
                  <Link href={`/register?course=${course.slug}&date=${selectedOptions[index]?.date}`}>
                    <Button className="bg-primary text-white px-4 py-2 rounded-md">
                      Register
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
