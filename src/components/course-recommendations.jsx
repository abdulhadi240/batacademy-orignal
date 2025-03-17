import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseRecommendations({ courses, locale }) {
  return (
    <div className="p-4 sm:p-6 max-w-[900px] mx-auto my-8 sm:my-12">
    <h2 className="text-xl md:text-2xl font-bold mb-4 sm:mb-6">
      {locale === "en" ? "Customers also bought" : "اشترى العملاء أيضا"}
    </h2>
    <div className="space-y-3 sm:space-y-4">
      {courses.map((course, index) => (
        <Card key={index} className="p-3 sm:p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            {/* Course Image */}
            <div className="w-full h-36 md:w-24 md:h-24 flex-shrink-0">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-3">
                <div className="space-y-1 sm:space-y-2 min-w-0 w-full md:w-auto">
                  <h3 className="font-semibold text-sm md:text-base leading-tight line-clamp-2">{course.name}</h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-medium">Bestseller</span>
                  </div>

                  <div className="flex items-center gap-4 mt-1 sm:mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">5</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                    <span>{course.dates[0]?.course_date}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex flex-row md:flex-col justify-between items-center md:items-end gap-2 w-full md:w-auto mt-2 md:mt-0">
                  <span className="font-bold text-base md:text-lg text-gray-900">£{course.price}</span>
                  <Link href={`/${locale}/course_details/${course.id}/${course.slug}`}>
                    <Button
                      variant="secondary"
                      className="text-xs sm:text-sm text-white bg-primary hover:bg-primary/80"
                    >
                      View Course
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
      );
    }
