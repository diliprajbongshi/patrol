import React from 'react'

const Service = () => {
  return (
    <section className='mt-7'>
        <div className='flex flex-wrap'>
              <div className='w-2/4 flex flex-col justify-center items-end '>
                  <h3 className='font-pop font-bold text-[64px] mr-36'> Our Service</h3>
                  <p className='font-pop font-medium text-base w-[380px] mr-36'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
              <div className='w-2/4' style={{ background: "url(images/ser3.png)" }}>
                  <div className=' bg-darklight py-[130px] px-[50px] '>
                      <h3 className='font-pop font-bold text-[30px] text-white'>Modern natural oil and gas refineries.</h3>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-primary px-8 py-3 mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300">CONTACT</a>
                 </div>
            </div>
              <div className='w-2/4' style={{ background: "url(images/ser2.png)" }}>
                  <div className=' bg-darklight py-[130px] px-[50px] '>
                      <h3 className='font-pop font-bold text-[30px] text-white'>Modern natural oil and gas refineries.</h3>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-primary px-8 py-3 mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300">CONTACT</a>
                 </div>
            </div>
              <div className='w-2/4' style={{ background: "url(images/ser1.png)" }}>
                  <div className=' bg-darklight py-[130px] px-[50px] '>
                      <h3 className='font-pop font-bold text-[30px] text-white'>Modern natural oil and gas refineries.</h3>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-primary px-8 py-3 mt-7 border border-solid border-primary hover:bg-transparent hover:border-white ease-linear duration-300">CONTACT</a>
                 </div>
            </div>
           
        </div>
    </section>
  )
}

export default Service