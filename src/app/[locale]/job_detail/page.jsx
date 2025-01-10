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

export default function JobDetailsPage({params}) {
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
                  src="/logo.png"
                  alt="Google Inc"
                  width={80}
                  height={80}
                  className="rounded-lg border p-2"
                />
                <Link href={`/${params.locale}/apply?type=job`} size="lg" className="md:hidden text-white bg-primary p-2">
                  Apply Now
                </Link>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    Senior UI Designer
                  </h1>
                  <Badge className={"bg-secondary text-white font-thin"}>
                    Full Time
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>Google Inc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, USA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Posted 2 days ago</span>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="hidden md:block flex-shrink-0 text-white"
              >
                Apply Now
              </Button>
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
                  We are looking for a Senior UI Designer to join our team. You
                  will be responsible for delivering the best online user
                  experience, working with stakeholders to understand
                  requirements, and converting them into elegant and functional
                  designs.
                </p>

                <h3 className="font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>5+ years of experience in UI/UX design</li>
                  <li>Strong portfolio demonstrating UI design skills</li>
                  <li>
                    Proficiency in Figma, Sketch, and Adobe Creative Suite
                  </li>
                  <li>
                    Experience with design systems and component libraries
                  </li>
                  <li>Excellent communication and collaboration skills</li>
                </ul>

                <h3 className="font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Create user-centered designs by understanding business
                    requirements
                  </li>
                  <li>Develop UI mockups and prototypes</li>
                  <li>Create original graphic designs</li>
                  <li>Prepare and present rough drafts to internal teams</li>
                  <li>Identify and troubleshoot UX problems</li>
                </ul>
              </Card>

              {/* Similar Jobs */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "UX Designer",
                      company: "Apple",
                      location: "Cupertino, CA",
                      salary: "$90k - $120k",
                      posted: "3 days ago",
                    },
                    {
                      title: "Product Designer",
                      company: "Facebook",
                      location: "Menlo Park, CA",
                      salary: "$100k - $130k",
                      posted: "1 week ago",
                    },
                    {
                      title: "UI/UX Designer",
                      company: "Amazon",
                      location: "Seattle, WA",
                      salary: "$85k - $115k",
                      posted: "2 days ago",
                    },
                    {
                      title: "Senior UI Designer",
                      company: "Microsoft",
                      location: "Redmond, WA",
                      salary: "$110k - $140k",
                      posted: "5 days ago",
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <Image
                        src={"/logo.png"}
                        alt={`${job.company} logo`}
                        width={48}
                        height={48}
                        className="rounded border p-1"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{job.title}</h3>
                        <div className="text-sm text-muted-foreground flex flex-wrap gap-x-2">
                          <span>{job.company}</span> •{" "}
                          <span>{job.location}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <span>{job.salary}</span> •{" "}
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <Badge className="self-start sm:self-center mt-2 sm:mt-0 bg-secondary text-white font-thin">
                        Full Time
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
                      <p className="font-medium">$80k - $100k / year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Job Type</p>
                      <p className="font-medium">Full Time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">15-20 People</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">About Company</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Google is a multinational technology company specializing in
                    Internet-related services and products, including online
                    advertising technologies, search engine, cloud computing,
                    software, and hardware.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Mountain View, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>50,000+ Employees</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Company Profile
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
