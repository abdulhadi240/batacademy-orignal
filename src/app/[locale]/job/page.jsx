import React from "react";
import HeaderSearch from "./components/HeaderSearch";
import StatsSection from "./components/StatsSection";
import JobCard from "./components/JobCard";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";

const page = async ({ params }) => {
  const jobs = await fetchData(`/job`, params.locale);
  const isArabic = params.locale === "ar";

  return (
      <><HeaderSection params={params.locale} /><div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-cairo" : ""}>

      <div className="overflow-hidden">
        <HeaderSearch locale={params.locale} />

        <div className={`flex items-center justify-between mt-8 ${isArabic ? "mr-2" : "ml-2"}`}>
          <h2 className="text-2xl font-bold md:mx-20">
            {isArabic ? "قائمة الوظائف" : "Job Listings"}
          </h2>
        </div>

        <JobCard job={jobs.data} params={params} />
      </div>
    </div></>
  );
};

export default page;
