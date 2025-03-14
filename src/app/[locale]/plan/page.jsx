import Image from "next/image";
import React from "react";
import Features from "./components/Features";
import FeatureMobile from "./components/FeatureMobile";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";

const Page = async ({ params }) => {
  const data = await fetchData("/plan", params.locale)
  return (
    <>
      <HeaderSection params={params.locale} />
      <div className="overflow-hidden">
        <div className="banner-container">
          <div className="relative h-32 banner sm:h-64">
            {" "}
            {/* Set height and make container relative */}
            <Image
              src="/plan.webp"
              alt="banner"
              layout="fill" // Fill the entire container
              objectFit="cover" // Maintain aspect ratio without stretching
              priority
              className="object-cover"
            />
            {/* Text box overlay */}
            <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[300px] flex justify-center items-center h-[60px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
              <div>
                <p className="sm:text-xl font-semibold text-[#152765]">
                  PLAN PAGES
                </p>
                <p className="text-xs sm:text-sm font-normal text-[#152765] flex justify-center">
                  Home / Plan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          {data.data.map((item, index) => {
            return (
              <div key={item.slug}>
                <Features
                  image={item.image}
                  icon={"/icon1.png"}
                  heading={item.name}
                  number={item.index}
                  right={index % 2 === 0}  // even index: true, odd index: false
                  slug={item.slug}
                  text={item.summary}
                  locale={params.locale}
                />
              </div>
            )
          })}

        </div>
        <div className="p-5 sm:hidden">
          <FeatureMobile data={data.data} locale={params.locale}/>
        </div>
      </div>
    </>
  );
};

export default Page;
