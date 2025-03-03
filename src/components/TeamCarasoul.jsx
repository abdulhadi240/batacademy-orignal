import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Team from "./Team"

export function TeamCarasoul({ locale }) {
  const teamMembers = [
    {
      image: '/4.webp',
      name: locale === 'en' ? 'Nattasha Julie' : 'ناتاشا جولي',
      designation: locale === 'en' ? 'Design, Australia' : 'التصميم، أستراليا',
      number: '+1 (378) 400-1234',
      email: 'julie@email.com',
    },
    {
      image: '/Photo.webp',
      name: locale === 'en' ? 'John Doe' : 'جون دو',
      designation: locale === 'en' ? 'Developer, USA' : 'مطور، أمريكا',
      number: '+1 (555) 123-4567',
      email: 'john@email.com',
    },
    {
      image: '/2.webp',
      name: locale === 'en' ? 'Jane Smith' : 'جين سميث',
      designation: locale === 'en' ? 'Marketing, UK' : 'التسويق، المملكة المتحدة',
      number: '+44 (20) 7000-1234',
      email: 'jane@email.com',
    },
  ]

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="flex">
          {teamMembers.map((member, index) => (
            <CarouselItem 
              key={index} 
              className="basis-full sm:basis-1/2 lg:basis-1/3 p-2"
            >
              <Team {...member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full shadow-md md:left-4" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full shadow-md md:right-4" />
      </Carousel>
    </div>
  )
}
