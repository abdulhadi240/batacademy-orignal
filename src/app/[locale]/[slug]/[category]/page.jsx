import fetchData from '@/actions/server'
import HeaderSection from '@/components/HeaderSection'
import { ArrowRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async ({ params }) => {
    const { locale, slug, category } = params
    const specialization = await fetchData(`/category/${category}/specializations`, locale)
    const categoryData = await fetchData('/category', locale)


    return (
        <><HeaderSection params={locale} /><div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Professional Training & Courses</h1>
                    <p className="text-xl mb-8 max-w-3xl">
                        Discover specialized courses designed to advance your career in your chosen field
                    </p>
                    <div className="relative max-w-md">
                        <input
                            type="text"
                            placeholder="Search for courses..."
                            className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={''} />
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Featured Courses in Dubai</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {specialization.data.map((course) => (
                            <Link href={`/${params.locale}/${params.slug}/${params.category}/${course.slug}`}
                                key={course.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="relative h-48">
                                    <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-center">{course.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Categories Section */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Course Categories</h2>

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
                                        src={category.image || "/placeholder.svg"}
                                        alt={category.title}
                                        fill
                                        className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-600">View Courses</div>
                                    <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div></>
    )
}

export default page