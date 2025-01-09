import Image from 'next/image'
import React from 'react'

const Banner = ({customerServiceHeading}) => {
  return (
    <div>
        <div className="banner-container md:mb-16 mb-4">
                <div className="relative h-32 banner w-screen sm:h-64">
                  <Image
                    src="/plan.webp"
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Text box overlay */}
                  <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[300px] flex justify-center items-center h-[40px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
                    <div>
                      <p className="text-[16px] font-semibold text-center sm:text-xl text-primary">
                        <span className="text-center text-secondary">{customerServiceHeading}</span>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Banner