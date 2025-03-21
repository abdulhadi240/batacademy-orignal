'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

const Training = ({ locale }) => {
  return (
    <div className={`flex flex-col justify-between md:mx-20 mx-6 mt-20 gap-8 ${locale === 'ar' ? 'md:flex md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:hidden mb-6">
        <Image
          src="/12.webp"
          width={1200}
          height={800}
          alt={locale === "en" ? "image" : "صورة"}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-full md:max-w-[50%] left">
        <h1 className={`font-semibold text-[#111F51] text-xl mb-4 ${locale === 'ar' ? 'text-right' : ''}`}>
          {locale === "en" ? "British Academy" : "الأكاديمية البريطانية"}
        </h1>
        <p className={`${locale === 'ar' ? 'text-right' : ''} mb-6 text-sm md:text-base`}>
          {locale === "en"
            ? "The British Academy for Training and Development is a British institution specialized in the training and development of human and institutional staff in the areas of management, business management, media, public relations, information technology, public health and other related disciplines. The Academy holds courses, training programs and graduate studies in Britain, Germany, France, Switzerland and the rest of the European continent and other countries around the world periodically throughout the year."
            : "الأكاديمية البريطانية للتدريب والتطوير هي مؤسسة بريطانية متخصصة في تدريب وتطوير الأفراد والكوادر المؤسسية في مجالات الإدارة، إدارة الأعمال، الإعلام، العلاقات العامة، تكنولوجيا المعلومات، الصحة العامة وغيرها من التخصصات ذات الصلة. تعقد الأكاديمية دورات تدريبية وبرامج دراسات عليا في بريطانيا وألمانيا وفرنسا وسويسرا وبقية القارة الأوروبية ودول أخرى حول العالم بشكل دوري على مدار العام."}
        </p>
        <div className={`flex flex-wrap gap-2 mt-6 text-xs ${locale === 'ar' ? 'justify-end' : ''}`}>
          {[
            { text: locale === "en" ? "How We Are" : "كيف نحن", link: "/academy-service" },
            { text: locale === "en" ? "Tracing Plan" : "خطة التتبع", link: "/plan" },
            { text: locale === "en" ? "About Us" : "ملف الأكاديمية", link: "/about" }
          ].map((item, index) => (
            <Link key={index} href={`/${locale}${item.link}`}>
              <div className={`bg-[#111F51] text-white w-auto flex items-center gap-2 md:p-3 py-2 px-2.5 rounded-xl ${locale === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                {item.text}
                <span>
                  {locale === 'ar' ? <HiOutlineArrowSmLeft size={15} /> : <HiOutlineArrowSmRight size={15} />}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="right w-full md:w-full hidden md:block">
        <Image
          src="/12.webp"
          width={1000}
          height={1000}
          alt={locale === "en" ? "image" : "صورة"}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Training;