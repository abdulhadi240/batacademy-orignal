"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderSection from "@/components/HeaderSection";
import { toast } from "react-toastify";

export default function Page({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const [query, setQuery] = useState(type);

  const isArabic = params.locale === "ar";

  // State variables for form fields (position removed)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [expertise, setExpertise] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [motivation, setMotivation] = useState("");
  const [company, setCompany] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (type === "board" || type === "team") {
      router.replace({
        pathname: router.pathname,
        query: { ...router.query, scroll: false },
      });
    }
  }, [type, router]);

  // Handle form submission based on type (position removed from job application)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "board" || type === "team") {
      const data = { name, email, expertise, linkedin, motivation };
      console.log("Board/Team Application:", data);
      // In a real app, send data to a server here
    } else if (type === "consultation") {
      const data = { name, email, company, phone, consultationType, message, preferredDate };
      console.log("Consultation Request:", data);
      // In a real app, send data to a server here
    } else {
      // Job application
      const formData = new FormData();
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("phone_number", phone);
      formData.append("cv", resume);
      formData.append("cover_letter", message);
      formData.append("company_job_id", id);

      setLoading(true)
      try {
        const response = await fetch("https://batd.website12.help/api/job/store", {
          method: "POST",
          headers: {
            "Accept": "application/json",
          },
          body: formData,
        });
        setLoading(false)


        if (response.ok) {
          toast.success("Application submitted successfully");
          // Optionally: Show a success message or redirect the user
          // e.g., alert("Application submitted!");
          // or reset form: setName(""); setEmail(""); setPhone(""); setResume(null); setMessage("");
        } else {
          toast.error("Failed to submit application:", response.statusText);
          // Optionally: Show an error message to the user
          // e.g., alert("Failed to submit application. Please try again.");
        }
      } catch (error) {
        toast.error("Error submitting application:", error);
        // Optionally: Show a network error message
        // e.g., alert("Network error. Please check your connection and try again.");
      }
    }
  };

  const renderForm = () => {
    switch (type) {
      case "board":
      case "team":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{isArabic ? "الاسم الكامل" : "Full Name"}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "أحمد محمد" : "Jane Doe"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "ahmed@example.com" : "jane@example.com"}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expertise">{isArabic ? "مجال الخبرة" : "Area of Expertise"}</Label>
              <Input
                id="expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={
                  isArabic
                    ? "مثل: التسويق، المالية، التكنولوجيا"
                    : "e.g., Marketing, Finance, Technology"
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">{isArabic ? "ملف لينكد إن" : "LinkedIn Profile"}</Label>
              <Input
                id="linkedin"
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={
                  isArabic
                    ? "https://www.linkedin.com/in/ahmedmohammed"
                    : "https://www.linkedin.com/in/janedoe"
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motivation">{isArabic ? "الدافع" : "Motivation"}</Label>
              <Textarea
                id="motivation"
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={
                  isArabic
                    ? "أخبرنا لماذا تريد الانضمام إلى الفريق أو مجلس المستشارين..."
                    : "Tell us why you want to join our team or board of advisors..."
                }
                required
              />
            </div>
            <Button type="submit" className="w-full text-white">
              {isArabic ? "إرسال الطلب" : "Submit Application"}
            </Button>
          </form>
        );
      case "consultation":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{isArabic ? "الاسم الكامل" : "Full Name"}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "محمد علي" : "Alex Johnson"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "mohammed@example.com" : "alex@example.com"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{isArabic ? "اسم الشركة" : "Company Name"}</Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "شركة المستقبل" : "Acme Inc."}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{isArabic ? "رقم الهاتف" : "Phone Number"}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "+971 50 123 4567" : "+1 (555) 123-4567"}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultation-type">
                {isArabic ? "نوع الاستشارة" : "Consultation Type"}
              </Label>
              <Select
                value={consultationType}
                onValueChange={setConsultationType}
                required
              >
                <SelectTrigger
                  id="consultation-type"
                  className={isArabic ? "text-right" : ""}
                >
                  <SelectValue
                    placeholder={
                      isArabic ? "اختر نوع الاستشارة" : "Select a consultation type"
                    }
                  />
                </SelectTrigger>
                <SelectContent className={isArabic ? "rtl text-right" : ""}>
                  <SelectItem value="business">
                    {isArabic ? "استراتيجية الأعمال" : "Business Strategy"}
                  </SelectItem>
                  <SelectItem value="technology">
                    {isArabic ? "تنفيذ التكنولوجيا" : "Technology Implementation"}
                  </SelectItem>
                  <SelectItem value="marketing">
                    {isArabic ? "التسويق والنمو" : "Marketing and Growth"}
                  </SelectItem>
                  <SelectItem value="financial">
                    {isArabic ? "التخطيط المالي" : "Financial Planning"}
                  </SelectItem>
                  <SelectItem value="other">{isArabic ? "أخرى" : "Other"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{isArabic ? "الرسالة" : "Message"}</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={
                  isArabic
                    ? "يرجى تقديم بعض التفاصيل حول ما تريد مناقشته في الاستشارة..."
                    : "Please provide some details about what you'd like to discuss in our consultation..."
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred-date">
                {isArabic ? "تاريخ الاستشارة المفضل" : "Preferred Consultation Date"}
              </Label>
              <Input
                id="preferred-date"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className={isArabic ? "rtl text-right" : ""}
                required
              />
            </div>
            <Button type="submit" className="w-full text-white">
              {isArabic ? "طلب استشارة" : "Request Consultation"}
            </Button>
          </form>
        );
      default:
        // Job application form (position removed)
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{isArabic ? "الاسم الكامل" : "Full Name"}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "أحمد محمد" : "Jane Doe"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isArabic ? "text-right" : ""}
                  placeholder={isArabic ? "ahmed@example.com" : "jane@example.com"}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{isArabic ? "رقم الهاتف" : "Phone Number"}</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={isArabic ? "+971 50 123 4567" : "+1 (555) 123-4567"}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">{isArabic ? "السيرة الذاتية" : "Resume"}</Label>
              <Input
                id="resume"
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{isArabic ? "رسالة التقديم" : "Cover Letter"}</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={isArabic ? "text-right" : ""}
                placeholder={
                  isArabic ? "اكتب رسالة التقديم هنا..." : "Write your cover letter here..."
                }
                required
              />
            </div>
            <Button type="submit" className="w-full text-white" disabled={loading}>
              {loading
                ? (isArabic ? "جارٍ الإرسال..." : "Submitting...")
                : (isArabic ? "إرسال الطلب" : "Submit Application")}
            </Button>
          </form>
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case "board":
        return isArabic ? "التقدم لمجلس الإدارة" : "Apply for Board of Directors";
      case "team":
        return isArabic ? "التقدم لفريق العمل" : "Apply for Team Member";
      case "consultation":
        return isArabic ? "طلب استشارة" : "Request a Consultation";
      default:
        return isArabic ? "التقدم للوظيفة" : "Apply for Job";
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      <HeaderSection params={params.locale} />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{getTitle()}</CardTitle>
          </CardHeader>
          <CardContent>{renderForm()}</CardContent>
        </Card>
      </main>
    </div>
  );
}