import Banner from "@/components/Banner"
import HeaderSection from "@/components/HeaderSection"


export default async function Workfield({params}) {
  const locale = params.locale || "en"
  const data = await fetch(`${process.env.BACKEND_URL}/work-field`,{
    headers:{
      'Accept-Language': locale
    }
  }).then((res)=>res.json())

  console.log(data);
  


  return (
    <><HeaderSection params={params.locale} />
        <Banner customerServiceHeading={'Work Feild'}/>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.data.map((field, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary">
                      <h2 className="text-2xl font-semibold mb-4">{field.name}</h2>
                      <p className="text-gray-600">{field.description}</p>
                  </div>
              ))}
          </div>
      </div></>
 
  )
}

