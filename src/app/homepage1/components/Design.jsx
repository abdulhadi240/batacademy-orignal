import Image from "next/image";
import React from "react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Inputs from "./Inputs";



const translations = {
  en: {
    heading: "Developing People To Improve Performance",
    subheading: "The world's most trusted training partner for improving knowledge, skills, and capabilities.",
    exploreButton: "Explore Advantage Plan",
    catalogueButton: "View Course Catalogue",
    stats: ["million attendees", "advisors", "organisations", "courses"],
  },
  ar: {
    heading: "تطوير الأفراد لتحسين الأداء",
    subheading: "الشريك التدريبي الأكثر ثقة في العالم لتحسين المعرفة والمهارات والقدرات.",
    exploreButton: "استكشف الخطة المميزة",
    catalogueButton: "عرض كتالوج الدورات",
    stats: ["مليون مشارك", "مستشار", "منظمة", "دورة"],
  },
};

const Design = ({ locale }) => {
  const t = translations[locale] || translations.en;
  
    return (
      <div className="relative w-full h-[700px] overflow-hidden">
        {/* Background Image */}
        <Link href={"/"}>
          <Image
            src="/hero-bg.webp"
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
            className="absolute inset-0 brightness-75"
            priority
            loading="eager"
          />
        </Link>
  
        {/* Overlay Content */}
        <div className="relative z-10">
          <Header locale={locale}/>
          <div className="flex flex-col items-center justify-center h-full px-4">
            {/* Heading and Subheading */}
            <div className="text-center">
              <h1 className="max-w-3xl mt-5 text-3xl font-semibold text-white md:text-6xl">{t.heading}</h1>
              <p className="max-w-xl mx-auto mt-4 text-sm text-white md:text-xl">{t.subheading}</p>
            </div>
  
            {/* Search Bar */}
            <Inputs locale={locale}/>
  
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-3 mt-6 text-center text-white md:grid-cols-4">
              {["3.5+", "500+", "65,000+", "600+"].map((value, index) => (
                <div key={index}>
                  <span className="block text-xl font-bold">{value}</span>
                  <span>{t.stats[index]}</span>
                </div>
              ))}
            </div>
  
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col gap-4 mt-6 md:flex-row">
              <Link
                href={"/"}
                className="px-8 py-4 text-sm font-bold text-white uppercase rounded-full bg-secondary hover:bg-primary hover:bg-opacity-90 transition-all"
              >
                {t.exploreButton}
              </Link>
              <Link
                href={"/diploma"}
                className="px-8 py-4 text-sm font-bold text-white uppercase rounded-full bg-secondary hover:bg-primary hover:bg-opacity-90 transition-all"
              >
                {t.catalogueButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Design;