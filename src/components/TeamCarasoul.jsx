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

export function TeamCarasoul({ locale , teamMembers }) {
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
