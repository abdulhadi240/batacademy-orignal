import Image from "next/image";
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Training = ({ locale }) => {
  return (
    <div className="flex justify-between mx-20 mt-20">
      <div className="max-w-96 left">
        <h1 className="font-semibold text-[#111F51] text-xl">
          {locale === "en" ? "British Academy" : "الأكاديمية البريطانية"}
        </h1>
        <p>
          {locale === "en"
            ? "The British Academy for Training and Development is a British institution specialized in the training and development of human and institutional staff in the areas of management, business management, media, public relations, information technology, public health and other related disciplines. The Academy holds courses, training programs and graduate studies in Britain, Germany, France, Switzerland and the rest of the European continent and other countries around the world periodically throughout the year."
            : "الأكاديمية البريطانية للتدريب والتطوير هي مؤسسة بريطانية متخصصة في تدريب وتطوير الأفراد والكوادر المؤسسية في مجالات الإدارة، إدارة الأعمال، الإعلام، العلاقات العامة، تكنولوجيا المعلومات، الصحة العامة وغيرها من التخصصات ذات الصلة. تعقد الأكاديمية دورات تدريبية وبرامج دراسات عليا في بريطانيا وألمانيا وفرنسا وسويسرا وبقية القارة الأوروبية ودول أخرى حول العالم بشكل دوري على مدار العام."}
        </p>
        <div className="flex gap-2 mt-6 text-xs">
          <div className="bg-[#111F51] text-white w-auto flex items-center gap-2 p-3 rounded-xl">
            {locale === "en" ? "How We Are" : "كيف نحن"}
            <span>
              <HiOutlineArrowSmRight size={15} />
            </span>
          </div>
          <div className="bg-[#111F51] text-white w-auto flex items-center gap-2 p-3 rounded-xl">
            {locale === "en" ? "Tracing Plan" : "خطة التتبع"}
            <span>
              <HiOutlineArrowSmRight size={15} />
            </span>
          </div>
          <div className="bg-[#111F51] text-white w-auto flex items-center gap-2 p-3 rounded-xl">
            {locale === "en" ? "Academy Profile" : "ملف الأكاديمية"}
            <span>
              <HiOutlineArrowSmRight size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <Image
          src={"/12.webp"}
          width={500}
          height={500}
          alt={locale === "en" ? "image" : "صورة"}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Training;
