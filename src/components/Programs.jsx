"use client";

import Courses_List from "./Courses_List";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Content_extend from "./Content_extend";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Programs = ({ SpecializationCategory, params, data, category, city, specialization, coursesUrl }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params;

  const scrollToY = (targetY = 100, duration = 800) => {
    const start = window.scrollY;
    const startTime = performance.now();
    const change = targetY - start;
  
    // Ease in/out function (quadratic)
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  
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
  
  const [coursedata, setCourseData] = useState(data); // Full API response
  // Courses are nested under data.data; adjust according to the API structure.
  const [filteredCourses, setFilteredCourses] = useState(data?.data?.data || []); // Filtered courses array
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || ""); // Search input
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get("language") || "");
  const [selectedMonth, setSelectedMonth] = useState(searchParams.get("month") || "");
  const [selectedYear, setSelectedYear] = useState(searchParams.get("year") || "");
  const [selectedSpecialization, setSelectedSpecialization] = useState(searchParams.get("specialization") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "");
  const [page, setPage] = useState(1);
  console.log(SpecializationCategory);
  
  // Update URL search params
  const updateSearchParams = (key, value) => {
    const currentParams = new URLSearchParams(searchParams);
    if (value) {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const fetchData = async () => {
      // Build query string dynamically, excluding empty parameters
      const paramsObj = {
        year: selectedYear,
        specialization_id: selectedSpecialization,
        category_id: selectedCategory,
        city: selectedCity,
        language: selectedLanguage,
        month: selectedMonth,
        page: page, // Include page parameter for pagination
        language:params
      };

      // Create query string by filtering out empty parameters
      const query = new URLSearchParams(
        Object.entries(paramsObj).filter(([_, value]) => value)
      ).toString();

      try {
        const response = await fetch(
          `https://batd.website12.help/api/search/course?${query}&type=${coursesUrl}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": `${params}` ,
            },
          }
        );
        const result = await response.json();
        setCourseData(result);
        // Update filteredCourses to point to the actual courses array
        setFilteredCourses(result?.data?.data || []);
        console.log("Fetched Data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    selectedYear,
    selectedSpecialization,
    selectedCategory,
    selectedCity,
    selectedLanguage,
    selectedMonth,
    page,
  ]);

  useEffect(() => {
    if (!searchInput) {
      // Reset to full courses array if input is empty
      setFilteredCourses(coursedata?.data?.data || []);
    } else {
      // Filter courses using course.name (not course.title)
      const filtered = coursedata?.data?.data?.filter((course) =>
        course.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchInput, coursedata]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = coursedata?.data?.data?.filter((course) =>
        course.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const isArabic = params === "ar";
  const searchPlaceholder = isArabic ? "ابحث في دورة معينة" : "Search in specific course";
  const monthText = isArabic ? "الشهر" : "Month";
  const yearText = isArabic ? "السنة" : "Year";
  const specializationText = isArabic ? "التخصص" : "Specialization";
  const categoryText = isArabic ? "الفئة" : "Category";
  const cityText = isArabic ? "المدينة" : "City";
  const searchButtonText = isArabic ? "بحث" : "Search";

  return (
    <div>
      <div className="relative flex items-center justify-center bg-white">
        {/* Background Image */}
        <div className="inset-0 h-72 md:h-96">
          <Image
            src="/search_course.webp"
            alt="Background"
            layout="fill"
            priority
            objectFit="cover"
            className="opacity-70"
          />
        </div>

        {/* Overlay Content */}
        <div className="z-30 flex items-center justify-center w-full max-w-4xl p-6 rounded-lg" dir={isArabic ? "rtl" : "ltr"}>
          <div className="flex flex-col justify-center gap-2 text-black bg-transparent w-full">
            {/* Search Input */}
            <div className="flex justify-between p-1 bg-white rounded-md md:p-3">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchInput}
                onKeyDown={handleSearch}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-md md:text-base placeholder:text-sm focus:outline-none focus:ring-0"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-1 text-sm text-white transition-colors rounded-md md:text-base md:px-6 md:py-2 bg-primary hover:bg-primary/80"
              >
                {searchButtonText}
              </button>
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <select
                value={selectedMonth}
                onChange={(e) => {
                  setSelectedMonth(e.target.value);
                  updateSearchParams("month", e.target.value);
                }}
                className="w-32 px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{monthText}</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option key={index} value={`0${index + 1}`}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  updateSearchParams("year", e.target.value);
                }}
                className="w-32 px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{yearText}</option>
                {[2025, 2026, 2027].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={selectedSpecialization}
                onChange={(e) => {
                  setSelectedSpecialization(e.target.value);
                  updateSearchParams("specialization", e.target.value);
                }}
                className="w-32 sm:w-44 px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{specializationText}</option>
                {specialization?.data?.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  updateSearchParams("category", e.target.value);
                }}
                className="w-32 sm:w-44 px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{categoryText}</option>
                {category?.data?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  updateSearchParams("city", e.target.value);
                }}
                className="w-32 sm:w-44 px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{cityText}</option>
                {city?.data?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <Content_extend categories={SpecializationCategory} params={params}>
        <div className="px-5 mt-4">
          <Courses_List courses={filteredCourses} locale={params} />
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setPage(page - 1)
          scrollToY(400, 800)
        }}
        disabled={!coursedata?.data?.prev_page_url || page === 1}        className="h-9 w-9 rounded-full"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
        <span>
          Page <span className="font-bold">{coursedata?.data?.current_page}</span> of <span className="font-bold">{coursedata?.data?.last_page}</span>
        </span>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setPage(page + 1)
          scrollToY(400, 800)
        }}
        disabled={!coursedata?.data?.next_page_url || page === coursedata?.data?.last_page}        className="h-9 w-9 rounded-full"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>

        <div className="flex flex-col gap-2 mt-10" dir={params === "ar" ? "rtl" : "ltr"}>
          <h1 className="flex items-center justify-center p-1 text-2xl font-bold text-center md:p-0">
            {params === "ar"
              ? "برامج الميني ماسترز في الإدارة"
              : "Mini Masters Programmes In Management"}
          </h1>
          <p className="mb-4 text-base text-center md:text-start">
            {params === "ar"
              ? "نقدم دورات قصيرة وبرامج ماستر مصغرة مختلفة عبر (غير أكاديمي) فروعنا في أوروبا. ستساعدك الدورة على تحسين خبرتك المهنية وتقديم دعم أكبر لسيرتك الذاتية."
              : "We offer different short and mini master courses across (Non-Academic) our branches in Europe. Course will help you improve your professional experience and give you more support to your CV."}
          </p>
        </div>
      </Content_extend>
    </div>
  );
};

export default Programs;
