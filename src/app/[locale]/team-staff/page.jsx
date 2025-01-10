import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeaderSection from '@/components/HeaderSection'
import Banner from '@/components/Banner'
import Link from 'next/link'

const teamMembers = [
  { name: 'John Doe', role: 'Principal', image: '/placeholder.svg?height=200&width=200', bio: 'Dr. John Doe has over 20 years of experience in education leadership. He holds a Ph.D. in Educational Administration and is committed to fostering a culture of excellence and innovation.' },
  { name: 'Jane Smith', role: 'Vice Principal', image: '/placeholder.svg?height=200&width=200', bio: 'Jane Smith, M.Ed., brings a wealth of classroom and administrative experience to her role. She is passionate about curriculum development and student engagement.' },
  { name: 'Mike Johnson', role: 'Head of Academics', image: '/placeholder.svg?height=200&width=200', bio: 'With a background in both STEM and humanities, Mike Johnson leads our academic programs with a focus on interdisciplinary learning and critical thinking skills.' },
  { name: 'Sarah Lee', role: 'Student Services Coordinator', image: '/placeholder.svg?height=200&width=200', bio: 'Sarah Lee is dedicated to ensuring every student receives the support they need to thrive. She oversees counseling, health services, and extracurricular activities.' },
  { name: 'David Chen', role: 'Technology Director', image: '/placeholder.svg?height=200&width=200', bio: 'David Chen keeps our academy at the forefront of educational technology. He implements and manages digital learning tools and cybersecurity measures.' },
  { name: 'Emily Brown', role: 'Head of Arts Department', image: '/placeholder.svg?height=200&width=200', bio: 'Emily Brown is an accomplished artist and educator who believes in the power of creativity to enhance learning across all subjects.' },
]

export default function TeamStaff({params}) {
  return (
    <><HeaderSection params={params.locale} />
        <Banner customerServiceHeading={'Team'}/>
        <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-4">

          <Tabs defaultValue="all" className="mb-6 sm:mb-8">
              <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All Staff</TabsTrigger>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {teamMembers.map((member, index) => (
                          <Card key={index} className="overflow-hidden">
                              <Image src={'/member.webp'} alt={member.name} width={200} height={200} className="w-full h-48 object-cover" />
                              <CardHeader>
                                  <CardTitle>{member.name}</CardTitle>
                                  <CardDescription>{member.role}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-sm">{member.bio}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
              <TabsContent value="leadership">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {teamMembers.slice(0, 3).map((member, index) => (
                          <Card key={index} className="overflow-hidden">
                              <Image src={'/member2.webp'} alt={member.name} width={200} height={200} className="w-full h-48 object-cover" />
                              <CardHeader>
                                  <CardTitle>{member.name}</CardTitle>
                                  <CardDescription>{member.role}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-sm">{member.bio}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
              <TabsContent value="faculty">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {teamMembers.slice(3).map((member, index) => (
                          <Card key={index} className="overflow-hidden">
                              <Image src={'/member.webp'} alt={member.name} width={200} height={200} className="w-full h-48 object-cover" />
                              <CardHeader>
                                  <CardTitle>{member.name}</CardTitle>
                                  <CardDescription>{member.role}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-sm">{member.bio}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </TabsContent>
          </Tabs>

          <section className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {['Excellence', 'Innovation', 'Integrity', 'Collaboration'].map((value, index) => (
                      <Card key={index}>
                          <CardHeader>
                              <CardTitle className="text-center">{value}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-center">We strive for {value.toLowerCase()} in all aspects of our work, fostering a culture of continuous improvement and ethical behavior.</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </section>

          <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Join Our Team</h2>
              <Card>
                  <CardContent className="text-center py-4 sm:py-6">
                      <p className="mb-4">We're always looking for passionate educators to join our team. If you're committed to making a difference in students' lives, we want to hear from you!. </p>
                      <Link href={`/${params.locale}/apply?type=team`} className='text-white bg-primary p-2 rounded-sm'>Join Our Team</Link>
                  </CardContent>
              </Card>
          </section>
      </div></>
  )
}

