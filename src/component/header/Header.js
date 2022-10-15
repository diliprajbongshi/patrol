import React from 'react'
import { AiFillMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
const Header = () => {
  return (
    <header className='bg-black py-3.5 border-b-2 border-solid border-yellowborder'>
      <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='sml:flex'>
          <div className='sml:w-9/12 sml:flex'>
            <p className="font-pop font-normal text-xs relative pl-6 text-white after:absolute after:top-0 after:right-[-28px] after:w-0.5 after:h-full after:content-[''] sml:after:bg-yellowborder">
              <AiFillMail className='absolute left-0 top-0 text-lg'/> mail@yourcompany.com</p>
            <p className='font-pop font-normal text-xs relative pl-6 text-white sml:ml-14 my-2.5 sml:my-0'><FiPhoneCall className='absolute left-0 top-0 text-lg' />+896 120 5889 (Toll free)</p>
          </div>
          <div className='sml:w-3/12 flex sml:justify-end gap-x-5'>
            <FiFacebook className='text-white'/>
            <AiOutlineTwitter className='text-white'/>
            <GrLinkedinOption className='text-white'/>
            <AiFillInstagram className='text-white'/>
            </div>
        </div>
      </div>
      
      </header>
  )
}

export default Header