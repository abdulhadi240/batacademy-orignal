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
import NotFound from "@/app/[locale]/not-found";

export default async function Page({ params }) {
  const { locale, specialization, slug, category ,course } = params;
  // Fetch city data
    const cityResponse = await fetch(`${process.env.BACKEND_URL}/city/${slug}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    const courseResponse = await fetch(`${process.env.BACKEND_URL}/course/${course}`, {
      next: { revalidate: 60 },
      headers: {
          'Content-Type': 'application/json',
          'Accept-Language': locale,
      },
  });

    // Fetch specialization data
    const specialResponse = await fetch(`${process.env.BACKEND_URL}/specialization/${specialization}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    // Fetch category data
    const categoryResponse = await fetch(`${process.env.BACKEND_URL}/category/${category}`, {
        next: { revalidate: 60 },
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    });

    // Check if fetch requests failed
    if (!cityResponse.ok || !categoryResponse.ok || !specialResponse.ok || !courseResponse.ok) {
        return <NotFound params={params} />;
    }

    const cityResult = await cityResponse.json();
    const categoryResult = await categoryResponse.json();
    const specializations = await specialResponse.json();
    const courses = await courseResponse.json();

    // Validate API responses
    if (
        cityResult.code !== 200 ||
        !cityResult.data ||
        categoryResult.code !== 200 ||
        !categoryResult.data ||
        specializations.code !== 200 ||
        !specializations.data ||
        courses.code !== 200 ||
        !courses.data
    ) {
        return <NotFound params={params} />;
    }

  // Fetch course details from API
  const courseDetail = await fetchData(`/course/${course}`, locale);
  // Assuming courseDetail contains the course data (name, details, content, dates, image, etc.)

  // Fetch course carousel data
  const course_carasoul = await fetchData(
    `${process.env.BACKEND_URL}/courses`,
    locale
  );

  // Fetch specialization categories for extended content
  const specialization_category = await fetchData('/list/category', locale);

  // Optionally, you can still fetch a default specialization list if needed
  // const category = await GetSpecialization();

  return (
    <>
      <HeaderSection params={locale} />
      <div className="min-h-screen">
        {/* Hero Section with Course Info */}
        <section className="relative h-[500px] md:h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-slate-900/50">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                // Use API image if available, otherwise fallback to static image
                backgroundImage: `url('${
                  courseDetail?.image ||
                  "https://www.lpcentre.com/course_header_image/Accounting_1634833340.jpg"
                }')`,
                zIndex: -1,
              }}
            />
          </div>
          <div className="container relative h-full flex flex-col justify-center gap-6 text-white">
            <div className="grid sm:grid-cols-[1fr,auto] gap-8 items-start mx-10">
              <div className="space-y-5">
                <h1 className="text-4xl text-center max-w-2xl md:mt-10 md:text-start md:text-4xl lg:text-4xl font-bold">
                  {courseDetail?.name || "Course Name"}
                </h1>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  <span className="items-center hidden md:block rounded-md bg-secondary md:px-4 md:py-2 px-2 py-1 text-sm">
                    {courseDetail?.specialization ||
                      "Accounting, Finance & Budgeting"}
                  </span>
                  <Button
                    variant="secondary"
                    className="bg-primary flex justify-center hover:bg-primary/80 text-white"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>

              {/* Course Info Card */}
              <div className="bg-white shadow-lg rounded-xl px-6 py-3 space-y-3 border border-gray-200 md:sticky md:top-10 z-20">
                <h2 className="text-lg text-center font-bold text-gray-800">
                  Course Information
                </h2>
                <div className="space-y-2">
                  {/* Course Duration */}
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">Duration:</p>
                      <p className="font-medium text-xs text-gray-800">
                        {/* Fallback static value if duration is not available */}
                        {courseDetail?.duration || "7 Days"}
                      </p>
                    </div>
                  </div>

                  {/* Course Date */}
                  <div className="flex items-center gap-4">
                    <CalendarMinus className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">Date</p>
                      <p className="font-medium text-xs text-gray-800">
                        {/* You can choose to show the first available date */}
                        {courseDetail?.dates?.[0]?.course_date || "Jan 06 2025"}
                      </p>
                    </div>
                  </div>

                  {/* Course City */}
                  <div className="flex items-center gap-4">
                    <MapPinned className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">City</p>
                      <p className="font-medium text-xs text-gray-800">
                        {courseDetail?.city || "London"}
                      </p>
                    </div>
                  </div>

                  {/* Course Fees */}
                  <div className="flex items-center gap-4">
                    <CircleDollarSign className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-xs text-gray-600">Fees</p>
                      <p className="font-medium text-xs text-gray-800">
                        {courseDetail?.fees
                          ? `$${courseDetail.fees}`
                          : "$1400"}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/80 rounded-md py-2 text-sm font-medium">
                    Get In Touch
                  </Button>
                  <Link href="register">
                    <Button className="w-full mt-2 bg-primary text-white hover:bg-primary/80 rounded-md py-2 text-sm font-medium">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <Content_extend
          categories={specialization_category}
          params={params.locale}
        >
          <Suspense fallback={"loading..."}>
            <main className="py-8 max-w-[870px]">
              {/* Course Details Tabs */}
              <Tabs defaultValue="introduction" className="md:mx-5">
                <div className="flex justify-between items-center">
                  {/* Tabs List */}
                  <TabsList className="custom-scrollbar flex h-9 rounded-lg text-muted-foreground flex-row justify-between px-2 py-6 text-xs bg-[#f5f5f5] w-full md:text-base overflow-x-auto whitespace-nowrap">
                    <div className="">
                      <TabsTrigger value="introduction" className="text-base">
                        Summary
                      </TabsTrigger>
                      <TabsTrigger value="objectives" className="text-base">
                        Objectives
                      </TabsTrigger>
                      <TabsTrigger value="content" className="text-base">
                        Course Content
                      </TabsTrigger>
                      <TabsTrigger value="date" className="text-base">
                        Dates
                      </TabsTrigger>
                      <TabsTrigger value="cost" className="text-base">
                        Cost
                      </TabsTrigger>
                    </div>
                    <div className="md:justify-between hidden md:flex gap-4">
                      <button className="text-white rounded-full flex items-center">
                        <span className="flex items-center bg-primary gap-2 px-4 py-0.5 rounded-sm">
                          <MdFacebook color="[#152765]" size={28} /> Share
                        </span>
                      </button>
                      <button className="text-white rounded-full flex items-center">
                        <span className="flex items-center bg-secondary gap-2 px-4 py-1 rounded-sm">
                          <SiGmail color="[#B12E33]" size={20} /> Email
                        </span>
                      </button>
                    </div>
                  </TabsList>
                </div>

                <TabsContent value="introduction">
                  <p className="text-muted-foreground mx-2">
                    {/* Use API summary/details if available */}
                    {courseDetail?.details ||
                      "Course objectives content here... This course aims to provide a comprehensive understanding of the subject matter, equipping students with the necessary skills and knowledge to excel in their respective fields."}
                  </p>
                </TabsContent>
                <TabsContent value="objectives">
                  <p className="text-muted-foreground mx-2">
                    {/* Fallback static objectives text */}
                    Course objectives content here...
                  </p>
                </TabsContent>
                <TabsContent value="content">
                  <p className="text-muted-foreground mx-2">
                    {/* Use API content if available */}
                    {courseDetail?.content ||
                      "Course content here... The course covers a wide range of topics including foundational theories, advanced methodologies, and contemporary issues in the field."}
                  </p>
                </TabsContent>
                <TabsContent value="date">
                  <Dates dates={courseDetail?.dates || []} />
                </TabsContent>
                <TabsContent value="cost">
                  <p className="text-muted-foreground mx-2">
                    {/* No cost information from API? Fallback static text */}
                    Course schedule content here...
                  </p>
                </TabsContent>
              </Tabs>
            </main>
            <LearningObjectives />
            <Certificate />
            <CourseRecommendations />
            <CourseVideoCard />
          </Suspense>
        </Content_extend>
      </div>

      <div>
        <h1 className="text-primary font-bold text-xl md:px-10 px-4 pt-10">
          Recommended Courses
        </h1>
        <CarasoulCourse data={course_carasoul} carasoul={true} />
      </div>
    </>
  );
}
