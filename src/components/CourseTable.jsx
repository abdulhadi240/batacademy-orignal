'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CourseTable({ courses, city, cities, specializations, locale }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const isArabic = locale === 'ar';

  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
      (course.specialization === selectedSpecialization || selectedSpecialization === 'all') &&
      (course.city === selectedCity || selectedCity === 'all')
    );
  }, [searchTerm, selectedSpecialization, selectedCity, courses]);

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
              <SelectItem key={spec} value={spec.slug}>{spec.name}</SelectItem>
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
              <SelectItem key={cityItem} value={cityItem.slug}>{cityItem.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
            {filteredCourses.map((course, index) => (
              <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                <td className="px-4 py-2">
                  <Link href={`/${locale}/course_details/${course.id}/${course.slug}`} className="text-primary hover:underline">
                    {course.name}
                  </Link>
                </td>
                <td className="px-4 py-2 text-muted-foreground">{city}</td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/${locale}/course_details/${course.id}/${course.slug}`}>{isArabic ? "التفاصيل" : "Details"}</Link>
                    </Button>
                    <Button asChild>
                      <Link href= {`/${locale}/register?course=${course.slug}`} className='text-white'>{isArabic ? "سجل" : "Register"}</Link>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredCourses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">
                <Link href={`courses`} className="text-primary hover:underline">
                  {course.name}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{city}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href={`courses`}>{isArabic ? "التفاصيل" : "Details"}</Link>
                </Button>
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/register" className='text-white'>{isArabic ? "سجل" : "Register"}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
