const courses = [
    "Diplomatic relations, public relations, international protocols, and conference management",
    "Management and human resources",
    "Specialized media courses",
    "Economic courses covering banking, accounting, and investment",
    "Automation, information systems, and technology",
    "Health courses for institutions",
    "Warehouse management and storage projects",
    "Urban planning and city building",
    "Oil facility management and energy-related courses"
  ]
  
  export default function CourseList() {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    )
  }
  
  