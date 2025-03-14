"use client";
import { useState } from "react";
import SpecializationCard from "./SpecializationCard";

const SpecializationSection = ({ data, locale }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(data[0].id); // Initially select the first menu item
  const [showAll, setShowAll] = useState(false);
  const [number, setNumber] = useState(6);

  const handleMenuItemClick = (id) => {
    setSelectedMenuItem(id);
  };

  const handleShowAllClick = () => {
    if (showAll) {
      setNumber(6);
    } else {
      setNumber(data.length);
    }
    setShowAll(!showAll);
  };

  const selectedItem = data.find((item) => item.id === selectedMenuItem);

  return (
    <section className="py-16">
      <div className="container">
        {/* Title and Description */}
        <h2 className="text-2xl font-bold text-center sm:text-3xl">
          {locale === "en" ? "Courses" : "الدورات"}{" "}
          <span className="text-red-600">
            {locale === "en" ? "By Specialization" : "حسب التخصص"}
          </span>
        </h2>
        <div className="flex justify-center dark:text-white">
          <p className="mt-4 text-sm hidden sm:block sm:text-base w-full p-3 sm:p-0 text-center text-gray-500 dark:text-white sm:w-[800px] items-center">
            {locale === "en"
              ? "The British Academy for Training and Development differs from other companies operating in the same field because it is a British-European company with excellence and there are specialized cadres with great practical experience..."
              : "تتميز الأكاديمية البريطانية للتدريب والتطوير عن الشركات الأخرى العاملة في نفس المجال لأنها شركة بريطانية-أوروبية بالتميز ولديها كوادر متخصصة ذات خبرة عملية كبيرة..."}
          </p>
        </div>

        {/* Main Layout - Side Menus and Card Grid */}
        <div className="md:mx-10 md:flex-row">
          <div className="md:flex md:flex-row md:justify-between gap-4 mx-1 mt-10 ">
            {/* Left Menu */}
            <div className="space-y-1 hidden md:block border-r-[#111F51] border-r-2">
              {data.slice(0, data.length / 2).map((item) => (
                <SideMenuItem
                  key={item.id}
                  title={item.name}
                  active={item.id === selectedMenuItem}
                  onClick={() => handleMenuItemClick(item.id)}
                />
              ))}
            </div>
            <div className="">
              <div className="space-y-1 md:hidden text-center flex flex-col gap-1 justify-center items-center border-r-[#111F51] border-r-2">
                {data.slice(0, number).map((item) => (
                  <SideMenuItemMobile
                    key={item.id}
                    title={item.name}
                    active={item.id === selectedMenuItem}
                    onClick={() => handleMenuItemClick(item.id)}
                  />
                ))}
                {data.length > 6 && (
                  <h1
                    onClick={handleShowAllClick}
                    className="text-xs font-bold text-primary underline"
                  >
                    {showAll
                      ? locale === "en"
                        ? "Show Less"
                        : "عرض أقل"
                      : locale === "en"
                      ? "Show All"
                      : "عرض الكل"}
                  </h1>
                )}
              </div>
            </div>

            {/* Center - Grid of Cards */}
            <div className="hidden gap-5 mt-2 sm:grid sm:grid-cols-2 md:grid-cols-4">
              {selectedItem.specializations.map((title, index) => (
                <SpecializationCard key={index} title={title} locale={locale}/>
              ))}
            </div>

            {/* Right Menu */}
            <div className="space-y-1 hidden md:block border-r-[#111F51] border-r-2">
              {data.slice(data.length / 2, data.length).map((item) => (
                <SideMenuItem
                  key={item.id}
                  title={item.name}
                  active={item.id === selectedMenuItem}
                  onClick={() => handleMenuItemClick(item.id)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center sm:hidden ">
            <p className="mt-4 text-[8px] sm:text-base w-full p-3 sm:p-0 text-center text-gray-500 sm:w-[800px] items-center">
              {locale === "en"
                ? "The British Academy for Training and Development differs from other companies operating in the same field because it is a British-European company with excellence and there are specialized cadres with great practical experience..."
                : "تتميز الأكاديمية البريطانية للتدريب والتطوير عن الشركات الأخرى العاملة في نفس المجال لأنها شركة بريطانية-أوروبية بالتميز ولديها كوادر متخصصة ذات خبرة عملية كبيرة..."}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 mt-10 md:hidden">
              {selectedItem?.specializations.map((title, index) => (
                <SpecializationCard key={index} title={title} locale={locale}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Side Menu Item Component
const SideMenuItem = ({ title, active, onClick }) => {
  return (
    <div
      className={`sm:w-56 w-44  h-auto px-1 py-2 text-[10px] text-center items-center sm:text-sm font-light cursor-pointer ${
        active ? "bg-[#152765] text-white" : "bg-gray-100 text-gray-800"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const SideMenuItemMobile = ({ title, active, onClick }) => {
  return (
    <div
      className={`w-full text-center px-4 py-2 flex justify-center cursor-pointer ${
        active ? "bg-[#152765] text-white" : "bg-gray-100 text-gray-800"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SpecializationSection;
