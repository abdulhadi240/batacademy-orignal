"use client";
import { Award, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const primaryColor = {
  light: "bg-[#E6E8EE]",
  DEFAULT: "bg-[#152765]",
  foreground: "text-[#152765]",
};

export default function Certificate() {
  return (
    <>
      <div className="px-4">
        <Card className="max-w-[840px]  bg-gradient-to-b from-white to-gray-50/50">
          <CardContent className="p-8 sm:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-6 flex-1">
                <div className="space-y-4">
                  <div
                    className={cn(
                      "inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary text-white"
                    )}
                  >
                    Professional Certification
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                    Earn a career certificate
                  </h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full bg-primary p-2 flex items-center justify-center mt-0.5"
                        )}
                      >
                        <span className="text-white">1</span>
                      </div>
                      <p>
                        Add this credential to your LinkedIn profile, resume, or
                        CV
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full bg-primary p-2  flex items-center justify-center mt-0.5"
                        )}
                      >
                        <span className={"text-white"}>2</span>
                      </div>
                      <p>
                        Share it on social media and in your performance review
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:w-auto">
                {/* Moving Border Effect with Thin Border */}
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-move-border">
                  <div className="relative bg-white p-6 rounded-xl">
                    <div className="w-full lg:w-72 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded w-24"></div>
                          <div className="h-2 bg-gray-200/70 rounded w-20"></div>
                        </div>
                        <Award
                          className={cn("h-8 w-8", primaryColor.foreground)}
                        />
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <div className="h-2 bg-gray-200/50 rounded w-full"></div>
                        <div className="h-2 bg-gray-200/50 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-200/50 rounded w-2/3"></div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        
                        <Share2 className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
