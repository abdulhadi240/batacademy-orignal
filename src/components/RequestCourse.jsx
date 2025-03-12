'use client'
import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineBook } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestCourse = ({ locale }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.endsWith('@gmail.com')) {
        toast.error(locale === 'en' ? 'Please enter a valid Gmail address.' : 'يرجى إدخال بريد جيميل صالح.');
        return;
    }

    const formBody = new URLSearchParams();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('phone', formData.phone);
    formBody.append('message', formData.message);

    try {
        const response = await fetch('https://batd.website12.help/api/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success(locale === 'en' ? 'Form submitted successfully!' : 'تم إرسال النموذج بنجاح!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
            toast.error(result.message || (locale === 'en' ? 'Failed to submit form. Try again.' : 'فشل في إرسال النموذج. حاول مرة اخرى'));
        }
    } catch (error) {
        toast.error(locale === 'en' ? 'Something went wrong.' : 'حدث خطأ ما');
    }
};


  return (
    <section className="bg-[#152765] text-white py-24 px-4 relative rounded-lg">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="flex justify-center text-3xl">
            {locale === 'en' ? 'Request Course' : 'طلب دورة'}
          </h2>
          <p className="flex justify-center text-white">
            {locale === 'en' ? 'You can contact us for a special course' : 'يمكنك الاتصال بنا للحصول على دورة خاصة'}
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className={`items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineUser className="mr-2 text-white" size={24} />
                <input
                  type="text"
                  name="name"
                  placeholder={locale === 'en' ? 'Full Name' : 'الاسم الكامل'}
                  className={`w-full py-2 bg-transparent border-0 placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={`items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineMail className="mr-2 text-white" size={24} />
                <input
                  type="email"
                  name="email"
                  placeholder={locale === 'en' ? 'Gmail (e.g., example@gmail.com)' : 'جيميل (مثال: example@gmail.com)'}
                  className={`w-full py-2 bg-transparent border-0 placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className={`items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlinePhone className="mr-2 text-white" size={24} />
                <input
                  type="text"
                  name="phone"
                  placeholder={locale === 'en' ? 'Mobile' : 'رقم الهاتف'}
                  className={`w-full py-2 bg-transparent border-0 placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={`items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineBook className="mr-2 text-gray-300" size={24} />
                <input
                  type="text"
                  name="message"
                  placeholder={locale === 'en' ? 'Course Name' : 'اسم الدورة'}
                  className={`w-full py-2 bg-transparent border-0 placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="w-full p-2 mt-5 text-white bg-[#B12E33] rounded-lg">
              {locale === 'en' ? 'Send' : 'إرسال'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestCourse;
