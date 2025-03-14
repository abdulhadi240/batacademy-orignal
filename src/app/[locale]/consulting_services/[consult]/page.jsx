import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import HeaderSection from "@/components/HeaderSection";
import BlogCarousel from "@/components/BlogCarousel";
import fetchData from "@/actions/server";
import Form from "../components/Form";

// FAQs with Arabic translations
const faqs = [
  {
    question: "What cybersecurity services do you offer?",
    question_ar: "ما هي خدمات الأمن السيبراني التي تقدمونها؟",
    answer: "We offer a comprehensive range of cybersecurity services including security assessments, threat detection, incident response, and security strategy development.",
    answer_ar: "نقدم مجموعة شاملة من خدمات الأمن السيبراني بما في ذلك تقييمات الأمان، وكشف التهديدات، والاستجابة للحوادث، وتطوير استراتيجية الأمان."
  },
  {
    question: "How do you handle data privacy?",
    question_ar: "كيف تتعاملون مع خصوصية البيانات؟",
    answer: "We follow strict data privacy protocols and comply with international standards to ensure your sensitive information is protected at all times.",
    answer_ar: "نتبع بروتوكولات صارمة لخصوصية البيانات ونلتزم بالمعايير الدولية لضمان حماية معلوماتك الحساسة في جميع الأوقات."
  },
  {
    question: "What industries do you serve?",
    question_ar: "ما هي الصناعات التي تخدمونها؟",
    answer: "We serve a wide range of industries including finance, healthcare, technology, and government sectors, each with customized security solutions.",
    answer_ar: "نخدم مجموعة واسعة من الصناعات بما في ذلك التمويل، والرعاية الصحية، والتكنولوجيا، والقطاعات الحكومية، كل منها بحلول أمان مخصصة."
  },
  {
    question: "How quickly can you respond to security incidents?",
    question_ar: "ما مدى سرعة استجابتكم لحوادث الأمان؟",
    answer: "Our team provides 24/7 incident response support with guaranteed response times based on incident severity.",
    answer_ar: "يوفر فريقنا دعم استجابة للحوادث على مدار 24/7 مع أوقات استجابة مضمونة بناءً على شدة الحادث."
  },
];

export default async function ConsultingPage({ params }) {
  const { locale, consult } = params;
  const isArabic = locale === "ar";
  const consulting_detail = await fetchData(`/consultancy-services/${consult}`, locale);
  const blogs = await fetchData(`/post?page=12`, locale);


  return (
    <>
      <HeaderSection params={locale} />
      <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none">
                {consulting_detail.name}
              </h1>
              <p className="text-lg text-gray-600">
                {consulting_detail.description}
              </p>
            </div>
            <div className="relative">
              <img
                src={consulting_detail.image}
                alt={consulting_detail.name}
                className="relative z-10 rounded-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

      <Form text={consulting_detail.name} params={params.locale}/>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            {isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 group">
                <AccordionTrigger className="text-left md:text-xl text-gray-900 [&[data-state=open]>div>svg]:rotate-45 [&>svg]:hidden">
                  {isArabic ? faq.question_ar : faq.question}
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    <Plus className="h-4 w-4 shrink-0 text-primary transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {isArabic ? faq.answer_ar : faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
      {/* Blog Carousel */}
      <div>
        <h1 className="text-primary font-bold text-xl md:px-10 px-4 pt-10">
          {isArabic ? "المقالات الموصى بها" : "Recommended Post"}
        </h1>
        <BlogCarousel data={blogs.data} blog params={locale} />
      </div>
    </>
  );
}