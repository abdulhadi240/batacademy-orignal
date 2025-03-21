'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const Inputs = ({locale}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>
      <div className={`flex justify-center  mt-6 `}>
        <div className={`flex items-center px-2 py-1 bg-white rounded-full w-full max-w-xl ${locale === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          <input 
            type="text" 
            className={`p-2 text-sm w-full ${locale === 'ar' ? 'text-right' : 'text-left'} rounded-full outline-none focus:ring-0 focus:border-none`} 
            placeholder={locale === 'ar' ? 'البحث عن دورة' : 'Search for a course'} 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <Link href={`/${locale}/search_course?type=1`} >
            <div className="flex items-center justify-center h-10 w-10 text-white rounded-full bg-primary">
              <FaSearch size={14}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Inputs