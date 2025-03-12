import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Users,
} from "lucide-react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Link from "next/link";
import fetchData from "@/actions/server";

export default async function JobDetailsPage({params}) {
  const {locale , job} = params;
  const job_details = await fetchData(`/job/${job}`,locale)
  const all_jobs = await fetchData(`/job`,locale)
  return (
    <>
      <HeaderSection params={params.locale}/>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex items-center gap-4 md:flex-shrink-0">
                <Image
                  src={job_details?.company?.image}
                  alt="Google Inc"
                  width={80}
                  height={80}
                  className="rounded-lg border p-2"
                />
                <Link href={`/${locale}/apply?type=job&id=${job_details.id}`} size="lg" className="md:hidden text-white bg-primary p-2">
                  Apply Now
                </Link>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {job_details.name}
                  </h1>
                  <Badge className={"bg-secondary text-white font-thin"}>
                  {job_details.type == 0 ? 'Full Time' : 'Part Time'}
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{job_details.company.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job_details.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{job_details.posted}</span>
                  </div>
                </div>
              </div>
              <Link href={`/${locale}/apply?type=job&id=${job_details.id}`}>
              <Button
                size="lg"
                className="hidden md:block flex-shrink-0 text-white"
              >
                Apply Now
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  {job_details.description}
                </p>

                <h3 className="font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                {job_details.requirements}
                </ul>

                <h3 className="font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {job_details.responsibilities}
                </ul>
              </Card>

              {/* Similar Jobs */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                {all_jobs?.data?.map((job, index) => (
                  index < 5 && 
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <Image
                        src={job.company.image}
                        alt={`${job.company.name} logo`}
                        width={48}
                        height={48}
                        className="rounded border p-1"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{job.name}</h3>
                        <div className="text-sm text-muted-foreground flex flex-wrap gap-x-2">
                          <span>{job.company.name}</span> •{" "}
                          <span>{job.city}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <span>£ {job.salary_min} - £{job.salary_max}</span> •{" "}
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <Badge className="self-start sm:self-center mt-2 sm:mt-0 bg-secondary text-white font-thin">
                      {job_details.type}
                      </Badge>
                    </div>
                  
                  ))}
                  
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Similar Jobs
                </Button>
              </Card>
            </div>

            {/* Right Column - Company Info & Job Overview */}
            <div className="space-y-6">
              <Card className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4">
                  Job Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Salary Range
                      </p>
                      <p className="font-medium">£{job_details.salary_min} - £{job_details.salary_max} / year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Job Type</p>
                      <p className="font-medium">{job_details.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">{job_details.team_min} People</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">About Company</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {job_details.company.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{job_details.team_min}+ Employees</span>
                    </div>
                  </div>
                  <Link href={job_details.company.url} target="_blank">
                  <Button variant="outline" className="w-full mt-2">
                    View Company Profile
                  </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
