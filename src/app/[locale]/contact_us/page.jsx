"use client";
import React, { useState } from "react";
import Block from "./components/Block"; // Adjust import path as needed
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import HeaderSection from "@/components/HeaderSection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page({ params }) {
  const locale = params?.locale || "en";
  const isArabic = locale === "ar";

  const callUsText = isArabic ? "اتصل بنا" : "Call us";
  const locationText = isArabic ? "الموقع" : "Location";
  const phoneText = isArabic ? "الهاتف" : "Phone";
  const emailText = isArabic ? "البريد الإلكتروني" : "Email";
  const contactNow = isArabic ? "تواصل الآن" : "CONTACT NOW";
  const formDescription = isArabic
    ? "هذا نص تجريبي باللغة العربية لتوضيح وصف مختصر."
    : "Feel free to reach out to us using the form below or visit our locations.";

  const namePlaceholder = isArabic ? "الاسم" : "Name";
  const emailPlaceholder = isArabic ? "البريد الإلكتروني" : "Email";
  const phonePlaceholder = isArabic ? "رقم الهاتف" : "Phone";
  const messagePlaceholder = isArabic ? "رسالة" : "Message";
  const submitButton = isArabic ? "إرسال" : "Submit";

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("https://batd.website12.help/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message || "Form submitted successfully!");
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.failed("Error Submitted Form!");
      }
    } catch (error) {
      toast.failed("Error Submitted Form!");
    }

    setLoading(false);
  };

  return (
    <>
      <HeaderSection params={params.locale} />
      <div className={`${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <div className="bg-[#DEEEFF]  px-4 sm:px-10 flex flex-col sm:gap-56 gap-24 sm:flex-row w-full h-auto sm:h-auto">
          {/* Left Column */}
          <div className={`flex flex-col mt-8 ${isArabic ? "items-end" : "items-start"}`}>
            <Block title={callUsText} Icon={FaWhatsapp} 
              text={isArabic 
                ? "واتساب (EN): +447443269723 واتساب (AR): +44 7724022466" 
                : "WhatsApp (EN): +447443269723 WhatsApp (AR): +44 7724022466"} 
              isArabic={isArabic} 
            />
            <Block title={locationText} Icon={FaMapMarkerAlt} 
              text={isArabic 
                ? "العنوان 1: الطابق السادس، FC200، 2 Lakeside Dr، لندن NW10 7FQ العنوان 2: جناح 702 Crown House، North Circular Road، لندن NW10 7PN"
                : "Address 1: 6th Floor, FC200, 2 Lakeside Dr, London NW10 7FQ Address 2: Suite 702 Crown House, North Circular Road, London, NW10 7PN"} 
              isArabic={isArabic} 
            />
            <Block title={phoneText} Icon={FaPhoneAlt} text={"+442035827999"} isArabic={isArabic} />
            <Block title={emailText} Icon={MdOutlineEmail} text={"info@batdacademy.org.uk"} isArabic={isArabic} />
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full mt-8 sm:w-[450px] bg-white dark:text-black shadow-lg p-6 h-auto sm:h-[490px]">
            <h1 className="mb-4 text-2xl font-bold">{contactNow}</h1>
            <p className="mb-4 text-sm">{formDescription}</p>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder={namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 ${isArabic ? "text-right" : ""}`}
                  required
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 ${isArabic ? "text-right" : ""}`}
                  required
                />
              </div>
              {/* Phone Input */}
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder={phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 ${isArabic ? "text-right" : ""}`}
                  required
                />
              </div>
              {/* Message Input */}
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder={messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full h-24 py-2 border-b border-gray-300 resize-none focus:outline-none focus:border-blue-500 ${isArabic ? "text-right" : ""}`}
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Submitting..." : submitButton}
              </button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-sm text-gray-700">{responseMessage}</p>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 w-full px-4 sm:px-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isArabic ? "موقعنا" : "Our Location"}
          </h2>
          <div className="w-full h-[400px]">
          <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.689273037377!2d-0.2868876!3d51.5375068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487612204390eae1%3A0x4c0cebb17b210751!2sAcentar%20Ltd!5e0!3m2!1sen!2suk!4v1708551234567" 
    width="100%" 
    height="450" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>

          </div>
        </div>
      </div>
    </>
  );
}
