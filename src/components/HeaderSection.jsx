"use client";

import React, { useEffect, useState } from "react";
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

function HeaderSection({ params, main }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isArabic = params === "ar";
  const activeMenu = isArabic ? menuAr : menuEn;
  const specialRequest = isArabic ? "طلب خاص" : "Special Request";
  const blog = isArabic ? "مدونة" : "Blog";
  const faq = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const login = isArabic ? "تسجيل الدخول" : "Login";
  const signUp = isArabic ? "تسجيل" : "Sign up";
  const languageToggleText = isArabic ? "English" : "العربية";

  return (
    <div>
      {/* Mobile Menu */}
      <header className="md:hidden">
        <MobileMenu
          color={main ? (isScrolled ? "black" : "white") : "black"}
          locale={params}
          languageToggleText={languageToggleText}
        />
      </header>

      {/* Top Bar (Non-Fixed, Always LTR) */}
      <div
        className="hidden sm:flex md:mb-20 items-center justify-between p-2 text-white"
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
          <Link href={`/${params}/Blog`}  className="hover:underline">
            {blog} |
          </Link>
          <Link href={`/${params}/FAQ`} className="hover:underline">
            {faq}
          </Link>
          <div className="border-[1px] border-slate-500">
            <Language languageToggleText={languageToggleText} params={params} />
          </div>
        </div>
      </div>

      {/* Main Navigation (RTL for Arabic, LTR for English) */}
      <nav
        className={`hidden  p-4 shadow-md bg-gray-50 fixed z-50 w-full transition-all duration-300 ${
          isScrolled ? "top-0 shadow-lg" : "top-[44px]"
        } ${isArabic ? "rtl text-right sm:flex flex-row-reverse items-center justify-between" : "ltr text-left sm:flex items-center justify-between"}`}
      >
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
        <div
          className={`hidden sm:flex gap-4 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {activeMenu.map((item, index) => (
            <Link
              key={index}
              href={`/${params}${item.link}`}
              className={`hover:text-[#152765] text-[#6D737A]`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login and Sign Up */}
        <div
          className={`flex items-center ${
            isArabic ? "flex-row-reverse space-x-reverse" : "space-x-4"
          }`}
        >
          <Link
            href={isArabic ? "sign-in" : "sign-in"}
            className="flex items-center text-gray-500 hover:text-blue-900"
          >
            <FaLock className={`${isArabic ? "ml-1" : "mr-1"}`} />
            {login}
          </Link>
          <Link
            href={isArabic ? "sign-in" : "sign-in"}
            className={` ${isArabic ? 'mr-3' : 'ml-0'} px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-700`}
          >
            {signUp}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HeaderSection;
