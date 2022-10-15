import React from 'react'
import { AiFillMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaAddressBook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
  return (
      <section className='bg-black py-[149px] '>
        <div className='max-w-container mx-auto'>
              <div className='flex justify-between'>
                  <div className='w-[324px]'>
                    <picture>
                        <img src='images/logo.png' loading='lazy'/>
                    </picture>
                      <p className='font-pop font-normal text-[14px] relative text-white flex pt-[33px] '><AiFillMail className='mr-2 mt-[2px]'/>  mail@yourcompany.com</p>
                      <p className='font-pop font-normal text-[14px]  relative text-white flex pt-[20px] '><FiPhoneCall className='mr-2 mt-[2px]' />  +896 120 5889 (Toll free)</p>
                      <p className='font-pop font-normal text-[14px]  relative text-white flex pt-[23px] '><FaAddressBook className='mr-2 mt-[2px]' />  101 Baker Street, New York, USA, 12345</p>
                      <div className='flex  gap-x-5 mt-12 '>
                          <div className='w-[30px] h-[30px] bg-primary rounded-[50%]'>
                              <FiFacebook className='text-white   mt-[5px] ml-[5px]' />
                          </div>
                          <div className='w-[30px] h-[30px] bg-primary rounded-[50%]'>
                              <AiOutlineTwitter className='text-white mt-[5px] ml-[6px]' />
                          </div>
                          <div className='w-[30px] h-[30px] bg-primary rounded-[50%]'>
                              <GrLinkedinOption className='text-white  mt-[5px] ml-[6px]' />
                          </div>
                          <div className='w-[30px] h-[30px] bg-primary rounded-[50%]'>
                              <AiFillInstagram className='text-white  mt-[5px] ml-[6px]' />
                          </div>
                        
                      </div>
                  </div>
                  <div className='w-[173px]'>
                      <p className='font-pop font-bold text-base relative text-white mt-[40px]'>Company</p>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Home</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>About</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Service</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Gallery</h6>
                  </div>
                  <div className='w-[173px]'>
                      <p className='font-pop font-bold text-base relative text-white mt-[40px]'>Others</p>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Blog</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Contact</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Terms & Conditions</h6>
                      <h6 className='font-pop font-normal text-[14px] relative text-white mt-4'>Privacy Policy</h6>
                  </div>
                  <div className='w-[255px]'>
                      <p className='font-pop font-bold text-base relative text-white mt-[40px]'>Certificate</p>
                      <div className='flex mt-4'>
                        <picture>
                            <img src='images/cert.png'/>
                        </picture>
                        <picture className='ml-3'>
                            <img src='images/cert2.png'/>
                        </picture>
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Footer