import dynamic from 'next/dynamic';
import SearchFilters from '@/components/SearchFilters';
import SectionTitle from '@/components/SectionTitle';
import MainContent from '@/components/MainContent';
import MobileFilter from '@/components/MobileFilter';
import fetchData from '@/actions/server';
import Design from '../homepage1/components/Design';
import CustomerCarasoul from '@/components/CustomerCarasoul';
import Footer from '@/components/Footer';
import Homepage_Course from '@/components/Homepage-Course';
import { TeamCarasoul } from '@/components/TeamCarasoul';

const SpecializationSection = dynamic(() => import('@/components/SpecializationSection'));
const Carasoul = dynamic(() => import('@/components/Carasoul'));
const Training = dynamic(() => import('@/components/Training'));
const RequestCourse = dynamic(() => import('@/components/RequestCourse'));
const DynamicTabs = dynamic(() => import('@/components/DynamicTabs'));
const Team = dynamic(() => import('@/components/Team'));



export const generateMetadata = async ({ params }) => {
  const locale = params.locale || 'en'; // Default to 'en' if no locale is provided


  const enMetadata = {
    title: "British Academy - Leading in Training & Development",
    description:
      "The British Academy specializes in management, business, media, and public relations training and development.",
    keywords: "training, development, business, media, public relations, courses",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      title: "British Academy - Training & Development",
      description:
        "Join the British Academy for specialized courses in business, media, and public relations.",
      url: "https://www.britishacademy.com",
      images: [
        {
          url: "/og-image.jpg",
          alt: "British Academy Training",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };

  const arMetadata = {
    title: "الأكاديمية البريطانية - الريادة في التدريب والتطوير",
    description:
      "تخصص الأكاديمية البريطانية في إدارة الأعمال والإعلام والعلاقات العامة والتدريب والتطوير.",
    keywords:
      "التدريب, التطوير, إدارة الأعمال, الإعلام, العلاقات العامة, الدورات",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      title: "الأكاديمية البريطانية - التدريب والتطوير",
      description:
        "انضم إلى الأكاديمية البريطانية للحصول على دورات متخصصة في إدارة الأعمال والإعلام والعلاقات العامة.",
      url: "https://www.britishacademy.com",
      images: [
        {
          url: "/og-image.jpg",
          alt: "الأكاديمية البريطانية للتدريب",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };

  return locale === "ar" ? arMetadata : enMetadata;
};


const Page = async ({ params }) => {
  const { locale } = await params;
  const client = await fetchData('/client')
  const specialization = await fetch('https://backendbatd.clinstitute.co.uk/api/specializations_courses',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale
    }
  }).then((res) => res.json());

  // Fetch data based on the locale
  const cities = await fetchData(`/city`, locale);


  return (
    <><section>
      {/* Hero Section */}
      <Design locale={locale} />
        <div className="block sm:hidden -mt-10">
          <MobileFilter locale={locale} />
        </div>


<Homepage_Course locale={params.locale}/>
<div className="mt-10  overflow-hidden customer mb-10">
        <SectionTitle title={locale === 'en' ? "" : "أغلب"} highlight={locale === 'en' ? "Accredited" : "عملائنا"} />
        <CustomerCarasoul locale={locale} client={client}/>
      </div>
     {/*  Search and Main Content */}
      <div className="container hidden  sm:block sm:px-4 ">

        <SectionTitle title={locale === 'en' ? "What is" : "ما هو"} highlight={locale === 'en' ? "BRITISH ACADEMY?" : "الأكاديمية البريطانية؟"} />
        <MainContent locale={locale} />
      </div>

      {/* Specialization Section */}
      <SpecializationSection data={specialization?.data} locale={locale} />
      

      {/* Courses by Cities Carousel */}
      <div className="mt-16">
        <SectionTitle title={locale === 'en' ? "Courses by" : "دورات حسب"} highlight={locale === 'en' ? "Cities" : "المدن"} />
        <Carasoul data={cities} locale={locale} />
      </div>

      {/* Training Section */}
      <div className=" block">
        <SectionTitle title={locale === 'en' ? "British Academy" : "الأكاديمية البريطانية"} highlight={locale === 'en' ? "For Training" : "للتدريب"} />
        <Training locale={locale} />
      </div>
      

      {/* Request Course Section */}
      <div className="md:mt-32 mt-16">
        <SectionTitle title={locale === 'en' ? "Request A" : "طلب"} highlight={locale === 'en' ? "Course" : "دورة"} />
        <RequestCourse locale={locale} />
      </div>
      

      {/* Latest Publications Section */}
      <div className="md:mt-32">
        <SectionTitle title={locale === 'en' ? "Latest" : "أحدث"} highlight={locale === 'en' ? "Publication" : "النشر"} />
        <DynamicTabs locale={locale} />
      </div>
      

      {/* Team Section */}
      <div className="mt-10 md:mt-32 team">
        <SectionTitle title={locale === 'en' ? "Team" : "الفريق"} highlight={locale === 'en' ? "Work" : "العمل"} />
        <TeamCarasoul/>
      </div>
      

      <div className="mt-10 md:mt-32 overflow-hidden customer mb-10">
        <SectionTitle title={locale === 'en' ? "Most Of" : "أغلب"} highlight={locale === 'en' ? "Our Customers" : "عملائنا"} />
        <CustomerCarasoul locale={locale} client={client}/>
      </div>
    </section></>
  );
};

export default Page;
