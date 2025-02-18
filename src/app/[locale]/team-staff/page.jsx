"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderSection from "@/components/HeaderSection";
import Banner from "@/components/Banner";
import Link from "next/link";

const teamMembers = [
  {
    en: {
      name: "John Doe",
      role: "Principal",
      bio: "Dr. John Doe has over 20 years of experience in education leadership. He holds a Ph.D. in Educational Administration and is committed to fostering a culture of excellence and innovation."
    },
    ar: {
      name: "جون دو",
      role: "مدير",
      bio: "الدكتور جون دو لديه أكثر من 20 عامًا من الخبرة في قيادة التعليم. يحمل درجة الدكتوراه في الإدارة التعليمية ويكرس جهوده لتعزيز ثقافة التميز والابتكار."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    en: {
      name: "Jane Smith",
      role: "Vice Principal",
      bio: "Jane Smith, M.Ed., brings a wealth of classroom and administrative experience to her role. She is passionate about curriculum development and student engagement."
    },
    ar: {
      name: "جين سميث",
      role: "نائب المدير",
      bio: "تجلب جين سميث، الحاصلة على درجة الماجستير في التعليم، ثروة من الخبرة الصفية والإدارية لدورها. إنها شغوفة بتطوير المناهج الدراسية وإشراك الطلاب."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    en: {
      name: "Mike Johnson",
      role: "Head of Academics",
      bio: "With a background in both STEM and humanities, Mike Johnson leads our academic programs with a focus on interdisciplinary learning and critical thinking skills."
    },
    ar: {
      name: "مايك جونسون",
      role: "رئيس الأكاديميين",
      bio: "بفضل خلفيته في العلوم الإنسانية والعلوم، يقود مايك جونسون برامجنا الأكاديمية مع التركيز على التعلم متعدد التخصصات ومهارات التفكير النقدي."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    en: {
      name: "Sarah Lee",
      role: "Student Services Coordinator",
      bio: "Sarah Lee is dedicated to ensuring every student receives the support they need to thrive. She oversees counseling, health services, and extracurricular activities."
    },
    ar: {
      name: "سارة لي",
      role: "منسق خدمات الطلاب",
      bio: "تكرس سارة لي جهودها لضمان حصول كل طالب على الدعم الذي يحتاجه للنجاح. تشرف على الإرشاد والخدمات الصحية والأنشطة اللامنهجية."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    en: {
      name: "David Chen",
      role: "Technology Director",
      bio: "David Chen keeps our academy at the forefront of educational technology. He implements and manages digital learning tools and cybersecurity measures."
    },
    ar: {
      name: "ديفيد تشين",
      role: "مدير التكنولوجيا",
      bio: "يحافظ ديفيد تشين على أكاديميتنا في طليعة التكنولوجيا التعليمية. يقوم بتنفيذ وإدارة أدوات التعلم الرقمي وإجراءات الأمن السيبراني."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    en: {
      name: "Emily Brown",
      role: "Head of Arts Department",
      bio: "Emily Brown is an accomplished artist and educator who believes in the power of creativity to enhance learning across all subjects."
    },
    ar: {
      name: "إميلي براون",
      role: "رئيسة قسم الفنون",
      bio: "إميلي براون فنانة ومعلمة بارعة تؤمن بقوة الإبداع لتعزيز التعلم في جميع المواد الدراسية."
    },
    image: "/placeholder.svg?height=200&width=200",
  },
];

const values = {
  en: ["Excellence", "Innovation", "Integrity", "Collaboration"],
  ar: ["التميز", "الابتكار", "النزاهة", "التعاون"],
};

const joinOurTeamText = {
  en: {
    title: "Join Our Team",
    description: "We're always looking for passionate educators to join our team. If you're committed to making a difference in students' lives, we want to hear from you!",
    button: "Join Our Team",
  },
  ar: {
    title: "انضم إلى فريقنا",
    description: "نبحث دائمًا عن مدرسين شغوفين للانضمام إلى فريقنا. إذا كنت ملتزمًا بإحداث فرق في حياة الطلاب، نود أن نسمع منك!",
    button: "انضم لفريقنا",
  },
};

export default function TeamStaff({ params }) {
  const locale = params.locale || "en";
  const isArabic = locale === "ar";

  return (
    <>
      <HeaderSection params={locale} />
      <Banner customerServiceHeading={isArabic ? "فريق العمل" : "Team"} />
      <div className={`container mx-auto px-2 sm:px-4 py-6 sm:py-4 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <Tabs defaultValue="all" className="mb-6 sm:mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">{isArabic ? "كل الموظفين" : "All Staff"}</TabsTrigger>
            <TabsTrigger value="leadership">{isArabic ? "القيادة" : "Leadership"}</TabsTrigger>
            <TabsTrigger value="faculty">{isArabic ? "أعضاء الهيئة التدريسية" : "Faculty"}</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={member.image} alt={member[locale].name} width={200} height={200} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{member[locale].name}</CardTitle>
                    <CardDescription>{member[locale].role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{member[locale].bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="leadership">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.slice(0, 3).map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={member.image} alt={member[locale].name} width={200} height={200} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{member[locale].name}</CardTitle>
                    <CardDescription>{member[locale].role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{member[locale].bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="faculty">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.slice(3).map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={member.image} alt={member[locale].name} width={200} height={200} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{member[locale].name}</CardTitle>
                    <CardDescription>{member[locale].role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{member[locale].bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">{isArabic ? "قيمنا" : "Our Values"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values[locale].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">{value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{isArabic ? `نسعى لتحقيق ${value} في جميع جوانب عملنا.` : `We strive for ${value.toLowerCase()} in all aspects of our work.`}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">{joinOurTeamText[locale].title}</h2>
          <Card>
            <CardContent className="text-center py-4 sm:py-6">
              <p className="mb-4">{joinOurTeamText[locale].description}</p>
              <Link href={`/${locale}/apply?type=team`} className="text-white bg-primary p-2 rounded-sm">
                {joinOurTeamText[locale].button}
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
