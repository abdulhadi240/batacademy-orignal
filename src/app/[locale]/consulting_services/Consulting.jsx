"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";
import Filteration from "./components/Filteration";
import BlogCarousel from "@/components/BlogCarousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Consulting = ({ params , categorys , blogss , consultancys }) => {
  const { locale } = params;
  const isArabic = locale === "ar";

  const content = {
    title: isArabic ? "جميع خدمات الاستشارات" : "All Consulting Services",
    description: isArabic
      ? "اكتشف مجموعة واسعة من الخدمات الاستشارية المصممة خصيصًا لمساعدة الشركات على النمو والتطور. نحن نقدم خبرات متخصصة عبر مختلف الصناعات لضمان تحقيق أهدافك الاستراتيجية بكفاءة وفعالية."
      : "Explore a wide range of consulting services designed to help businesses grow and thrive. We offer specialized expertise across various industries to ensure your strategic goals are met efficiently and effectively.",
    aiTitle: isArabic ? "استشارات الذكاء الاصطناعي" : "Related Blogs",
    bannerTitle: isArabic
      ? "خدمات استشارية متخصصة لتطوير أعمالك"
      : "Specialized Consulting Services to Drive Your Business Forward",
  };

  // Client-side states for fetched data
  const [category, setCategory] = useState(categorys);
  const [blogs, setBlogs] = useState(blogss);
  // Consultancy services data is paginated
  const [consultancy, setConsultancy] = useState(consultancys);
  const [consultancyPage, setConsultancyPage] = useState(1);
  const [loadingConsultancy, setLoadingConsultancy] = useState(true);

  // Fetch static data (category & blogs) once on mount
  useEffect(() => {
    const fetchStaticData = async () => {
      const categoryData = await fetchData(`/consultancy`, locale);
      const blogsData = await fetchData(`/post?page=12`, locale);
      setCategory(categoryData);
      setBlogs(blogsData);
    };
    fetchStaticData();
  }, [locale]);

  // Fetch consultancy services data with pagination
  useEffect(() => {
    const fetchConsultancy = async () => {
      setLoadingConsultancy(true);
      const consultancyData = await fetchData(
        `/consultancy-services?page=${consultancyPage}`,
        locale
      );
      setConsultancy(consultancyData);
      setLoadingConsultancy(false);
    };
    fetchConsultancy();
  }, [consultancyPage, locale]);

  // Smooth scroll function to scroll to top (or any desired Y position)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Display loading indicator until all data is loaded
  if (!category || !blogs || !consultancy) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  // Pagination handlers for consultancy services
  const handleConsultancyPrev = () => {
    if (consultancyPage > 1) {
      setConsultancyPage(consultancyPage - 1);
      scrollToTop();
    }
  };

  const handleConsultancyNext = () => {
    if (consultancyPage < consultancy.last_page) {
      setConsultancyPage(consultancyPage + 1);
      scrollToTop();
    }
  };

  return (
    <div className={`${isArabic ? "text-right" : "text-left"}`}>
      <HeaderSection params={locale} />

      <div className="overflow-hidden">
        <div className="banner-container">
          <div className="relative flex items-center justify-center h-32 banner sm:h-64">
            <Image
              src="/consulting.webp"
              alt="banner"
              fill
              priority
              className="object-cover"
            />
            <h1 className="absolute max-w-2xl p-4 font-bold text-center text-white text-ms sm:text-xl md:text-3xl">
              {content.bannerTitle}
            </h1>
          </div>
        </div>
      </div>

      <head>
        <title>{content.title}</title>
      </head>

      <div className="min-h-screen px-4 py-12 bg-gray-100">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-2xl md:text-4xl">{content.title}</h1>
          <p className="text-gray-600 max-w-3xl text-xs md:text-base mx-auto">
            {content.description}
          </p>
        </div>

        {/* Filter Bar with Consultancy Services Data */}
        <Filteration category={category} data={consultancy} params={locale} />

        {/* Pagination UI for Consultancy Services */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-8 md:ml-6 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handleConsultancyPrev}
            disabled={consultancyPage === 1}
            className="h-9 w-9 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
            <span>
              Page <span className="font-bold">{consultancy.current_page}</span> of{" "}
              <span className="font-bold">{consultancy.last_page}</span>
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleConsultancyNext}
            disabled={consultancyPage === consultancy.last_page}
            className="h-9 w-9 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>

      {/* Blog Carousel remains below */}
      <div className="flex flex-col justify-center gap-4 mt-10">
        <h1 className="flex justify-center md:justify-start md:px-8 text-3xl font-bold">
          {content.aiTitle}
        </h1>
        <BlogCarousel data={blogs.data} blog params={params.locale} />
      </div>
    </div>
  );
};

export default Consulting;
