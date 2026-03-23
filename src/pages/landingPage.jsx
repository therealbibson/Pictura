import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/Rectangle 1.svg'
import Img2 from '../assets/images/Rectangle 2.svg'
import Img3 from '../assets/images/Rectangle 7.svg'
import Img4 from '../assets/images/Rectangle 9.svg'
import Img10 from '../assets/images/Rectangle 10.svg'
import Img12 from '../assets/images/Rectangle 12.svg'

const LandingPage = () => {
  return (
    <div className='text-[#F5F5F0] min-h-screen w-full pictura-bg flex flex-col overflow-x-hidden'>
      
      <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />

      <div className='flex flex-col gap-5 items-center justify-center flex-1 py-10'>
        
        <div className='flex items-center justify-start md:justify-center gap-4 md:gap-6 w-full overflow-x-auto md:overflow-visible flex-nowrap px-6 no-scrollbar'>
          {[Img4, Img1, Img10, Img3, Img10, Img12, Img2].map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="" 
              className='opacity-70 shrink-0 h-24 md:h-auto w-auto object-contain' 
            />
          ))}
        </div>

        <div className='text-Roboto px-6 text-center'>
          <h3 className='font-bold text-[28px] md:text-[34.3px] leading-tight'>
            Turn your emotions to powerful <br className='hidden md:block' /> visuals.
          </h3>
          <p className='text-[18px] md:text-[22.87px] mt-4 opacity-90'>
            Generate stunning visuals that match your vibe <br className='hidden md:block' /> instantly
          </p>
        </div>

        <Link
          to='/signup'
          className='mt-6 p-[15px] px-[35px] md:px-[40px] border border-white/30 rounded-full flex justify-center duration-300 transition-all hover:scale-[1.05] hover:text-[#ff8c42] hover:border-[#ff8c42] bg-white/5 md:bg-transparent'
        >
          Next ›
        </Link>      
      </div>
    </div>
  )
}

export default LandingPage