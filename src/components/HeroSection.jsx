import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <Image
        src="https://batdacademy.com/uploads/1586169048WhatsApp%20Image%202020-04-06%20at%2012.39.52%20PM(2).jpeg"
        alt="Abu Dhabi"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Training Courses In Abu Dhabi
        </h1>
      </div>
    </div>
  )
}

