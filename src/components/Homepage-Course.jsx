"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import SectionTitle from "./SectionTitle";
import CourseCard from "./Course-Card";

export default function Home({ locale , courses }) {

  const isDesktop = useMediaQuery("(min-width: 1124px)");
  const isTablet = useMediaQuery("(min-width: 640px)");

  // Adjust slides per view based on screen size
  const getSlideConfig = () => {
    if (isDesktop) return { slidesToShow: 4, containScroll: "trimSnaps" };
    if (isTablet) return { slidesToShow: 2, containScroll: "trimSnaps" };
    return { slidesToShow: 1.7, containScroll: false }; // Show 1.7 cards on mobile
  };

  return (
    <main className="bg-sky-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          {/* Centered Register Now section */}
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="max-w-md w-full">
              <div className="md:hidden">
                <SectionTitle
                  title={locale === "en" ? "Upcoming" : "ما هو"}
                  highlight={
                    locale === "en" ? "Courses" : "الأكاديمية البريطانية؟"
                  }
                />
              </div>
              <div className="md:relative md:block hidden mb-6">
              <SectionTitle title={locale === 'en' ? "Register" : "ما هو"} highlight={locale === 'en' ? "Now !" : "الأكاديمية البريطانية؟"} start/>

                {/* Decorative underline */}
                <div className="hidden md:absolute -bottom-2 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
                  <div className="h-1 w-12 bg-red-600 rounded-full" />
                </div>
              </div>
              <p className="text-slate-600 hidden md:block text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                {locale === 'en' ? 'The British Academy for Training and Development differs from other companies operating in the same field because it is a British-European company with excellence and there are specialized cadres with great practical and scientific experience' : 'تختلف الأكاديمية البريطانية للتدريب والتطوير عن غيرها من الشركات العاملة في نفس المجال، فهي شركة بريطانية أوروبية متميزة، وتضم كوادر متخصصة ذات خبرة عملية وعلمية واسعة.'}

              </p>
            </div>
          </div>

          {/* Carousel section */}
          <div className="lg:col-span-3">
            <Carousel
              opts={{
                align: "start",
                ...getSlideConfig(),
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {courses.map((course) => (
                  <CarouselItem
                    key={course.id}
                    className="pl-2 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <CourseCard course={course} locale={locale}/>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation arrows positioned together on the right */}
              <div className="flex justify-end gap-2 mt-6">
                <CarouselPrevious className="relative static translate-y-0 bg-slate-300 hover:bg-slate-400 text-white h-8 w-8 rounded-full" />
                <CarouselNext className="relative static translate-y-0 bg-slate-800 hover:bg-slate-700 text-white h-8 w-8 rounded-full" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}
