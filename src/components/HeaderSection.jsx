"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import both English and Arabic menus
import { menuEn, menuAr } from "./Menu";
import MobileMenu from "./MobileMenu";
import Language from "./Language";

// Dynamic icon imports
const FaFacebookF = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaFacebookF)
);
const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaInstagram)
);
const FaSkype = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaSkype)
);
const FaTwitter = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaTwitter)
);
const FaYoutube = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaYoutube)
);
const FaPhoneAlt = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaPhoneAlt)
);
const FaEnvelope = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaEnvelope)
);
const FaLock = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaLock)
);

export const metadata = {
  title: "British Academy - Leading in Training & Development",
  description:
    "The British Academy specializes in management, business, media, and public relations training and development.",
  keywords: "training, development, business, media, public relations, courses",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "British Academy - Training & Development",
    description:
      "Join the British Academy for specialized courses in business, media, and public relations.",
    url: "https://www.britishacademy.com",
    images: [
      {
        url: "/og-image.jpg",
        alt: "British Academy Training",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function HeaderSection({ params }) {
  // 1) Determine if the current language is Arabic
  const isArabic = params === "ar";
  console.log(isArabic);
  

  // 2) Pick the correct menu
  const activeMenu = isArabic ? menuAr : menuEn;

  // 3) Localized text
  const specialRequest = isArabic ? "طلب خاص" : "Special Request";
  const blog = isArabic ? "مدونة" : "Blog";
  const faq = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const login = isArabic ? "تسجيل الدخول" : "Login";
  const signUp = isArabic ? "تسجيل" : "Sign up";
  const languageToggleText = isArabic ? "English" : "العربية";
  // ... Add more translations as needed

  // 4) Optional: set direction to RTL if Arabic
  const direction = isArabic ? "rtl" : "ltr";

  return (
    <div >
      {/* Mobile Header */}
      <header className="md:hidden">
        <MobileMenu languageToggleText={languageToggleText}/>
      </header>

      <section className="hidden sm:block">
        {/* Top Bar */}
        <div
          className="items-center justify-between hidden p-2 text-white sm:flex sm:flex-row"
          style={{
            background:
              "linear-gradient(55deg, rgb(30, 58, 138) 40%, rgb(185, 28, 28) 30%)",
          }}
        >
          {/* Social Media & Contact Info */}
          <div className="flex items-center gap-16 text-sm">
            <div className="flex gap-2">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.skype.com"
                target="_blank"
                aria-label="Skype"
                rel="noopener noreferrer"
              >
                <FaSkype />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                aria-label="YouTube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link>
            </div>
            {/* Contact Info */}
            <div className="flex items-center gap-5 text-sm">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>(406) 555-0120</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@btadacademy.org.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-2 text-sm">
            <Link href="/special-request" className="hover:underline">
              {specialRequest} |
            </Link>
            <Link href="/Blog/articles" className="hover:underline">
              {blog} |
            </Link>
            <Link href="/FAQ" className="hover:underline">
              {faq}
            </Link>
            <div className="border-[1px] border-slate-500">
              {/* Could link to a route toggling locale, or just display the text */}
              <Language languageToggleText={languageToggleText} params={params}/>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between p-4 shadow-md bg-gray-50">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={isArabic ? "/ar" : "/"}>
              <Image
                src="/logobat.png"
                alt="British Academy logo"
                width={80}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden space-x-6 sm:flex sm:gap-4">
            {activeMenu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-[#152765] text-[#6D737A]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login and Sign Up */}
          <div className="flex items-center space-x-4">
            <Link
              href={isArabic ? "/ar/sign-in" : "/sign-in"}
              className="flex items-center text-gray-500 hover:text-blue-900"
            >
              <FaLock className="mr-1" />
              {login}
            </Link>
            <Link
              href={isArabic ? "/ar/sign-in" : "/sign-in"}
              className="px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-700"
            >
              {signUp}
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default HeaderSection;
