"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Dates = () => {
  const router = useRouter();
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const summary = {
    slug: "dummy-course",
    available_dates: [
      { date: "2025-01-15" },
      { date: "2025-01-20" },
      { date: "2025-01-25" },
      { date: "2025-02-01" },
      { date: "2025-01-20" },
      { date: null },
    ],
    available_cities: [
      { name: "New York" },
      { name: "Los Angeles" },
      { name: "Chicago" },
      { name: "Houston" },
    ],
  };

  const [selectedCities, setSelectedCities] = useState(
    Array(summary.available_dates.length).fill("")
  );

  const handleCityChange = (index, value) => {
    const updatedCities = [...selectedCities];
    updatedCities[index] = value;
    setSelectedCities(updatedCities);
  };

  const handleRegister = (date, city, index) => {
    if (!city) {
      alert("Please select a city first!");
      return;
    }
    setLoadingIndex(index); // Set the loading state
    setTimeout(() => {
      router.push(`/register?course=${summary.slug}&date=${date}&city=${city}`);
    }, 1000); // Simulate a short delay for the loader
  };

  return (
    <>
      <div className="flex justify-center md:max-w-[840px] my-6">
        <div className="flex md:justify-start justify-center">
          <div className="flex flex-wrap md:justify-start justify-center gap-4 mt-6">
            {summary?.available_dates.map((item, index) =>
              item.date == null ? (
                <Popover open={open} onOpenChange={setOpen} key={index}>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        "md:mx-3 md:w-56 w-48 h-auto p-2 sm:p-0 md:ml-3 flex flex-col items-center text-center justify-center gap-3 rounded-md border-2 border-dotted cursor-pointer",
                        "hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                      )}
                    >
                      <div className="w-8 h-8 rounded-full border border-dashed border-primary/50 flex items-center justify-center">
                        <Plus className="w-4 h-4 text-primary/70" />
                      </div>
                      <span className="text-sm text-primary/70">
                        {date ? date.toLocaleDateString() : "Add a new date"}
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      className="text-black"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setOpen(false);
                      }}
                      initialFocus
                      styles={{
                        day: {
                          selected: 'bg-primary text-white font-bold', // Apply white text and other styling for the selected day
                        },
                        today: 'text-primary font-semibold', // Optional: Add styles for today's date
                      }}
                    />
                  </PopoverContent>
                </Popover>
              ) : (
                <div
                  key={index}
                  className="h-auto px-2 py-4 md:mx-3 max-w-52 md:max-w-72 flex flex-col gap-3 rounded-md bg-[#e2f0ff]"
                >
                  <div className="flex items-center gap-2">
                    <BiCalendarEvent />
                    <h1 className="text-sm text-primary">{item.date}</h1>
                  </div>
                  <div className="flex gap-2 button">
                    <div>
                      <select
                        name="place"
                        className="px-2 md:text-sm max-w-24 text-xs md:max-w-32 rounded-md h-9 bg-white"
                        value={selectedCities[index]}
                        onChange={(e) =>
                          handleCityChange(index, e.target.value)
                        }
                      >
                        <option value="">Select City</option>
                        {summary.available_cities.map((city, i) => (
                          <option key={i} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() =>
                        handleRegister(item.date, selectedCities[index], index)
                      }
                      className="px-4 text-sm max-w-20 md:max-w-32 text-center text-white rounded-md items-center flex bg-primary"
                    >
                      {loadingIndex === index ? (
                        <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </div>
              )
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
