import Banner from '@/components/Banner'
import HeaderSection from '@/components/HeaderSection'
import Image from 'next/image'

export default async function WorkArea({params}) {
  const locale = params.locale || "en"
  const data = await fetch(`${process.env.BACKEND_URL}/work-area`,{
    headers:{
      'Accept-Language': locale
    }
  }).then((res)=>res.json())
  

  return (
    <><HeaderSection params={params.locale} />
        <Banner customerServiceHeading={'Work Area'}/>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.data?.map((area, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                      <Image src={area.image} alt={area.name} width={300} height={300} className="w-full h-full transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{area.name}</h2>
                  </div>
              ))}
          </div>
      </div></>

  )
}

