// components/SearchForm.js
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';

export default function SearchForm({ locale }) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const isArabic = locale === 'ar';

  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg dark:bg-black`} dir={dir}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Search bar */}
        <div className='flex gap-2'>
          <div className="flex items-center w-full bg-gray-100 border rounded-md dark:text-black">
            <div className='dark:text-black'>
              <AiOutlineSearch size={25}/>
            </div>
            <input
              type="text"
              placeholder={isArabic ? "ابحث عن دورتك" : "Find Your Course"}
              className="w-full p-1 bg-gray-100 rounded-md focus:outline-none"
            />
          </div>
          <button className="flex items-center justify-between gap-4 py-1 px-2 text-white bg-[#152765] rounded-md ">
            <div>{isArabic ? 'بحث' : 'Search'}</div>
          </button>
        </div>

        {/* Year and Month fields */}
        <div className='flex gap-2'>
          {/* Year Field */}
          <div className="flex items-center w-full bg-gray-100 space-x-2 border-[1px]">
            <input
              type="number"
              placeholder={isArabic ? "السنة" : "Year"}
              className="w-full p-2 bg-gray-100 rounded-md dark:text-black placeholder:text-black"
              min="1900"
              max="2100"
            />
            <button className="p-2 rounded-md dark:text-black">
              <AiOutlineCalendar size={20} />
            </button>
          </div>

          {/* Month Field */}
          <div className="flex items-center w-full bg-gray-100 space-x-2 border-[1px]">
            <select className="w-full p-2 bg-gray-100 rounded-md placeholder:text-black dark:text-black">
              <option value="" disabled selected>{isArabic ? "الشهر" : "Month"}</option>
              {isArabic ? 
                [<option key="1" value="1">يناير</option>,
                 <option key="2" value="2">فبراير</option>,
                 // ... Add other months in Arabic
                 <option key="12" value="12">ديسمبر</option>] 
                : 
                [<option key="1" value="1">January</option>,
                 <option key="2" value="2">February</option>,
                 // ... Add other months in English
                 <option key="12" value="12">December</option>]
              }
            </select>
          </div>
        </div>

        {/* Dropdowns */}
        <div className='grid grid-cols-2 gap-2'>
          {/* Subject dropdown */}
          <select className="p-2 bg-gray-100 border dark:text-black">
            <option>{isArabic ? "الموضوع" : "Subject"}</option>
            {/* Add more options here */}
          </select>

          {/* Language dropdown */}
          <select className="p-2 bg-gray-100 border dark:text-black">
            <option>{isArabic ? "اللغة" : "Language"}</option>
            {/* Add more options here */}
          </select>

          {/* Category dropdown */}
          <select className="p-2 bg-gray-100 border dark:text-black">
            <option>{isArabic ? "الفئة" : "Category"}</option>
            {/* Add more options here */}
          </select>

          {/* Place dropdown */}
          <select className="p-2 bg-gray-100 border dark:text-black">
            <option>{isArabic ? "المكان" : "Place"}</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
    </div>
  );
}