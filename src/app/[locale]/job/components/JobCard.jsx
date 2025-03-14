"use client";

import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fetchData from "@/actions/server";

const JobCard = ({ params , job }) => {
  const locale = params.locale || "en"; // Default locale is English
  const [jobs, setJobs] = useState(job);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 50, behavior: "smooth" });
  };

  // Fetch jobs dynamically
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetchData(`/job?page=${page}`, locale);
      setJobs(response.data);
      setTotalPages(response.last_page);
    };
    fetchJobs();
  }, [page, locale]);

  // Handlers for pagination
  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <Link key={index} href={`/${locale}/job/${job.slug}`}>
            <div
              className={`p-6 transition-shadow rounded-md shadow-md ${
                job.type === "Full-Time" ? "bg-gradient-to-r from-yellow-50" : "bg-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold md:text-xl h-10 mb-3">{job.name}</h3>
                <span
                  className={`text-center py-1 rounded-md text-xs md:text-sm ${
                    job.type === "Full-Time"
                      ? "bg-green-100 w-20 text-green-600"
                      : "bg-yellow-100 w-24 text-yellow-600"
                  }`}
                >
                  {job.type}
                </span>
              </div>
              <p className="mt-2 text-gray-600">Salary: £{job.salary_min} - £{job.salary_max}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center w-auto h-auto p-2">
                  <Image src={job.company.image} width={30} height={30} className="rounded-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-md">{job.company.name}</p>
                  <div className="flex gap-1">
                    <CiLocationOn />
                    <p className="text-sm text-gray-500">{job.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-8 sm:ml-6 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={page === 1}
            className="h-9 w-9 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          <div className="flex items-center justify-center px-4 py-1.5 rounded-full bg-muted text-sm font-medium">
            <span>
              Page <span className="font-bold">{page}</span> of{" "}
              <span className="font-bold">{totalPages}</span>
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={page === totalPages}
            className="h-9 w-9 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobCard;
