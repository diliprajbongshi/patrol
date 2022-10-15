import React from 'react'

const Blog = () => {
  return (
      <section className=' bg-[#F0F0F0] pt-[100px] pb-[110px] ' >
          <div className='max-w-container mx-auto flex justify-between  '>
              <div className="w-[339px] group " style={{ background: "url(images/blog1.png)" }}>
                  <div className='h-full w-full bg-darklight py-16	px-14	'>
                      <h4 className='font-pop font-bold text-2xl text-white group-hover:text-primary'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-halfwhite px-8 py-3 mt-7 border border-solid border-halfwhite hover:bg-transparent hover:border-white ease-linear duration-300">Read more</a>
                  </div>
              </div>
              <div className="w-[339px] group " style={{ background: "url(images/blog2.png)" }}>
                  <div className='h-full w-full bg-darklight py-16	px-14	'>
                      <h4 className='font-pop font-bold text-2xl text-white group-hover:text-primary'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-halfwhite px-8 py-3 mt-7 border border-solid border-halfwhite hover:bg-transparent hover:border-white ease-linear duration-300">Read more</a>
                  </div>
              </div>
              <div className="w-[339px] group" style={{ background: "url(images/blog3.png)" }}>
                  <div className='h-full w-full bg-darklight py-16	px-14	'>
                      <h4 className='font-pop font-bold text-2xl text-white group-hover:text-primary'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                      <a href="#" className="inline-block font-pop font-semibold text-white	text-base bg-halfwhite px-8 py-3 mt-7 border border-solid border-halfwhite hover:bg-transparent hover:border-white ease-linear duration-300">Read more</a>
                  </div>
              </div>
             
          </div>
    </section>
  )
}

export default Blog