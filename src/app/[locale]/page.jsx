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
  const { locale } = params;

  // Fetch all data in parallel for better performance
  const [client, specialization, cities, courses, team, accredited] = await Promise.all([
    fetchData('/client'),
    fetchData('/home/specializations', locale),
    fetchData(`/home/cities`, locale),
    fetchData('/home/courses', locale),
    fetchData('/home/teams', locale),
    fetchData('/home/accredited', locale)
  ]);

  // Translations object for better maintenance
  const translations = {
    en: {
      accredited: "Accredited",
      ourCustomers: "Our Customers",
      whatIs: "What is",
      britishAcademy: "BRITISH ACADEMY?",
      coursesBy: "Courses by",
      cities: "Cities",
      forTraining: "For Training",
      requestA: "Request A",
      course: "Course",
      latest: "Latest",
      publication: "Publication",
      team: "Team",
      work: "Work",
      mostOf: "Most Of"
    },
    ar: {
      accredited: "أغلب",
      ourCustomers: "عملائنا",
      whatIs: "ما هو",
      britishAcademy: "الأكاديمية البريطانية؟",
      coursesBy: "دورات حسب",
      cities: "المدن",
      forTraining: "للتدريب",
      requestA: "طلب",
      course: "دورة",
      latest: "أحدث",
      publication: "النشر",
      team: "الفريق",
      work: "العمل",
      mostOf: "أغلب"
    }
  };

  const t = translations[locale || 'en'];

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <Design locale={locale} />
      
      {/* Mobile Filter - Only visible on small screens */}
      <div className="block sm:hidden -mt-10">
        <MobileFilter locale={locale} />
      </div>

      {/* Course Section */}
      <Homepage_Course locale={locale} courses={courses} />

      {/* Accredited Customers Section */}
      <div className="mt-10 overflow-hidden customer mb-10">
        <SectionTitle 
          title={locale === 'en' ? "" : t.accredited} 
          highlight={locale === 'en' ? t.accredited : t.ourCustomers} 
        />
        <CustomerCarasoul locale={locale} accredited client={accredited} />
      </div>

      {/* Main Content Section - Hidden on mobile */}
      <div className="container hidden sm:block sm:px-4">
        <SectionTitle title={t.whatIs} highlight={t.britishAcademy} />
        <MainContent locale={locale} />
      </div>

      {/* Specialization Section */}
      <SpecializationSection data={specialization} locale={locale} />

      {/* Cities Section */}
      <div className="mt-16">
        <SectionTitle title={t.coursesBy} highlight={t.cities} />
        <Carasoul data={cities} locale={locale} />
      </div>

      {/* Training Section */}
      <div className="block">
        <SectionTitle title={locale === 'en' ? "British Academy" : "الأكاديمية البريطانية"} highlight={t.forTraining} />
        <Training locale={locale} />
      </div>

      {/* Request Course Section */}
      <div className="md:mt-32 mt-16">
        <SectionTitle title={t.requestA} highlight={t.course} />
        <RequestCourse locale={locale} />
      </div>

      {/* Publications Section */}
      <div className="md:mt-32">
        <SectionTitle title={t.latest} highlight={t.publication} />
        <DynamicTabs locale={locale} />
      </div>

      {/* Team Section */}
      <div className="mt-10 md:mt-32 team">
        <SectionTitle title={t.team} highlight={t.work} />
        <TeamCarasoul teamMembers={team} />
      </div>

      {/* Customers Section */}
      <div className="mt-10 md:mt-32 overflow-hidden customer mb-10">
        <SectionTitle title={t.mostOf} highlight={t.ourCustomers} />
        <CustomerCarasoul locale={locale} client={client} />
      </div>
    </section>
  );
};

export default Page;
