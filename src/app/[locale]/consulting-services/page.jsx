import Image from "next/image";
import React from "react";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";
import Filteration from "./components/Filteration";
import BlogCarousel from "@/components/BlogCarousel";

const page = async ({ params }) => {
  const { locale } = params;
  const isArabic = locale === 'ar';

  const category = await fetchData(`/consultancy`, locale);
  const blogs = await fetchData(`/post?page=12`, locale);
  const consultancy = await fetchData(`/consultancy-services`, locale);

  const content = {
    title: isArabic ? 'جميع خدمات الاستشارات' : 'All Consulting Services',
    description: isArabic
      ? 'اكتشف مجموعة واسعة من الخدمات الاستشارية المصممة خصيصًا لمساعدة الشركات على النمو والتطور. نحن نقدم خبرات متخصصة عبر مختلف الصناعات لضمان تحقيق أهدافك الاستراتيجية بكفاءة وفعالية.'
      : 'Explore a wide range of consulting services designed to help businesses grow and thrive. We offer specialized expertise across various industries to ensure your strategic goals are met efficiently and effectively.',
    aiTitle: isArabic ? 'استشارات الذكاء الاصطناعي' : 'AI Consulting Services',
    aiDescription: isArabic
      ? 'نساعدك في تبني الذكاء الاصطناعي لتحسين عملياتك وزيادة الإنتاجية والابتكار. تشمل خدماتنا تطوير حلول ذكاء اصطناعي مخصصة وتكاملها مع الأنظمة الحالية.'
      : 'We help you adopt AI technologies to enhance operations, boost productivity, and drive innovation. Our services include developing custom AI solutions and integrating them with your existing systems.',
    bannerTitle: isArabic
      ? 'خدمات استشارية متخصصة لتطوير أعمالك'
      : 'Specialized Consulting Services to Drive Your Business Forward',
  };

  return (
    <div className={`${isArabic ? 'text-right' : 'text-left'}`} >
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

      <heading>
        <title>{content.title}</title>
      </heading>

      <div className="min-h-screen px-4 py-12 bg-gray-100">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">{content.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">{content.description}</p>
        </div>

        {/* Filter Bar */}
        <Filteration category={category} data={consultancy} params={locale}/>
      </div>

      <div className="flex flex-col justify-center gap-4 mt-10">
        <h1 className="flex justify-center text-3xl font-bold">{content.aiTitle}</h1>
        <p className="flex justify-center text-center  mx-auto max-w-3xl">
          {content.aiDescription}
        </p>

        <BlogCarousel data={blogs.data} blog />
      </div>
    </div>
  );
};

export default page;
