"use client";
import React from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
// Adjust these imports based on where your components are located
import Card from "./Card"; 
import Contacts from "./Contacts";
// Icons
import { FaPhoneAlt, FaPhoneVolume, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Page({ params }) {
  // 1. Get locale from route params, default to "en"
  const locale = params?.locale || "en";

  // 2. Conditionally render text
  const customerServiceHeading =
    locale === "ar" ? "خدمة العملاء" : "CUSTOMER SERVICE";
  const homeCSPath =
    locale === "ar" ? "الرئيسية / خدمة العملاء" : "Home / Customer Service";

  const createTicketTitle =
    locale === "ar" ? "أنشئ تذكرتك الآن" : "CREATE YOUR TICKET NOW";
  const aboutTicket =
    locale === "ar"
      ? "هذا نص تجريبي باللغة العربية لتوضيح كيف يمكن للمستخدم إنشاء التذكرة وكتابة تفاصيل المشكلة."
      : "In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.";

  const namePlaceholder = locale === "ar" ? "الاسم" : "Name";
  const emailPlaceholder = locale === "ar" ? "البريد الإلكتروني" : "Email";
  const phonePlaceholder = locale === "ar" ? "رقم الهاتف" : "Phone";
  const problemPlaceholder = locale === "ar" ? "المشكلة" : "Problem";
  const createTicketButton = locale === "ar" ? "إنشاء التذكرة" : "Create Ticket";

  return (
    <>
      <HeaderSection params={params.locale}/>

      {/* Banner */}
      <div className="banner-container">
        <div className="relative h-32 banner sm:h-64">
          <Image
            src="/plan.webp"
            alt="banner"
            fill
            className="object-cover"
            priority
          />
          {/* Text box overlay */}
          <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[300px] flex justify-center items-center h-[60px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
            <div>
              <p className="text-[10px] font-semibold text-center sm:text-xl text-primary">
                <span className="text-center text-secondary">{customerServiceHeading}</span>
              </p>
              <p className="flex justify-center text-xs font-normal sm:text-sm text-primary">
                {homeCSPath}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <Contacts />

      {/* Horizontal Divider */}
      <div className="flex justify-center">
        <div className="w-full m-20 md:m-32 flex justify-center h-[1px] border-[1px] border-primary mb-10 mt-10" />
      </div>

      {/* Form Section */}
      <div className="flex justify-center">
        <div className="w-full sm:w-[450px] bg-white dark:text-black shadow-lg p-6 h-auto sm:h-[490px]">
          <h1 className="mb-4 text-2xl font-bold text-center">
            {createTicketTitle}
          </h1>
          <p className="mb-4 text-sm">{aboutTicket}</p>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder={namePlaceholder}
                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />
            </div>
            {/* Phone Input */}
            <div className="mb-4">
              <input
                type="tel"
                placeholder={phonePlaceholder}
                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary"
                required
              />
            </div>
            {/* Problem Textarea */}
            <div className="mb-4">
              <textarea
                placeholder={problemPlaceholder}
                className="w-full h-24 py-2 border-b border-gray-300 resize-none focus:outline-none focus:border-primary"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-lg bg-primary focus:border-primary/80"
            >
              {createTicketButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
