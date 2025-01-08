"use client";

import React from 'react';

import Sarch from '@/commme/sarch/sarch';
import Diplomacatagery from '@/commme/cardcetagery/Diplomacetogory/page';
import Diplomacard from '@/commme/diplomacard/page';
import HeaderSection from '@/components/HeaderSection';

const Diplomacourse = () => {
  return (
    <div className='bg-gray-200'>
      <HeaderSection />
      <div className='flex flex-col md:flex-row'>
        <div className='rounded md:w-1/4 hidden md:block'>
          <Diplomacatagery />
        </div>
        <div className='bg-gray-200 md:w-3/4'>
          <div className='bg-white mt-4 rounded mx-4 md:mx-6 mb-2 p-4'>
            <Sarch />
          </div>
          <div className='bg-white mt-4 rounded mx-4 md:mx-6 mb-2 p-4'>
            <Diplomacard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diplomacourse;
