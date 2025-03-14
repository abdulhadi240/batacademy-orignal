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
  const imageSrc = isArabic ? "/english1.png" : "/saudia.webp";

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
  
    router.push(newPath, undefined, { scroll: false });
  };
  

  return (
    <div className="flex items-center group border-[1px] py-2 rounded-sm  px-2 ">
      {/* Conditionally rendered image */}
      <div
        className={`${
          isArabic ? "w-[30px] h-[20px] " : "h-auto w-auto"
        } flex-shrink-0`}
      >
        <Image
          src={imageSrc}       // Different image based on `isArabic`
          alt="Localized Image" // Provide an appropriate alt text
          width={30}           // Example width
          height={30}          // Example height
          priority
          className={`flex items-start text-start justify-start `} // Different object fit for Arabic and English
        />
      </div>

      {/* Language toggle button */}
      <div
        onClick={handleLocaleToggle}
        className="px-2  text-xs  rounded cursor-pointer"
      >
        {languageToggleText}
      </div>
    </div>
  );
}
