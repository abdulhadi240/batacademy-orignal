"use client";

import { useState, useEffect } from "react";
import fetchData from "@/actions/server";
import ArticleCard from "@/components/ArticleCard";
import HeaderSection from "@/components/HeaderSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Category({ params , data }) {
  const locale = params.locale || "en"; // Determine locale from params
  const [articleDetails, setArticleDetails] = useState(data);
  const [page, setPage] = useState(1);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 50, behavior: "smooth" });
  };

  // Fetch article data when the page or locale changes
  useEffect(() => {
    const fetchArticles = async () => {
      const data = await fetchData(`/post-category/${params.id}?page=${page}`, locale);
      setArticleDetails(data);
    };
    fetchArticles();
  }, [page, params.locale]);

  // Handlers for pagination
  const handleNext = () => {
    if (page < articleDetails?.posts?.last_page) {
      setPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  return (
    <>
      <HeaderSection params={locale} />
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-center dark:text-white uppercase">
          {articleDetails?.name}
        </h1>
        <p className="mb-8 text-center text-gray-500">
          {locale === "ar"
            ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت."
            : "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper et pharetra sem."}
        </p>

        {/* Articles Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articleDetails?.posts?.data.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.name}
                category={article.category}
                date={article.published_date}
                description={article.description}
                imageSrc={article.image}
                button_data={article.category}
                slug={article.slug}
                params={locale}
              />
            ))}
          </div>
        </div>

        {/* Pagination UI */}
        {articleDetails?.posts?.last_page > 1 && (
          <div className="flex items-center justify-center sm:justify-center gap-2 mt-8 sm:ml-6 mb-4">
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
                Page <span className="font-bold">{page}</span> of{" "}
                <span className="font-bold">{articleDetails?.posts?.last_page}</span>
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={page === articleDetails?.posts?.last_page}
              className="h-9 w-9 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
