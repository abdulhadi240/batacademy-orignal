"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ToggleLangButton({ languageToggleText }) {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/en" or "/ar/customer_service"

  // Determine if current locale is Arabic
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  // Conditionally choose which image to display
  const imageSrc = isArabic ? "/english.png" : "/saudia.webp";

  const handleLocaleToggle = () => {
    let newPath = pathname;

    if (pathname === "/en") {
      // If the URL is exactly /en, switch to /ar
      newPath = "/ar";
    } else if (pathname === "/ar") {
      // If the URL is exactly /ar, switch to /en
      newPath = "/en";
    } else if (pathname.startsWith("/en/")) {
      // If the path starts with /en/... replace with /ar
      newPath = pathname.replace(/^\/en/, "/ar");
    } else if (pathname.startsWith("/ar/")) {
      // If the path starts with /ar/... replace with /en
      newPath = pathname.replace(/^\/ar/, "/en");
    } else {
      // If there's no /en or /ar at all, default to /en + the existing path
      newPath = "/en" + pathname;
    }

    router.push(newPath);
  };

  return (
    <div className="flex items-center group bg-primary px-2 py-1">
      {/* Conditionally rendered image */}
      <div className="">
        <Image
          src={imageSrc}       // Different image based on `isArabic`
          alt="Localized Image" // Provide an appropriate alt text
          width={40}           // Example width
          height={40}          // Example height
          priority
        />
      </div>

      {/* Language toggle button */}
      <button onClick={handleLocaleToggle} className=" px-2 text-xs text-white rounded ">
        {languageToggleText}
      </button>
    </div>
  );
}
