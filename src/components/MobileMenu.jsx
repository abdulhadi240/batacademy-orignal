"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHamburger, FaLock } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Language from "./Language";

export default function MobileMenu({ color, locale, languageToggleText }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="py-4 md:hidden fixed top-0 z-50 w-screen bg-white">
        {/* Menu Button */}
        <div className="flex justify-between mx-2">
          <div>
            <Image src={"/logobat.png"} width={80} height={80} alt="logo" />
          </div>
          <div className="flex items-center gap-4">
            <div className="px-2 bg-primary text-white rounded-md">
              {/* Could link to a route toggling locale, or just display the text */}
              <Language languageToggleText={languageToggleText} />
            </div>
            <div
              className="flex justify-center items-center text-center"
              onClick={toggleMenu}
            >
              <MdMenu size={28} color={color || "black"} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-md h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="">
          {/* Logo */}

          <div
            aria-label="Close menu"
            onClick={toggleMenu}
            className="flex justify-end py-2 px-2 bg-[#DEEEFD] w-full text-[#111F51] hover:text-gray-800 "
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
          <div className="bg-[#DEEEFD] p-4">
            <div className="flex flex-col ">
              <div className="flex justify-center">
                <Image
                  src="/logobat.png" // Optimized image usage
                  alt="Logo"
                  width={100}
                  height={100}
                  className=""
                  priority // To load the image faster
                />
              </div>
              <div className="flex justify-between gap-10">
                <Link
                  href="/login"
                  className="flex items-center w-full h-8 px-4 mt-4 text-xs  border-[#111F51] border-[1px] text-[#111F51] rounded hover:bg-blue-700"
                  onClick={toggleMenu}
                >
                  <FaLock className="mr-2 " /> Login
                </Link>
                <Link
                  href="/login"
                  className="flex items-center w-full h-8 px-4 mt-4 text-xs text-white rounded bg-primary "
                  onClick={toggleMenu}
                >
                  <FaLock className="mr-2 " /> Signup
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="mt-8 space-y-4 text-sm space-x-7">
            <Link
              href="/"
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {""}
            </Link>
            <Link
              href={`${locale}/`}
              passHref
              className="block text-[#111F51] font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <Link
              href={`${locale}/search_course/training-courses/`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "دورات تدريبية" : "Training Courses"}
            </Link>
            <Link
              href={`${locale}/search_course/diploma/`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الدبلومة" : "Diploma"}
            </Link>
            <Link
              href={`${locale}/search_course/masters`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الماجستير" : "Masters"}
            </Link>
            <Link
              href={`${locale}/cities`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "المدن" : "Cities"}
            </Link>
            <Link
              href={`${locale}/consulting-services`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الاستشارات" : "Consulting"}
            </Link>
            <Link
              href={`${locale}/Academy-Vision`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "من نحن" : "How We Are"}
            </Link>
            <Link
              href={`${locale}/plan`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {locale === "ar" ? "الخطة" : "Plan"}
            </Link>
            <Link
              href={`${locale}/contact`}
              passHref
              className="block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
