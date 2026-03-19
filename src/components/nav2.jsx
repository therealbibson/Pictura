import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Nav2 = () => {
  return (
    <nav className="flex items-center justify-between bg-[#8f8f8b] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-10 w-full max-w-full">
        
        {/* Logo - Smaller on mobile */}
        <Link to='/dashboard' className="shrink-0">
            <img src={Logo} alt="Logo" className='w-[80px] md:w-[100px] lg:w-[120px] h-auto p-2' />
        </Link>

        {/* Search Bar - Fluid width with a max-cap */}
        <div className='relative items-center flex flex-1 mx-2 md:mx-6 max-w-[510px]'>
            <CiSearch className='absolute left-[10px] text-[#F5F5F0]' />
            <input 
              type="text" 
              placeholder="Search..."
              // w-full makes it fluid; hidden sm:inline-block for the longer placeholder
              className="bg-[#8f8f8b] pr-[10px] pl-[32px] py-[6px] rounded-full w-full border border-2 border-[#b5b5b0] text-sm focus:outline-none focus:border-white transition-all"
            />
        </div>

        {/* Desktop Links & Action Buttons */}
        <div className="flex items-center gap-2 md:gap-6">
          
          {/* Navigation Links - Hidden on Mobile/Tablet to avoid clutter */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <Link to='' className="hover:text-white transition-colors">Explore</Link>
            <Link to='/wallpapers' className="hover:text-white transition-colors">Feed</Link>
            <Link to='' className="hover:text-white transition-colors">Library</Link>
          </div>

          {/* Create Button - Smaller text/padding on mobile */}
          <button className="bg-[#f5f5f0] text-black px-3 md:px-4 py-1 rounded-full font-medium text-xs md:text-sm active:scale-95 transition-transform">
            Create
          </button>

          {/* User Icon - Proportional scaling */}
          <FaUserCircle className='w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px] text-[#f5f5f0] cursor-pointer' />
        </div>
        
    </nav>
  )
}

export default Nav2