import HeaderSection from "@/components/HeaderSection"

const workfields = [
  { title: 'K-12 Education', description: 'Comprehensive programs for primary and secondary education.' },
  { title: 'Higher Education', description: 'Specialized courses and degree programs for college and university students.' },
  { title: 'Professional Development', description: 'Continuing education and skill enhancement for working professionals.' },
  { title: 'Special Education', description: 'Tailored programs for students with special needs and learning differences.' },
  { title: 'Online Learning', description: 'Digital platforms and resources for remote and self-paced education.' },
  { title: 'Educational Research', description: 'Cutting-edge studies and innovations in teaching methodologies.' },
]

export default function Workfield({params}) {
  return (
    <><HeaderSection params={params.locale} /><div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Our Workfields</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workfields.map((field, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary">
                      <h2 className="text-2xl font-semibold mb-4">{field.title}</h2>
                      <p className="text-gray-600">{field.description}</p>
                  </div>
              ))}
          </div>
      </div></>
 
  )
}

