'use client'

import Image from "next/image";
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Training = ({ locale }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:mx-20 mx-6 mt-20 gap-8">
      <div className="w-full md:hidden mb-6">
        <Image
          src="/12.webp"
          width={1200} // Increased width
          height={800} // Increased height
          alt={locale === "en" ? "image" : "صورة"}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-full md:max-w-[50%] left">
        <h1 className="font-semibold text-[#111F51] text-xl mb-4">
          {locale === "en" ? "British Academy" : "الأكاديمية البريطانية"}
        </h1>
        <p className="mb-6 text-sm md:text-base">
          {locale === "en"
            ? "The British Academy for Training and Development is a British institution specialized in the training and development of human and institutional staff in the areas of management, business management, media, public relations, information technology, public health and other related disciplines. The Academy holds courses, training programs and graduate studies in Britain, Germany, France, Switzerland and the rest of the European continent and other countries around the world periodically throughout the year."
            : "الأكاديمية البريطانية للتدريب والتطوير هي مؤسسة بريطانية متخصصة في تدريب وتطوير الأفراد والكوادر المؤسسية في مجالات الإدارة، إدارة الأعمال، الإعلام، العلاقات العامة، تكنولوجيا المعلومات، الصحة العامة وغيرها من التخصصات ذات الصلة. تعقد الأكاديمية دورات تدريبية وبرامج دراسات عليا في بريطانيا وألمانيا وفرنسا وسويسرا وبقية القارة الأوروبية ودول أخرى حول العالم بشكل دوري على مدار العام."}
        </p>
        <div className="flex flex-wrap gap-2 mt-6 text-xs">
          {[
            locale === "en" ? "How We Are" : "كيف نحن",
            locale === "en" ? "Tracing Plan" : "خطة التتبع",
            locale === "en" ? "Academy Profile" : "ملف الأكاديمية"
          ].map((text, index) => (
            <div key={index} className="bg-[#111F51] text-white w-auto flex items-center gap-2 md:p-3 py-2 px-2.5 rounded-xl">
              {text}
              <span>
                <HiOutlineArrowSmRight size={15} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="right w-full md:w-full hidden md:block">
        <Image
          src="/12.webp"
          width={1000} // Increased width
          height={1000} // Increased height
          alt={locale === "en" ? "image" : "صورة"}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Training;
