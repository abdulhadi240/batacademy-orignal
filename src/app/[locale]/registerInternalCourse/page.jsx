import HeaderSection from "@/components/HeaderSection";
import CourseRequestForm from "./CourseRequestForm";

export default function Home({params}) {
    const {locale} = params
  return (
    <><HeaderSection params={params.locale} /><main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10">
          <CourseRequestForm locale={locale}/>
      </main></>
  )
}

