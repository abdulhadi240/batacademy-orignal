"use client";
import React from "react";
import Block from "./components/Block"; // Adjust import path as needed
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import HeaderSection from "@/components/HeaderSection";

export default function Page({ params }) {
  // Locale handling for bilingual support
  const locale = params?.locale || "en";

  const callUsText = locale === "ar" ? "اتصل بنا" : "Call us";
  const locationText = locale === "ar" ? "الموقع" : "Location";
  const phoneText = locale === "ar" ? "الهاتف" : "Phone";
  const emailText = locale === "ar" ? "البريد الإلكتروني" : "Email";
  const contactNow = locale === "ar" ? "تواصل الآن" : "CONTACT NOW";
  const formDescription =
    locale === "ar"
      ? "هذا نص تجريبي باللغة العربية لتوضيح وصف مختصر."
      : "Feel free to reach out to us using the form below or visit our locations.";
  const namePlaceholder = locale === "ar" ? "الاسم" : "Name";
  const emailPlaceholder = locale === "ar" ? "البريد الإلكتروني" : "Email";
  const phonePlaceholder = locale === "ar" ? "رقم الهاتف" : "Phone";
  const messagePlaceholder = locale === "ar" ? "رسالة" : "Message";
  const submitButton = locale === "ar" ? "إرسال" : "Submit";

  return (
    <>
      <HeaderSection params={params.locale} />
      <div className="mt-20">
        <div className="bg-[#DEEEFF] px-4 sm:px-10 flex flex-col sm:gap-56 gap-24 sm:flex-row w-full h-auto sm:h-auto">
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

        {/* Map Section */}
        <div className="mt-10 w-full px-4 sm:px-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {locale === "ar" ? "موقعنا" : "Our Location"}
          </h2>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19807.869830269146!2d-0.2795192680708343!3d51.5335188020108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610a05b7e8ebf%3A0x5ebee4a81b1017f5!2sNorth%20Circular%20Rd%2C%20London%20NW10%207PN%2C%20UK!5e0!3m2!1sen!2s!4v1696953827649!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
