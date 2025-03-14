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

// Translation Helper
const translations = {
  en: {
    apply_now: "Apply Now",
    full_time: "Full Time",
    part_time: "Part Time",
    job_description: "Job Description",
    requirements: "Requirements",
    responsibilities: "Responsibilities",
    similar_jobs: "Similar Jobs",
    view_all_jobs: "View All Similar Jobs",
    job_overview: "Job Overview",
    salary_range: "Salary Range",
    job_type: "Job Type",
    team_size: "Team Size",
    about_company: "About Company",
    employees: "Employees",
    view_company: "View Company Profile",
  },
  ar: {
    apply_now: "قدم الآن",
    full_time: "دوام كامل",
    part_time: "دوام جزئي",
    job_description: "وصف الوظيفة",
    requirements: "المتطلبات",
    responsibilities: "المسؤوليات",
    similar_jobs: "وظائف مشابهة",
    view_all_jobs: "عرض جميع الوظائف المشابهة",
    job_overview: "نظرة عامة على الوظيفة",
    salary_range: "نطاق الراتب",
    job_type: "نوع الوظيفة",
    team_size: "حجم الفريق",
    about_company: "عن الشركة",
    employees: "الموظفين",
    view_company: "عرض ملف الشركة",
  },
};

const t = (key, locale) => translations[locale]?.[key] || key;

export default async function JobDetailsPage({ params }) {
  const { locale, job } = params;
  const job_details = await fetchData(`/job/${job}`, locale);
  const all_jobs = await fetchData(`/job`, locale);

  return (
    <>
      <HeaderSection params={params.locale} />
      <div
        className="min-h-screen bg-gray-50"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex items-center gap-4 md:flex-shrink-0">
                <Image
                  src={job_details?.company?.image}
                  alt={job_details?.company?.name}
                  width={80}
                  height={80}
                  className="rounded-lg border p-2"
                />
                <Link
                  href={`/${locale}/apply?type=job&id=${job_details.id}`}
                  size="lg"
                  className="md:hidden text-white bg-primary p-2"
                >
                  {t("apply_now", locale)}
                </Link>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {job_details.name}
                  </h1>
                  <Badge className={"bg-secondary text-white font-thin"}>
                    {job_details.type == 0
                      ? t("full_time", locale)
                      : t("part_time", locale)}
                  </Badge>
                </div>
              </div>
              <Link href={`/${locale}/apply?type=job&id=${job_details.id}`}>
                <Button size="lg" className="hidden md:block text-white">
                  {t("apply_now", locale)}
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
                <h2 className="text-xl font-semibold mb-4">
                  {t("job_description", locale)}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  {job_details.description}
                </p>

                <h3 className="font-semibold mb-3">
                  {t("requirements", locale)}
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  {job_details.requirements}
                </ul>

                <h3 className="font-semibold mb-3">
                  {t("responsibilities", locale)}
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {job_details.responsibilities}
                </ul>
              </Card>

              {/* Similar Jobs */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {t("similar_jobs", locale)}
                </h2>
                <Button variant="outline" className="w-full mt-4">
                  {t("view_all_jobs", locale)}
                </Button>
              </Card>
            </div>

            {/* Right Column - Company Info & Job Overview */}
            <div className="space-y-6">
              <Card className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-4">
                  {t("job_overview", locale)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("salary_range", locale)}
                      </p>
                      <p className="font-medium">
                        £{job_details.salary_min} - £{job_details.salary_max} /{" "}
                        {t("year", locale)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("job_type", locale)}
                      </p>
                      <p className="font-medium">{job_details.type}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {t("about_company", locale)}
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {job_details.company.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {job_details.team_min}+ {t("employees", locale)}
                      </span>
                    </div>
                  </div>
                  <Link href={job_details.company.url} target="_blank">
                    <Button variant="outline" className="w-full mt-2">
                      {t("view_company", locale)}
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
