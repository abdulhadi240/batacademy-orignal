import fetchData from '@/actions/server';
import React from 'react'
import CitiesPage from './CitiesPage';

const page = async ({params}) => {
 const data = await fetchData(`/city`, params.locale);
  return (
    <div>
        <CitiesPage data={data} params={params}/>
    </div>
  )
}

export default page