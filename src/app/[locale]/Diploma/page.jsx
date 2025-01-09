import fetchData from '@/actions/server';
import HeaderSection from '@/components/HeaderSection';
import Programs from '@/components/Programs'
import React from 'react'

const page = async ({params}) => {
  const category_special = await fetchData(`${process.env.BACKEND_URL}/specializations_categories`,`${params.locale}`);
  console.log(category_special);
  
  return (
    <div>
      <HeaderSection params={params.locale}/>
      <Programs params={null} data={null} city={null} specialization={null} SpecializationCategory={category_special} category={null}/>

    </div>
  )
}

export default page