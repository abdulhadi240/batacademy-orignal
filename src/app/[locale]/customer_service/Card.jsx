import React from 'react'

const Card = ({title , children , Icon , size}) => {
  return (
    <div className='w-64 h-auto mt-5 bg-white border-[1px] rounded-2xl shadow-md'>
        <div className='w-64 h-28 flex flex-col justify-center rounded-t-2xl items-center gap-3 border-b-[1px] text-white bg-gradient-to-r from-primary via-primary/95 to-primary/90'>
            <Icon size={size}/>
            <h1>{title}</h1>
        </div>
        {children}
    </div>
  )
}

export default Card