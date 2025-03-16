"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiCalendarEvent } from "react-icons/bi";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Dates = ({ dates, locale, course }) => {
  const router = useRouter();
  const [customDate, setCustomDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [isCustomDateLoading, setIsCustomDateLoading] = useState(false);

  const handleRegister = (courseDate, index) => {
    setLoadingIndex(index);
    setTimeout(() => {
      router.push(`/${locale}/register?course=${course}&date=${courseDate}`);
    }, 1000);
  };


  const handleCustomDateRegister = () => {
    if (!customDate) return;

    setIsCustomDateLoading(true);

    const formattedDate = customDate.toISOString().split('T')[0];

    setTimeout(() => {
      router.push(`/${locale}/register?course=${course}&date=${formattedDate}`);
    }, 1000);
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format custom date for display
  const formatCustomDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="flex justify-center md:max-w-[840px] my-6">
        <div className="flex md:justify-start justify-center">
          <div className="flex flex-wrap md:justify-start justify-center gap-4 mt-6">
            {/* Check if dates array exists and has items */}
            {dates && dates?.length > 0 ? (
              dates?.map((item, index) => (
                <div
                  key={index}
                  className="h-auto px-4 py-4 md:mx-3 w-48 md:w-56 flex flex-col gap-3 rounded-md bg-[#e2f0ff]"
                >
                  <div className="flex items-center gap-2">
                    <BiCalendarEvent className="text-primary" />
                    <h1 className="text-sm text-primary">{formatDate(item.course_date)}</h1>
                  </div>
                  <div className="flex justify-center">
                    <Link href={`/${locale}/register?course=${course}&date=${item.course_date}`}
                      onClick={() => handleRegister(item.course_date, index)}
                      className="px-4 py-2 w-full text-sm text-white rounded-md items-center flex justify-center bg-primary hover:bg-primary/80"
                    >
                      {loadingIndex === index ? (
                        <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                      ) : (
                        "Register"
                      )}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                No scheduled dates available for this course. Please select a custom date below.
              </div>
            )}

            {/* Custom date selection */}
            {!customDate ? (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "md:mx-3 md:w-56 w-48 h-auto p-4 sm:p-4 md:ml-3 flex flex-col items-center text-center justify-center gap-3 rounded-md border-2 border-dotted cursor-pointer",
                      "hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                    )}
                  >
                    <div className="w-8 h-8 rounded-full border border-dashed border-primary/50 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-primary/70" />
                    </div>
                    <span className="text-sm text-primary/70">
                      Request Custom Date
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    className="text-black"
                    selected={customDate}
                    onSelect={(newDate) => {
                      setCustomDate(newDate);
                      setOpen(false);
                    }}
                    initialFocus
                    disabled={(date) => date < new Date()} // Disable past dates
                    styles={{
                      day: {
                        selected: 'bg-primary text-white font-bold',
                      },
                      today: 'text-primary font-semibold',
                    }}
                  />
                </PopoverContent>
              </Popover>
            ) : (
              // Display selected custom date with register button
              <div className="h-auto px-4 py-4 md:mx-3 w-48 md:w-56 flex flex-col gap-3 rounded-md bg-[#f0fff0]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BiCalendarEvent className="text-green-600" />
                    <h1 className="text-sm text-green-600">Custom Date</h1>
                  </div>
                  <button
                    onClick={() => setCustomDate(null)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm font-medium text-center">
                  {formatCustomDate(customDate)}
                </p>
                <div className="flex justify-center">
                  <Link href={`/${locale}/register?course=${course}&date=${customDate.toISOString().split('T')[0]}`}
                    onClick={handleCustomDateRegister}
                    className="px-4 py-2 w-full text-sm text-white rounded-md items-center flex justify-center bg-green-600 hover:bg-green-700"
                  >
                    {isCustomDateLoading ? (
                      <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    ) : (
                      "Register"
                    )}
                  </Link>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border-width: 2px;
        }
      `}</style>
    </>
  );
};

export default Dates;