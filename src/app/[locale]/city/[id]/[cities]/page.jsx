import Image from 'next/image'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'
import ContentSection from '@/components/ContentSection'
import CourseList from '@/components/CourseList'
import CourseTable from '@/components/CourseTable'
import fetchData from '@/actions/server'

export default async function Page({ params }) {
    const { cities, locale } = params
    const isArabic = locale === 'ar'

    const getCityDetails = await fetchData(`/city/${cities}`, locale)
    const getCityCourses = await fetchData(`/city-courses/${cities}`, locale)
    const allCities = await fetchData('/city', locale)
    const allSpecialization = await fetchData('/specialization', locale)

    return (
        <><HeaderSection params={locale} /><div className="min-h-screen" style={isArabic ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr', textAlign: 'left' }}>

            <main className="container mx-auto px-4 py-8">
                <HeroSection data={getCityDetails.banner_computer} />

                <div className="mt-6 md:mx-16">
                    <CourseTable
                        cities={allCities.data}
                        specializations={allSpecialization.data}
                        courses={getCityCourses.data}
                        city={cities} 
                        locale={locale}/>
                </div>

                {/* About Section */}
                <ContentSection title={isArabic ? `عن ${getCityDetails.name}` : `About ${getCityDetails.name}`}>
                    <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: getCityDetails.introduction }} />
                </ContentSection>

                {/* Partnership Section */}
                <ContentSection title={isArabic ? 'شراكاتنا' : 'Our Partnerships'}>
                    <div
                        className="text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: getCityDetails.summary }} />
                </ContentSection>
            </main>
        </div></>
    )
}
