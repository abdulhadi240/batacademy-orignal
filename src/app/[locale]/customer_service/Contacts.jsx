"use client";
import React from "react";
import { useParams } from "next/navigation"; // to read the dynamic route
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactCard from "./ContactCard";

export default function Contacts() {
  // 1. Read the locale from the route (e.g. /en or /ar)
  const params = useParams();
  const locale = params?.locale || "en"; // default to "en" if not provided

  // 2. Define all strings conditionally
  const labelShareQueries =
    locale === "ar" ? "شارك استفساراتك معنا" : "Share your queries with us";
  const headingEmailTeam =
    locale === "ar" ? "راسل فريقنا" : "Email Our Team";
  const textSpeakTeam =
    locale === "ar"
      ? "تحدث إلى فريقنا الودود."
      : "Speak to our friendly team.";
  const respondWithin =
    locale === "ar"
      ? "نرد خلال 24 ساعة."
      : "We respond within 24 hours.";

  const labelLiveChat =
    locale === "ar" ? "الدردشة المباشرة في الركن الأيمن" : "Live chat at the right corner";
  const headingChatWhatsApp =
    locale === "ar" ? "الدردشة على واتساب" : "Chat On Whatsapp";
  const text24_7 = locale === "ar" ? "متاح 24/7" : "Mon-Sat 24/7";

  const labelLiveTalk =
    locale === "ar" ? "تحدث مباشرة مع فريقنا" : "Live Talk With Our Team";
  const headingCallNow =
    locale === "ar" ? "اتصل الآن" : "Call Now";

  const labelVisitOffice =
    locale === "ar" ? "قم بزيارة مكتبنا" : "Visit our office";
  const headingVisitUs =
    locale === "ar" ? "زرنا!" : "Visit us!";
  const inPersonSupport =
    locale === "ar"
      ? "تفضل بزيارتنا للحصول على دعم شخصي."
      : "Come visit us for in-person support.";

  return (
    <div className="flex justify-center mt-10 sm:mt-20">
      <div className="grid grid-cols-1 gap-6 px-4 sm:px-16 lg:px-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {/* 1. EMAIL CARD */}
        <ContactCard
          label={labelShareQueries}
          size={24}
          Ricons={BiLogoGmail}
          Heading={headingEmailTeam}
          text={textSpeakTeam}
          link="https://mail.google.com/mail/?view=cm&to=info@batdacademy.org.uk&su=Your%20Subject&body=Your%20Message"
        >
          <p className="text-sm text-gray-600">
            {respondWithin}
            <br className="mt-2" />
            <span className="mt-1">info@batdacademy.org.uk</span>
          </p>
        </ContactCard>

        {/* 2. WHATSAPP CHAT CARD */}
        <ContactCard
          label={labelLiveChat}
          size={24}
          Ricons={FaWhatsapp}
          Heading={headingChatWhatsApp}
          text={text24_7}
          link="https://api.whatsapp.com/send/?phone=%2B442035827999&text&type=phone_number&app_absent=0"
        >
          <div className="text-sm text-gray-600">
            <ul>
              <li>
                {locale === "ar" ? "واتساب (EN):" : "WhatsApp (EN):"} 00442035827999
              </li>
              <li>
                {locale === "ar" ? "واتساب (AR):" : "WhatsApp (AR):"} 00447724022466
              </li>
            </ul>
          </div>
        </ContactCard>

        {/* 3. PHONE CALL CARD */}
        <ContactCard
          label={labelLiveTalk}
          size={24}
          Ricons={FaPhoneAlt}
          Heading={headingCallNow}
          text="344 Grays Inn Rd,  London, England, WC1X 8BP"
          link="./"
        >
          <div className="text-sm text-gray-600">
            <ul>
              <li>{locale === "ar" ? "الهاتف المتحرك" : "Mobile"}: 442035827999</li>
              <li>{locale === "ar" ? "الخط الأرضي" : "Landline"}: 00442036036593</li>
            </ul>
          </div>
        </ContactCard>

        {/* 4. VISIT US CARD */}
        <ContactCard
          label={labelVisitOffice}
          size={24}
          Ricons={FaMapMarkerAlt}
          Heading={headingVisitUs}
          link="https://www.google.com/maps/place/344+Grays+Inn+Rd,+London+WC1X+8BX,+UK/@51.5297723,-0.1226215,440m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48761b38dc7021e9:0xb35eda9a375cae5d!8m2!3d51.529769!4d-0.1200466!16s%2Fg%2F11c5pw6dvs?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
        >
          <p className="text-sm text-gray-600">
            {inPersonSupport}
          </p>
        </ContactCard>

      </div>
    </div>
  );
}
