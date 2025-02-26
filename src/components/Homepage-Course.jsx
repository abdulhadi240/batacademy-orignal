"use client"
import CourseCard from "@/components/course-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import SectionTitle from "./SectionTitle"

export default function HomepageCourse({locale}) {
  const courses = [
    {
      id: 1,
      title: "Short professional diploma in journalism and media versions have evolved daf",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
    {
      id: 2,
      title: "Professional Diploma of Accounting and Finance in Business and Management",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
    {
      id: 3,
      title: "Chartered Financial Analyst (CFA) Course",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
    {
      id: 4,
      title: "Deep Learning Networks...",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
    {
      id: 5,
      title: "Advanced Data Science Certificate",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
    {
      id: 6,
      title: "Digital Marketing Professional",
      image: "/000.webp",
      location: "LONDON",
      price: 500,
    },
  ]

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isTablet = useMediaQuery("(min-width: 640px)")

  const slidesPerView = isDesktop ? 4 : isTablet ? 2 : 1

  return (
    <main className=" bg-sky-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          {/* Centered Register Now section */}
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="max-w-md w-full">
              <div className="relative mb-6 ">
              <SectionTitle title={locale === 'en' ? "Register" : "دورات حسب"} highlight={locale === 'en' ? "Now" : "المدن"} start/>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                The British Academy for Training and Development differs from other companies operating in the same
                field because it is a British-European company with excellence and there are specialized cadres with
                great practical and scientific experience
              </p>
            </div>
          </div>

          {/* Carousel section */}
          <div className="lg:col-span-3">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
                slidesToShow: slidesPerView,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {courses.map((course) => (
                  <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-2/6">
                    <div className="p-1">
                      <CourseCard course={course} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-between items-center mt-6">
                <CarouselPrevious className="relative static translate-y-0 bg-slate-300 hover:bg-slate-400 text-white" />
                <CarouselNext className="relative static translate-y-0 bg-slate-800 hover:bg-slate-700 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  )
}

