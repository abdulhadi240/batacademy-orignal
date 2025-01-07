"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import FooterMobile from "./FooterMobile";

export default function Footer({ params }) {
  // Check language
 
  
  const isArabic = params === "ar";
  console.log(params , isArabic);

  // ======= TEXT STRINGS =======
  // Social links remain the same unless you want them different for AR/EN

  // Intro / Description
  const introTextEn =
    "The British Academy for Training and Development is a British institution specializing in training and development of human and institutional staff across various fields, including management, media, IT, and more.";
  const introTextAr =
    "الأكاديمية البريطانية للتدريب والتطوير هي مؤسسة بريطانية متخصصة في تدريب وتطوير الكوادر البشرية والمؤسسية في مختلف المجالات، بما في ذلك الإدارة والإعلام وتقنية المعلومات وغيرها.";

  // Section Headings
  const aboutHeading = isArabic ? "نبذة" : "About";
  const companyHeading = isArabic ? "الشركة" : "Company";
  const supportHeading = isArabic ? "الدعم" : "Support";

  // "About" Section Links
  const aboutUs = isArabic ? "من نحن" : "About Us";
  const features = isArabic ? "الميزات" : "Features";
  const news = isArabic ? "الأخبار" : "News";
  const menuTxt = isArabic ? "القائمة" : "Menu";

  // "Company" Section Links
  const why2rism = isArabic ? "لماذا 2rism" : "Why 2rism";
  const plan = isArabic ? "الخطة" : "Plan";
  const faq = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const blog = isArabic ? "مدونة" : "Blog";

  // "Support" Section Links
  const account = isArabic ? "الحساب" : "Account";
  const supportCenter = isArabic ? "مركز الدعم" : "Support Center";
  const feedback = isArabic ? "ملاحظات" : "Feedback";
  const contactUs = isArabic ? "اتصل بنا" : "Contact Us";

  // Footer bottom text
  const copyrightEn =
    "2023 - Copyright © All Rights Reserved By British Academy.";
  const copyrightAr =
    "© 2023 - جميع الحقوق محفوظة للأكاديمية البريطانية.";
  const createdByEn = "Created by Shiftict";
  const createdByAr = "تم الإنشاء بواسطة Shiftict";

  const emailPlaceholder = isArabic ? "بريدك الإلكتروني" : "Your Email";

  // Combine in final strings
  const introText = isArabic ? introTextAr : introTextEn;
  const copyright = isArabic ? copyrightAr : copyrightEn;
  const createdBy = isArabic ? createdByAr : createdByEn;

  return (
    <footer>
      {/* Mobile Footer */}
      <div className="md:hidden">
        <FooterMobile params={params}/>
      </div>

      {/* Desktop Footer */}
      <div className="hidden px-4 pt-32 bg-white sm:px-16 md:block">
        <div className="container flex flex-col items-start justify-between mx-auto space-y-10 sm:flex-row sm:space-y-0">
          {/* Logo + Description */}
          <div className="w-full sm:w-auto">
            <Image
              src="/logobat.png"
              alt="British Academy Logo"
              width={80}
              height={50}
              className="mb-4"
            />
            <p className="w-full text-sm text-gray-600 sm:w-80">
              {introText}
            </p>
            {/* Social Media Links */}
            <div className="flex mt-4 space-x-4">
              <Link href="https://www.youtube.com" aria-label="YouTube" target="_blank">
                <FaYoutube size={24} className="text-red-600" />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank">
                <FaInstagram size={24} className="text-pink-600" />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter" target="_blank">
                <FaTwitter size={24} className="text-purple-600" />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
                <FaLinkedin size={24} className="text-blue-600" />
              </Link>
              <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank">
                <FaFacebook size={24} className="text-blue-800" />
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{aboutHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/about">{aboutUs}</Link>
              </li>
              <li>
                <Link href="/features">{features}</Link>
              </li>
              <li>
                <Link href="/news">{news}</Link>
              </li>
              <li>
                <Link href="/menu">{menuTxt}</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{companyHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/why-2rism">{why2rism}</Link>
              </li>
              <li>
                <Link href="/plan">{plan}</Link>
              </li>
              <li>
                <Link href="/FAQ">{faq}</Link>
              </li>
              <li>
                <Link href="/Blog/articles">{blog}</Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{supportHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/account">{account}</Link>
              </li>
              <li>
                <Link href="/customer_service">{supportCenter}</Link>
              </li>
              <li>
                <Link href="/feedback">{feedback}</Link>
              </li>
              <li>
                <Link href="/contact">{contactUs}</Link>
              </li>
            </ul>
          </div>

          {/* Subscription / Copyright */}
          <div className="w-full mt-10 sm:w-1/4 sm:mt-28">
            <p className="mb-4 text-sm font-bold text-gray-600">
              {copyright}
              <Link
                href="https://shiftict.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                {createdBy}
              </Link>
            </p>
            <div className="flex items-center p-2 bg-white rounded shadow">
              <FaEnvelope className="mr-2 text-xl text-yellow-500" />
              <input
                type="email"
                placeholder={emailPlaceholder}
                aria-label="Email subscription"
                className="flex-grow text-sm text-gray-600 outline-none"
                required
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="p-2 ml-2 text-white bg-red-600 rounded"
              >
                <FaEnvelope />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
