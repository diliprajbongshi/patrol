import React from 'react'

const Company = () => {
  return (
      <section className='py-24 bg-[#F0F0F0]'>
          <div className='max-w-container mx-auto'>
              <div className='flex'>
                  <div className='w-2/5 bg-primary pt-[100px] pb-[100px] pl-[70px]'>
                      <h2 className='font-pop font-bold text-white text-4xl leading-[54px] w-[262px]'>Learn more about our company</h2>
                  </div>
                  <div className='w-3/5 flex justify-center items-center' style={{ background: "url(images/company.png)" }}>
                      <a href="#" className="inline-block font-pop font-semibold text-primary	text-base bg-white px-8 py-3 mt-7 border border-solid  hover:bg-transparent hover:border-white hover:text-white ease-linear duration-300">Learn More</a>
                  </div>
                
              </div>
          </div>
    </section>
  )
}

export default Company