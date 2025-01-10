'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import MobileMenu from "../../../components/MobileMenu";

const FaLock = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaLock)
);

// Menu options for English and Arabic
const menus = {
  en: [
    { name: "Home", link: "/" },
    { name: "Diploma", link: "/diploma" },
    { name: "Masters", link: "/masters" },
    { name: "Training Course", link: "/training-courses/" },
    { name: "Cities", link: "/cities" },
    { name: "Consulting", link: "/consulting-services" },
    { name: "How We Are", link: "/Academy-Vision" },
    { name: "Contact Us", link: "/contact" },
  ],
  ar: [
    { name: "الرئيسية", link: "/" },
    { name: "الدبلومة", link: "/diploma" },
    { name: "الماجستير", link: "/masters" },
    { name: "دورات تدريبية", link: "/training-courses/" },
    { name: "المدن", link: "/cities" },
    { name: "الاستشارات", link: "/consulting-services" },
    { name: "من نحن", link: "/Academy-Vision" },
    { name: "تواصل معنا", link: "/contact" },
  ],
};

const Header = ({ locale, main }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentMenu = menus[locale] || menus["en"];
  const isArabic = locale === "ar";
  const languageToggleText = isArabic ? "English" : "العربية";

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
      <section className=" hidden md:block">
        <nav
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-2 md:px-8">
            {/* Logo */}
            <div className={`${isScrolled ? "w-20" : "w-28"}`}>
              <Link href="/">
                <Image
                  src={isScrolled || !main ? "/logobat.webp" : "/logo_in_white.png"}
                  alt="British Academy logo"
                  width={isScrolled ? 80 : 100}
                  height={isScrolled ? 40 : 50}
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden space-x-6 sm:flex sm:gap-4">
              {currentMenu.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale}${item.link}`}
                  className={`hover:text-${isScrolled ? "black" : "white"} ${
                    isScrolled
                      ? "text-sm text-black"
                      : "text-md text-white"
                  } transition-all`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Login and Sign-Up */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className={`flex items-center hover:text-blue-900 ${
                  isScrolled
                    ? "text-sm text-black"
                    : "text-md text-white"
                } transition-all`}
              >
                <FaLock className="mr-1" />{" "}
                {locale === "en" ? "Login" : "تسجيل الدخول"}
              </Link>
              <button
                className={`px-4 py-2 rounded ${
                  isScrolled
                    ? "bg-primary text-white text-sm"
                    : "bg-secondary text-white text-md"
                } transition-all`}
              >
                {locale === "en" ? "Sign Up" : "سجل"}
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
