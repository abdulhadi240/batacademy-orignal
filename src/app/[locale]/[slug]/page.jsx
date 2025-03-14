import fetchData from '@/actions/server';
import CourseCategories from '@/components/CourseCategory';
import CourseTable from '@/components/CourseTable1';
import HeaderSection from '@/components/HeaderSection';
import { Search } from 'lucide-react';
import React from 'react';
import NotFound from '../not-found';

const page = async ({ params }) => {
  const { locale, slug } = params;

  // Fetch city data to check if the city exists
  const cityResponse = await fetch(`${process.env.BACKEND_URL}/city/${slug}`, {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });

  // If the fetch fails (e.g., 404 or 500), return the NotFound component
  if (!cityResponse.ok) {
    return <NotFound params={params} />;
  }

  const cityResult = await cityResponse.json();

  // Check if the API response indicates an error or lacks data
  if (cityResult.code !== 200 || !cityResult.data) {
    return <NotFound params={params} />;
  }

  // Extract city name from the response
  const cityName = cityResult.data.name;

  // Fetch categories and courses only if the city exists
  const category = await fetchData('/category', locale);
  const getCityCourses = await fetchData(`/city-courses/${slug}`, locale);

  // Define translations
  const translations = {
    en: {
      title: "Professional Training & Courses in {cityName}",
      description: "Enhance your skills with our industry-leading professional development courses",
      searchPlaceholder: "Search for courses...",
      categoriesTitle: "Course Categories",
    },
    ar: {
      title: "التدريب المهني والدورات في {cityName}",
      description: "عزز مهاراتك من خلال دوراتنا الرائدة في مجال التطوير المهني",
      searchPlaceholder: "ابحث عن الدورات...",
      categoriesTitle: "فئات الدورات",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <>
      <HeaderSection params={locale} />
      <div className="min-h-screen bg-slate-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {t.title.replace('{cityName}', cityName)}
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              {t.description}
            </p>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className={`w-full py-3 px-4 ${locale === 'ar' ? 'pl-12' : 'pr-12'} rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button className={`absolute ${locale === 'ar' ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-blue-700`}>
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
          {/* Course Categories Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              {t.categoriesTitle}
            </h2>
            <CourseCategories categories={category.data} params={params} />
          </section>

          {/* Course Listings Section */}
          <section>
            <div className="mt-6 md:mx-16">
              <CourseTable
                courses={getCityCourses.data}
                params={params}
                city={slug}
                cities={true}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;