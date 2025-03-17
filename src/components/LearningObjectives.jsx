import { Check } from 'lucide-react'

export default function LearningObjectives({ data , locale }) {

  return (
    <div className="p-6 max-w-[840px] m-4 border-[1px] rounded-lg">
      <h2 className="text-xl font-bold mb-8">{locale === 'ar' ? "ما سوف تتعلمه" : "What Will You Learn"}</h2>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
        {data?.length > 0 &&
          data.map((column, columnIndex) => (
            <div key={columnIndex} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-base -mt-1">{column.name}</span>
            </div>
          ))
        }


      </div>
    </div>
  )
}
