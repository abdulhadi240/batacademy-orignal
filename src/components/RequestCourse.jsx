import Image from 'next/image';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineBook } from 'react-icons/ai';
import React from 'react';

const RequestCourse = ({ locale }) => {
  return (
    <section className="bg-[#152765] text-white py-24 px-4 relative rounded-lg">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
        
        {/* Text and Form Container */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="flex justify-center text-3xl">
            {locale === "en" ? "Request Course" : "طلب دورة"}
          </h2>
          <p className="flex justify-center text-white">
            {locale === "en" ? "You can contact us for a special course" : "يمكنك الاتصال بنا للحصول على دورة خاصة"}
          </p>

          {/* Form */}
          <form className="mt-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className={` items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineUser className="mr-2 text-white " size={24} />
                <input 
                  type="text" 
                  placeholder={locale === "en" ? "Full Name" : "الاسم الكامل"} 
                  className={`w-full py-2 bg-transparent border-0 border-white placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                />
              </div>
              <div className={` items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineMail className="mr-2 text-white" size={24} />
                <input 
                  type="email" 
                  placeholder={locale === "en" ? "Email" : "البريد الإلكتروني"} 
                  className={`w-full py-2 bg-transparent border-white placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className={` items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
            <AiOutlinePhone className="mr-2 text-white" size={24} />
                <input 
                  type="text" 
                  placeholder={locale === "en" ? "Mobile" : "رقم الهاتف"} 
                  className={`w-full py-2 bg-transparent border-white placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                />
              </div>
              <div className={` items-center w-full mb-2 border-b-2 ${locale === 'ar' ? 'flex flex-row-reverse gap-4' : 'flex'}`}>
                <AiOutlineBook className="mr-2 text-gray-300" size={24} />
                <input 
                  type="text" 
                  placeholder={locale === "en" ? "Course Name" : "رقم الهاتف"} 
                  className={`w-full py-2 bg-transparent border-white placeholder:text-white focus:outline-none ${locale === 'ar' ? 'text-right' : ''}`}
                />
              </div>
            </div>

            <button className="w-full p-2 mt-5 text-white bg-[#B12E33] rounded-lg">
              {locale === "en" ? "Send" : "إرسال"}
            </button>
          </form>
        </div>

        {/* Decorative Circles */}
        <div className=" hidden md:absolute top-4 left-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="hidden md:absolute bottom-4 right-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default RequestCourse;
