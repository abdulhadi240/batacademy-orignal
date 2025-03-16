
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Monitor,
  CalendarMinus,
  MapPinned,
  CircleDollarSign,
} from "lucide-react";
import HeaderSection from "@/components/HeaderSection";
import { MdFacebook } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Certificate from "@/components/Certificate";
import LearningObjectives from "@/components/LearningObjectives";
import { CiLocationOn } from "react-icons/ci";
import CourseRecommendations from "@/components/course-recommendations";
import Dates from "@/components/Dates";
import CarasoulCourse from "@/components/CarasoulCourse";
import fetchData, { GetSpecialization } from "@/actions/server";
import Content_extend from "@/components/Content_extend";
import { Suspense } from "react";
import CourseVideoCard from "@/components/CourseVideoCard";
import Link from "next/link";
import Download_PDF from "@/components/Download_PDF";

export default async function Page({ params }) {
  const { locale, course } = params;
  const isArabic = locale === "ar";

  


  const courseDetail = await fetchData(`/course/${course}`, locale);
  console.log(courseDetail);

  const course_carasoul = await fetchData(
    `${process.env.BACKEND_URL}/course?page=2`,
    locale
  );
  const category = await GetSpecialization();
  const specialization_category = await fetchData("/list/category", locale);
  const courses = await fetchData("/course", locale);

  return (
    <>
      <HeaderSection params={locale} />
      <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
        {/* Hero Section with Course Info */}
        <section className="relative h-[500px] md:h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-slate-900/50">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${courseDetail?.image})`, zIndex: -1 }}
            />
          </div>
          <div className="container relative h-full flex flex-col justify-center gap-6 text-white">
            <div className="grid sm:grid-cols-[1fr,auto] gap-8 items-start mx-10">
              <div className="space-y-5">
                <h1 className="text-4xl text-center md:mt-10 md:text-start md:text-4xl lg:text-4xl font-bold">
                  {courseDetail.name}
                </h1>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  <span className="items-center hidden md:block rounded-md bg-secondary md:px-4 md:py-2 px-2 py-1 text-sm">
                    {courseDetail.category}
                  </span>
                  <Download_PDF locale={params.locale} courseDetail={courseDetail}/>
                  
                </div>
              </div>

              {/* Course Info Card */}
              <div className="bg-white shadow-lg rounded-xl px-6 py-3 space-y-3 border border-gray-200 md:sticky md:top-10 z-20">
                <h2 className="text-lg text-center font-bold text-gray-800">
                  {isArabic ? "معلومات الدورة" : "Course Information"}
                </h2>
                <div className="space-y-2">
                  {/* Course Duration */}
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">
                        {isArabic ? "المدة:" : "Duration:"}
                      </p>
                      <p className="font-medium text-xs text-gray-800">
                        {isArabic ? "7 أيام" : "7 Days"}
                      </p>
                    </div>
                  </div>

                  {/* Course Date */}
                  <div className="flex items-center gap-4">
                    <CalendarMinus className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">
                        {isArabic ? "التاريخ:" : "Date:"}
                      </p>
                      <p className="font-medium text-xs text-gray-800">
                        {courseDetail.dates[0]?.course_date}
                      </p>
                    </div>
                  </div>

                  {/* Course City */}
                  <div className="flex items-center gap-4">
                    <MapPinned className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">
                        {isArabic ? "المدينة:" : "City:"}
                      </p>
                      <p className="font-medium text-xs text-gray-800">
                        {isArabic ? "لندن" : "London"}
                      </p>
                    </div>
                  </div>

                  {/* Course Cost */}
                  <div className="flex items-center gap-4">
                    <CircleDollarSign className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">
                        {isArabic ? "التكلفة:" : "Cost:"}
                      </p>
                      <p className="font-medium text-xs text-gray-800">
                        £ {courseDetail.price}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <Link href={`/${locale}/contact_us`}>
                    <Button className="w-full bg-secondary mt-3 text-white hover:bg-secondary/80 rounded-md py-2 text-sm font-medium">
                      {isArabic ? "تواصل معنا" : "Get In Touch"}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/register?course=${courseDetail.course}`}>
                    <Button className="w-full mt-2 bg-primary text-white hover:bg-primary/80 rounded-md py-2 text-sm font-medium">
                      {isArabic ? "سجل الآن" : "Register Now"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Content_extend categories={specialization_category} params={locale}>
          <Suspense fallback={"loading..."}>
            <main className="py-8 max-w-[870px]">
              {/* Course Details */}
              <Tabs defaultValue="introduction" className="md:mx-5">
                <div className="flex justify-between items-center">
                  {/* Tabs List */}
                  <TabsList className="custom-scrollbar flex h-9 rounded-lg text-muted-foreground flex-row justify-between px-2 py-6 text-xs bg-[#f5f5f5] w-full md:text-base overflow-x-auto whitespace-nowrap">
                    <div>
                      <TabsTrigger value="introduction" className="text-base">
                        {isArabic ? "الملخص" : "Summary"}
                      </TabsTrigger>
                      <TabsTrigger value="objectives" className="text-base">
                        {isArabic ? "الأهداف" : "Objectives"}
                      </TabsTrigger>
                      <TabsTrigger value="date" className="text-base">
                        {isArabic ? "التواريخ" : "Dates"}
                      </TabsTrigger>
                    </div>
                    <div className="md:justify-between hidden md:flex gap-4">
                      <button className="text-white rounded-full flex items-center">
                        <span className="flex items-center bg-primary gap-2 px-4 py-0.5 rounded-sm">
                          <MdFacebook color="[#152765]" size={28} />{" "}
                          {isArabic ? "مشاركة" : "Share"}
                        </span>
                      </button>
                      <button className="text-white rounded-full flex items-center">
                        <span className="flex items-center bg-secondary gap-2 px-4 py-1 rounded-sm">
                          <SiGmail color="[#B12E33]" size={20} />{" "}
                          {isArabic ? "إرسال بريد" : "Email"}
                        </span>
                      </button>
                    </div>
                  </TabsList>
                  <div className="hidden-mobile flex space-x-3">
                    {/* Sharing Buttons */}
                  </div>
                </div>
                <TabsContent value="introduction">
                  <div className="text-muted-foreground mx-2">
                    {courseDetail?.content ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: courseDetail.content }}
                      />
                    ) : (
                      <p>
                        {isArabic
                          ? "معلومات المحتوى غير متاحة."
                          : "Course content information not available."}
                      </p>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="objectives">
                  <div className="text-muted-foreground mx-2">
                    {courseDetail?.objectives_and_target_group ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: courseDetail.objectives_and_target_group,
                        }}
                      />
                    ) : (
                      <p>
                        {isArabic
                          ? "معلومات الأهداف غير متاحة."
                          : "Course objectives information not available."}
                      </p>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="date">
                  <Dates
                    dates={courseDetail.dates}
                    locale={locale}
                    course={courseDetail.course}
                  />
                </TabsContent>
              </Tabs>
            </main>
            <LearningObjectives data={courseDetail.what_will_learn} locale={locale} />
            <Certificate locale={locale} />
            <CourseRecommendations courses={courses.data} locale={locale} />
            <CourseVideoCard video={courseDetail.video} locale={locale} />
          </Suspense>
        </Content_extend>
      </div>
    </>
  );
}
