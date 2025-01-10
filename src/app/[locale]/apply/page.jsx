'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderSection from "@/components/HeaderSection";


export default function Page({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  const [query, setQuery] = useState(type);

  useEffect(() => {
    if (type === "board" || type === "team") {
      router.replace({
        pathname: router.pathname,
        query: { ...router.query, scroll: false },
      });
    }
  }, [type, router]);

  const renderForm = () => {
    switch (type) {
      case "board":
      case "team":
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expertise">Area of Expertise</Label>
              <Input id="expertise" placeholder="e.g., Marketing, Finance, Technology" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" type="url" placeholder="https://www.linkedin.com/in/janedoe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motivation">Motivation</Label>
              <Textarea
                id="motivation"
                placeholder="Tell us why you want to join our team or board of advisors..."
                required
              />
            </div>
            <Button type="submit" className="w-full text-white">Submit Application</Button>
          </form>
        );
      case "consultation":
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Alex Johnson" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="alex@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Inc." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consultation-type">Consultation Type</Label>
              <Select required>
                <SelectTrigger id="consultation-type">
                  <SelectValue placeholder="Select a consultation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business Strategy</SelectItem>
                  <SelectItem value="technology">Technology Implementation</SelectItem>
                  <SelectItem value="marketing">Marketing and Growth</SelectItem>
                  <SelectItem value="financial">Financial Planning</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide some details about what you'd like to discuss in our consultation..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred-date">Preferred Consultation Date</Label>
              <Input id="preferred-date" type="date" required />
            </div>
            <Button type="submit" className="w-full text-white">Request Consultation</Button>
          </form>
        );
      default:
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position Applying For</Label>
              <Input id="position" placeholder="Software Engineer" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" placeholder="5" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume/CV</Label>
              <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover Letter</Label>
              <Textarea id="cover-letter" placeholder="Tell us why you're interested in this position..." required />
            </div>
            <Button type="submit" className="w-full text-white">Submit Application</Button>
          </form>
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case "board":
        return "Apply for Board of Directors";
      case "team":
        return "Apply for Team Member";
      case "consultation":
        return "Request a Consultation";
      default:
        return "Apply for Job";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderSection params={params.locale}/>
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{getTitle()}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderForm()}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

