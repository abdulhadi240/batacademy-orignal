import { Check } from 'lucide-react'

export default function LearningObjectives() {
  const objectives = [
    [
      "Build a Digital Marketing Strategy",
      "Find Your Online Audience",
      "Drive Targeted Traffic",
      "Analyze Website Data",
      "Create Converting Facebook Ads",
      "Build a Community"
    ],
    [
      "Master ChatGPT with Prompt Engineering",
      "Create a Website in 24 Hours",
      "Build an Email List",
      "Create Converting Google Ads",
      "Create a Content Strategy Plan",
      "Organic Facebook Marketing"
    ]
  ]

  return (
    <div className="p-6 max-w-[850px] mx-auto border-[1px]">
      <h2 className="text-3xl font-bold mb-8">What you'll learn</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {objectives.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-4">
            {column.map((objective, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base -mt-1">{objective}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
