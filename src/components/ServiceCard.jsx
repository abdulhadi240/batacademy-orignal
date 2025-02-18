import React from "react";
const ServiceCard = ({ title, description, icon , locale }) => {
    return (
      <div className={`flex  p-4  bg-white rounded-lg shadow-lg w-96 ${locale === 'ar' ? 'flex-row-reverse gap-4 items-end space-x-6' : 'flex-row items-start space-x-4'} `}>
        <img src={icon} alt={title} className="w-12 h-12" />
        <div>
          <h4 className={`text-base font-bold text-gray-800 ${locale === 'ar' ? 'text-right' : ''}`}>{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    );
  };
  
export default ServiceCard