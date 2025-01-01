import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clock, Monitor } from "lucide-react";
import HeaderSection from "@/components/HeaderSection";
import { MdFacebook } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Certificate from "@/components/Certificate";
import LearningObjectives from "@/components/LearningObjectives";
import { CiLocationOn } from "react-icons/ci";
import CourseRecommendations from "@/components/course-recommendations";
import Dates from "@/components/Dates";
import CarasoulCourse from "@/components/CarasoulCourse";
import fetchData from "@/actions/server";

export default async function Page({params}) {
  const {locale} = await params

  const course_carasoul = await fetchData(`${process.env.BACKEND_URL}/courses`,locale)

  return (

    <>
      <HeaderSection />
      <div className="min-h-screen">
        {/* Hero Section with Course Info */}
        <section className="relative h-[500px] md:h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-slate-900/50">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.lpcentre.com/course_header_image/Accounting_1634833340.jpg')",
                zIndex: -1,
              }}
            />
          </div>
          <div className="container relative h-full flex flex-col justify-center gap-6 text-white">
            <div className="grid sm:grid-cols-[1fr,auto] gap-8 items-start mx-10 ">
              <div className="space-y-5">
                <h1 className="text-4xl text-center  md:mt-10 md:text-start md:text-4xl lg:text-4xl font-bold">
                  Advanced Financial Accounting
                </h1>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  <span className="items-center hidden md:block rounded-md bg-secondary md:px-4 md:py-2 px-2 py-1 text-sm">
                    Accounting, Finance & Budgeting
                  </span>
                  <Button
                    variant="secondary"
                    className="bg-primary flex justify-center hover:bg-primary/80 text-white"
                  >
                    Also Available Online
                  </Button>
                </div>
              </div>

              {/* Course Info Card - Now overlaid on the hero image */}
              <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 border border-gray-200 w-full   z-50">
                <h2 className="text-2xl font-bold text-gray-800">
                  Course Information
                </h2>
                <div className="space-y-5">
                  {/* Course Duration */}
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-sm text-gray-600">Duration:</p>
                      <p className="font-medium text-gray-800">7 Days</p>
                    </div>
                  </div>

                  {/* Course Type */}
                  <div className="flex items-center gap-4">
                    <Monitor className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="flex justify-between items-center w-full gap-4">
                      <p className="text-sm text-gray-600">Mode:</p>
                      <p className="font-medium text-gray-800">In Classroom</p>
                    </div>
                  </div>

                  

                 

                  {/* CTA Button */}
                  <Button className="w-full bg-primary text-white hover:bg-primary/80 rounded-md py-2 text-lg font-medium">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className=" py-8 max-w-[870px]">
          {/* Course Details */}
          <Tabs defaultValue="introduction" className="md:mx-5">
            <div className="flex justify-between items-center ">
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
                    Course Date
                  </TabsTrigger>
                  <TabsTrigger value="cost" className="text-base">
                    Course Cost
                  </TabsTrigger>
                </div>
                <div className=" md:justify-between hidden md:flex gap-4">
                  <button className=" text-white rounded-full flex items-center">
                    <span className="flex items-center bg-primary gap-2 px-4 py-0.5 rounded-sm">
                      <MdFacebook color="[#152765]" size={28} /> Share
                    </span>
                  </button>

                  {/* Email Button */}
                  <button className=" text-white rounded-full flex items-center">
                    <span className="flex items-center bg-secondary gap-2 px-4 py-1 rounded-sm">
                      <SiGmail color="[#B12E33]" size={20} /> Email
                    </span>
                  </button>
                </div>
              </TabsList>

              {/* Sharing Buttons */}
              <div className="hidden-mobile flex space-x-3">
                {/* Facebook Share */}
              </div>
            </div>
            <TabsContent value="introduction">
              <p className="text-muted-foreground mx-2">
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
              </p>
            </TabsContent>
            <TabsContent value="objectives">
              <p className="text-muted-foreground mx-2">
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
              </p>
            </TabsContent>
            <TabsContent value="content">
              <p className="text-muted-foreground mx-2">
                Course content here... The course covers a wide range of topics
                including foundational theories, advanced methodologies, and
                contemporary issues in the field. Students will engage with
                various learning materials such as textbooks, research articles,
                case studies, and multimedia resources. Interactive sessions,
                group projects, and hands-on activities will be integral parts
                of the curriculum.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
              </p>
            </TabsContent>
            <TabsContent value="date">
              <p className="text-muted-foreground mx-2">
                Course requirements content here... Students are expected to
                have a basic understanding of the subject prior to enrolling in
                this course. Regular attendance, active participation, and
                timely submission of assignments are mandatory. Additionally,
                students must complete all required readings and engage in peer
                discussions to enhance their learning experience.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
              </p>
            </TabsContent>
            <TabsContent value="cost">
              <p className="text-muted-foreground mx-2">
                Course schedule content here... The course is structured over a
                period of 12 weeks, with weekly sessions held on Mondays and
                Wednesdays from 10:00 AM to 12:00 PM. Each session will focus on
                a specific topic, with a mix of lectures, discussions, and
                practical exercises. A detailed schedule with dates and topics
                will be provided at the beginning of the course.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
                Course objectives content here... This course aims to provide a
                comprehensive understanding of the subject matter, equipping
                students with the necessary skills and knowledge to excel in
                their respective fields. By the end of this course, students
                will be able to apply theoretical concepts to practical
                scenarios, demonstrate critical thinking, and engage in informed
                discussions.
              </p>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <Certificate />
      <CourseRecommendations/>
      <Dates/>
      <div>
        <h1 className="text-primary font-bold text-2xl px-10 pt-10">Recommended Courses</h1>
      <CarasoulCourse data={course_carasoul} carasoul={true}/>
      </div>
    </>

  );
}