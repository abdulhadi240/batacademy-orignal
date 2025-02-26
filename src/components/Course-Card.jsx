"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm h-full transform-gpu"
    >
      <div className="relative h-40 w-64 group">
        <div className="absolute  top-2 right-2 bg-white/80 text-xs font-medium px-2 py-1 rounded z-10">
          {course.location}
        </div>
        <div className="relative h-full overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-slate-800 mb-4  line-clamp-3 group-hover:text-slate-600 transition-colors duration-200">
          {course.title}
        </h3>

        <div className="flex gap-2 mb-3">
          <Button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded py-1 transition-all duration-200 hover:shadow-lg">
            Registration
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-slate-800 text-slate-800 hover:bg-slate-100 text-xs rounded py-1 transition-all duration-200 hover:shadow-lg"
          >
            Details
          </Button>
        </div>

        <div className="text-slate-800 font-medium">$ {course.price}</div>
      </div>
    </motion.div>
  )
}

