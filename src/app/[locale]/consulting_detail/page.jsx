import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Server, Database, Plus } from 'lucide-react'
import HeaderSection from "@/components/HeaderSection"
import CarasoulCourse from "@/components/CarasoulCourse"
import fetchData, { GetSpecialization } from "@/actions/server"

export default async function ConsultingPage() {
   const course_carasoul = await fetchData(
       `${process.env.BACKEND_URL}/courses`,
       'en'
     );

  return (
    <><HeaderSection /><div className="min-h-screen bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl xl:text-6xl/none">
              De-risk tomorrow by boosting cybersecurity today
            </h1>
            <p className="text-lg text-gray-600">
              Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              Get Started
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 "></div>
            <img
              src="/blog.png"
              alt="Cybersecurity Illustration"
              className="relative z-10 rounded-lg"
              width={600}
              height={400} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">What we can do</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader>
                <service.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Name" className="border-gray-200" />
              <Input placeholder="Email" type="email" className="border-gray-200" />
            </div>
            <Input placeholder="Subject" className="border-gray-200" />
            <Textarea placeholder="Message" className="border-gray-200" rows={6} />
            <Button className="w-full bg-primary hover:bg-primary/80 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 group">
              <AccordionTrigger className="text-left md:text-xl text-gray-900 [&[data-state=open]>div>svg]:rotate-45 [&>svg]:hidden">
                {faq.question}
                <div className="relative flex h-6 w-6 items-center justify-center">
                  <Plus className="h-4 w-4 shrink-0 text-primary transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
    <div>
        <h1 className="text-primary font-bold text-xl md:px-10 px-4 pt-10">
          Recommended Post
        </h1>
        <CarasoulCourse data={course_carasoul} carasoul={true} />
      </div>
    </>
  )
}

const services = [
  {
    icon: Shield,
    title: "Secure your technology platforms",
    description: "Protect your digital assets with state-of-the-art security measures and continuous monitoring.",
  },
  {
    icon: Lock,
    title: "Enhance operational integrity",
    description: "Implement robust security protocols to maintain the integrity of your business operations.",
  },
  {
    icon: Server,
    title: "Strengthen infrastructure resilience",
    description: "Build a resilient infrastructure that can withstand and recover from cyber threats.",
  },
  {
    icon: Database,
    title: "Safeguard sensitive data",
    description: "Protect your valuable data with advanced encryption and access control mechanisms.",
  },
]

const faqs = [
  {
    question: "What cybersecurity services do you offer?",
    answer: "We offer a comprehensive range of cybersecurity services including security assessments, threat detection, incident response, and security strategy development.",
  },
  {
    question: "How do you handle data privacy?",
    answer: "We follow strict data privacy protocols and comply with international standards to ensure your sensitive information is protected at all times.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including finance, healthcare, technology, and government sectors, each with customized security solutions.",
  },
  {
    question: "How quickly can you respond to security incidents?",
    answer: "Our team provides 24/7 incident response support with guaranteed response times based on incident severity.",
  },
]

