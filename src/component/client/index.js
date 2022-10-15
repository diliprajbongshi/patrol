import React from 'react'

const Client = () => {
  return (
      <section className='py-28	'>
          <div className='max-w-container mx-auto flex justify-between'>
              <div className='w-1/5'>
                <picture>
                    <img src='images/logo1.png' loading='lazy'/>
                </picture>
              </div>
              <div className='w-1/5'>
                <picture>
                    <img src='images/logo2.png' loading='lazy'/>
                </picture>
              </div>
              <div className='w-1/5'>
                <picture>
                    <img src='images/logo3.png' loading='lazy'/>
                </picture>
              </div>
              <div className='w-1/5'>
                <picture>
                    <img src='images/logo4.png' loading='lazy'/>
                </picture>
              </div>
          </div>
   </section>
  )
}

export default Client