"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Contacts from "./Contacts";
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

      {/* Banner */}
      <div className={`banner-container ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
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
                <span className="text-center text-secondary">{'Customer Service'}</span>
              </p>
              <p className="flex justify-center text-xs font-normal sm:text-sm text-primary">
                {''}
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
      <div className={`flex justify-center ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <div className="w-full sm:w-[450px] bg-white dark:text-black shadow-lg p-6 h-auto sm:h-[490px]">
          <h1 className="mb-4 text-2xl font-bold text-center">
            {'Create Ticket'}
          </h1>
          <p className="mb-4 text-sm">{"If you're experiencing any issues, please issue a support ticket, and our team will assist you as soon as possible."}</p>
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
        </div>
      </div>
    </>
  );
}
