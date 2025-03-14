"use client";

import React, { useState, useEffect } from "react";
import fetchData from "@/actions/server";
import CityCard from "@/components/CityCard";
import HeaderSection from "@/components/HeaderSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CitiesPage = ({ params , data}) => {
  const isArabic = params.locale === "ar";
  const [cities, setCities] = useState(data);
  const [page, setPage] = useState(1);

  // Function to smoothly scroll to Y position 400 over 800ms
  const scrollToY = (targetY = 50, duration = 800) => {
    const start = window.scrollY;
    const startTime = performance.now();
    const change = targetY - start;
    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, start + change * easedProgress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Fetch cities data when the page or locale changes
  useEffect(() => {
    const fetchCities = async () => {
      const data = await fetchData(`/city?page=${page}`, params.locale);
      setCities(data);
    };
    fetchCities();
  }, [page, params.locale]);

  // If cities data hasn't loaded yet, show a loading indicator
  if (!cities) {
    return <div className="p-8 text-center"></div>;
  }

  // Pagination handlers that update the page state and scroll to Y=400
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      scrollToY(400, 800);
    }
  };

  const handleNext = () => {
    if (page < cities.last_page) {
      setPage(page + 1);
      scrollToY(400, 800);
    }
  };

  return (
    <div>
      <HeaderSection params={params.locale} />

      <div className={`py-8 ${isArabic ? "rtl" : "ltr"}`}>
        <h1 className="text-secondary font-bold uppercase text-2xl text-center flex justify-center">
          {isArabic ? "الدورات حسب المدينة" : "Courses by city"}
        </h1>
        <p className="flex justify-center w-full text-center uppercase text-black/80 text-xs mt-3">
          {isArabic
            ? "مدننا المفضلة مع المعالم الجذابة"
            : "Our favorite cities with attractive attractions"}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cities.data.map((city, index) => (
          <CityCard cities={city} key={index} />
        ))}
      </div>

      {/* Pagination UI */}
      <div className="flex items-center justify-center sm:justify-start gap-2 mt-8 sm:ml-6 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={page === 1}
          className="h-9 w-9 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
          <span>
            Page <span className="font-bold">{cities.current_page}</span> of{" "}
            <span className="font-bold">{cities.last_page}</span>
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={page === cities.last_page}
          className="h-9 w-9 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
};

export default CitiesPage;
