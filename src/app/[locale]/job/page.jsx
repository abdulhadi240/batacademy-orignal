
import React from "react";
import HeaderSearch from "./components/HeaderSearch";
import StatsSection from "./components/StatsSection";
import JobCard from "./components/JobCard";
import HeaderSection from "@/components/HeaderSection";
import fetchData from "@/actions/server";

const page = async ({params}) => {
  const jobs = await fetchData(`/job`,params.locale)

  return (
    <div>
      <HeaderSection params={params.locale}/>
      <div className="overflow-hidden">
        <HeaderSearch />
        <div className="flex items-center justify-between mt-8 ml-2">
          <h2 className="text-2xl font-bold md:mx-20">Job Listings</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mx-5 mt-6 md:mx-20 md:grid-cols-2 lg:grid-cols-3">
          {jobs.data.map((job, index) => (
            <JobCard key={index} job={job} locale={params.locale}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
