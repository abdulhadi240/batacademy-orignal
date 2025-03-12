import fetchData from '@/actions/server';
import HeaderSection from '@/components/HeaderSection';
import Programs from '@/components/Programs';
import React from 'react';

export async function generateMetadata({ params, searchParams }) {
  const { locale } = params;
  const type = searchParams?.type;

  let titles = {
    en: { 1: "Diploma Courses", 2: "Master Courses", 3: "Training Courses" },
    ar: { 1: "دورات الدبلوم", 2: "دورات الماجستير", 3: "دورات التدريب" },
  };

  let descriptions = {
    en: "Find the best courses to boost your career.",
    ar: "ابحث عن أفضل الدورات لتعزيز حياتك المهنية.",
  };

  const title = titles[locale]?.[type] || "Courses";
  const description = descriptions[locale] || "Courses available for learning.";

  return {
    title: `${title} - Learn with Us`,
    description,
    keywords: `${title.toLowerCase()}, online courses, certifications`,
  };
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  const types = ["1", "2", "3"];

  return locales.flatMap((locale) =>
    types.map((type) => ({ locale, type }))
  );
}

const page = async ({ params, searchParams }) => {
  const { locale } = params;
  const type = searchParams?.type;
  let coursesUrl = '';

  console.log(type);
  

  if (type == 1) coursesUrl = '/diploma-courses';
  else if (type == 2) coursesUrl = '/master-courses';
  else if (type == 3) coursesUrl = '/course';

  const courses = await fetchData(coursesUrl,locale)
  const cities = await fetchData('/city',locale)
  const specializations = await fetchData('/specialization',locale)
 const category = await fetchData('/category',locale)

 console.log(courses.data.approved);
 
  
  return (
    <div>
      <HeaderSection params={locale} />
      <Programs
        params={locale}
        data={courses}
        city={cities}
        specialization={specializations}
        SpecializationCategory={null}
        category={category}
      />
    </div>
  );
};

export default page;
