import React from 'react'

const Banner = () => {
  return (
      <div style={{ background:"url(images/banner.png)" }}>
          <div className='h-full w-full bg-darklight py-24 md:py-64'>
              <div className='max-w-container mx-auto px-2.5 md:px-0'>
                  <h1 className='font-pop font-bole text-[32px] md:text-[64px] text-white md:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
                  <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-primary px-8 py-3 mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300">CONTACT</a>
              </div>
          </div>
      </div>
  )
}

export default Banner