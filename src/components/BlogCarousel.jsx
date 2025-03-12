"use client";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 310; // Width of each card
const MARGIN = 20; // Margin between cards
const CARD_SIZE = CARD_WIDTH + MARGIN;
const CARDS_PER_DOT = 1; // Number of cards per dot

const BlogCarousel = ({ data , blog , params}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalDots = Math.ceil(blog ? data.length : data?.data?.length / CARDS_PER_DOT);

  const shiftLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setOffset((prev) => prev + CARD_SIZE * CARDS_PER_DOT);
    }
  };

  const shiftRight = () => {
    if (currentIndex < totalDots - 1) {
      setCurrentIndex((prev) => prev + 1);
      setOffset((prev) => prev - CARD_SIZE * CARDS_PER_DOT);
    }
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setOffset(-index * CARD_SIZE * CARDS_PER_DOT);
  };

  return (
    <>
    {blog ? (
      <section className="py-8" ref={ref}>
      <div className="relative overflow-hidden md:p-4">
        <div className="">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="flex gap-5 "
          >
            {data?.map((article, index) => (
              index < 6 && 
              <div
                key={index}
                className="flex-shrink-0 px-1 mx-0.5"
                style={{ width: CARD_WIDTH }}
              >
                
                <ArticleCard
                  key={index}
                  title={article.name}
                  category={article.category}
                  date={article.publish_date}
                  description={article.description}
                  imageSrc={article.image}
                  button_data={article.tags || [article.category] }
                  slug={article.slug} // Pass the slug to ArticleCard
                  blog={true}
                  params={params}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="flex justify-center md:justify-end items-end mt-4 md:mr-32">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mb-2">
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex > 0 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === 0}
            onClick={shiftLeft}
          >
            <FiArrowLeft color="white"/>
          </button>
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex < totalDots - 1 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === totalDots - 1}
            onClick={shiftRight}
          >
            <FiArrowRight color="white"/>
          </button>
        </div>
      </div>
    </section>
    ) : (
      <section className="py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="flex gap-5 sm:ml-32"
          >
            {data?.data.map((article, index) => (
              index < 6 && 
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                
                <ArticleCard
                  key={index}
                  title={article.title}
                  category={article.categories[0]}
                  date={article.published_date}
                  description={article.description}
                  imageSrc={article.featured_image}
                  button_data={article.tags}
                  slug={article.slug} // Pass the slug to ArticleCard
                  blog={true}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="flex justify-center md:justify-end items-end mt-4 md:mr-32">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mb-2">
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex > 0 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === 0}
            onClick={shiftLeft}
          >
            <FiArrowLeft color="white"/>
          </button>
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex < totalDots - 1 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === totalDots - 1}
            onClick={shiftRight}
          >
            <FiArrowRight color="white"/>
          </button>
        </div>
      </div>
    </section>
    )}
    </>
  );
};

export default BlogCarousel;
