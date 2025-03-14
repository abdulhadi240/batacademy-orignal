import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderSection from "@/components/HeaderSection";
import Banner from "@/components/Banner";
import Link from "next/link";
import DOMPurify from "dompurify";


export default async function BoardOfAdvisers({ params }) {
  const locale = params.locale || "en"
  const isArabic = params.locale === "ar";

  const board = await fetch(`${process.env.BACKEND_URL}/advisor`,{
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language" : locale
    }
  }).then((res)=>res.json())

  const faq = await fetch(`${process.env.BACKEND_URL}/advisory-question`,{
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language" : locale
    }
  }).then((res)=>res.json())
  

  return (
    <>
      <HeaderSection params={params.locale} />
      <Banner
        customerServiceHeading={
          isArabic ? "مجلس المستشارين" : "Board Of Advisors"
        }
      />

      <div
        className={`container mx-auto px-2 sm:px-4 py-6 sm:py-8 ${
          isArabic ? "rtl text-right" : "ltr text-left"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {board?.data?.map((adviser, index) => (
            <Card key={index} className="flex flex-col h-full">
              <Image
                src={adviser.image}
                alt={adviser.name[isArabic ? "ar" : "en"]}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{adviser.name}</CardTitle>
                <CardDescription>
                  {adviser.job_title}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
  <p className="text-sm" dangerouslySetInnerHTML={{ __html: (adviser.description) }} />
</CardContent>
            </Card>
          ))}
        </div>

        <section
  className={`mb-8 sm:mb-12 ${isArabic ? "rtl text-right" : "ltr text-left"}`}
  dir={isArabic ? "rtl" : "ltr"} // Explicitly set the direction
>
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
    {isArabic ? "تأثير مجلس المستشارين لدينا" : "Our Advisory Board's Impact"}
  </h2>
  
  <Accordion type="single" collapsible className="w-full">
    {faq?.data?.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`} className="text-xl">
        <AccordionTrigger className={`text-xl ${isArabic ? "text-right" : "text-left"}`}>
          {item?.question}
        </AccordionTrigger>
        <AccordionContent className={isArabic ? "text-right" : "text-left"}>
          {item?.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</section>



<section className="text-center bg-primary text-white py-12 px-4 rounded-lg">
  <h2 className="text-3xl font-bold mb-6">
    {isArabic ? "انضم إلى شبكتنا الاستشارية" : "Join Our Advisory Network"}
  </h2>
  <p className="mb-8 max-w-2xl mx-auto">
    {isArabic
      ? "نحن نسعى دائمًا لتوسيع شبكتنا من خبراء التعليم. إذا كنت شغوفًا بتشكيل مستقبل التعليم ولديك خبرة لمشاركتها، فنود أن نسمع منك."
      : "We're always looking to expand our network of education experts. If you're passionate about shaping the future of education and have expertise to share, we'd love to hear from you."}
  </p>
  <Link
    href={`/${locale}/contact_us`}
    className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
  >
    {isArabic ? "قدم للانضمام" : "Apply To Join"}
  </Link>
</section>
    </div>
    </>
  );
}