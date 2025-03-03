import React from 'react'
import { cn } from '@/lib/utils';
import { FcGoogle } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
const JobCard = ({ job }) => {
    return (
      <Link href={'job_detail'}>
      <div className={`p-6  transition-shadow rounded-md shadow-md ${job.type === 'Full-Time' ? "bg-gradient-to-r from-yellow-50" : "bg-white"}  hover:shadow-lg`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold md:text-xl h-10 mb-3">{job.title}</h3>
          <span className={`text-center py-1 rounded-md  text-xs md:text-sm ${
            job.type === "Full-Time" ? "bg-green-100 w-20 text-green-600" : "bg-yellow-100 w-24 text-yellow-600"
          }`}>
            {job.type}
          </span>
        </div>
        <p className="mt-2 text-gray-600">Salary: {job.salary}</p>
        <div className='flex items-center gap-2 mt-2'>
          <div className='flex items-center w-auto h-auto p-2 bg-gray-50'>
            <FcGoogle size={30}/>
          </div>
          <div className='flex flex-col '>
        <p className="text-gray-500 text-md">{job.company}</p>
        <div className='flex gap-1'>
          <CiLocationOn/>
        <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        </div>
        </div>
        </div>
        </Link>
      
    );
  };
  
  export default JobCard;
  