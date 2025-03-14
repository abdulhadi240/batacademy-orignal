'use client'

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BookOpen, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

// Define metadata for the page
export const metadata = {
  title: '404 Page Not Found',
  description: 'Oops! The page you are looking for does not exist.',
  robots: 'noindex, follow',
};

export default function NotFound({ params }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 text-center">
      <div className="mx-auto max-w-md space-y-6 sm:max-w-lg">
        <div className="space-y-2">
          <div className="flex justify-center">
            <div className="relative">
              <BookOpen className="h-24 w-24 text-blue-500" strokeWidth={1.5} />
              <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-white">
                ?
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>

          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oops! Looks like we've reached a learning gap. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Looking for something?</h2>
            <p className="text-sm text-muted-foreground">Check out these helpful links:</p>
          </div>

          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            <Link
              href={`/${params.locale}`}
              className="inline-flex items-center text-white justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href={`/${params.locale}/search_course?type=1`}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Courses
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 pt-4">
          <Button variant="link" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="mr-1 h-4 w-4" />
            Go back to previous page
          </Button>
          <p className="text-xs text-muted-foreground">
            If you believe this is an error, please{" "}
            <Link href={`/${params.locale}/contact_us`} className="underline underline-offset-2">
              contact support
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}