import { CheckCircleIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import HeaderSection from '@/components/HeaderSection'
import Banner from '@/components/Banner'
import Link from 'next/link'

const services = [
  {
    name: 'Personalized Learning Plans',
    description: 'Tailored educational strategies designed to meet individual student needs and learning styles.',
    features: [
      'Customized curriculum',
      'Regular progress assessments',
      'Adaptive learning technologies',
      'One-on-one mentoring sessions'
    ]
  },
  {
    name: 'Expert Tutoring',
    description: 'Access to highly qualified tutors across various subjects to support and enhance student learning.',
    features: [
      'Subject matter experts',
      'Flexible scheduling',
      'In-person and online options',
      'Small group and individual sessions'
    ]
  },
  {
    name: 'State-of-the-Art Facilities',
    description: 'Modern, well-equipped learning environments that foster creativity, collaboration, and academic excellence.',
    features: [
      'Advanced technology labs',
      'Multimedia classrooms',
      'Collaborative study spaces',
      'Extensive library resources'
    ]
  },
  {
    name: 'Career Counseling',
    description: 'Comprehensive guidance to help students explore career paths and make informed decisions about their future.',
    features: [
      'Career aptitude assessments',
      'Industry expert talks',
      'Internship placements',
      'College application support'
    ]
  },
  {
    name: 'Extracurricular Activities',
    description: 'A wide range of programs to develop well-rounded individuals and foster personal growth.',
    features: [
      'Sports teams and clubs',
      'Arts and music programs',
      'Community service initiatives',
      'Leadership development workshops'
    ]
  },
  {
    name: 'Parent-Teacher Collaboration',
    description: 'Strong partnerships between educators and families to support student success.',
    features: [
      'Regular parent-teacher conferences',
      'Online progress tracking',
      'Parent workshops and seminars',
      'Family engagement events'
    ]
  },
]

export default function AcademyService({params}) {
  return (
    <><HeaderSection params={params.locale}/>
    <Banner customerServiceHeading={'Academy Services'}/>
    <div className="container mx-auto px-4 py-8">
          

          <Tabs defaultValue="all" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service, index) => (
                          <Card key={index} className="flex flex-col">
                              <CardHeader>
                                  <CardTitle>{service.name}</CardTitle>
                                  <CardDescription>{service.description}</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-2">
                                      {service.features.map((feature, fIndex) => (
                                          <li key={fIndex} className="flex items-center">
                                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                                              <span>{feature}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
              <TabsContent value="academic">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.slice(0, 3).map((service, index) => (
                          <Card key={index} className="flex flex-col">
                              <CardHeader>
                                  <CardTitle>{service.name}</CardTitle>
                                  <CardDescription>{service.description}</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-2">
                                      {service.features.map((feature, fIndex) => (
                                          <li key={fIndex} className="flex items-center">
                                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                                              <span>{feature}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
              <TabsContent value="support">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.slice(3).map((service, index) => (
                          <Card key={index} className="flex flex-col">
                              <CardHeader>
                                  <CardTitle>{service.name}</CardTitle>
                                  <CardDescription>{service.description}</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-2">
                                      {service.features.map((feature, fIndex) => (
                                          <li key={fIndex} className="flex items-center">
                                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                                              <span>{feature}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
          </Tabs>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                      <CardHeader>
                          <CardTitle>Proven Track Record</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>Our services have helped thousands of students achieve their academic and personal goals, with many going on to top universities and successful careers.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle>Holistic Approach</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>We believe in developing well-rounded individuals. Our services address academic, social, emotional, and practical aspects of education.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle>Continuous Innovation</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>We constantly update our services to incorporate the latest educational research and technologies, ensuring our students are always ahead of the curve.</p>
                      </CardContent>
                  </Card>
              </div>
          </section>

          <section className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                  Take the first step towards unlocking your full potential. Contact us today to learn more about our services and how we can tailor them to your unique needs.
              </p>
              <Link href={`/${params.locale}/apply?type=consultation`} className='text-white bg-primary p-2 rounded-sm'>Schedule A Consultation</Link>          </section>
      </div></>
  )
}

