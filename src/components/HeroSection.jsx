import Image from 'next/image'

export default function HeroSection({data}) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <Image
        src={data}
        alt="city image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}

