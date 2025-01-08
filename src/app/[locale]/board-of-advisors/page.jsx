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
import { Button } from "@/components/ui/button";
import HeaderSection from "@/components/HeaderSection";

const advisers = [
  {
    name: "Dr. Emily Brown",
    expertise: "Education Policy",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Emily Brown is a renowned expert in education policy with over 15 years of experience in shaping educational reforms. She has advised numerous government bodies and international organizations on improving educational systems.",
  },
  {
    name: "Prof. David Lee",
    expertise: "Curriculum Development",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professor David Lee is a curriculum specialist with a focus on integrating 21st-century skills into traditional academic subjects. His innovative approaches have been adopted by schools worldwide.",
  },
  {
    name: "Dr. Sarah Chen",
    expertise: "Educational Technology",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Sarah Chen is at the forefront of educational technology research. Her work focuses on leveraging AI and machine learning to create personalized learning experiences for students of all ages.",
  },
  {
    name: "Dr. Michael Rodriguez",
    expertise: "Special Education",
    image: "/placeholder.svg?height=200&width=200",
    bio: "With a background in psychology and education, Dr. Michael Rodriguez specializes in developing inclusive educational strategies for students with diverse learning needs.",
  },
  {
    name: "Prof. Olivia Taylor",
    expertise: "STEM Education",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professor Olivia Taylor is passionate about promoting STEM education, particularly among underrepresented groups. She has developed several successful outreach programs and hands-on learning initiatives.",
  },
  {
    name: "Dr. James Wilson",
    expertise: "Assessment and Evaluation",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. James Wilson is an expert in educational assessment and evaluation. His research focuses on developing fair and effective methods for measuring student progress and educational outcomes.",
  },
];

export default function BoardOfAdvisers({ params }) {
  return (
    <>
      <HeaderSection params={params.locale} />
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Board of Advisors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {advisers.map((adviser, index) => (
            <Card key={index} className="flex flex-col h-full">
              <Image
                src={"/member2.webp"}
                alt={adviser.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{adviser.name}</CardTitle>
                <CardDescription>{adviser.expertise}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm">{adviser.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            Our Advisory Board's Impact
          </h2>
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1" className="text-xl">
              <AccordionTrigger className="text-xl">
                Providing Strategic Direction
              </AccordionTrigger>
              <AccordionContent>
                Our advisory board offers invaluable strategic direction,
                helping us to navigate the complexities of the educational
                landscape and make informed decisions that benefit our
                institution and students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="text-xl">
              <AccordionTrigger className="text-xl">
                Enhancing Industry Connections
              </AccordionTrigger>
              <AccordionContent>
                By leveraging their extensive networks, our advisors facilitate
                connections with industry leaders, providing students with
                opportunities for internships, mentorships, and real-world
                experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="text-xl">
              <AccordionTrigger className="text-xl">
                Promoting Innovation
              </AccordionTrigger>
              <AccordionContent>
                Our board members encourage a culture of innovation, supporting
                initiatives that push the boundaries of traditional education
                and foster creative problem-solving skills among students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="text-xl">
              <AccordionTrigger className="text-xl">
                Ensuring Quality Assurance
              </AccordionTrigger>
              <AccordionContent>
                The advisory board plays a key role in quality assurance,
                regularly reviewing our programs and providing feedback to
                ensure we maintain high standards of academic excellence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="text-xl">
              <AccordionTrigger className="text-xl">
                Supporting Faculty Development
              </AccordionTrigger>
              <AccordionContent>
                Our advisors support faculty development by offering guidance on
                professional growth, encouraging continuous learning, and
                sharing best practices in teaching and research.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            Join Our Advisory Network
          </h2>
          <Card>
            <CardContent className="text-center py-4 sm:py-6">
              <p className="mb-4">
                We're always looking to expand our network of education experts.
                If you're passionate about shaping the future of education and
                have expertise to share, we'd love to hear from you.We're always
                looking to expand our network of education experts. If you're
                passionate about shaping the future of education and have
                expertise to share, we'd love to hear from you.
              </p>
              <Button className="text-white">Apply to Join</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
