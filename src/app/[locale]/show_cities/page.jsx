import fetchData from '@/actions/server'
import CityCard from '@/components/CityCard';
import HeaderSection from '@/components/HeaderSection'
import React from 'react'

const page = async ({ params }) => {
    const isArabic = params.locale === 'ar';
    const cities = await fetchData(`/city`, params.locale);
    return (
        <div>
            <HeaderSection params={params.locale} />
            <div className={`py-8 ${isArabic ? 'rtl' : 'ltr'}`}>
                <h1 className='text-secondary font-bold uppercase text-2xl text-center flex justify-center'>
                    {isArabic ? 'الدورات حسب المدينة' : 'Courses by city'}
                </h1>
                <p className='flex justify-center w-full text-center uppercase text-black/80 text-xs mt-3'>
                    {isArabic ? 'مدننا المفضلة مع المعالم الجذابة' : 'Our favorite cities with attractive attractions'}
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {cities.data.map((city, index) => (
                    <CityCard cities={city} key={index} />
                ))}
            </div>
        </div>
    )
}

export default page