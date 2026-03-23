import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";

const Nav2 = () => {
  return (
    <nav className="flex flex-row justify-center items-center text-center gap-5 mb-6 md:mb-10 w-full">
      
      <div className="flex items-center gap-2 md:gap-6 bg-[#8f8f8b] rounded-4xl px-4 md:px-6 py-2 md:py-3 w-[1157px] h-[87.93px] max-w-[1157px]">
        <Link to='/dashboard' className="shrink-0">
          <img src={Logo} alt="Logo" className='w-[80px] md:w-[100px] lg:w-[120px] h-auto p-2' />
        </Link>

        <div className='relative items-center flex flex-1 mx-2 md:mx-6 max-w-[510px]'>
          <CiSearch className='absolute left-[10px] text-[#F5F5F0]' />
          <input 
            type="text" 
            placeholder="Search..."
            className="bg-[#8f8f8b] pr-[10px] pl-[32px] py-[6px] rounded-full w-full border border-2 border-[#b5b5b0] text-sm focus:outline-none focus:border-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <Link to='/wallpapers' className="hover:text-white transition-colors">Explore</Link>
            <Link to='' className="hover:text-white transition-colors">Saved</Link>
            <Link to='' className="hover:text-white transition-colors">Library</Link>
          </div>

          <button className="bg-[#f5f5f0] text-black px-3 md:px-4 py-1 rounded-full font-medium text-xs md:text-sm active:scale-95 transition-transform">
            Create
          </button>
        </div>
      </div>

      
      <Link to='/profile' className="flex items-center justify-center shrink-0">
        <img
          src="./public/Frame 130.svg"
          alt="profile"
          className="w-[59px] h-[59px] rounded-full object-cover"
        />  
      </Link>
        
    </nav>
  )
}

export default Nav2