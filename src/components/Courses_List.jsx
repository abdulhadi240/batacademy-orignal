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

export default function CoursesList({ courses, locale }) {
  const isArabic = locale === "ar";
  
  // Define static texts based on locale
  const selectDateText = isArabic ? "اختر التاريخ" : "Select Date";
  const dateText = isArabic ? "التاريخ:" : "Date:";
  const priceText = isArabic ? "السعر:" : "Price:";
  const detailsText = isArabic ? "تفاصيل" : "Details";
  const registerText = isArabic ? "تسجيل" : "Register";
  const courseTitleText = isArabic ? "عنوان الدورة" : "Course Title";
  const actionText = isArabic ? "الإجراء" : "Action";

  const [selectedOptions, setSelectedOptions] = React.useState(
    courses.map(() => ({ date: "", city: null }))
  );

  const handleSelectDate = (courseIndex, date) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[courseIndex].date = date;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="w-full" dir={isArabic ? "rtl" : "ltr"}>
      {/* Desktop Table View */}
      <div className="overflow-x-auto bg-white shadow-sm rounded-lg hidden md:block">
        <Table className="w-full text-base text-gray-700">
          <TableHeader>
            <TableRow className="border-b-2 border-primary">
              <TableHead className={`font-bold ${isArabic ? 'text-start' : ''} text-black p-4`}>
                {courseTitleText}
              </TableHead>
              <TableHead className="font-bold text-black text-center p-4">
                {dateText.replace(":", "")}
              </TableHead>
              <TableHead className="font-bold text-black text-center p-4">
                {priceText.replace(":", "")}
              </TableHead>
              <TableHead className="font-bold text-black text-center p-4">
                {actionText}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow
                key={index}
                className="border-b text-sm border-gray-200 hover:bg-[#f0f5fc] transition-colors"
              >
                <TableCell className="font-medium p-4 w-96">
                  <Link
                    href={`/${locale}/course_details/${course.id}/${course.slug}`}
                  >
                    {course.name}
                  </Link>
                </TableCell>
                {/* Date Cell */}
                <TableCell className="p-4 text-center">
                  <Popover>
                    <PopoverTrigger className="text-gray-500 hover:text-primary">
                      {selectedOptions[index]?.date || selectDateText}
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2 border shadow-md rounded-md">
                      {course?.dates?.map((dateObj, idx) => (
                        <div
                          key={idx}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleSelectDate(index, dateObj.course_date)
                          }
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

                {/* Action Cell */}
                <TableCell className="p-4 text-center flex justify-center gap-2">
                  <Link
                    href={`/${locale}/course_details/${course.id}/${course.slug}`}
                  >
                    <Button className="bg-secondary text-white px-4 py-2 rounded-md w-full">
                      {detailsText}
                    </Button>
                  </Link>
                  <Link
                    href={`/register?course=${course.slug}&date=${selectedOptions[index]?.date}`}
                  >
                    <Button className="bg-primary text-white px-4 py-2 rounded-md">
                      {registerText}
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="w-full block md:hidden space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="w-full bg-white shadow rounded-md p-4">
            <div className="mb-2 w-full">
              <Link
                href={`/${locale}/course_details/${course.id}/${course.slug}`}
              >
                <h3 className="mb-4 text-black text-base w-full">
                  {course.name}
                </h3>
              </Link>
            </div>
            {/* Flex container for Date and Price */}
            <div className="mb-4 flex justify-between items-center w-full">
              <div className="flex items-center">
                <span className="font-medium mr-1">{dateText}</span>
                <Popover>
                  <PopoverTrigger className="text-gray-500 hover:text-primary">
                    {selectedOptions[index]?.date || selectDateText}
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-2 border shadow-md rounded-md">
                    {course?.dates?.map((dateObj, idx) => (
                      <div
                        key={idx}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          handleSelectDate(index, dateObj.course_date)
                        }
                      >
                        {dateObj.course_date}
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">{priceText}</span>
                <span className="font-semibold">£ {course.price}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Link
                href={`/${locale}/course_details/${course.id}/${course.slug}`}
              >
                <Button className="bg-secondary text-white py-2 rounded-md w-full">
                  {detailsText}
                </Button>
              </Link>
              <Link
                href={`/${locale}/register?course=${course.slug}&date=${selectedOptions[index]?.date}`}
              >
                <Button className="bg-primary text-white py-2 rounded-md w-full">
                  {registerText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
