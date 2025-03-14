"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import FooterMobile from "./FooterMobile";

export default function Footer({ params }) {
  const isArabic = params.locale === "ar";

  // Section Headings
  const aboutHeading = isArabic ? "نبذة" : "About";
  const academyServicesHeading = isArabic ? "خدمات الأكاديمية" : "Academy Services";
  const supportHeading = isArabic ? "الدعم" : "Support";

  // Links
  const aboutUs = isArabic ? "من نحن" : "About Us";
  const academyServices = isArabic ? "خدمات الأكاديمية" : "Academy Services";
  const blog = isArabic ? "مدونة" : "Blog";
  const boardOfAdvisor = isArabic ? "مجلس المستشارين" : "Board of Advisor";
  const contactUs = isArabic ? "اتصل بنا" : "Contact Us";
  const faq = isArabic ? "الأسئلة الشائعة" : "FAQ";
  const workArea = isArabic ? "مجال العمل" : "Work Area";
  const privacyPolicy = isArabic ? "سياسة الخصوصية" : "Privacy Policy";
  const customerService = isArabic ? "خدمة العملاء" : "Customer Service";
  const job = isArabic ? "وظائف" : "Job";

  return (
    <footer>
      {/* Mobile Footer */}
      <div className="md:hidden">
        <FooterMobile params={params} />
      </div>

      {/* Desktop Footer */}
      <div className="hidden px-4 pt-32 bg-white sm:px-16 md:block">
        <div className={`container flex flex-col items-start justify-between mx-auto space-y-10 ${isArabic ? "sm:flex-row-reverse" : "sm:flex-row"} sm:space-y-0`}>
          
          {/* Logo + Description */}
          <div className={`w-full sm:w-auto ${isArabic ? "text-end" : "text-start"}`}>
            <div className={`${isArabic ? "flex justify-end items-end" : "flex justify-start items-start"}`}>
              <Image src="/logobat.png" alt="British Academy Logo" width={80} height={50} className="mb-4" />
            </div>
            <p className="w-full text-sm text-gray-600 sm:w-80">
              {isArabic ? "الأكاديمية البريطانية للتدريب والتطوير متخصصة في تدريب وتطوير الأفراد والمؤسسات." : "The British Academy for Training and Development specializes in training and developing individuals and institutions."}
            </p>
            {/* Social Media Links */}
            <div className={`${isArabic ? "justify-end text-right" : ""} flex mt-4 space-x-4`}>
              {[
                { icon: FaYoutube, link: "https://www.youtube.com", color: "text-red-600" },
                { icon: FaInstagram, link: "https://www.instagram.com", color: "text-pink-600" },
                { icon: FaTwitter, link: "https://www.twitter.com", color: "text-blue-500" },
                { icon: FaLinkedin, link: "https://www.linkedin.com", color: "text-blue-600" },
                { icon: FaFacebook, link: "https://www.facebook.com", color: "text-blue-800" }
              ].map(({ icon: Icon, link, color }, index) => (
                <Link key={index} href={link} target="_blank">
                  <Icon size={24} className={`${color}`} />
                </Link>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{aboutHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href={`/${params.locale}/about`}>{aboutUs}</Link></li>
              <li><Link href={`/${params.locale}/taxonomy/blog`}>{blog}</Link></li>
              <li><Link href={`/${params.locale}/board_of_advisors`}>{boardOfAdvisor}</Link></li>
            </ul>
          </div>

          {/* Academy Services Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{academyServicesHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href={`/${params.locale}/academy_service`}>{academyServices}</Link></li>
              <li><Link href={`/${params.locale}/contact_us`}>{contactUs}</Link></li>
              <li><Link href={`/${params.locale}/faq`}>{faq}</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full mt-10 sm:w-auto sm:mt-28">
            <h3 className="mb-2 font-bold text-gray-800">{supportHeading}</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><Link href={`/${params.locale}/work_area`}>{workArea}</Link></li>
              <li><Link href={`/${params.locale}/privacy_policy`}>{privacyPolicy}</Link></li>
              <li><Link href={`/${params.locale}/customer_service`}>{customerService}</Link></li>
              <li><Link href={`/${params.locale}/job`}>{job}</Link></li>
            </ul>
          </div>

          {/* Subscription / Copyright */}
          <div className="w-full mt-10 sm:w-1/4 sm:mt-28">
            <p className="mb-4 text-sm font-bold text-gray-600">
              {isArabic ? "© 2023 - جميع الحقوق محفوظة للأكاديمية البريطانية." : "2023 - Copyright © All Rights Reserved By British Academy."}
              <Link href="https://shiftict.com" target="_blank" rel="noopener noreferrer" className="ml-1 underline">
                {isArabic ? "تم الإنشاء بواسطة Shiftict" : "Created by Shiftict"}
              </Link>
            </p>
            <div className="flex items-center p-2 bg-white rounded shadow">
              <FaEnvelope className="mr-2 text-xl text-yellow-500" />
              <input 
                type="email" 
                placeholder={isArabic ? "بريدك الإلكتروني" : "Your Email"} 
                className="flex-grow text-sm text-gray-600 outline-none p-1 border border-gray-300 rounded-md"
                required 
              />
              <button 
                type="submit" 
                className="p-2 ml-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
                onClick={() => alert("Subscribed!")}
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
