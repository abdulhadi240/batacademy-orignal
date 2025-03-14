"use client";

import { useEffect, useState } from "react";
import fetchData from "@/actions/server";
import ArticleCard from "@/components/ArticleCard";
import HeaderSection from "@/components/HeaderSection";
import { Calendar, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure Button is correctly imported

export const revalidate = 60; // Revalidate data every 60 seconds
export const dynamicParams = true;

export default function Page({ params , article , categoryData }) {
  const locale = params.locale || "en";
  const isArabic = locale === "ar";

  const [articles, setArticles] = useState(article);
  const [category, setCategory] = useState(categoryData);
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState({ current_page: 1, last_page: 1 });

  useEffect(() => {
    const fetchContent = async () => {
      const articlesData = await fetchData(`/post?page=${page}`, locale);
      console.log(articlesData);
      

      setArticles(articlesData?.data || []);
      setPaginationData({
        current_page: articlesData?.current_page || 1,
        last_page: articlesData?.last_page || 1,
      });
    };
    fetchContent();
  }, [page, locale]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      scrollToY();
    }
  };

  const handleNext = () => {
    if (page < paginationData.last_page) {
      setPage((prev) => prev + 1);
      scrollToY();
    }
  };

  // Function to smoothly scroll to Y position
  const scrollToY = (targetY = 50, duration = 800) => {
    const start = window.scrollY;
    const startTime = performance.now();
    const change = targetY - start;
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

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <HeaderSection params={locale} />
      <main className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar with Categories */}
        <aside className="md:col-span-1 sticky top-10 h-screen overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold border-b border-gray-100 pb-3 mb-4">
              {isArabic ? "فئات" : "Category"}
            </h2>
            <nav className="space-y-3">
              {category.map((item, index) => (
                <Link
                  key={index}
                  href={`/${params.locale}/taxonomy/blog/${item.slug}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {articles.map((article, index) => (
            <div key={index} className="w-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {article.name}
                  </h1>
                  <div className="flex items-center text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <time dateTime="2024-10-07">{article.publish_date}</time>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="prose max-w-none">
                        <p className="text-gray-600">{article.description}</p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={`/${params.locale}/post/${article.slug}`}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
                        >
                          {isArabic ? "المزيد" : "More"}
                        </Link>
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.name}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

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
              <span className="sr-only">{isArabic ? "الصفحة السابقة" : "Previous page"}</span>
            </Button>

            <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
              <span>
                {isArabic ? "صفحة" : "Page"} <span className="font-bold">{paginationData.current_page}</span> {isArabic ? "من" : "of"}{" "}
                <span className="font-bold">{paginationData.last_page}</span>
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={page === paginationData.last_page}
              className="h-9 w-9 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">{isArabic ? "الصفحة التالية" : "Next page"}</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
