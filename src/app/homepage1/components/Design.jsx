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
    exploreButton: "Register Now",
    catalogueButton: "View All Courses",
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
          <Header locale={locale} main={true}/>
          <div className="flex flex-col mt-20 items-center justify-center h-full w-full px-4">
            {/* Heading and Subheading */}
            <div className="text-center">
              <h1 className="max-w-3xl mt-5 text-2xl font-semibold text-white md:text-6xl">{t.heading}</h1>
              <p className="max-w-xl mx-auto mt-4 text-sm text-white md:text-xl">{t.subheading}</p>
            </div>
  
            {/* Search Bar */}
            <div className="w-full  max-w-2xl">
            <Inputs locale={locale}/>
            </div>
  
{/* Stats Section */}
<div className="flex justify-center ml-3 md:ml-0">
<div className="grid grid-cols-2 gap-x-8 gap-y-4 ml-3 mt-6 text-center text-white md:grid-cols-4 w-full max-w-3xl mx-auto">
  {["3.5+", "500+", "65,000+", "600+"].map((value, index) => (
    <div key={index} className="flex items-center justify-center whitespace-nowrap">
      <span className="text-xl font-bold">{value}</span>
      <span className="ml-2 text-sm md:text-base whitespace-nowrap">{t.stats[index]}</span>
    </div>
  ))}
</div>
</div>
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col gap-4 mt-12 md:flex-row">
              <Link
                href={"/"}
                className="px-20 py-3 text-xs text-center font-bold text-white uppercase rounded-full bg-secondary hover:bg-primary hover:bg-opacity-90 transition-all"
              >
                {t.exploreButton}
              </Link>
              <Link
                href={"/diploma"}
                className="px-20  py-3 text-center text-xs font-bold text-white uppercase rounded-full bg-secondary hover:bg-primary hover:bg-opacity-90 transition-all"
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
