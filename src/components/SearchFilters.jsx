import React from "react";

const SearchFilters = ({ locale }) => {
  // Translation object for different locales
  const translations = {
    en: {
      select: "Select",
      month: "Month",
      year: "Year",
      category: "Category",
      subject: "Subject",
      search: "Search",
    },
    ar: {
      select: "اختر",
      month: "شهر",
      year: "سنة",
      category: "الفئة",
      subject: "الموضوع",
      search: "بحث",
    },
  };

  // Get translations based on the current locale
  const t = translations[locale] || translations.en;

  return (
    <div className="w-[700px] shadow-xl rounded-xl">
      <div className="grid grid-cols-3 gap-4 p-3 sm:flex sm:justify-center sm:gap-4 sm:p-4 rounded-xl">
        <select defaultValue={t.select} className="p-2 border border-gray-300 rounded-lg w-28">
          <option>{t.select}</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>{t.month}</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>{t.year}</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>{t.category}</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>{t.subject}</option>
        </select>
        <button className="px-6 py-2 text-white bg-blue-900 rounded-lg">
          {t.search}
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
