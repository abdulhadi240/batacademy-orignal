"use client";
import React from "react";
import Block from "./components/Block"; // Adjust import path as needed
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import HeaderSection from "@/components/HeaderSection";
import { useParams } from "next/navigation"; // optional if you prefer reading params directly

export default function Page({ params }) {
  // 1. Detect the locale from route params, default to "en" if missing.
  //    This works if your route is /[locale]/contact
  const locale = params?.locale || "en";

  // 2. Conditionally render text. Use variables for any repeated text to avoid clutter.
  const callUsText = locale === "ar" ? "اتصل بنا" : "Call us";
  const locationText = locale === "ar" ? "الموقع" : "Location";
  const phoneText = locale === "ar" ? "الهاتف" : "Phone";
  const emailText = locale === "ar" ? "البريد الإلكتروني" : "Email";
  const contactNow = locale === "ar" ? "تواصل الآن" : "CONTACT NOW";
  const formDescription =
    locale === "ar"
      ? "هذا نص تجريبي باللغة العربية لتوضيح وصف مختصر."
      : "In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet.";
  const namePlaceholder = locale === "ar" ? "الاسم" : "Name";
  const emailPlaceholder = locale === "ar" ? "البريد الإلكتروني" : "Email";
  const phonePlaceholder = locale === "ar" ? "رقم الهاتف" : "Phone";
  const messagePlaceholder = locale === "ar" ? "رسالة" : "Message";
  const submitButton = locale === "ar" ? "إرسال" : "Submit";

  // 3. You can also split the text by language within the blocks
  //    (WhatsApp number, address, etc.) if needed. For now, we’ll keep them the same.

  return (
    <>
      <HeaderSection params={params.locale}/>
      <div className="mt-10">
        <div className="bg-[#DEEEFF] px-4 sm:px-10 flex flex-col sm:gap-56 gap-24 sm:flex-row w-full h-auto sm:h-96">
          {/* Left Column */}
          <div className="flex flex-col">
            <Block
              title={callUsText}
              Icon={FaWhatsapp}
              text={"WhatsApp (EN): +447443269723 WhatsApp (AR): +44 7724022466"}
            />
            <Block
              title={locationText}
              Icon={FaMapMarkerAlt}
              text={
                "Address 1: 6th Floor, FC200, 2 Lakeside Dr, London NW10 7FQ Address 2: Suite 702 Crown House, North Circular Road, London, NW10 7PN"
              }
            />
            <Block title={phoneText} Icon={FaPhoneAlt} text={"+442035827999"} />
            <Block
              title={emailText}
              Icon={MdOutlineEmail}
              text={"info@batdacademy.org.uk"}
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full sm:w-[450px] bg-white dark:text-black shadow-lg p-6 h-auto sm:h-[490px]">
            <h1 className="mb-4 text-2xl font-bold">{contactNow}</h1>
            <p className="mb-4 text-sm">{formDescription}</p>
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder={namePlaceholder}
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* Phone Input */}
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder={phonePlaceholder}
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* Message Input */}
              <div className="mb-4">
                <textarea
                  placeholder={messagePlaceholder}
                  className="w-full h-24 py-2 border-b border-gray-300 resize-none focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
