import Image from "next/image"
import Link from "next/link"

export default function CourseCategories({categories ,params}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={`/${params.locale}/${params.slug}/${category.slug}`}
          className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image src={category.icon || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-blue-800 font-medium">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

