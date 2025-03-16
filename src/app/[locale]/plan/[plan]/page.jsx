import React from "react";
import Features_detail from "./components/Features_detail";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";

const page = async ({params}) => {
  const data = await fetchData(`/plan/${params.plan}`,params.locale)
  return (
    <>
    <HeaderSection params={params.locale}/>
      <div className="container  overflow-hidden bg-[#DEEEFD] ">
        <div className="flex flex-col gap-3 p-6 md:p-10">
          <h1 className="flex justify-center mx-2 text-base font-semibold text-center dark:text-black md:mx-48 md:text-3xl">
            The Most Prominent Courses That We Offer In Our Academy Share With
            Us To Get Better
          </h1>
          <Link href={`/${params.locale}/plan`}><div className="flex justify-center">
            <div className="py-2  px-7 shadow-2xl text-sm font-light rounded-md brightness-125 bg-[#111F51] text-white">
              Show Plan
            </div>
          </div></Link>
        </div>
      </div>
      <Features_detail
        image={data.image}
        heading={data.name}
        number={data.id}
        right={true}
        text={data.keyword}
        data={data}
      />
    </>
  );
};

export default page;
