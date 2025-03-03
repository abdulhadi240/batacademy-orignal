"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg w-64 overflow-hidden shadow-sm h-full transform-gpu"
    >
      <div className="relative h-40 group">
        <div className="absolute top-2 right-2 bg-white/80 text-xs font-medium px-2 py-1 rounded z-10">
          {course.location}
        </div>
        <div className="relative h-full overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="p-2 md:p-4">
        <h3 className="text-sm font-medium line-clamp-1 text-slate-800 mb-2 group-hover:text-slate-600 transition-colors duration-200">
          {course.title}
        </h3>

        {/* Dates Section with Icons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {course.dates.map((date, index) => (
            <div key={index} className="flex items-center text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
              {date}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-3 justify-between">
          <Button className=" bg-slate-800 px-8 hover:bg-slate-700 text-white text-xs rounded py-1 transition-all duration-200 hover:shadow-lg">
            Register
          </Button>
          <Link href={'/course'}>
            <Button
              variant="outline"
              className=" border-slate-800 px-8 text-slate-800 hover:bg-slate-100 text-xs rounded py-1 transition-all duration-200 hover:shadow-lg"
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
