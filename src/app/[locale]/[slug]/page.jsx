import fetchData from '@/actions/server'
import CourseCategories from '@/components/CourseCategory'
import CourseTable from '@/components/CourseTable1'
import HeaderSection from '@/components/HeaderSection'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async ({ params }) => {
    const { locale, slug } = params
    const category = await fetchData('/category', locale)
    const getCityCourses = await fetchData(`/city-courses/${slug}`, locale)

    return (
        <><HeaderSection params={locale} />
            <div className="min-h-screen bg-slate-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 md:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6">Professional Training & Courses</h1>
                        <p className="text-xl mb-8 max-w-3xl">
                            Enhance your skills with our industry-leading professional development courses
                        </p>
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder="Search for courses..."
                                className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
                    {/* Course Categories Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Course Categories</h2>
                        <CourseCategories categories={category.data} params={params} />
                    </section>

                    {/* Course Listings Section */}
                    <section>

                        <div className="mt-6 mx-16">
                            <CourseTable
                                courses={getCityCourses.data}
                                params={params}
                                city={slug} />
                        </div>
                    </section>
                </div>
            </div></>
    )
}

export default page