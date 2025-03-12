import Image from 'next/image'
import Link from 'next/link'

const CityCard = ({ cities }) => {
  return (
    <Link href={`city/${cities.id}/${cities.slug}`}>
    <div className="relative  group overflow-hidden w-56 h-56">
      {/* Image container with internal border effect */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Inner border inside the image */}
        <div className="absolute inset-2 border border-white/80 pointer-events-none z-10"></div>

        {/* Background Image */}
        <Image
          src={cities.image}
          alt={cities.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-125 brightness-75 transition-transform duration-500"
        />

        {/* Centered Text Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 py-2 bg-black/70 border border-white text-white tracking-wide text-xs uppercase">
            {cities.name}
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CityCard
