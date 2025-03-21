import fetchData from '@/actions/server';
import NotFound from '@/app/[locale]/not-found';
import CourseTable from '@/components/CourseTable1';
import HeaderSection from '@/components/HeaderSection';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define translations for English and Arabic
const translations = {
    en: {
        heroTitle: 'Professional Training & Courses',
        heroSubtitle: 'Discover specialized courses designed to advance your career in your chosen field',
        searchPlaceholder: 'Search for courses...',
        featuredCourses: 'Featured Courses in {city}',
        categoriesTitle: 'Course Categories',
        viewCourses: 'View Courses',
    },
    ar: {
        heroTitle: 'التدريب المهني والدورات',
        heroSubtitle: 'اكتشف الدورات المتخصصة المصممة للارتقاء بمسيرتك المهنية في المجال الذي تختاره',
        searchPlaceholder: 'ابحث عن الدورات...',
        featuredCourses: 'الدورات المميزة في {city}',
        categoriesTitle: 'فئات الدورات',
        viewCourses: 'عرض الدورات',
    },
};

const page = async ({ params }) => {
    const { locale, specialization, slug, category } = params;

    // Fetch city data
    const cityResponse = await fetch(`${process.env.BACKEND_URL}/city/${slug}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    // Fetch specialization data
    const specialResponse = await fetch(`${process.env.BACKEND_URL}/specialization/${specialization}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    // Fetch category data
    const categoryResponse = await fetch(`${process.env.BACKEND_URL}/category/${category}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    // Check if fetch requests failed
    if (!cityResponse.ok || !categoryResponse.ok || !specialResponse.ok) {
        return <NotFound params={params} />;
    }

    const cityResult = await cityResponse.json();
    const categoryResult = await categoryResponse.json();
    const specializations = await specialResponse.json();

    // Validate API responses
    if (
        cityResult.code !== 200 ||
        !cityResult.data ||
        categoryResult.code !== 200 ||
        !categoryResult.data ||
        specializations.code !== 200 ||
        !specializations.data
    ) {
        return <NotFound params={params} />;
    }

    // Extract city, category, and specialization names
    const cityName = cityResult.data.name;
    const categoryName = categoryResult.data.name;
    const SpecializationName = specializations.data.name;

    // Fetch additional data
    const specialization_courses = await fetchData(`/specialization/${specialization}/courses`, locale);
    const categoryData = await fetchData('/category', locale);

    // Select translations based on locale (default to English if locale is undefined)
    const t = translations[locale] || translations.en;

    // Compute dynamic titles
    const featuredCoursesTitle = t.featuredCourses.replace('{city}', cityName);

    return (
        <>
            <HeaderSection params={locale} />
            <div className="min-h-screen bg-slate-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 md:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6">{t.heroTitle}</h1>
                        <p className="text-xl mb-8 max-w-3xl">{t.heroSubtitle}</p>
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder={t.searchPlaceholder}
                                className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value=""
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
                    {/* Featured Courses Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                            {featuredCoursesTitle}
                        </h2>
                        <div className="mt-6 md:mx-16">
                            <CourseTable courses={specialization_courses.data} params={params} city={params.slug} />
                        </div>
                    </section>

                    {/* Categories Section */}
                    <section>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                                {t.categoriesTitle}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categoryData.data.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/${params.locale}/${params.slug}/${category.slug}`}
                                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="relative h-40">
                                        <Image
                                            src={category.image || '/placeholder.svg'}
                                            alt={category.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="text-sm text-gray-600">{t.viewCourses}</div>
                                        <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                                            {locale === 'en' ? (
                                                <ArrowRight className="h-5 w-5" />
                                            ) : (
                                                <ArrowLeft className="h-5 w-5" />
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default page;