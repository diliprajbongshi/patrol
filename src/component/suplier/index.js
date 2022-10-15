import React from 'react'

const Suplier = () => {
  return (
      <section className='mt-[78px]'>
          <div className='max-w-container mx-auto  px-2.5 md:px-0'>
              <div className='md:flex justify-between'>
                  <div className='md:max-w-[289px]'>
                      <h2 className='font-pop font-bold text-5xl leading-[72px]'>The biggest
                          supplier on
                          the country</h2>
                  </div>
                  <div className='md:max-w-[551px] flex items-center'>
                      <p className='font-pop font-normal text-base '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                  </div>
              </div>
          </div>
          <div className='flex   flex-col md:flex-row  md:justify-between mt-5 md:mt-24'>
              <div className='md:w-[24%] mb-[20px] md:mb-[20px]'>
                <picture>
                    <img className='w-full' src="images/sup1.png" loading='lazy' />
                </picture>
            </div>
              <div className='md:w-[24%] mb-[20px] md:mb-[20px]'>
                <picture>
                      <img className='w-full' src="images/sup2.png" loading='lazy' />
                </picture>
            </div>
              <div className='md:w-[24%] mb-[20px] md:mb-[20px]'>
                <picture>
                      <img className='w-full' src="images/sup3.png" loading='lazy' />
                </picture>
            </div>
              <div className='md:w-[24%]'>
                <picture>
                      <img className='w-full' src="images/sup1.png" loading='lazy' />
                </picture>
            </div>
          
          </div>
      </section>
  )
}

export default Suplier