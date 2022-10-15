import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
const Navber = () => {
    let [open,setOpen] = useState(false);

    let handleopen = ()=>{
        setOpen(!open);
    }


    useEffect(()=>{
        if (window.innerWidth > 768){
            setOpen(true);
        }
        function screenResize(e){
            console.log(window.innerWidth)
            if (window.innerWidth > 768) {
                setOpen(true);
            }else{
                setOpen(false);
            }
        }
      window.addEventListener("resize",screenResize)
    },[]);

  return (
      <nav className='bg-primary py-7 relative'>
          <div className='max-w-container mx-auto px-2.5 md:px-0'> 
            <div className='md:flex'>
                  <div className='md:w-1/5	'>
                      <picture>
                          <img src="images/logo.png" />
                      </picture>
                  </div>
                  <button
                     onClick={handleopen}
                      className='block md:hidden absolute top-9 right-2.5 text-2xl text-white' 
                  >
                      <FaBars/>
                  </button>
                  {open &&
                      <div div className='md:w-4/5  	md:flex items-center justify-end'>
                          <ul className='font-pop  font-semibold	text-base text-white flex flex-col md:flex-row md:gap-x-12 gap-y-1.5  md:gap-y-0  py-1.5'>
                              <li>
                                  <a href="#">Home</a>
                              </li>
                              <li>
                                  <a href="#">About</a>
                              </li>
                              <li>
                                  <a href="#">Service</a>
                              </li>
                              <li>
                                  <a href="#">Gallery</a>
                              </li>
                              <li>
                                  <a href="#">Blog</a>
                              </li>
                          </ul>
                          <a href="#" className="inline-block font-pop font-semibold text-white	text-base border border-solid border-white px-8 py-3 md:ml-16">CONTACT</a>
                      </div>
                  }
                 
            </div>
       </div>
    </nav>
  );
}

export default Navber