'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from 'react-toastify';

const Form = ({ text, params }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.failed("Error Submitted Form!");
      }
    } catch (error) {
      toast.failed("Error Submitted Form!");
    }
  };
  return (
    <div>
      {/* Contact Form */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            {params === 'ar' ? "تواصل معنا" : "Get in Touch"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name and Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{params === 'ar' ? "الاسم الكامل" : "Full Name"}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={params === 'ar' ? "text-right" : ""}
                  placeholder={params === 'ar' ? "محمد علي" : "Alex Johnson"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{params === 'ar' ? "البريد الإلكتروني" : "Email"}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={params === 'ar' ? "text-right" : ""}
                  placeholder={params === 'ar' ? "mohammed@example.com" : "alex@example.com"}
                  required
                />
              </div>
            </div>
            {/* Phone and Consulting */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">{params === 'ar' ? "رقم الهاتف" : "Phone Number"}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={params === 'ar' ? "text-right" : ""}
                  placeholder={params === 'ar' ? "+971 50 123 4567" : "+1 (555) 123-4567"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consulting">{params === 'ar' ? "اسم الاستشارة" : "Consulting Name"}</Label>
                <Input
                  id="consulting"
                  name="consulting"
                  type="text"
                  value={text}
                  disable
                  className={params === 'ar' ? "text-right bg-gray-200" : "bg-gray-200"}
                  placeholder={params === 'ar' ? "استشارة الأعمال" : "Business Consulting"}
                />
              </div>
            </div>
            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">{params === 'ar' ? "الرسالة" : "Message"}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={params === 'ar' ? "text-right" : ""}
                placeholder={
                  params === 'ar'
                    ? "يرجى تقديم بعض التفاصيل حول ما تريد مناقشته..."
                    : "Please provide some details about what you'd like to discuss..."
                }
                required
              />
            </div>
            <Button type="submit" className="w-full text-white">
              {params === 'ar' ? "طلب استشارة" : "Request Consultation"}
            </Button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </section>
    </div>
  );
};

export default Form;