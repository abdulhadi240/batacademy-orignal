"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function FooterMobile({ params }) {
  const [openSection, setOpenSection] = useState(null);

  // 1) Check language
  const isArabic = params === "ar";

  // 2) Section Headings
  const supportHeading = isArabic ? "الدعم" : "Support";
  const companyHeading = isArabic ? "الشركة" : "Company";
  const aboutHeading = isArabic ? "نبذة" : "About";

  // 3) "Support" Section Links
  const accountLink = isArabic ? "الحساب" : "Account";
  const supportCenterLink = isArabic ? "مركز الدعم" : "Support Center";
  const feedbackLink = isArabic ? "الملاحظات" : "Feedback";
  const contactUsLink = isArabic ? "اتصل بنا" : "Contact Us";

  // 4) "Company" Section Links
  const why2rismLink = isArabic ? "لماذا 2rism" : "Why 2rism";
  const partnerLink = isArabic ? "الشراكة معنا" : "Partner With Us";
  const faqLink = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const blogLink = isArabic ? "مدونة" : "Blog";

  // 5) "About" Section Links
  const aboutUsLink = isArabic ? "من نحن" : "About Us";
  const featuresLink = isArabic ? "الميزات" : "Features";
  const newsLink = isArabic ? "الأخبار" : "News";
  const menuLink = isArabic ? "القائمة" : "Menu";

  // 6) Footer Bottom
  const placeholderText = isArabic ? "بريدك الإلكتروني" : "Your Email";
  const copyright =
    isArabic
      ? "© 2023 - جميع الحقوق محفوظة للأكاديمية البريطانية."
      : "2023 - Copyright © All Rights Reserved By British Academy.";
  const createdByText = isArabic ? "تم الإنشاء بواسطة Shiftict" : "Created by Shiftict";

  // Toggle accordion section
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="px-4 pt-12 pb-10 bg-[#F0F5FC] sm:px-16">
      <div className="container mx-auto">
        {/* Accordion Sections */}
        <div className="space-y-4">

          {/* SUPPORT SECTION */}
          <div className="w-full border-b-[1px] border-[#111F51]">
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection("support")}
            >
              {supportHeading}
              <span>
                {openSection === "support" ? (
                  <MdOutlineKeyboardArrowUp size={20} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={20} />
                )}
              </span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "support" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/account">{accountLink}</Link>
                </li>
                <li>
                  <Link href="/support">{supportCenterLink}</Link>
                </li>
                <li>
                  <Link href="/feedback">{feedbackLink}</Link>
                </li>
                <li>
                  <Link href="/contact">{contactUsLink}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COMPANY SECTION */}
          <div className="w-full border-b-[1px] border-[#111F51]">
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection("company")}
            >
              {companyHeading}
              <span>
                {openSection === "company" ? (
                  <MdOutlineKeyboardArrowUp size={20} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={20} />
                )}
              </span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "company" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/why-2rism">{why2rismLink}</Link>
                </li>
                <li>
                  <Link href="/partner-with-us">{partnerLink}</Link>
                </li>
                <li>
                  <Link href="/faq">{faqLink}</Link>
                </li>
                <li>
                  <Link href="/blog">{blogLink}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="w-full border-b-[1px] border-[#111F51]">
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection("about")}
            >
              {aboutHeading}
              <span>
                {openSection === "about" ? (
                  <MdOutlineKeyboardArrowUp size={20} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={20} />
                )}
              </span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === "about" ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/about">{aboutUsLink}</Link>
                </li>
                <li>
                  <Link href="/features">{featuresLink}</Link>
                </li>
                <li>
                  <Link href="/news">{newsLink}</Link>
                </li>
                <li>
                  <Link href="/menu">{menuLink}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOGO AND SOCIAL MEDIA LINKS */}
        <div className="flex flex-col items-center mt-8">
          <Image
            src="/logobat.png"
            alt="British Academy Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <div className="flex mt-2 space-x-4">
            <Link href="https://www.youtube.com" aria-label="YouTube" target="_blank">
              <FaYoutube size={24} className="text-red-600" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank">
              <FaInstagram size={24} className="text-pink-600" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" target="_blank">
              <FaTwitter size={24} className="text-blue-400" />
            </Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
              <FaLinkedin size={24} className="text-blue-600" />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank">
              <FaFacebook size={24} className="text-blue-800" />
            </Link>
          </div>
        </div>

        {/* SUBSCRIPTION SECTION */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-center text-gray-600">
            {copyright}
            <br />
            <Link
              href="https://shiftict.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {createdByText}
            </Link>
          </p>
          <div className="flex items-center w-full max-w-sm p-2 mt-4 bg-white rounded shadow-md">
            <FaEnvelope className="mr-2 text-xl text-yellow-500" />
            <input
              type="email"
              placeholder={placeholderText}
              aria-label="Email subscription"
              className="flex-grow text-sm text-gray-600 outline-none"
              required
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="p-2 ml-2 text-white bg-[#111F51] rounded"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
