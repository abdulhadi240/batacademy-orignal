import Image from "next/image";
import ServiceCard from "./ServiceCard";

// components/MainContent.js
const MainContent = ({ locale }) => {
  return (
    <div className="flex justify-between gap-8 mx-20 mt-8">
      {/* Left Column */}
      <div className="flex flex-col items-start">
        <Image
          src="/group401.webp"
          width={600}
          height={600}
          alt="Laptop meeting"
          className="rounded-lg shadow-lg"
        />
        <div className="w-[600px]">
          <h3 className="text-xl font-semibold tracking-wide text-gray-800 mt-14">
            {locale === "en"
              ? "The annual training plan for the courses and programs of the British Academy"
              : "الخطة التدريبية السنوية لدورات وبرامج الأكاديمية البريطانية"}
          </h3>
          <p className="mt-3 text-gray-500">
            {locale === "en"
              ? "The annual training plan for the courses and programs of the British Academy"
              : "الخطة التدريبية السنوية لدورات وبرامج الأكاديمية البريطانية"}
          </p>
        </div>
        <button className="px-4 py-2 mt-3 text-sm text-white bg-[#111F51] rounded-lg">
          {locale === "en" ? "Go to Plan" : "اذهب إلى الخطة"}
        </button>
      </div>

      {/* Right Column - Service List */}
      <div className="space-y-2">
        <ServiceCard
          title={
            locale === "en"
              ? "Courses with discount"
              : "دورات بخصم"
          }
          description={
            locale === "en"
              ? "We provide the latest international courses at suitable prices"
              : "نقدم أحدث الدورات الدولية بأسعار مناسبة"
          }
          icon="/icon9.png"
        />
        <ServiceCard
          title={
            locale === "en"
              ? "Approved Courses"
              : "دورات معتمدة"
          }
          description={
            locale === "en"
              ? "The participant with the courses offered by us has many services and features"
              : "يتمتع المشارك بالدورات التي نقدمها بالعديد من الخدمات والميزات"
          }
          icon="/icon9.png"
        />
        <ServiceCard
          title={
            locale === "en"
              ? "Featured Courses"
              : "دورات مميزة"
          }
          description={
            locale === "en"
              ? "We update the list of courses according to the needs of the labor market"
              : "نحدث قائمة الدورات وفقاً لاحتياجات سوق العمل"
          }
          icon="/icon8.png"
        />
        <ServiceCard
          title={
            locale === "en"
              ? "Courses by specialization"
              : "دورات حسب التخصص"
          }
          description={
            locale === "en"
              ? "More than 20 specializations in many fields"
              : "أكثر من 20 تخصصاً في مجالات متعددة"
          }
          icon="/icon7.png"
        />
        <ServiceCard
          title={
            locale === "en"
              ? "Courses by city"
              : "دورات حسب المدينة"
          }
          description={
            locale === "en"
              ? "Our favorite cities with attractive attractions"
              : "مدننا المفضلة ذات المعالم الجذابة"
          }
          icon="/icon6.png"
        />
      </div>
    </div>
  );
};

export default MainContent;
