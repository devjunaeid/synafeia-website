import React from 'react';
import Link from 'next/link';

const ContactSlim = () => {
  return (
    <div className='flex items-center justify-evenly w-full bg-black p-2 rounded-xl my-6 md:my-10 md:max-w-3xl md:min-h-[100px]'>
        <p className='text-white text-sm font-medium md:text-2xl md:font-bold'>Ready to start your project?</p>
        <Link href={"/contact"} className='btn_link_border_sm'>Contact Us!</Link>
    </div>
  )
}

export default ContactSlim