import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderSection from "@/components/HeaderSection";
import Banner from "@/components/Banner";
import Link from "next/link";

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

export default async function TeamStaff({ params }) {
  const locale = params.locale || "en";
  const isArabic = locale === "ar";

  const data = await fetch(`${process.env.BACKEND_URL}/team`,{
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language':locale
    }
  }).then((res)=>res.json())

  console.log(data.data);
  

  return (
    <>
      <HeaderSection params={locale} />
      <Banner customerServiceHeading={isArabic ? "فريق العمل" : "Team"} />
      <div className={`container mx-auto px-2 sm:px-4 py-6 sm:py-4 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <Tabs defaultValue="all" className="mb-6 sm:mb-8">
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data?.data.data.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={member.image} alt={member.name} width={200} height={200} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role || 'Faculty'}</CardDescription>
                  </CardHeader>
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
        <section className="text-center bg-primary text-white py-12 px-4 rounded-lg">
  <h2 className="text-3xl font-bold mb-6">
    {isArabic ? "انضم إلى شبكتنا الاستشارية" : "Join Our Team"}
  </h2>
  <p className="mb-8 max-w-2xl mx-auto">
    {isArabic
      ? "نحن نسعى دائمًا لتوسيع شبكتنا من خبراء التعليم. إذا كنت شغوفًا بتشكيل مستقبل التعليم ولديك خبرة لمشاركتها، فنود أن نسمع منك."
      : "We're always looking to expand our network of education experts. If you're passionate about shaping the future of education and have expertise to share, we'd love to hear from you."}
  </p>
  <Link
    href={`/${locale}/apply?type=job`}
    className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    {isArabic ? "قدم للانضمام" : "Apply To Join"}
  </Link>
</section>
      </div>
    </>
  );
}
