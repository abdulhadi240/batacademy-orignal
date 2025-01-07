'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = [
  { name: "Training course in Total Quality Control", city: "Manchester", specialization: "Quality Control" },
  { name: "Course in The Use of Information Technology", city: "Manchester", specialization: "IT" },
  { name: "Management of Fast Food Restaurants", city: "Manchester", specialization: "Management" },
  { name: "Short Professional Diploma in Cyber Security", city: "Manchester", specialization: "Cyber Security" },
  { name: "Course in The Management of Training and Development", city: "Manchester", specialization: "Training" },
  { name: "A Training Course in Construction Management", city: "Manchester", specialization: "Construction" },
  { name: "Training Course in The Importance of Hygiene", city: "Manchester", specialization: "Hygiene" },
  { name: "Legal Strategies of Contractual Negotiation", city: "Manchester", specialization: "Legal" },
  { name: "A course on international laws and practice of figures", city: "Manchester", specialization: "Legal" },
  { name: "A Training Course in Building Smart Cities and Green Tech", city: "Manchester", specialization: "Smart Cities" },
  { name: "Cyber Security Professional Program", city: "Manchester", specialization: "Cyber Security" },
  { name: "Professional Diplomatic Protocol Training Program", city: "Manchester", specialization: "Diplomatic" },
];

const specializations = [...new Set(courses.map(course => course.specialization))];
const cities = [...new Set(courses.map(course => course.city))];

export default function CourseTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => 
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
      (course.specialization === selectedSpecialization || selectedSpecialization === 'all') &&
      (course.city === selectedCity || selectedCity === 'all')
    );
  }, [searchTerm, selectedSpecialization, selectedCity]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specializations</SelectItem>
            {specializations.map((spec) => (
              <SelectItem key={spec} value={spec}>{spec}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:block overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Course</th>
              <th className="px-4 py-2 text-left font-medium">City</th>
              <th className="px-4 py-2 text-center font-medium">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => {
              const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();
              return (
                <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-2">
                    <Link href={`/courses/${courseLink}`} className="text-primary hover:underline">
                      {course.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{course.city}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/courses/${courseLink}`}>Details</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register" className='text-white'>Register</Link>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filteredCourses.map((course, index) => {
          const courseLink = course.name.replace(/\s+/g, '-').toLowerCase();
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href={`/courses/${courseLink}`} className="text-primary hover:underline">
                    {course.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">City: {course.city}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href={`/courses/${courseLink}`}>Details</Link>
                  </Button>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

