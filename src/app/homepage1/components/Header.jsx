import React from "react";
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

const Header = ({ locale = "en" }) => {
  const currentMenu = menus[locale] || menus["en"]; // Fallback to 'en' if locale is invalid or missing

  return (
    <>
      {/* Mobile Navigation */}
      <header className="md:hidden">
        <MobileMenu color={"white"} locale={locale}/>
      </header>

      {/* Desktop Navigation */}
      <section>
        <nav className="items-center justify-between hidden p-4 text-white bg-transparent md:flex">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
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
            {currentMenu.map((item, index) => (
              <Link
                key={index}
                href={`/${locale}${item.link}`}
                className="hover:text-white/80"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login and Sign-Up */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="flex items-center text-white hover:text-blue-900"
            >
              <FaLock className="mr-1" color="white" /> {locale === "en" ? "Login" : "تسجيل الدخول"}
            </Link>
            <button className="px-4 py-2 text-white rounded bg-secondary">
              {locale === "en" ? "Sign Up" : "سجل"}
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
