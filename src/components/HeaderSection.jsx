"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import both English and Arabic menus
import { menuEn, menuAr } from "./Menus";
import MobileMenu from "./MobileMenu";
import Language from "./Language";
import { useAuth } from "./context/AuthContext";

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
  }, [])
  const isArabic = params === "ar";
  const activeMenu = isArabic ? menuAr : menuEn;
  const specialRequest = isArabic ? "طلب خاص" : "Special Request";
  const blog = isArabic ? "مدونة" : "Blog";
  const faq = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const login = isArabic ? "تسجيل الدخول" : "Login";
  const signUp = isArabic ? "تسجيل" : "Sign up";
  const languageToggleText = isArabic ? "English" : "العربية";

  
    // Auth logic
    const { user, isAuthenticated, logout } = useAuth();
    console.log(user);
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const getInitials = (name) =>
      name
        .split(" ")
        .map((n) => n[0])
        .join("");


  return (
    <div>
      {/* Mobile Menu */}
      <header className="md:hidden">
        <MobileMenu
          color={main ? (isScrolled ? "black" : "white") : "black"}
          params={params}
          languageToggleText={languageToggleText}
        />
      </header>

      {/* Top Bar (Non-Fixed, Always LTR) */}
      <div
        className="hidden sm:flex md:mb-20 items-center justify-between p-2  text-white"
        style={{
          background:
            "linear-gradient(55deg, rgb(30, 58, 138) 40%, rgb(185, 28, 28) 30%)",
        }}
      >
        {/* Social Media & Contact Info */}
        <div className="flex items-center gap-16 text-sm pb-2">
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
            <div className="flex items-center gap-2 mr-2">
              <FaEnvelope />
              <span>info@btadacademy.org.uk</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-2 text-sm">
          <Link href={`/${params}/registerInternalCourse`} className="hover:underline">
            {specialRequest} |
          </Link>
          <Link href={`/${params}/taxonomy/blog`}  className="hover:underline">
            {blog} |
          </Link>
          <Link href={`/${params}/faq`} className="hover:underline">
            {faq}
          </Link>
          <div className="">
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

         {/* Auth Section: Show user dropdown if authenticated; otherwise, show Login and Sign Up */}
         {isAuthenticated && user ? (
              <div className="relative">
                <button
                  className="w-10 h-10 flex items-center justify-center bg-secondary text-sm text-white font-bold rounded-full focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {getInitials(user.data.full_name)}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <div className="p-3 border-b text-gray-700">{user.name}</div>
                    <Link
                      href={`/${params}/profile`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 bg-primary text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href={`/${params}/sign-in`}
                  className={`flex items-center hover:text-blue-900 text-primary ${
                    isScrolled ? "text-sm text-black" : "text-md text-primary"
                  } transition-all`}
                >
                  <FaLock className="mr-1" />
                  {params === "en" ? "Login" : "تسجيل الدخول"}
                </Link>
                <Link href={`/${params}/sign-up`}
                  className={`px-4 py-2 rounded ${
                    isScrolled ? "bg-primary text-white text-sm" : "bg-secondary text-white text-md"
                  } transition-all`}
                >
                  {params === "en" ? "Sign Up" : "سجل"}
                </Link>
              </div>
            )}
      </nav>
    </div>
  );
}

export default HeaderSection;
