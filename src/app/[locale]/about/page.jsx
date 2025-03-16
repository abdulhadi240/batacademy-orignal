import HeaderSection from "@/components/HeaderSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Users, MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutUs({params}) {
  return (
    <><HeaderSection params={params.locale} /><div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section with 3 Images */}
        <section className="w-full py-6 md:py-10 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 lg:gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About British Academy</h1>
                <p className="text-muted-foreground md:text-xl">
                  Transforming education through hands-on learning experiences since 2010. Our mission is to provide
                  high-quality physical courses that empower students to achieve their full potential.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Students"
                  width={300}
                  height={300}
                  alt="Students in classroom"
                  className="rounded-lg object-cover w-full h-full" />
                <div className="grid grid-rows-2 gap-2 md:gap-3">
                  <Image
                    src="/placeholder.svg?height=150&width=300&text=Learning"
                    width={300}
                    height={150}
                    alt="Hands-on learning"
                    className="rounded-lg object-cover w-full h-full" />
                  <Image
                    src="/placeholder.svg?height=150&width=300&text=Campus"
                    width={300}
                    height={150}
                    alt="Campus facilities"
                    className="rounded-lg object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-6 md:py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-4 lg:gap-6 py-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">From Vision to Reality</h3>
                <p className="text-muted-foreground">
                  What started as a small workshop in 2010 has grown into a comprehensive educational institution
                  offering a wide range of physical courses across multiple disciplines. Our journey has been defined by
                  a commitment to excellence and a belief in the transformative power of education.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve thousands of students annually, providing them with the skills, knowledge, and
                  confidence they need to succeed in their chosen fields. Our courses are designed to bridge the gap
                  between theory and practice, ensuring that our students are well-prepared for the challenges of the
                  real world.
                </p>
              </div>
              <div className="mx-auto w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="The evolution of EduAcademy"
                  className="aspect-video object-cover w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-6 md:py-10 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="text-muted-foreground md:text-xl">
                At EduAcademy, our values guide everything we do. They shape our curriculum, inform our teaching
                methods, and define our relationships with students.
              </p>
            </div>
            <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Excellence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We strive for excellence in all aspects of our educational offerings, from curriculum design to
                    teaching methods.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Inclusivity</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We believe that education should be accessible to all, regardless of background or prior experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Innovation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We continuously evolve our teaching methods and course materials to reflect the latest developments
                    in each field.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="w-full py-6 md:py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="text-muted-foreground md:text-xl">
                Our instructors are industry professionals with years of experience in their respective fields.
              </p>
            </div>
            <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Founder & Lead Instructor",
                  bio: "With over 15 years of experience in education, Dr. Johnson leads our science and technology courses.",
                },
                {
                  name: "Prof. Michael Chen",
                  role: "Senior Instructor",
                  bio: "An award-winning educator specializing in arts and humanities courses with a focus on practical applications.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Curriculum Director",
                  bio: "Emma ensures our courses meet the highest standards of educational excellence and practical relevance.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&text=${encodeURIComponent(member.name.charAt(0))}`}
                        width={96}
                        height={96}
                        alt={member.name}
                        className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-muted-foreground mt-2">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-6 md:py-10 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
              <p className="text-muted-foreground md:text-xl">
                Don't just take our word for it. Hear from students who have experienced our courses firsthand.
              </p>
            </div>
            <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {[
                {
                  name: "James Wilson",
                  course: "Advanced Photography",
                  quote: "The hands-on approach made all the difference. I learned more in 8 weeks than I did in a year of self-study.",
                },
                {
                  name: "Aisha Patel",
                  course: "Culinary Arts Fundamentals",
                  quote: "The instructors are incredibly knowledgeable and supportive. This course changed my career trajectory.",
                },
                {
                  name: "Carlos Mendez",
                  course: "Digital Marketing Masterclass",
                  quote: "The practical exercises and real-world projects gave me skills I could immediately apply in my job.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${encodeURIComponent(testimonial.name.charAt(0))}`}
                          width={40}
                          height={40}
                          alt={testimonial.name}
                          className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="w-full py-6 md:py-10 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 lg:gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Approach to Learning
                </h2>
                <p className="text-muted-foreground">
                  At EduAcademy, we believe that the best learning happens through doing. Our physical courses are
                  designed to provide hands-on experience in a supportive environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Small class sizes for personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Practical, project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Industry-relevant curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>State-of-the-art facilities and equipment</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Students engaged in hands-on learning"
                  className="aspect-video object-cover w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-6 md:py-10 lg:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-2 text-center">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p className="md:text-xl text-white">
                Browse our catalog of courses and find the perfect fit for your educational goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <Button size="lg" variant="secondary" className="text-white">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white">
                  Request Information
                </Button>
              </div>
            </div>
          </div>
        </section>

       
      </main>
    </div></>
  )
}

