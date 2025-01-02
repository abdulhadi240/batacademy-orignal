import { Heart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CourseRecommendations() {
  const courses = [
    {
      title: "Mega Digital Marketing Course A-Z: 32 Courses in 1 + Updates",
      hours: 81,
      rating: 4.6,
      students: 161028,
      price: 74.99,
      image: "/course.webp",
      isBestseller: true,
      lastUpdated: "12/2024"
    },
    {
      title: "Digital Marketing Masterclass: AI & Social Media Marketing",
      hours: 69,
      rating: 4.5,
      students: 258605,
      price: 89.99,
      image: "/course.webp",
      lastUpdated: "12/2024"
    },
    {
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      hours: 22.5,
      rating: 4.5,
      students: 807130,
      price: 74.99,
      image: "/course.webp",
      lastUpdated: "11/2022"
    },
    {
      title: "Digital Marketing Agency | Start a Social Media Business",
      hours: 94.5,
      rating: 4.5,
      students: 34688,
      price: 74.99,
      image: "/course.webp",
      isBestseller: true,
      lastUpdated: "12/2024"
    }
  ]

  return (
    <div className="p-4 max-w-[870px] my-10">
      <h2 className="text-lg md:text-xl font-bold mb-4">Students also bought</h2>
      <div className="space-y-3">
        {courses.map((course, index) => (
          <Card key={index} className="p-3">
            <div className="flex gap-3">
              <div className="w-20 h-20 md:h-28 md:w-28 relative flex-shrink-0">
                <img
                  src={course.image}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-medium text-sm md:text-lg leading-tight line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-muted-foreground">
                      {course.isBestseller && (
                        <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-xs font-medium">
                          Bestseller
                        </span>
                      )}
                      <span>{course.hours} total hours</span>
                      <span className="hidden md:inline">•</span>
                      <span>Updated {course.lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs md:text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-yellow-400">★</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>{new Intl.NumberFormat().format(course.students)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-center md:items-end gap-2 ml-auto">
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex rounded-full">
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                    <span className="font-bold text-base md:text-lg">${course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

