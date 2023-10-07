import React from 'react'

const ServiceHeader = ({name, desc}) => {
  return (
    <div className='flex_col_mid gap-4 w-full min-h-[60%] py-10 bg-black/70 rounded-2xl rounded-t-none'>
        <h1 className='text-4xl font-bold text-center text-white md:text-8xl'>
            {name}
        </h1>
        <p className='text-xl max-w-3xl font-normal text-center text-white md:text-2xl'>
            {desc}
        </p>
    </div>
  )
}

export default ServiceHeader