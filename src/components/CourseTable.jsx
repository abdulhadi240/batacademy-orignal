'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CourseTable({ courses, city, cities, specializations, locale }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const router = useRouter();
  const isArabic = locale === 'ar';

  // Pagination logic
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const paginatedCourses = courses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSearch = () => {
    router.push(`/${locale}/search_course?type=1&city=${selectedCity}&specialization=${selectedSpecialization}`);
  };

  const directionStyle = isArabic ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr', textAlign: 'left' };

  return (
    <div className="space-y-4" style={directionStyle}>
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder={isArabic ? "ابحث عن الدورات..." : "Search courses..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder={isArabic ? "التخصص" : "Specialization"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{isArabic ? "جميع التخصصات" : "All Specializations"}</SelectItem>
            {specializations.map((spec) => (
              <SelectItem key={spec.slug} value={spec.id}>{spec.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder={isArabic ? "المدينة" : "City"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{isArabic ? "جميع المدن" : "All Cities"}</SelectItem>
            {cities.map((cityItem) => (
              <SelectItem key={cityItem.slug} value={cityItem.id}>{cityItem.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Search Button */}
        <Button onClick={handleSearch} className="w-full md:w-auto text-white">
          {isArabic ? "بحث" : "Search"}
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 font-medium">{isArabic ? "الدورة" : "Course"}</th>
              <th className="px-4 py-2 font-medium">{isArabic ? "المدينة" : "City"}</th>
              <th className="px-4 py-2 text-center font-medium">{isArabic ? "الخيارات" : "Options"}</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCourses.map((course, index) => (
              <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                <td className="px-4 py-2 text-sm">
                  <Link href={`/${locale}/course_details/${course.id}/${course.slug}`} className="text-primary hover:underline">
                    {course.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-muted-foreground text-sm">{city}</td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/${locale}/course_details/${course.id}/${course.slug}`}>{isArabic ? "التفاصيل" : "Details"}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/${locale}/register?course=${course.slug}`} className='text-white'>{isArabic ? "سجل" : "Register"}</Link>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      {/* Mobile Cards - Full Width & Professional Layout */}
      <div className="md:hidden space-y-4 w-full">
        {paginatedCourses.map((course, index) => (
          <Card key={index} className="w-full shadow-lg border rounded-lg overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">
                <Link href={`/${locale}/course_details/${course.id}/${course.slug}`} className="text-primary hover:underline">
                  {course.name}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">{city}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href={`/${locale}/course_details/${course.id}/${course.slug}`}>{isArabic ? "التفاصيل" : "Details"}</Link>
                </Button>
                <Button asChild className="w-full sm:w-auto bg-primary text-white">
                  <Link href={`/${locale}/register?course=${course.slug}`}>{isArabic ? "سجل" : "Register"}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


      {/* Pagination Controls */}
      <div className="flex items-center justify-center sm:justify-start gap-2 mt-8 md:ml-6 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="h-9 w-9 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
          <span>
            Page <span className="font-bold">{currentPage}</span> of{" "}
            <span className="font-bold">{totalPages}</span>
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="h-9 w-9 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>

    </div>
  );
}
