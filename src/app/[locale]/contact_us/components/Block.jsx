import Image from 'next/image';
import React from 'react';

const Block = ({ Icon, title, text, isArabic }) => {
  return (
    <div
      className={` items-center gap-4 mt-4 dark:text-black ${
        isArabic ? ' flex flex-row-reverse' : 'flex flex-row'
      }`}
    >
      <div>
        <Icon size={20} />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-xl'>{title}</h1>
        <p className='text-xs max-w-56'>{text}</p>
      </div>
    </div>
  );
};

export default Block;