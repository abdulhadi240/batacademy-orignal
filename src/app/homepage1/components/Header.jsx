"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import MobileMenu from "../../../components/MobileMenu";
import { useAuth } from "@/components/context/AuthContext";

const FaLock = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaLock)
);

// Menu options for English and Arabic
const menus = {
  en: [
    { name: "Home", link: "/" },
    { name: "Diploma", link: "/search_course?type=1" },
    { name: "Masters", link: "/search_course?type=2" },
    { name: "Training Course", link: "/search_course?type=3" },
    { name: "Cities", link: "/show_cities" },
    { name: "Consulting", link: "/consulting_services" },
    { name: "How We Are", link: "/academy_vision" },
    { name: "Contact Us", link: "/contact_us" },
  ],
  ar: [
    { name: "الرئيسية", link: "/" },
    { name: "الدبلومة", link: "/search_course?type=1" },
    { name: "الماجستير", link: "/search_course?type=2" },
    { name: "دورات تدريبية", link: "/search_course?type=3" },
    { name: "المدن", link: "/show_cities" },
    { name: "الاستشارات", link: "/consulting_services" },
    { name: "من نحن", link: "/academy_vision" },
    { name: "تواصل معنا", link: "/contact_us" },
  ],
};

const Header = ({ locale, main }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentMenu = menus[locale] || menus["en"];
  const isArabic = locale === "ar";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navigation */}
      <header className="md:hidden">
        <MobileMenu
          main={true}
          color={isScrolled ? "black" : "white"}
          locale={locale}
          languageToggleText={languageToggleText}
        />
      </header>

      {/* Desktop Navigation */}
      <section className={`${isArabic ? 'rtl' : 'ltr'} hidden md:block`}>
        <nav
          className={`fixed top-0 z-50 w-full ${isArabic ? 'rtl' : 'ltr'} transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className={`flex items-center justify-between px-4 md:px-8 ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Logo */}
            <div className={`${isScrolled ? "w-20 py-2" : "w-28"}`}>
              <Link href="/">
                <Image
                  src={
                    isScrolled || !main
                      ? "/logobat.webp"
                      : "https://res.cloudinary.com/dfkn6xcg4/image/upload/v1736589005/logo_in_white_akltwu.png"
                  }
                  alt="British Academy logo"
                  width={isScrolled ? 80 : 100}
                  height={isScrolled ? 40 : 50}
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className={`hidden space-x-6 sm:flex sm:gap-4 ${isArabic ? 'text-right' : 'text-left'}`}>
              {currentMenu.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale}${item.link}`}
                  className={`hover:text-${isScrolled ? "black" : "white"} ${
                    isScrolled ? "text-sm text-black" : "text-md text-white"
                  } transition-all`}
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
                      href={`/${locale}/profile`}
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
                  href={`/${locale}/sign-in`}
                  className={`flex items-center hover:text-blue-900 ${
                    isScrolled ? "text-sm text-black" : "text-md text-white"
                  } transition-all`}
                >
                  <FaLock className="mr-1" />
                  {locale === "en" ? "Login" : "تسجيل الدخول"}
                </Link>
                <Link href={`/${locale}/sign-up`}
                  className={`px-4 py-2 rounded ${
                    isScrolled ? "bg-primary text-white text-sm" : "bg-secondary text-white text-md"
                  } transition-all`}
                >
                  {locale === "en" ? "Sign Up" : "سجل"}
                </Link>
              </div>
            )}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
