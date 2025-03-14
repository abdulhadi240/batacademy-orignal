import fetchData from '@/actions/server';
import React from 'react'
import Consulting from './Consulting';

const page = async ({params}) => {
  const {locale} = params
    const category = await fetchData(`/consultancy`, locale);
    const blogs = await fetchData(`/post?page=12`, locale);
    const consultancy = await fetchData(`/consultancy-services`, locale);
  return (
    <div>
      <Consulting consultancys={consultancy} blogss={blogs}  categorys={category}  params={params}/>
    </div>
  )
}

export default page