"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import Language from "./Language";
import { useAuth } from "./context/AuthContext"; // added auth hook

export default function MobileMenu({ color, locale, languageToggleText, main }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auth logic
  const { user, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const getInitials = (name) =>
    name.split(" ").map((n) => n[0]).join("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-16">
      {/* Top Navigation Bar */}
      <div
        className={`${main ? (isScrolled ? "py-4" : "") : "py-2"} md:hidden fixed top-0 z-50 w-screen transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : main ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mx-4">
          {/* Logo */}
          <div className="transition-all duration-300">
            <Image
              src={
                main
                  ? isScrolled
                    ? "/logobat.webp"
                    : "https://res.cloudinary.com/dfkn6xcg4/image/upload/v1736589005/logo_in_white_akltwu.png"
                  : "/logobat.webp"
              }
              width={isScrolled ? 60 : 80}
              height={isScrolled ? 60 : 80}
              alt="logo"
              priority
            />
          </div>
          {/* Right Side: Language Toggle, Auth Block, and Menu Icon */}
          <div className="flex items-center gap-4">
            <div className={`${main ? (isScrolled ? "bg-primary text-white" : "bg-transparent px-2 py-2 text-white") : " text-black border-[1px] border-black"} rounded-md`}>
              <Language languageToggleText={languageToggleText} />
            </div>
            {isAuthenticated && user ? (
              <div className="flex gap-3 items-center">
                <div className="items-center relative">
                  <button
                    className="w-10 h-10 flex items-center justify-center bg-secondary text-white font-bold rounded-full text-sm focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {getInitials(user.data.full_name)}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 md:w-auto z-9999 bg-white border rounded shadow-lg text-sm">
                      <div className="p-3 border-b text-gray-700">
                        {user.data.full_name}
                      </div>
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-white bg-primary"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="flex justify-center items-center text-center"
            >
              <MdMenu size={28} color={color || (isScrolled ? "black" : "white")} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-md h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div
          aria-label="Close menu"
          onClick={toggleMenu}
          className="flex justify-end py-2 px-2 bg-gray-100 text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Slide-Out Menu Content */}
        <div className="px-4">
          {/* Logo */}
          <div className="flex justify-center my-6">
            <Image
              src="/logobat.webp"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </div>

          {/* Login/Signup Buttons */}
          {!isAuthenticated && !user && (
          <div className="flex justify-around mb-6">
            <Link
              href={`/${locale}/sign-in`}
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              href={`/${locale}/sign-up`}
              className="flex items-center px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary-dark"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-4 text-sm">
            <Link
              href={`/${locale}/`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <Link
              href={`/${locale}/search_course?type=1`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "دورات تدريبية" : "Training Courses"}
            </Link>
            <Link
              href={`/${locale}/search_course?type=2`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الدبلومة" : "Diploma"}
            </Link>
            <Link
              href={`/${locale}/search_course?type=3`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الماجستير" : "Masters"}
            </Link>
            <Link
              href={`/${locale}/show_cities`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "المدن" : "Cities"}
            </Link>
            <Link
              href={`/${locale}/consulting-services`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الاستشارات" : "Consulting"}
            </Link>
            <Link
              href={`/${locale}/academy_vision`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "من نحن" : "How We Are"}
            </Link>
            <Link
              href={`/${locale}/plan`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الخطة" : "Plan"}
            </Link>
            <Link
              href={`/${locale}/contact_us`}
              className="block text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
