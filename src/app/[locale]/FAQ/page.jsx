"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";

export default function Page({ params }) {
  // 1. Detect the locale from the route params
  //    Fallback to "en" if it's not provided
  const locale = params?.locale || "en";

  // 2. Setup state for FAQ toggling
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // 3. Conditionally render text based on locale
  //    Replace as many text strings as you'd like
  const faqPagesHeading =
    locale === "ar" ? "صفحة الأسئلة" : "FAQ PAGES";
  const homeFAQPath =
    locale === "ar" ? "الرئيسية / الأسئلة" : "Home / FAQ";
  const everyQuestionAnswered =
    locale === "ar" ? "كل الأسئلة مجاب عليها" : "Every Question Answered";

  return (
    <>
      <HeaderSection params={params.locale}/>

      {/* Banner */}
      <div className="banner-container">
        <div className="relative h-32 banner sm:h-64">
          <Image
            src="/plan.webp"
            alt="banner"
            fill
            className="object-cover"
            priority
          />
          {/* Text box overlay */}
          <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[300px] flex justify-center items-center h-[60px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
            <div>
              <p className="font-semibold sm:text-xl text-primary">
                <span className="text-secondary">{faqPagesHeading}</span>
              </p>
              <p className="flex justify-center text-xs font-normal sm:text-sm text-primary">
                {homeFAQPath}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container p-4 mx-auto md:p-10">
        {/* FAQ Section */}
        <div className="flex flex-col p-2 md:flex-row md:justify-between">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2559] dark:text-white mb-6">
              {everyQuestionAnswered}
            </h2>
            <div className="space-y-4">
              {/* FAQ #1 */}
              <div>
                <div
                  onClick={() => toggleFAQ(1)}
                  className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                    {locale === "ar" ? "ما هو قسم الأسئلة؟" : "What is the FAQ?"}
                  </h3>
                  <span>{openFAQ === 1 ? "−" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openFAQ === 1 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mb-4 text-sm text-gray-500 dark:text-white/80">
                    {locale === "ar"
                      ? "هذا نص باللغة العربية للإجابة."
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                  </div>
                </div>
              </div>

              {/* FAQ #2 */}
              <div>
                <div
                  onClick={() => toggleFAQ(2)}
                  className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                    {locale === "ar"
                      ? "كيف يعمل هذا بالضبط؟"
                      : "So, how exactly does this work?"}
                  </h3>
                  <span>{openFAQ === 2 ? "−" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openFAQ === 2 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mb-4 text-sm text-gray-500 dark:text-white/80">
                    {locale === "ar"
                      ? "نص تجريبي باللغة العربية."
                      : "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae."}
                  </div>
                </div>
              </div>

              {/* FAQ #3 */}
              <div>
                <div
                  onClick={() => toggleFAQ(3)}
                  className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                    {locale === "ar"
                      ? "ما هي المدن التي نعمل بها حالياً؟"
                      : "What cities do you currently operate in?"}
                  </h3>
                  <span>{openFAQ === 3 ? "−" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openFAQ === 3 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mb-4 text-sm text-gray-500 dark:text-white/80">
                    {locale === "ar"
                      ? "حالياً نعمل في عدة مدن عربية."
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                  </div>
                </div>
              </div>

              {/* FAQ #4 */}
              <div>
                <div
                  onClick={() => toggleFAQ(4)}
                  className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                    {locale === "ar"
                      ? "خدمة التصميم الداخلي من Hipcouch؟"
                      : "Hipcouch Interior Design Service?"}
                  </h3>
                  <span>{openFAQ === 4 ? "−" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openFAQ === 4 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mb-4 text-sm text-gray-500 dark:text-white/80">
                    {locale === "ar"
                      ? "تفاصيل عن الخدمة باللغة العربية."
                      : "Aliquam eu sem vitae turpis max imus posuere in."}
                  </div>
                </div>
              </div>

              {/* FAQ #5 */}
              <div>
                <div
                  onClick={() => toggleFAQ(5)}
                  className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                    {locale === "ar"
                      ? "ما نوع مصممي الديكور الداخلي الموجودين لدينا؟"
                      : "What kind of interior designers do you have?"}
                  </h3>
                  <span>{openFAQ === 5 ? "−" : "+"}</span>
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openFAQ === 5 ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="mb-4 text-sm text-gray-500 dark:text-white/80">
                    {locale === "ar"
                      ? "نحن نعمل مع نخبة من المصممين ذوي الخبرة."
                      : "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae."}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <div>
            <Image
              src="/faq.webp"
              width={500}
              height={200}
              alt="Planning Image"
              className=""
            />
          </div>
        </div>

        {/* Video Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1B2559] text-center mb-6 dark:text-white">
            {locale === "ar" ? "عرض الفيديوهات" : "Show videos"}
          </h2>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 overflow-hidden bg-gray-200 rounded-lg shadow-lg lg:w-2/3 sm:h-96">
              <video controls className="object-cover w-full h-full">
                <source src="/sample-video.mp4" type="video/mp4" />
                {/* Fallback text if video is not supported */}
                {locale === "ar"
                  ? "المتصفح الخاص بك لا يدعم تشغيل الفيديو."
                  : "Your browser does not support the video tag."}
              </video>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
