import dynamic from 'next/dynamic';
import SearchFilters from '@/components/SearchFilters';
import SectionTitle from '@/components/SectionTitle';
import MainContent from '@/components/MainContent';
import MobileFilter from '@/components/MobileFilter';
import fetchData from '@/actions/server';
import Design from '../homepage1/components/Design';
import CustomerCarasoul from '@/components/CustomerCarasoul';
import Footer from '@/components/Footer';

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

  // Fetch data based on the locale
  const cities = await fetchData(`/city`, locale);
  const specialization = await fetchData('https://backendbatd.clinstitute.co.uk/api/specializations_courses', locale);


  return (
    <><section>
      {/* Hero Section */}
      <Design locale={locale} />
        <div className="block sm:hidden">
          <MobileFilter locale={locale} />
        </div>

      {/* Search and Main Content */}
      <div className="container hidden mt-10 sm:block sm:px-4  sm:py-16">

        <SectionTitle title={locale === 'en' ? "What is" : "ما هو"} highlight={locale === 'en' ? "BRITISH ACADEMY?" : "الأكاديمية البريطانية؟"} />
        <MainContent locale={locale} />
      </div>

      {/* Specialization Section 
      <SpecializationSection data={specialization?.data} locale={locale} />
      */}

      {/* Courses by Cities Carousel */}
      <div className="sm:mt-16">
        <SectionTitle title={locale === 'en' ? "Courses by" : "دورات حسب"} highlight={locale === 'en' ? "Cities" : "المدن"} />
        <Carasoul data={cities} locale={locale} />
      </div>

      {/* Training Section */}
      <div className="mt-32 block">
        <SectionTitle title={locale === 'en' ? "British Academy" : "الأكاديمية البريطانية"} highlight={locale === 'en' ? "For Training" : "للتدريب"} />
        <Training locale={locale} />
      </div>
      

      {/* Request Course Section */}
      <div className="mt-32">
        <SectionTitle title={locale === 'en' ? "Request A" : "طلب"} highlight={locale === 'en' ? "Course" : "دورة"} />
        <RequestCourse locale={locale} />
      </div>
      

      {/* Latest Publications Section */}
      <div className="mt-32">
        <SectionTitle title={locale === 'en' ? "Latest" : "أحدث"} highlight={locale === 'en' ? "Publication" : "النشر"} />
        <DynamicTabs locale={locale} />
      </div>
      

      {/* Team Section */}
      <div className="mt-10 md:mt-32 team">
        <SectionTitle title={locale === 'en' ? "Team" : "الفريق"} highlight={locale === 'en' ? "Work" : "العمل"} />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 mt-10 overflow-hidden sm:grid-cols-3">
            {[
              {
                image: '/4.webp',
                name: locale === 'en' ? 'Nattasha Julie' : 'ناتاشا جولي',
                designation: locale === 'en' ? 'Design, Australia' : 'التصميم، أستراليا',
                number: '+1 (378) 400-1234',
                email: 'julie@email.com'
              },
              {
                image: '/Photo.webp',
                name: locale === 'en' ? 'John Doe' : 'جون دو',
                designation: locale === 'en' ? 'Developer, USA' : 'مطور، أمريكا',
                number: '+1 (555) 123-4567',
                email: 'john@email.com'
              },
              {
                image: '/2.webp',
                name: locale === 'en' ? 'Jane Smith' : 'جين سميث',
                designation: locale === 'en' ? 'Marketing, UK' : 'التسويق، المملكة المتحدة',
                number: '+44 (20) 7000-1234',
                email: 'jane@email.com'
              }
            ].map((teamMember, index) => (
              <Team
                key={index}
                image={teamMember.image}
                name={teamMember.name}
                designation={teamMember.designation}
                number={teamMember.number}
                email={teamMember.email} />
            ))}
          </div>
        </div>
      </div>
      

      <div className="mt-10 md:mt-32 overflow-hidden customer mb-10">
        <SectionTitle title={locale === 'en' ? "Most Of" : "أغلب"} highlight={locale === 'en' ? "Our Customers" : "عملائنا"} />
        <CustomerCarasoul locale={locale} />
      </div>
    </section></>
  );
};

export default Page;
